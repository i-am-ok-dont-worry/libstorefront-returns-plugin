import { Reducer } from '@grupakmk/libstorefront/dist/src/state-management/types/reducer';
import { OrderReturnsDefaultState, OrderReturnsModuleState } from './returns.default';
import { AnyAction } from '@grupakmk/libstorefront/dist/src/state-management/types/action';
import { OrderReturnsActions } from './returns.actions';

export const orderReturnsReducer: Reducer<OrderReturnsModuleState, AnyAction> = (state: OrderReturnsModuleState, action: AnyAction) => {
    switch (action.type) {
        case OrderReturnsActions.SET_ORDER_RETURNS: {
            const { items, total, perPage, start } = action.payload;
            return {
                ...state,
                list: {
                    items: items || [],
                    start: start || 0,
                    perPage: perPage || 0,
                    total: total || 0
                }
            };
        }
        case OrderReturnsActions.SET_CURRENT: {
            return { ...state, current: action.payload };
        }
        default: { return state || OrderReturnsDefaultState };
    }
}
