(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["app-dj-dj-module"],{

/***/ "./src/app/dj/chat/chat.component.css":
/*!********************************************!*\
  !*** ./src/app/dj/chat/chat.component.css ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "b {\n  color: #999a9b;\n}\n\n.example1 {\n     height: 50px;\t\n     overflow: hidden;\n     position: relative;\n    }\n\n.example1 h3 {\n     font-size: 3em;\n     color: limegreen;\n     position: absolute;\n     width: 100%;\n     height: 100%;\n     margin: 0;\n     line-height: 50px;\n     text-align: center;\n     /* Starting position */\n     -webkit-transform:translateX(100%);\t\n     transform:translateX(100%);\n     /* Apply animation to this element */\n     -webkit-animation: example1 15s linear infinite;\n     animation: example1 15s linear infinite;\n    }\n\n/* Move it (define the animation) */\n\n@-webkit-keyframes example1 {\n     0%   { -webkit-transform: translateX(100%); }\n     100% { -webkit-transform: translateX(-100%); }\n    }\n\n@keyframes example1 {\n     0%   { /* Firefox bug fix */\n     -webkit-transform: translateX(100%); /* Firefox bug fix */\n     transform: translateX(100%); \t\t\n     }\n     100% { /* Firefox bug fix */\n     -webkit-transform: translateX(-100%); /* Firefox bug fix */\n     transform: translateX(-100%); \n     }\n    }"

/***/ }),

/***/ "./src/app/dj/chat/chat.component.html":
/*!*********************************************!*\
  !*** ./src/app/dj/chat/chat.component.html ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n\n\n<div class=\"card border-0 rounded\" style=\"box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.10), 0 6px 10px 0 rgba(0, 0, 0, 0.01); overflow: hidden; height: 75vh;\">\n\n  <div class=\"card-header p-1 bg-light border border-top-0 border-left-0 border-right-0\" style=\"color: rgba(96, 125, 139,1.0);\">\n\n    <img class=\"rounded float-left\" style=\"width: 50px; height: 50px;\" src={{profile.photo.value}} />\n\n    <h6 class=\"float-left\" style=\"margin: 0px; margin-left: 10px;\"><i class=\"fa fa-check text-primary\"\n        title=\"Onaylanmış Hesap!\" aria-hidden=\"true\"></i> <br><small>{{profile.userName}}{{profile.lastName}}</small></h6>\n\n\n  </div>\n\n  <div class=\"card bg-sohbet border-0 m-0 p-0\" style=\"height: 100vh;\">\n    <div id=\"sohbet\" class=\"card border-0 m-0 p-0 position-relative bg-transparent\" style=\"overflow-y: auto; height: 100vh;\" *ngFor=\"let message of chatMessages\">\n      <div *ngIf=\"message.id !== profile.googleid\">\n        <div class=\"balon1 p-2 m-0 position-relative\">\n          <b class=\"float-right\">{{message.userName}} {{message.lastName}}</b>\n          <a class=\"float-right\">{{message.message}}</a>\n        </div>\n      </div>\n      <div *ngIf=\"message.id === profile.googleid\">\n        <div class=\"balon2 p-2 m-0 position-relative\">\n          <b>{{message.userName}} {{message.lastName}}</b>\n          <a class=\"float-left sohbet2\">{{message.message}}</a>\n        </div>\n      </div>\n    </div>\n  </div>\n\n  <div class=\"w-100 card-footer p-0 bg-light border border-bottom-0 border-left-0 border-right-0\">\n\n    <form class=\"m-0 p-0\" action=\"\" method=\"POST\" autocomplete=\"off\">\n\n      <div class=\"row m-0 p-0\">\n        <div class=\"col-9 m-0 p-1\">\n\n            <input id=\"text\" class=\"mw-100 border rounded form-control\" type=\"text\" name=\"text\" title=\"Type a message...\"\n            placeholder=\"Type a message...\" required [(ngModel)]=\"messageToSend\">\n\n        </div>\n        <div class=\"col-3 m-0 p-1\">\n\n          <button class=\"btn btn-outline-secondary rounded border w-100\" title=\"Gönder!\" style=\"padding-right: 16px;\" (click)=\"sendChatMessage()\"><i class=\"fa fa-paper-plane\"\n            aria-hidden=\"true\" ></i>Send!</button>\n\n        </div>\n      </div>\n\n    </form>\n\n  </div>\n\n</div>\n\n\n<!-- HTML -->\n<div class=\"example1\">\n  <h3>{{this.currentSongs[this.count -1].name}}</h3>\n</div>\n<input type=\"button\" value=\"startCast\" (click)=\"startCast()\" />\n<br>\n<iframe id='paysonContainer' allow=\"autoplay\" [src]=\"video | youtube\"></iframe>\n\n"

/***/ }),

