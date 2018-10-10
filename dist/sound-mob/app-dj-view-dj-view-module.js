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
const tokbox_component_1 = __webpack_require__(/*! ../tokbox/tokbox.component */ "./src/app/tokbox/tokbox.component.ts");
const publisher_component_1 = __webpack_require__(/*! ../tokbox/publisher/publisher.component */ "./src/app/tokbox/publisher/publisher.component.ts");
const subscriber_component_1 = __webpack_require__(/*! ../tokbox/subscriber/subscriber.component */ "./src/app/tokbox/subscriber/subscriber.component.ts");
let DjViewModule = class DjViewModule {
};
DjViewModule = __decorate([
    core_1.NgModule({
        imports: [
            common_1.CommonModule,
            dj_view_routing_module_1.DjViewRoutingModule,
            forms_1.FormsModule,
        ],
        declarations: [comments_component_1.CommentsComponent, soundplayer_component_1.SoundplayerComponent, profile_component_1.ProfileComponent, main_component_1.MainComponent, search_component_1.SearchComponent, comment_component_1.CommentComponent, tokbox_component_1.TokboxComponent, publisher_component_1.PublisherComponent, subscriber_component_1.SubscriberComponent],
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


/***/ })

}]);
//# sourceMappingURL=app-dj-view-dj-view-module.js.map