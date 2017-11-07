webpackJsonp(["home.module"],{

/***/ "../../../../../src/app/home/home.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"app_nav\">\r\n    <ul>\r\n        <ng-container *ngFor=\"let n of bookTypeList; let i = index\">\r\n            <li>{{n.title}}</li>\r\n        </ng-container>\r\n    </ul>\r\n</div>\r\n<div class=\"hotlist\">\r\n    <ul>\r\n        <ng-container *ngFor=\"let n of bookList; let i = index\">\r\n            <li >\r\n                <a [routerLink]=\"['/bookc', n._id]\">{{i}}--{{n.title}}</a>\r\n            </li>\r\n            <!-- <li *ngIf=\"i > 2 && i < 5\" class=\"s_list\">\r\n                <h3>{{n.title}}</h3>\r\n                <p>{{n.jianjie}}</p>\r\n            </li> -->\r\n        </ng-container>\r\n    </ul>\r\n</div>\r\n<router-outlet></router-outlet>\r\n"

/***/ }),

/***/ "../../../../../src/app/home/home.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomeComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__api_service__ = __webpack_require__("../../../../../src/app/api.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var HomeComponent = (function () {
    function HomeComponent(apiservice) {
        this.apiservice = apiservice;
    }
    HomeComponent.prototype.getBooks = function () {
        var _this = this;
        this.apiservice.getBooksList().then(function (res) {
            _this.bookList = res;
            console.info(res);
        });
    };
    ;
    HomeComponent.prototype.getBookTypeList = function () {
        var _this = this;
        this.apiservice.getBooksType().then(function (res) {
            _this.bookTypeList = res;
            console.info(res);
        });
    };
    HomeComponent.prototype.ngOnInit = function () {
        this.getBooks();
        this.getBookTypeList();
    };
    return HomeComponent;
}());
HomeComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'home-root',
        template: __webpack_require__("../../../../../src/app/home/home.component.html"),
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__api_service__["a" /* HttpApiService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__api_service__["a" /* HttpApiService */]) === "function" && _a || Object])
], HomeComponent);

var _a;
//# sourceMappingURL=home.component.js.map

/***/ }),

/***/ "../../../../../src/app/home/home.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeModule", function() { return HomeModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_common__ = __webpack_require__("../../../common/@angular/common.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__home_router__ = __webpack_require__("../../../../../src/app/home/home.router.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__api_service__ = __webpack_require__("../../../../../src/app/api.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__home_component__ = __webpack_require__("../../../../../src/app/home/home.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






// NgModule的主要属性如下：
//     declarations：模块内部Components/Directives/Pipes的列表，声明一下这个模块内部成员
//     providers：指定应用程序的根级别需要使用的service。（Angular2中没有模块级别的service，所有在NgModule中声明的Provider都是注册在根级别的Dependency Injector中）
//     imports：导入其他module，其它module暴露的出的Components、Directives、Pipes等可以在本module的组件中被使用。比如导入CommonModule后就可以使用NgIf、NgFor等指令。
//     exports：用来控制将哪些内部成员暴露给外部使用。导入一个module并不意味着会自动导入这个module内部导入的module所暴露出的公共成员。除非导入的这个module把它内部导入的module写到exports中。
//     bootstrap：通常是app启动的根组件，一般只有一个component。bootstrap中的组件会自动被放入到entryComponents中。
//     entryCompoenents: 不会再模板中被引用到的组件。这个属性一般情况下只有ng自己使用，一般是bootstrap组件或者路由组件，ng会自动把bootstrap、路由组件放入其中。 除非不通过路由动态将component加入到dom中，否则不会用到这个属性。
var HomeModule = (function () {
    function HomeModule() {
    }
    return HomeModule;
}());
HomeModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["M" /* NgModule */])({
        imports: [
            __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* RouterModule */].forChild(__WEBPACK_IMPORTED_MODULE_3__home_router__["a" /* homeRouter */]),
            __WEBPACK_IMPORTED_MODULE_2__angular_common__["b" /* CommonModule */],
        ],
        exports: [],
        declarations: [
            __WEBPACK_IMPORTED_MODULE_5__home_component__["a" /* HomeComponent */],
        ],
        providers: [
            __WEBPACK_IMPORTED_MODULE_4__api_service__["a" /* HttpApiService */]
        ]
    })
], HomeModule);

//# sourceMappingURL=home.module.js.map

/***/ }),

/***/ "../../../../../src/app/home/home.router.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return homeRouter; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__home_component__ = __webpack_require__("../../../../../src/app/home/home.component.ts");

var homeRouter = [
    {
        path: '',
        component: __WEBPACK_IMPORTED_MODULE_0__home_component__["a" /* HomeComponent */],
        children: [{
                path: '',
                loadChildren: ''
            }]
    }
];
//# sourceMappingURL=home.router.js.map

/***/ })

});
//# sourceMappingURL=home.module.chunk.js.map