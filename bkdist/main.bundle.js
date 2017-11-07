webpackJsonp(["main"],{

/***/ "../../../../../src/$$_gendir lazy recursive":
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./home/home.module": [
		"../../../../../src/app/home/home.module.ts",
		"home.module"
	]
};
function webpackAsyncContext(req) {
	var ids = map[req];
	if(!ids)
		return Promise.reject(new Error("Cannot find module '" + req + "'."));
	return __webpack_require__.e(ids[1]).then(function() {
		return __webpack_require__(ids[0]);
	});
};
webpackAsyncContext.keys = function webpackAsyncContextKeys() {
	return Object.keys(map);
};
webpackAsyncContext.id = "../../../../../src/$$_gendir lazy recursive";
module.exports = webpackAsyncContext;

/***/ }),

/***/ "../../../../../src/app/api.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HttpApiService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_toPromise__ = __webpack_require__("../../../../rxjs/add/operator/toPromise.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_toPromise___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_toPromise__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_Observable__ = __webpack_require__("../../../../rxjs/Observable.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_Observable___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_Observable__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_map__ = __webpack_require__("../../../../rxjs/add/operator/map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_catch__ = __webpack_require__("../../../../rxjs/add/operator/catch.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_catch___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_catch__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




//使用Observable的时候要引入这二个


var HttpApiService = (function () {
    function HttpApiService(http) {
        this.http = http;
        this.BookCount = {};
        //头部的内容根据页面不同，展示出不同的内容
        this.BookTopCon = '';
    }
    //获取书本的列表
    HttpApiService.prototype.getBooksList = function () {
        return this.http.get("/books/showbook").toPromise().then(function (res) { return res.json(); }).catch(this.handleError);
    };
    //获取书本的分类
    HttpApiService.prototype.getBooksType = function () {
        return this.http.get("/books/BookTypeList").toPromise().then(function (res) { return res.json(); }).catch(this.handleError);
    };
    // getBookCList(id: string): Promise<GetBookList> {
    //     return this.http.post(`/books/getZlist`, {'id': id}).toPromise().then(res => res.json() as GetBookList).catch(this.handleError);
    // }
    HttpApiService.prototype.getBookCList = function (id) {
        var params = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["c" /* URLSearchParams */]();
        if (id) {
            params.append('id', id);
        }
        return this.http.post("/books/getZlist", params).map(function (res) {
            return res.json();
        }).catch(function (err) { return __WEBPACK_IMPORTED_MODULE_3_rxjs_Observable__["Observable"].throw(err || 'Server error'); });
    };
    HttpApiService.prototype.getBookVLsit = function (bid, zid) {
        var params = {
            'id': bid,
            '_id': zid
        };
        return this.http.post("/books/showcontent", params).map(function (res) {
            console.info(res.json());
            return res.json();
        }).catch(function (err) { return __WEBPACK_IMPORTED_MODULE_3_rxjs_Observable__["Observable"].throw(err || 'Server error'); });
    };
    // 在第一次进入小说详情页的时候，要往服务里面添加该小说总章节
    HttpApiService.prototype.getBooksLen = function (bid) {
        var _this = this;
        return this.http.post("/books/getZlist", { 'id': bid }).map(function (res) {
            var resp = res.json(), data = {};
            _this.BookCount[bid] = resp.zview.length;
            return res.json();
        }).catch(function (err) { return __WEBPACK_IMPORTED_MODULE_3_rxjs_Observable__["Observable"].throw(err || 'Server error'); });
    };
    //错误处理h
    HttpApiService.prototype.handleError = function (error) {
        console.info('An error occurred', error); // for demo purposes only
        return Promise.reject(error.message || error);
    };
    return HttpApiService;
}());
HttpApiService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Injectable */])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Http */]) === "function" && _a || Object])
], HttpApiService);

var _a;
//# sourceMappingURL=api.service.js.map

/***/ }),

/***/ "../../../../../src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"head\">\r\n    {{apiService.BookTopCon}}\r\n</div>\r\n<!-- 主体区域 -->\r\n<div class=\"container main-container\">\r\n    <router-outlet></router-outlet>\r\n</div>"

/***/ }),

/***/ "../../../../../src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
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


