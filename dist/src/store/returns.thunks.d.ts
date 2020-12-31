import { OrderReturn } from '../types';
export declare namespace OrderReturnsThunks {
    const getOrderReturns: ({ pageSize, currentPage, sortBy, sortDir }: {
        pageSize: any;
        currentPage: any;
        sortBy: any;
        sortDir: any;
    }) => (dispatch: any, getState: any) => Promise<any>;
    const getOrderReturn: (returnId: any) => (dispatch: any, getState: any) => Promise<void>;
    const createOrderReturn: (orderReturnData: OrderReturn) => (dispatch: any, getState: any) => Promise<import("@grupakmk/libstorefront").Task>;
}
