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

module.exports = "<a (click)=\"backClicked()\">\n  <i class=\"material-icons\">\n    clear\n  </i>\n</a>\n<h1>Add Tracks</h1>\n<input type=\"text\">\n<h3>tracks</h3>"

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

module.exports = "ul {\n  list-style: none;\n}\n\n.comment-name {\n  -ms-grid-row-align: left;\n      align-self: left;\n}\n\n.user-comment {\n  -ms-grid-row-align: center;\n      align-self: center;\n}\n\nhtml,\n  body {\n    background-color: #f0f2fa;\n    font-family: \"PT Sans\", \"Helvetica Neue\", \"Helvetica\", \"Roboto\", \"Arial\", sans-serif;\n    color: #555f77;\n    -webkit-font-smoothing: antialiased;\n  }\n\ninput,\n  textarea {\n    outline: none;\n    border: none;\n    display: block;\n    margin: 0;\n    padding: 0;\n    -webkit-font-smoothing: antialiased;\n    font-family: \"PT Sans\", \"Helvetica Neue\", \"Helvetica\", \"Roboto\", \"Arial\", sans-serif;\n    font-size: 1rem;\n    color: #555f77;\n  }\n\ninput::-webkit-input-placeholder,\n  textarea::-webkit-input-placeholder {\n    color: #ced2db;\n  }\n\ninput::-moz-placeholder,\n  textarea::-moz-placeholder {\n    color: #ced2db;\n  }\n\ninput:-moz-placeholder,\n  textarea:-moz-placeholder {\n    color: #ced2db;\n  }\n\ninput:-ms-input-placeholder,\n  textarea:-ms-input-placeholder {\n    color: #ced2db;\n  }\n\np {\n    line-height: 1.3125rem;\n  }\n\n.comments {\n    margin: 2.5rem auto 0;\n    max-width: 60.75rem;\n    padding: 0 1.25rem;\n  }\n\n.comment-wrap {\n    margin-bottom: 1.25rem;\n    display: table;\n    width: 100%;\n    min-height: 5.3125rem;\n  }\n\n.photo {\n    padding-top: 0.625rem;\n    display: table-cell;\n    width: 3.5rem;\n  }\n\n.photo .avatar {\n    height: 4.25rem;\n    width: 4.25rem;\n    border-radius: 10%;\n    background-size: contain;\n  }\n\n.comment-block {\n    padding: 1rem;\n    background-color: #fff;\n    display: table-cell;\n    vertical-align: top;\n    border-radius: 0.1875rem;\n    box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.08);\n  }\n\n.comment-block textarea {\n    width: 100%;\n    resize: none;\n  }\n\n.comment-text {\n    margin-bottom: 1.25rem;\n  }\n\n.bottom-comment {\n    color: #acb4c2;\n    font-size: 0.875rem;\n  }\n\n.comment-date {\n    float: left;\n  }\n\n.comment-actions {\n    float: right;\n  }\n\n.comment-actions li {\n    display: inline;\n    margin: -2px;\n    cursor: pointer;\n  }\n\n.comment-actions li.complain {\n    padding-right: 0.75rem;\n    border-right: 1px solid #e1e5eb;\n  }\n\n.comment-actions li.reply {\n    padding-left: 0.75rem;\n    padding-right: 0.125rem;\n  }\n\n.comment-actions li:hover {\n    color: #0095ff;\n  }"

/***/ }),

