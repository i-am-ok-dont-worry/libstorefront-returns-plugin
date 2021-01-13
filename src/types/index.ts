export interface OrderReturnItem {
    item_id?: number | string,
    qty_returned?: number
}

export interface OrderReturn {
    order_id: number,
    customer_id?: string,
    customer_email?: string,
    reason: string,
    comment: string,
    items: OrderReturnItem[],
    returns_id?: number,
    created_at?: string,
    status?: OrderReturnStatus,
    return_number?: string,
}

export enum OrderReturnStatus {
    STATUS_CREATED = 1,
    STATUS_IN_PROGRESS = 2,
    DONE = 3
}
