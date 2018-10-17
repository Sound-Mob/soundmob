(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"../app/dj/dj.module": [
		"./src/app/dj/dj.module.ts",
		"common",
		"app-dj-dj-module"
	],
	"../app/featured/featured.module": [
		"./src/app/featured/featured.module.ts",
		"app-featured-featured-module"
	],
	"../app/listener/listener.module": [
		"./src/app/listener/listener.module.ts",
		"common",
		"app-listener-listener-module"
	]
};
function webpackAsyncContext(req) {
	var ids = map[req];
	if(!ids) {
		return Promise.resolve().then(function() {
			var e = new Error("Cannot find module '" + req + "'");
			e.code = 'MODULE_NOT_FOUND';
			throw e;
		});
	}
	return Promise.all(ids.slice(1).map(__webpack_require__.e)).then(function() {
		var id = ids[0];
		return __webpack_require__.t(id, 7);
	});
}
webpackAsyncContext.keys = function webpackAsyncContextKeys() {
	return Object.keys(map);
};
webpackAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";
module.exports = webpackAsyncContext;

/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
const router_1 = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
const admin_guard_1 = __webpack_require__(/*! ./auth/guards/admin.guard */ "./src/app/auth/guards/admin.guard.ts");
const landing_component_1 = __webpack_require__(/*! ./home/landing/landing.component */ "./src/app/home/landing/landing.component.ts");
const routes = [
    {
        path: '',
        component: landing_component_1.LandingComponent,
    },
    {
        path: "featured",
        loadChildren: "../app/featured/featured.module#FeaturedModule",
        canActivate: [admin_guard_1.AdminGuard]
    },
    {
        path: "listener",
        loadChildren: "../app/listener/listener.module#ListenerModule",
        canActivate: [admin_guard_1.AdminGuard]
    },
    {
        path: "dj",
        loadChildren: "../app/dj/dj.module#DjModule",
        canActivate: [admin_guard_1.AdminGuard]
    }
];
let AppRoutingModule = class AppRoutingModule {
};
AppRoutingModule = __decorate([
    core_1.NgModule({
        imports: [router_1.RouterModule.forRoot(routes)],
        exports: [router_1.RouterModule],
        providers: []
    })
], AppRoutingModule);
exports.AppRoutingModule = AppRoutingModule;


/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!--The content below is only a placeholder and can be replaced.-->\n\n<app-navbar></app-navbar>\n\n<div class=\"container\">\n  <router-outlet></router-outlet>\n</div>\n"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
let AppComponent = class AppComponent {
    constructor() {
        this.title = 'app';
        this.arr = ['s', 'keee', 'dui'];
    }
};
AppComponent = __decorate([
    core_1.Component({
        selector: 'app-root',
        template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
        styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
    })
], AppComponent);
exports.AppComponent = AppComponent;


/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
const platform_browser_1 = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");
const core_1 = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
const forms_1 = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
const http_1 = __webpack_require__(/*! @angular/http */ "./node_modules/@angular/http/fesm2015/http.js");
const http_2 = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
const app_component_1 = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
const home_component_1 = __webpack_require__(/*! ./home/home.component */ "./src/app/home/home.component.ts");
const app_routing_module_1 = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
const landing_component_1 = __webpack_require__(/*! ./home/landing/landing.component */ "./src/app/home/landing/landing.component.ts");
const auth_service_1 = __webpack_require__(/*! ./auth/auth.service */ "./src/app/auth/auth.service.ts");
const auth_guard_1 = __webpack_require__(/*! ./auth/guards/auth.guard */ "./src/app/auth/guards/auth.guard.ts");
const admin_guard_1 = __webpack_require__(/*! ./auth/guards/admin.guard */ "./src/app/auth/guards/admin.guard.ts");
const chat_service_1 = __webpack_require__(/*! ./services/chat.service */ "./src/app/services/chat.service.ts");
const opentok_service_1 = __webpack_require__(/*! ./services/opentok.service */ "./src/app/services/opentok.service.ts");
const navbar_component_1 = __webpack_require__(/*! ./navbar/navbar.component */ "./src/app/navbar/navbar.component.ts");
let AppModule = class AppModule {
};
AppModule = __decorate([
    core_1.NgModule({
        declarations: [
            app_component_1.AppComponent,
            home_component_1.HomeComponent,
            landing_component_1.LandingComponent,
            navbar_component_1.NavbarComponent,
        ],
        imports: [
            platform_browser_1.BrowserModule,
            app_routing_module_1.AppRoutingModule,
            http_1.HttpModule,
            forms_1.FormsModule,
            http_2.HttpClientModule
        ],
        providers: [auth_guard_1.AuthGuard, auth_service_1.AuthService, admin_guard_1.AdminGuard, chat_service_1.ChatService, opentok_service_1.OpentokService],
        bootstrap: [app_component_1.AppComponent]
    })
], AppModule);
exports.AppModule = AppModule;


