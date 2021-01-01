(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define("LSFPlugin", [], factory);
	else if(typeof exports === 'object')
		exports["LSFPlugin"] = factory();
	else
		root["LSFPlugin"] = factory();
})(this, function() {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./index.ts");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./index.ts":
/*!******************!*\
  !*** ./index.ts ***!
  \******************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.OrderReturnsDefaultState = exports.OrderReturnService = exports.OrderReturnsPlugin = void 0;
var index_1 = __webpack_require__(/*! ./src/index */ "./src/index.ts");
Object.defineProperty(exports, "OrderReturnsPlugin", { enumerable: true, get: function () { return index_1.OrderReturnsPlugin; } });
var index_2 = __webpack_require__(/*! ./src/service/index */ "./src/service/index.ts");
Object.defineProperty(exports, "OrderReturnService", { enumerable: true, get: function () { return index_2.OrderReturnService; } });
var returns_default_1 = __webpack_require__(/*! ./src/store/returns.default */ "./src/store/returns.default.ts");
Object.defineProperty(exports, "OrderReturnsDefaultState", { enumerable: true, get: function () { return returns_default_1.OrderReturnsDefaultState; } });
__exportStar(__webpack_require__(/*! ./src/types */ "./src/types/index.ts"), exports);


/***/ }),

/***/ "./src/dao/index.ts":
/*!**************************!*\
  !*** ./src/dao/index.ts ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.OrderReturnsDao = void 0;
var libstorefront_1 = __webpack_require__(/*! @grupakmk/libstorefront */ "@grupakmk/libstorefront");
var inversify_1 = __webpack_require__(/*! inversify */ "inversify");
var query_string_1 = __importDefault(__webpack_require__(/*! query-string */ "query-string"));
var OrderReturnsDao = /** @class */ (function () {
    function OrderReturnsDao(taskQueue) {
        this.taskQueue = taskQueue;
    }
    OrderReturnsDao.prototype.getOrderReturnsList = function (_a) {
        var customerId = _a.customerId, pageSize = _a.pageSize, currentPage = _a.currentPage, sortBy = _a.sortBy, sortDir = _a.sortDir;
        var query = __assign({ pageSize: pageSize || 50, currentPage: currentPage || 0 }, (sortBy && { sortBy: sortBy, sortDir: sortDir || 'asc' }));
        return this.taskQueue.execute({
            url: libstorefront_1.URLTransform.getAbsoluteApiUrl('/api/vendor/returns/' + customerId + '?' + query_string_1.default.stringify(query)),
            payload: {
                method: 'GET',
                headers: { 'Content-Type': 'application/json' },
                mode: 'cors'
            },
            silent: true
        });
    };
    OrderReturnsDao.prototype.getOrderReturn = function (orderReturnId) {
        return this.taskQueue.execute({
            url: libstorefront_1.URLTransform.getAbsoluteApiUrl('/api/vendor/returns/single/' + orderReturnId),
            payload: {
                method: 'GET',
                headers: { 'Content-Type': 'application/json' },
                mode: 'cors'
            },
            silent: true
        });
    };
    OrderReturnsDao.prototype.createReturn = function (orderReturn) {
        return this.taskQueue.execute({
            url: libstorefront_1.URLTransform.getAbsoluteApiUrl('/api/vendor/returns'),
            payload: {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                mode: 'cors',
                body: JSON.stringify(orderReturn)
            },
            silent: true
        });
    };
    OrderReturnsDao = __decorate([
        inversify_1.injectable(),
        __param(0, inversify_1.inject(libstorefront_1.TaskQueue)),
        __metadata("design:paramtypes", [libstorefront_1.TaskQueue])
    ], OrderReturnsDao);
    return OrderReturnsDao;
}());
exports.OrderReturnsDao = OrderReturnsDao;


/***/ }),

/***/ "./src/index.ts":
/*!**********************!*\
  !*** ./src/index.ts ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.OrderReturnsPlugin = void 0;
var libstorefront_1 = __webpack_require__(/*! @grupakmk/libstorefront */ "@grupakmk/libstorefront");
var dao_1 = __webpack_require__(/*! ./dao */ "./src/dao/index.ts");
var service_1 = __webpack_require__(/*! ./service */ "./src/service/index.ts");
var returns_reducer_1 = __webpack_require__(/*! ./store/returns.reducer */ "./src/store/returns.reducer.ts");
var returns_default_1 = __webpack_require__(/*! ./store/returns.default */ "./src/store/returns.default.ts");
/**
 * Plugin provides support for fetching and creating returns.
 *
 * Return is where a customer is not satisfied with the product
 * or the deliverable, & businesses need to create a return the good, based on customer return request.
 */
exports.OrderReturnsPlugin = (function (libstorefront) {
    libstorefront.getIOCContainer().bind(dao_1.OrderReturnsDao).to(dao_1.OrderReturnsDao);
    libstorefront.getIOCContainer().bind(service_1.OrderReturnService).to(service_1.OrderReturnService);
    libstorefront.listenTo(libstorefront_1.HookType.AfterCoreModulesRegistered, function (lsf) {
        lsf.registerModule(libstorefront_1.createLibstorefrontModule('orderReturns', returns_reducer_1.orderReturnsReducer, returns_default_1.OrderReturnsDefaultState));
    });
});