/***/ "./src/app/dj-view/comments/comments.component.html":
/*!**********************************************************!*\
  !*** ./src/app/dj-view/comments/comments.component.html ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"comments\">\n  <div class=\"comment-wrap\">\n    <div class=\"photo\">\n      <div class=\"avatar\" style=\"background-image: url('https://pbs.twimg.com/profile_images/986327929453006848/c5ShdmQS_400x400.jpg')\"></div>\n    </div>\n    <div class=\"comment-block\">\n      <form action=\"\">\n        <textarea name=\"\" id=\"\" cols=\"30\" rows=\"3\" placeholder=\"Add comment...\"></textarea>\n      </form>\n    </div>\n  </div>\n\n  <div class=\"comment-wrap\">\n    <div class=\"photo\">\n      <div class=\"avatar\" style=\"background-image: url('https://s3.amazonaws.com/uifaces/faces/twitter/jsa/128.jpg')\"></div>\n    </div>\n    <div class=\"comment-block\">\n      <p class=\"comment-text\">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iusto temporibus iste nostrum\n        dolorem natus recusandae incidunt voluptatum. Eligendi voluptatum ducimus architecto tempore, quaerat\n        explicabo veniam fuga corporis totam reprehenderit quasi\n        sapiente modi tempora at perspiciatis mollitia, dolores voluptate. Cumque, corrupti?</p>\n      <div class=\"bottom-comment\">\n        <div class=\"comment-date\">Aug 24, 2014 @ 2:35 PM</div>\n        <ul class=\"comment-actions\">\n          <li class=\"complain\">Complain</li>\n          <li class=\"reply\">Reply</li>\n        </ul>\n      </div>\n    </div>\n  </div>\n\n  <div class=\"comment-wrap\">\n    <div class=\"photo\">\n      <div class=\"avatar\" style=\"background-image: url('https://s3.amazonaws.com/uifaces/faces/twitter/felipenogs/128.jpg')\"></div>\n    </div>\n    <div class=\"comment-block\">\n      <p class=\"comment-text\">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iusto temporibus iste nostrum\n        dolorem natus recusandae incidunt voluptatum. Eligendi voluptatum ducimus architecto tempore, quaerat\n        explicabo veniam fuga corporis totam.</p>\n      <div class=\"bottom-comment\">\n        <div class=\"comment-date\">Aug 23, 2014 @ 10:32 AM</div>\n        <ul class=\"comment-actions\">\n          <li class=\"complain\">Complain</li>\n          <li class=\"reply\">Reply</li>\n        </ul>\n      </div>\n    </div>\n  </div>\n</div>"

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
const app_component_1 = __webpack_require__(/*! ./tokbox/app.component */ "./src/app/dj-view/tokbox/app.component.ts");
const subscriber_component_1 = __webpack_require__(/*! ./tokbox/subscriber/subscriber.component */ "./src/app/dj-view/tokbox/subscriber/subscriber.component.ts");
const publisher_component_1 = __webpack_require__(/*! ./tokbox/publisher/publisher.component */ "./src/app/dj-view/tokbox/publisher/publisher.component.ts");
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

module.exports = "<link rel=\"stylesheet\" href=\"https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css\" integrity=\"sha384-BVYiiSIFeK1dGmJRAkycuHAHRg32OmUcww7on3RYdg4Va+PmSTsz/K68vbdEjh4u\"\n  crossorigin=\"anonymous\">\n\n\n\n<div class=\"container\">\n  <div class=\"row\">\n    <div class=\"col-sm-2\">\n\n    </div>\n\n    <div class=\"col-sm-8\">\n      <app-profile></app-profile>\n      <br>\n      <app-soundplayer></app-soundplayer>\n      <br>\n      <app-comments></app-comments>\n    </div>\n\n    <div class=\"col-sm-2\">\n\n    </div>\n  </div>\n</div>"

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