/***/ }),

/***/ "./src/app/auth/auth.service.ts":
/*!**************************************!*\
  !*** ./src/app/auth/auth.service.ts ***!
  \**************************************/
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
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
let AuthService = class AuthService {
    constructor() { }
    get isLoggedIn() {
        return true;
    }
    get isSuperAdmin() {
        return true;
    }
};
AuthService = __decorate([
    core_1.Injectable({
        providedIn: 'root'
    }),
    __metadata("design:paramtypes", [])
], AuthService);
exports.AuthService = AuthService;


/***/ }),

/***/ "./src/app/auth/guards/admin.guard.ts":
/*!********************************************!*\
  !*** ./src/app/auth/guards/admin.guard.ts ***!
  \********************************************/
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
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
const router_1 = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
const auth_service_1 = __webpack_require__(/*! ../auth.service */ "./src/app/auth/auth.service.ts");
let AdminGuard = class AdminGuard {
    constructor(auth, router) {
        this.auth = auth;
        this.router = router;
    }
    canActivate(next, state) {
        // redirect and return false
        if (!this.auth.isLoggedIn) {
            this.router.navigate(['']);
            return false;
        }
        return true;
    }
    canActivateChild(next, state) {
        // redirect and return false
        if (!this.auth.isLoggedIn) {
            this.router.navigate(['']);
            return false;
        }
        return true;
    }
};
AdminGuard = __decorate([
    core_1.Injectable({
        providedIn: 'root'
    }),
    __metadata("design:paramtypes", [auth_service_1.AuthService,
        router_1.Router])
], AdminGuard);
exports.AdminGuard = AdminGuard;


/***/ }),

/***/ "./src/app/auth/guards/auth.guard.ts":
/*!*******************************************!*\
  !*** ./src/app/auth/guards/auth.guard.ts ***!
  \*******************************************/
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
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
const router_1 = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
const auth_service_1 = __webpack_require__(/*! ../auth.service */ "./src/app/auth/auth.service.ts");
let AuthGuard = class AuthGuard {
    constructor(auth, router) {
        this.auth = auth;
        this.router = router;
    }
    canActivate(next, state) {
        //redirect and return false
        if (!this.auth.isLoggedIn) {
            this.router.navigate(['']);
            return false;
        }
        return true;
    }
};
AuthGuard = __decorate([
    core_1.Injectable({
        providedIn: 'root'
    }),
    __metadata("design:paramtypes", [auth_service_1.AuthService,
        router_1.Router])
], AuthGuard);
exports.AuthGuard = AuthGuard;


/***/ }),

/***/ "./src/app/config.js":
/*!***************************!*\
  !*** ./src/app/config.js ***!
  \***************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ({
  SAMPLE_SERVER_BASE_URL: 'http://localhost:3000',
  TOKEN: 'T1==cGFydG5lcl9pZD00NjE5NDYxMiZzaWc9YWZjZTA1YWZiZmE2OWQ3NmY2ZmIzODQyNjg0NzMzZDMyZjkwZmY3YzpzZXNzaW9uX2lkPTFfTVg0ME5qRTVORFl4TW41LU1UVXpPVEF6TXpVek5qSTBOSDVoT1U4MGFpdGtVVFJDZWpOTFlsVmpRVUpCWnpSSVZUUi1mZyZjcmVhdGVfdGltZT0xNTM5MDMzNjEzJm5vbmNlPTAuNDA1MjUzOTkxNjE0NjA3NiZyb2xlPXB1Ymxpc2hlciZleHBpcmVfdGltZT0xNTQxNjI5MjEyJmluaXRpYWxfbGF5b3V0X2NsYXNzX2xpc3Q9',
  API_KEY: '46194612',
  SESSION_ID: '1_MX40NjE5NDYxMn5-MTUzOTAzMzUzNjI0NH5hOU80aitkUTRCejNLYlVjQUJBZzRIVTR-fg',
});


/***/ }),

