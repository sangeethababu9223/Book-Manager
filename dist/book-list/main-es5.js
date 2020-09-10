function _createForOfIteratorHelper(o, allowArrayLike) { var it; if (typeof Symbol === "undefined" || o[Symbol.iterator] == null) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = o[Symbol.iterator](); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"], {
  /***/
  "./$$_lazy_route_resource lazy recursive":
  /*!******************************************************!*\
    !*** ./$$_lazy_route_resource lazy namespace object ***!
    \******************************************************/

  /*! no static exports found */

  /***/
  function $$_lazy_route_resourceLazyRecursive(module, exports) {
    function webpackEmptyAsyncContext(req) {
      // Here Promise.resolve().then() is used instead of new Promise() to prevent
      // uncaught exception popping up in devtools
      return Promise.resolve().then(function () {
        var e = new Error("Cannot find module '" + req + "'");
        e.code = 'MODULE_NOT_FOUND';
        throw e;
      });
    }

    webpackEmptyAsyncContext.keys = function () {
      return [];
    };

    webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
    module.exports = webpackEmptyAsyncContext;
    webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";
    /***/
  },

  /***/
  "./src/app/app-routing.module.ts":
  /*!***************************************!*\
    !*** ./src/app/app-routing.module.ts ***!
    \***************************************/

  /*! exports provided: AppRoutingModule */

  /***/
  function srcAppAppRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function () {
      return AppRoutingModule;
    });
    /* harmony import */


    var _services_auth_guard_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! ./services/auth-guard.service */
    "./src/app/services/auth-guard.service.ts");
    /* harmony import */


    var _users_manager_user_home_user_home_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./users-manager/user-home/user-home.component */
    "./src/app/users-manager/user-home/user-home.component.ts");
    /* harmony import */


    var _books_manager_book_book_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./books-manager/book/book.component */
    "./src/app/books-manager/book/book.component.ts");
    /* harmony import */


    var _books_manager_book_details_book_details_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./books-manager/book-details/book-details.component */
    "./src/app/books-manager/book-details/book-details.component.ts");
    /* harmony import */


    var _home_home_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./home/home.component */
    "./src/app/home/home.component.ts");
    /* harmony import */


    var _users_manager_login_login_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./users-manager/login/login.component */
    "./src/app/users-manager/login/login.component.ts");
    /* harmony import */


    var _users_manager_sign_up_sign_up_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./users-manager/sign-up/sign-up.component */
    "./src/app/users-manager/sign-up/sign-up.component.ts");
    /* harmony import */


    var _users_manager_logout_logout_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ./users-manager/logout/logout.component */
    "./src/app/users-manager/logout/logout.component.ts");
    /* harmony import */


    var _normal_user_normal_user_login_normal_user_login_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ./normal-user/normal-user-login/normal-user-login.component */
    "./src/app/normal-user/normal-user-login/normal-user-login.component.ts");
    /* harmony import */


    var _normal_user_normal_user_sign_up_normal_user_sign_up_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! ./normal-user/normal-user-sign-up/normal-user-sign-up.component */
    "./src/app/normal-user/normal-user-sign-up/normal-user-sign-up.component.ts");
    /* harmony import */


    var _books_manager_user_book_details_user_book_details_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! ./books-manager/user-book-details/user-book-details.component */
    "./src/app/books-manager/user-book-details/user-book-details.component.ts");
    /* harmony import */


    var _books_manager_user_books_user_books_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! ./books-manager/user-books/user-books.component */
    "./src/app/books-manager/user-books/user-books.component.ts");
    /* harmony import */


    var _normal_user_normal_user_home_normal_user_home_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
    /*! ./normal-user/normal-user-home/normal-user-home.component */
    "./src/app/normal-user/normal-user-home/normal-user-home.component.ts");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");

    var routes = [{
      path: 'home',
      component: _home_home_component__WEBPACK_IMPORTED_MODULE_4__["HomeComponent"]
    }, {
      path: 'adminBookdetails/:id',
      component: _books_manager_book_details_book_details_component__WEBPACK_IMPORTED_MODULE_3__["BookDetailsComponent"]
    }, {
      path: 'adminBooks',
      component: _books_manager_book_book_component__WEBPACK_IMPORTED_MODULE_2__["BookComponent"]
    }, {
      path: 'adminLogin',
      component: _users_manager_login_login_component__WEBPACK_IMPORTED_MODULE_5__["LoginComponent"]
    }, {
      path: 'adminSignup',
      component: _users_manager_sign_up_sign_up_component__WEBPACK_IMPORTED_MODULE_6__["SignUpComponent"]
    }, {
      path: 'logout',
      component: _users_manager_logout_logout_component__WEBPACK_IMPORTED_MODULE_7__["LogoutComponent"]
    }, {
      path: 'adminHome',
      component: _users_manager_user_home_user_home_component__WEBPACK_IMPORTED_MODULE_1__["UserHomeComponent"],
      canActivate: [_services_auth_guard_service__WEBPACK_IMPORTED_MODULE_0__["AuthGuardService"]]
    }, {
      path: 'userHome',
      component: _normal_user_normal_user_home_normal_user_home_component__WEBPACK_IMPORTED_MODULE_12__["NormalUserHOmeComponent"],
      canActivate: [_services_auth_guard_service__WEBPACK_IMPORTED_MODULE_0__["AuthGuardService"]]
    }, {
      path: 'login',
      component: _normal_user_normal_user_login_normal_user_login_component__WEBPACK_IMPORTED_MODULE_8__["NormalUserLoginComponent"]
    }, {
      path: 'signup',
      component: _normal_user_normal_user_sign_up_normal_user_sign_up_component__WEBPACK_IMPORTED_MODULE_9__["NormalUserSignUpComponent"]
    }, {
      path: 'books',
      component: _books_manager_user_books_user_books_component__WEBPACK_IMPORTED_MODULE_11__["UserBooksComponent"]
    }, {
      path: 'bookdetails/:id',
      component: _books_manager_user_book_details_user_book_details_component__WEBPACK_IMPORTED_MODULE_10__["UserBookDetailsComponent"]
    }, {
      path: '',
      redirectTo: '/home',
      pathMatch: 'full'
    }, {
      path: '**',
      component: _home_home_component__WEBPACK_IMPORTED_MODULE_4__["HomeComponent"]
    }, {
      path: '**',
      component: _home_home_component__WEBPACK_IMPORTED_MODULE_4__["HomeComponent"]
    }];

    var AppRoutingModule = function AppRoutingModule() {
      _classCallCheck(this, AppRoutingModule);
    };

    AppRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵdefineNgModule"]({
      type: AppRoutingModule
    });
    AppRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵdefineInjector"]({
      factory: function AppRoutingModule_Factory(t) {
        return new (t || AppRoutingModule)();
      },
      imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_14__["RouterModule"].forRoot(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_14__["RouterModule"]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵsetNgModuleScope"](AppRoutingModule, {
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_14__["RouterModule"]],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_14__["RouterModule"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵsetClassMetadata"](AppRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_13__["NgModule"],
        args: [{
          imports: [_angular_router__WEBPACK_IMPORTED_MODULE_14__["RouterModule"].forRoot(routes)],
          exports: [_angular_router__WEBPACK_IMPORTED_MODULE_14__["RouterModule"]]
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/app.component.ts":
  /*!**********************************!*\
    !*** ./src/app/app.component.ts ***!
    \**********************************/

  /*! exports provided: AppComponent */

  /***/
  function srcAppAppComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppComponent", function () {
      return AppComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _services_auth_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./services/auth.service */
    "./src/app/services/auth.service.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");

    var AppComponent = /*#__PURE__*/function () {
      function AppComponent(authService) {
        _classCallCheck(this, AppComponent);

        this.authService = authService;
        this.title = 'book-list';
      }

      _createClass(AppComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.loggedIn = this.authService.isAuthenticated();
        }
      }]);

      return AppComponent;
    }();

    AppComponent.ɵfac = function AppComponent_Factory(t) {
      return new (t || AppComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_auth_service__WEBPACK_IMPORTED_MODULE_1__["AuthService"]));
    };

    AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: AppComponent,
      selectors: [["app-root"]],
      decls: 2,
      vars: 0,
      consts: [[1, "container--1400"]],
      template: function AppComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "router-outlet");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      },
      directives: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterOutlet"]],
      styles: ["body[_ngcontent-%COMP%], html[_ngcontent-%COMP%] {\n  font-size: 16px;\n}\n\n.clear[_ngcontent-%COMP%] {\n  clear: both;\n}\n\n.container--1400[_ngcontent-%COMP%] {\n  max-width: 100%;\n  width: 1400px;\n  padding-right: 15px;\n  padding-left: 15px;\n  margin-right: auto;\n  margin-left: auto;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvRjpcXEZvciBCcmFpblxcQm9va3MgaW52ZW50b3J5XFxib29rLWxpc3Qvc3JjXFxhcHBcXGFwcC5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvYXBwLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOztFQUVJLGVBQUE7QUNDSjs7QURDQTtFQUNJLFdBQUE7QUNFSjs7QURDSTtFQUNJLGVBQUE7RUFDQSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSxrQkFBQTtFQUNBLGtCQUFBO0VBQ0EsaUJBQUE7QUNFUiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImJvZHksXHJcbmh0bWx7XHJcbiAgICBmb250LXNpemU6IDE2cHg7XHJcbn1cclxuLmNsZWFyIHtcclxuICAgIGNsZWFyOiBib3RoO1xyXG59XHJcbi5jb250YWluZXIge1xyXG4gICAgJi0tMTQwMHtcclxuICAgICAgICBtYXgtd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgd2lkdGg6IDE0MDBweDtcclxuICAgICAgICBwYWRkaW5nLXJpZ2h0OiAxNXB4O1xyXG4gICAgICAgIHBhZGRpbmctbGVmdDogMTVweDtcclxuICAgICAgICBtYXJnaW4tcmlnaHQ6IGF1dG87XHJcbiAgICAgICAgbWFyZ2luLWxlZnQ6IGF1dG87XHJcbiAgICB9XHJcbn0iLCJib2R5LFxuaHRtbCB7XG4gIGZvbnQtc2l6ZTogMTZweDtcbn1cblxuLmNsZWFyIHtcbiAgY2xlYXI6IGJvdGg7XG59XG5cbi5jb250YWluZXItLTE0MDAge1xuICBtYXgtd2lkdGg6IDEwMCU7XG4gIHdpZHRoOiAxNDAwcHg7XG4gIHBhZGRpbmctcmlnaHQ6IDE1cHg7XG4gIHBhZGRpbmctbGVmdDogMTVweDtcbiAgbWFyZ2luLXJpZ2h0OiBhdXRvO1xuICBtYXJnaW4tbGVmdDogYXV0bztcbn0iXX0= */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-root',
          templateUrl: './app.component.html',
          styleUrls: ['./app.component.scss']
        }]
      }], function () {
        return [{
          type: _services_auth_service__WEBPACK_IMPORTED_MODULE_1__["AuthService"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/app.module.ts":
  /*!*******************************!*\
    !*** ./src/app/app.module.ts ***!
    \*******************************/

  /*! exports provided: AppModule */

  /***/
  function srcAppAppModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppModule", function () {
      return AppModule;
    });
    /* harmony import */


    var _shared_items_shared_items_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! ./shared-items/shared-items.module */
    "./src/app/shared-items/shared-items.module.ts");
    /* harmony import */


    var _users_manager_users_manager_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./users-manager/users-manager.module */
    "./src/app/users-manager/users-manager.module.ts");
    /* harmony import */


    var _books_manager_books_manager_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./books-manager/books-manager.module */
    "./src/app/books-manager/books-manager.module.ts");
    /* harmony import */


    var _normal_user_normal_user_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./normal-user/normal-user.module */
    "./src/app/normal-user/normal-user.module.ts");
    /* harmony import */


    var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/platform-browser */
    "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
    /* harmony import */


    var _app_routing_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ./app-routing.module */
    "./src/app/app-routing.module.ts");
    /* harmony import */


    var _app_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! ./app.component */
    "./src/app/app.component.ts");
    /* harmony import */


    var _home_home_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! ./home/home.component */
    "./src/app/home/home.component.ts");
    /* harmony import */


    var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! @angular/platform-browser/animations */
    "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/animations.js");
    /* harmony import */


    var ngx_toastr__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
    /*! ngx-toastr */
    "./node_modules/ngx-toastr/__ivy_ngcc__/fesm2015/ngx-toastr.js");
    /* harmony import */


    var ng_starrating__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
    /*! ng-starrating */
    "./node_modules/ng-starrating/__ivy_ngcc__/fesm2015/ng-starrating.js");

    var AppModule = function AppModule() {
      _classCallCheck(this, AppModule);
    };

    AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineNgModule"]({
      type: AppModule,
      bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_9__["AppComponent"]]
    });
    AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineInjector"]({
      factory: function AppModule_Factory(t) {
        return new (t || AppModule)();
      },
      providers: [],
      imports: [[_angular_platform_browser__WEBPACK_IMPORTED_MODULE_4__["BrowserModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_6__["HttpClientModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_8__["AppRoutingModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormsModule"], _books_manager_books_manager_module__WEBPACK_IMPORTED_MODULE_2__["BooksManagerModule"], _users_manager_users_manager_module__WEBPACK_IMPORTED_MODULE_1__["UsersManagerModule"], _normal_user_normal_user_module__WEBPACK_IMPORTED_MODULE_3__["NormalUserModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__["ReactiveFormsModule"], _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_11__["BrowserAnimationsModule"], _shared_items_shared_items_module__WEBPACK_IMPORTED_MODULE_0__["SharedItemsModule"], ng_starrating__WEBPACK_IMPORTED_MODULE_13__["RatingModule"], ngx_toastr__WEBPACK_IMPORTED_MODULE_12__["ToastrModule"].forRoot()]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵsetNgModuleScope"](AppModule, {
        declarations: [_app_component__WEBPACK_IMPORTED_MODULE_9__["AppComponent"], _home_home_component__WEBPACK_IMPORTED_MODULE_10__["HomeComponent"]],
        imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_4__["BrowserModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_6__["HttpClientModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_8__["AppRoutingModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormsModule"], _books_manager_books_manager_module__WEBPACK_IMPORTED_MODULE_2__["BooksManagerModule"], _users_manager_users_manager_module__WEBPACK_IMPORTED_MODULE_1__["UsersManagerModule"], _normal_user_normal_user_module__WEBPACK_IMPORTED_MODULE_3__["NormalUserModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__["ReactiveFormsModule"], _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_11__["BrowserAnimationsModule"], _shared_items_shared_items_module__WEBPACK_IMPORTED_MODULE_0__["SharedItemsModule"], ng_starrating__WEBPACK_IMPORTED_MODULE_13__["RatingModule"], ngx_toastr__WEBPACK_IMPORTED_MODULE_12__["ToastrModule"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵsetClassMetadata"](AppModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_5__["NgModule"],
        args: [{
          declarations: [_app_component__WEBPACK_IMPORTED_MODULE_9__["AppComponent"], _home_home_component__WEBPACK_IMPORTED_MODULE_10__["HomeComponent"]],
          imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_4__["BrowserModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_6__["HttpClientModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_8__["AppRoutingModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormsModule"], _books_manager_books_manager_module__WEBPACK_IMPORTED_MODULE_2__["BooksManagerModule"], _users_manager_users_manager_module__WEBPACK_IMPORTED_MODULE_1__["UsersManagerModule"], _normal_user_normal_user_module__WEBPACK_IMPORTED_MODULE_3__["NormalUserModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__["ReactiveFormsModule"], _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_11__["BrowserAnimationsModule"], _shared_items_shared_items_module__WEBPACK_IMPORTED_MODULE_0__["SharedItemsModule"], ng_starrating__WEBPACK_IMPORTED_MODULE_13__["RatingModule"], ngx_toastr__WEBPACK_IMPORTED_MODULE_12__["ToastrModule"].forRoot()],
          providers: [],
          bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_9__["AppComponent"]]
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/books-manager/book-details/book-details.component.ts":
  /*!**********************************************************************!*\
    !*** ./src/app/books-manager/book-details/book-details.component.ts ***!
    \**********************************************************************/

  /*! exports provided: BookDetailsComponent */

  /***/
  function srcAppBooksManagerBookDetailsBookDetailsComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "BookDetailsComponent", function () {
      return BookDetailsComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _services_root_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ../../services/root.service */
    "./src/app/services/root.service.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _shared_items_header_header_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../../shared-items/header/header.component */
    "./src/app/shared-items/header/header.component.ts");

    var BookDetailsComponent = /*#__PURE__*/function () {
      function BookDetailsComponent(rootService, activatedRoute) {
        _classCallCheck(this, BookDetailsComponent);

        this.rootService = rootService;
        this.activatedRoute = activatedRoute;
        this.imageUrl = "http://localhost:5000/";
        this.bookDetail = {
          '_id': '',
          'title': '',
          'blurb': '',
          'author': '',
          'category': '',
          'cover': ''
        };
      }

      _createClass(BookDetailsComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var id;
          this.activatedRoute.params.subscribe(function (params) {
            id = params['id'];
          });
          this.fetchBookdetails(id);
        }
      }, {
        key: "fetchBookdetails",
        value: function fetchBookdetails(id) {
          var _this = this;

          console.log(id);
          var booksingle = {
            '_id': id
          };
          this.rootService.postAPIsingleBook(booksingle).subscribe(function (response) {
            _this.bookDetail = response;
            console.log(_this.bookDetail);
          }, function (error) {
            console.log('erred');
          }); // console.log(this.bookDetail);
        }
      }]);

      return BookDetailsComponent;
    }();

    BookDetailsComponent.ɵfac = function BookDetailsComponent_Factory(t) {
      return new (t || BookDetailsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_root_service__WEBPACK_IMPORTED_MODULE_1__["RootService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]));
    };

    BookDetailsComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: BookDetailsComponent,
      selectors: [["app-book-details"]],
      decls: 20,
      vars: 6,
      consts: [[1, "bookDetail", "row"], [1, "col-md-3", "bookDetail__left-container"], ["alt", "", 1, "bookDetail__cover", 3, "src"], [1, "col-md-9", "bookDetail__right-container"], [1, "bookDetail__heading", "bibliophile__heading"], [1, "row"], [1, "col-6"], [1, "bookDetail__meta", "bookDetail__author"], [1, "bookDetail__sub"], [1, "bookDetail__meta", "bookDetail__category"], [1, "bookDetail__description"]],
      template: function BookDetailsComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-header");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "img", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "h1", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "span", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "by");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "span", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "in");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "div", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate2"]("src", "", ctx.imageUrl, "/", ctx.bookDetail.cover, "", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx.bookDetail.title, " ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx.bookDetail.author, " ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx.bookDetail.category, " ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx.bookDetail.blurb, " ");
        }
      },
      directives: [_shared_items_header_header_component__WEBPACK_IMPORTED_MODULE_3__["HeaderComponent"]],
      styles: [".bookDetail__cover[_ngcontent-%COMP%] {\n  width: 100%;\n  height: auto;\n}\n.bookDetail__meta[_ngcontent-%COMP%] {\n  font-weight: bold;\n  font-size: 20px;\n}\n.bookDetail__sub[_ngcontent-%COMP%] {\n  font-family: \"Open Sans\", sans-serif;\n  font-weight: 300;\n}\n.bookDetail__category[_ngcontent-%COMP%] {\n  text-align: right;\n}\n.bookDetail__description[_ngcontent-%COMP%] {\n  font-family: \"Open Sans\", sans-serif;\n  margin-top: 30px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYm9va3MtbWFuYWdlci9ib29rLWRldGFpbHMvRjpcXEZvciBCcmFpblxcQm9va3MgaW52ZW50b3J5XFxib29rLWxpc3Qvc3JjXFxhcHBcXGJvb2tzLW1hbmFnZXJcXGJvb2stZGV0YWlsc1xcYm9vay1kZXRhaWxzLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9ib29rcy1tYW5hZ2VyL2Jvb2stZGV0YWlscy9ib29rLWRldGFpbHMuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQ0k7RUFDSSxXQUFBO0VBQ0EsWUFBQTtBQ0FSO0FERUk7RUFDSSxpQkFBQTtFQUNBLGVBQUE7QUNBUjtBREVJO0VBQ0ksb0NBQUE7RUFDQSxnQkFBQTtBQ0FSO0FERUk7RUFDSSxpQkFBQTtBQ0FSO0FERUk7RUFDSSxvQ0FBQTtFQUNBLGdCQUFBO0FDQVIiLCJmaWxlIjoic3JjL2FwcC9ib29rcy1tYW5hZ2VyL2Jvb2stZGV0YWlscy9ib29rLWRldGFpbHMuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuYm9va0RldGFpbCB7XHJcbiAgICAmX19jb3ZlciB7XHJcbiAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgaGVpZ2h0OiBhdXRvO1xyXG4gICAgfVxyXG4gICAgJl9fbWV0YSB7XHJcbiAgICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgICAgICAgZm9udC1zaXplOiAyMHB4O1xyXG4gICAgfVxyXG4gICAgJl9fc3ViIHtcclxuICAgICAgICBmb250LWZhbWlseTogXCJPcGVuIFNhbnNcIiwgc2Fucy1zZXJpZjtcclxuICAgICAgICBmb250LXdlaWdodDogMzAwO1xyXG4gICAgfVxyXG4gICAgJl9fY2F0ZWdvcnkge1xyXG4gICAgICAgIHRleHQtYWxpZ246IHJpZ2h0O1xyXG4gICAgfVxyXG4gICAgJl9fZGVzY3JpcHRpb24ge1xyXG4gICAgICAgIGZvbnQtZmFtaWx5OiBcIk9wZW4gU2Fuc1wiLCBzYW5zLXNlcmlmO1xyXG4gICAgICAgIG1hcmdpbi10b3A6IDMwcHg7XHJcbiAgICB9XHJcbn0iLCIuYm9va0RldGFpbF9fY292ZXIge1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiBhdXRvO1xufVxuLmJvb2tEZXRhaWxfX21ldGEge1xuICBmb250LXdlaWdodDogYm9sZDtcbiAgZm9udC1zaXplOiAyMHB4O1xufVxuLmJvb2tEZXRhaWxfX3N1YiB7XG4gIGZvbnQtZmFtaWx5OiBcIk9wZW4gU2Fuc1wiLCBzYW5zLXNlcmlmO1xuICBmb250LXdlaWdodDogMzAwO1xufVxuLmJvb2tEZXRhaWxfX2NhdGVnb3J5IHtcbiAgdGV4dC1hbGlnbjogcmlnaHQ7XG59XG4uYm9va0RldGFpbF9fZGVzY3JpcHRpb24ge1xuICBmb250LWZhbWlseTogXCJPcGVuIFNhbnNcIiwgc2Fucy1zZXJpZjtcbiAgbWFyZ2luLXRvcDogMzBweDtcbn0iXX0= */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](BookDetailsComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-book-details',
          templateUrl: './book-details.component.html',
          styleUrls: ['./book-details.component.scss']
        }]
      }], function () {
        return [{
          type: _services_root_service__WEBPACK_IMPORTED_MODULE_1__["RootService"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/books-manager/book/book.component.ts":
  /*!******************************************************!*\
    !*** ./src/app/books-manager/book/book.component.ts ***!
    \******************************************************/

  /*! exports provided: BookComponent */

  /***/
  function srcAppBooksManagerBookBookComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "BookComponent", function () {
      return BookComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
    /* harmony import */


    var _services_root_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../../services/root.service */
    "./src/app/services/root.service.ts");
    /* harmony import */


    var _services_auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./../../services/auth.service */
    "./src/app/services/auth.service.ts");
    /* harmony import */


    var _services_upload_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./../../services/upload.service */
    "./src/app/services/upload.service.ts");
    /* harmony import */


    var ngx_toastr__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ngx-toastr */
    "./node_modules/ngx-toastr/__ivy_ngcc__/fesm2015/ngx-toastr.js");
    /* harmony import */


    var _shared_items_header_header_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ../../shared-items/header/header.component */
    "./src/app/shared-items/header/header.component.ts");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");

    function BookComponent_div_1_div_4_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 20);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r2.error.message, " ");
      }
    }

    function BookComponent_div_1_div_5_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 21);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r3.uploadResponse.message, " ");
      }
    }

    function BookComponent_div_1_div_6_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 22);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 23);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleProp"]("width", ctx_r4.uploadResponse.message, "%");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r4.uploadResponse.message, "% ");
      }
    }

    function BookComponent_div_1_span_12_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 24);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Title is required ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function BookComponent_div_1_span_17_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 24);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Author is required ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function BookComponent_div_1_Template(rf, ctx) {
      if (rf & 1) {
        var _r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h2", 3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Add Books");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, BookComponent_div_1_div_4_Template, 2, 1, "div", 5);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, BookComponent_div_1_div_5_Template, 2, 1, "div", 6);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, BookComponent_div_1_div_6_Template, 3, 3, "div", 7);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "form", 8);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngSubmit", function BookComponent_div_1_Template_form_ngSubmit_7_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r8);

          var ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          ctx_r7.addBooks();
          return ctx_r7.booksForm.reset();
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 9);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "label", 10);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "Title");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "input", 11);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](12, BookComponent_div_1_span_12_Template, 2, 0, "span", 12);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 9);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "label", 13);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "Author");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](16, "input", 14);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](17, BookComponent_div_1_span_17_Template, 2, 0, "span", 12);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "div", 9);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "label", 13);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, "Category");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](21, "input", 15);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "div", 9);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "label", 13);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, "Blurb");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](25, "textarea", 16);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "div", 9);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "input", 17);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function BookComponent_div_1_Template_input_change_27_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r8);

          var ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r9.onFileChange($event);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "button", 18);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](29, "Submit");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "button", 19);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function BookComponent_div_1_Template_button_click_30_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r8);

          var ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r10.cancelAddBooks();
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](31, "Cancel");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.error);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.uploadResponse.status === "error");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.uploadResponse.status === "progress");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx_r0.booksForm);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", (ctx_r0.f.title.touched || ctx_r0.submitted) && (ctx_r0.f.title.errors == null ? null : ctx_r0.f.title.errors.required));

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", (ctx_r0.f.author.touched || ctx_r0.submitted) && (ctx_r0.f.author.errors == null ? null : ctx_r0.f.author.errors.required));
      }
    }

    function BookComponent_div_2_div_3_Template(rf, ctx) {
      if (rf & 1) {
        var _r14 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 28);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 30);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "button", 31);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function BookComponent_div_2_div_3_Template_button_click_2_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r14);

          var ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

          return ctx_r13.enableAddBooks();
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Add new book");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function BookComponent_div_2_div_5_div_9_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 41);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](2, "slice");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var book_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" Summary: ", book_r15.blurb.length > 300 ? _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind3"](2, 1, book_r15.blurb, 0, 300) + ".." : book_r15.blurb, " ");
      }
    }

    function BookComponent_div_2_div_5_div_10_Template(rf, ctx) {
      if (rf & 1) {
        var _r21 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 42);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "button", 43);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function BookComponent_div_2_div_5_div_10_Template_button_click_1_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r21);

          var book_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;

          var ctx_r19 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

          return ctx_r19.updateBook(book_r15);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Update Book");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "button", 44);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function BookComponent_div_2_div_5_div_10_Template_button_click_3_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r21);

          var book_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;

          var ctx_r22 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

          return ctx_r22.removeBook(book_r15);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Delete Book");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function BookComponent_div_2_div_5_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 32);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 33);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 34);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "a", 35);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "div", 36);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "a", 37);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "h6", 38);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](9, BookComponent_div_2_div_5_div_9_Template, 3, 5, "div", 39);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](10, BookComponent_div_2_div_5_div_10_Template, 5, 0, "div", 40);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var book_r15 = ctx.$implicit;

        var ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("active", ctx_r12.loggedIn);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate1"]("routerLink", "/bookdetails/", book_r15._id, "");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleMapInterpolate2"]("background-image:url(", ctx_r12.imageUrl, "/", book_r15.cover, ")");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate1"]("routerLink", "/bookdetails/", book_r15._id, "");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", book_r15.title, " ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", book_r15.author, " ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", book_r15.blurb);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r12.loggedIn);
      }
    }

    function BookComponent_div_2_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 25);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h1", 26);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Books");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, BookComponent_div_2_div_3_Template, 4, 0, "div", 27);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 28);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, BookComponent_div_2_div_5_Template, 11, 12, "div", 29);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r1.loggedIn);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r1.books);
      }
    }

    var BookComponent = /*#__PURE__*/function () {
      // newBook = new BookInventory('','','','','');
      function BookComponent(rootService, authService, formBuilder, uploadService, toastr) {
        _classCallCheck(this, BookComponent);

        this.rootService = rootService;
        this.authService = authService;
        this.formBuilder = formBuilder;
        this.uploadService = uploadService;
        this.toastr = toastr; // books = books;

        this.imageUrl = "http://localhost:5000/";
        this.submitted = false;
        this.updating = false;
        this.enableaddBooks = false;
        this.userId = 1;
        this.uploadResponse = {
          status: '',
          message: '',
          filePath: ''
        };
      }

      _createClass(BookComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.getBooks();
          this.loggedIn = this.authService.isAuthenticated();
          this.booksForm = this.formBuilder.group({
            title: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            author: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            category: [''],
            blurb: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].minLength(20), _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].maxLength(400)]],
            cover: []
          });
          this.booksOrgForm = this.formBuilder.group({
            title: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            author: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            category: [''],
            blurb: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].minLength(20), _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].maxLength(400)]],
            cover: []
          });
        }
      }, {
        key: "share",
        value: function share() {
          window.alert('Book Shared');
        }
      }, {
        key: "addBooks",
        value: function addBooks() {
          var _this2 = this;

          this.submitted = true;
          this.enableaddBooks = false;
          var titleval = this.booksForm.value.title;
          ;
          var authorval = this.booksForm.value.author;
          var catval = this.booksForm.value.category;
          var blurbval = this.booksForm.value.blurb;
          var coverval = this.booksForm.value.cover;
          var newBookItem;

          if (coverval != "") {
            var filename = coverval.replace(/^.*[\\\/]/, '');
            var fileExt = filename.split('.').pop();
            var covername = titleval.split(' ').join('_') + '_' + authorval.split(' ').join('_') + "." + fileExt;
            var formData = new FormData();
            formData.append('file', this.booksForm.get('cover').value, covername);
            this.uploadService.upload(formData).subscribe(function (res) {
              return _this2.uploadResponse = res;
            }, function (err) {
              return _this2.error = err;
            });
            newBookItem = {
              'title': titleval,
              'author': authorval,
              'category': catval,
              'blurb': blurbval,
              'cover': covername
            };
          } else {
            newBookItem = {
              'title': titleval,
              'author': authorval,
              'category': catval,
              'blurb': blurbval
            };
          }

          if (this.updating) {
            console.log("Original");
            console.log(this.booksOrgForm);
            var orgcoverval = this.booksOrgForm.value.cover;
            var originalData = {
              'cover': orgcoverval
            };
            this.rootService.postAPIUpdateData(newBookItem, originalData).subscribe(function (response) {
              console.log(response);

              _this2.getBooks();

              _this2.updating = false;

              _this2.toastr.success("Book Updated!");
            }, function (error) {
              console.log('error is ', error);

              _this2.toastr.error("Book update failed!");
            });
          } else {
            this.rootService.postAPIData(newBookItem).subscribe(function (response) {
              console.log(response);

              _this2.getBooks();

              _this2.toastr.success("New Book Added!");
            }, function (error) {
              console.log('error is ', error);

              _this2.toastr.error("New book adding failed!");
            });
          }
        }
      }, {
        key: "getBooks",
        value: function getBooks() {
          var _this3 = this;

          this.rootService.getAPIData().subscribe(function (response) {
            console.log(response);
            _this3.books = response['booklists'];
          }, function (error) {
            console.log('error is ', error);
          });
        }
      }, {
        key: "removeBook",
        value: function removeBook(book) {
          var _this4 = this;

          // console.log('Remove book');
          // console.log(cover);
          var bookVal = book;
          this.rootService.removeAPIData(bookVal).subscribe(function (response) {
            console.log(response);

            _this4.getBooks();

            _this4.toastr.success("Book Removed!");
          }, function (error) {
            console.log('error is ', error);
          });
        }
      }, {
        key: "updateBook",
        value: function updateBook(book) {
          this.updating = true;
          this.enableaddBooks = true;
          window.scroll(0, 0);
          this.booksForm.get('title').setValue(book.title);
          this.booksForm.get('author').setValue(book.author);
          this.booksForm.get('category').setValue(book.category);
          this.booksForm.get('blurb').setValue(book.blurb);
          this.booksForm.get('cover').setValue('');
          this.booksOrgForm.get('title').setValue(book.title);
          this.booksOrgForm.get('author').setValue(book.author);
          this.booksOrgForm.get('category').setValue(book.category);
          this.booksOrgForm.get('blurb').setValue(book.blurb);
          this.booksOrgForm.get('cover').setValue(book.cover);
        }
      }, {
        key: "onFileChange",
        value: function onFileChange(event) {
          if (event.target.files.length > 0) {
            var file = event.target.files[0];
            this.booksForm.get('cover').setValue(file);
          }
        }
      }, {
        key: "enableAddBooks",
        value: function enableAddBooks() {
          this.enableaddBooks = true;
        }
      }, {
        key: "cancelAddBooks",
        value: function cancelAddBooks() {
          this.enableaddBooks = false;
          this.booksForm.get('title').setValue('');
          this.booksForm.get('author').setValue('');
          this.booksForm.get('category').setValue('');
          this.booksForm.get('blurb').setValue('');
          this.booksForm.get('cover').setValue('');
        }
      }, {
        key: "f",
        get: function get() {
          return this.booksForm.controls;
        }
      }]);

      return BookComponent;
    }();

    BookComponent.ɵfac = function BookComponent_Factory(t) {
      return new (t || BookComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_root_service__WEBPACK_IMPORTED_MODULE_2__["RootService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_upload_service__WEBPACK_IMPORTED_MODULE_4__["UploadService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](ngx_toastr__WEBPACK_IMPORTED_MODULE_5__["ToastrService"]));
    };

    BookComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: BookComponent,
      selectors: [["app-book"]],
      decls: 3,
      vars: 2,
      consts: [["class", "books__add-container", 4, "ngIf"], ["class", "book__container", 4, "ngIf"], [1, "books__add-container"], [1, "bibliophile__heading"], [1, "Status-message"], ["class", "error", 4, "ngIf"], ["class", "error occured", 4, "ngIf"], ["class", "progress", 4, "ngIf"], ["enctype", "multipart/form-data", 3, "formGroup", "ngSubmit"], [1, "form-group"], ["for", "title"], ["type", "text", "id", "title", "name", "title", "formControlName", "title", 1, "form-control"], ["class", "text-danger", 4, "ngIf"], ["for", "alterEgo"], ["type", "text", "id", "author", "name", "author", "formControlName", "author", 1, "form-control"], ["type", "text", "id", "category", "name", "category", "formControlName", "category", 1, "form-control"], ["name", "blurb", "id", "blurb", "cols", "30", "rows", "10", "formControlName", "blurb", 1, "form-control"], ["type", "file", "name", "cover", "id", "cover", "formControlName", "cover", 1, "form-control", 3, "change"], ["type", "submit", 1, "btn", "btn-primary"], [1, "btn", "btn-danger", "book__cancel-button", 3, "click"], [1, "error"], [1, "error", "occured"], [1, "progress"], ["role", "progressbar", "aria-valuenow", "25", "aria-valuemin", "0", "aria-valuemax", "100", 1, "progress", "ing"], [1, "text-danger"], [1, "book__container"], [1, "book__page-title", "bibliophile__heading"], ["class", "row", 4, "ngIf"], [1, "row"], ["class", "col-md-3", 4, "ngFor", "ngForOf"], [1, "col-12", "book__add-main-button-container"], [1, "btn", "btn-primary", "book__add-main-button", 3, "click"], [1, "col-md-3"], [1, "card", "book__item"], [1, "card-body", "book__item-container"], [3, "routerLink"], [1, "book__cover"], [1, "card-title", "book__main-title", 3, "routerLink"], [1, "card-subtitle", "book__sub-title"], ["class", "card-text book__description", 4, "ngIf"], ["class", "book__button-container", 4, "ngIf"], [1, "card-text", "book__description"], [1, "book__button-container"], [1, "btn", "btn-primary", "book__update", 3, "click"], [1, "btn", "btn-danger", "book__delete", 3, "click"]],
      template: function BookComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-header");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, BookComponent_div_1_Template, 32, 6, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, BookComponent_div_2_Template, 6, 2, "div", 1);
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.enableaddBooks);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.enableaddBooks);
        }
      },
      directives: [_shared_items_header_header_component__WEBPACK_IMPORTED_MODULE_6__["HeaderComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_7__["NgIf"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroupDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControlName"], _angular_common__WEBPACK_IMPORTED_MODULE_7__["NgForOf"], _angular_router__WEBPACK_IMPORTED_MODULE_8__["RouterLinkWithHref"]],
      pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_7__["SlicePipe"]],
      styles: [".book__container[_ngcontent-%COMP%] {\n  margin-top: 20px;\n}\n.book__item[_ngcontent-%COMP%] {\n  margin-bottom: 20px;\n  min-height: 836px;\n}\n.book__item.active[_ngcontent-%COMP%] {\n  min-height: 850px;\n}\n.book__item-container[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  justify-content: space-between;\n}\n.book__update[_ngcontent-%COMP%] {\n  margin-right: 20px;\n}\n.book__cover[_ngcontent-%COMP%] {\n  height: 400px;\n  background-size: cover;\n  background-repeat: no-repeat;\n}\n.book__main-title[_ngcontent-%COMP%] {\n  font-size: 24px;\n  margin-top: 40px;\n  color: #000;\n}\n.book__main-title[_ngcontent-%COMP%]:hover {\n  text-decoration: none;\n}\n.book__sub-title[_ngcontent-%COMP%] {\n  font-size: 18px;\n  color: #777;\n}\n.book__description[_ngcontent-%COMP%] {\n  font-size: 16px;\n  line-height: 22px;\n  font-family: \"Open Sans\", sans-serif;\n  font-weight: 300;\n  line-height: 26px;\n}\n.book__add-main-button[_ngcontent-%COMP%] {\n  float: right;\n}\n.book__add-main-button-container[_ngcontent-%COMP%] {\n  margin-bottom: 20px;\n}\n.book__cancel-button[_ngcontent-%COMP%] {\n  font-size: 20px;\n  margin-left: 20px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYm9va3MtbWFuYWdlci9ib29rL0Y6XFxGb3IgQnJhaW5cXEJvb2tzIGludmVudG9yeVxcYm9vay1saXN0L3NyY1xcYXBwXFxib29rcy1tYW5hZ2VyXFxib29rXFxib29rLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9ib29rcy1tYW5hZ2VyL2Jvb2svYm9vay5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDSTtFQUNJLGdCQUFBO0FDQVI7QURFSTtFQUNJLG1CQUFBO0VBQ0EsaUJBQUE7QUNBUjtBRENRO0VBQ0ksaUJBQUE7QUNDWjtBREVJO0VBQ0ksYUFBQTtFQUNBLHNCQUFBO0VBQ0EsOEJBQUE7QUNBUjtBREVJO0VBQ0ksa0JBQUE7QUNBUjtBREVJO0VBQ0ksYUFBQTtFQUNBLHNCQUFBO0VBQ0EsNEJBQUE7QUNBUjtBREVJO0VBQ0ksZUFBQTtFQUNBLGdCQUFBO0VBQ0EsV0FBQTtBQ0FSO0FEQ1E7RUFDSSxxQkFBQTtBQ0NaO0FERUk7RUFDSSxlQUFBO0VBQ0EsV0FBQTtBQ0FSO0FERUk7RUFDSSxlQUFBO0VBQ0EsaUJBQUE7RUFDQSxvQ0FBQTtFQUNBLGdCQUFBO0VBQ0EsaUJBQUE7QUNBUjtBREVJO0VBQ0ksWUFBQTtBQ0FSO0FERUk7RUFDSSxtQkFBQTtBQ0FSO0FERUk7RUFDSSxlQUFBO0VBQ0EsaUJBQUE7QUNBUiIsImZpbGUiOiJzcmMvYXBwL2Jvb2tzLW1hbmFnZXIvYm9vay9ib29rLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmJvb2sge1xyXG4gICAgJl9fY29udGFpbmVyIHtcclxuICAgICAgICBtYXJnaW4tdG9wOiAyMHB4O1xyXG4gICAgfVxyXG4gICAgJl9faXRlbSB7XHJcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogMjBweDtcclxuICAgICAgICBtaW4taGVpZ2h0OiA4MzZweDtcclxuICAgICAgICAmLmFjdGl2ZSB7XHJcbiAgICAgICAgICAgIG1pbi1oZWlnaHQ6IDg1MHB4O1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgICZfX2l0ZW0tY29udGFpbmVyIHtcclxuICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG4gICAgfVxyXG4gICAgJl9fdXBkYXRlIHtcclxuICAgICAgICBtYXJnaW4tcmlnaHQ6IDIwcHg7XHJcbiAgICB9XHJcbiAgICAmX19jb3ZlciB7XHJcbiAgICAgICAgaGVpZ2h0OiA0MDBweDtcclxuICAgICAgICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xyXG4gICAgICAgIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XHJcbiAgICB9XHJcbiAgICAmX19tYWluLXRpdGxlIHtcclxuICAgICAgICBmb250LXNpemU6IDI0cHg7XHJcbiAgICAgICAgbWFyZ2luLXRvcDogNDBweDtcclxuICAgICAgICBjb2xvcjogIzAwMDtcclxuICAgICAgICAmOmhvdmVyIHtcclxuICAgICAgICAgICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgICZfX3N1Yi10aXRsZSB7XHJcbiAgICAgICAgZm9udC1zaXplOiAxOHB4O1xyXG4gICAgICAgIGNvbG9yOiAjNzc3O1xyXG4gICAgfVxyXG4gICAgJl9fZGVzY3JpcHRpb24ge1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMTZweDtcclxuICAgICAgICBsaW5lLWhlaWdodDogMjJweDtcclxuICAgICAgICBmb250LWZhbWlseTogJ09wZW4gU2FucycsIHNhbnMtc2VyaWY7XHJcbiAgICAgICAgZm9udC13ZWlnaHQ6IDMwMDtcclxuICAgICAgICBsaW5lLWhlaWdodDogMjZweDtcclxuICAgIH1cclxuICAgICZfX2FkZC1tYWluLWJ1dHRvbiB7XHJcbiAgICAgICAgZmxvYXQ6IHJpZ2h0O1xyXG4gICAgfVxyXG4gICAgJl9fYWRkLW1haW4tYnV0dG9uLWNvbnRhaW5lciB7XHJcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogMjBweDtcclxuICAgIH1cclxuICAgICZfX2NhbmNlbC1idXR0b24ge1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMjBweDtcclxuICAgICAgICBtYXJnaW4tbGVmdDogMjBweDtcclxuICAgIH1cclxufSIsIi5ib29rX19jb250YWluZXIge1xuICBtYXJnaW4tdG9wOiAyMHB4O1xufVxuLmJvb2tfX2l0ZW0ge1xuICBtYXJnaW4tYm90dG9tOiAyMHB4O1xuICBtaW4taGVpZ2h0OiA4MzZweDtcbn1cbi5ib29rX19pdGVtLmFjdGl2ZSB7XG4gIG1pbi1oZWlnaHQ6IDg1MHB4O1xufVxuLmJvb2tfX2l0ZW0tY29udGFpbmVyIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xufVxuLmJvb2tfX3VwZGF0ZSB7XG4gIG1hcmdpbi1yaWdodDogMjBweDtcbn1cbi5ib29rX19jb3ZlciB7XG4gIGhlaWdodDogNDAwcHg7XG4gIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XG4gIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XG59XG4uYm9va19fbWFpbi10aXRsZSB7XG4gIGZvbnQtc2l6ZTogMjRweDtcbiAgbWFyZ2luLXRvcDogNDBweDtcbiAgY29sb3I6ICMwMDA7XG59XG4uYm9va19fbWFpbi10aXRsZTpob3ZlciB7XG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbn1cbi5ib29rX19zdWItdGl0bGUge1xuICBmb250LXNpemU6IDE4cHg7XG4gIGNvbG9yOiAjNzc3O1xufVxuLmJvb2tfX2Rlc2NyaXB0aW9uIHtcbiAgZm9udC1zaXplOiAxNnB4O1xuICBsaW5lLWhlaWdodDogMjJweDtcbiAgZm9udC1mYW1pbHk6IFwiT3BlbiBTYW5zXCIsIHNhbnMtc2VyaWY7XG4gIGZvbnQtd2VpZ2h0OiAzMDA7XG4gIGxpbmUtaGVpZ2h0OiAyNnB4O1xufVxuLmJvb2tfX2FkZC1tYWluLWJ1dHRvbiB7XG4gIGZsb2F0OiByaWdodDtcbn1cbi5ib29rX19hZGQtbWFpbi1idXR0b24tY29udGFpbmVyIHtcbiAgbWFyZ2luLWJvdHRvbTogMjBweDtcbn1cbi5ib29rX19jYW5jZWwtYnV0dG9uIHtcbiAgZm9udC1zaXplOiAyMHB4O1xuICBtYXJnaW4tbGVmdDogMjBweDtcbn0iXX0= */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](BookComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-book',
          templateUrl: './book.component.html',
          styleUrls: ['./book.component.scss']
        }]
      }], function () {
        return [{
          type: _services_root_service__WEBPACK_IMPORTED_MODULE_2__["RootService"]
        }, {
          type: _services_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"]
        }, {
          type: _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"]
        }, {
          type: _services_upload_service__WEBPACK_IMPORTED_MODULE_4__["UploadService"]
        }, {
          type: ngx_toastr__WEBPACK_IMPORTED_MODULE_5__["ToastrService"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/books-manager/books-manager.module.ts":
  /*!*******************************************************!*\
    !*** ./src/app/books-manager/books-manager.module.ts ***!
    \*******************************************************/

  /*! exports provided: BooksManagerModule */

  /***/
  function srcAppBooksManagerBooksManagerModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "BooksManagerModule", function () {
      return BooksManagerModule;
    });
    /* harmony import */


    var _shared_items_shared_items_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! ./../shared-items/shared-items.module */
    "./src/app/shared-items/shared-items.module.ts");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _book_book_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./book/book.component */
    "./src/app/books-manager/book/book.component.ts");
    /* harmony import */


    var _app_routing_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./../app-routing.module */
    "./src/app/app-routing.module.ts");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
    /* harmony import */


    var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @angular/platform-browser/animations */
    "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/animations.js");
    /* harmony import */


    var ngx_toastr__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ngx-toastr */
    "./node_modules/ngx-toastr/__ivy_ngcc__/fesm2015/ngx-toastr.js");
    /* harmony import */


    var _book_details_book_details_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ./book-details/book-details.component */
    "./src/app/books-manager/book-details/book-details.component.ts");
    /* harmony import */


    var _user_books_user_books_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! ./user-books/user-books.component */
    "./src/app/books-manager/user-books/user-books.component.ts");
    /* harmony import */


    var _user_book_details_user_book_details_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! ./user-book-details/user-book-details.component */
    "./src/app/books-manager/user-book-details/user-book-details.component.ts");
    /* harmony import */


    var ng_starrating__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! ng-starrating */
    "./node_modules/ng-starrating/__ivy_ngcc__/fesm2015/ng-starrating.js");

    var BooksManagerModule = function BooksManagerModule() {
      _classCallCheck(this, BooksManagerModule);
    };

    BooksManagerModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({
      type: BooksManagerModule
    });
    BooksManagerModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({
      factory: function BooksManagerModule_Factory(t) {
        return new (t || BooksManagerModule)();
      },
      imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["ReactiveFormsModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_4__["AppRoutingModule"], _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_6__["BrowserAnimationsModule"], _shared_items_shared_items_module__WEBPACK_IMPORTED_MODULE_0__["SharedItemsModule"], ng_starrating__WEBPACK_IMPORTED_MODULE_11__["RatingModule"], ngx_toastr__WEBPACK_IMPORTED_MODULE_7__["ToastrModule"].forRoot()]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](BooksManagerModule, {
        declarations: [_book_book_component__WEBPACK_IMPORTED_MODULE_3__["BookComponent"], _book_details_book_details_component__WEBPACK_IMPORTED_MODULE_8__["BookDetailsComponent"], _user_books_user_books_component__WEBPACK_IMPORTED_MODULE_9__["UserBooksComponent"], _user_book_details_user_book_details_component__WEBPACK_IMPORTED_MODULE_10__["UserBookDetailsComponent"]],
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["ReactiveFormsModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_4__["AppRoutingModule"], _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_6__["BrowserAnimationsModule"], _shared_items_shared_items_module__WEBPACK_IMPORTED_MODULE_0__["SharedItemsModule"], ng_starrating__WEBPACK_IMPORTED_MODULE_11__["RatingModule"], ngx_toastr__WEBPACK_IMPORTED_MODULE_7__["ToastrModule"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](BooksManagerModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
          declarations: [_book_book_component__WEBPACK_IMPORTED_MODULE_3__["BookComponent"], _book_details_book_details_component__WEBPACK_IMPORTED_MODULE_8__["BookDetailsComponent"], _user_books_user_books_component__WEBPACK_IMPORTED_MODULE_9__["UserBooksComponent"], _user_book_details_user_book_details_component__WEBPACK_IMPORTED_MODULE_10__["UserBookDetailsComponent"]],
          imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["ReactiveFormsModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_4__["AppRoutingModule"], _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_6__["BrowserAnimationsModule"], _shared_items_shared_items_module__WEBPACK_IMPORTED_MODULE_0__["SharedItemsModule"], ng_starrating__WEBPACK_IMPORTED_MODULE_11__["RatingModule"], ngx_toastr__WEBPACK_IMPORTED_MODULE_7__["ToastrModule"].forRoot()]
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/books-manager/user-book-details/user-book-details.component.ts":
  /*!********************************************************************************!*\
    !*** ./src/app/books-manager/user-book-details/user-book-details.component.ts ***!
    \********************************************************************************/

  /*! exports provided: UserBookDetailsComponent */

  /***/
  function srcAppBooksManagerUserBookDetailsUserBookDetailsComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "UserBookDetailsComponent", function () {
      return UserBookDetailsComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _services_root_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ../../services/root.service */
    "./src/app/services/root.service.ts");
    /* harmony import */


    var _services_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./../../services/auth.service */
    "./src/app/services/auth.service.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var ngx_toastr__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ngx-toastr */
    "./node_modules/ngx-toastr/__ivy_ngcc__/fesm2015/ngx-toastr.js");
    /* harmony import */


    var _shared_items_header_header_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ../../shared-items/header/header.component */
    "./src/app/shared-items/header/header.component.ts");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var ng_starrating__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ng-starrating */
    "./node_modules/ng-starrating/__ivy_ngcc__/fesm2015/ng-starrating.js");

    function UserBookDetailsComponent_div_20_Template(rf, ctx) {
      if (rf & 1) {
        var _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 12);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "star-rating", 13);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("rate", function UserBookDetailsComponent_div_20_Template_star_rating_rate_1_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r2);

          var ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r1.onRate($event);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "button", 14);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Review");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("totalstars", ctx_r0.totalstar);
      }
    }

    var UserBookDetailsComponent = /*#__PURE__*/function () {
      function UserBookDetailsComponent(rootService, authService, activatedRoute, toastr) {
        _classCallCheck(this, UserBookDetailsComponent);

        this.rootService = rootService;
        this.authService = authService;
        this.activatedRoute = activatedRoute;
        this.toastr = toastr;
        this.totalstar = 5;
        this.imageUrl = "http://localhost:5000/";
        this.bookDetail = {
          '_id': '',
          'title': '',
          'blurb': '',
          'author': '',
          'category': '',
          'cover': ''
        };
        this.userId = "";
      }

      _createClass(UserBookDetailsComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var id;
          this.loggedIn = this.authService.isAuthenticated();
          this.activatedRoute.params.subscribe(function (params) {
            id = params['id'];
          });
          this.fetchBookdetails(id);

          if (this.loggedIn) {
            var userdet = localStorage.getItem('userInfo');
            var data = JSON.parse(userdet);
            this.userId = data.id;
          }
        }
      }, {
        key: "fetchBookdetails",
        value: function fetchBookdetails(id) {
          var _this5 = this;

          console.log(id);
          var booksingle = {
            '_id': id
          };
          this.rootService.postAPIsingleBook(booksingle).subscribe(function (response) {
            _this5.bookDetail = response;
            console.log(_this5.bookDetail);
          }, function (error) {
            console.log('erred');
          }); // console.log(this.bookDetail);
        }
      }, {
        key: "onRate",
        value: function onRate($event) {
          var _this6 = this;

          // console.log(this.bookDetail._id);
          // console.log(this.userId);
          // console.log(`${$event.newValue}`);
          var newRatingItem = {
            'bookid': this.bookDetail._id,
            'userid': this.userId,
            'value': $event.newValue,
            'oldValue': $event.oldValue
          };
          this.rootService.postRatingData(newRatingItem).subscribe(function (response) {
            console.log(response);

            _this6.toastr.success("Rating Succesful");
          }, function (error) {
            console.log('error is ', error);

            _this6.toastr.error("Rating Failed");
          });
        }
      }]);

      return UserBookDetailsComponent;
    }();

    UserBookDetailsComponent.ɵfac = function UserBookDetailsComponent_Factory(t) {
      return new (t || UserBookDetailsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_root_service__WEBPACK_IMPORTED_MODULE_1__["RootService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](ngx_toastr__WEBPACK_IMPORTED_MODULE_4__["ToastrService"]));
    };

    UserBookDetailsComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: UserBookDetailsComponent,
      selectors: [["app-user-book-details"]],
      decls: 21,
      vars: 7,
      consts: [[1, "bookDetail", "row"], [1, "col-md-3", "bookDetail__left-container"], ["alt", "", 1, "bookDetail__cover", 3, "src"], [1, "col-md-9", "bookDetail__right-container"], [1, "bookDetail__heading", "bibliophile__heading"], [1, "row"], [1, "col-6"], [1, "bookDetail__meta", "bookDetail__author"], [1, "bookDetail__sub"], [1, "bookDetail__meta", "bookDetail__category"], [1, "bookDetail__description"], ["class", "book__button-container", 4, "ngIf"], [1, "book__button-container"], ["value", "5", "checkedcolor", "red", "uncheckedcolor", "gray", "size", "24px", "readonly", "false", 3, "totalstars", "rate"], [1, "btn", "btn-primary", "book__review"]],
      template: function UserBookDetailsComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-header");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "img", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "h1", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "span", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "by");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "span", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "in");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "div", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](20, UserBookDetailsComponent_div_20_Template, 4, 1, "div", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate2"]("src", "", ctx.imageUrl, "/", ctx.bookDetail.cover, "", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx.bookDetail.title, " ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx.bookDetail.author, " ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx.bookDetail.category, " ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx.bookDetail.blurb, " ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.loggedIn);
        }
      },
      directives: [_shared_items_header_header_component__WEBPACK_IMPORTED_MODULE_5__["HeaderComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["NgIf"], ng_starrating__WEBPACK_IMPORTED_MODULE_7__["StarRatingComponent"]],
      styles: [".bookDetail__cover[_ngcontent-%COMP%] {\n  width: 100%;\n  height: auto;\n}\n.bookDetail__meta[_ngcontent-%COMP%] {\n  font-weight: bold;\n  font-size: 20px;\n}\n.bookDetail__sub[_ngcontent-%COMP%] {\n  font-family: \"Open Sans\", sans-serif;\n  font-weight: 300;\n}\n.bookDetail__category[_ngcontent-%COMP%] {\n  text-align: right;\n}\n.bookDetail__description[_ngcontent-%COMP%] {\n  font-family: \"Open Sans\", sans-serif;\n  margin-top: 30px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYm9va3MtbWFuYWdlci91c2VyLWJvb2stZGV0YWlscy9GOlxcRm9yIEJyYWluXFxCb29rcyBpbnZlbnRvcnlcXGJvb2stbGlzdC9zcmNcXGFwcFxcYm9va3MtbWFuYWdlclxcdXNlci1ib29rLWRldGFpbHNcXHVzZXItYm9vay1kZXRhaWxzLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9ib29rcy1tYW5hZ2VyL3VzZXItYm9vay1kZXRhaWxzL3VzZXItYm9vay1kZXRhaWxzLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUNJO0VBQ0ksV0FBQTtFQUNBLFlBQUE7QUNBUjtBREVJO0VBQ0ksaUJBQUE7RUFDQSxlQUFBO0FDQVI7QURFSTtFQUNJLG9DQUFBO0VBQ0EsZ0JBQUE7QUNBUjtBREVJO0VBQ0ksaUJBQUE7QUNBUjtBREVJO0VBQ0ksb0NBQUE7RUFDQSxnQkFBQTtBQ0FSIiwiZmlsZSI6InNyYy9hcHAvYm9va3MtbWFuYWdlci91c2VyLWJvb2stZGV0YWlscy91c2VyLWJvb2stZGV0YWlscy5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5ib29rRGV0YWlsIHtcclxuICAgICZfX2NvdmVyIHtcclxuICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICBoZWlnaHQ6IGF1dG87XHJcbiAgICB9XHJcbiAgICAmX19tZXRhIHtcclxuICAgICAgICBmb250LXdlaWdodDogYm9sZDtcclxuICAgICAgICBmb250LXNpemU6IDIwcHg7XHJcbiAgICB9XHJcbiAgICAmX19zdWIge1xyXG4gICAgICAgIGZvbnQtZmFtaWx5OiBcIk9wZW4gU2Fuc1wiLCBzYW5zLXNlcmlmO1xyXG4gICAgICAgIGZvbnQtd2VpZ2h0OiAzMDA7XHJcbiAgICB9XHJcbiAgICAmX19jYXRlZ29yeSB7XHJcbiAgICAgICAgdGV4dC1hbGlnbjogcmlnaHQ7XHJcbiAgICB9XHJcbiAgICAmX19kZXNjcmlwdGlvbiB7XHJcbiAgICAgICAgZm9udC1mYW1pbHk6IFwiT3BlbiBTYW5zXCIsIHNhbnMtc2VyaWY7XHJcbiAgICAgICAgbWFyZ2luLXRvcDogMzBweDtcclxuICAgIH1cclxufSIsIi5ib29rRGV0YWlsX19jb3ZlciB7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IGF1dG87XG59XG4uYm9va0RldGFpbF9fbWV0YSB7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xuICBmb250LXNpemU6IDIwcHg7XG59XG4uYm9va0RldGFpbF9fc3ViIHtcbiAgZm9udC1mYW1pbHk6IFwiT3BlbiBTYW5zXCIsIHNhbnMtc2VyaWY7XG4gIGZvbnQtd2VpZ2h0OiAzMDA7XG59XG4uYm9va0RldGFpbF9fY2F0ZWdvcnkge1xuICB0ZXh0LWFsaWduOiByaWdodDtcbn1cbi5ib29rRGV0YWlsX19kZXNjcmlwdGlvbiB7XG4gIGZvbnQtZmFtaWx5OiBcIk9wZW4gU2Fuc1wiLCBzYW5zLXNlcmlmO1xuICBtYXJnaW4tdG9wOiAzMHB4O1xufSJdfQ== */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](UserBookDetailsComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-user-book-details',
          templateUrl: './user-book-details.component.html',
          styleUrls: ['./user-book-details.component.scss']
        }]
      }], function () {
        return [{
          type: _services_root_service__WEBPACK_IMPORTED_MODULE_1__["RootService"]
        }, {
          type: _services_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"]
        }, {
          type: ngx_toastr__WEBPACK_IMPORTED_MODULE_4__["ToastrService"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/books-manager/user-books/user-books.component.ts":
  /*!******************************************************************!*\
    !*** ./src/app/books-manager/user-books/user-books.component.ts ***!
    \******************************************************************/

  /*! exports provided: UserBooksComponent */

  /***/
  function srcAppBooksManagerUserBooksUserBooksComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "UserBooksComponent", function () {
      return UserBooksComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _services_root_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ../../services/root.service */
    "./src/app/services/root.service.ts");
    /* harmony import */


    var _services_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./../../services/auth.service */
    "./src/app/services/auth.service.ts");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
    /* harmony import */


    var _services_upload_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./../../services/upload.service */
    "./src/app/services/upload.service.ts");
    /* harmony import */


    var ngx_toastr__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ngx-toastr */
    "./node_modules/ngx-toastr/__ivy_ngcc__/fesm2015/ngx-toastr.js");
    /* harmony import */


    var _shared_items_header_header_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ../../shared-items/header/header.component */
    "./src/app/shared-items/header/header.component.ts");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var ng_starrating__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! ng-starrating */
    "./node_modules/ng-starrating/__ivy_ngcc__/fesm2015/ng-starrating.js");

    function UserBooksComponent_div_1_div_4_div_9_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 14);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](2, "slice");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var book_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" Summary: ", book_r2.blurb.length > 300 ? _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind3"](2, 1, book_r2.blurb, 0, 300) + ".." : book_r2.blurb, " ");
      }
    }

    function UserBooksComponent_div_1_div_4_div_10_Template(rf, ctx) {
      if (rf & 1) {
        var _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 15);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "star-rating", 16);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("rate", function UserBooksComponent_div_1_div_4_div_10_Template_star_rating_rate_1_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r7);

          var ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);

          return ctx_r6.onRate($event);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "button", 17);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function UserBooksComponent_div_1_div_4_div_10_Template_button_click_2_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r7);

          var book_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;

          var ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

          return ctx_r8.revieBook(book_r2);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Review");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var book_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;

        var ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("value", book_r2.avRating);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("totalstars", ctx_r4.totalstar);
      }
    }

    function UserBooksComponent_div_1_div_4_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 5);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 6);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 7);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "a", 8);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "div", 9);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "a", 10);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "h6", 11);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](9, UserBooksComponent_div_1_div_4_div_9_Template, 3, 5, "div", 12);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](10, UserBooksComponent_div_1_div_4_div_10_Template, 4, 2, "div", 13);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var book_r2 = ctx.$implicit;

        var ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("active", ctx_r1.loggedIn);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate1"]("routerLink", "/bookdetails/", book_r2._id, "");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleMapInterpolate2"]("background-image:url(", ctx_r1.imageUrl, "/", book_r2.cover, ")");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate1"]("routerLink", "/bookdetails/", book_r2._id, "");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", book_r2.title, " ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", book_r2.author, " ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", book_r2.blurb);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r1.loggedIn);
      }
    }

    function UserBooksComponent_div_1_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h1", 2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Books");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, UserBooksComponent_div_1_div_4_Template, 11, 12, "div", 4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r0.books);
      }
    }

    var UserBooksComponent = /*#__PURE__*/function () {
      // newBook = new BookInventory('','','','','');
      function UserBooksComponent(rootService, authService, formBuilder, uploadService, toastr) {
        _classCallCheck(this, UserBooksComponent);

        this.rootService = rootService;
        this.authService = authService;
        this.formBuilder = formBuilder;
        this.uploadService = uploadService;
        this.toastr = toastr;
        this.imageUrl = "http://localhost:5000/";
        this.submitted = false;
        this.updating = false;
        this.enableaddBooks = false;
        this.totalstar = 5;
        this.userId = 1;
        this.uploadResponse = {
          status: '',
          message: '',
          filePath: ''
        };
      }

      _createClass(UserBooksComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.getBooks();
          this.loggedIn = this.authService.isAuthenticated();
        }
      }, {
        key: "share",
        value: function share() {
          window.alert('Book Shared');
        }
      }, {
        key: "getBooks",
        value: function getBooks() {
          var _this7 = this;

          this.rootService.getAPIData().subscribe(function (response) {
            console.log(response);
            _this7.books = response['booklists'];

            _this7.fetchAverageRating();

            console.log("After Update");
            console.log(_this7.books);
          }, function (error) {
            console.log('error is ', error);
          });
        }
      }, {
        key: "revieBook",
        value: function revieBook(book) {
          console.log(book);
        }
      }, {
        key: "fetchAverageRating",
        value: function fetchAverageRating() {
          var _this8 = this;

          console.log('Before avergae rating'); // console.log(this.books); 

          var ratingAvg;

          var _iterator = _createForOfIteratorHelper(this.books),
              _step;

          try {
            var _loop = function _loop() {
              var book = _step.value;
              console.log(book._id);
              bookrating = {
                'bookid': book._id
              };

              _this8.rootService.getRatingData(bookrating).subscribe(function (response) {
                ratingAvg = response;

                if (ratingAvg.avgRating != "") {
                  book.avRating = ratingAvg.avgRating[0].pop ? ratingAvg.avgRating[0].pop : 0;
                }
              }, function (error) {
                console.log('error is ', error);
              });
            };

            for (_iterator.s(); !(_step = _iterator.n()).done;) {
              var bookrating;

              _loop();
            }
          } catch (err) {
            _iterator.e(err);
          } finally {
            _iterator.f();
          }
        }
      }, {
        key: "onRate",
        value: function onRate($event) {
          // this.totalstar = $event.newValue;
          console.log('hre');
          console.log("Old Value:".concat($event.oldValue, ", \n      New Value: ").concat($event.newValue, ", \n      Checked Color: ").concat($event.starRating.checkedcolor, ", \n      Unchecked Color: ").concat($event.starRating.uncheckedcolor));
        }
      }, {
        key: "f",
        get: function get() {
          return this.booksForm.controls;
        }
      }]);

      return UserBooksComponent;
    }();

    UserBooksComponent.ɵfac = function UserBooksComponent_Factory(t) {
      return new (t || UserBooksComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_root_service__WEBPACK_IMPORTED_MODULE_1__["RootService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_upload_service__WEBPACK_IMPORTED_MODULE_4__["UploadService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](ngx_toastr__WEBPACK_IMPORTED_MODULE_5__["ToastrService"]));
    };

    UserBooksComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: UserBooksComponent,
      selectors: [["app-user-books"]],
      decls: 2,
      vars: 1,
      consts: [["class", "book__container", 4, "ngIf"], [1, "book__container"], [1, "book__page-title", "bibliophile__heading"], [1, "row"], ["class", "col-md-3", 4, "ngFor", "ngForOf"], [1, "col-md-3"], [1, "card", "book__item"], [1, "card-body", "book__item-container"], [3, "routerLink"], [1, "book__cover"], [1, "card-title", "book__main-title", 3, "routerLink"], [1, "card-subtitle", "book__sub-title"], ["class", "card-text book__description", 4, "ngIf"], ["class", "book__button-container", 4, "ngIf"], [1, "card-text", "book__description"], [1, "book__button-container"], ["checkedcolor", "gold", "uncheckedcolor", "gray", "size", "24px", "readonly", "true", 3, "value", "totalstars", "rate"], [1, "btn", "btn-primary", "book__review", 3, "click"]],
      template: function UserBooksComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-header");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, UserBooksComponent_div_1_Template, 5, 1, "div", 0);
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.enableaddBooks);
        }
      },
      directives: [_shared_items_header_header_component__WEBPACK_IMPORTED_MODULE_6__["HeaderComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_7__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_7__["NgForOf"], _angular_router__WEBPACK_IMPORTED_MODULE_8__["RouterLinkWithHref"], ng_starrating__WEBPACK_IMPORTED_MODULE_9__["StarRatingComponent"]],
      pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_7__["SlicePipe"]],
      styles: [".book__container[_ngcontent-%COMP%] {\n  margin-top: 20px;\n}\n.book__item[_ngcontent-%COMP%] {\n  margin-bottom: 20px;\n  min-height: 836px;\n}\n.book__item.active[_ngcontent-%COMP%] {\n  min-height: 850px;\n}\n.book__item-container[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  justify-content: space-between;\n}\n.book__update[_ngcontent-%COMP%] {\n  margin-right: 20px;\n}\n.book__cover[_ngcontent-%COMP%] {\n  height: 400px;\n  background-size: cover;\n  background-repeat: no-repeat;\n}\n.book__main-title[_ngcontent-%COMP%] {\n  font-size: 24px;\n  margin-top: 40px;\n  color: #000;\n}\n.book__main-title[_ngcontent-%COMP%]:hover {\n  text-decoration: none;\n}\n.book__sub-title[_ngcontent-%COMP%] {\n  font-size: 18px;\n  color: #777;\n}\n.book__description[_ngcontent-%COMP%] {\n  font-size: 16px;\n  line-height: 22px;\n  font-family: \"Open Sans\", sans-serif;\n  font-weight: 300;\n  line-height: 26px;\n}\n.book__add-main-button[_ngcontent-%COMP%] {\n  float: right;\n}\n.book__add-main-button-container[_ngcontent-%COMP%] {\n  margin-bottom: 20px;\n}\n.book__cancel-button[_ngcontent-%COMP%] {\n  font-size: 20px;\n  margin-left: 20px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYm9va3MtbWFuYWdlci91c2VyLWJvb2tzL0Y6XFxGb3IgQnJhaW5cXEJvb2tzIGludmVudG9yeVxcYm9vay1saXN0L3NyY1xcYXBwXFxib29rcy1tYW5hZ2VyXFx1c2VyLWJvb2tzXFx1c2VyLWJvb2tzLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9ib29rcy1tYW5hZ2VyL3VzZXItYm9va3MvdXNlci1ib29rcy5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDSTtFQUNJLGdCQUFBO0FDQVI7QURFSTtFQUNJLG1CQUFBO0VBQ0EsaUJBQUE7QUNBUjtBRENRO0VBQ0ksaUJBQUE7QUNDWjtBREVJO0VBQ0ksYUFBQTtFQUNBLHNCQUFBO0VBQ0EsOEJBQUE7QUNBUjtBREVJO0VBQ0ksa0JBQUE7QUNBUjtBREVJO0VBQ0ksYUFBQTtFQUNBLHNCQUFBO0VBQ0EsNEJBQUE7QUNBUjtBREVJO0VBQ0ksZUFBQTtFQUNBLGdCQUFBO0VBQ0EsV0FBQTtBQ0FSO0FEQ1E7RUFDSSxxQkFBQTtBQ0NaO0FERUk7RUFDSSxlQUFBO0VBQ0EsV0FBQTtBQ0FSO0FERUk7RUFDSSxlQUFBO0VBQ0EsaUJBQUE7RUFDQSxvQ0FBQTtFQUNBLGdCQUFBO0VBQ0EsaUJBQUE7QUNBUjtBREVJO0VBQ0ksWUFBQTtBQ0FSO0FERUk7RUFDSSxtQkFBQTtBQ0FSO0FERUk7RUFDSSxlQUFBO0VBQ0EsaUJBQUE7QUNBUiIsImZpbGUiOiJzcmMvYXBwL2Jvb2tzLW1hbmFnZXIvdXNlci1ib29rcy91c2VyLWJvb2tzLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmJvb2sge1xyXG4gICAgJl9fY29udGFpbmVyIHtcclxuICAgICAgICBtYXJnaW4tdG9wOiAyMHB4O1xyXG4gICAgfVxyXG4gICAgJl9faXRlbSB7XHJcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogMjBweDtcclxuICAgICAgICBtaW4taGVpZ2h0OiA4MzZweDtcclxuICAgICAgICAmLmFjdGl2ZSB7XHJcbiAgICAgICAgICAgIG1pbi1oZWlnaHQ6IDg1MHB4O1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgICZfX2l0ZW0tY29udGFpbmVyIHtcclxuICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG4gICAgfVxyXG4gICAgJl9fdXBkYXRlIHtcclxuICAgICAgICBtYXJnaW4tcmlnaHQ6IDIwcHg7XHJcbiAgICB9XHJcbiAgICAmX19jb3ZlciB7XHJcbiAgICAgICAgaGVpZ2h0OiA0MDBweDtcclxuICAgICAgICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xyXG4gICAgICAgIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XHJcbiAgICB9XHJcbiAgICAmX19tYWluLXRpdGxlIHtcclxuICAgICAgICBmb250LXNpemU6IDI0cHg7XHJcbiAgICAgICAgbWFyZ2luLXRvcDogNDBweDtcclxuICAgICAgICBjb2xvcjogIzAwMDtcclxuICAgICAgICAmOmhvdmVyIHtcclxuICAgICAgICAgICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgICZfX3N1Yi10aXRsZSB7XHJcbiAgICAgICAgZm9udC1zaXplOiAxOHB4O1xyXG4gICAgICAgIGNvbG9yOiAjNzc3O1xyXG4gICAgfVxyXG4gICAgJl9fZGVzY3JpcHRpb24ge1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMTZweDtcclxuICAgICAgICBsaW5lLWhlaWdodDogMjJweDtcclxuICAgICAgICBmb250LWZhbWlseTogJ09wZW4gU2FucycsIHNhbnMtc2VyaWY7XHJcbiAgICAgICAgZm9udC13ZWlnaHQ6IDMwMDtcclxuICAgICAgICBsaW5lLWhlaWdodDogMjZweDtcclxuICAgIH1cclxuICAgICZfX2FkZC1tYWluLWJ1dHRvbiB7XHJcbiAgICAgICAgZmxvYXQ6IHJpZ2h0O1xyXG4gICAgfVxyXG4gICAgJl9fYWRkLW1haW4tYnV0dG9uLWNvbnRhaW5lciB7XHJcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogMjBweDtcclxuICAgIH1cclxuICAgICZfX2NhbmNlbC1idXR0b24ge1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMjBweDtcclxuICAgICAgICBtYXJnaW4tbGVmdDogMjBweDtcclxuICAgIH1cclxufSIsIi5ib29rX19jb250YWluZXIge1xuICBtYXJnaW4tdG9wOiAyMHB4O1xufVxuLmJvb2tfX2l0ZW0ge1xuICBtYXJnaW4tYm90dG9tOiAyMHB4O1xuICBtaW4taGVpZ2h0OiA4MzZweDtcbn1cbi5ib29rX19pdGVtLmFjdGl2ZSB7XG4gIG1pbi1oZWlnaHQ6IDg1MHB4O1xufVxuLmJvb2tfX2l0ZW0tY29udGFpbmVyIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xufVxuLmJvb2tfX3VwZGF0ZSB7XG4gIG1hcmdpbi1yaWdodDogMjBweDtcbn1cbi5ib29rX19jb3ZlciB7XG4gIGhlaWdodDogNDAwcHg7XG4gIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XG4gIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XG59XG4uYm9va19fbWFpbi10aXRsZSB7XG4gIGZvbnQtc2l6ZTogMjRweDtcbiAgbWFyZ2luLXRvcDogNDBweDtcbiAgY29sb3I6ICMwMDA7XG59XG4uYm9va19fbWFpbi10aXRsZTpob3ZlciB7XG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbn1cbi5ib29rX19zdWItdGl0bGUge1xuICBmb250LXNpemU6IDE4cHg7XG4gIGNvbG9yOiAjNzc3O1xufVxuLmJvb2tfX2Rlc2NyaXB0aW9uIHtcbiAgZm9udC1zaXplOiAxNnB4O1xuICBsaW5lLWhlaWdodDogMjJweDtcbiAgZm9udC1mYW1pbHk6IFwiT3BlbiBTYW5zXCIsIHNhbnMtc2VyaWY7XG4gIGZvbnQtd2VpZ2h0OiAzMDA7XG4gIGxpbmUtaGVpZ2h0OiAyNnB4O1xufVxuLmJvb2tfX2FkZC1tYWluLWJ1dHRvbiB7XG4gIGZsb2F0OiByaWdodDtcbn1cbi5ib29rX19hZGQtbWFpbi1idXR0b24tY29udGFpbmVyIHtcbiAgbWFyZ2luLWJvdHRvbTogMjBweDtcbn1cbi5ib29rX19jYW5jZWwtYnV0dG9uIHtcbiAgZm9udC1zaXplOiAyMHB4O1xuICBtYXJnaW4tbGVmdDogMjBweDtcbn0iXX0= */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](UserBooksComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-user-books',
          templateUrl: './user-books.component.html',
          styleUrls: ['./user-books.component.scss']
        }]
      }], function () {
        return [{
          type: _services_root_service__WEBPACK_IMPORTED_MODULE_1__["RootService"]
        }, {
          type: _services_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"]
        }, {
          type: _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"]
        }, {
          type: _services_upload_service__WEBPACK_IMPORTED_MODULE_4__["UploadService"]
        }, {
          type: ngx_toastr__WEBPACK_IMPORTED_MODULE_5__["ToastrService"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/home/home.component.ts":
  /*!****************************************!*\
    !*** ./src/app/home/home.component.ts ***!
    \****************************************/

  /*! exports provided: HomeComponent */

  /***/
  function srcAppHomeHomeComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "HomeComponent", function () {
      return HomeComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _shared_items_header_header_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ../shared-items/header/header.component */
    "./src/app/shared-items/header/header.component.ts");

    var HomeComponent = /*#__PURE__*/function () {
      function HomeComponent() {
        _classCallCheck(this, HomeComponent);
      }

      _createClass(HomeComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return HomeComponent;
    }();

    HomeComponent.ɵfac = function HomeComponent_Factory(t) {
      return new (t || HomeComponent)();
    };

    HomeComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: HomeComponent,
      selectors: [["app-home"]],
      decls: 10,
      vars: 0,
      consts: [[1, "row", "home__container"], [1, "col-md-8", "home__left"], ["src", "assets/img/login.jpg", "alt", "Home", 1, "home__image"], [1, "col-md-4", "home__right"]],
      template: function HomeComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-header");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "img", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, " \u201CBooks are the quietest and most constant of friends; they are the most accessible and wisest of counselors, and the most patient of teachers.\u201D");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, " \u2015 Charles W. Eliot ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      },
      directives: [_shared_items_header_header_component__WEBPACK_IMPORTED_MODULE_1__["HeaderComponent"]],
      styles: [".home__image[_ngcontent-%COMP%] {\n  max-width: 100%;\n  width: auto;\n}\n.home__right[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  font-style: italic;\n}\n.home__right[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  font-size: 26px;\n  line-height: 36px;\n}\n.home__right[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  display: block;\n  margin-top: 10px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaG9tZS9GOlxcRm9yIEJyYWluXFxCb29rcyBpbnZlbnRvcnlcXGJvb2stbGlzdC9zcmNcXGFwcFxcaG9tZVxcaG9tZS5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvaG9tZS9ob21lLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUNJO0VBQ0ksZUFBQTtFQUNBLFdBQUE7QUNBUjtBREVJO0VBQ0ksYUFBQTtFQUNBLG1CQUFBO0VBQ0Esa0JBQUE7QUNBUjtBRENRO0VBQ0ksZUFBQTtFQUNBLGlCQUFBO0FDQ1o7QURDUTtFQUNJLGNBQUE7RUFDQSxnQkFBQTtBQ0NaIiwiZmlsZSI6InNyYy9hcHAvaG9tZS9ob21lLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmhvbWUge1xyXG4gICAgJl9faW1hZ2Uge1xyXG4gICAgICAgIG1heC13aWR0aDogMTAwJTtcclxuICAgICAgICB3aWR0aDogYXV0bztcclxuICAgIH1cclxuICAgICZfX3JpZ2h0IHtcclxuICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICAgICAgZm9udC1zdHlsZTogaXRhbGljO1xyXG4gICAgICAgIHAge1xyXG4gICAgICAgICAgICBmb250LXNpemU6IDI2cHg7XHJcbiAgICAgICAgICAgIGxpbmUtaGVpZ2h0OiAzNnB4O1xyXG4gICAgICAgIH1cclxuICAgICAgICBzcGFuIHtcclxuICAgICAgICAgICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICAgICAgICAgIG1hcmdpbi10b3A6IDEwcHg7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59IiwiLmhvbWVfX2ltYWdlIHtcbiAgbWF4LXdpZHRoOiAxMDAlO1xuICB3aWR0aDogYXV0bztcbn1cbi5ob21lX19yaWdodCB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGZvbnQtc3R5bGU6IGl0YWxpYztcbn1cbi5ob21lX19yaWdodCBwIHtcbiAgZm9udC1zaXplOiAyNnB4O1xuICBsaW5lLWhlaWdodDogMzZweDtcbn1cbi5ob21lX19yaWdodCBzcGFuIHtcbiAgZGlzcGxheTogYmxvY2s7XG4gIG1hcmdpbi10b3A6IDEwcHg7XG59Il19 */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](HomeComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-home',
          templateUrl: './home.component.html',
          styleUrls: ['./home.component.scss']
        }]
      }], function () {
        return [];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/normal-user/normal-user-home/normal-user-home.component.ts":
  /*!****************************************************************************!*\
    !*** ./src/app/normal-user/normal-user-home/normal-user-home.component.ts ***!
    \****************************************************************************/

  /*! exports provided: NormalUserHOmeComponent */

  /***/
  function srcAppNormalUserNormalUserHomeNormalUserHomeComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "NormalUserHOmeComponent", function () {
      return NormalUserHOmeComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _shared_items_header_header_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ../../shared-items/header/header.component */
    "./src/app/shared-items/header/header.component.ts");

    var NormalUserHOmeComponent = /*#__PURE__*/function () {
      function NormalUserHOmeComponent() {
        _classCallCheck(this, NormalUserHOmeComponent);
      }

      _createClass(NormalUserHOmeComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return NormalUserHOmeComponent;
    }();

    NormalUserHOmeComponent.ɵfac = function NormalUserHOmeComponent_Factory(t) {
      return new (t || NormalUserHOmeComponent)();
    };

    NormalUserHOmeComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: NormalUserHOmeComponent,
      selectors: [["app-normal-user-home"]],
      decls: 10,
      vars: 0,
      consts: [[1, "row", "home__container"], [1, "col-md-8", "home__left"], ["src", "assets/img/home.jpg", "alt", "Home", 1, "home__image"], [1, "col-md-4", "home__right"]],
      template: function NormalUserHOmeComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-header");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "img", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, " \u201CBooks are letters in bottles, cast into the waves of time, from one person trying to save the world to another.\u201D");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, " \u2015 Amal El-Mohtar ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      },
      directives: [_shared_items_header_header_component__WEBPACK_IMPORTED_MODULE_1__["HeaderComponent"]],
      styles: [".home__container[_ngcontent-%COMP%] {\n  margin-bottom: 30px;\n}\n.home__image[_ngcontent-%COMP%] {\n  max-width: 100%;\n  width: auto;\n}\n.home__right[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  font-style: italic;\n}\n.home__right[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  font-size: 26px;\n  line-height: 36px;\n}\n.home__right[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  display: block;\n  margin-top: 10px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbm9ybWFsLXVzZXIvbm9ybWFsLXVzZXItaG9tZS9GOlxcRm9yIEJyYWluXFxCb29rcyBpbnZlbnRvcnlcXGJvb2stbGlzdC9zcmNcXGFwcFxcbm9ybWFsLXVzZXJcXG5vcm1hbC11c2VyLWhvbWVcXG5vcm1hbC11c2VyLWhvbWUuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL25vcm1hbC11c2VyL25vcm1hbC11c2VyLWhvbWUvbm9ybWFsLXVzZXItaG9tZS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDSTtFQUNJLG1CQUFBO0FDQVI7QURFSTtFQUNJLGVBQUE7RUFDQSxXQUFBO0FDQVI7QURFSTtFQUNJLGFBQUE7RUFDQSxtQkFBQTtFQUNBLGtCQUFBO0FDQVI7QURDUTtFQUNJLGVBQUE7RUFDQSxpQkFBQTtBQ0NaO0FEQ1E7RUFDSSxjQUFBO0VBQ0EsZ0JBQUE7QUNDWiIsImZpbGUiOiJzcmMvYXBwL25vcm1hbC11c2VyL25vcm1hbC11c2VyLWhvbWUvbm9ybWFsLXVzZXItaG9tZS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5ob21lIHtcclxuICAgICZfX2NvbnRhaW5lciB7XHJcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogMzBweDtcclxuICAgIH1cclxuICAgICZfX2ltYWdlIHtcclxuICAgICAgICBtYXgtd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgd2lkdGg6IGF1dG87XHJcbiAgICB9XHJcbiAgICAmX19yaWdodCB7XHJcbiAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgICAgIGZvbnQtc3R5bGU6IGl0YWxpYztcclxuICAgICAgICBwIHtcclxuICAgICAgICAgICAgZm9udC1zaXplOiAyNnB4O1xyXG4gICAgICAgICAgICBsaW5lLWhlaWdodDogMzZweDtcclxuICAgICAgICB9XHJcbiAgICAgICAgc3BhbiB7XHJcbiAgICAgICAgICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgICAgICAgICBtYXJnaW4tdG9wOiAxMHB4O1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufSIsIi5ob21lX19jb250YWluZXIge1xuICBtYXJnaW4tYm90dG9tOiAzMHB4O1xufVxuLmhvbWVfX2ltYWdlIHtcbiAgbWF4LXdpZHRoOiAxMDAlO1xuICB3aWR0aDogYXV0bztcbn1cbi5ob21lX19yaWdodCB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGZvbnQtc3R5bGU6IGl0YWxpYztcbn1cbi5ob21lX19yaWdodCBwIHtcbiAgZm9udC1zaXplOiAyNnB4O1xuICBsaW5lLWhlaWdodDogMzZweDtcbn1cbi5ob21lX19yaWdodCBzcGFuIHtcbiAgZGlzcGxheTogYmxvY2s7XG4gIG1hcmdpbi10b3A6IDEwcHg7XG59Il19 */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NormalUserHOmeComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-normal-user-home',
          templateUrl: './normal-user-home.component.html',
          styleUrls: ['./normal-user-home.component.scss']
        }]
      }], function () {
        return [];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/normal-user/normal-user-login/normal-user-login.component.ts":
  /*!******************************************************************************!*\
    !*** ./src/app/normal-user/normal-user-login/normal-user-login.component.ts ***!
    \******************************************************************************/

  /*! exports provided: NormalUserLoginComponent */

  /***/
  function srcAppNormalUserNormalUserLoginNormalUserLoginComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "NormalUserLoginComponent", function () {
      return NormalUserLoginComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
    /* harmony import */


    var _services_root_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../../services/root.service */
    "./src/app/services/root.service.ts");
    /* harmony import */


    var _services_auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./../../services/auth.service */
    "./src/app/services/auth.service.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _services_customvalidation_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./../../services/customvalidation.service */
    "./src/app/services/customvalidation.service.ts");
    /* harmony import */


    var ngx_toastr__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ngx-toastr */
    "./node_modules/ngx-toastr/__ivy_ngcc__/fesm2015/ngx-toastr.js");
    /* harmony import */


    var _shared_items_header_header_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ../../shared-items/header/header.component */
    "./src/app/shared-items/header/header.component.ts");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");

    function NormalUserLoginComponent_span_9_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 10);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Username is required ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function NormalUserLoginComponent_span_10_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 10);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " User Name is not available ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function NormalUserLoginComponent_span_15_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 10);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Password is required ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function NormalUserLoginComponent_span_16_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 10);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Password should have minimum 8 characters, at least 1 uppercase letter, 1 lowercase letter and 1 number ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    var NormalUserLoginComponent = /*#__PURE__*/function () {
      function NormalUserLoginComponent(rootService, authService, router, formBuilder, customValidator, toastr) {
        _classCallCheck(this, NormalUserLoginComponent);

        this.rootService = rootService;
        this.authService = authService;
        this.router = router;
        this.formBuilder = formBuilder;
        this.customValidator = customValidator;
        this.toastr = toastr;
        this.submitted = false;
      }

      _createClass(NormalUserLoginComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.loginForm = this.formBuilder.group({
            user: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required], this.customValidator.userNameValidator.bind(this.customValidator)],
            password: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, this.customValidator.patternValidator()])]
          });
        }
      }, {
        key: "login",
        value: function login() {
          var _this9 = this;

          console.log('onetwo');
          this.submitted = true;

          if (this.loginForm.valid) {
            var userval = this.loginForm.value.user;
            var passwordval = this.loginForm.value.password;
            var userItem = {
              'username': userval,
              'password': passwordval,
              'type': 'normal'
            }; // this.rootService.postAPIData(userItem).subscribe((response)=>{
            //   console.log(response);
            //   this.router.navigate(['/books'])
            // },(error) => {
            //     console.log('error is ', error)
            // });

            this.authService.validate(userItem).then(function (response) {
              console.log(response);

              _this9.authService.setUserInfo({
                'user': response['user'],
                'id': response['id']
              });

              _this9.router.navigate(['/userHome']);

              _this9.toastr.success("Login Succesful");
            }, function (error) {
              console.log('error is ', error);

              _this9.toastr.error("Login Failed!");
            });
          }
        }
      }, {
        key: "f",
        get: function get() {
          return this.loginForm.controls;
        }
      }]);

      return NormalUserLoginComponent;
    }();

    NormalUserLoginComponent.ɵfac = function NormalUserLoginComponent_Factory(t) {
      return new (t || NormalUserLoginComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_root_service__WEBPACK_IMPORTED_MODULE_2__["RootService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_customvalidation_service__WEBPACK_IMPORTED_MODULE_5__["CustomvalidationService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](ngx_toastr__WEBPACK_IMPORTED_MODULE_6__["ToastrService"]));
    };

    NormalUserLoginComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: NormalUserLoginComponent,
      selectors: [["app-normal-user-login"]],
      decls: 19,
      vars: 5,
      consts: [[1, "login__container"], [1, "login__heading", "bibliophile__heading"], [1, "login__form", 3, "formGroup", "ngSubmit"], [1, "form-group"], ["for", "user"], ["type", "text", "id", "user", "formControlName", "user", "name", "user", "required", "", 1, "form-control"], ["class", "text-danger", 4, "ngIf"], ["for", "password"], ["type", "password", "id", "password", "formControlName", "password", "name", "password", "required", "", 1, "form-control"], ["type", "submit", 1, "btn", "btn-primary"], [1, "text-danger"]],
      template: function NormalUserLoginComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-header");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "h1", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Log In");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "form", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngSubmit", function NormalUserLoginComponent_Template_form_ngSubmit_4_listener() {
            return ctx.login();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "label", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "Username");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "input", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](9, NormalUserLoginComponent_span_9_Template, 2, 0, "span", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](10, NormalUserLoginComponent_span_10_Template, 2, 0, "span", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "label", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "Password");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](14, "input", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](15, NormalUserLoginComponent_span_15_Template, 2, 0, "span", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](16, NormalUserLoginComponent_span_16_Template, 2, 0, "span", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "button", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "Submit");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx.loginForm);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", (ctx.f.user.touched || ctx.submitted) && (ctx.f.user.errors == null ? null : ctx.f.user.errors.required));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.f.user.touched && (ctx.f.user.errors == null ? null : ctx.f.user.errors.userNameNotAvailable));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", (ctx.f.password.touched || ctx.submitted) && (ctx.f.password.errors == null ? null : ctx.f.password.errors.required));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.f.password.touched && (ctx.f.password.errors == null ? null : ctx.f.password.errors.invalidPassword));
        }
      },
      directives: [_shared_items_header_header_component__WEBPACK_IMPORTED_MODULE_7__["HeaderComponent"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroupDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControlName"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["RequiredValidator"], _angular_common__WEBPACK_IMPORTED_MODULE_8__["NgIf"]],
      styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL25vcm1hbC11c2VyL25vcm1hbC11c2VyLWxvZ2luL25vcm1hbC11c2VyLWxvZ2luLmNvbXBvbmVudC5zY3NzIn0= */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NormalUserLoginComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-normal-user-login',
          templateUrl: './normal-user-login.component.html',
          styleUrls: ['./normal-user-login.component.scss']
        }]
      }], function () {
        return [{
          type: _services_root_service__WEBPACK_IMPORTED_MODULE_2__["RootService"]
        }, {
          type: _services_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]
        }, {
          type: _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"]
        }, {
          type: _services_customvalidation_service__WEBPACK_IMPORTED_MODULE_5__["CustomvalidationService"]
        }, {
          type: ngx_toastr__WEBPACK_IMPORTED_MODULE_6__["ToastrService"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/normal-user/normal-user-sign-up/normal-user-sign-up.component.ts":
  /*!**********************************************************************************!*\
    !*** ./src/app/normal-user/normal-user-sign-up/normal-user-sign-up.component.ts ***!
    \**********************************************************************************/

  /*! exports provided: NormalUserSignUpComponent */

  /***/
  function srcAppNormalUserNormalUserSignUpNormalUserSignUpComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "NormalUserSignUpComponent", function () {
      return NormalUserSignUpComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
    /* harmony import */


    var _services_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./../../services/auth.service */
    "./src/app/services/auth.service.ts");
    /* harmony import */


    var _services_root_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../../services/root.service */
    "./src/app/services/root.service.ts");
    /* harmony import */


    var _services_customvalidation_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./../../services/customvalidation.service */
    "./src/app/services/customvalidation.service.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var ngx_toastr__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ngx-toastr */
    "./node_modules/ngx-toastr/__ivy_ngcc__/fesm2015/ngx-toastr.js");
    /* harmony import */


    var _shared_items_header_header_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ../../shared-items/header/header.component */
    "./src/app/shared-items/header/header.component.ts");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");

    function NormalUserSignUpComponent_span_8_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 15);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " First Name is required ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function NormalUserSignUpComponent_span_13_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 15);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Last Name is required ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function NormalUserSignUpComponent_span_18_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 15);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Username is required ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function NormalUserSignUpComponent_span_19_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 15);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " User Name is not available ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function NormalUserSignUpComponent_span_24_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 15);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Password is required ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function NormalUserSignUpComponent_span_25_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 15);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Password should have minimum 8 characters, at least 1 uppercase letter, 1 lowercase letter and 1 number ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function NormalUserSignUpComponent_span_30_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 15);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Confirm Password is required ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function NormalUserSignUpComponent_span_31_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 15);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Passwords doesnot match ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    var _c0 = function _c0(a0) {
      return {
        "is-invalid": a0
      };
    };

    var NormalUserSignUpComponent = /*#__PURE__*/function () {
      function NormalUserSignUpComponent(authService, rootService, formBuilder, customValidator, router, toastr) {
        _classCallCheck(this, NormalUserSignUpComponent);

        this.authService = authService;
        this.rootService = rootService;
        this.formBuilder = formBuilder;
        this.customValidator = customValidator;
        this.router = router;
        this.toastr = toastr;
        this.submitted = false;
      }

      _createClass(NormalUserSignUpComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.userForm = this.formBuilder.group({
            fname: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            lname: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            user: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required], this.customValidator.userNameValidator.bind(this.customValidator)],
            password: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, this.customValidator.patternValidator()])],
            cpassword: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]]
          }, {
            validator: this.customValidator.MatchPassword('password', 'cpassword')
          });
        }
      }, {
        key: "addUsers",
        value: function addUsers() {
          var _this10 = this;

          this.submitted = true;

          if (this.userForm.valid) {
            var fnameval = this.userForm.value.fname;
            var lnameval = this.userForm.value.lname;
            var userval = this.userForm.value.user;
            var passwordval = this.userForm.value.password;
            var newUserItem = {
              'fname': fnameval,
              'lname': lnameval,
              'user': userval,
              'password': passwordval,
              'type': 'normal'
            };
            this.rootService.postAPIData(newUserItem, "users").subscribe(function (response) {
              console.log(response);

              _this10.authService.setUserInfo({
                'user': response['user'],
                'id': response['id']
              });

              _this10.router.navigate(['/userHome']);

              _this10.toastr.success("Sign Up Succesful");
            }, function (error) {
              console.log('error is ', error);

              _this10.toastr.error("Sign Up Failed");
            });
          }
        }
      }, {
        key: "f",
        get: function get() {
          return this.userForm.controls;
        }
      }]);

      return NormalUserSignUpComponent;
    }();

    NormalUserSignUpComponent.ɵfac = function NormalUserSignUpComponent_Factory(t) {
      return new (t || NormalUserSignUpComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_root_service__WEBPACK_IMPORTED_MODULE_3__["RootService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_customvalidation_service__WEBPACK_IMPORTED_MODULE_4__["CustomvalidationService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](ngx_toastr__WEBPACK_IMPORTED_MODULE_6__["ToastrService"]));
    };

    NormalUserSignUpComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: NormalUserSignUpComponent,
      selectors: [["app-normal-user-sign-up"]],
      decls: 34,
      vars: 12,
      consts: [[1, "bibliophile__heading"], [1, "signup__form", 3, "formGroup", "ngSubmit"], [1, "form-group"], ["for", "fname"], ["type", "text", "id", "fname", "name", "fname", "formControlName", "fname", 1, "form-control", 3, "ngClass"], ["class", "text-danger", 4, "ngIf"], ["for", "lname"], ["type", "text", "id", "lname", "formControlName", "lname", "name", "lname", "required", "", 1, "form-control"], ["for", "user"], ["type", "text", "id", "user", "formControlName", "user", "name", "user", "required", "", 1, "form-control"], ["for", "password"], ["type", "password", "id", "password", "formControlName", "password", "name", "password", "required", "", 1, "form-control"], ["for", "cpassword"], ["type", "password", "id", "cpassword", "formControlName", "cpassword", "name", "cpassword", "required", "", 1, "form-control"], ["type", "submit", 1, "btn", "btn-primary"], [1, "text-danger"]],
      template: function NormalUserSignUpComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-header");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h1", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Sign Up");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "form", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngSubmit", function NormalUserSignUpComponent_Template_form_ngSubmit_3_listener() {
            return ctx.addUsers();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "label", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "First Name");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "input", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](8, NormalUserSignUpComponent_span_8_Template, 2, 0, "span", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "label", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "Last Name");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](12, "input", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](13, NormalUserSignUpComponent_span_13_Template, 2, 0, "span", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "label", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "Username");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](17, "input", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](18, NormalUserSignUpComponent_span_18_Template, 2, 0, "span", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](19, NormalUserSignUpComponent_span_19_Template, 2, 0, "span", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "label", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, "Password");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](23, "input", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](24, NormalUserSignUpComponent_span_24_Template, 2, 0, "span", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](25, NormalUserSignUpComponent_span_25_Template, 2, 0, "span", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "label", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](28, "Confirm Password");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](29, "input", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](30, NormalUserSignUpComponent_span_30_Template, 2, 0, "span", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](31, NormalUserSignUpComponent_span_31_Template, 2, 0, "span", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "button", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](33, "Submit");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx.userForm);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](10, _c0, ctx.submitted && ctx.f.fname.errors));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", (ctx.f.fname.touched || ctx.submitted) && (ctx.f.fname.errors == null ? null : ctx.f.fname.errors.required));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", (ctx.f.lname.touched || ctx.submitted) && (ctx.f.lname.errors == null ? null : ctx.f.lname.errors.required));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", (ctx.f.user.touched || ctx.submitted) && (ctx.f.user.errors == null ? null : ctx.f.user.errors.required));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.f.user.touched && (ctx.f.user.errors == null ? null : ctx.f.user.errors.userNameNotAvailable));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", (ctx.f.password.touched || ctx.submitted) && (ctx.f.password.errors == null ? null : ctx.f.password.errors.required));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.f.password.touched && (ctx.f.password.errors == null ? null : ctx.f.password.errors.invalidPassword));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", (ctx.f.cpassword.touched || ctx.submitted) && (ctx.f.cpassword.errors == null ? null : ctx.f.cpassword.errors.required));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.f.cpassword.touched && (ctx.f.cpassword.errors == null ? null : ctx.f.cpassword.errors.passwordMismatch));
        }
      },
      directives: [_shared_items_header_header_component__WEBPACK_IMPORTED_MODULE_7__["HeaderComponent"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroupDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControlName"], _angular_common__WEBPACK_IMPORTED_MODULE_8__["NgClass"], _angular_common__WEBPACK_IMPORTED_MODULE_8__["NgIf"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["RequiredValidator"]],
      styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL25vcm1hbC11c2VyL25vcm1hbC11c2VyLXNpZ24tdXAvbm9ybWFsLXVzZXItc2lnbi11cC5jb21wb25lbnQuc2NzcyJ9 */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NormalUserSignUpComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-normal-user-sign-up',
          templateUrl: './normal-user-sign-up.component.html',
          styleUrls: ['./normal-user-sign-up.component.scss']
        }]
      }], function () {
        return [{
          type: _services_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"]
        }, {
          type: _services_root_service__WEBPACK_IMPORTED_MODULE_3__["RootService"]
        }, {
          type: _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"]
        }, {
          type: _services_customvalidation_service__WEBPACK_IMPORTED_MODULE_4__["CustomvalidationService"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"]
        }, {
          type: ngx_toastr__WEBPACK_IMPORTED_MODULE_6__["ToastrService"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/normal-user/normal-user.module.ts":
  /*!***************************************************!*\
    !*** ./src/app/normal-user/normal-user.module.ts ***!
    \***************************************************/

  /*! exports provided: NormalUserModule */

  /***/
  function srcAppNormalUserNormalUserModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "NormalUserModule", function () {
      return NormalUserModule;
    });
    /* harmony import */


    var _shared_items_shared_items_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! ./../shared-items/shared-items.module */
    "./src/app/shared-items/shared-items.module.ts");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
    /* harmony import */


    var _normal_user_login_normal_user_login_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./normal-user-login/normal-user-login.component */
    "./src/app/normal-user/normal-user-login/normal-user-login.component.ts");
    /* harmony import */


    var _normal_user_sign_up_normal_user_sign_up_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./normal-user-sign-up/normal-user-sign-up.component */
    "./src/app/normal-user/normal-user-sign-up/normal-user-sign-up.component.ts");
    /* harmony import */


    var ngx_toastr__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ngx-toastr */
    "./node_modules/ngx-toastr/__ivy_ngcc__/fesm2015/ngx-toastr.js");
    /* harmony import */


    var _normal_user_home_normal_user_home_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ./normal-user-home/normal-user-home.component */
    "./src/app/normal-user/normal-user-home/normal-user-home.component.ts");

    var NormalUserModule = function NormalUserModule() {
      _classCallCheck(this, NormalUserModule);
    };

    NormalUserModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({
      type: NormalUserModule
    });
    NormalUserModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({
      factory: function NormalUserModule_Factory(t) {
        return new (t || NormalUserModule)();
      },
      imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"], _shared_items_shared_items_module__WEBPACK_IMPORTED_MODULE_0__["SharedItemsModule"], ngx_toastr__WEBPACK_IMPORTED_MODULE_6__["ToastrModule"].forRoot()]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](NormalUserModule, {
        declarations: [_normal_user_login_normal_user_login_component__WEBPACK_IMPORTED_MODULE_4__["NormalUserLoginComponent"], _normal_user_sign_up_normal_user_sign_up_component__WEBPACK_IMPORTED_MODULE_5__["NormalUserSignUpComponent"], _normal_user_home_normal_user_home_component__WEBPACK_IMPORTED_MODULE_7__["NormalUserHOmeComponent"]],
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"], _shared_items_shared_items_module__WEBPACK_IMPORTED_MODULE_0__["SharedItemsModule"], ngx_toastr__WEBPACK_IMPORTED_MODULE_6__["ToastrModule"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](NormalUserModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
          declarations: [_normal_user_login_normal_user_login_component__WEBPACK_IMPORTED_MODULE_4__["NormalUserLoginComponent"], _normal_user_sign_up_normal_user_sign_up_component__WEBPACK_IMPORTED_MODULE_5__["NormalUserSignUpComponent"], _normal_user_home_normal_user_home_component__WEBPACK_IMPORTED_MODULE_7__["NormalUserHOmeComponent"]],
          imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"], _shared_items_shared_items_module__WEBPACK_IMPORTED_MODULE_0__["SharedItemsModule"], ngx_toastr__WEBPACK_IMPORTED_MODULE_6__["ToastrModule"].forRoot()]
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/services/auth-guard.service.ts":
  /*!************************************************!*\
    !*** ./src/app/services/auth-guard.service.ts ***!
    \************************************************/

  /*! exports provided: AuthGuardService */

  /***/
  function srcAppServicesAuthGuardServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AuthGuardService", function () {
      return AuthGuardService;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _auth_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./auth.service */
    "./src/app/services/auth.service.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");

    var AuthGuardService = /*#__PURE__*/function () {
      function AuthGuardService(authService, route) {
        _classCallCheck(this, AuthGuardService);

        this.authService = authService;
        this.route = route;
      }

      _createClass(AuthGuardService, [{
        key: "canActivate",
        value: function canActivate() {
          if (this.authService.isAuthenticated()) {
            return true;
          }

          this.route.navigate(['login']);
          return false;
        }
      }]);

      return AuthGuardService;
    }();

    AuthGuardService.ɵfac = function AuthGuardService_Factory(t) {
      return new (t || AuthGuardService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_auth_service__WEBPACK_IMPORTED_MODULE_1__["AuthService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]));
    };

    AuthGuardService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
      token: AuthGuardService,
      factory: AuthGuardService.ɵfac,
      providedIn: 'root'
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AuthGuardService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
          providedIn: 'root'
        }]
      }], function () {
        return [{
          type: _auth_service__WEBPACK_IMPORTED_MODULE_1__["AuthService"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/services/auth.service.ts":
  /*!******************************************!*\
    !*** ./src/app/services/auth.service.ts ***!
    \******************************************/

  /*! exports provided: AuthService */

  /***/
  function srcAppServicesAuthServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AuthService", function () {
      return AuthService;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");

    var AuthService = /*#__PURE__*/function () {
      function AuthService(http) {
        _classCallCheck(this, AuthService);

        this.http = http;
      }

      _createClass(AuthService, [{
        key: "isAuthenticated",
        value: function isAuthenticated() {
          var userData = localStorage.getItem('userInfo');

          if (userData && JSON.parse(userData)) {
            return true;
          }

          return false;
        }
      }, {
        key: "setUserInfo",
        value: function setUserInfo(user) {
          localStorage.setItem('userInfo', JSON.stringify(user));
        }
      }, {
        key: "validate",
        value: function validate(userItem) {
          return this.http.post('book-manager001/authenticate', userItem).toPromise();
        }
      }]);

      return AuthService;
    }();

    AuthService.ɵfac = function AuthService_Factory(t) {
      return new (t || AuthService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]));
    };

    AuthService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
      token: AuthService,
      factory: AuthService.ɵfac,
      providedIn: 'root'
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AuthService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
          providedIn: 'root'
        }]
      }], function () {
        return [{
          type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/services/customvalidation.service.ts":
  /*!******************************************************!*\
    !*** ./src/app/services/customvalidation.service.ts ***!
    \******************************************************/

  /*! exports provided: CustomvalidationService */

  /***/
  function srcAppServicesCustomvalidationServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CustomvalidationService", function () {
      return CustomvalidationService;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

    var CustomvalidationService = /*#__PURE__*/function () {
      function CustomvalidationService() {
        _classCallCheck(this, CustomvalidationService);
      }

      _createClass(CustomvalidationService, [{
        key: "patternValidator",
        value: function patternValidator() {
          return function (control) {
            if (!control.value) {
              return null;
            }

            var regex = new RegExp('^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9]).{8,}$');
            var valid = regex.test(control.value);
            return valid ? null : {
              invalidPassword: true
            };
          };
        }
      }, {
        key: "MatchPassword",
        value: function MatchPassword(password, confirmPassword) {
          return function (formGroup) {
            var passwordControl = formGroup.controls[password];
            var confirmPasswordControl = formGroup.controls[confirmPassword];

            if (!passwordControl || !confirmPasswordControl) {
              return null;
            }

            if (confirmPasswordControl.errors && !confirmPasswordControl.errors.passwordMismatch) {
              return null;
            }

            if (passwordControl.value !== confirmPasswordControl.value) {
              confirmPasswordControl.setErrors({
                passwordMismatch: true
              });
            } else {
              confirmPasswordControl.setErrors(null);
            }
          };
        }
      }, {
        key: "userNameValidator",
        value: function userNameValidator(userControl) {
          var _this11 = this;

          return new Promise(function (resolve) {
            setTimeout(function () {
              if (_this11.validateUserName(userControl.value)) {
                resolve({
                  userNameNotAvailable: true
                });
              } else {
                resolve(null);
              }
            }, 1000);
          });
        }
      }, {
        key: "validateUserName",
        value: function validateUserName(userName) {
          var UserList = ['user', 'superuser'];
          return UserList.indexOf(userName) > -1;
        }
      }]);

      return CustomvalidationService;
    }();

    CustomvalidationService.ɵfac = function CustomvalidationService_Factory(t) {
      return new (t || CustomvalidationService)();
    };

    CustomvalidationService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
      token: CustomvalidationService,
      factory: CustomvalidationService.ɵfac,
      providedIn: 'root'
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CustomvalidationService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
          providedIn: 'root'
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/services/root.service.ts":
  /*!******************************************!*\
    !*** ./src/app/services/root.service.ts ***!
    \******************************************/

  /*! exports provided: RootService */

  /***/
  function srcAppServicesRootServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "RootService", function () {
      return RootService;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");

    var RootService = /*#__PURE__*/function () {
      function RootService(http) {
        _classCallCheck(this, RootService);

        this.http = http;
      }

      _createClass(RootService, [{
        key: "getAPIData",
        value: function getAPIData() {
          return this.http.get('http://localhost:3000/v1/books/');
        }
      }, {
        key: "postAPIData",
        value: function postAPIData(newItem) {
          var type = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : "books";

          if (type == "books") {
            return this.http.post('http://localhost:3000/v1/books/', newItem);
          } else if (type == "users") {
            return this.http.post('http://localhost:3000/v1/users/', newItem);
          }
        }
      }, {
        key: "postAPIUpdateData",
        value: function postAPIUpdateData(updateItem, originalItem) {
          console.log("originalItem");
          console.log(originalItem);
          var query = {
            'updated': updateItem,
            'original': originalItem
          };
          return this.http.post('book-manager001/updateBooks/', query);
        }
      }, {
        key: "removeAPIData",
        value: function removeAPIData(book) {
          return this.http.post('book-manager001/removeBooks/', book);
        } // userLogin(userItem){
        //   return this.http.post('http://localhost:3000/v1/users/', userItem);
        // }

      }, {
        key: "postAPIsingleBook",
        value: function postAPIsingleBook(singleBook) {
          return this.http.post('book-manager001/bookOne/', singleBook);
        }
      }, {
        key: "postRatingData",
        value: function postRatingData(newRatingItem) {
          return this.http.post('book-manager001/rate/', newRatingItem);
        }
      }, {
        key: "getRatingData",
        value: function getRatingData(book) {
          return this.http.post('book-manager001/listrate/', book);
        }
      }]);

      return RootService;
    }();

    RootService.ɵfac = function RootService_Factory(t) {
      return new (t || RootService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]));
    };

    RootService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
      token: RootService,
      factory: RootService.ɵfac,
      providedIn: 'root'
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](RootService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
          providedIn: 'root'
        }]
      }], function () {
        return [{
          type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/services/upload.service.ts":
  /*!********************************************!*\
    !*** ./src/app/services/upload.service.ts ***!
    \********************************************/

  /*! exports provided: UploadService */

  /***/
  function srcAppServicesUploadServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "UploadService", function () {
      return UploadService;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
    /* harmony import */


    var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! rxjs/operators */
    "./node_modules/rxjs/_esm2015/operators/index.js");

    var UploadService = /*#__PURE__*/function () {
      function UploadService(httpClient) {
        _classCallCheck(this, UploadService);

        this.httpClient = httpClient;
        this.SERVER_URL = "http://localhost:8080";
      }

      _createClass(UploadService, [{
        key: "upload",
        value: function upload(data) {
          //let uploadURL = `${this.SERVER_URL}/api/upload`;
          var uploadURL = 'book-manager001/upload/';
          console.log('Meow');
          console.log(data);
          return this.httpClient.post(uploadURL, data, {
            reportProgress: true,
            observe: 'events'
          }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (event) {
            switch (event.type) {
              case _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpEventType"].UploadProgress:
                var progress = Math.round(100 * event.loaded / event.total);
                return {
                  status: 'progress',
                  message: progress
                };

              case _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpEventType"].Response:
                return event.body;

              default:
                return "Unhandled event: ".concat(event.type);
            }
          }));
        }
      }]);

      return UploadService;
    }();

    UploadService.ɵfac = function UploadService_Factory(t) {
      return new (t || UploadService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]));
    };

    UploadService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
      token: UploadService,
      factory: UploadService.ɵfac,
      providedIn: 'root'
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](UploadService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
          providedIn: 'root'
        }]
      }], function () {
        return [{
          type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/shared-items/header/header.component.ts":
  /*!*********************************************************!*\
    !*** ./src/app/shared-items/header/header.component.ts ***!
    \*********************************************************/

  /*! exports provided: HeaderComponent */

  /***/
  function srcAppSharedItemsHeaderHeaderComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "HeaderComponent", function () {
      return HeaderComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _services_auth_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./../../services/auth.service */
    "./src/app/services/auth.service.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");

    function HeaderComponent_li_4_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li", 5);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "a", 8);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Home");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function HeaderComponent_li_5_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li", 5);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "a", 9);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Home");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function HeaderComponent_li_9_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li", 5);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "a", 10);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Login");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function HeaderComponent_li_10_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li", 5);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "a", 11);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Sign Up");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function HeaderComponent_li_11_li_4_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li", 5);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "a", 14);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Log Out");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function HeaderComponent_li_11_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li", 5);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "a", 12);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "ul", 13);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, HeaderComponent_li_11_li_4_Template, 3, 0, "li", 4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r4.userData);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r4.loggedIn);
      }
    }

    var HeaderComponent = /*#__PURE__*/function () {
      function HeaderComponent(authService) {
        _classCallCheck(this, HeaderComponent);

        this.authService = authService;
        this.userData = "";
      }

      _createClass(HeaderComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.loggedIn = this.authService.isAuthenticated();

          if (this.loggedIn) {
            var userdet = localStorage.getItem('userInfo');
            var data = JSON.parse(userdet);
            this.userData = data.user; // console.log(data.user);
          }
        }
      }]);

      return HeaderComponent;
    }();

    HeaderComponent.ɵfac = function HeaderComponent_Factory(t) {
      return new (t || HeaderComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_auth_service__WEBPACK_IMPORTED_MODULE_1__["AuthService"]));
    };

    HeaderComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: HeaderComponent,
      selectors: [["app-header"]],
      decls: 13,
      vars: 5,
      consts: [[1, "navigation", "navigation--main"], ["routerLink", "/home"], ["src", "assets/img/logo.png"], [1, "navigation__container"], ["class", "navigation__item", 4, "ngIf"], [1, "navigation__item"], ["routerLink", "/books", "routerLinkActive", "active", 1, "navigation__link"], [1, "clear"], ["routerLink", "/home", "routerLinkActive", "active", 1, "navigation__link"], ["routerLink", "/userHome", "routerLinkActive", "active", 1, "navigation__link"], ["routerLink", "/login", "routerLinkActive", "active", 1, "navigation__link"], ["routerLink", "/signup", "routerLinkActive", "active", 1, "navigation__link"], [1, "navigation__link"], [1, "navigation__sub-menu"], ["routerLink", "/logout", "routerLinkActive", "active", 1, "navigation__link"]],
      template: function HeaderComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "nav", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "a", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "img", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "ul", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, HeaderComponent_li_4_Template, 3, 0, "li", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, HeaderComponent_li_5_Template, 3, 0, "li", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "li", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "a", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Books");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](9, HeaderComponent_li_9_Template, 3, 0, "li", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](10, HeaderComponent_li_10_Template, 3, 0, "li", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](11, HeaderComponent_li_11_Template, 5, 2, "li", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](12, "div", 7);
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.loggedIn);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.loggedIn);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.loggedIn);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.loggedIn);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.loggedIn);
        }
      },
      directives: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterLinkWithHref"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgIf"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterLinkActive"]],
      styles: [".navigation__container[_ngcontent-%COMP%] {\n  padding-left: 0;\n  margin-left: 0;\n  display: flex;\n  margin-bottom: 0;\n  justify-content: left;\n  height: 80px;\n  align-items: center;\n}\n.navigation__item[_ngcontent-%COMP%] {\n  list-style: none;\n  position: relative;\n}\n.navigation__item[_ngcontent-%COMP%]:hover   .navigation__sub-menu[_ngcontent-%COMP%] {\n  display: block;\n  position: absolute;\n  width: 200px;\n  left: 0;\n  padding-left: 0;\n}\n.navigation__item[_ngcontent-%COMP%]:hover   .navigation__sub-menu[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  font-size: 22px;\n}\n.navigation__link[_ngcontent-%COMP%] {\n  padding: 10px 20px;\n  text-decoration: none;\n  margin-right: 15px;\n  color: #000;\n  font-size: 27px;\n  font-family: \"Poiret One\", cursive;\n}\n.navigation__link[_ngcontent-%COMP%]:hover, .navigation__link.active[_ngcontent-%COMP%] {\n  color: #ccc;\n}\n.navigation--main[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: row;\n  justify-content: space-between;\n  align-items: center;\n}\n.navigation__sub-menu[_ngcontent-%COMP%] {\n  display: none;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2hhcmVkLWl0ZW1zL2hlYWRlci9GOlxcRm9yIEJyYWluXFxCb29rcyBpbnZlbnRvcnlcXGJvb2stbGlzdC9zcmNcXGFwcFxcc2hhcmVkLWl0ZW1zXFxoZWFkZXJcXGhlYWRlci5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvc2hhcmVkLWl0ZW1zL2hlYWRlci9oZWFkZXIuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQ0k7RUFDSSxlQUFBO0VBQ0EsY0FBQTtFQUNBLGFBQUE7RUFDQSxnQkFBQTtFQUNBLHFCQUFBO0VBQ0EsWUFBQTtFQUNBLG1CQUFBO0FDQVI7QURFSTtFQUNJLGdCQUFBO0VBQ0Esa0JBQUE7QUNBUjtBREVZO0VBQ0ksY0FBQTtFQUNBLGtCQUFBO0VBQ0EsWUFBQTtFQUNBLE9BQUE7RUFDQSxlQUFBO0FDQWhCO0FEQ2dCO0VBQ0ksZUFBQTtBQ0NwQjtBRElJO0VBQ0ksa0JBQUE7RUFDQSxxQkFBQTtFQUNBLGtCQUFBO0VBQ0EsV0FBQTtFQUNBLGVBQUE7RUFDQSxrQ0FBQTtBQ0ZSO0FER1E7RUFFSSxXQUFBO0FDRlo7QURLSTtFQUNJLGFBQUE7RUFDQSxtQkFBQTtFQUNBLDhCQUFBO0VBQ0EsbUJBQUE7QUNIUjtBREtJO0VBQ0ksYUFBQTtBQ0hSIiwiZmlsZSI6InNyYy9hcHAvc2hhcmVkLWl0ZW1zL2hlYWRlci9oZWFkZXIuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIubmF2aWdhdGlvbiB7XHJcbiAgICAmX19jb250YWluZXIge1xyXG4gICAgICAgIHBhZGRpbmctbGVmdDogMDtcclxuICAgICAgICBtYXJnaW4tbGVmdDogMDtcclxuICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgIG1hcmdpbi1ib3R0b206IDA7XHJcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBsZWZ0O1xyXG4gICAgICAgIGhlaWdodDogODBweDtcclxuICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgfVxyXG4gICAgJl9faXRlbXtcclxuICAgICAgICBsaXN0LXN0eWxlOiBub25lO1xyXG4gICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgICAgICAmOmhvdmVyIHtcclxuICAgICAgICAgICAgLm5hdmlnYXRpb25fX3N1Yi1tZW51IHtcclxuICAgICAgICAgICAgICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICAgICAgICAgICAgd2lkdGg6IDIwMHB4O1xyXG4gICAgICAgICAgICAgICAgbGVmdDogMDtcclxuICAgICAgICAgICAgICAgIHBhZGRpbmctbGVmdDogMDtcclxuICAgICAgICAgICAgICAgIGEge1xyXG4gICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMjJweDtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSBcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICAmX19saW5rIHtcclxuICAgICAgICBwYWRkaW5nOiAxMHB4IDIwcHg7XHJcbiAgICAgICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG4gICAgICAgIG1hcmdpbi1yaWdodDogMTVweDtcclxuICAgICAgICBjb2xvcjogIzAwMDtcclxuICAgICAgICBmb250LXNpemU6IDI3cHg7XHJcbiAgICAgICAgZm9udC1mYW1pbHk6ICdQb2lyZXQgT25lJywgY3Vyc2l2ZTtcclxuICAgICAgICAmOmhvdmVyLFxyXG4gICAgICAgICYuYWN0aXZlIHtcclxuICAgICAgICAgICAgY29sb3I6ICNjY2M7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgJi0tbWFpbiB7XHJcbiAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xyXG4gICAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxuICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgfVxyXG4gICAgJl9fc3ViLW1lbnUge1xyXG4gICAgICAgIGRpc3BsYXk6IG5vbmU7XHJcbiAgICB9XHJcbn1cclxuXHJcbiIsIi5uYXZpZ2F0aW9uX19jb250YWluZXIge1xuICBwYWRkaW5nLWxlZnQ6IDA7XG4gIG1hcmdpbi1sZWZ0OiAwO1xuICBkaXNwbGF5OiBmbGV4O1xuICBtYXJnaW4tYm90dG9tOiAwO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGxlZnQ7XG4gIGhlaWdodDogODBweDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbn1cbi5uYXZpZ2F0aW9uX19pdGVtIHtcbiAgbGlzdC1zdHlsZTogbm9uZTtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xufVxuLm5hdmlnYXRpb25fX2l0ZW06aG92ZXIgLm5hdmlnYXRpb25fX3N1Yi1tZW51IHtcbiAgZGlzcGxheTogYmxvY2s7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgd2lkdGg6IDIwMHB4O1xuICBsZWZ0OiAwO1xuICBwYWRkaW5nLWxlZnQ6IDA7XG59XG4ubmF2aWdhdGlvbl9faXRlbTpob3ZlciAubmF2aWdhdGlvbl9fc3ViLW1lbnUgYSB7XG4gIGZvbnQtc2l6ZTogMjJweDtcbn1cbi5uYXZpZ2F0aW9uX19saW5rIHtcbiAgcGFkZGluZzogMTBweCAyMHB4O1xuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gIG1hcmdpbi1yaWdodDogMTVweDtcbiAgY29sb3I6ICMwMDA7XG4gIGZvbnQtc2l6ZTogMjdweDtcbiAgZm9udC1mYW1pbHk6IFwiUG9pcmV0IE9uZVwiLCBjdXJzaXZlO1xufVxuLm5hdmlnYXRpb25fX2xpbms6aG92ZXIsIC5uYXZpZ2F0aW9uX19saW5rLmFjdGl2ZSB7XG4gIGNvbG9yOiAjY2NjO1xufVxuLm5hdmlnYXRpb24tLW1haW4ge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG59XG4ubmF2aWdhdGlvbl9fc3ViLW1lbnUge1xuICBkaXNwbGF5OiBub25lO1xufSJdfQ== */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](HeaderComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-header',
          templateUrl: './header.component.html',
          styleUrls: ['./header.component.scss']
        }]
      }], function () {
        return [{
          type: _services_auth_service__WEBPACK_IMPORTED_MODULE_1__["AuthService"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/shared-items/shared-items.module.ts":
  /*!*****************************************************!*\
    !*** ./src/app/shared-items/shared-items.module.ts ***!
    \*****************************************************/

  /*! exports provided: SharedItemsModule */

  /***/
  function srcAppSharedItemsSharedItemsModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "SharedItemsModule", function () {
      return SharedItemsModule;
    });
    /* harmony import */


    var _app_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! ./../app-routing.module */
    "./src/app/app-routing.module.ts");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _header_header_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./header/header.component */
    "./src/app/shared-items/header/header.component.ts");

    var SharedItemsModule = function SharedItemsModule() {
      _classCallCheck(this, SharedItemsModule);
    };

    SharedItemsModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({
      type: SharedItemsModule
    });
    SharedItemsModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({
      factory: function SharedItemsModule_Factory(t) {
        return new (t || SharedItemsModule)();
      },
      imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_0__["AppRoutingModule"]]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](SharedItemsModule, {
        declarations: [_header_header_component__WEBPACK_IMPORTED_MODULE_3__["HeaderComponent"]],
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_0__["AppRoutingModule"]],
        exports: [_header_header_component__WEBPACK_IMPORTED_MODULE_3__["HeaderComponent"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](SharedItemsModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
          declarations: [_header_header_component__WEBPACK_IMPORTED_MODULE_3__["HeaderComponent"]],
          imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_0__["AppRoutingModule"]],
          exports: [_header_header_component__WEBPACK_IMPORTED_MODULE_3__["HeaderComponent"]]
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/users-manager/login/login.component.ts":
  /*!********************************************************!*\
    !*** ./src/app/users-manager/login/login.component.ts ***!
    \********************************************************/

  /*! exports provided: LoginComponent */

  /***/
  function srcAppUsersManagerLoginLoginComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "LoginComponent", function () {
      return LoginComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
    /* harmony import */


    var _services_root_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../../services/root.service */
    "./src/app/services/root.service.ts");
    /* harmony import */


    var _services_auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./../../services/auth.service */
    "./src/app/services/auth.service.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _services_customvalidation_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./../../services/customvalidation.service */
    "./src/app/services/customvalidation.service.ts");
    /* harmony import */


    var ngx_toastr__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ngx-toastr */
    "./node_modules/ngx-toastr/__ivy_ngcc__/fesm2015/ngx-toastr.js");
    /* harmony import */


    var _shared_items_header_header_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ../../shared-items/header/header.component */
    "./src/app/shared-items/header/header.component.ts");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");

    function LoginComponent_span_9_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 10);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Username is required ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function LoginComponent_span_10_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 10);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " User Name is not available ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function LoginComponent_span_15_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 10);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Password is required ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function LoginComponent_span_16_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 10);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Password should have minimum 8 characters, at least 1 uppercase letter, 1 lowercase letter and 1 number ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    var LoginComponent = /*#__PURE__*/function () {
      function LoginComponent(rootService, authService, router, formBuilder, customValidator, toastr) {
        _classCallCheck(this, LoginComponent);

        this.rootService = rootService;
        this.authService = authService;
        this.router = router;
        this.formBuilder = formBuilder;
        this.customValidator = customValidator;
        this.toastr = toastr;
        this.submitted = false;
      }

      _createClass(LoginComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.loginForm = this.formBuilder.group({
            user: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required], this.customValidator.userNameValidator.bind(this.customValidator)],
            password: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, this.customValidator.patternValidator()])]
          });
        }
      }, {
        key: "login",
        value: function login() {
          var _this12 = this;

          console.log('onetwo');
          this.submitted = true;

          if (this.loginForm.valid) {
            var userval = this.loginForm.value.user;
            var passwordval = this.loginForm.value.password;
            var userItem = {
              'username': userval,
              'password': passwordval,
              'type': 'admin'
            }; // this.rootService.postAPIData(userItem).subscribe((response)=>{
            //   console.log(response);
            //   this.router.navigate(['/books'])
            // },(error) => {
            //     console.log('error is ', error)
            // });

            this.authService.validate(userItem).then(function (response) {
              console.log(response);

              _this12.authService.setUserInfo({
                'user': response['user'],
                'id': response['id']
              });

              _this12.router.navigate(['/adminHome']);

              _this12.toastr.success("Login Succesful");
            }, function (error) {
              console.log('error is ', error);

              _this12.toastr.error("Login Failed!");
            });
          }
        }
      }, {
        key: "f",
        get: function get() {
          return this.loginForm.controls;
        }
      }]);

      return LoginComponent;
    }();

    LoginComponent.ɵfac = function LoginComponent_Factory(t) {
      return new (t || LoginComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_root_service__WEBPACK_IMPORTED_MODULE_2__["RootService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_customvalidation_service__WEBPACK_IMPORTED_MODULE_5__["CustomvalidationService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](ngx_toastr__WEBPACK_IMPORTED_MODULE_6__["ToastrService"]));
    };

    LoginComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: LoginComponent,
      selectors: [["app-login"]],
      decls: 19,
      vars: 5,
      consts: [[1, "login__container"], [1, "login__heading", "bibliophile__heading"], [1, "login__form", 3, "formGroup", "ngSubmit"], [1, "form-group"], ["for", "user"], ["type", "text", "id", "user", "formControlName", "user", "name", "user", "required", "", 1, "form-control"], ["class", "text-danger", 4, "ngIf"], ["for", "password"], ["type", "password", "id", "password", "formControlName", "password", "name", "password", "required", "", 1, "form-control"], ["type", "submit", 1, "btn", "btn-primary"], [1, "text-danger"]],
      template: function LoginComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-header");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "h1", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Log In");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "form", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngSubmit", function LoginComponent_Template_form_ngSubmit_4_listener() {
            return ctx.login();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "label", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "Username");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "input", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](9, LoginComponent_span_9_Template, 2, 0, "span", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](10, LoginComponent_span_10_Template, 2, 0, "span", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "label", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "Password");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](14, "input", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](15, LoginComponent_span_15_Template, 2, 0, "span", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](16, LoginComponent_span_16_Template, 2, 0, "span", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "button", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "Submit");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx.loginForm);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", (ctx.f.user.touched || ctx.submitted) && (ctx.f.user.errors == null ? null : ctx.f.user.errors.required));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.f.user.touched && (ctx.f.user.errors == null ? null : ctx.f.user.errors.userNameNotAvailable));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", (ctx.f.password.touched || ctx.submitted) && (ctx.f.password.errors == null ? null : ctx.f.password.errors.required));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.f.password.touched && (ctx.f.password.errors == null ? null : ctx.f.password.errors.invalidPassword));
        }
      },
      directives: [_shared_items_header_header_component__WEBPACK_IMPORTED_MODULE_7__["HeaderComponent"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroupDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControlName"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["RequiredValidator"], _angular_common__WEBPACK_IMPORTED_MODULE_8__["NgIf"]],
      styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3VzZXJzLW1hbmFnZXIvbG9naW4vbG9naW4uY29tcG9uZW50LnNjc3MifQ== */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](LoginComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-login',
          templateUrl: './login.component.html',
          styleUrls: ['./login.component.scss']
        }]
      }], function () {
        return [{
          type: _services_root_service__WEBPACK_IMPORTED_MODULE_2__["RootService"]
        }, {
          type: _services_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]
        }, {
          type: _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"]
        }, {
          type: _services_customvalidation_service__WEBPACK_IMPORTED_MODULE_5__["CustomvalidationService"]
        }, {
          type: ngx_toastr__WEBPACK_IMPORTED_MODULE_6__["ToastrService"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/users-manager/logout/logout.component.ts":
  /*!**********************************************************!*\
    !*** ./src/app/users-manager/logout/logout.component.ts ***!
    \**********************************************************/

  /*! exports provided: LogoutComponent */

  /***/
  function srcAppUsersManagerLogoutLogoutComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "LogoutComponent", function () {
      return LogoutComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _services_auth_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./../../services/auth.service */
    "./src/app/services/auth.service.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var ngx_toastr__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ngx-toastr */
    "./node_modules/ngx-toastr/__ivy_ngcc__/fesm2015/ngx-toastr.js");

    var LogoutComponent = /*#__PURE__*/function () {
      function LogoutComponent(authService, router, toastr) {
        _classCallCheck(this, LogoutComponent);

        this.authService = authService;
        this.router = router;
        this.toastr = toastr;
      }

      _createClass(LogoutComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          localStorage.removeItem('userInfo');
          this.router.navigate(['/home']);
          this.toastr.success("Logged out Succesfully");
        }
      }]);

      return LogoutComponent;
    }();

    LogoutComponent.ɵfac = function LogoutComponent_Factory(t) {
      return new (t || LogoutComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_auth_service__WEBPACK_IMPORTED_MODULE_1__["AuthService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](ngx_toastr__WEBPACK_IMPORTED_MODULE_3__["ToastrService"]));
    };

    LogoutComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: LogoutComponent,
      selectors: [["app-logout"]],
      decls: 2,
      vars: 0,
      template: function LogoutComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Logged out Succesfully!");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      },
      styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3VzZXJzLW1hbmFnZXIvbG9nb3V0L2xvZ291dC5jb21wb25lbnQuc2NzcyJ9 */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](LogoutComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-logout',
          templateUrl: './logout.component.html',
          styleUrls: ['./logout.component.scss']
        }]
      }], function () {
        return [{
          type: _services_auth_service__WEBPACK_IMPORTED_MODULE_1__["AuthService"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]
        }, {
          type: ngx_toastr__WEBPACK_IMPORTED_MODULE_3__["ToastrService"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/users-manager/sign-up/sign-up.component.ts":
  /*!************************************************************!*\
    !*** ./src/app/users-manager/sign-up/sign-up.component.ts ***!
    \************************************************************/

  /*! exports provided: SignUpComponent */

  /***/
  function srcAppUsersManagerSignUpSignUpComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "SignUpComponent", function () {
      return SignUpComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
    /* harmony import */


    var _services_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./../../services/auth.service */
    "./src/app/services/auth.service.ts");
    /* harmony import */


    var _services_root_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../../services/root.service */
    "./src/app/services/root.service.ts");
    /* harmony import */


    var _services_customvalidation_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./../../services/customvalidation.service */
    "./src/app/services/customvalidation.service.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var ngx_toastr__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ngx-toastr */
    "./node_modules/ngx-toastr/__ivy_ngcc__/fesm2015/ngx-toastr.js");
    /* harmony import */


    var _shared_items_header_header_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ../../shared-items/header/header.component */
    "./src/app/shared-items/header/header.component.ts");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");

    function SignUpComponent_span_8_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 15);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " First Name is required ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function SignUpComponent_span_13_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 15);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Last Name is required ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function SignUpComponent_span_18_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 15);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Username is required ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function SignUpComponent_span_19_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 15);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " User Name is not available ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function SignUpComponent_span_24_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 15);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Password is required ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function SignUpComponent_span_25_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 15);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Password should have minimum 8 characters, at least 1 uppercase letter, 1 lowercase letter and 1 number ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function SignUpComponent_span_30_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 15);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Confirm Password is required ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function SignUpComponent_span_31_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 15);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Passwords doesnot match ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    var _c0 = function _c0(a0) {
      return {
        "is-invalid": a0
      };
    };

    var SignUpComponent = /*#__PURE__*/function () {
      function SignUpComponent(authService, rootService, formBuilder, customValidator, router, toastr) {
        _classCallCheck(this, SignUpComponent);

        this.authService = authService;
        this.rootService = rootService;
        this.formBuilder = formBuilder;
        this.customValidator = customValidator;
        this.router = router;
        this.toastr = toastr;
        this.submitted = false;
      }

      _createClass(SignUpComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.userForm = this.formBuilder.group({
            fname: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            lname: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            user: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required], this.customValidator.userNameValidator.bind(this.customValidator)],
            password: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, this.customValidator.patternValidator()])],
            cpassword: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]]
          }, {
            validator: this.customValidator.MatchPassword('password', 'cpassword')
          });
        }
      }, {
        key: "addUsers",
        value: function addUsers() {
          var _this13 = this;

          this.submitted = true;

          if (this.userForm.valid) {
            var fnameval = this.userForm.value.fname;
            var lnameval = this.userForm.value.lname;
            var userval = this.userForm.value.user;
            var passwordval = this.userForm.value.password;
            var newUserItem = {
              'fname': fnameval,
              'lname': lnameval,
              'user': userval,
              'password': passwordval,
              'type': 'admin'
            };
            this.rootService.postAPIData(newUserItem, "users").subscribe(function (response) {
              console.log(response);

              _this13.authService.setUserInfo({
                'user': response['user'],
                'id': response['id']
              });

              _this13.router.navigate(['/adminHome']);

              _this13.toastr.success("Sign Up Succesful");
            }, function (error) {
              console.log('error is ', error);

              _this13.toastr.error("Sign Up Failed");
            });
          }
        }
      }, {
        key: "f",
        get: function get() {
          return this.userForm.controls;
        }
      }]);

      return SignUpComponent;
    }();

    SignUpComponent.ɵfac = function SignUpComponent_Factory(t) {
      return new (t || SignUpComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_root_service__WEBPACK_IMPORTED_MODULE_3__["RootService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_customvalidation_service__WEBPACK_IMPORTED_MODULE_4__["CustomvalidationService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](ngx_toastr__WEBPACK_IMPORTED_MODULE_6__["ToastrService"]));
    };

    SignUpComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: SignUpComponent,
      selectors: [["app-sign-up"]],
      decls: 34,
      vars: 12,
      consts: [[1, "bibliophile__heading"], [1, "signup__form", 3, "formGroup", "ngSubmit"], [1, "form-group"], ["for", "fname"], ["type", "text", "id", "fname", "name", "fname", "formControlName", "fname", 1, "form-control", 3, "ngClass"], ["class", "text-danger", 4, "ngIf"], ["for", "lname"], ["type", "text", "id", "lname", "formControlName", "lname", "name", "lname", "required", "", 1, "form-control"], ["for", "user"], ["type", "text", "id", "user", "formControlName", "user", "name", "user", "required", "", 1, "form-control"], ["for", "password"], ["type", "password", "id", "password", "formControlName", "password", "name", "password", "required", "", 1, "form-control"], ["for", "cpassword"], ["type", "password", "id", "cpassword", "formControlName", "cpassword", "name", "cpassword", "required", "", 1, "form-control"], ["type", "submit", 1, "btn", "btn-primary"], [1, "text-danger"]],
      template: function SignUpComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-header");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h1", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Sign Up");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "form", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngSubmit", function SignUpComponent_Template_form_ngSubmit_3_listener() {
            return ctx.addUsers();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "label", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "First Name");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "input", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](8, SignUpComponent_span_8_Template, 2, 0, "span", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "label", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "Last Name");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](12, "input", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](13, SignUpComponent_span_13_Template, 2, 0, "span", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "label", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "Username");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](17, "input", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](18, SignUpComponent_span_18_Template, 2, 0, "span", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](19, SignUpComponent_span_19_Template, 2, 0, "span", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "label", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, "Password");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](23, "input", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](24, SignUpComponent_span_24_Template, 2, 0, "span", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](25, SignUpComponent_span_25_Template, 2, 0, "span", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "label", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](28, "Confirm Password");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](29, "input", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](30, SignUpComponent_span_30_Template, 2, 0, "span", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](31, SignUpComponent_span_31_Template, 2, 0, "span", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "button", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](33, "Submit");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx.userForm);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](10, _c0, ctx.submitted && ctx.f.fname.errors));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", (ctx.f.fname.touched || ctx.submitted) && (ctx.f.fname.errors == null ? null : ctx.f.fname.errors.required));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", (ctx.f.lname.touched || ctx.submitted) && (ctx.f.lname.errors == null ? null : ctx.f.lname.errors.required));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", (ctx.f.user.touched || ctx.submitted) && (ctx.f.user.errors == null ? null : ctx.f.user.errors.required));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.f.user.touched && (ctx.f.user.errors == null ? null : ctx.f.user.errors.userNameNotAvailable));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", (ctx.f.password.touched || ctx.submitted) && (ctx.f.password.errors == null ? null : ctx.f.password.errors.required));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.f.password.touched && (ctx.f.password.errors == null ? null : ctx.f.password.errors.invalidPassword));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", (ctx.f.cpassword.touched || ctx.submitted) && (ctx.f.cpassword.errors == null ? null : ctx.f.cpassword.errors.required));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.f.cpassword.touched && (ctx.f.cpassword.errors == null ? null : ctx.f.cpassword.errors.passwordMismatch));
        }
      },
      directives: [_shared_items_header_header_component__WEBPACK_IMPORTED_MODULE_7__["HeaderComponent"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroupDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControlName"], _angular_common__WEBPACK_IMPORTED_MODULE_8__["NgClass"], _angular_common__WEBPACK_IMPORTED_MODULE_8__["NgIf"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["RequiredValidator"]],
      styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3VzZXJzLW1hbmFnZXIvc2lnbi11cC9zaWduLXVwLmNvbXBvbmVudC5zY3NzIn0= */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SignUpComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-sign-up',
          templateUrl: './sign-up.component.html',
          styleUrls: ['./sign-up.component.scss']
        }]
      }], function () {
        return [{
          type: _services_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"]
        }, {
          type: _services_root_service__WEBPACK_IMPORTED_MODULE_3__["RootService"]
        }, {
          type: _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"]
        }, {
          type: _services_customvalidation_service__WEBPACK_IMPORTED_MODULE_4__["CustomvalidationService"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"]
        }, {
          type: ngx_toastr__WEBPACK_IMPORTED_MODULE_6__["ToastrService"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/users-manager/user-home/user-home.component.ts":
  /*!****************************************************************!*\
    !*** ./src/app/users-manager/user-home/user-home.component.ts ***!
    \****************************************************************/

  /*! exports provided: UserHomeComponent */

  /***/
  function srcAppUsersManagerUserHomeUserHomeComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "UserHomeComponent", function () {
      return UserHomeComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _shared_items_header_header_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ../../shared-items/header/header.component */
    "./src/app/shared-items/header/header.component.ts");

    var UserHomeComponent = /*#__PURE__*/function () {
      function UserHomeComponent() {
        _classCallCheck(this, UserHomeComponent);
      }

      _createClass(UserHomeComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return UserHomeComponent;
    }();

    UserHomeComponent.ɵfac = function UserHomeComponent_Factory(t) {
      return new (t || UserHomeComponent)();
    };

    UserHomeComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: UserHomeComponent,
      selectors: [["app-user-home"]],
      decls: 10,
      vars: 0,
      consts: [[1, "row", "home__container"], [1, "col-md-8", "home__left"], ["src", "assets/img/home.jpg", "alt", "Home", 1, "home__image"], [1, "col-md-4", "home__right"]],
      template: function UserHomeComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-header");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "img", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, " \u201CBooks are letters in bottles, cast into the waves of time, from one person trying to save the world to another.\u201D");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, " \u2015 Amal El-Mohtar ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      },
      directives: [_shared_items_header_header_component__WEBPACK_IMPORTED_MODULE_1__["HeaderComponent"]],
      styles: [".home__container[_ngcontent-%COMP%] {\n  margin-bottom: 30px;\n}\n.home__image[_ngcontent-%COMP%] {\n  max-width: 100%;\n  width: auto;\n}\n.home__right[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  font-style: italic;\n}\n.home__right[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  font-size: 26px;\n  line-height: 36px;\n}\n.home__right[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  display: block;\n  margin-top: 10px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdXNlcnMtbWFuYWdlci91c2VyLWhvbWUvRjpcXEZvciBCcmFpblxcQm9va3MgaW52ZW50b3J5XFxib29rLWxpc3Qvc3JjXFxhcHBcXHVzZXJzLW1hbmFnZXJcXHVzZXItaG9tZVxcdXNlci1ob21lLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC91c2Vycy1tYW5hZ2VyL3VzZXItaG9tZS91c2VyLWhvbWUuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQ0k7RUFDSSxtQkFBQTtBQ0FSO0FERUk7RUFDSSxlQUFBO0VBQ0EsV0FBQTtBQ0FSO0FERUk7RUFDSSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSxrQkFBQTtBQ0FSO0FEQ1E7RUFDSSxlQUFBO0VBQ0EsaUJBQUE7QUNDWjtBRENRO0VBQ0ksY0FBQTtFQUNBLGdCQUFBO0FDQ1oiLCJmaWxlIjoic3JjL2FwcC91c2Vycy1tYW5hZ2VyL3VzZXItaG9tZS91c2VyLWhvbWUuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuaG9tZSB7XHJcbiAgICAmX19jb250YWluZXIge1xyXG4gICAgICAgIG1hcmdpbi1ib3R0b206IDMwcHg7XHJcbiAgICB9XHJcbiAgICAmX19pbWFnZSB7XHJcbiAgICAgICAgbWF4LXdpZHRoOiAxMDAlO1xyXG4gICAgICAgIHdpZHRoOiBhdXRvO1xyXG4gICAgfVxyXG4gICAgJl9fcmlnaHQge1xyXG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgICAgICBmb250LXN0eWxlOiBpdGFsaWM7XHJcbiAgICAgICAgcCB7XHJcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMjZweDtcclxuICAgICAgICAgICAgbGluZS1oZWlnaHQ6IDM2cHg7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHNwYW4ge1xyXG4gICAgICAgICAgICBkaXNwbGF5OiBibG9jaztcclxuICAgICAgICAgICAgbWFyZ2luLXRvcDogMTBweDtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn0iLCIuaG9tZV9fY29udGFpbmVyIHtcbiAgbWFyZ2luLWJvdHRvbTogMzBweDtcbn1cbi5ob21lX19pbWFnZSB7XG4gIG1heC13aWR0aDogMTAwJTtcbiAgd2lkdGg6IGF1dG87XG59XG4uaG9tZV9fcmlnaHQge1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBmb250LXN0eWxlOiBpdGFsaWM7XG59XG4uaG9tZV9fcmlnaHQgcCB7XG4gIGZvbnQtc2l6ZTogMjZweDtcbiAgbGluZS1oZWlnaHQ6IDM2cHg7XG59XG4uaG9tZV9fcmlnaHQgc3BhbiB7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBtYXJnaW4tdG9wOiAxMHB4O1xufSJdfQ== */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](UserHomeComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-user-home',
          templateUrl: './user-home.component.html',
          styleUrls: ['./user-home.component.scss']
        }]
      }], function () {
        return [];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/users-manager/users-manager.module.ts":
  /*!*******************************************************!*\
    !*** ./src/app/users-manager/users-manager.module.ts ***!
    \*******************************************************/

  /*! exports provided: UsersManagerModule */

  /***/
  function srcAppUsersManagerUsersManagerModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "UsersManagerModule", function () {
      return UsersManagerModule;
    });
    /* harmony import */


    var _shared_items_shared_items_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! ./../shared-items/shared-items.module */
    "./src/app/shared-items/shared-items.module.ts");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
    /* harmony import */


    var _login_login_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./login/login.component */
    "./src/app/users-manager/login/login.component.ts");
    /* harmony import */


    var _sign_up_sign_up_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./sign-up/sign-up.component */
    "./src/app/users-manager/sign-up/sign-up.component.ts");
    /* harmony import */


    var _user_home_user_home_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./user-home/user-home.component */
    "./src/app/users-manager/user-home/user-home.component.ts");
    /* harmony import */


    var _logout_logout_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ./logout/logout.component */
    "./src/app/users-manager/logout/logout.component.ts");
    /* harmony import */


    var ngx_toastr__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ngx-toastr */
    "./node_modules/ngx-toastr/__ivy_ngcc__/fesm2015/ngx-toastr.js");

    var UsersManagerModule = function UsersManagerModule() {
      _classCallCheck(this, UsersManagerModule);
    };

    UsersManagerModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({
      type: UsersManagerModule
    });
    UsersManagerModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({
      factory: function UsersManagerModule_Factory(t) {
        return new (t || UsersManagerModule)();
      },
      imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"], _shared_items_shared_items_module__WEBPACK_IMPORTED_MODULE_0__["SharedItemsModule"], ngx_toastr__WEBPACK_IMPORTED_MODULE_8__["ToastrModule"].forRoot()]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](UsersManagerModule, {
        declarations: [_login_login_component__WEBPACK_IMPORTED_MODULE_4__["LoginComponent"], _sign_up_sign_up_component__WEBPACK_IMPORTED_MODULE_5__["SignUpComponent"], _user_home_user_home_component__WEBPACK_IMPORTED_MODULE_6__["UserHomeComponent"], _logout_logout_component__WEBPACK_IMPORTED_MODULE_7__["LogoutComponent"]],
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"], _shared_items_shared_items_module__WEBPACK_IMPORTED_MODULE_0__["SharedItemsModule"], ngx_toastr__WEBPACK_IMPORTED_MODULE_8__["ToastrModule"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](UsersManagerModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
          declarations: [_login_login_component__WEBPACK_IMPORTED_MODULE_4__["LoginComponent"], _sign_up_sign_up_component__WEBPACK_IMPORTED_MODULE_5__["SignUpComponent"], _user_home_user_home_component__WEBPACK_IMPORTED_MODULE_6__["UserHomeComponent"], _logout_logout_component__WEBPACK_IMPORTED_MODULE_7__["LogoutComponent"]],
          imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"], _shared_items_shared_items_module__WEBPACK_IMPORTED_MODULE_0__["SharedItemsModule"], ngx_toastr__WEBPACK_IMPORTED_MODULE_8__["ToastrModule"].forRoot()]
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/environments/environment.ts":
  /*!*****************************************!*\
    !*** ./src/environments/environment.ts ***!
    \*****************************************/

  /*! exports provided: environment */

  /***/
  function srcEnvironmentsEnvironmentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "environment", function () {
      return environment;
    }); // This file can be replaced during build by using the `fileReplacements` array.
    // `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
    // The list of file replacements can be found in `angular.json`.


    var environment = {
      production: false
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
  },

  /***/
  "./src/main.ts":
  /*!*********************!*\
    !*** ./src/main.ts ***!
    \*********************/

  /*! no exports provided */

  /***/
  function srcMainTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./environments/environment */
    "./src/environments/environment.ts");
    /* harmony import */


    var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./app/app.module */
    "./src/app/app.module.ts");
    /* harmony import */


    var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/platform-browser */
    "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");

    if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].production) {
      Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
    }

    _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])["catch"](function (err) {
      return console.error(err);
    });
    /***/

  },

  /***/
  0:
  /*!***************************!*\
    !*** multi ./src/main.ts ***!
    \***************************/

  /*! no static exports found */

  /***/
  function _(module, exports, __webpack_require__) {
    module.exports = __webpack_require__(
    /*! F:\For Brain\Books inventory\book-list\src\main.ts */
    "./src/main.ts");
    /***/
  }
}, [[0, "runtime", "vendor"]]]);
//# sourceMappingURL=main-es5.js.map