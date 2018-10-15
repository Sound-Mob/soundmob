(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["common"],{

/***/ "./src/app/services/sound-board.service.ts":
/*!*************************************************!*\
  !*** ./src/app/services/sound-board.service.ts ***!
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
const io = __webpack_require__(/*! socket.io-client */ "./node_modules/socket.io-client/lib/index.js");
const rxjs_1 = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
let SoundBoardService = class SoundBoardService {
    constructor() {
        this.socket = io('ws://localhost:3000', { transports: ['websocket'] });
    }
    soundEmit(sound) {
        this.socket.emit('soundEmit', sound);
    }
    soundReceive() {
        let observable = new rxjs_1.Observable(observer => {
            this.socket.on('soundRelay', (data) => {
                observer.next(data);
            });
        });
        return observable;
    }
};
SoundBoardService = __decorate([
    core_1.Injectable({
        providedIn: 'root'
    }),
    __metadata("design:paramtypes", [])
], SoundBoardService);
exports.SoundBoardService = SoundBoardService;


/***/ })

}]);
//# sourceMappingURL=common.js.map