(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["app-listener-listener-module"],{

/***/ "./src/app/listener/listener-chat/listener-chat.component.css":
/*!********************************************************************!*\
  !*** ./src/app/listener/listener-chat/listener-chat.component.css ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/listener/listener-chat/listener-chat.component.html":
/*!*********************************************************************!*\
  !*** ./src/app/listener/listener-chat/listener-chat.component.html ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ul>\n  <li *ngFor=\"let message of chatMessages\">\n    <b>{{message.userName}} {{message.lastName}}:</b>\n    <p>{{message.message}}</p>\n  </li>\n</ul>\n\n<input type=\"text\" [(ngModel)]=\"messageToSend\">\n<button (click)=\"sendChatMessage()\">Send!</button>\n<button class=\"btun\" (click)=\"getMessage()\">get</button>"

/***/ }),

/***/ "./src/app/listener/listener-chat/listener-chat.component.ts":
/*!*******************************************************************!*\
  !*** ./src/app/listener/listener-chat/listener-chat.component.ts ***!
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
const chat_service_1 = __webpack_require__(/*! ../../services/chat.service */ "./src/app/services/chat.service.ts");
let ListenerChatComponent = class ListenerChatComponent {
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
ListenerChatComponent = __decorate([
    core_1.Component({
        selector: 'app-listener-chat',
        template: __webpack_require__(/*! ./listener-chat.component.html */ "./src/app/listener/listener-chat/listener-chat.component.html"),
        styles: [__webpack_require__(/*! ./listener-chat.component.css */ "./src/app/listener/listener-chat/listener-chat.component.css")]
    }),
    __metadata("design:paramtypes", [chat_service_1.ChatService])
], ListenerChatComponent);
exports.ListenerChatComponent = ListenerChatComponent;


/***/ }),

/***/ "./src/app/listener/listener-routing.module.ts":
/*!*****************************************************!*\
  !*** ./src/app/listener/listener-routing.module.ts ***!
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
const listener_component_1 = __webpack_require__(/*! ./listener.component */ "./src/app/listener/listener.component.ts");
const routes = [
    { path: '', component: listener_component_1.ListenerComponent },
];
let ListenerRoutingModule = class ListenerRoutingModule {
};
ListenerRoutingModule = __decorate([
    core_1.NgModule({
        imports: [router_1.RouterModule.forChild(routes)],
        exports: [router_1.RouterModule]
    })
], ListenerRoutingModule);
exports.ListenerRoutingModule = ListenerRoutingModule;


/***/ }),

/***/ "./src/app/listener/listener.component.css":
/*!*************************************************!*\
  !*** ./src/app/listener/listener.component.css ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/* #listenertok {\n  display: none;\n} */"

/***/ }),

/***/ "./src/app/listener/listener.component.html":
/*!**************************************************!*\
  !*** ./src/app/listener/listener.component.html ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<router-outlet></router-outlet>\n<audio autoplay [src]=\"sound | youtube \"></audio>\n\n\n<div class=\"container\">\n  <div class=\"row\">\n    <div class=\"col-sm-2\">\n    </div>\n    <div class=\"col-sm-8\">\n      <app-profile></app-profile>\n      <br>\n      <app-soundplayer></app-soundplayer>\n      <br>\n      <app-listener-chat></app-listener-chat>\n      <br>\n      <app-tokbox id=\"listenertok\"></app-tokbox>\n    </div>\n    <div class=\"col-sm-2\">\n    </div>\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/listener/listener.component.ts":
/*!************************************************!*\
  !*** ./src/app/listener/listener.component.ts ***!
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
const sound_board_service_1 = __webpack_require__(/*! ../services/sound-board.service */ "./src/app/services/sound-board.service.ts");
let ListenerComponent = class ListenerComponent {
    constructor(soundBoard) {
        this.soundBoard = soundBoard;
        this.sound = '';
    }
    ngOnInit() {
        this.soundBoard.soundReceive()
            .subscribe(data => {
            console.log('it hits');
            this.sound = data.toString();
        });
    }
};
__decorate([
    core_1.Input(),
    __metadata("design:type", String)
], ListenerComponent.prototype, "sai", void 0);
ListenerComponent = __decorate([
    core_1.Component({
        selector: 'app-king',
        template: __webpack_require__(/*! ./listener.component.html */ "./src/app/listener/listener.component.html"),
        styles: [__webpack_require__(/*! ./listener.component.css */ "./src/app/listener/listener.component.css")]
    }),
    __metadata("design:paramtypes", [sound_board_service_1.SoundBoardService])
], ListenerComponent);
exports.ListenerComponent = ListenerComponent;


