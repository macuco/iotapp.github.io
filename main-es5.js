(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"], {
        /***/ "./$$_lazy_route_resource lazy recursive": 
        /*!******************************************************!*\
          !*** ./$$_lazy_route_resource lazy namespace object ***!
          \******************************************************/
        /*! no static exports found */
        /***/ (function (module, exports) {
            function webpackEmptyAsyncContext(req) {
                // Here Promise.resolve().then() is used instead of new Promise() to prevent
                // uncaught exception popping up in devtools
                return Promise.resolve().then(function () {
                    var e = new Error("Cannot find module '" + req + "'");
                    e.code = 'MODULE_NOT_FOUND';
                    throw e;
                });
            }
            webpackEmptyAsyncContext.keys = function () { return []; };
            webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
            module.exports = webpackEmptyAsyncContext;
            webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";
            /***/ 
        }),
        /***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html": 
        /*!**************************************************************************!*\
          !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html ***!
          \**************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("<!-- nav -->\n<nav class=\"navbar navbar-expand navbar-dark bg-dark\" *ngIf=\"currentUser\">\n    <div class=\"navbar-nav\" style=\"width: 100%\">\n        <a class=\"nav-item nav-link\" routerLink=\"/\">Inicio</a>\n        <a class=\"nav-item nav-link\" (click)=\"logout()\">Salir</a>\n        <a class=\"nav-item nav-link\"><i class=\"material-icons\">{{statusWebsocket()}}</i></a>\n        <span class=\"nav-item nav-link\" style=\"width: 100%; text-align: end\">Juan Manuel</span>\n    </div>\n</nav>\n\n<!-- main app container -->\n<div class=\"container\">\n    <router-outlet></router-outlet>\n</div>\n\n<!-- credits -->\n<div class=\"text-center mt-4\">\n    <p>\n        PLATAFORMA IOT - Todos los derechos reservados\n    </p>\n    <p>\n            Macuco\n    </p>\n    <!--<p>\n        <a href=\"https://jasonwatmore.com/post/2019/06/22/angular-8-jwt-authentication-example-tutorial\" target=\"_top\">Angular 8 - JWT Authentication Example & Tutorial</a>\n    </p>\n    <p>\n        <a href=\"http://jasonwatmore.com\" target=\"_top\">JasonWatmore.com</a>\n    </p>\n    -->\n</div>");
            /***/ 
        }),
        /***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/dispositive/dispositive.component.html": 
        /*!**********************************************************************************************!*\
          !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/dispositive/dispositive.component.html ***!
          \**********************************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("<mat-card class=\"example-card\">\n  <mat-card-header>\n    <div mat-card-avatar class=\"mat-card-avatar2\"  >\n      <span mat-icon-button>\n        <mat-icon aria-hidden=\"false\" id=\"apagador\" [ngClass]=\"(!dispositivo.status?'DESIRED':dispositivo.status) | lowercase\"  (click)=\"changeStatus()\" with aria-label=\"Example home icon\">power_settings_new</mat-icon>\n      </span>\n    </div>\n    \n    <mat-card-title>{{dispositivo.nombre}}</mat-card-title>\n    <mat-card-subtitle>\n      <div *ngIf=\"loading\" class=\"spinner-border spinner-border-sm\"></div>\n      <span *ngIf=\"(dispositivo.status=='DESIRED' && sinSombra && !loading) || !this.dispositivo.status\">SIN COMUNICACIÓN</span>\n      <span *ngIf=\"dispositivo.status!='DESIRED'\">{{dispositivo.status}}</span>\n    </mat-card-subtitle>\n  </mat-card-header>\n  <!--<mat-card-actions>\n    <button mat-button>LIKE</button>\n    <button mat-button>SHARE</button>\n  </mat-card-actions>-->\n</mat-card>\n");
            /***/ 
        }),
        /***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/home/home.component.html": 
        /*!********************************************************************************!*\
          !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/home/home.component.html ***!
          \********************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("<div class=\"card mt-4\">\n    <h4 class=\"card-header\">Dispositivos registrados</h4>\n    <div class=\"card-body\">\n        <h6>Solo usuarios seguros pueden ver esta lista</h6>\n        <!--<div *ngIf=\"false\" class=\"spinner-border spinner-border-sm\"></div>-->\n        <div *ngIf=\"dispositivos\">\n            <span *ngFor=\"let dispositivo of dispositivos\">\n                <iot-dispositive [(dispositivo)]=\"dispositivo\"></iot-dispositive>\n            </span>\n        </div>\n        <div class=\"alert alert-info\">\n                Si un dispositivo se encuentra sin comunicación puede intentar varias veces conectarse para sincronizarse\n        </div>\n    </div>\n</div>");
            /***/ 
        }),
        /***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/login/login.component.html": 
        /*!**********************************************************************************!*\
          !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/login/login.component.html ***!
          \**********************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("<div class=\"col-md-6 offset-md-3 mt-5\">\n    <div class=\"card\">\n        <h4 class=\"card-header\">Plataforma IOT - Ejemplo APP</h4>\n        <div class=\"card-body\">\n            <form [formGroup]=\"loginForm\" (ngSubmit)=\"onSubmit()\">\n                <div class=\"form-group\">\n                    <label for=\"username\">Usuario</label>\n                    <input type=\"text\" formControlName=\"username\" class=\"form-control\" [ngClass]=\"{ 'is-invalid': submitted && f.username.errors }\" />\n                    <div *ngIf=\"submitted && f.username.errors\" class=\"invalid-feedback\">\n                        <div *ngIf=\"f.username.errors.required\">El nombre de usuario es requerido</div>\n                    </div>\n                </div>\n                <div class=\"form-group\">\n                    <label for=\"password\">Contraseña</label>\n                    <input type=\"password\" formControlName=\"password\" class=\"form-control\" [ngClass]=\"{ 'is-invalid': submitted && f.password.errors }\" />\n                    <div *ngIf=\"submitted && f.password.errors\" class=\"invalid-feedback\">\n                        <div *ngIf=\"f.password.errors.required\">La contraseña es requerida</div>\n                    </div>\n                </div>\n                <button [disabled]=\"loading\" class=\"btn btn-primary\">\n                    <span *ngIf=\"loading\" class=\"spinner-border spinner-border-sm mr-1\"></span>\n                    Entrar\n                </button>\n                <div *ngIf=\"error\" class=\"alert alert-danger mt-3 mb-0\">{{error}}</div>\n            </form>\n        </div>\n    </div>\n    <div class=\"alert alert-info\">\n        Username: admin<br />\n        Password: admin\n    </div>\n</div>");
            /***/ 
        }),
        /***/ "./node_modules/tslib/tslib.es6.js": 
        /*!*****************************************!*\
          !*** ./node_modules/tslib/tslib.es6.js ***!
          \*****************************************/
        /*! exports provided: __extends, __assign, __rest, __decorate, __param, __metadata, __awaiter, __generator, __exportStar, __values, __read, __spread, __spreadArrays, __await, __asyncGenerator, __asyncDelegator, __asyncValues, __makeTemplateObject, __importStar, __importDefault */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__extends", function () { return __extends; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__assign", function () { return __assign; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__rest", function () { return __rest; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__decorate", function () { return __decorate; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__param", function () { return __param; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__metadata", function () { return __metadata; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__awaiter", function () { return __awaiter; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__generator", function () { return __generator; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__exportStar", function () { return __exportStar; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__values", function () { return __values; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__read", function () { return __read; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__spread", function () { return __spread; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__spreadArrays", function () { return __spreadArrays; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__await", function () { return __await; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncGenerator", function () { return __asyncGenerator; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncDelegator", function () { return __asyncDelegator; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncValues", function () { return __asyncValues; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__makeTemplateObject", function () { return __makeTemplateObject; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__importStar", function () { return __importStar; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__importDefault", function () { return __importDefault; });
            /*! *****************************************************************************
            Copyright (c) Microsoft Corporation. All rights reserved.
            Licensed under the Apache License, Version 2.0 (the "License"); you may not use
            this file except in compliance with the License. You may obtain a copy of the
            License at http://www.apache.org/licenses/LICENSE-2.0
            
            THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
            KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
            WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
            MERCHANTABLITY OR NON-INFRINGEMENT.
            
            See the Apache Version 2.0 License for specific language governing permissions
            and limitations under the License.
            ***************************************************************************** */
            /* global Reflect, Promise */
            var extendStatics = function (d, b) {
                extendStatics = Object.setPrototypeOf ||
                    ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
                    function (d, b) { for (var p in b)
                        if (b.hasOwnProperty(p))
                            d[p] = b[p]; };
                return extendStatics(d, b);
            };
            function __extends(d, b) {
                extendStatics(d, b);
                function __() { this.constructor = d; }
                d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
            }
            var __assign = function () {
                __assign = Object.assign || function __assign(t) {
                    for (var s, i = 1, n = arguments.length; i < n; i++) {
                        s = arguments[i];
                        for (var p in s)
                            if (Object.prototype.hasOwnProperty.call(s, p))
                                t[p] = s[p];
                    }
                    return t;
                };
                return __assign.apply(this, arguments);
            };
            function __rest(s, e) {
                var t = {};
                for (var p in s)
                    if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
                        t[p] = s[p];
                if (s != null && typeof Object.getOwnPropertySymbols === "function")
                    for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
                        if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                            t[p[i]] = s[p[i]];
                    }
                return t;
            }
            function __decorate(decorators, target, key, desc) {
                var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
                if (typeof Reflect === "object" && typeof Reflect.decorate === "function")
                    r = Reflect.decorate(decorators, target, key, desc);
                else
                    for (var i = decorators.length - 1; i >= 0; i--)
                        if (d = decorators[i])
                            r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
                return c > 3 && r && Object.defineProperty(target, key, r), r;
            }
            function __param(paramIndex, decorator) {
                return function (target, key) { decorator(target, key, paramIndex); };
            }
            function __metadata(metadataKey, metadataValue) {
                if (typeof Reflect === "object" && typeof Reflect.metadata === "function")
                    return Reflect.metadata(metadataKey, metadataValue);
            }
            function __awaiter(thisArg, _arguments, P, generator) {
                return new (P || (P = Promise))(function (resolve, reject) {
                    function fulfilled(value) { try {
                        step(generator.next(value));
                    }
                    catch (e) {
                        reject(e);
                    } }
                    function rejected(value) { try {
                        step(generator["throw"](value));
                    }
                    catch (e) {
                        reject(e);
                    } }
                    function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
                    step((generator = generator.apply(thisArg, _arguments || [])).next());
                });
            }
            function __generator(thisArg, body) {
                var _ = { label: 0, sent: function () { if (t[0] & 1)
                        throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
                return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function () { return this; }), g;
                function verb(n) { return function (v) { return step([n, v]); }; }
                function step(op) {
                    if (f)
                        throw new TypeError("Generator is already executing.");
                    while (_)
                        try {
                            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done)
                                return t;
                            if (y = 0, t)
                                op = [op[0] & 2, t.value];
                            switch (op[0]) {
                                case 0:
                                case 1:
                                    t = op;
                                    break;
                                case 4:
                                    _.label++;
                                    return { value: op[1], done: false };
                                case 5:
                                    _.label++;
                                    y = op[1];
                                    op = [0];
                                    continue;
                                case 7:
                                    op = _.ops.pop();
                                    _.trys.pop();
                                    continue;
                                default:
                                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) {
                                        _ = 0;
                                        continue;
                                    }
                                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) {
                                        _.label = op[1];
                                        break;
                                    }
                                    if (op[0] === 6 && _.label < t[1]) {
                                        _.label = t[1];
                                        t = op;
                                        break;
                                    }
                                    if (t && _.label < t[2]) {
                                        _.label = t[2];
                                        _.ops.push(op);
                                        break;
                                    }
                                    if (t[2])
                                        _.ops.pop();
                                    _.trys.pop();
                                    continue;
                            }
                            op = body.call(thisArg, _);
                        }
                        catch (e) {
                            op = [6, e];
                            y = 0;
                        }
                        finally {
                            f = t = 0;
                        }
                    if (op[0] & 5)
                        throw op[1];
                    return { value: op[0] ? op[1] : void 0, done: true };
                }
            }
            function __exportStar(m, exports) {
                for (var p in m)
                    if (!exports.hasOwnProperty(p))
                        exports[p] = m[p];
            }
            function __values(o) {
                var m = typeof Symbol === "function" && o[Symbol.iterator], i = 0;
                if (m)
                    return m.call(o);
                return {
                    next: function () {
                        if (o && i >= o.length)
                            o = void 0;
                        return { value: o && o[i++], done: !o };
                    }
                };
            }
            function __read(o, n) {
                var m = typeof Symbol === "function" && o[Symbol.iterator];
                if (!m)
                    return o;
                var i = m.call(o), r, ar = [], e;
                try {
                    while ((n === void 0 || n-- > 0) && !(r = i.next()).done)
                        ar.push(r.value);
                }
                catch (error) {
                    e = { error: error };
                }
                finally {
                    try {
                        if (r && !r.done && (m = i["return"]))
                            m.call(i);
                    }
                    finally {
                        if (e)
                            throw e.error;
                    }
                }
                return ar;
            }
            function __spread() {
                for (var ar = [], i = 0; i < arguments.length; i++)
                    ar = ar.concat(__read(arguments[i]));
                return ar;
            }
            function __spreadArrays() {
                for (var s = 0, i = 0, il = arguments.length; i < il; i++)
                    s += arguments[i].length;
                for (var r = Array(s), k = 0, i = 0; i < il; i++)
                    for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
                        r[k] = a[j];
                return r;
            }
            ;
            function __await(v) {
                return this instanceof __await ? (this.v = v, this) : new __await(v);
            }
            function __asyncGenerator(thisArg, _arguments, generator) {
                if (!Symbol.asyncIterator)
                    throw new TypeError("Symbol.asyncIterator is not defined.");
                var g = generator.apply(thisArg, _arguments || []), i, q = [];
                return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i;
                function verb(n) { if (g[n])
                    i[n] = function (v) { return new Promise(function (a, b) { q.push([n, v, a, b]) > 1 || resume(n, v); }); }; }
                function resume(n, v) { try {
                    step(g[n](v));
                }
                catch (e) {
                    settle(q[0][3], e);
                } }
                function step(r) { r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r); }
                function fulfill(value) { resume("next", value); }
                function reject(value) { resume("throw", value); }
                function settle(f, v) { if (f(v), q.shift(), q.length)
                    resume(q[0][0], q[0][1]); }
            }
            function __asyncDelegator(o) {
                var i, p;
                return i = {}, verb("next"), verb("throw", function (e) { throw e; }), verb("return"), i[Symbol.iterator] = function () { return this; }, i;
                function verb(n, f) { i[n] = o[n] ? function (v) { return (p = !p) ? { value: __await(o[n](v)), done: n === "return" } : f ? f(v) : v; } : f; }
            }
            function __asyncValues(o) {
                if (!Symbol.asyncIterator)
                    throw new TypeError("Symbol.asyncIterator is not defined.");
                var m = o[Symbol.asyncIterator], i;
                return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i);
                function verb(n) { i[n] = o[n] && function (v) { return new Promise(function (resolve, reject) { v = o[n](v), settle(resolve, reject, v.done, v.value); }); }; }
                function settle(resolve, reject, d, v) { Promise.resolve(v).then(function (v) { resolve({ value: v, done: d }); }, reject); }
            }
            function __makeTemplateObject(cooked, raw) {
                if (Object.defineProperty) {
                    Object.defineProperty(cooked, "raw", { value: raw });
                }
                else {
                    cooked.raw = raw;
                }
                return cooked;
            }
            ;
            function __importStar(mod) {
                if (mod && mod.__esModule)
                    return mod;
                var result = {};
                if (mod != null)
                    for (var k in mod)
                        if (Object.hasOwnProperty.call(mod, k))
                            result[k] = mod[k];
                result.default = mod;
                return result;
            }
            function __importDefault(mod) {
                return (mod && mod.__esModule) ? mod : { default: mod };
            }
            /***/ 
        }),
        /***/ "./src/app/_helpers/auth.guard.ts": 
        /*!****************************************!*\
          !*** ./src/app/_helpers/auth.guard.ts ***!
          \****************************************/
        /*! exports provided: AuthGuard */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthGuard", function () { return AuthGuard; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
            /* harmony import */ var _services__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../_services */ "./src/app/_services/index.ts");
            //import { AuthenticationService } from '@app/_services';
            var AuthGuard = /** @class */ (function () {
                function AuthGuard(router, authenticationService) {
                    this.router = router;
                    this.authenticationService = authenticationService;
                }
                AuthGuard.prototype.canActivate = function (route, state) {
                    var currentUser = this.authenticationService.currentUserValue;
                    if (currentUser) {
                        // logged in so return true
                        return true;
                    }
                    // not logged in so redirect to login page with the return url
                    this.router.navigate(['/login'], { queryParams: { returnUrl: state.url } });
                    return false;
                };
                return AuthGuard;
            }());
            AuthGuard.ctorParameters = function () { return [
                { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
                { type: _services__WEBPACK_IMPORTED_MODULE_3__["AuthenticationService"] }
            ]; };
            AuthGuard = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({ providedIn: 'root' })
            ], AuthGuard);
            /***/ 
        }),
        /***/ "./src/app/_helpers/error.interceptor.ts": 
        /*!***********************************************!*\
          !*** ./src/app/_helpers/error.interceptor.ts ***!
          \***********************************************/
        /*! exports provided: ErrorInterceptor */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ErrorInterceptor", function () { return ErrorInterceptor; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
            /* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
            /* harmony import */ var _services__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../_services */ "./src/app/_services/index.ts");
            //import { AuthenticationService } from '@app/_services';
            var ErrorInterceptor = /** @class */ (function () {
                function ErrorInterceptor(authenticationService) {
                    this.authenticationService = authenticationService;
                }
                ErrorInterceptor.prototype.intercept = function (request, next) {
                    var _this_1 = this;
                    var url = request.url, method = request.method, headers = request.headers, body = request.body;
                    return next.handle(request).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(function (err) {
                        if (err.status === 401) {
                            // auto logout if 401 response returned from api
                            _this_1.authenticationService.logout();
                            location.reload(true);
                        }
                        if (err.status === 400 && url.endsWith("oauth/token")) { //Error en autenticación 
                            return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["throwError"])("Datos incorrectos");
                        }
                        var error = err.error.message || err.error.error_description || err.statusText;
                        return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["throwError"])(error);
                    }));
                };
                return ErrorInterceptor;
            }());
            ErrorInterceptor.ctorParameters = function () { return [
                { type: _services__WEBPACK_IMPORTED_MODULE_4__["AuthenticationService"] }
            ]; };
            ErrorInterceptor = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])()
            ], ErrorInterceptor);
            /***/ 
        }),
        /***/ "./src/app/_helpers/fake-backend.ts": 
        /*!******************************************!*\
          !*** ./src/app/_helpers/fake-backend.ts ***!
          \******************************************/
        /*! exports provided: FakeBackendInterceptor, fakeBackendProvider */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FakeBackendInterceptor", function () { return FakeBackendInterceptor; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fakeBackendProvider", function () { return fakeBackendProvider; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
            /* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
            /* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
            //import { Usuario } from '@app/_models';
            var users = [{ id: 1, usuario: 'test', password: 'test', activo: true, token: null }];
            var FakeBackendInterceptor = /** @class */ (function () {
                function FakeBackendInterceptor() {
                }
                FakeBackendInterceptor.prototype.intercept = function (request, next) {
                    var url = request.url, method = request.method, headers = request.headers, body = request.body;
                    // wrap in delayed observable to simulate server api call
                    return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["of"])(null)
                        .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["mergeMap"])(handleRoute))
                        .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["materialize"])()) // call materialize and dematerialize to ensure delay even if an error is thrown (https://github.com/Reactive-Extensions/RxJS/issues/648)
                        .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["delay"])(500))
                        .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["dematerialize"])());
                    function handleRoute() {
                        switch (true) {
                            case url.endsWith('/users/authenticate') && method === 'POST':
                                return authenticate();
                            case url.endsWith('/users') && method === 'GET':
                                return getUsers();
                            default:
                                // pass through any requests not handled above
                                return next.handle(request);
                        }
                    }
                    // route functions
                    function authenticate() {
                        var username = body.username, password = body.password;
                        var user = users.find(function (x) { return x.usuario === username && x.password === password; });
                        if (!user)
                            return error('Username or password is incorrect');
                        return ok({
                            id: user.id,
                            username: user.usuario,
                            activo: true,
                            token: 'fake-jwt-token'
                        });
                    }
                    function getUsers() {
                        if (!isLoggedIn())
                            return unauthorized();
                        return ok(users);
                    }
                    // helper functions
                    function ok(body) {
                        return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["of"])(new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpResponse"]({ status: 200, body: body }));
                    }
                    function error(message) {
                        return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["throwError"])({ error: { message: message } });
                    }
                    function unauthorized() {
                        return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["throwError"])({ status: 401, error: { message: 'Unauthorised' } });
                    }
                    function isLoggedIn() {
                        return headers.get('Authorization') === 'Bearer fake-jwt-token';
                    }
                };
                return FakeBackendInterceptor;
            }());
            FakeBackendInterceptor = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])()
            ], FakeBackendInterceptor);
            var fakeBackendProvider = {
                // use fake backend in place of Http service for backend-less development
                provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HTTP_INTERCEPTORS"],
                useClass: FakeBackendInterceptor,
                multi: true
            };
            /***/ 
        }),
        /***/ "./src/app/_helpers/index.ts": 
        /*!***********************************!*\
          !*** ./src/app/_helpers/index.ts ***!
          \***********************************/
        /*! exports provided: AuthGuard, ErrorInterceptor, FakeBackendInterceptor, fakeBackendProvider, JwtInterceptor */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _auth_guard__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./auth.guard */ "./src/app/_helpers/auth.guard.ts");
            /* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "AuthGuard", function () { return _auth_guard__WEBPACK_IMPORTED_MODULE_1__["AuthGuard"]; });
            /* harmony import */ var _error_interceptor__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./error.interceptor */ "./src/app/_helpers/error.interceptor.ts");
            /* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ErrorInterceptor", function () { return _error_interceptor__WEBPACK_IMPORTED_MODULE_2__["ErrorInterceptor"]; });
            /* harmony import */ var _fake_backend__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./fake-backend */ "./src/app/_helpers/fake-backend.ts");
            /* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "FakeBackendInterceptor", function () { return _fake_backend__WEBPACK_IMPORTED_MODULE_3__["FakeBackendInterceptor"]; });
            /* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "fakeBackendProvider", function () { return _fake_backend__WEBPACK_IMPORTED_MODULE_3__["fakeBackendProvider"]; });
            /* harmony import */ var _jwt_interceptor__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./jwt.interceptor */ "./src/app/_helpers/jwt.interceptor.ts");
            /* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "JwtInterceptor", function () { return _jwt_interceptor__WEBPACK_IMPORTED_MODULE_4__["JwtInterceptor"]; });
            /***/ 
        }),
        /***/ "./src/app/_helpers/jwt.interceptor.ts": 
        /*!*********************************************!*\
          !*** ./src/app/_helpers/jwt.interceptor.ts ***!
          \*********************************************/
        /*! exports provided: JwtInterceptor */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "JwtInterceptor", function () { return JwtInterceptor; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _services__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../_services */ "./src/app/_services/index.ts");
            //import { AuthenticationService } from '@app/_services';
            var JwtInterceptor = /** @class */ (function () {
                function JwtInterceptor(authenticationService) {
                    this.authenticationService = authenticationService;
                }
                JwtInterceptor.prototype.intercept = function (request, next) {
                    // add authorization header with jwt token if available
                    var currentUser = this.authenticationService.currentUserValue;
                    if (currentUser && currentUser.token && currentUser.token.access_token) {
                        request = request.clone({
                            setHeaders: {
                                Authorization: "Bearer " + currentUser.token.access_token
                            }
                        });
                    }
                    return next.handle(request);
                };
                return JwtInterceptor;
            }());
            JwtInterceptor.ctorParameters = function () { return [
                { type: _services__WEBPACK_IMPORTED_MODULE_2__["AuthenticationService"] }
            ]; };
            JwtInterceptor = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])()
            ], JwtInterceptor);
            /***/ 
        }),
        /***/ "./src/app/_models/dispositivo.ts": 
        /*!****************************************!*\
          !*** ./src/app/_models/dispositivo.ts ***!
          \****************************************/
        /*! exports provided: Dispositivo, UsuarioDispositivo */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Dispositivo", function () { return Dispositivo; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UsuarioDispositivo", function () { return UsuarioDispositivo; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            var Dispositivo = /** @class */ (function () {
                function Dispositivo() {
                }
                return Dispositivo;
            }());
            var UsuarioDispositivo = /** @class */ (function () {
                function UsuarioDispositivo() {
                }
                return UsuarioDispositivo;
            }());
            /***/ 
        }),
        /***/ "./src/app/_models/index.ts": 
        /*!**********************************!*\
          !*** ./src/app/_models/index.ts ***!
          \**********************************/
        /*! exports provided: Usuario, Token, Dispositivo, UsuarioDispositivo */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _user__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./user */ "./src/app/_models/user.ts");
            /* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Usuario", function () { return _user__WEBPACK_IMPORTED_MODULE_1__["Usuario"]; });
            /* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Token", function () { return _user__WEBPACK_IMPORTED_MODULE_1__["Token"]; });
            /* harmony import */ var _dispositivo__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./dispositivo */ "./src/app/_models/dispositivo.ts");
            /* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Dispositivo", function () { return _dispositivo__WEBPACK_IMPORTED_MODULE_2__["Dispositivo"]; });
            /* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "UsuarioDispositivo", function () { return _dispositivo__WEBPACK_IMPORTED_MODULE_2__["UsuarioDispositivo"]; });
            /***/ 
        }),
        /***/ "./src/app/_models/user.ts": 
        /*!*********************************!*\
          !*** ./src/app/_models/user.ts ***!
          \*********************************/
        /*! exports provided: Usuario, Token */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Usuario", function () { return Usuario; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Token", function () { return Token; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            var Usuario = /** @class */ (function () {
                function Usuario() {
                    this.token = new Token();
                }
                return Usuario;
            }());
            var Token = /** @class */ (function () {
                function Token() {
                }
                return Token;
            }());
            /***/ 
        }),
        /***/ "./src/app/_services/authentication.service.ts": 
        /*!*****************************************************!*\
          !*** ./src/app/_services/authentication.service.ts ***!
          \*****************************************************/
        /*! exports provided: AuthenticationService */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthenticationService", function () { return AuthenticationService; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
            /* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
            /* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
            /* harmony import */ var _models__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../_models */ "./src/app/_models/index.ts");
            /* harmony import */ var src_environments_environment_prod__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/environments/environment.prod */ "./src/environments/environment.prod.ts");
            //import { environment } from '@environments/environment';
            //import { Usuario, Token } from '@app/_models';
            var AuthenticationService = /** @class */ (function () {
                function AuthenticationService(http) {
                    this.http = http;
                    this.currentUserSubject = new rxjs__WEBPACK_IMPORTED_MODULE_3__["BehaviorSubject"](JSON.parse(localStorage.getItem('currentUser')));
                    this.currentUser = this.currentUserSubject.asObservable();
                }
                Object.defineProperty(AuthenticationService.prototype, "currentUserValue", {
                    get: function () {
                        return this.currentUserSubject.value;
                    },
                    enumerable: true,
                    configurable: true
                });
                AuthenticationService.prototype.login = function (username, password) {
                    var _this_1 = this;
                    var headers = { "Authorization": "Basic " + btoa("macucoapp:secret") };
                    var params = { 'grant_type': 'password', 'username': username, 'password': password };
                    return this.http.post(src_environments_environment_prod__WEBPACK_IMPORTED_MODULE_6__["environment"].apiUrl + "/oauth/token", null, { headers: headers, params: params })
                        .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (token) {
                        // store user details and jwt token in local storage to keep user logged in between page refreshes
                        var user = new _models__WEBPACK_IMPORTED_MODULE_5__["Usuario"]();
                        user.token = token;
                        user.id = token.user_id;
                        user.usuario = username;
                        localStorage.setItem('currentUser', JSON.stringify(user));
                        _this_1.currentUserSubject.next(user);
                        return user;
                    }));
                    /*
                            return this.http.post<any>(`${environment.apiUrl}/users/authenticate`, { username, password })
                                .pipe(map(user => {
                                    // store user details and jwt token in local storage to keep user logged in between page refreshes
                                    localStorage.setItem('currentUser', JSON.stringify(user));
                                    this.currentUserSubject.next(user);
                                    return user;
                                }));
                                */
                };
                AuthenticationService.prototype.logout = function () {
                    // remove user from local storage to log user out
                    localStorage.removeItem('currentUser');
                    this.currentUserSubject.next(null);
                };
                return AuthenticationService;
            }());
            AuthenticationService.ctorParameters = function () { return [
                { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }
            ]; };
            AuthenticationService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({ providedIn: 'root' })
            ], AuthenticationService);
            /***/ 
        }),
        /***/ "./src/app/_services/dispositivos.service.ts": 
        /*!***************************************************!*\
          !*** ./src/app/_services/dispositivos.service.ts ***!
          \***************************************************/
        /*! exports provided: DispositivosService */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DispositivosService", function () { return DispositivosService; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
            /* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
            /* harmony import */ var src_environments_environment_prod__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/environments/environment.prod */ "./src/environments/environment.prod.ts");
            var DispositivosService = /** @class */ (function () {
                function DispositivosService(http) {
                    this.http = http;
                }
                DispositivosService.prototype.getAll = function () {
                    return this.http.get(src_environments_environment_prod__WEBPACK_IMPORTED_MODULE_4__["environment"].apiUrl + "/control/dispositivos")
                        .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (dispositivos) {
                        dispositivos.forEach(function (disp) { disp.dispositivoId = disp.id.dispositivoId; });
                        return dispositivos;
                    }));
                };
                return DispositivosService;
            }());
            DispositivosService.ctorParameters = function () { return [
                { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }
            ]; };
            DispositivosService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({ providedIn: 'root' })
            ], DispositivosService);
            /***/ 
        }),
        /***/ "./src/app/_services/index.ts": 
        /*!************************************!*\
          !*** ./src/app/_services/index.ts ***!
          \************************************/
        /*! exports provided: AuthenticationService, DispositivosService, WebsocketService */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _authentication_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./authentication.service */ "./src/app/_services/authentication.service.ts");
            /* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "AuthenticationService", function () { return _authentication_service__WEBPACK_IMPORTED_MODULE_1__["AuthenticationService"]; });
            /* harmony import */ var _dispositivos_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./dispositivos.service */ "./src/app/_services/dispositivos.service.ts");
            /* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "DispositivosService", function () { return _dispositivos_service__WEBPACK_IMPORTED_MODULE_2__["DispositivosService"]; });
            /* harmony import */ var _websocket_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./websocket.service */ "./src/app/_services/websocket.service.ts");
            /* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "WebsocketService", function () { return _websocket_service__WEBPACK_IMPORTED_MODULE_3__["WebsocketService"]; });
            /***/ 
        }),
        /***/ "./src/app/_services/websocket.service.ts": 
        /*!************************************************!*\
          !*** ./src/app/_services/websocket.service.ts ***!
          \************************************************/
        /*! exports provided: WebsocketService */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WebsocketService", function () { return WebsocketService; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var sockjs_client__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! sockjs-client */ "./node_modules/sockjs-client/lib/entry.js");
            /* harmony import */ var sockjs_client__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/ __webpack_require__.n(sockjs_client__WEBPACK_IMPORTED_MODULE_2__);
            /* harmony import */ var _stomp_stompjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @stomp/stompjs */ "./node_modules/@stomp/stompjs/bundles/stomp.umd.js");
            /* harmony import */ var _stomp_stompjs__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/ __webpack_require__.n(_stomp_stompjs__WEBPACK_IMPORTED_MODULE_3__);
            /* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
            /* harmony import */ var src_environments_environment_prod__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/environments/environment.prod */ "./src/environments/environment.prod.ts");
            Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
                providedIn: 'root'
            });
            var WebsocketService = /** @class */ (function () {
                function WebsocketService() {
                    this.status = 0 /* DESCONECTADO */;
                    this.stompClient = null;
                }
                WebsocketService.prototype.connect = function (usuario) {
                    this.currentUser = usuario;
                    var socket = new sockjs_client__WEBPACK_IMPORTED_MODULE_2__(src_environments_environment_prod__WEBPACK_IMPORTED_MODULE_5__["environment"].websocketUrl + "?access_token=" + this.currentUser.token.access_token);
                    var _this = this;
                    if (this.status == 2 /* CONECTADO */) {
                        return new Promise(function (resolve, reject) {
                            resolve(_this);
                        });
                    }
                    else if (this.status == 1 /* CONECTANDO */) {
                        return this.promesa;
                    }
                    this.status = 1 /* CONECTANDO */;
                    this.stompClient = _stomp_stompjs__WEBPACK_IMPORTED_MODULE_3__["Stomp"].over(socket);
                    this.stompClient.heartbeat.outgoing = 20000; // client will send heartbeats every 20000ms
                    this.stompClient.heartbeat.incoming = 0;
                    this.promesa = new Promise(function (resolve, reject) {
                        _this.stompClient.connect({}, function (frame) {
                            _this.status = 2 /* CONECTADO */;
                            //console.log('Connected: ' + frame);
                            this.reconnect_delay = 5000;
                            resolve(_this);
                        }, function (error) {
                            console.log("Ocurrio un error al intentar conectar el socket", error);
                            _this.status = 3 /* ERROR */;
                            reject("No fue posible conectarse");
                        }, function (error) {
                            console.log("Ocurrio un error al intentar conectar el socket", error);
                            _this.status = 3 /* ERROR */;
                            reject(error.reason);
                        });
                    });
                    return this.promesa;
                };
                WebsocketService.prototype.disconnect = function () {
                    if (this.stompClient != null) {
                        this.stompClient.disconnect();
                    }
                    this.status = 0 /* DESCONECTADO */;
                };
                WebsocketService.prototype.send = function (data) {
                    if (this.status == 2 /* CONECTADO */) {
                        this.stompClient.send('/desired', {}, JSON.stringify(data));
                    }
                    else {
                        throw "No esta conectado al servidor";
                    }
                };
                WebsocketService.prototype.updateStatus = function (data) {
                    if (this.status == 2 /* CONECTADO */) {
                        this.stompClient.send("/status/update/" + data.dispositivoId);
                    }
                    else {
                        throw "No esta conectado al servidor";
                    }
                };
                WebsocketService.prototype.ngOnDestroy = function () {
                    this.disconnect();
                };
                WebsocketService.prototype.subscribe = function (topic) {
                    var _this_1 = this;
                    return new rxjs__WEBPACK_IMPORTED_MODULE_4__["Observable"](function (observer) {
                        if (_this_1.status == 2 /* CONECTADO */) {
                            try {
                                _this_1.stompClient.subscribe(topic, function (response) {
                                    if (response.body.includes("invalid_token")) {
                                        observer.error("invalid_token");
                                    }
                                    observer.next(response);
                                });
                            }
                            catch (e) {
                                console.error("No se pudo conectar a " + topic, e);
                                observer.error(e);
                            }
                        }
                        else {
                            console.error("No hay conexión" + topic);
                            observer.error("No hay conexión" + topic);
                        }
                    });
                };
                return WebsocketService;
            }());
            /***/ 
        }),
        /***/ "./src/app/app.component.ts": 
        /*!**********************************!*\
          !*** ./src/app/app.component.ts ***!
          \**********************************/
        /*! exports provided: AppComponent */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function () { return AppComponent; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
            /* harmony import */ var _services__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./_services */ "./src/app/_services/index.ts");
            var AppComponent = /** @class */ (function () {
                function AppComponent(router, authenticationService, websocket) {
                    var _this_1 = this;
                    this.router = router;
                    this.authenticationService = authenticationService;
                    this.websocket = websocket;
                    this.authenticationService.currentUser.subscribe(function (x) { return _this_1.currentUser = x; });
                }
                AppComponent.prototype.logout = function () {
                    this.authenticationService.logout();
                    this.router.navigate(['/login']);
                };
                AppComponent.prototype.statusWebsocket = function () {
                    return this.websocket.status == 2 /* CONECTADO */ ? 'wifi' : 'wifi_off';
                };
                return AppComponent;
            }());
            AppComponent.ctorParameters = function () { return [
                { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
                { type: _services__WEBPACK_IMPORTED_MODULE_3__["AuthenticationService"] },
                { type: _services__WEBPACK_IMPORTED_MODULE_3__["WebsocketService"] }
            ]; };
            AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({ selector: 'app', template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./app.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html")).default })
            ], AppComponent);
            /***/ 
        }),
        /***/ "./src/app/app.module.ts": 
        /*!*******************************!*\
          !*** ./src/app/app.module.ts ***!
          \*******************************/
        /*! exports provided: AppModule */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function () { return AppModule; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");
            /* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
            /* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
            /* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/icon */ "./node_modules/@angular/material/esm2015/icon.js");
            /* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm2015/animations.js");
            /* harmony import */ var _helpers__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./_helpers */ "./src/app/_helpers/index.ts");
            /* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
            /* harmony import */ var _app_routing__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./app.routing */ "./src/app/app.routing.ts");
            /* harmony import */ var _home__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./home */ "./src/app/home/index.ts");
            /* harmony import */ var _login__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./login */ "./src/app/login/index.ts");
            /* harmony import */ var _dispositive_dispositive_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./dispositive/dispositive.component */ "./src/app/dispositive/dispositive.component.ts");
            /* harmony import */ var _services__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./_services */ "./src/app/_services/index.ts");
            /* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/material/card */ "./node_modules/@angular/material/esm2015/card.js");
            // used to create fake backend
            //import { WebsocketService, AuthenticationService } from '@app/_services';
            var AppModule = /** @class */ (function () {
                function AppModule() {
                }
                return AppModule;
            }());
            AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
                    imports: [
                        _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__["BrowserModule"],
                        _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
                        _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClientModule"],
                        _app_routing__WEBPACK_IMPORTED_MODULE_9__["appRoutingModule"],
                        _angular_material_icon__WEBPACK_IMPORTED_MODULE_5__["MatIconModule"],
                        _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_6__["BrowserAnimationsModule"],
                        _angular_material_icon__WEBPACK_IMPORTED_MODULE_5__["MatIconModule"],
                        _angular_material_card__WEBPACK_IMPORTED_MODULE_14__["MatCardModule"],
                        _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                    ],
                    declarations: [
                        _app_component__WEBPACK_IMPORTED_MODULE_8__["AppComponent"],
                        _home__WEBPACK_IMPORTED_MODULE_10__["HomeComponent"],
                        _login__WEBPACK_IMPORTED_MODULE_11__["LoginComponent"],
                        _dispositive_dispositive_component__WEBPACK_IMPORTED_MODULE_12__["DispositiveComponent"]
                    ],
                    providers: [
                        { provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HTTP_INTERCEPTORS"], useClass: _helpers__WEBPACK_IMPORTED_MODULE_7__["JwtInterceptor"], multi: true },
                        { provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HTTP_INTERCEPTORS"], useClass: _helpers__WEBPACK_IMPORTED_MODULE_7__["ErrorInterceptor"], multi: true },
                        // provider used to create fake backend
                        _helpers__WEBPACK_IMPORTED_MODULE_7__["fakeBackendProvider"],
                        _services__WEBPACK_IMPORTED_MODULE_13__["AuthenticationService"],
                        _services__WEBPACK_IMPORTED_MODULE_13__["WebsocketService"]
                    ],
                    bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_8__["AppComponent"]]
                })
            ], AppModule);
            /***/ 
        }),
        /***/ "./src/app/app.routing.ts": 
        /*!********************************!*\
          !*** ./src/app/app.routing.ts ***!
          \********************************/
        /*! exports provided: appRoutingModule */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "appRoutingModule", function () { return appRoutingModule; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
            /* harmony import */ var _home__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./home */ "./src/app/home/index.ts");
            /* harmony import */ var _login__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./login */ "./src/app/login/index.ts");
            /* harmony import */ var _helpers__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./_helpers */ "./src/app/_helpers/index.ts");
            var routes = [
                { path: '', component: _home__WEBPACK_IMPORTED_MODULE_2__["HomeComponent"], canActivate: [_helpers__WEBPACK_IMPORTED_MODULE_4__["AuthGuard"]] },
                { path: 'login', component: _login__WEBPACK_IMPORTED_MODULE_3__["LoginComponent"] },
                // otherwise redirect to home
                { path: '**', redirectTo: '' }
            ];
            var appRoutingModule = _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes);
            /***/ 
        }),
        /***/ "./src/app/dispositive/dispositive.component.css": 
        /*!*******************************************************!*\
          !*** ./src/app/dispositive/dispositive.component.css ***!
          \*******************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = (" .on:hover,.off:hover,.desired:hover,\n .on:focus,.off:focus, .desired:focus {\n   cursor: pointer;\n }\n \n .on, .off, .desired {\n   display: inline-block;\n  width: 96px;\n  height: 96px;\n  font-size: 96px;\n }\n \n .on { \n   color:green;\n }\n \n .off { \n   color:black;\n }\n \n .desired {\n  color:yellow;\n }\n \n .example-card {\n  max-width: 400px;\n}\n \n .example-header-image {\n  \n  font-family: \"Material Icons\"; \ncontent: \"power_settings_new\";\nposition: absolute;\ntop: 50%;\nright: -25px;\ndisplay: block;\nwidth: 10px;\nheight: 10px;\nbackground: blue;\n}\n \n .mat-card-avatar2 {\n   height: 96px; \n  width: 96px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZGlzcG9zaXRpdmUvZGlzcG9zaXRpdmUuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQ0FBQzs7R0FFRSxlQUFlO0NBQ2pCOztDQUVBO0dBQ0UscUJBQXFCO0VBQ3RCLFdBQVc7RUFDWCxZQUFZO0VBQ1osZUFBZTtDQUNoQjs7Q0FFQTtHQUNFLFdBQVc7Q0FDYjs7Q0FDQTtHQUNFLFdBQVc7Q0FDYjs7Q0FDQTtFQUNDLFlBQVk7Q0FDYjs7Q0FFQTtFQUNDLGdCQUFnQjtBQUNsQjs7Q0FFQTs7RUFFRSw2QkFBNkI7QUFDL0IsNkJBQTZCO0FBQzdCLGtCQUFrQjtBQUNsQixRQUFRO0FBQ1IsWUFBWTtBQUNaLGNBQWM7QUFDZCxXQUFXO0FBQ1gsWUFBWTtBQUNaLGdCQUFnQjtBQUNoQjs7Q0FFQTtHQUNHLFlBQVk7RUFDYixXQUFXO0FBQ2IiLCJmaWxlIjoic3JjL2FwcC9kaXNwb3NpdGl2ZS9kaXNwb3NpdGl2ZS5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiIC5vbjpob3Zlciwub2ZmOmhvdmVyLC5kZXNpcmVkOmhvdmVyLFxuIC5vbjpmb2N1cywub2ZmOmZvY3VzLCAuZGVzaXJlZDpmb2N1cyB7XG4gICBjdXJzb3I6IHBvaW50ZXI7XG4gfVxuIFxuIC5vbiwgLm9mZiwgLmRlc2lyZWQge1xuICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICB3aWR0aDogOTZweDtcbiAgaGVpZ2h0OiA5NnB4O1xuICBmb250LXNpemU6IDk2cHg7XG4gfVxuXG4gLm9uIHsgXG4gICBjb2xvcjpncmVlbjtcbiB9XG4gLm9mZiB7IFxuICAgY29sb3I6YmxhY2s7XG4gfVxuIC5kZXNpcmVkIHtcbiAgY29sb3I6eWVsbG93O1xuIH1cblxuIC5leGFtcGxlLWNhcmQge1xuICBtYXgtd2lkdGg6IDQwMHB4O1xufVxuXG4uZXhhbXBsZS1oZWFkZXItaW1hZ2Uge1xuICBcbiAgZm9udC1mYW1pbHk6IFwiTWF0ZXJpYWwgSWNvbnNcIjsgXG5jb250ZW50OiBcInBvd2VyX3NldHRpbmdzX25ld1wiO1xucG9zaXRpb246IGFic29sdXRlO1xudG9wOiA1MCU7XG5yaWdodDogLTI1cHg7XG5kaXNwbGF5OiBibG9jaztcbndpZHRoOiAxMHB4O1xuaGVpZ2h0OiAxMHB4O1xuYmFja2dyb3VuZDogYmx1ZTtcbn1cblxuLm1hdC1jYXJkLWF2YXRhcjIge1xuICAgaGVpZ2h0OiA5NnB4OyBcbiAgd2lkdGg6IDk2cHg7XG59Il19 */");
            /***/ 
        }),
        /***/ "./src/app/dispositive/dispositive.component.ts": 
        /*!******************************************************!*\
          !*** ./src/app/dispositive/dispositive.component.ts ***!
          \******************************************************/
        /*! exports provided: DispositiveComponent */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DispositiveComponent", function () { return DispositiveComponent; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _services__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../_services */ "./src/app/_services/index.ts");
            //import {  Dispositivo } from '@app/_models';
            //import { WebsocketService, Status, AuthenticationService } from '@app/_services';
            var DispositiveComponent = /** @class */ (function () {
                function DispositiveComponent(auth, websocket) {
                    this.auth = auth;
                    this.websocket = websocket;
                    this.sinSombra = true;
                    this.loading = false;
                    this.greetings = [];
                }
                DispositiveComponent.prototype.suscribierse = function () {
                    var _this_1 = this;
                    this.websocket.subscribe("/user/thing/" + this.dispositivo.dispositivoId + "/reported").subscribe(function (reportedStatus) {
                        _this_1.reported(reportedStatus);
                    }, function (err) { return _this_1.disconnect(err); });
                    this.websocket.subscribe("/thing/" + this.dispositivo.dispositivoId + "/reported").subscribe(function (reportedStatus) {
                        _this_1.reported(reportedStatus);
                    }, function (err) { return _this_1.disconnect(err); });
                    this.websocket.subscribe("/user/thing/errors").subscribe(function (reportedStatus) {
                        _this_1.error(reportedStatus);
                    }, function (err) { return _this_1.disconnect(err); });
                    this.websocket.subscribe("/user/thing/" + this.dispositivo.dispositivoId + "/desired/response").subscribe(function (reportedStatus) {
                        //console.log(reportedStatus.body);
                        _this_1.showGreeting(reportedStatus.body);
                    }, function (err) { return _this_1.disconnect(err); });
                };
                DispositiveComponent.prototype.reported = function (reportedStatus) {
                    this.loading = false;
                    console.log(this.dispositivo.dispositivoId, reportedStatus.body);
                    if (!reportedStatus.body) {
                        return;
                    }
                    if (reportedStatus.body.includes("state")) {
                        var mensaje = JSON.parse(reportedStatus.body);
                        console.log(reportedStatus.body);
                        if (mensaje.state.reported == undefined) {
                            return;
                        }
                        console.log(mensaje.state.reported.status);
                        this.dispositivo.status = mensaje.state.reported.status;
                    }
                    else {
                        //Para los status que no utilizan la sombra
                        var mensaje = JSON.parse(reportedStatus.body);
                        console.log(reportedStatus.body);
                        console.log(mensaje.status);
                        this.dispositivo.status = mensaje.status;
                    }
                    this.sinSombra = false;
                };
                DispositiveComponent.prototype.error = function (reportedStatus) {
                    console.error("Mostrando errores en interfaz");
                    console.info(reportedStatus.body);
                    console.info(JSON.parse(reportedStatus.body).message, JSON.parse(reportedStatus.body).error);
                    this.showGreeting(JSON.parse(reportedStatus.body).message);
                };
                DispositiveComponent.prototype.disconnect = function (err) {
                    //TODO Revisar el error
                    console.error(err);
                    if (err == "invalid_token") {
                        this.showGreeting("Se termino la sesion, volver a conectarse");
                    }
                    this.websocket.disconnect();
                    this.auth.logout();
                    location.reload(true);
                };
                DispositiveComponent.prototype.changeStatus = function () {
                    var _this_1 = this;
                    if (this.loading) {
                        return;
                    }
                    var statusTemp = this.dispositivo.status;
                    setTimeout(function () {
                        console.warn("Revisar status", _this_1.dispositivo.status, _this_1.sinSombra);
                        /*if(this.dispositivo.status == "DESIRED" && this.sinSombra){
                          this.dispositivo.status = statusTemp=="ON"?"OFF":"ON";
                          console.warn("Sincronizando ");
                        }*/
                        _this_1.loading = false;
                    }, 6000);
                    this.loading = true;
                    if (this.dispositivo.status == "DESIRED") { //Random entre los status para sincronizarse
                        var status = ["ON", "OFF"][Math.floor(Math.random() * 2)];
                        this.dispositivo.status = status;
                        console.log(status);
                    }
                    else {
                        this.dispositivo.status = this.dispositivo.status == "ON" ? "OFF" : "ON";
                    }
                    try {
                        this.websocket.send(this.dispositivo);
                    }
                    catch (e) {
                        console.error(e);
                    }
                    this.dispositivo.status = "DESIRED";
                };
                DispositiveComponent.prototype.reconectar = function () {
                    if (this.websocket.status != 2 /* CONECTADO */) {
                        this.connectar();
                    }
                    else {
                        this.showGreeting("Ya se encuentra conectado");
                    }
                };
                DispositiveComponent.prototype.showGreeting = function (message) {
                    console.log(message);
                    //this.greetings.push(message);
                };
                DispositiveComponent.prototype.connectar = function () {
                    var _this_1 = this;
                    this.websocket.connect(this.auth.currentUserValue).then(function (ws) {
                        console.log("Componente conectado");
                        _this_1.suscribierse();
                        _this_1.websocket.updateStatus(_this_1.dispositivo);
                    }).catch(function (error) {
                        console.log("No se pudo conectar el componente", error);
                        _this_1.showGreeting("No se pudo conectar al servidor, revise sus datos");
                    });
                };
                DispositiveComponent.prototype.ngOnInit = function () {
                    if (this.dispositivo && !this.dispositivo.status) {
                        console.log("Status cambiado a lo wey");
                    }
                    this.connectar();
                };
                return DispositiveComponent;
            }());
            DispositiveComponent.ctorParameters = function () { return [
                { type: _services__WEBPACK_IMPORTED_MODULE_2__["AuthenticationService"] },
                { type: _services__WEBPACK_IMPORTED_MODULE_2__["WebsocketService"] }
            ]; };
            tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
            ], DispositiveComponent.prototype, "dispositivo", void 0);
            DispositiveComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
                    selector: 'iot-dispositive',
                    template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./dispositive.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/dispositive/dispositive.component.html")).default,
                    styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./dispositive.component.css */ "./src/app/dispositive/dispositive.component.css")).default]
                })
            ], DispositiveComponent);
            /***/ 
        }),
        /***/ "./src/app/home/home.component.ts": 
        /*!****************************************!*\
          !*** ./src/app/home/home.component.ts ***!
          \****************************************/
        /*! exports provided: HomeComponent */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function () { return HomeComponent; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
            /* harmony import */ var _services__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../_services */ "./src/app/_services/index.ts");
            //import { Dispositivo } from '@app/_models';
            //import { DispositivosService } from '@app/_services';
            var HomeComponent = /** @class */ (function () {
                function HomeComponent(dispositivosService) {
                    this.dispositivosService = dispositivosService;
                    this.loading = false;
                }
                HomeComponent.prototype.ngOnInit = function () {
                    var _this_1 = this;
                    this.loading = true;
                    this.dispositivosService.getAll().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["first"])()).subscribe(function (disp) {
                        _this_1.loading = false;
                        _this_1.dispositivos = disp;
                    });
                };
                return HomeComponent;
            }());
            HomeComponent.ctorParameters = function () { return [
                { type: _services__WEBPACK_IMPORTED_MODULE_3__["DispositivosService"] }
            ]; };
            HomeComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({ template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./home.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/home/home.component.html")).default })
            ], HomeComponent);
            /***/ 
        }),
        /***/ "./src/app/home/index.ts": 
        /*!*******************************!*\
          !*** ./src/app/home/index.ts ***!
          \*******************************/
        /*! exports provided: HomeComponent */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _home_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./home.component */ "./src/app/home/home.component.ts");
            /* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function () { return _home_component__WEBPACK_IMPORTED_MODULE_1__["HomeComponent"]; });
            /***/ 
        }),
        /***/ "./src/app/login/index.ts": 
        /*!********************************!*\
          !*** ./src/app/login/index.ts ***!
          \********************************/
        /*! exports provided: LoginComponent */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _login_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./login.component */ "./src/app/login/login.component.ts");
            /* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "LoginComponent", function () { return _login_component__WEBPACK_IMPORTED_MODULE_1__["LoginComponent"]; });
            /***/ 
        }),
        /***/ "./src/app/login/login.component.ts": 
        /*!******************************************!*\
          !*** ./src/app/login/login.component.ts ***!
          \******************************************/
        /*! exports provided: LoginComponent */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginComponent", function () { return LoginComponent; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
            /* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
            /* harmony import */ var _services__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../_services */ "./src/app/_services/index.ts");
            //import { AuthenticationService } from '@app/_services';
            var LoginComponent = /** @class */ (function () {
                function LoginComponent(formBuilder, route, router, authenticationService) {
                    this.formBuilder = formBuilder;
                    this.route = route;
                    this.router = router;
                    this.authenticationService = authenticationService;
                    this.loading = false;
                    this.submitted = false;
                    this.error = '';
                    // redirect to home if already logged in
                    if (this.authenticationService.currentUserValue) {
                        this.router.navigate(['/']);
                    }
                }
                LoginComponent.prototype.ngOnInit = function () {
                    this.loginForm = this.formBuilder.group({
                        username: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
                        password: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required]
                    });
                    // get return url from route parameters or default to '/'
                    this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/';
                };
                Object.defineProperty(LoginComponent.prototype, "f", {
                    // convenience getter for easy access to form fields
                    get: function () { return this.loginForm.controls; },
                    enumerable: true,
                    configurable: true
                });
                LoginComponent.prototype.onSubmit = function () {
                    var _this_1 = this;
                    this.submitted = true;
                    // stop here if form is invalid
                    if (this.loginForm.invalid) {
                        return;
                    }
                    this.loading = true;
                    this.authenticationService.login(this.f.username.value, this.f.password.value)
                        .subscribe(function (data) {
                        _this_1.router.navigate([_this_1.returnUrl]);
                    }, function (error) {
                        _this_1.error = error;
                        _this_1.loading = false;
                    });
                    /*.pipe(first())
                    .subscribe(
                        data => {
                            this.router.navigate([this.returnUrl]);
                        },
                        error => {
                            console.error(error);
                            this.error = error;
                            this.loading = false;
                        });*/
                };
                return LoginComponent;
            }());
            LoginComponent.ctorParameters = function () { return [
                { type: _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"] },
                { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] },
                { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
                { type: _services__WEBPACK_IMPORTED_MODULE_4__["AuthenticationService"] }
            ]; };
            LoginComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({ template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./login.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/login/login.component.html")).default })
            ], LoginComponent);
            /***/ 
        }),
        /***/ "./src/environments/environment.prod.ts": 
        /*!**********************************************!*\
          !*** ./src/environments/environment.prod.ts ***!
          \**********************************************/
        /*! exports provided: environment */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function () { return environment; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            var environment = {
                production: true,
                apiUrl: 'http://localhost:8080',
                websocketUrl: 'http://localhost:8088/dispositive-interaction'
            };
            /***/ 
        }),
        /***/ "./src/environments/environment.ts": 
        /*!*****************************************!*\
          !*** ./src/environments/environment.ts ***!
          \*****************************************/
        /*! exports provided: environment */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function () { return environment; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            // This file can be replaced during build by using the `fileReplacements` array.
            // `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
            // The list of file replacements can be found in `angular.json`.
            var environment = {
                production: false,
                apiUrl: 'http://localhost:8080',
                websocketUrl: 'http://localhost:8088/dispositive-interaction'
            };
            /*
             * For easier debugging in development mode, you can import the following file
             * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
             *
             * This import should be commented out in production mode because it will have a negative impact
             * on performance if an error is thrown.
             */
            // import 'zone.js/dist/zone-error';  // Included with Angular CLI.
            /***/ 
        }),
        /***/ "./src/main.ts": 
        /*!*********************!*\
          !*** ./src/main.ts ***!
          \*********************/
        /*! no exports provided */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm2015/platform-browser-dynamic.js");
            /* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
            /* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");
            if (_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].production) {
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["enableProdMode"])();
            }
            Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_3__["AppModule"])
                .catch(function (err) { return console.error(err); });
            /***/ 
        }),
        /***/ 0: 
        /*!***************************!*\
          !*** multi ./src/main.ts ***!
          \***************************/
        /*! no static exports found */
        /***/ (function (module, exports, __webpack_require__) {
            module.exports = __webpack_require__(/*! /home/macuco/HD/JMP/proyectos/plataforma-iot/iot-dispositive-comunication/src/main/resources/static/iot-app3/src/main.ts */ "./src/main.ts");
            /***/ 
        })
    }, [[0, "runtime", "vendor"]]]);
//# sourceMappingURL=main-es2015.js.map
//# sourceMappingURL=main-es5.js.map
//# sourceMappingURL=main-es5.js.map