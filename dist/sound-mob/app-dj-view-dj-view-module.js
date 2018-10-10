(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["app-dj-view-dj-view-module"],{

/***/ "./src/app/dj-view/comment/comment.component.css":
/*!*******************************************************!*\
  !*** ./src/app/dj-view/comment/comment.component.css ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/dj-view/comment/comment.component.html":
/*!********************************************************!*\
  !*** ./src/app/dj-view/comment/comment.component.html ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<a (click)=\"backClicked()\" >\n<i class=\"material-icons\">\n  clear\n</i>\n</a> \n<h1>Add Tracks</h1>\n<input type=\"text\">\n<h3>tracks</h3>"

/***/ }),

/***/ "./src/app/dj-view/comment/comment.component.ts":
/*!******************************************************!*\
  !*** ./src/app/dj-view/comment/comment.component.ts ***!
  \******************************************************/
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
const common_1 = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
let CommentComponent = class CommentComponent {
    constructor(_location) {
        this._location = _location;
    }
    ngOnInit() {
    }
    backClicked() {
        this._location.back();
    }
};
CommentComponent = __decorate([
    core_1.Component({
        selector: 'app-comment',
        template: __webpack_require__(/*! ./comment.component.html */ "./src/app/dj-view/comment/comment.component.html"),
        styles: [__webpack_require__(/*! ./comment.component.css */ "./src/app/dj-view/comment/comment.component.css")]
    }),
    __metadata("design:paramtypes", [common_1.Location])
], CommentComponent);
exports.CommentComponent = CommentComponent;


/***/ }),

/***/ "./src/app/dj-view/comments/comments.component.css":
/*!*********************************************************!*\
  !*** ./src/app/dj-view/comments/comments.component.css ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "ul {\n  list-style: none;\n}\n\n.liker {\n  background: yellow;\n}"

/***/ }),

/***/ "./src/app/dj-view/comments/comments.component.html":
/*!**********************************************************!*\
  !*** ./src/app/dj-view/comments/comments.component.html ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- <div>\n  <ul id=\"messages\">\n  </ul>\n\n <form action=\"\">\n  <input id=\"m\" autocomplete=\"off\" /><button id=\"chat\">Send</button>\n</form> -->\n<!-- \n\n  <form>\n    <input (keyup=on)>\n    <button (click)=\"sendChatMessage()\">Send!</button>\n  </form>\n</div> --> \n\n<ul>\n  <li *ngFor=\"let message of chatMessages\">\n    <b>{{message.userName}}:</b>\n    <p>{{message.message}}</p>\n  </li>\n</ul>\n\n<input  type=\"text\" [(ngModel)]=\"messageToSend\"> \n<button (click)=\"sendChatMessage()\">Send!</button>\n<button class=\"btun\" (click)=\"getMessage()\">get</button>\n\n\n"

/***/ }),

/***/ "./src/app/dj-view/comments/comments.component.ts":
/*!********************************************************!*\
  !*** ./src/app/dj-view/comments/comments.component.ts ***!
  \********************************************************/
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
const chat_service_1 = __webpack_require__(/*! ../../chat.service */ "./src/app/chat.service.ts");
let CommentsComponent = class CommentsComponent {
    constructor(chatService) {
        this.chatService = chatService;
        this.messageToSend = '';
        this.values = '';
        this.chatMessages = [];
        this.chatService.receiveMessages()
            .subscribe(data => {
            if (this.chatMessages.length > 10) {
                this.chatMessages.pop();
            }
            this.chatMessages.unshift(data);
        });
    }
    ngOnInit() {
        this.chatService.createRoom('123ween23');
    }
    sendChatMessage() {
        const { messageToSend } = this;
        this.chatService.sendMessage(messageToSend);
        this.messageToSend = "";
    }
    getMessage() {
        this.chatService.receiveMessages()
            .subscribe(data => console.log(data));
    }
};
CommentsComponent = __decorate([
    core_1.Component({
        selector: 'app-comments',
        template: __webpack_require__(/*! ./comments.component.html */ "./src/app/dj-view/comments/comments.component.html"),
        styles: [__webpack_require__(/*! ./comments.component.css */ "./src/app/dj-view/comments/comments.component.css")]
    }),
    __metadata("design:paramtypes", [chat_service_1.ChatService])
], CommentsComponent);
exports.CommentsComponent = CommentsComponent;


/***/ }),