var AppComponent = (function () {
    function AppComponent(apiService) {
        this.apiService = apiService;
        this.title = '';
        this.datalist = [{ id: 1, name: '1' }, { id: 2, name: '2' }];
    }
    AppComponent.prototype.ngOnInit = function () {
        this.apiService.BookTopCon = '喵喵小说商城';
    };
    return AppComponent;
}());
AppComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-root',
        template: __webpack_require__("../../../../../src/app/app.component.html"),
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__api_service__["a" /* HttpApiService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__api_service__["a" /* HttpApiService */]) === "function" && _a || Object])
], AppComponent);

var _a;
//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ "../../../../../src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__ = __webpack_require__("../../../platform-browser/@angular/platform-browser.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__app_routes__ = __webpack_require__("../../../../../src/app/app.routes.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__api_service__ = __webpack_require__("../../../../../src/app/api.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__app_component__ = __webpack_require__("../../../../../src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__bookc_bookc_component__ = __webpack_require__("../../../../../src/app/bookc/bookc.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__bookv_bookv_component__ = __webpack_require__("../../../../../src/app/bookv/bookv.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__pipes_pipe_module__ = __webpack_require__("../../../../../src/app/pipes/pipe.module.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};









//引入管道指令

var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["M" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_6__app_component__["a" /* AppComponent */],
            __WEBPACK_IMPORTED_MODULE_7__bookc_bookc_component__["a" /* BookcComponent */],
            __WEBPACK_IMPORTED_MODULE_8__bookv_bookv_component__["a" /* BookvComponent */],
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__["a" /* BrowserModule */],
            __WEBPACK_IMPORTED_MODULE_3__angular_http__["b" /* HttpModule */],
            __WEBPACK_IMPORTED_MODULE_2__angular_router__["c" /* RouterModule */].forRoot(__WEBPACK_IMPORTED_MODULE_4__app_routes__["a" /* appRouter */]),
            __WEBPACK_IMPORTED_MODULE_9__pipes_pipe_module__["a" /* PipeModule */].forRoot()
        ],
        providers: [
            __WEBPACK_IMPORTED_MODULE_5__api_service__["a" /* HttpApiService */],
        ],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_6__app_component__["a" /* AppComponent */]]
    })
], AppModule);

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ "../../../../../src/app/app.routes.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return appRouter; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__bookc_bookc_component__ = __webpack_require__("../../../../../src/app/bookc/bookc.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__bookv_bookv_component__ = __webpack_require__("../../../../../src/app/bookv/bookv.component.ts");


// Routes是路由配置数组。每个都有以下属性：
//     path 是使用路由匹配器DSL的字符串。
//     pathMatch 是指定匹配策略的字符串。
//     matcher定义了路径匹配并取代自定义策略path和pathMatch。有关详细信息，请参阅UrlMatcher。
//     component 是组件类型。
//     redirectTo 是将替换当前匹配段的url片段。
//     outlet 是组件应放入的插座的名称。
//     canActivate是用于查找CanActivate处理程序的DI令牌数组。查看 CanActivate更多信息。
//     canActivateChild是用于查找CanActivateChild处理程序的DI令牌数组。查看 CanActivateChild更多信息。
//     canDeactivate是用于查找CanDeactivate处理程序的DI令牌数组。查看 CanDeactivate更多信息。
//     canLoad是用于查找CanDeactivate处理程序的DI令牌数组。查看 CanLoad更多信息。
//     data是提供给组件via的附加数据ActivatedRoute。
//     resolve是用于查找数据解析器的DI令牌的映射。查看Resolve更多信息。
//     children 是子路由定义的数组。
//     loadChildren是对延迟加载子路由的引用。
// 1.this.router.navigate(['user', 1]);
// 以根路由为起点跳转
// 2.this.router.navigate(['user', 1],{relativeTo: route});
// 默认值为根路由，设置后相对当前路由跳转，route是ActivatedRoute的实例，使用需要导入ActivatedRoute
// 3.this.router.navigate(['user', 1],{ queryParams: { id: 1 } });
// 路由中传参数 /user/1?id=1
// 4.this.router.navigate(['view', 1], { preserveQueryParams: true });
// 默认值为false，设为true，保留之前路由中的查询参数/user?id=1 to /view?id=1
// 5.this.router.navigate(['user', 1],{ fragment: 'top' });
// 路由中锚点跳转 /user/1#top
// 6.this.router.navigate(['/view'], { preserveFragment: true });
// 默认值为false，设为true，保留之前路由中的锚点/user/1#top to /view#top
// 7.this.router.navigate(['/user',1], { skipLocationChange: true });
// 默认值为false，设为true路由跳转时浏览器中的url会保持不变，但是传入的参数依然有效
// 8.this.router.navigate(['/user',1], { replaceUrl: true });
// 未设置时默认为true，设置为false路由不会进行跳转
var appRouter = [
    {
        path: '',
        redirectTo: 'home',
        pathMatch: 'full'
    },
    {
        path: 'home',
        //延迟加载,后面属性为模块的路径加#模块名称
        loadChildren: './home/home.module#HomeModule'
    },
    {
        path: 'bookc/:id',
        component: __WEBPACK_IMPORTED_MODULE_0__bookc_bookc_component__["a" /* BookcComponent */]
    },
    {
        path: 'bookv/:bookid/:bookzid',
        component: __WEBPACK_IMPORTED_MODULE_1__bookv_bookv_component__["a" /* BookvComponent */]
    },
    {
        path: 'book',
        loadChildren: './home/home.module#HomeModule'
    }
];
//# sourceMappingURL=app.routes.js.map

