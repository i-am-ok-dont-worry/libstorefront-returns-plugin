## Order return plugin
Plugin provides support for fetching and creating returns.

Return is where a customer is not satisfied with the product
or the deliverable, & businesses need to create a return the good, based on customer return request.

## Model
Plugin adds new type `OrderReturn` which is a following interface:
```javascript
{
    order_id: number,
    customer_id?: string,
    customer_email?: string,
    reason: string,
    comment: string,
    items: unknown[],
    return_id?: number,
    created_at?: string,
    status?: number,
    return_number?: string,
}
```

## Service
Plugin registers service `OrderReturnService` which serves as a plugin entry point.
Service exposes 3 methods:
* `getOrderReturns ({ pageSize, currentPage, sortBy, sortDir }: { pageSize?: number, currentPage?: number, sortBy?: string, sortDir?: 'asc'|'desc' } = {}): Promise<OrderReturn[]>` - Returns list of user returns
* `getSingleOrderReturn (orderReturnId: string): Promise<OrderReturn>` - Returns single return
* `createOrderReturn (orderReturn: OrderReturn): Promise<string>` - creates return on behalf of current logged-in user 

## Redux store
Plugin adds new state branch called `orderReturns` to the original Libstorefront Redux store.
Order returns branch interface is as follows:
```javascript
{
    list: {
        start: number,
        perPage: number,
        total: number,
        items: OrderReturn[]
    },
    current: OrderReturn
}
```
 
## Test plugin
Plugin can be tested in isolation. To run plugin integration test:
```shell script
npm run test:integration
```