/***/ "./src/app/dj-view/dj-view-routing.module.ts":
/*!***************************************************!*\
  !*** ./src/app/dj-view/dj-view-routing.module.ts ***!
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
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
const router_1 = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
const main_component_1 = __webpack_require__(/*! ./main/main.component */ "./src/app/dj-view/main/main.component.ts");
const search_component_1 = __webpack_require__(/*! ./search/search.component */ "./src/app/dj-view/search/search.component.ts");
const comment_component_1 = __webpack_require__(/*! ./comment/comment.component */ "./src/app/dj-view/comment/comment.component.ts");
const admin_guard_1 = __webpack_require__(/*! ../auth/guards/admin.guard */ "./src/app/auth/guards/admin.guard.ts");
const routes = [
    {
        path: "",
        component: main_component_1.MainComponent,
        canActivate: [admin_guard_1.AdminGuard]
    },
    {
        path: "song-search",
        component: search_component_1.SearchComponent,
        canActivate: [admin_guard_1.AdminGuard]
    },
    {
        path: "dj-comment",
        component: comment_component_1.CommentComponent,
        canActivate: [admin_guard_1.AdminGuard]
    }
];
let DjViewRoutingModule = class DjViewRoutingModule {
};
DjViewRoutingModule = __decorate([
    core_1.NgModule({
        imports: [router_1.RouterModule.forChild(routes)],
        exports: [router_1.RouterModule]
    })
], DjViewRoutingModule);
exports.DjViewRoutingModule = DjViewRoutingModule;


/***/ }),

/***/ "./src/app/dj-view/dj-view.module.ts":
/*!*******************************************!*\
  !*** ./src/app/dj-view/dj-view.module.ts ***!
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
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
const common_1 = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
const dj_view_routing_module_1 = __webpack_require__(/*! ./dj-view-routing.module */ "./src/app/dj-view/dj-view-routing.module.ts");
const comments_component_1 = __webpack_require__(/*! ./comments/comments.component */ "./src/app/dj-view/comments/comments.component.ts");
const soundplayer_component_1 = __webpack_require__(/*! ./soundplayer/soundplayer.component */ "./src/app/dj-view/soundplayer/soundplayer.component.ts");
const profile_component_1 = __webpack_require__(/*! ./profile/profile.component */ "./src/app/dj-view/profile/profile.component.ts");
const main_component_1 = __webpack_require__(/*! ./main/main.component */ "./src/app/dj-view/main/main.component.ts");
const search_component_1 = __webpack_require__(/*! ./search/search.component */ "./src/app/dj-view/search/search.component.ts");
const comment_component_1 = __webpack_require__(/*! ./comment/comment.component */ "./src/app/dj-view/comment/comment.component.ts");
const forms_1 = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
const opentok_service_1 = __webpack_require__(/*! ../opentok.service */ "./src/app/opentok.service.ts");
const app_component_1 = __webpack_require__(/*! ../tokbox/app.component */ "./src/app/tokbox/app.component.ts");
const subscriber_component_1 = __webpack_require__(/*! ../tokbox/subscriber/subscriber.component */ "./src/app/tokbox/subscriber/subscriber.component.ts");
const publisher_component_1 = __webpack_require__(/*! ../tokbox/publisher/publisher.component */ "./src/app/tokbox/publisher/publisher.component.ts");
let DjViewModule = class DjViewModule {
};
DjViewModule = __decorate([
    core_1.NgModule({
        imports: [
            common_1.CommonModule,
            dj_view_routing_module_1.DjViewRoutingModule,
            forms_1.FormsModule,
        ],
        declarations: [comments_component_1.CommentsComponent, soundplayer_component_1.SoundplayerComponent, profile_component_1.ProfileComponent, main_component_1.MainComponent, search_component_1.SearchComponent, comment_component_1.CommentComponent, app_component_1.AppComponent, subscriber_component_1.SubscriberComponent, publisher_component_1.PublisherComponent],
        providers: [opentok_service_1.OpentokService]
    })
], DjViewModule);
exports.DjViewModule = DjViewModule;


/***/ }),

/***/ "./src/app/dj-view/main/main.component.css":
/*!*************************************************!*\
  !*** ./src/app/dj-view/main/main.component.css ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/dj-view/main/main.component.html":
/*!**************************************************!*\
  !*** ./src/app/dj-view/main/main.component.html ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<router-outlet></router-outlet>\n<div>\n  <app-profile></app-profile>\n</div>\n<div>\n  <app-soundplayer></app-soundplayer>\n</div>\n<div>\n  <app-comments></app-comments>\n  <app-tokbox></app-tokbox>\n</div>\n<div>\n  <button routerLink=\"dj-comment\" >comment</button>\n</div>\n<div>\n  <button routerLink=\"song-search\">add-song</button>\n</div>"

/***/ }),