/***/ }),

/***/ "../../../../../src/app/bookc/bookc.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"booklist\">\r\n    <div class=\"bl_title\">{{BookZlIST.title}}</div>\r\n    <p class=\"bl_author\">{{BookZlIST.author}}</p>\r\n    <p class=\"bl_jianjie\">{{BookZlIST.jianjie | delHtmlPipe}}</p>\r\n    <p class=\"bl_count\">总共{{Zlength}}章<span (click)=\"sorttoggle()\">倒序</span></p>\r\n    <ul>\r\n        <ng-container *ngFor=\"let n of BookZlIST.zview; let i = index\">\r\n            <li style=\"list-style-type:none\">\r\n                <a [routerLink]=\"['/bookv/', n.id, bookid]\">{{n.title}}</a>\r\n            </li>\r\n        </ng-container>\r\n    </ul>\r\n</div>"

/***/ }),

/***/ "../../../../../src/app/bookc/bookc.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BookcComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__api_service__ = __webpack_require__("../../../../../src/app/api.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__home_model_model__ = __webpack_require__("../../../../../src/app/home/model/model.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var BookcComponent = (function () {
    function BookcComponent(router, activeRouter, apiService) {
        this.router = router;
        this.activeRouter = activeRouter;
        this.apiService = apiService;
        this.bookid = 0;
        this.BookZlIST = new __WEBPACK_IMPORTED_MODULE_3__home_model_model__["a" /* GetBookList */]();
        this.bookListLen = 0;
        this.Zlength = 0;
    }
    BookcComponent.prototype.getZList = function (id) {
        var _this = this;
        this.apiService.getBookCList(id).subscribe(function (res) {
            _this.BookZlIST = res;
            _this.Zlength = res.zview.length;
            _this.apiService.BookTopCon = res.title;
        }, function (error) {
            console.info(error);
        });
    };
    BookcComponent.prototype.sorttoggle = function () {
        this.BookZlIST.zview.reverse();
    };
    BookcComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.activeRouter.params.subscribe(function (params) {
            _this.bookid = params.id;
            _this.getZList(_this.bookid);
            console.info(_this.bookid);
        });
    };
    return BookcComponent;
}());
BookcComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'booklist-root',
        template: __webpack_require__("../../../../../src/app/bookc/bookc.component.html"),
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2__api_service__["a" /* HttpApiService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__api_service__["a" /* HttpApiService */]) === "function" && _c || Object])
], BookcComponent);

var _a, _b, _c;
//# sourceMappingURL=bookc.component.js.map

/***/ }),

