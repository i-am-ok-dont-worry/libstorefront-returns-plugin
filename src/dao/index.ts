import { Task, TaskQueue, URLTransform } from '@grupakmk/libstorefront';
import { injectable, inject } from 'inversify';
import { OrderReturn } from '../types';
import qs from 'query-string';

@injectable()
export class OrderReturnsDao {

    public getOrderReturnsList ({ customerId, pageSize, currentPage, sortBy, sortDir }): Promise<Task> {
        const query = {
            pageSize: pageSize || 50,
            currentPage: currentPage || 0,
            ...(sortBy && { sortBy, sortDir: sortDir || 'asc' })
        };
        return this.taskQueue.execute({
            url: URLTransform.getAbsoluteApiUrl('/api/vendor/returns/' + customerId + '?' + qs.stringify(query)),
            payload: {
                method: 'GET',
                headers: { 'Content-Type': 'application/json' },
                mode: 'cors'
            },
            silent: true
        });
    }

    public getOrderReturn (orderReturnId: string): Promise<Task> {
        return this.taskQueue.execute({
            url: URLTransform.getAbsoluteApiUrl('/api/vendor/returns/single/' + orderReturnId),
            payload: {
                method: 'GET',
                headers: { 'Content-Type': 'application/json' },
                mode: 'cors'
            },
            silent: true
        });
    }

    public createReturn (orderReturn: OrderReturn): Promise<Task> {
        return this.taskQueue.execute({
            url: URLTransform.getAbsoluteApiUrl('/api/vendor/returns'),
            payload: {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                mode: 'cors',
                body: JSON.stringify(orderReturn)
            },
            silent: true
        });
    }

    public constructor(
        @inject(TaskQueue) private taskQueue: TaskQueue
    ) {}
}