/***/ }),

/***/ "./src/service/index.ts":
/*!******************************!*\
  !*** ./src/service/index.ts ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.OrderReturnService = void 0;
var libstorefront_1 = __webpack_require__(/*! @grupakmk/libstorefront */ "@grupakmk/libstorefront");
var inversify_1 = __webpack_require__(/*! inversify */ "inversify");
var returns_thunks_1 = __webpack_require__(/*! ../store/returns.thunks */ "./src/store/returns.thunks.ts");
var OrderReturnService = /** @class */ (function () {
    function OrderReturnService(store) {
        this.store = store;
    }
    /**
     * Returns list of user returns
     * @param {number} pageSize
     * @param {number} currentPage
     * @param {string} sortBy
     * @param {asc|desc} sortDir
     */
    OrderReturnService.prototype.getOrderReturns = function (_a) {
        var _b = _a === void 0 ? {} : _a, pageSize = _b.pageSize, currentPage = _b.currentPage, sortBy = _b.sortBy, sortDir = _b.sortDir;
        return this.store.dispatch(returns_thunks_1.OrderReturnsThunks.getOrderReturns({ pageSize: pageSize, currentPage: currentPage, sortBy: sortBy, sortDir: sortDir }));
    };
    /**
     * Returns single return
     * @param {number} orderReturnId
     */
    OrderReturnService.prototype.getSingleOrderReturn = function (orderReturnId) {
        return this.store.dispatch(returns_thunks_1.OrderReturnsThunks.getOrderReturn(orderReturnId));
    };
    /**
     * Creates return
     * @param {OrderReturn} orderReturn
     * @returns {Promise<string>}
     */
    OrderReturnService.prototype.createOrderReturn = function (orderReturn) {
        return this.store.dispatch(returns_thunks_1.OrderReturnsThunks.createOrderReturn(orderReturn));
    };
    OrderReturnService = __decorate([
        inversify_1.injectable(),
        __param(0, inversify_1.inject(libstorefront_1.AbstractStore)),
        __metadata("design:paramtypes", [libstorefront_1.AbstractStore])
    ], OrderReturnService);
    return OrderReturnService;
}());
exports.OrderReturnService = OrderReturnService;


/***/ }),

/***/ "./src/store/returns.actions.ts":
/*!**************************************!*\
  !*** ./src/store/returns.actions.ts ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.OrderReturnsActions = void 0;
var OrderReturnsActions;
(function (OrderReturnsActions) {
    var SN_ORDER_RETURNS = 'order_returns';
    OrderReturnsActions.SET_ORDER_RETURNS = SN_ORDER_RETURNS + '/SET_ORDER_RETURNS';
    OrderReturnsActions.setOrderReturns = function (orderReturns) { return ({
        type: OrderReturnsActions.SET_ORDER_RETURNS,
        payload: orderReturns
    }); };
    OrderReturnsActions.SET_CURRENT = SN_ORDER_RETURNS + '/SET_CURRENT';
    OrderReturnsActions.setCurrent = function (orderReturn) { return ({
        type: OrderReturnsActions.SET_CURRENT,
        payload: orderReturn
    }); };
    OrderReturnsActions.ADD_ORDER_RETURN = SN_ORDER_RETURNS;
})(OrderReturnsActions = exports.OrderReturnsActions || (exports.OrderReturnsActions = {}));


/***/ }),

/***/ "./src/store/returns.default.ts":
/*!**************************************!*\
  !*** ./src/store/returns.default.ts ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.OrderReturnsDefaultState = void 0;
exports.OrderReturnsDefaultState = {
    list: {
        start: 0,
        perPage: 50,
        total: 0,
        items: []
    },
    current: null
};


/***/ }),

/***/ "./src/store/returns.reducer.ts":
/*!**************************************!*\
  !*** ./src/store/returns.reducer.ts ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.orderReturnsReducer = void 0;
var returns_default_1 = __webpack_require__(/*! ./returns.default */ "./src/store/returns.default.ts");
var returns_actions_1 = __webpack_require__(/*! ./returns.actions */ "./src/store/returns.actions.ts");
var orderReturnsReducer = function (state, action) {
    switch (action.type) {
        case returns_actions_1.OrderReturnsActions.SET_ORDER_RETURNS: {
            var _a = action.payload, items = _a.items, total = _a.total, perPage = _a.perPage, start = _a.start;
            return __assign(__assign({}, state), { list: {
                    items: items || [],
                    start: start || 0,
                    perPage: perPage || 0,
                    total: total || 0
                } });
        }
        case returns_actions_1.OrderReturnsActions.SET_CURRENT: {
            return __assign(__assign({}, state), { current: action.payload });
        }
        default:
            {
                return state || returns_default_1.OrderReturnsDefaultState;
            }
            ;
    }
};
exports.orderReturnsReducer = orderReturnsReducer;