/***/ "../../../../../src/app/bookv/bookv.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"bookv\" [ngStyle]=\"{'background-color': defbgcolor, 'color': tactive === 'yj' ? '#fff' : '#000'}\">\r\n    <!-- [ngStyle]=\"{color: 'red'}\"  也支持ngStyle   [style.font-size.px]=\"defSize\" [style.background-color=\"'yellow'\"]-->\r\n    <div class=\"bookv_main\" [innerHTML]=\"bookContent | delBrPipe\" (click)=\"isseting = !isseting\" [style.font-size.px]=\"defSize\"></div>\r\n    <div class=\"boov_setting\">\r\n        <span class=\"toppage\" [ngClass]=\"{'disable': bookid === 1}\" (click)=\"gotoppage()\">上一页</span>\r\n        <span class=\"bookvmr\" (click)=\"goCatalog()\">目录</span>\r\n        <span calss=\"btmpage\" (click)=\"gobtmpage()\">下一页</span>\r\n    </div>\r\n    <div class=\"setting\" *ngIf=\"isseting\">\r\n        <div class=\"settop\" (click)=\"gotoppage()\">上一章</div>\r\n        <div class=\"setbtm\" (click)=\"gobtmpage()\">下一章</div>\r\n        <div class=\"canseting\" *ngIf=\"cansetting\">\r\n            <p class=\"looktype\">\r\n                <ng-container *ngFor=\"let n of bgstyle; let i = index\">\r\n                    <span class=\"{{n.type}}\" [ngClass]=\"{'active': tactive === n.type}\" (click)=\"tactive = n.type\">{{n.name}}</span>\r\n                </ng-container>\r\n                <!-- <span class=\"rj\" [ngClass]=\"{'active': tactive}\">日间</span>\r\n                <span class=\"hy\" [ngClass]=\"{'active': tactive}\">护眼</span>\r\n                <span class=\"zz\" [ngClass]=\"{'active': tactive}\">纸张</span>\r\n                <span class=\"yj\" [ngClass]=\"{'active': tactive}\">夜间</span> -->\r\n            </p>\r\n            <p class=\"fontchange\">\r\n                <span (click)=\"fontsizej('-')\">A -</span>\r\n                <span (click)=\"fontsizej('+')\">A +</span>\r\n            </p>\r\n        </div>\r\n        <div class=\"setall\">\r\n            <span (click)=\"goCatalog()\">返回目录</span>\r\n            <span (click)=\"cansetting = !cansetting\">设置</span>\r\n            <span><a [routerLink]=\"['/home']\">书城</a></span>\r\n        </div>\r\n    </div>\r\n</div>"

/***/ }),

/***/ "../../../../../src/app/bookv/bookv.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BookvComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__api_service__ = __webpack_require__("../../../../../src/app/api.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var BookvComponent = (function () {
    function BookvComponent(rouer, activeRouter, apiService, differs) {
        this.rouer = rouer;
        this.activeRouter = activeRouter;
        this.apiService = apiService;
        this.differs = differs;
        this.defSize = 14; //默认页面字体大小为14
        this.cansetting = false; //页面的设置是否打开
        this.bgstyle = [{ type: 'rj', name: '日间', color: '#fffdf9' }, { type: 'hy', name: '护眼', color: '#dcecd2' }, { type: 'zz', name: '纸张', color: '#f4eee1' }, { type: 'yj', name: '夜间', color: '#32373b' }]; //换肤数组，后期可从数据库中读取
        this.tactive = 'rj';
        this.defbgcolor = '#fffdf9';
    }
    BookvComponent.prototype.getBookv = function (bid, zid) {
        var _this = this;
        this.apiService.getBookVLsit(this.bookid, this.bookzid).subscribe(function (res) {
            //后台返回的是一个数组[后续研究如何返回object]: 因为数据只会返回一条吧
            _this.bookContent = res[0].zview.content;
            _this.apiService.BookTopCon = res[0].zview.title;
        }, function (error) {
            console.info(error);
        });
    };
    //返回目录
    BookvComponent.prototype.goCatalog = function () {
        this.rouer.navigateByUrl("/bookc/" + this.bookzid);
    };
    BookvComponent.prototype.gotoppage = function () {
        if (this.bookid === 1)
            return false;
        this.rouer.navigateByUrl("/bookv/" + (this.bookid - 1) + "/" + this.bookzid);
    };
    BookvComponent.prototype.gobtmpage = function () {
        if (this.bookid === this.apiService.BookCount[this.bookzid])
            return false;
        this.rouer.navigateByUrl("/bookv/" + (Number(this.bookid) + 1) + "/" + this.bookzid);
    };
    BookvComponent.prototype.getbooklen = function (bookzid) {
        this.apiService.getBooksLen(bookzid).subscribe(function (res) {
            console.info('1');
        });
    };
    BookvComponent.prototype.fontsizej = function (t) {
        if (t === '-') {
            this.defSize = this.defSize === 10 ? 10 : this.defSize - 2;
        }
        else {
            this.defSize = this.defSize === 20 ? 20 : this.defSize + 2;
        }
    };
    BookvComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.activeRouter.params.subscribe(function (params) {
            _this.bookid = params.bookid;
            _this.bookzid = params.bookzid;
            _this.getBookv(_this.bookid, _this.bookzid);
            //如果内存中已经存在了该小说的章节统计，则不用再请求数据
            Object.keys(_this.apiService.BookCount).includes(_this.bookzid) ? '' : _this.getbooklen(_this.bookzid);
        });
    };
    BookvComponent.prototype.ngOnChanges = function (changes) {
        // console.info(changes['defSize'], '222222', changes);
    };
    BookvComponent.prototype.ngDoCheck = function () {
        var _this = this;
        var n = this.bgstyle.filter(function (v) {
            return v['type'] === _this.tactive;
        });
        this.defbgcolor = n[0]['color'];
    };
    return BookvComponent;
}());
BookvComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'bookview-root',
        template: __webpack_require__("../../../../../src/app/bookv/bookv.component.html"),
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2__api_service__["a" /* HttpApiService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__api_service__["a" /* HttpApiService */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["H" /* KeyValueDiffers */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["H" /* KeyValueDiffers */]) === "function" && _d || Object])
], BookvComponent);

