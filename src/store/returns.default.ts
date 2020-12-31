import { OrderReturn } from '../types';

export const OrderReturnsDefaultState: OrderReturnsModuleState = {
  list: {
      start: 0,
      perPage: 50,
      total: 0,
      items: []
  },
  current: null
};

export interface OrderReturnsModuleState {
    list: {
        start: number,
        perPage: number,
        total: number,
        items: OrderReturn[]
    },
    current: OrderReturn
}