/***/ "./src/app/dj/chat/chat.component.ts":
/*!*******************************************!*\
  !*** ./src/app/dj/chat/chat.component.ts ***!
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
const chat_service_1 = __webpack_require__(/*! src/app/services/chat.service */ "./src/app/services/chat.service.ts");
const dj_profile_service_1 = __webpack_require__(/*! src/app/services/dj-profile.service */ "./src/app/services/dj-profile.service.ts");
const http_1 = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
let ChatComponent = class ChatComponent {
    constructor(chatService, djProfileService, http) {
        this.chatService = chatService;
        this.djProfileService = djProfileService;
        this.http = http;
        this.count = 0;
        this.messageToSend = '';
        this.values = '';
        this.chatMessages = [];
        this.chatService.receiveMessages()
            .subscribe(data => {
            if (this.chatMessages.length > 6) {
                this.chatMessages.pop();
            }
            this.chatMessages.unshift(data);
        });
        this.chatService.receiveSongs()
            .subscribe(songs => {
            this.songs = songs;
        });
        this.chatService.djGetSongDetails()
            .subscribe(details => {
            this.songStartTime = details.songStartTime;
            this.songDuration = details.songDuration;
            setTimeout(() => {
                this.castContinue();
            }, details.songDuration);
        });
    }
    // trigger cast on after duration runs
    castContinue() {
        let time;
        if (this.songDuration) {
            time = this.songDuration;
            console.log(time, " in if yes");
        }
        else {
            time = 6000;
            console.log(time, " in if no");
        }
        setTimeout(() => {
            this.startCast();
        }, time * 1000);
        let counter = this.count + 1;
        if (this.songs[counter]) {
            this.count++;
        }
    }
    // start music
    startCast() {
        this.video = `https://www.youtube.com/embed/${this.songs[this.count]}?start=0&rel=0&modestbranding=1&autohide=1&mute=0&showinfo=0&controls=0&autoplay=1`;
        this.chatService.djStartCast(this.songs[this.count]);
        this.http.post('djView/songDetails', { songs: this.songs })
            .subscribe((data) => {
            this.currentSongs = data;
            this.current();
        });
    }
    current() {
        this.chatService.changeSong(this.currentSongs[this.count - 1].photo);
    }
    ngOnInit() {
        this.chatService.createRoom("hey");
        this.djProfileService.getProfileInfo()
            .subscribe(profile => {
            this.profile = profile;
        });
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
ChatComponent = __decorate([
    core_1.Component({
        selector: 'app-chat',
        template: __webpack_require__(/*! ./chat.component.html */ "./src/app/dj/chat/chat.component.html"),
        styles: [__webpack_require__(/*! ./chat.component.css */ "./src/app/dj/chat/chat.component.css")]
    }),
    __metadata("design:paramtypes", [chat_service_1.ChatService,
        dj_profile_service_1.DjProfileService,
        http_1.HttpClient])
], ChatComponent);
exports.ChatComponent = ChatComponent;


/***/ }),

