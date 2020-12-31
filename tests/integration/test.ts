import { LibStorefront } from '@grupakmk/libstorefront';
import { OrderReturnsPlugin } from "../../src";
import { OrderReturnService } from "../../src/service";

console.warn('Test suite initialized');

const LSF = new LibStorefront({
    plugins: [
        OrderReturnsPlugin
    ]
}, 'http://localhost:9001');

(async () => {
    // await LSF.UserService.login('test@grupakmk.pl', 'Testowe2!');
    const service = LSF.get(OrderReturnService);
    const returns = await service.createOrderReturn();
    debugger;
})();