/***/ "./src/app/dj-view/main/main.component.ts":
/*!************************************************!*\
  !*** ./src/app/dj-view/main/main.component.ts ***!
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
let MainComponent = class MainComponent {
    constructor() { }
    ngOnInit() {
    }
};
MainComponent = __decorate([
    core_1.Component({
        selector: 'app-main',
        template: __webpack_require__(/*! ./main.component.html */ "./src/app/dj-view/main/main.component.html"),
        styles: [__webpack_require__(/*! ./main.component.css */ "./src/app/dj-view/main/main.component.css")]
    }),
    __metadata("design:paramtypes", [])
], MainComponent);
exports.MainComponent = MainComponent;


/***/ }),

/***/ "./src/app/dj-view/profile/profile.component.css":
/*!*******************************************************!*\
  !*** ./src/app/dj-view/profile/profile.component.css ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".container{\n  background: white;\n  height: 208;\n}\n.header{\n  background: white;\n}\nnav li {\n  display: inline-block;\n  padding: 31px 18px\n\n}\nul {\n  list-style: none;\n}\n"

/***/ }),

/***/ "./src/app/dj-view/profile/profile.component.html":
/*!********************************************************!*\
  !*** ./src/app/dj-view/profile/profile.component.html ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<nav>\n\n  <div class=\"container\">\n    <ul>\n  \n        <li>\n          <img src=\"https://pbs.twimg.com/profile_images/986327929453006848/c5ShdmQS_400x400.jpg\">\n          <br/><a>Options</a>\n        </li>\n        <li>\n          <p class=\"profile-p\">\n            1222<br/>Likes\n          </p>\n        </li>\n        <li>\n          <p class=\"profile-p\">\n            173<br/>Followers\n          </p>\n        </li>\n        <li>\n          <p class=\"profile-p\">\n            44<br/>Rating\n          </p>\n        </li>\n      </ul>\n    \n</div>\n\n</nav>"

/***/ }),

/***/ "./src/app/dj-view/profile/profile.component.ts":
/*!******************************************************!*\
  !*** ./src/app/dj-view/profile/profile.component.ts ***!
  \******************************************************/
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
let ProfileComponent = class ProfileComponent {
    constructor() { }
    ngOnInit() {
    }
};
ProfileComponent = __decorate([
    core_1.Component({
        selector: 'app-profile',
        template: __webpack_require__(/*! ./profile.component.html */ "./src/app/dj-view/profile/profile.component.html"),
        styles: [__webpack_require__(/*! ./profile.component.css */ "./src/app/dj-view/profile/profile.component.css")]
    }),
    __metadata("design:paramtypes", [])
], ProfileComponent);
exports.ProfileComponent = ProfileComponent;


/***/ }),

/***/ "./src/app/dj-view/search/search.component.css":
/*!*****************************************************!*\
  !*** ./src/app/dj-view/search/search.component.css ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/dj-view/search/search.component.html":
/*!******************************************************!*\
  !*** ./src/app/dj-view/search/search.component.html ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<a (click)=\"backClicked()\">\n  <i class=\"material-icons\">\n    clear\n  </i>\n</a>\n<h1>Add Tracks</h1>\n<input type=\"text\">\n<h3>tracks</h3>"

/***/ }),

/***/ "./src/app/dj-view/search/search.component.ts":
/*!****************************************************!*\
  !*** ./src/app/dj-view/search/search.component.ts ***!
  \****************************************************/
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
const common_1 = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
let SearchComponent = class SearchComponent {
    constructor(_location) {
        this._location = _location;
    }
    ngOnInit() {
    }
    backClicked() {
        this._location.back();
    }
};
SearchComponent = __decorate([
    core_1.Component({
        selector: 'app-search',
        template: __webpack_require__(/*! ./search.component.html */ "./src/app/dj-view/search/search.component.html"),
        styles: [__webpack_require__(/*! ./search.component.css */ "./src/app/dj-view/search/search.component.css")]
    }),
    __metadata("design:paramtypes", [common_1.Location])
], SearchComponent);
exports.SearchComponent = SearchComponent;


/***/ }),

