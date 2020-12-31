import { OrderReturn } from '../types';
import { AbstractStore, LibstorefrontInnerState } from '@grupakmk/libstorefront';
export declare class OrderReturnService {
    private store;
    /**
     * Returns list of user returns
     * @param {number} pageSize
     * @param {number} currentPage
     * @param {string} sortBy
     * @param {asc|desc} sortDir
     */
    getOrderReturns({ pageSize, currentPage, sortBy, sortDir }?: {
        pageSize?: number;
        currentPage?: number;
        sortBy?: string;
        sortDir?: 'asc' | 'desc';
    }): Promise<OrderReturn[]>;
    /**
     * Returns single return
     * @param {number} orderReturnId
     */
    getSingleOrderReturn(orderReturnId: string): Promise<OrderReturn>;
    /**
     * Creates return
     * @param {OrderReturn} orderReturn
     * @returns {Promise<string>}
     */
    createOrderReturn(orderReturn: OrderReturn): Promise<string>;
    constructor(store: AbstractStore<LibstorefrontInnerState>);
}