/***/ "./src/app/dj/dj-routing.module.ts":
/*!*****************************************!*\
  !*** ./src/app/dj/dj-routing.module.ts ***!
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
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
const router_1 = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
const main_component_1 = __webpack_require__(/*! ./main/main.component */ "./src/app/dj/main/main.component.ts");
const search_component_1 = __webpack_require__(/*! ./search/search.component */ "./src/app/dj/search/search.component.ts");
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
    }
];
let DjRoutingModule = class DjRoutingModule {
};
DjRoutingModule = __decorate([
    core_1.NgModule({
        imports: [router_1.RouterModule.forChild(routes)],
        exports: [router_1.RouterModule]
    })
], DjRoutingModule);
exports.DjRoutingModule = DjRoutingModule;


/***/ }),

/***/ "./src/app/dj/dj.module.ts":
/*!*********************************!*\
  !*** ./src/app/dj/dj.module.ts ***!
  \*********************************/
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
const dj_routing_module_1 = __webpack_require__(/*! ./dj-routing.module */ "./src/app/dj/dj-routing.module.ts");
const soundplayer_component_1 = __webpack_require__(/*! ./soundplayer/soundplayer.component */ "./src/app/dj/soundplayer/soundplayer.component.ts");
const profile_component_1 = __webpack_require__(/*! ./profile/profile.component */ "./src/app/dj/profile/profile.component.ts");
const main_component_1 = __webpack_require__(/*! ./main/main.component */ "./src/app/dj/main/main.component.ts");
const search_component_1 = __webpack_require__(/*! ./search/search.component */ "./src/app/dj/search/search.component.ts");
const forms_1 = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
const opentok_service_1 = __webpack_require__(/*! ../services/opentok.service */ "./src/app/services/opentok.service.ts");
const app_component_1 = __webpack_require__(/*! ./tokbox/app.component */ "./src/app/dj/tokbox/app.component.ts");
const subscriber_component_1 = __webpack_require__(/*! ./tokbox/subscriber/subscriber.component */ "./src/app/dj/tokbox/subscriber/subscriber.component.ts");
const publisher_component_1 = __webpack_require__(/*! ./tokbox/publisher/publisher.component */ "./src/app/dj/tokbox/publisher/publisher.component.ts");
const chat_component_1 = __webpack_require__(/*! ./chat/chat.component */ "./src/app/dj/chat/chat.component.ts");
const youtube_pipe_1 = __webpack_require__(/*! ../pipes/youtube.pipe */ "./src/app/pipes/youtube.pipe.ts");
let DjModule = class DjModule {
};
DjModule = __decorate([
    core_1.NgModule({
        imports: [
            common_1.CommonModule,
            dj_routing_module_1.DjRoutingModule,
            forms_1.FormsModule,
        ],
        declarations: [
            soundplayer_component_1.SoundplayerComponent,
            profile_component_1.ProfileComponent,
            main_component_1.MainComponent,
            search_component_1.SearchComponent,
            app_component_1.AppComponent,
            subscriber_component_1.SubscriberComponent,
            publisher_component_1.PublisherComponent,
            chat_component_1.ChatComponent,
            youtube_pipe_1.YoutubePipe,
        ],
        providers: [opentok_service_1.OpentokService]
    })
], DjModule);
exports.DjModule = DjModule;


/***/ }),

/***/ "./src/app/dj/main/main.component.css":
/*!********************************************!*\
  !*** ./src/app/dj/main/main.component.css ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/dj/main/main.component.html":
/*!*********************************************!*\
  !*** ./src/app/dj/main/main.component.html ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<router-outlet></router-outlet>\n\n\n  <app-profile></app-profile>\n  \n  <app-soundplayer></app-soundplayer>\n  <br>\n  <div>\n    <app-chat></app-chat>\n      <dj-tokbox></dj-tokbox>\n  </div>"

/***/ }),

/***/ "./src/app/dj/main/main.component.ts":
/*!*******************************************!*\
  !*** ./src/app/dj/main/main.component.ts ***!
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
let MainComponent = class MainComponent {
    constructor() { }
    ngOnInit() {
    }
};
MainComponent = __decorate([
    core_1.Component({
        selector: 'app-main',
        template: __webpack_require__(/*! ./main.component.html */ "./src/app/dj/main/main.component.html"),
        styles: [__webpack_require__(/*! ./main.component.css */ "./src/app/dj/main/main.component.css")]
    }),
    __metadata("design:paramtypes", [])
], MainComponent);
exports.MainComponent = MainComponent;