/***/ "./src/app/dj-view/soundplayer/soundplayer.component.css":
/*!***************************************************************!*\
  !*** ./src/app/dj-view/soundplayer/soundplayer.component.css ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/dj-view/soundplayer/soundplayer.component.html":
/*!****************************************************************!*\
  !*** ./src/app/dj-view/soundplayer/soundplayer.component.html ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div>\n  <img src=\"https://images-na.ssl-images-amazon.com/images/I/51ik%2BwjSdwL._SS500.jpg\">\n  <div>\n    <a>\n      <i class=\"material-icons\">\n        favorite_border\n      </i>\n    </a>\n    <a>\n      <i class=\"material-icons\">\n        chat_bubble_outline\n      </i>\n    </a>\n\n    <p>#inMyFeelings</p>\n  </div>\n\n</div>\n"

/***/ }),

/***/ "./src/app/dj-view/soundplayer/soundplayer.component.ts":
/*!**************************************************************!*\
  !*** ./src/app/dj-view/soundplayer/soundplayer.component.ts ***!
  \**************************************************************/
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
let SoundplayerComponent = class SoundplayerComponent {
    constructor() { }
    ngOnInit() {
    }
};
SoundplayerComponent = __decorate([
    core_1.Component({
        selector: 'app-soundplayer',
        template: __webpack_require__(/*! ./soundplayer.component.html */ "./src/app/dj-view/soundplayer/soundplayer.component.html"),
        styles: [__webpack_require__(/*! ./soundplayer.component.css */ "./src/app/dj-view/soundplayer/soundplayer.component.css")]
    }),
    __metadata("design:paramtypes", [])
], SoundplayerComponent);
exports.SoundplayerComponent = SoundplayerComponent;


/***/ }),

/***/ "./src/app/tokbox/app.component.css":
/*!******************************************!*\
  !*** ./src/app/tokbox/app.component.css ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "app-publisher, app-subscriber {\n  display: block;\n  float: left;\n}\n"

/***/ }),

/***/ "./src/app/tokbox/app.component.html":
/*!*******************************************!*\
  !*** ./src/app/tokbox/app.component.html ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h1>{{title}}</h1>\n<div *ngIf=\"session\">\n  <app-publisher [session]=\"session\"></app-publisher>\n  <app-subscriber *ngFor=\"let stream of streams\" [stream]=\"stream\" [session]=\"session\"></app-subscriber>\n</div>\n"

/***/ }),

/***/ "./src/app/tokbox/app.component.ts":
/*!*****************************************!*\
  !*** ./src/app/tokbox/app.component.ts ***!
  \*****************************************/
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
const opentok_service_1 = __webpack_require__(/*! ./opentok.service */ "./src/app/tokbox/opentok.service.ts");
let AppComponent = class AppComponent {
    constructor(ref, opentokService) {
        this.ref = ref;
        this.opentokService = opentokService;
        this.title = 'Angular Basic Video Chat';
        this.streams = [];
        this.changeDetectorRef = ref;
    }
    ngOnInit() {
        this.opentokService.initSession().then((session) => {
            this.session = session;
            this.session.on('streamCreated', (event) => {
                this.streams.push(event.stream);
                this.changeDetectorRef.detectChanges();
            });
            this.session.on('streamDestroyed', (event) => {
                const idx = this.streams.indexOf(event.stream);
                if (idx > -1) {
                    this.streams.splice(idx, 1);
                    this.changeDetectorRef.detectChanges();
                }
            });
        })
            .then(() => this.opentokService.connect())
            .catch((err) => {
            console.error(err);
            alert('Unable to connect. Make sure you have updated the config.ts file with your OpenTok details.');
        });
    }
};
AppComponent = __decorate([
    core_1.Component({
        selector: 'app-tokbox',
        template: __webpack_require__(/*! ./app.component.html */ "./src/app/tokbox/app.component.html"),
        styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/tokbox/app.component.css")],
        providers: [opentok_service_1.OpentokService]
    }),
    __metadata("design:paramtypes", [core_1.ChangeDetectorRef, opentok_service_1.OpentokService])
], AppComponent);
exports.AppComponent = AppComponent;


/***/ }),

/***/ "./src/app/tokbox/opentok.service.ts":
/*!*******************************************!*\
  !*** ./src/app/tokbox/opentok.service.ts ***!
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
const OT = __webpack_require__(/*! @opentok/client */ "./node_modules/@opentok/client/dist/js/opentok.js");
const config_1 = __webpack_require__(/*! ../config */ "./src/app/config.js");
let OpentokService = class OpentokService {
    constructor() { }
    getOT() {
        return OT;
    }
    initSession() {
        if (config_1.default.API_KEY && config_1.default.TOKEN && config_1.default.SESSION_ID) {
            this.session = OT.initSession(config_1.default.API_KEY, config_1.default.SESSION_ID);
            this.token = config_1.default.TOKEN;
            return Promise.resolve(this.session);
        }
        else {
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
    __metadata("design:paramtypes", [])
], OpentokService);
exports.OpentokService = OpentokService;


/***/ }),

