(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["app-king-king-module"],{

/***/ "./src/app/king/king-routing.module.ts":
/*!*********************************************!*\
  !*** ./src/app/king/king-routing.module.ts ***!
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
const router_1 = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
const king_component_1 = __webpack_require__(/*! ./king.component */ "./src/app/king/king.component.ts");
const routes = [
    { path: '', component: king_component_1.KingComponent }
];
let KingRoutingModule = class KingRoutingModule {
};
KingRoutingModule = __decorate([
    core_1.NgModule({
        imports: [router_1.RouterModule.forChild(routes)],
        exports: [router_1.RouterModule]
    })
], KingRoutingModule);
exports.KingRoutingModule = KingRoutingModule;


/***/ }),

/***/ "./src/app/king/king.component.css":
/*!*****************************************!*\
  !*** ./src/app/king/king.component.css ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/king/king.component.html":
/*!******************************************!*\
  !*** ./src/app/king/king.component.html ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\n  king works!\n</p>\n\n\n<h2>{{sai}}</h2>"

/***/ }),

/***/ "./src/app/king/king.component.ts":
/*!****************************************!*\
  !*** ./src/app/king/king.component.ts ***!
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
let KingComponent = class KingComponent {
    constructor() {
    }
    ngOnInit() {
    }
};
__decorate([
    core_1.Input(),
    __metadata("design:type", String)
], KingComponent.prototype, "sai", void 0);
KingComponent = __decorate([
    core_1.Component({
        selector: 'app-king',
        template: __webpack_require__(/*! ./king.component.html */ "./src/app/king/king.component.html"),
        styles: [__webpack_require__(/*! ./king.component.css */ "./src/app/king/king.component.css")]
    }),
    __metadata("design:paramtypes", [])
], KingComponent);
exports.KingComponent = KingComponent;


/***/ }),

/***/ "./src/app/king/king.module.ts":
/*!*************************************!*\
  !*** ./src/app/king/king.module.ts ***!
  \*************************************/
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
const king_routing_module_1 = __webpack_require__(/*! ./king-routing.module */ "./src/app/king/king-routing.module.ts");
const king_component_1 = __webpack_require__(/*! ./king.component */ "./src/app/king/king.component.ts");
let KingModule = class KingModule {
};
KingModule = __decorate([
    core_1.NgModule({
        imports: [
            common_1.CommonModule,
            king_routing_module_1.KingRoutingModule
        ],
        declarations: [king_component_1.KingComponent]
    })
], KingModule);
exports.KingModule = KingModule;


/***/ })

}]);
//# sourceMappingURL=app-king-king-module.js.map