/***/ }),

/***/ "./src/app/dj/profile/profile.component.css":
/*!**************************************************!*\
  !*** ./src/app/dj/profile/profile.component.css ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/dj/profile/profile.component.html":
/*!***************************************************!*\
  !*** ./src/app/dj/profile/profile.component.html ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- <div id=\"container_image\" class=\"profile-block\">\n  <img alt=\"user-profile-image\" class=\"image-landing blur-me\" height=\"350\" id=\"main_image\" src={{profile.photo.value}} />\n\n  <button type=\"button\" class=\"btn btn-default back-button\" aria-label=\"Left Align\" routerLink=\"comment\">\n    <span class=\"glyphicon glyphicon-menu-left\" aria-hidden=\"true\"></span>\n  </button>\n\n  <h3 class=\"user-location\">{{profile.bio}}</h3>\n  <h1 class=\"station-name\">{{profile.firstname}} {{profile.lasttname}}</h1>\n\n  <img id =\"lilpic\"alt=\"user-profile-image\" class=\"image-landing\" id=\"overlay_image\" height=\"150\" src={{profile.photo.value}} />\n  <div id=\"overlay_image_list\">\n    <br>\n    <br>\n    <nav>\n      <ol class=\"breadcrumb\">\n        <li class=\"breadcrumb-item\">\n          <a href=\"#\">Bio</a>\n        </li>\n        <li class=\"breadcrumb-item\">\n          <a href=\"#\">Likes</a>\n          <p>{{profile.Followercount}}</p>\n        </li>\n        <li class=\"breadcrumb-item\">\n          <a href=\"#\">Followers</a>\n          <p>{{profile.Followercount}}</p>\n        </li>\n        <li class=\"breadcrumb-item\">\n          <a href=\"#\">Rating</a>\n        </li>\n          <li>\n          {{profile | json}}\n        </li> \n      </ol>\n    </nav>\n  </div>\n</div> -->\n<header class=\"masthead\">\n  <div class=\"overlay\"></div>\n  <div class=\"container\">\n    <div class=\"row\">\n      <div class=\"col-lg-8 col-md-10 mx-auto\">\n        <div class=\"site-heading\">\n          <h1>{{profile.firstname}} {{profile.lasttname}}</h1>\n          <span class=\"subheading\">{{profile.bio}}</span>\n        </div>\n      </div>\n    </div>\n  </div>\n</header>"

/***/ }),

/***/ "./src/app/dj/profile/profile.component.ts":
/*!*************************************************!*\
  !*** ./src/app/dj/profile/profile.component.ts ***!
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
const dj_profile_service_1 = __webpack_require__(/*! ../../services/dj-profile.service */ "./src/app/services/dj-profile.service.ts");
let ProfileComponent = class ProfileComponent {
    constructor(djProfileService) {
        this.djProfileService = djProfileService;
    }
    ngOnInit() {
        this.djProfileService.getProfileInfo()
            .subscribe(profile => {
            this.profile = profile;
        });
    }
    session() {
    }
};
ProfileComponent = __decorate([
    core_1.Component({
        selector: 'app-profile',
        template: __webpack_require__(/*! ./profile.component.html */ "./src/app/dj/profile/profile.component.html"),
        styles: [__webpack_require__(/*! ./profile.component.css */ "./src/app/dj/profile/profile.component.css")]
    }),
    __metadata("design:paramtypes", [dj_profile_service_1.DjProfileService])
], ProfileComponent);
exports.ProfileComponent = ProfileComponent;


/***/ }),