/***/ "./src/app/home/home.component.css":
/*!*****************************************!*\
  !*** ./src/app/home/home.component.css ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/home/home.component.html":
/*!******************************************!*\
  !*** ./src/app/home/home.component.html ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\n  home works!\n</p>\n\n<h1 *ngIf=\"name.length>1\">{{name | uppercase}}</h1>\n\n<input [(ngModel)]=\"name\" placeholder=\"name\" />\n\n"

/***/ }),

/***/ "./src/app/home/home.component.ts":
/*!****************************************!*\
  !*** ./src/app/home/home.component.ts ***!
  \****************************************/
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
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
let HomeComponent = class HomeComponent {
    constructor() {
        this.name = "";
    }
    ngOnInit() {
    }
};
HomeComponent = __decorate([
    core_1.Component({
        selector: 'app-home',
        template: __webpack_require__(/*! ./home.component.html */ "./src/app/home/home.component.html"),
        styles: [__webpack_require__(/*! ./home.component.css */ "./src/app/home/home.component.css")]
    }),
    __metadata("design:paramtypes", [])
], HomeComponent);
exports.HomeComponent = HomeComponent;


/***/ }),

/***/ "./src/app/home/landing/landing.component.css":
/*!****************************************************!*\
  !*** ./src/app/home/landing/landing.component.css ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "#landing{\n  padding: 70px;\n}\n#log-login-btn{\n  padding-left: 30px;\n}"

/***/ }),

/***/ "./src/app/home/landing/landing.component.html":
/*!*****************************************************!*\
  !*** ./src/app/home/landing/landing.component.html ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<router-outlet></router-outlet>\n\n\n  <div class=\"row\">\n    <div class=\"col-lg-8 col-md-10 mx-auto\" id=\"landing\">\n      <img alt=\"Bootstrap Image Preview\" src=\"https://operationspark.org/assets/images/Robot-Mascot.png\"\n        height=\"350\" />\n      <br>\n      <br>\n      <button type=\"button\" class=\"btn btn-success col-lg-5 col-md-10 mx-auto\" routerLink=\"/posts\" routerLinkActive=\"active\" id=\"login-btn\">\n        <a href=\"/auth\">Sign In with Google</a>\n      </button>\n    </div>\n  </div>"

/***/ }),

/***/ "./src/app/home/landing/landing.component.ts":
/*!***************************************************!*\
  !*** ./src/app/home/landing/landing.component.ts ***!
  \***************************************************/
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
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
// const httpOptions = {
//   headers: new HttpHeaders({
//     'Content-Type':  'application/json',
//     'Access-Control-Allow-Origin': "*"
//   })
// };
let LandingComponent = class LandingComponent {
    constructor() { }
    ngOnInit() {
        // headers: new HttpHeaders({
        //   'Content-Type': 'application/json',
        //   'Authorization': 'my-auth-token'
        // }) 
    }
    login() {
        //   console.log('yup');
        // // window.location.href="/auth"
        //   this.http.get('/auth')
        //   .subscribe(
        //     data => console.log(data)
        //   )
        // window.open('/api/login', "mywindow", "location=1,status=1,scrollbars=1, width=800,height=800");
    }
};
LandingComponent = __decorate([
    core_1.Component({
        selector: 'app-landing',
        template: __webpack_require__(/*! ./landing.component.html */ "./src/app/home/landing/landing.component.html"),
        styles: [__webpack_require__(/*! ./landing.component.css */ "./src/app/home/landing/landing.component.css")]
    }),
    __metadata("design:paramtypes", [])
], LandingComponent);
exports.LandingComponent = LandingComponent;


/***/ }),