/***/ }),

/***/ "./src/app/listener/listener.module.ts":
/*!*********************************************!*\
  !*** ./src/app/listener/listener.module.ts ***!
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
const listener_routing_module_1 = __webpack_require__(/*! ./listener-routing.module */ "./src/app/listener/listener-routing.module.ts");
const listener_component_1 = __webpack_require__(/*! ./listener.component */ "./src/app/listener/listener.component.ts");
const profile_component_1 = __webpack_require__(/*! ./profile/profile.component */ "./src/app/listener/profile/profile.component.ts");
const soundplayer_component_1 = __webpack_require__(/*! ./soundplayer/soundplayer.component */ "./src/app/listener/soundplayer/soundplayer.component.ts");
const app_component_1 = __webpack_require__(/*! ./tokbox/app.component */ "./src/app/listener/tokbox/app.component.ts");
const publisher_component_1 = __webpack_require__(/*! ./tokbox/publisher/publisher.component */ "./src/app/listener/tokbox/publisher/publisher.component.ts");
const subscriber_component_1 = __webpack_require__(/*! ./tokbox/subscriber/subscriber.component */ "./src/app/listener/tokbox/subscriber/subscriber.component.ts");
const forms_1 = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
const listener_chat_component_1 = __webpack_require__(/*! ./listener-chat/listener-chat.component */ "./src/app/listener/listener-chat/listener-chat.component.ts");
const youtube_pipe_1 = __webpack_require__(/*! ../pipes/youtube.pipe */ "./src/app/pipes/youtube.pipe.ts");
let ListenerModule = class ListenerModule {
};
ListenerModule = __decorate([
    core_1.NgModule({
        imports: [
            common_1.CommonModule,
            listener_routing_module_1.ListenerRoutingModule,
            forms_1.FormsModule,
        ],
        declarations: [
            listener_component_1.ListenerComponent,
            profile_component_1.ProfileComponent,
            soundplayer_component_1.SoundplayerComponent,
            app_component_1.AppComponent,
            subscriber_component_1.SubscriberComponent,
            publisher_component_1.PublisherComponent,
            youtube_pipe_1.YoutubePipe,
            listener_chat_component_1.ListenerChatComponent
        ]
    })
], ListenerModule);
exports.ListenerModule = ListenerModule;


/***/ }),

/***/ "./src/app/listener/profile/profile.component.css":
/*!********************************************************!*\
  !*** ./src/app/listener/profile/profile.component.css ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/listener/profile/profile.component.html":
/*!*********************************************************!*\
  !*** ./src/app/listener/profile/profile.component.html ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div id=\"container_image\" class=\"profile-block\">\n  <img alt=\"user-profile-image\" class=\"image-landing blur-me\" height=\"350\" id=\"main_image\" src=\"https://pbs.twimg.com/profile_images/986327929453006848/c5ShdmQS_400x400.jpg\" />\n\n  <button type=\"button\" class=\"btn btn-default back-button\" aria-label=\"Left Align\" routerLink=\"comment\">\n    <span class=\"glyphicon glyphicon-menu-left\" aria-hidden=\"true\"></span>\n  </button>\n\n  <h3 class=\"user-location\">New Orleans</h3>\n  <h1 class=\"station-name\">Yeezy2k18</h1>\n\n  <img alt=\"user-profile-image\" class=\"image-landing\" id=\"overlay_image\" height=\"150\" src=\"https://pbs.twimg.com/profile_images/986327929453006848/c5ShdmQS_400x400.jpg\" />\n  <div id=\"overlay_image_list\">\n    <br>\n    <br>\n    <nav>\n      <ol class=\"breadcrumb\">\n        <li class=\"breadcrumb-item\">\n          <a href=\"#\">Bio</a>\n        </li>\n        <li class=\"breadcrumb-item\">\n          <a href=\"#\">Likes</a>\n        </li>\n        <li class=\"breadcrumb-item\">\n          <a href=\"#\">Followers</a>\n        </li>\n        <li class=\"breadcrumb-item\">\n          <a href=\"#\">Rating</a>\n        </li>\n      </ol>\n    </nav>\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/listener/profile/profile.component.ts":
/*!*******************************************************!*\
  !*** ./src/app/listener/profile/profile.component.ts ***!
  \*******************************************************/
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
    profile() {
    }
};
ProfileComponent = __decorate([
    core_1.Component({
        selector: 'app-profile',
        template: __webpack_require__(/*! ./profile.component.html */ "./src/app/listener/profile/profile.component.html"),
        styles: [__webpack_require__(/*! ./profile.component.css */ "./src/app/listener/profile/profile.component.css")]
    }),
    __metadata("design:paramtypes", [])
], ProfileComponent);
exports.ProfileComponent = ProfileComponent;