/***/ "./src/app/dj/search/search.component.css":
/*!************************************************!*\
  !*** ./src/app/dj/search/search.component.css ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/dj/search/search.component.html":
/*!*************************************************!*\
  !*** ./src/app/dj/search/search.component.html ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<a (click)=\"backClicked()\">\n  <i class=\"material-icons\">\n    clear\n  </i>\n</a>\n<h1>Add Tracks</h1>\n<input type=\"text\">\n<h3>tracks</h3>"

/***/ }),

/***/ "./src/app/dj/search/search.component.ts":
/*!***********************************************!*\
  !*** ./src/app/dj/search/search.component.ts ***!
  \***********************************************/
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
        template: __webpack_require__(/*! ./search.component.html */ "./src/app/dj/search/search.component.html"),
        styles: [__webpack_require__(/*! ./search.component.css */ "./src/app/dj/search/search.component.css")]
    }),
    __metadata("design:paramtypes", [common_1.Location])
], SearchComponent);
exports.SearchComponent = SearchComponent;


/***/ }),

/***/ "./src/app/dj/soundplayer/soundplayer.component.css":
/*!**********************************************************!*\
  !*** ./src/app/dj/soundplayer/soundplayer.component.css ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".img-landing {\n    width: auto;\n    display: block;\n    margin-left: auto;\n    margin-right: auto;\n    border-radius: 20px;\n}\n.breadcrumb{\n    background-color: white;\n    text-align: center;\n}\n.album-block{\n    background-color: black;\n    width: auto;\n    display: block;\n}\n#soundboard-button{\n    background-color: rgb(0, 0, 0, 0.10);\n    padding: 1em;\n    margin: 1em;\n}\n/* styles for ticker  */\n.example1 {\n    height: 50px;\t\n    overflow: hidden;\n    position: relative;\n}\n.example1 h3 {\n    font-size: 3em;\n    color: limegreen;\n    position: absolute;\n    width: 100%;\n    height: 100%;\n    margin: 0;\n    line-height: 50px;\n    text-align: center;\n    /* Starting position */\n    -webkit-transform:translateX(100%);\t\n    transform:translateX(100%);\n    /* Apply animation to this element */\n    -webkit-animation: example1 15s linear infinite;\n    animation: example1 15s linear infinite;\n}\n/* Move it (define the animation) */\n@-webkit-keyframes example1 {\n    0%   { -webkit-transform: translateX(100%); }\n    100% { -webkit-transform: translateX(-100%); }\n}\n@keyframes example1 {\n    0%   { /* Firefox bug fix */\n    -webkit-transform: translateX(100%); /* Firefox bug fix */\n    transform: translateX(100%); \t\t\n    }\n    100% { /* Firefox bug fix */\n    -webkit-transform: translateX(-100%); /* Firefox bug fix */\n    transform: translateX(-100%); \n    }\n}\n"

/***/ }),

