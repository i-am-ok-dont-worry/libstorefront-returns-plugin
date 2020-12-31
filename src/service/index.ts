import { OrderReturn } from '../types';
import { AbstractStore, LibstorefrontInnerState } from '@grupakmk/libstorefront';
import { injectable, inject } from 'inversify';
import { OrderReturnsThunks } from '../store/returns.thunks';

@injectable()
export class OrderReturnService {

    /**
     * Returns list of user returns
     * @param {number} pageSize
     * @param {number} currentPage
     * @param {string} sortBy
     * @param {asc|desc} sortDir
     */
    public getOrderReturns ({ pageSize, currentPage, sortBy, sortDir }: { pageSize?: number, currentPage?: number, sortBy?: string, sortDir?: 'asc'|'desc' } = {}): Promise<OrderReturn[]> {
        return this.store.dispatch(OrderReturnsThunks.getOrderReturns({ pageSize, currentPage, sortBy, sortDir }));
    }

    /**
     * Returns single return
     * @param {number} orderReturnId
     */
    public getSingleOrderReturn (orderReturnId: string): Promise<OrderReturn> {
        return this.store.dispatch(OrderReturnsThunks.getOrderReturn(orderReturnId));
    }

    /**
     * Creates return
     * @param {OrderReturn} orderReturn
     * @returns {Promise<string>}
     */
    public createOrderReturn (orderReturn: OrderReturn): Promise<string> {
        return this.store.dispatch(OrderReturnsThunks.createOrderReturn(orderReturn));
    }

    public constructor(@inject(AbstractStore) private store: AbstractStore<LibstorefrontInnerState>) {}
}