/***/ "./src/app/tokbox/publisher/publisher.component.css":
/*!**********************************************************!*\
  !*** ./src/app/tokbox/publisher/publisher.component.css ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/tokbox/publisher/publisher.component.html":
/*!***********************************************************!*\
  !*** ./src/app/tokbox/publisher/publisher.component.html ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div [ngClass]=\"{'publishing': publishing}\" #publisherDiv></div>\n"

/***/ }),

/***/ "./src/app/tokbox/publisher/publisher.component.ts":
/*!*********************************************************!*\
  !*** ./src/app/tokbox/publisher/publisher.component.ts ***!
  \*********************************************************/
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
const opentok_service_1 = __webpack_require__(/*! ../opentok.service */ "./src/app/tokbox/opentok.service.ts");
const publish = () => {
};
let PublisherComponent = class PublisherComponent {
    constructor(opentokService) {
        this.opentokService = opentokService;
        this.publishing = false;
    }
    ngAfterViewInit() {
        const OT = this.opentokService.getOT();
        this.publisher = OT.initPublisher(this.publisherDiv.nativeElement, { insertMode: 'append' });
        if (this.session) {
            if (this.session['isConnected']()) {
                this.publish();
            }
            this.session.on('sessionConnected', () => this.publish());
        }
    }
    publish() {
        this.session.publish(this.publisher, (err) => {
            if (err) {
                alert(err.message);
            }
            else {
                this.publishing = true;
            }
        });
    }
};
__decorate([
    core_1.ViewChild('publisherDiv'),
    __metadata("design:type", core_1.ElementRef)
], PublisherComponent.prototype, "publisherDiv", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", OT.Session)
], PublisherComponent.prototype, "session", void 0);
PublisherComponent = __decorate([
    core_1.Component({
        selector: 'app-publisher',
        template: __webpack_require__(/*! ./publisher.component.html */ "./src/app/tokbox/publisher/publisher.component.html"),
        styles: [__webpack_require__(/*! ./publisher.component.css */ "./src/app/tokbox/publisher/publisher.component.css")]
    }),
    __metadata("design:paramtypes", [opentok_service_1.OpentokService])
], PublisherComponent);
exports.PublisherComponent = PublisherComponent;


/***/ }),

/***/ "./src/app/tokbox/subscriber/subscriber.component.css":
/*!************************************************************!*\
  !*** ./src/app/tokbox/subscriber/subscriber.component.css ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/tokbox/subscriber/subscriber.component.html":
/*!*************************************************************!*\
  !*** ./src/app/tokbox/subscriber/subscriber.component.html ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div #subscriberDiv></div>\n"

/***/ }),

/***/ "./src/app/tokbox/subscriber/subscriber.component.ts":
/*!***********************************************************!*\
  !*** ./src/app/tokbox/subscriber/subscriber.component.ts ***!
  \***********************************************************/
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
let SubscriberComponent = class SubscriberComponent {
    constructor() { }
    ngAfterViewInit() {
        console.log(this.session, 'subscriber');
        const subscriber = this.session.subscribe(this.stream, this.subscriberDiv.nativeElement, {}, (err) => {
            if (err) {
                alert(err.message);
            }
        });
    }
};
__decorate([
    core_1.ViewChild('subscriberDiv'),
    __metadata("design:type", core_1.ElementRef)
], SubscriberComponent.prototype, "subscriberDiv", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", OT.Session)
], SubscriberComponent.prototype, "session", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", OT.Stream)
], SubscriberComponent.prototype, "stream", void 0);
SubscriberComponent = __decorate([
    core_1.Component({
        selector: 'app-subscriber',
        template: __webpack_require__(/*! ./subscriber.component.html */ "./src/app/tokbox/subscriber/subscriber.component.html"),
        styles: [__webpack_require__(/*! ./subscriber.component.css */ "./src/app/tokbox/subscriber/subscriber.component.css")]
    }),
    __metadata("design:paramtypes", [])
], SubscriberComponent);
exports.SubscriberComponent = SubscriberComponent;


/***/ })

}]);
//# sourceMappingURL=app-dj-view-dj-view-module.js.map