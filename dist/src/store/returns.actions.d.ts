import { OrderReturn } from '../types';
export declare namespace OrderReturnsActions {
    const SET_ORDER_RETURNS: string;
    const setOrderReturns: (orderReturns: {
        items: OrderReturn[];
        total: number;
        start: number;
        perPage: number;
    }) => {
        type: string;
        payload: {
            items: OrderReturn[];
            total: number;
            start: number;
            perPage: number;
        };
    };
    const SET_CURRENT: string;
    const setCurrent: (orderReturn: any) => {
        type: string;
        payload: any;
    };
    const ADD_ORDER_RETURN = "order_returns";
}