module.exports = ".container{\n  background: white;\n  height: 208;\n}\n.header{\n  background: white;\n}\nnav li {\n  display: inline-block;\n  padding: 10px 5px;\n  padding-bottom: 0px;\n  padding-top: 0px;\n  bottom: 0px;\n  margin-top: 10px;\n}\nul {\n  list-style: none;\n}\n.img-landing {\n    width: auto;\n    display: block;\n    margin-left: auto;\n    margin-right: auto;\n    border: 10px;\n    border-color: azure;\n}\n.blur-me {\n  filter: blur(6px) !important;\n    -webkit-filter: blur(6px) !important;\n    -moz-filter: blur(6px) !important;\n    -o-filter: blur(6px) !important;\n    -ms-filter: blur(6px) !important;\n    filter:progid:DXImageTransform.Microsoft.Blur(PixelRadius='2') !important; /* IE lte 9\n\n    /* this does the trick */\n    transform: scale(1.2);\n    -ms-transform: scale(1.2); /* IE 9 */\n    -webkit-transform: scale(1.2); \n\n    \n}\n/* profile picture */\n#container_image{\n    position: relative;\n    width: auto;\n    height: 350px;\n    overflow: hidden;\n    background-color: black;\n}\n#main_image{\n    width: 100%;\n    height: 50%;\n}\n#overlay_image{\n    position: absolute;\n    bottom: 75px;\n    left: 50px;\n    width: 150px;\n    height: 150px;\n    width: auto;\n    display: block;\n    margin-left: auto;\n    margin-right: auto;\n    border-radius: 20px;\n}\n#overlay_image_list{\n    position: absolute;\n    left: 200px;\n}\n/* breadcrumb */\n* {\n  margin: 0px auto;\n  text-align:center;\n  padding: 0px;\n  list-style: none;\n  font-family: 'Open Sans';\n}\n.cont_principal {\n  position: absolute;\n  width: 100%;\n  height: 100%;\n  background: rgb(212,228,239);\nbackground: linear-gradient(to bottom,  rgba(212,228,239,1) 0%,rgba(134,174,204,1) 100%);\nfilter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#d4e4ef', endColorstr='#86aecc',GradientType=0 );\n\n}\n.cont_breadcrumbs {\n  width: 350px;\n}\n.cont_breadcrumbs_1 {\n  position: relative;\n  width: 100%;\n  float: left;\n  margin: 20px;\n\n}\n.cont_breadcrumbs_1 > ul > li {\n  position: relative;\n  float: left;\n  -webkit-transform: skewX(-15deg);\n          transform: skewX(-15deg);  \n  background-color: #fff;\nbox-shadow: -2px 0px 20px -6px rgba(0,0,0,0.5);\nz-index: 1;\n  width: 70px;\n  margin-left: -50px;\ntransition: all 0.5s;\n}\n.cont_breadcrumbs_1 > ul > li  > a {\n  display: block;\n  padding: 10px;\n  font-size: 20px;\n -webkit-transform: skewX(15deg);\n         transform: skewX(15deg);\n text-decoration:none;\n color: #444;\nfont-weight: 300;\n}\n.cont_breadcrumbs_1 > ul > li:first-child {\n margin-left: 0px;\n}\n.cont_breadcrumbs_1 > ul > li:hover {\n background-color: #CFD8DC;\n}\n.cont_breadcrumbs_1 > ul > li:last-child {\n  background-color: #78909C;\n}\n.cont_breadcrumbs_1 > ul > li:last-child > a {\n  color: #fff;;\n}\n.cont_breadcrumbs_1 > ul:hover > li {\n  margin-left: 0px;\n}\n.cont_breadcrumbs_2 {\n  position: relative;\n  width: 100%;\n  float: left;\n  margin: 20px 20px;\n}\n.cont_breadcrumbs_2 > ol > li {\n  position: relative;\n  float: left;\n  -webkit-transform: skewX(-15deg);\n          transform: skewX(-15deg);  \n  background-color: #fff;\nbox-shadow: -2px 0px 20px -6px rgba(0,0,0,0.5);\nz-index: 1;\ntransition: all 0.5s;\n}\n.cont_breadcrumbs_2 > ol > li:hover {\n background-color: #CFD8DC;\n}\n.cont_breadcrumbs_2 > ul > li  > a {\n  display: block;\n  padding: 10px;\n  font-size: 20px;\n -webkit-transform: skewX(15deg);\n         transform: skewX(15deg);\n text-decoration:none;\n color: #444;\nfont-weight: 300;\n}\n.cont_breadcrumbs_2 > ul > li:last-child {\n  background-color: #78909C;\n  -webkit-transform: skew(0deg);\n          transform: skew(0deg);\nmargin-left: -5px;\n\n}\n.cont_breadcrumbs_2 > ul > li:last-child > a {\n  color: #fff;\n -webkit-transform: skewX(0deg);\n         transform: skewX(0deg);\n}\n.cont_breadcrumbs_3 {\n  position: relative;\n  width: 100%;\n  float: left;\n  margin: 20px 20px;\n}\n.cont_breadcrumbs_3 > ul > li {\n  position: relative;\n  float: left;\n  -webkit-transform: skewX(-15deg);\n          transform: skewX(-15deg);  \n  background-color: #fff;\nz-index: 1;\ntransition: all 0.5s;\nmargin-left: 5px;\n}\n.cont_breadcrumbs_3 > ul > li:hover {\n background-color: #CFD8DC;\n}\n.cont_breadcrumbs_3 > ul > li  > a {\n  display: block;\n  padding: 10px;\n  font-size: 20px;\n -webkit-transform: skewX(15deg);\n         transform: skewX(15deg);\n text-decoration:none;\n color: #444;\nfont-weight: 300;\n}\n.cont_breadcrumbs_3 > ul > li:last-child {\n  background-color: #78909C;\n}\n.cont_breadcrumbs_3 > ul > li:last-child > a {\n  color: #fff; \n\n}\n.breadcrumb {\n      width: 100%;\n      display: block;\n      background-color: white;\n}\n.user-location{\n  position: absolute;\n  color: white;\n  background-color:rgba(0, 0, 0, 0.05);\n  display: block;\n  right: 30px;\n  bottom: 200px;\n  border-radius: 6px;\n  \n}\n.station-name{\n  position: absolute;\n  color:white;\n  background-color:rgba(0, 0, 0, 0.05);\n  display: block;\n  padding: 10 10 10 10;\n  right: 30px;\n  bottom: 275px;\n  border-radius: 2px;\n}\n.back-button{\n  position: absolute;\n  background-color:rgba(0, 0, 0, 0.10);\n  display: block;\n  padding: 10 10 10 10;\n  left: 40px;\n  bottom: 275px;\n  border-radius: 2px;\n}\n\n"