/***/ }),

/***/ "./src/app/listener/soundplayer/soundplayer.component.css":
/*!****************************************************************!*\
  !*** ./src/app/listener/soundplayer/soundplayer.component.css ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".img-landing {\n    width: auto;\n    display: block;\n    margin-left: auto;\n    margin-right: auto;\n    border-radius: 20px;\n}\n.breadcrumb{\n    background-color: white;\n    text-align: center;\n}\n.album-block{\n    background-color: black;\n    width: auto;\n    display: block;\n}"

/***/ }),

/***/ "./src/app/listener/soundplayer/soundplayer.component.html":
/*!*****************************************************************!*\
  !*** ./src/app/listener/soundplayer/soundplayer.component.html ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- <div> -->\n\n  <iframe id='paysonContainer' allow=\"autoplay\" [src]=\"video | youtube\"></iframe>\n\n\n  <!-- <div>\n    <a>\n      <i class=\"material-icons\">\n        favorite_border\n      </i>\n    </a>\n    <a>\n      <i class=\"material-icons\">\n        chat_bubble_outline\n      </i>\n    </a>\n    <p>#inMyFeelings</p>\n  </div>\n\n</div> -->\n"

/***/ }),

/***/ "./src/app/listener/soundplayer/soundplayer.component.ts":
/*!***************************************************************!*\
  !*** ./src/app/listener/soundplayer/soundplayer.component.ts ***!
  \***************************************************************/
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
const chat_service_1 = __webpack_require__(/*! ../../services/chat.service */ "./src/app/services/chat.service.ts");
let SoundplayerComponent = class SoundplayerComponent {
    constructor(chatService) {
        this.chatService = chatService;
        this.videos = [
            {
                title: 'mazda',
                video: 'https://www.youtube.com/embed/KgtizhlbIOQ?start=7&rel=0&modestbranding=1&autohide=1&mute=0&showinfo=0&controls=0&autoplay=1'
            },
            {
                title: 'honda',
                video: 'https://www.youtube.com/embed/KgtizhlbIOQ?start=7&rel=0&modestbranding=1&autohide=1&mute=0&showinfo=0&controls=0&autoplay=1'
            }
        ];
        this.chatService.listenerReceiveSongDetails()
            .subscribe(songinfo => {
            // console.log(" start time ready for vid");
            let startAt = songinfo['listenerStartTime'] - songinfo['songinfo'][0].starttime;
            if (startAt < 0 || startAt === null) {
                startAt = 0;
            }
            // console.log( {songinfo, startAt}, " song info in received");
            this.video = `https://www.youtube.com/embed/${songinfo['songinfo'][0].songid}?start=${startAt}&rel=0&modestbranding=1&autohide=1&mute=0&showinfo=0&controls=0&autoplay=1`;
        });
    }
    ngOnInit() {
        this.chatService.listenerGetSongDetails();
    }
};
SoundplayerComponent = __decorate([
    core_1.Component({
        selector: 'app-soundplayer',
        template: __webpack_require__(/*! ./soundplayer.component.html */ "./src/app/listener/soundplayer/soundplayer.component.html"),
        styles: [__webpack_require__(/*! ./soundplayer.component.css */ "./src/app/listener/soundplayer/soundplayer.component.css")]
    }),
    __metadata("design:paramtypes", [chat_service_1.ChatService])
], SoundplayerComponent);
exports.SoundplayerComponent = SoundplayerComponent;


/***/ }),

/***/ "./src/app/listener/tokbox/app.component.css":
/*!***************************************************!*\
  !*** ./src/app/listener/tokbox/app.component.css ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "app-publisher, app-subscriber {\n  display: block;\n  float: left;\n}\n"

/***/ }),

/***/ "./src/app/listener/tokbox/app.component.html":
/*!****************************************************!*\
  !*** ./src/app/listener/tokbox/app.component.html ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h1>{{title}}</h1>\n<div *ngIf=\"session\">\n  <!-- <app-publisher [session]=\"session\"></app-publisher> -->\n  <app-subscriber *ngFor=\"let stream of streams\" [stream]=\"stream\" [session]=\"session\"></app-subscriber>\n</div>\n"

/***/ }),