/***/ "./src/app/dj/soundplayer/soundplayer.component.html":
/*!***********************************************************!*\
  !*** ./src/app/dj/soundplayer/soundplayer.component.html ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"album-block\">\n  <img src={{this.image}} class=\"img-landing\" height=\"350\">\n  <div class=\"example1\">  \n      <h3>test</h3>\n      </div>\n</div>\n\n\n<div class=\"container\">\n\n  <div class=\"row\">\n    <div class=\"col-lg-8 col-md-10 mx-auto\">\n      <!-- make this toggleable -->\n      <button class=\"btn btn-outline-info btn-lg btn-block\" (click)='showCasts()'>\n          Select Cast\n      </button>\n      <ul class=\"list-group\" *ngIf=\"viewedCast\">\n        <li class=\"list-group-item d-flex justify-content-between align-items-center\">\n          <button *ngFor=\"let playlist of playlists\" [attr.id]=\"playlist.id\" (click)='playlistClick($event)' type=\"button\" class=\"btn btn-outline-info btn-lg btn-block\">\n            {{playlist.name}}\n          </button>\n        </li>\n      </ul>\n  \n\n<div class=\"container-fluid\">\n  <div class=\"row\">\n    <hr>\n  </div>\n  <div id=\"createPlaylist\">\n\n    <button class=\"btn btn-outline-info btn-lg btn-block\" type=\"button\" id=\"createCast\" (click)='openNewCastComponent()'>Create Soundcast</button>\n    \n  \n    <div *ngIf=\"madeNew\">\n    <div *ngIf=\"wasNamed === false\">\n      <button type=\"button\" id=\"submitCastName\" (click)='submitCastName(text)'>Name Cast</button>\n      <input type=\"text\" [(ngModel)]=\"text\" id=\"input-field\" placeholder=\"Name your soundcast.\" />\n    </div>\n      <div *ngIf=\"wasNamed\">\n      <button type=\"button\" id=\"searchSongToCast\" (click)='searchSongToCast(search)'>Search Songs</button>\n      <input type=\"text\" [(ngModel)]=\"search\" id=\"input-field\" placeholder=\"Name your soundcast.\" />\n      <div *ngIf=\"songSelected === false\">\n        <button *ngFor=\"let result of searchResults\" [attr.id]=\"result.id\" (click)='songSelect($event)' type=\"button\" class=\"btn btn-outline-secondary btn-lg btn-block\">\n          {{result.name}}\n        </button>\n        </div>\n      </div>\n    </div>\n    </div>\n    <br>\n\n\n    \n    <br>\n    <button type=\"button\" id=\"addToCast\" (click)='addToCast()' class=\"btn btn-outline-info btn-lg btn-block\">Add to Cast</button>\n    <div *ngIf=\"wasAdded\">\n      <button type=\"button\" id=\"searchSongToCast\" (click)='searchSongToCast(search)'>Search Songs</button>\n      <input type=\"text\" [(ngModel)]=\"search\" id=\"input-field\" placeholder=\"Name your soundcast.\" />\n      <div *ngIf=\"songSelected === false\">\n        <button *ngFor=\"let result of searchResults\" [attr.id]=\"result.id\" (click)='songSelect($event)' type=\"button\" class=\"btn btn-outline-secondary btn-lg btn-block\">\n          {{result.name}}\n        </button>\n      </div>\n    </div>\n\n    <div>\n      <button class=\"btn btn-outline-info btn-lg btn-block\" (click)='showSoundboard()'>\n        <h3>SoundBoard</h3>\n      </button>\n      <ul class=\"list-group\" *ngIf=\"viewedBoard\">\n        <li class=\"list-group-item d-flex justify-content-between align-items-center\">\n          <!-- <button type=\"button\" class=\"btn btn-outline-warning btn-block\">Warning</button> -->\n          <button *ngFor=\"let sound of sounds\" (click)='soundClick($event)' type=\"button\" [attr.id]=\"sound.mediaLink\" class=\"btn btn-outline-secondary btn-lg btn-block\">\n            {{sound.name}}\n          </button>\n        </li>\n      </ul>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/dj/soundplayer/soundplayer.component.ts":
/*!*********************************************************!*\
  !*** ./src/app/dj/soundplayer/soundplayer.component.ts ***!
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
const http_1 = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
const sound_board_service_1 = __webpack_require__(/*! ../../services/sound-board.service */ "./src/app/services/sound-board.service.ts");
const chat_service_1 = __webpack_require__(/*! ../../services/chat.service */ "./src/app/services/chat.service.ts");
let SoundplayerComponent = class SoundplayerComponent {
    constructor(http, soundBite, chatService) {
        this.http = http;
        this.soundBite = soundBite;
        this.chatService = chatService;
        this.songSelected = false;
        this.viewedCast = false;
        this.viewedBoard = false;
        this.madeNew = false;
        this.wasAdded = false;
        this.wasNamed = false;
        this.sounds = [];
        this.playlists = [];
        this.searchResults = [];
    }
    ngOnInit() {
        this.http.get('/test')
            .subscribe((items) => {
            //  console.log(items);
            this.items = items;
            // return items.items.map(item => ({ name: item.name,mediaLink: item.mediaLink }));
            this.buttonMaker();
        });
        this.http.get('/djView/playlist').subscribe((info) => {
            console.log(info, " data in dj soundplayer");
            this.playlists.push(info['items']);
            info['items'].map((item) => {
                this.playlists.push({ name: item.snippet.localized.title, id: item.id });
            });
        });
        this.chatService.currentSong
            .subscribe(data => {
            this.image = data;
        });
    }
    playlistClick(event) {
        this.soundBite.playlistEmit(event.target.id);
        this.newcastid = event.target.id;
        this.viewedCast = false;
    }
    openNewCastComponent() {
        if (this.madeNew === true) {
            this.madeNew = false;
        }
        else {
            this.madeNew = true;
        }
        console.log("this will open the entire new cast creator");
    }
    searchSongToCast(song) {
        this.http.post('djView/searchSong', { song }).subscribe((data) => {
            console.log(data);
            this.searchResults = data['items'].map((songObj) => {
                return { name: songObj.snippet.title, id: songObj.id.videoId };
            });
        });
    }
    showCasts() {
        if (this.viewedCast === true) {
            this.viewedCast = false;
        }
        else {
            this.viewedCast = true;
        }
    }
    showSoundboard() {
        if (this.viewedBoard === true) {
            this.viewedBoard = false;
        }
        else {
            this.viewedBoard = true;
        }
    }
    songSelect(event) {
        this.songSelected = true;
        this.http.post('/djView/insertSong', { songId: event.target.id, playlistId: this.newcastid })
            .subscribe((data) => {
            console.log(data);
        });
    }
    submitCastName(title) {
        this.castName = title;
        this.wasNamed = true;
        this.http.post('djView/nameCast', { title }).subscribe((data) => {
            this.newcastid = data['id'];
        });
    }
    soundClick(event) {
        //  console.log(event.target.id);
        this.soundBite.soundEmit(event.target.id);
    }
    addToCast() {
        if (this.wasAdded === true) {
            this.wasAdded = false;
        }
        else {
            this.wasAdded = true;
        }
        console.log("would pop up song search");
    }
    buttonMaker() {
        this.items.items.map((item) => {
            // this.sounds.push({ name: item.name, mediaLink: item.mediaLink })
            this.sounds.push({ name: item.name.substring(-4), mediaLink: item.mediaLink });
        });
    }
};
SoundplayerComponent = __decorate([
    core_1.Component({
        selector: 'app-soundplayer',
        template: __webpack_require__(/*! ./soundplayer.component.html */ "./src/app/dj/soundplayer/soundplayer.component.html"),
        styles: [__webpack_require__(/*! ./soundplayer.component.css */ "./src/app/dj/soundplayer/soundplayer.component.css")]
    }),
    __metadata("design:paramtypes", [http_1.HttpClient, sound_board_service_1.SoundBoardService, chat_service_1.ChatService])
], SoundplayerComponent);
exports.SoundplayerComponent = SoundplayerComponent;