/***/ }),

/***/ "./src/app/dj-view/profile/profile.component.html":
/*!********************************************************!*\
  !*** ./src/app/dj-view/profile/profile.component.html ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div id=\"container_image\" class=\"profile-block\">\n  <img alt=\"user-profile-image\" class=\"image-landing blur-me\" height=\"350\" id=\"main_image\" src=\"https://pbs.twimg.com/profile_images/986327929453006848/c5ShdmQS_400x400.jpg\" />\n\n  <button type=\"button\" class=\"btn btn-default back-button\" aria-label=\"Left Align\" routerLink=\"comment\">\n    <span class=\"glyphicon glyphicon-menu-left\" aria-hidden=\"true\"></span>\n  </button>\n\n  <h3 class=\"user-location\">New Orleans</h3>\n  <h1 class=\"station-name\">Yeezy2k18</h1>\n\n  <img alt=\"user-profile-image\" class=\"image-landing\" id=\"overlay_image\" height=\"150\" src=\"https://pbs.twimg.com/profile_images/986327929453006848/c5ShdmQS_400x400.jpg\" />\n  <div id=\"overlay_image_list\">\n    <br>\n    <br>\n    <nav>\n      <ol class=\"breadcrumb\">\n        <li class=\"breadcrumb-item\">\n          <a href=\"#\">Bio</a>\n        </li>\n        <li class=\"breadcrumb-item\">\n          <a href=\"#\">Likes</a>\n        </li>\n        <li class=\"breadcrumb-item\">\n          <a href=\"#\">Followers</a>\n        </li>\n        <li class=\"breadcrumb-item\">\n          <a href=\"#\">Rating</a>\n        </li>\n      </ol>\n    </nav>\n  </div>\n</div>"

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

module.exports = ".img-landing {\n    width: auto;\n    display: block;\n    margin-left: auto;\n    margin-right: auto;\n    border-radius: 20px;\n}\n.breadcrumb{\n    background-color: white;\n    text-align: center;\n}\n.album-block{\n    background-color: black;\n    width: auto;\n    display: block;\n}\n#soundboard-button{\n    background-color: rgb(0, 0, 0, 0.10);\n    padding: 1em;\n    margin: 1em;\n}"

/***/ }),

