import { OrderReturn } from '../types';

export namespace OrderReturnsActions {
    const SN_ORDER_RETURNS = 'order_returns';

    export const SET_ORDER_RETURNS = SN_ORDER_RETURNS + '/SET_ORDER_RETURNS';
    export const setOrderReturns = (orderReturns: { items: OrderReturn[], total: number, start: number, perPage: number }) => ({
        type: SET_ORDER_RETURNS,
        payload: orderReturns
    });

    export const SET_CURRENT = SN_ORDER_RETURNS + '/SET_CURRENT';
    export const setCurrent = (orderReturn) => ({
        type: SET_CURRENT,
        payload: orderReturn
    });

    export const ADD_ORDER_RETURN = SN_ORDER_RETURNS
}