/***/ }),

/***/ "./src/app/dj/tokbox/app.component.css":
/*!*********************************************!*\
  !*** ./src/app/dj/tokbox/app.component.css ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "app-publisher, app-subscriber {\n  display: block;\n  float: left;\n}\n"

/***/ }),

/***/ "./src/app/dj/tokbox/app.component.html":
/*!**********************************************!*\
  !*** ./src/app/dj/tokbox/app.component.html ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h1>{{title}}</h1>\n<div *ngIf=\"session\">\n  <app-publisher [session]=\"session\"></app-publisher>\n  <!-- <app-subscriber *ngFor=\"let stream of streams\" [stream]=\"stream\" [session]=\"session\"></app-subscriber> -->\n</div>\n"

/***/ }),

/***/ "./src/app/dj/tokbox/app.component.ts":
/*!********************************************!*\
  !*** ./src/app/dj/tokbox/app.component.ts ***!
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
const opentok_service_1 = __webpack_require__(/*! ../../services/opentok.service */ "./src/app/services/opentok.service.ts");
const io = __webpack_require__(/*! socket.io-client */ "./node_modules/socket.io-client/lib/index.js");
const config_js_1 = __webpack_require__(/*! ../../config.js */ "./src/app/config.js");
let AppComponent = class AppComponent {
    constructor(ref, opentokService) {
        this.ref = ref;
        this.opentokService = opentokService;
        this.title = null;
        this.streams = [];
        // private socket = io(`http://localhost:3000`)
        this.socket = io();
        this.changeDetectorRef = ref;
    }
    ngOnInit() {
        this.socket.on('tokSession', (sessionId, token) => {
            this.sessionId = sessionId;
            this.fireSession(this.sessionId, token);
        });
    }
    fireSession(sessionId, token) {
        const { API_KEY } = config_js_1.default;
        this.opentokService.initSession(API_KEY, sessionId, token)
            .then((sessionId) => {
            this.session = sessionId;
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
        template: __webpack_require__(/*! ./app.component.html */ "./src/app/dj/tokbox/app.component.html"),
        styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/dj/tokbox/app.component.css")],
        providers: [opentok_service_1.OpentokService]
    }),
    __metadata("design:paramtypes", [core_1.ChangeDetectorRef,
        opentok_service_1.OpentokService])
], AppComponent);
exports.AppComponent = AppComponent;