/***/ "./src/app/dj-view/soundplayer/soundplayer.component.html":
/*!****************************************************************!*\
  !*** ./src/app/dj-view/soundplayer/soundplayer.component.html ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"album-block\">\n  <img src=\"https://images-na.ssl-images-amazon.com/images/I/51ik%2BwjSdwL._SS500.jpg\" class=\"img-landing\" height=\"350\">\n</div>\n<br>\n<br>\n<nav>\n  <ol class=\"breadcrumb\">\n    <li class=\"breadcrumb-item\">\n      <a href=\"#\">Like</a>\n    </li>\n    <li class=\"breadcrumb-item\">\n      <a href=\"#\">Follow</a>\n    </li>\n    <li class=\"breadcrumb-item\">\n      <a href=\"#\">Rate</a>\n    </li>\n    <li class=\"breadcrumb-item\">\n      <a href=\"#\">Suggest Tracks</a>\n    </li>\n  </ol>\n</nav>\n<br>\n<div class=\"container-fluid\">\n  <div class=\"row\">\n\n    <div class=\"col-md-2\">\n    </div>\n    <div class=\"col-md-8\">\n      <h3 class=\"text-center\">\n        h3. Lorem ipsum dolor sit amet.\n      </h3>\n    </div>\n    <div class=\"col-md-2\">\n    </div>\n\n  </div>\n\n  <div class=\"row\">\n    <div class=\"col-md-4\">\n\n      <button type=\"button\" id=\"soundboard-button\" class=\"btn btn-block btn-outline-secondary btn-lg\" *ngFor=\"let item of soundBoardMediaInformation\">\n        {{item.name}}\n        Hello\n      </button>\n    </div>\n\n    <div class=\"col-md-4\">\n\n      <button type=\"button\" id=\"soundboard-button\" class=\"btn btn-outline-secondary btn-lg btn-block\">\n        NameofSound\n      </button>\n    </div>\n    <div class=\"col-md-4\">\n\n      <button type=\"button\" id=\"soundboard-button\" class=\"btn btn-outline-secondary btn-lg btn-block\">\n        NameofSound\n      </button>\n    </div>\n  </div>\n  <div class=\"row\">\n    <div class=\"col-md-4\">\n\n      <button type=\"button\" id=\"soundboard-button\" class=\"btn btn-block btn-outline-secondary btn-lg btn-block\">\n        <span>NameofSound</span>\n      </button>\n    </div>\n    <div class=\"col-md-4\">\n\n      <button type=\"button\" id=\"soundboard-button\" class=\"btn btn-outline-secondary btn-lg btn-block\">\n        NameofSound\n      </button>\n    </div>\n    <div class=\"col-md-4\">\n\n      <button type=\"button\" id=\"soundboard-button\" class=\"btn btn-outline-secondary btn-lg btn-block\">\n        NameofSound\n      </button>\n    </div>\n  </div>\n</div>\n<div class=\"container-fluid\">\n  <div class=\"row\">\n    <div class=\"col-md-2\">\n    </div>\n    <div class=\"col-md-8\">\n      <button type=\"button\" class=\"btn btn-lg btn-danger center-block\">\n        Live\n      </button>\n    </div>\n    <div class=\"col-md-2\">\n    </div>\n  </div>\n</div>"

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
const http_1 = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
let SoundplayerComponent = class SoundplayerComponent {
    constructor(http) {
        this.http = http;
        this.soundBoardMediaInformation = [];
    }
    ngOnInit() {
        this.http.get('/test')
            .subscribe(({ items }) => {
            //console.log(data);
            // let { items } = data;
            return items.map(item => (this.soundBoardMediaInformation.push({
                name: item.name,
                mediaLink: item.mediaLink
            })));
        });
        console.log(this.soundBoardMediaInformation);
    }
};
SoundplayerComponent = __decorate([
    core_1.Component({
        selector: 'app-soundplayer',
        template: __webpack_require__(/*! ./soundplayer.component.html */ "./src/app/dj-view/soundplayer/soundplayer.component.html"),
        styles: [__webpack_require__(/*! ./soundplayer.component.css */ "./src/app/dj-view/soundplayer/soundplayer.component.css")]
    }),
    __metadata("design:paramtypes", [http_1.HttpClient])
], SoundplayerComponent);
exports.SoundplayerComponent = SoundplayerComponent;


/***/ }),

/***/ "./src/app/dj-view/tokbox/app.component.css":
/*!**************************************************!*\
  !*** ./src/app/dj-view/tokbox/app.component.css ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "app-publisher, app-subscriber {\n  display: block;\n  float: left;\n}\n"

/***/ }),

/***/ "./src/app/dj-view/tokbox/app.component.html":
/*!***************************************************!*\
  !*** ./src/app/dj-view/tokbox/app.component.html ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h1>{{title}}</h1>\n<div *ngIf=\"session\">\n  <app-publisher [session]=\"session\"></app-publisher>\n  <!-- <app-subscriber *ngFor=\"let stream of streams\" [stream]=\"stream\" [session]=\"session\"></app-subscriber> -->\n</div>\n"

/***/ }),