/***/ "./src/app/navbar/navbar.component.css":
/*!*********************************************!*\
  !*** ./src/app/navbar/navbar.component.css ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/navbar/navbar.component.html":
/*!**********************************************!*\
  !*** ./src/app/navbar/navbar.component.html ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- <nav>\n  <a routerLink=\"/\">Home</a>\n\n  <a routerLink=\"/featured\" routerLinkActive=\"active\">Featured</a>\n\n  <a routerLink=\"/listener\" routerLinkActive=\"active\">Listener</a>\n\n  <a routerLink=\"/dj\" routerLinkActive=\"active\">Dj</a>\n\n</nav> -->\n\n<nav class=\"navbar navbar-expand-lg navbar-light fixed-top\" id=\"mainNav\">\n  <div class=\"container\">\n    <h3 class=\"navbar-brand\">Soundmob</h3>\n    <button class=\"navbar-toggler navbar-toggler-right\" type=\"button\" data-toggle=\"collapse\" data-target=\"#navbarResponsive\"\n      aria-controls=\"navbarResponsive\" aria-expanded=\"false\" aria-label=\"Toggle navigation\">\n      Menu\n      <i class=\"fas fa-bars\"></i>\n    </button>\n    <div class=\"collapse navbar-collapse \" id=\"navbarResponsive\">\n      <ul class=\"navbar-nav ml-auto\">\n        <li class=\"nav-item\">\n          <a class=\"nav-link\" routerLink=\"/\">Home</a>\n        </li>\n        <li class=\"nav-item\">\n          <a class=\"nav-link\" routerLink=\"/featured\" routerLinkActive=\"active\">Featured</a>\n        </li>\n        <li class=\"nav-item\">\n          <a class=\"nav-link\" routerLink=\"/listener\" routerLinkActive=\"active\">Listener</a>\n        </li>\n        <li class=\"nav-item\">\n          <a class=\"nav-link\" routerLink=\"/dj\" routerLinkActive=\"active\">Dj</a>\n        </li>\n      </ul>\n    </div>\n  </div>\n</nav>"

/***/ }),

/***/ "./src/app/navbar/navbar.component.ts":
/*!********************************************!*\
  !*** ./src/app/navbar/navbar.component.ts ***!
  \********************************************/
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
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
let NavbarComponent = class NavbarComponent {
    constructor() { }
    ngOnInit() {
    }
};
NavbarComponent = __decorate([
    core_1.Component({
        selector: 'app-navbar',
        template: __webpack_require__(/*! ./navbar.component.html */ "./src/app/navbar/navbar.component.html"),
        styles: [__webpack_require__(/*! ./navbar.component.css */ "./src/app/navbar/navbar.component.css")]
    }),
    __metadata("design:paramtypes", [])
], NavbarComponent);
exports.NavbarComponent = NavbarComponent;


/***/ }),

/***/ "./src/app/services/chat.service.ts":
/*!******************************************!*\
  !*** ./src/app/services/chat.service.ts ***!
  \******************************************/
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
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
const io = __webpack_require__(/*! socket.io-client */ "./node_modules/socket.io-client/lib/index.js");
const rxjs_1 = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
let ChatService = class ChatService {
    constructor() {
        this.songSource = new rxjs_1.BehaviorSubject('http://ichef.bbci.co.uk/wwfeatures/wm/live/1280_640/images/live/p0/52/j5/p052j5kp.jpg');
        this.currentSong = this.songSource.asObservable();
        // private socket = io(`http://localhost:3000`)
        this.socket = io();
    }
    changeSong(song) {
        this.songSource.next(song);
    }
    createRoom(googleId) {
        this.socket.emit('newroom', googleId);
    }
    sendMessage(data) {
        // console.log(data)
        // console.log("hehehehee")
        // console.log(this.socket.request, " in request");
        this.socket.emit('chat message', data);
    }
    receiveMessages() {
        let observable = new rxjs_1.Observable(observer => {
            this.socket.on('chat message', (data) => {
                observer.next(data);
            });
        });
        return observable;
    }
    getDjInfo() {
        this.socket.emit('getDjInfo');
    }
    djStartCast(songId) {
        this.socket.emit('startCast', songId);
    }
    djGetSongDetails() {
        // console.log('recieved songgg   info')
        let observable = new rxjs_1.Observable(observer => {
            this.socket.on('castOn', (songInfo) => {
                // console.log(songInfo);
                observer.next(songInfo);
            });
        });
        return observable;
    }
    sendPause(songId, pausedAt) {
        console.log("service of pause reached");
        this.socket.emit('paused', { songId, pausedAt });
    }
    sendUnpause(songId, resumedAt) {
        console.log(songId, resumedAt);
        this.socket.emit('unpause', { songId, resumedAt });
    }
    resumeListener() {
        let observable = new rxjs_1.Observable(observer => {
            this.socket.on('resumeRelay', (resumeInfo) => {
                console.log(" recieved relay");
                observer.next(resumeInfo);
            });
        });
        // console.log(observable)
        return observable;
    }
    pauseListener() {
        let observable = new rxjs_1.Observable(observer => {
            this.socket.on('pauseRelay', (pauseInfo) => {
                observer.next(pauseInfo);
            });
        });
        // console.log(observable)
        return observable;
    }
    receiveDjInfo() {
        console.log('recieved info');
        let observable = new rxjs_1.Observable(observer => {
            this.socket.on('startlistener', (djInfo) => {
                // console.log(djInfo);
                observer.next(djInfo);
            });
        });
        // console.log(observable)
        return observable;
    }
    joinRoom(djInfo) {
        this.socket.emit('roomroute', djInfo);
    }
    selectPlaylist(playlistId) {
        this.socket.emit('djSelectsPlaylist', playlistId);
    }
    receiveSongs() {
        console.log('recieved songs');
        let observable = new rxjs_1.Observable(observer => {
            this.socket.on('songList', (songs) => {
                // console.log(songs);
                observer.next(songs);
            });
        });
        return observable;
    }
    listenerReceiveSongDetails() {
        // console.log('recieved songgg   info')
        let observable = new rxjs_1.Observable(observer => {
            this.socket.on('currentSong', (songInfo) => {
                observer.next(songInfo);
            });
        });
        // console.log(observable)
        return observable;
    }
    listenerGetSongDetails() {
        this.socket.emit("listenerGetCurrentSong");
    }
    djInfoReq() {
        this.socket.emit('djInfoReq');
    }
};
ChatService = __decorate([
    core_1.Injectable({
        providedIn: 'root'
    }),
    __metadata("design:paramtypes", [])
], ChatService);
exports.ChatService = ChatService;


