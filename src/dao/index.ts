import { Task, TaskQueue, URLTransform } from '@grupakmk/libstorefront';
import { injectable, inject } from 'inversify';
import { OrderReturn } from '../types';
import qs from 'query-string';

@injectable()
export class OrderReturnsDao {

    public getOrderReturnsList ({ customerId, pageSize, currentPage, sortBy, sortDir }, token: string): Promise<Task> {
        const query = {
            pageSize: pageSize || 50,
            currentPage: currentPage || 0,
            token,
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

    public getOrderReturn (orderReturnId: string, token: string): Promise<Task> {
        return this.taskQueue.execute({
            url: URLTransform.getAbsoluteApiUrl('/api/vendor/returns/single/' + orderReturnId + '?token=' + token || ''),
            payload: {
                method: 'GET',
                headers: { 'Content-Type': 'application/json' },
                mode: 'cors'
            },
            silent: true
        });
    }

    public createReturn (orderReturn: OrderReturn, token: string): Promise<Task> {
        return this.taskQueue.execute({
            url: URLTransform.getAbsoluteApiUrl('/api/vendor/returns' + '?token=' + token),
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
