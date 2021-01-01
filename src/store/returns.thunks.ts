import { AbstractStore, HttpStatus, IOCContainer, Logger } from '@grupakmk/libstorefront';
import { OrderReturnsDao } from '../dao';
import { OrderReturnsActions } from './returns.actions';
import { OrderReturn } from '../types';

export namespace OrderReturnsThunks {

    export const getOrderReturns = ({ pageSize, currentPage, sortBy, sortDir }) => async (dispatch, getState) => {
        try {
            const customer = IOCContainer.get(AbstractStore).getState().user.current;
            if (!customer) { throw new Error('Cannot fetch order returns for unauthorized used'); }
            const response = await IOCContainer.get(OrderReturnsDao).getOrderReturnsList({ customerId: customer.id, pageSize, currentPage, sortBy, sortDir });

            if (response && response.code === HttpStatus.OK) {
                const { items, total } = response.result;
                await dispatch(OrderReturnsActions.setOrderReturns({
                    items: items as OrderReturn[],
                    total,
                    perPage: pageSize,
                    start: currentPage
                }));
            } else {
                throw new Error(`Empty list`);
            }
        } catch (e) {
            Logger.error(`Unable to fetch returns: `, 'order-returns-thunks', e.message);
            return null;
        }
    };

    export const getOrderReturn = (returnId) => async (dispatch, getState) => {
        try {
            if (!returnId) { throw new Error('Return id is undefined'); }
            const response = await IOCContainer.get(OrderReturnsDao).getOrderReturn(returnId);

            if (response && response.code === HttpStatus.OK) {
                await dispatch(OrderReturnsActions.setCurrent(response.result));
            } else {
                throw new Error('Order return not found');
            }
        } catch (e) {
            Logger.error('Unable to fetch return: ', 'order-returns-thunks', e.message);
        }
    };

    export const createOrderReturn = (orderReturnData: OrderReturn) => async (dispatch, getState) => {
        const customer = IOCContainer.get(AbstractStore).getState().user.current;
        if (!customer) { throw new Error('Cannot create order returns for unauthorized used'); }
        const response = await IOCContainer.get(OrderReturnsDao).createReturn({
            ...orderReturnData,
            customer_id: customer.id,
            customer_email: customer.email
        });

        return response;
    };
}
