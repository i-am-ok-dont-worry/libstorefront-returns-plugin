import { CartItem } from '@grupakmk/libstorefront';

export interface OrderReturn {
    order_id: number,
    customer_id?: string,
    customer_email?: string,
    reason: string,
    comment: string,
    items: CartItem[],
    returns_id?: number,
    created_at?: string,
    status?: number,
    return_number?: string,
}