/***/ "./src/app/dj-view/tokbox/app.component.ts":
/*!*************************************************!*\
  !*** ./src/app/dj-view/tokbox/app.component.ts ***!
  \*************************************************/
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
const opentok_service_1 = __webpack_require__(/*! ./opentok.service */ "./src/app/dj-view/tokbox/opentok.service.ts");
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
        selector: 'dj-tokbox',
        template: __webpack_require__(/*! ./app.component.html */ "./src/app/dj-view/tokbox/app.component.html"),
        styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/dj-view/tokbox/app.component.css")],
        providers: [opentok_service_1.OpentokService]
    }),
    __metadata("design:paramtypes", [core_1.ChangeDetectorRef, opentok_service_1.OpentokService])
], AppComponent);
exports.AppComponent = AppComponent;


/***/ }),

/***/ "./src/app/dj-view/tokbox/opentok.service.ts":
/*!***************************************************!*\
  !*** ./src/app/dj-view/tokbox/opentok.service.ts ***!
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
const OT = __webpack_require__(/*! @opentok/client */ "./node_modules/@opentok/client/dist/js/opentok.js");
const config_1 = __webpack_require__(/*! ../../config */ "./src/app/config.js");
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

/***/ "./src/app/dj-view/tokbox/publisher/publisher.component.css":
/*!******************************************************************!*\
  !*** ./src/app/dj-view/tokbox/publisher/publisher.component.css ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/dj-view/tokbox/publisher/publisher.component.html":
/*!*******************************************************************!*\
  !*** ./src/app/dj-view/tokbox/publisher/publisher.component.html ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div [ngClass]=\"{'publishing': publishing}\" #publisherDiv></div>\n"

/***/ }),

/***/ "./src/app/dj-view/tokbox/publisher/publisher.component.ts":
/*!*****************************************************************!*\
  !*** ./src/app/dj-view/tokbox/publisher/publisher.component.ts ***!
  \*****************************************************************/
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
const opentok_service_1 = __webpack_require__(/*! ../opentok.service */ "./src/app/dj-view/tokbox/opentok.service.ts");
const publish = () => {
};
let PublisherComponent = class PublisherComponent {
    constructor(opentokService) {
        this.opentokService = opentokService;
        this.publishing = false;
    }
    ngAfterViewInit() {
        const OT = this.opentokService.getOT();
        this.publishOptions = { videoSource: null, insertMode: 'append' };
        this.publisher = OT.initPublisher(this.publisherDiv.nativeElement, this.publishOptions);
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
        template: __webpack_require__(/*! ./publisher.component.html */ "./src/app/dj-view/tokbox/publisher/publisher.component.html"),
        styles: [__webpack_require__(/*! ./publisher.component.css */ "./src/app/dj-view/tokbox/publisher/publisher.component.css")]
    }),
    __metadata("design:paramtypes", [opentok_service_1.OpentokService])
], PublisherComponent);
exports.PublisherComponent = PublisherComponent;


/***/ }),

/***/ "./src/app/dj-view/tokbox/subscriber/subscriber.component.css":
/*!********************************************************************!*\
  !*** ./src/app/dj-view/tokbox/subscriber/subscriber.component.css ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/dj-view/tokbox/subscriber/subscriber.component.html":
/*!*********************************************************************!*\
  !*** ./src/app/dj-view/tokbox/subscriber/subscriber.component.html ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div #subscriberDiv></div>\n"

/***/ }),

/***/ "./src/app/dj-view/tokbox/subscriber/subscriber.component.ts":
/*!*******************************************************************!*\
  !*** ./src/app/dj-view/tokbox/subscriber/subscriber.component.ts ***!
  \*******************************************************************/
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
        template: __webpack_require__(/*! ./subscriber.component.html */ "./src/app/dj-view/tokbox/subscriber/subscriber.component.html"),
        styles: [__webpack_require__(/*! ./subscriber.component.css */ "./src/app/dj-view/tokbox/subscriber/subscriber.component.css")]
    }),
    __metadata("design:paramtypes", [])
], SubscriberComponent);
exports.SubscriberComponent = SubscriberComponent;


/***/ })

}]);
//# sourceMappingURL=app-dj-view-dj-view-module.js.map