/***/ }),

/***/ "./src/app/dj/tokbox/publisher/publisher.component.css":
/*!*************************************************************!*\
  !*** ./src/app/dj/tokbox/publisher/publisher.component.css ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/dj/tokbox/publisher/publisher.component.html":
/*!**************************************************************!*\
  !*** ./src/app/dj/tokbox/publisher/publisher.component.html ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div [ngClass]=\"{'publishing': publishing}\" #publisherDiv></div>\n"

/***/ }),

/***/ "./src/app/dj/tokbox/publisher/publisher.component.ts":
/*!************************************************************!*\
  !*** ./src/app/dj/tokbox/publisher/publisher.component.ts ***!
  \************************************************************/
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
const opentok_service_1 = __webpack_require__(/*! ../../../services/opentok.service */ "./src/app/services/opentok.service.ts");
const publish = () => {
};
let PublisherComponent = class PublisherComponent {
    constructor(opentokService) {
        this.opentokService = opentokService;
        this.publishing = false;
    }
    ngAfterViewInit() {
        const OT = this.opentokService.getOT();
        this.publishOptions = {
            videoSource: null, insertMode: 'append', height: "10%",
            width: "10%"
        };
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
        template: __webpack_require__(/*! ./publisher.component.html */ "./src/app/dj/tokbox/publisher/publisher.component.html"),
        styles: [__webpack_require__(/*! ./publisher.component.css */ "./src/app/dj/tokbox/publisher/publisher.component.css")]
    }),
    __metadata("design:paramtypes", [opentok_service_1.OpentokService])
], PublisherComponent);
exports.PublisherComponent = PublisherComponent;


/***/ }),

/***/ "./src/app/dj/tokbox/subscriber/subscriber.component.css":
/*!***************************************************************!*\
  !*** ./src/app/dj/tokbox/subscriber/subscriber.component.css ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/dj/tokbox/subscriber/subscriber.component.html":
/*!****************************************************************!*\
  !*** ./src/app/dj/tokbox/subscriber/subscriber.component.html ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div #subscriberDiv></div>\n"

/***/ }),

/***/ "./src/app/dj/tokbox/subscriber/subscriber.component.ts":
/*!**************************************************************!*\
  !*** ./src/app/dj/tokbox/subscriber/subscriber.component.ts ***!
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
        template: __webpack_require__(/*! ./subscriber.component.html */ "./src/app/dj/tokbox/subscriber/subscriber.component.html"),
        styles: [__webpack_require__(/*! ./subscriber.component.css */ "./src/app/dj/tokbox/subscriber/subscriber.component.css")]
    }),
    __metadata("design:paramtypes", [])
], SubscriberComponent);
exports.SubscriberComponent = SubscriberComponent;


/***/ })

}]);
//# sourceMappingURL=app-dj-dj-module.js.map