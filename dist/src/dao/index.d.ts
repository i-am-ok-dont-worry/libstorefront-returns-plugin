import { Task, TaskQueue } from '@grupakmk/libstorefront';
import { OrderReturn } from '../types';
export declare class OrderReturnsDao {
    private taskQueue;
    getOrderReturnsList({ customerId, pageSize, currentPage, sortBy, sortDir }: {
        customerId: any;
        pageSize: any;
        currentPage: any;
        sortBy: any;
        sortDir: any;
    }, token: string): Promise<Task>;
    getOrderReturn(orderReturnId: string, token: string): Promise<Task>;
    createReturn(orderReturn: OrderReturn, token: string): Promise<Task>;
    constructor(taskQueue: TaskQueue);
}
