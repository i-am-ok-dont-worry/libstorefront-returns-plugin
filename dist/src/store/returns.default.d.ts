import { OrderReturn } from '../types';
export declare const OrderReturnsDefaultState: OrderReturnsModuleState;
export interface OrderReturnsModuleState {
    list: {
        start: number;
        perPage: number;
        total: number;
        items: OrderReturn[];
    };
    current: OrderReturn;
}
