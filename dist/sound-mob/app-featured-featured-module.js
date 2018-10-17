(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["app-featured-featured-module"],{

/***/ "./src/app/featured/featured-routing.module.ts":
/*!*****************************************************!*\
  !*** ./src/app/featured/featured-routing.module.ts ***!
  \*****************************************************/
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
const featured_component_1 = __webpack_require__(/*! ./featured.component */ "./src/app/featured/featured.component.ts");
const routes = [
    { path: "", component: featured_component_1.FeaturedComponent },
];
let FeaturedRoutingModule = class FeaturedRoutingModule {
};
FeaturedRoutingModule = __decorate([
    core_1.NgModule({
        exports: [router_1.RouterModule],
        imports: [router_1.RouterModule.forChild(routes)]
    })
], FeaturedRoutingModule);
exports.FeaturedRoutingModule = FeaturedRoutingModule;


/***/ }),

/***/ "./src/app/featured/featured.component.css":
/*!*************************************************!*\
  !*** ./src/app/featured/featured.component.css ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/* .container{\n  background: white;\n  height: 208;\n}\n.header{\n  background: white;\n}\n\nnav li {\n  display: inline-block;\n  padding: 31px 18px\n\n}\nul {\n  list-style: none;\n}\n\n.img-landing {\n    width: auto;\n    display: block;\n    margin-left: auto;\n    margin-right: auto \n} */\n"

/***/ }),

/***/ "./src/app/featured/featured.component.html":
/*!**************************************************!*\
  !*** ./src/app/featured/featured.component.html ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n<router-outlet></router-outlet>\n\n\n<header class=\"masthead\">\n  <div class=\"overlay\"></div>\n  <div class=\"container\">\n    <div class=\"row\">\n      <div class=\"col-lg-8 col-md-10 mx-auto\">\n\n        <div class=\"site-heading\">\n          <h1>{{profile.firstname}} {{profile.lasttname}}</h1>\n          <span class=\"subheading\">{{profile.bio}}</span>\n        </div>\n\n      </div>\n    </div>\n  </div>\n</header>\n\n\n  <div class=\"row\">\n    \n    <div class=\"col-sm-8\">\n        <div *ngFor=\"let dj of activeDj.djs\">\n            <div class=\"team_wrapper clearfix\">\n              <div class=\"single_member text-center\">\n                <img class=\"rounded-circle\" src={{dj.photo}} width=\"100\" height=\"100\">\n                <a routerLink=\"/listener\" routerLinkActive=\"active\" (click)=\"joinDj($event)\">\n                <p id={{dj.id}}---{{dj.tokSession}}---{{dj.tokToken}}>{{dj.name.givenName}} {{dj.name.familyName}}</p>\n                </a>\n              </div>\n            </div>\n      </div>\n    </div>\n  </div>\n  <div class=\"row\"> \n      <button class=\"btn std-btn btn-lg btn-info\"routerLink=\"/dj\" routerLinkActive=\"active\">Create Station</button>\n  </div>\n  \n  \n\n"

/***/ }),

/***/ "./src/app/featured/featured.component.ts":
/*!************************************************!*\
  !*** ./src/app/featured/featured.component.ts ***!
  \************************************************/
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
const http_1 = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
const djlist_service_1 = __webpack_require__(/*! ../services/djlist.service */ "./src/app/services/djlist.service.ts");
const chat_service_1 = __webpack_require__(/*! ../services/chat.service */ "./src/app/services/chat.service.ts");
const dj_profile_service_1 = __webpack_require__(/*! ../services/dj-profile.service */ "./src/app/services/dj-profile.service.ts");
let FeaturedComponent = class FeaturedComponent {
    constructor(http, djList, djJoin, djProfileService) {
        this.http = http;
        this.djList = djList;
        this.djJoin = djJoin;
        this.djProfileService = djProfileService;
    }
    ngOnInit() {
        this.djList.liveDjReq();
        this.djList.liveDj()
            .subscribe((data) => this.activeDj = data);
        this.djProfileService.getProfileInfo()
            .subscribe(profile => {
            this.profile = profile;
        });
    }
    joinDj(event) {
        console.log(event.target, 'thisthe event log');
        let sockAndTok = event.target.id.split("---");
        this.djJoin.joinRoom(sockAndTok);
        // console.log(sockAndTok, " google id");
    }
};
FeaturedComponent = __decorate([
    core_1.Component({
        selector: "app-posts",
        template: __webpack_require__(/*! ./featured.component.html */ "./src/app/featured/featured.component.html"),
        styles: [__webpack_require__(/*! ./featured.component.css */ "./src/app/featured/featured.component.css")]
    }),
    __metadata("design:paramtypes", [http_1.HttpClient,
        djlist_service_1.DjlistService,
        chat_service_1.ChatService,
        dj_profile_service_1.DjProfileService])
], FeaturedComponent);
exports.FeaturedComponent = FeaturedComponent;


/***/ }),

/***/ "./src/app/featured/featured.module.ts":
/*!*********************************************!*\
  !*** ./src/app/featured/featured.module.ts ***!
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
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
const common_1 = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
const featured_routing_module_1 = __webpack_require__(/*! ./featured-routing.module */ "./src/app/featured/featured-routing.module.ts");
const featured_component_1 = __webpack_require__(/*! ./featured.component */ "./src/app/featured/featured.component.ts");
let FeaturedModule = class FeaturedModule {
};
FeaturedModule = __decorate([
    core_1.NgModule({
        imports: [common_1.CommonModule, featured_routing_module_1.FeaturedRoutingModule],
        declarations: [featured_component_1.FeaturedComponent]
    })
], FeaturedModule);
exports.FeaturedModule = FeaturedModule;


/***/ }),

/***/ "./src/app/services/djlist.service.ts":
/*!********************************************!*\
  !*** ./src/app/services/djlist.service.ts ***!
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
const io = __webpack_require__(/*! socket.io-client */ "./node_modules/socket.io-client/lib/index.js");
const rxjs_1 = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
let DjlistService = class DjlistService {
    constructor() {
        // private socket = io(`http://localhost:3000`)
        this.socket = io();
    }
    liveDj() {
        let observable = new rxjs_1.Observable(observer => {
            this.socket.on('djList', (data) => {
                observer.next(data);
            });
        });
        return observable;
    }
    liveDjReq() {
        console.log("request made");
        this.socket.emit('djListReq');
    }
};
DjlistService = __decorate([
    core_1.Injectable({
        providedIn: 'root'
    }),
    __metadata("design:paramtypes", [])
], DjlistService);
exports.DjlistService = DjlistService;


/***/ })

}]);
//# sourceMappingURL=app-featured-featured-module.js.map