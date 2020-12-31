import { createLibstorefrontModule, HookType, LibStorefront } from '@grupakmk/libstorefront';
import { LibstorefrontPlugin } from '@grupakmk/libstorefront/dist/config/types/libstorefront-plugin';
import { OrderReturnsDao } from './dao';
import { OrderReturnService } from './service';
import { orderReturnsReducer } from './store/returns.reducer';
import { OrderReturnsDefaultState } from './store/returns.default';

/**
 * Plugin provides support for fetching and creating returns.
 *
 * Return is where a customer is not satisfied with the product
 * or the deliverable, & businesses need to create a return the good, based on customer return request.
 */
export const OrderReturnsPlugin = ((libstorefront: LibStorefront) => {
    libstorefront.getIOCContainer().bind<OrderReturnsDao>(OrderReturnsDao).to(OrderReturnsDao);
    libstorefront.getIOCContainer().bind<OrderReturnService>(OrderReturnService).to(OrderReturnService);
    libstorefront.listenTo(HookType.AfterCoreModulesRegistered, (lsf: LibStorefront) => {
        lsf.registerModule(createLibstorefrontModule('orderReturns', orderReturnsReducer, OrderReturnsDefaultState));
    });
}) as LibstorefrontPlugin;