/***/ }),

/***/ "./src/store/returns.thunks.ts":
/*!*************************************!*\
  !*** ./src/store/returns.thunks.ts ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.OrderReturnsThunks = void 0;
var libstorefront_1 = __webpack_require__(/*! @grupakmk/libstorefront */ "@grupakmk/libstorefront");
var dao_1 = __webpack_require__(/*! ../dao */ "./src/dao/index.ts");
var returns_actions_1 = __webpack_require__(/*! ./returns.actions */ "./src/store/returns.actions.ts");
var OrderReturnsThunks;
(function (OrderReturnsThunks) {
    var _this = this;
    OrderReturnsThunks.getOrderReturns = function (_a) {
        var pageSize = _a.pageSize, currentPage = _a.currentPage, sortBy = _a.sortBy, sortDir = _a.sortDir;
        return function (dispatch, getState) { return __awaiter(_this, void 0, void 0, function () {
            var customer, response, _a, items, total, e_1;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        _b.trys.push([0, 5, , 6]);
                        customer = libstorefront_1.IOCContainer.get(libstorefront_1.AbstractStore).getState().user.current;
                        if (!customer) {
                            throw new Error('Cannot fetch order returns for unauthorized used');
                        }
                        return [4 /*yield*/, libstorefront_1.IOCContainer.get(dao_1.OrderReturnsDao).getOrderReturnsList({ customerId: customer.id, pageSize: pageSize, currentPage: currentPage, sortBy: sortBy, sortDir: sortDir })];
                    case 1:
                        response = _b.sent();
                        if (!(response && response.code === libstorefront_1.HttpStatus.OK)) return [3 /*break*/, 3];
                        _a = response.result, items = _a.items, total = _a.total;
                        return [4 /*yield*/, dispatch(returns_actions_1.OrderReturnsActions.setOrderReturns({
                                items: items,
                                total: total,
                                perPage: pageSize,
                                start: currentPage
                            }))];
                    case 2:
                        _b.sent();
                        return [3 /*break*/, 4];
                    case 3: throw new Error("Empty list");
                    case 4: return [3 /*break*/, 6];
                    case 5:
                        e_1 = _b.sent();
                        libstorefront_1.Logger.error("Unable to fetch returns: ", 'order-returns-thunks', e_1.message);
                        return [2 /*return*/, null];
                    case 6: return [2 /*return*/];
                }
            });
        }); };
    };
    OrderReturnsThunks.getOrderReturn = function (returnId) { return function (dispatch, getState) { return __awaiter(_this, void 0, void 0, function () {
        var response, e_2;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    _a.trys.push([0, 5, , 6]);
                    if (!returnId) {
                        throw new Error('Return id is undefined');
                    }
                    return [4 /*yield*/, libstorefront_1.IOCContainer.get(dao_1.OrderReturnsDao).getOrderReturn(returnId)];
                case 1:
                    response = _a.sent();
                    if (!(response && response.code === libstorefront_1.HttpStatus.OK)) return [3 /*break*/, 3];
                    return [4 /*yield*/, dispatch(returns_actions_1.OrderReturnsActions.setCurrent(response.result))];
                case 2:
                    _a.sent();
                    return [3 /*break*/, 4];
                case 3: throw new Error('Order return not found');
                case 4: return [3 /*break*/, 6];
                case 5:
                    e_2 = _a.sent();
                    libstorefront_1.Logger.error('Unable to fetch return: ', 'order-returns-thunks', e_2.message);
                    return [3 /*break*/, 6];
                case 6: return [2 /*return*/];
            }
        });
    }); }; };
    OrderReturnsThunks.createOrderReturn = function (orderReturnData) { return function (dispatch, getState) { return __awaiter(_this, void 0, void 0, function () {
        var customer, response;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    customer = libstorefront_1.IOCContainer.get(libstorefront_1.AbstractStore).getState().user.current;
                    if (!customer) {
                        throw new Error('Cannot create order returns for unauthorized used');
                    }
                    return [4 /*yield*/, libstorefront_1.IOCContainer.get(dao_1.OrderReturnsDao).createReturn(__assign(__assign({}, orderReturnData), { customer_id: customer.id, customer_email: customer.email }))];
                case 1:
                    response = _a.sent();
                    return [2 /*return*/, response];
            }
        });
    }); }; };
})(OrderReturnsThunks = exports.OrderReturnsThunks || (exports.OrderReturnsThunks = {}));


/***/ }),

/***/ "./src/types/index.ts":
/*!****************************!*\
  !*** ./src/types/index.ts ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });


/***/ }),

/***/ "@grupakmk/libstorefront":
/*!******************************************!*\
  !*** external "@grupakmk/libstorefront" ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@grupakmk/libstorefront");

/***/ }),

/***/ "inversify":
/*!****************************!*\
  !*** external "inversify" ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("inversify");

/***/ }),

/***/ "query-string":
/*!*******************************!*\
  !*** external "query-string" ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("query-string");

/***/ })

/******/ });
});
//# sourceMappingURL=index.js.map