/***/ }),

/***/ "./src/app/services/opentok.service.ts":
/*!*********************************************!*\
  !*** ./src/app/services/opentok.service.ts ***!
  \*********************************************/
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
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
const OT = __webpack_require__(/*! @opentok/client */ "./node_modules/@opentok/client/dist/js/opentok.js");
const config_1 = __webpack_require__(/*! ../config */ "./src/app/config.js");
const http_1 = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
let OpentokService = class OpentokService {
    constructor(http) {
        this.http = http;
    }
    getOT() {
        return OT;
    }
    initSession(apikey, sessionId, token) {
        if (sessionId) {
            this.session = OT.initSession(apikey, sessionId);
            this.token = token;
            return Promise.resolve(this.session);
        }
        else {
            " in the else of init session";
            return fetch(config_1.default.SAMPLE_SERVER_BASE_URL + '/session')
                .then((data) => data.json())
                .then((json) => {
                this.session = this.getOT().initSession(json.apiKey, json.sessionId);
                this.token = json.token;
                return this.session;
            });
        }
    }
    connect() {
        return new Promise((resolve, reject) => {
            this.session.connect(this.token, (err) => {
                if (err) {
                    reject(err);
                }
                else {
                    resolve(this.session);
                }
            });
        });
    }
};
OpentokService = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [http_1.HttpClient])
], OpentokService);
exports.OpentokService = OpentokService;


/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
Object.defineProperty(exports, "__esModule", { value: true });
exports.environment = {
    production: false,
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
const platform_browser_dynamic_1 = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm2015/platform-browser-dynamic.js");
const app_module_1 = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
const environment_1 = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");
if (environment_1.environment.production) {
    core_1.enableProdMode();
}
platform_browser_dynamic_1.platformBrowserDynamic().bootstrapModule(app_module_1.AppModule)
    .catch(err => console.error(err));


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

<<<<<<< HEAD
module.exports = __webpack_require__(/*! /Users/connor/Documents/soundmob/src/main.ts */"./src/main.ts");
=======
module.exports = __webpack_require__(/*! /Users/josephdelahoussaye/Desktop/senior/soundmob/src/main.ts */"./src/main.ts");
>>>>>>> 2bc20aea39c4d1d32700c5a08964101fa8c04cdb


/***/ }),

/***/ 1:
/*!********************!*\
  !*** ws (ignored) ***!
  \********************/
/*! no static exports found */
/***/ (function(module, exports) {

/* (ignored) */

/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map