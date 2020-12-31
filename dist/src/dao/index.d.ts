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
    }): Promise<Task>;
    getOrderReturn(orderReturnId: string): Promise<Task>;
    createReturn(orderReturn: OrderReturn): Promise<Task>;
    constructor(taskQueue: TaskQueue);
}