var _a, _b, _c, _d;
//# sourceMappingURL=bookv.component.js.map

/***/ }),

/***/ "../../../../../src/app/home/model/model.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export GetNews */
/* unused harmony export GetBookType */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return GetBookList; });
/* unused harmony export GetBookLen */
var GetNews = (function () {
    function GetNews() {
    }
    return GetNews;
}());

var GetBookType = (function () {
    function GetBookType() {
    }
    return GetBookType;
}());

var GetBookList = (function () {
    function GetBookList() {
    }
    return GetBookList;
}());

var GetBookLen = (function () {
    function GetBookLen() {
    }
    return GetBookLen;
}());

//# sourceMappingURL=model.js.map

/***/ }),

/***/ "../../../../../src/app/pipes/books.pipe.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DelHtmlPipe; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var DelHtmlPipe = (function () {
    function DelHtmlPipe() {
    }
    DelHtmlPipe.prototype.transform = function (value) {
        if (!value)
            return value;
        return value.replace(/<\/?.+?>/g, "").replace(/ /g, "");
    };
    return DelHtmlPipe;
}());
DelHtmlPipe = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["X" /* Pipe */])({ name: 'delHtmlPipe' })
], DelHtmlPipe);

//# sourceMappingURL=books.pipe.js.map

/***/ }),

/***/ "../../../../../src/app/pipes/delbr.pipe.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DelBrPipe; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var DelBrPipe = (function () {
    function DelBrPipe() {
    }
    DelBrPipe.prototype.transform = function (value) {
        if (!value)
            return value;
        return value.replace(/<br><br>/g, '</p><p>').replace(/ /g, "");
    };
    return DelBrPipe;
}());
DelBrPipe = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["X" /* Pipe */])({ name: 'delBrPipe' })
], DelBrPipe);

//# sourceMappingURL=delbr.pipe.js.map

/***/ }),

/***/ "../../../../../src/app/pipes/pipe.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PipeModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__books_pipe__ = __webpack_require__("../../../../../src/app/pipes/books.pipe.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__delbr_pipe__ = __webpack_require__("../../../../../src/app/pipes/delbr.pipe.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var PipeModule = PipeModule_1 = (function () {
    function PipeModule() {
    }
    PipeModule.forRoot = function () {
        return {
            ngModule: PipeModule_1,
            providers: []
        };
    };
    return PipeModule;
}());
PipeModule = PipeModule_1 = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["M" /* NgModule */])({
        imports: [],
        declarations: [
            __WEBPACK_IMPORTED_MODULE_1__books_pipe__["a" /* DelHtmlPipe */],
            __WEBPACK_IMPORTED_MODULE_2__delbr_pipe__["a" /* DelBrPipe */],
        ],
        exports: [
            __WEBPACK_IMPORTED_MODULE_1__books_pipe__["a" /* DelHtmlPipe */],
            __WEBPACK_IMPORTED_MODULE_2__delbr_pipe__["a" /* DelBrPipe */],
        ],
    })
], PipeModule);

var PipeModule_1;
//# sourceMappingURL=pipe.module.js.map

/***/ }),

/***/ "../../../../../src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
// The file contents for the current environment will overwrite these during build.
var environment = {
    production: false
};
//# sourceMappingURL=environment.js.map

/***/ }),

/***/ "../../../../../src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("../../../platform-browser-dynamic/@angular/platform-browser-dynamic.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("../../../../../src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_23" /* enableProdMode */])();
}
Object(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */])
    .catch(function (err) { return console.log(err); });
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("../../../../../src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map