import { AbstractStore, HttpStatus, IOCContainer, Logger } from '@grupakmk/libstorefront';
import { OrderReturnsDao } from '../dao';
import { OrderReturnsActions } from './returns.actions';
import { OrderReturn } from '../types';

export namespace OrderReturnsThunks {

    export const getOrderReturns = ({ pageSize, currentPage, sortBy, sortDir }) => async (dispatch, getState) => {
        try {
            const userState = IOCContainer.get(AbstractStore).getState().user;
            if (!userState.current || !userState.token) { throw new Error('Cannot fetch order returns for unauthorized used'); }
            const response = await IOCContainer.get(OrderReturnsDao).getOrderReturnsList({ customerId: userState.current.id, pageSize, currentPage, sortBy, sortDir }, userState.token);

            if (response && response.code === HttpStatus.OK) {
                const { items, total } = response.result;
                await dispatch(OrderReturnsActions.setOrderReturns({
                    items: items as OrderReturn[],
                    total,
                    perPage: pageSize,
                    start: currentPage
                }));

                return items;
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
            const userState = IOCContainer.get(AbstractStore).getState().user;
            const response = await IOCContainer.get(OrderReturnsDao).getOrderReturn(returnId, userState.token);

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
        const userState = IOCContainer.get(AbstractStore).getState().user;
        if (!userState.current || !userState.token) { throw new Error('Cannot create order returns for unauthorized used'); }
        const response = await IOCContainer.get(OrderReturnsDao).createReturn({
            ...orderReturnData,
            customer_id: userState.current.id,
            customer_email: userState.current.email,
        }, userState.token);

        return response;
    };
}