/***/ "./src/app/listener/tokbox/app.component.ts":
/*!**************************************************!*\
  !*** ./src/app/listener/tokbox/app.component.ts ***!
  \**************************************************/
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
const config_js_1 = __webpack_require__(/*! ../../config.js */ "./src/app/config.js");
const opentok_service_1 = __webpack_require__(/*! ../../services/opentok.service */ "./src/app/services/opentok.service.ts");
const chat_service_1 = __webpack_require__(/*! ../../services/chat.service */ "./src/app/services/chat.service.ts");
let AppComponent = class AppComponent {
    constructor(ref, opentokService, chatService) {
        this.ref = ref;
        this.opentokService = opentokService;
        this.chatService = chatService;
        this.title = 'Angular Basic Video Chat';
        this.streams = [];
        this.changeDetectorRef = ref;
    }
    ngOnInit() {
        this.chatService.receiveDjInfo().subscribe(djInfo => {
            // console.log(djInfo, " in observable in listener component")
            this.tokSession = djInfo[0].sessionid;
            this.tokToken = djInfo[0].sessiontoken;
            this.fireSession(djInfo[0].sessionid, djInfo[0].sessiontoken);
            // console.log(this.tokToken, this.tokSession, 'these the session')
        });
        this.chatService.getDjInfo();
    }
    fireSession(sessionId, token) {
        // console.log(sessionId, " in fire")
        const { API_KEY } = config_js_1.default;
        // console.log(token, " TOKEN in fire session")
        this.opentokService.initSession(API_KEY, sessionId, token)
            .then((sessionId) => {
            // console.log(sessionId, " in fire session callback")
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
        selector: 'app-tokbox',
        template: __webpack_require__(/*! ./app.component.html */ "./src/app/listener/tokbox/app.component.html"),
        styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/listener/tokbox/app.component.css")],
        providers: [opentok_service_1.OpentokService]
    }),
    __metadata("design:paramtypes", [core_1.ChangeDetectorRef,
        opentok_service_1.OpentokService,
        chat_service_1.ChatService])
], AppComponent);
exports.AppComponent = AppComponent;


/***/ }),

/***/ "./src/app/listener/tokbox/publisher/publisher.component.css":
/*!*******************************************************************!*\
  !*** ./src/app/listener/tokbox/publisher/publisher.component.css ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/listener/tokbox/publisher/publisher.component.html":
/*!********************************************************************!*\
  !*** ./src/app/listener/tokbox/publisher/publisher.component.html ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div [ngClass]=\"{'publishing': publishing}\" #publisherDiv></div>\n"

/***/ }),

/***/ "./src/app/listener/tokbox/publisher/publisher.component.ts":
/*!******************************************************************!*\
  !*** ./src/app/listener/tokbox/publisher/publisher.component.ts ***!
  \******************************************************************/
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
        template: __webpack_require__(/*! ./publisher.component.html */ "./src/app/listener/tokbox/publisher/publisher.component.html"),
        styles: [__webpack_require__(/*! ./publisher.component.css */ "./src/app/listener/tokbox/publisher/publisher.component.css")]
    }),
    __metadata("design:paramtypes", [opentok_service_1.OpentokService])
], PublisherComponent);
exports.PublisherComponent = PublisherComponent;


/***/ }),

/***/ "./src/app/listener/tokbox/subscriber/subscriber.component.css":
/*!*********************************************************************!*\
  !*** ./src/app/listener/tokbox/subscriber/subscriber.component.css ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/listener/tokbox/subscriber/subscriber.component.html":
/*!**********************************************************************!*\
  !*** ./src/app/listener/tokbox/subscriber/subscriber.component.html ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div #subscriberDiv></div>\n"

/***/ }),

/***/ "./src/app/listener/tokbox/subscriber/subscriber.component.ts":
/*!********************************************************************!*\
  !*** ./src/app/listener/tokbox/subscriber/subscriber.component.ts ***!
  \********************************************************************/
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
        template: __webpack_require__(/*! ./subscriber.component.html */ "./src/app/listener/tokbox/subscriber/subscriber.component.html"),
        styles: [__webpack_require__(/*! ./subscriber.component.css */ "./src/app/listener/tokbox/subscriber/subscriber.component.css")]
    }),
    __metadata("design:paramtypes", [])
], SubscriberComponent);
exports.SubscriberComponent = SubscriberComponent;


/***/ })

}]);
//# sourceMappingURL=app-listener-listener-module.js.map