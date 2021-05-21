(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["sobre-sobre-module"],{

/***/ "/KDF":
/*!***************************************!*\
  !*** ./src/app/sobre/sobre.page.scss ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("ion-title {\n  font-family: \"Source Sans Pro\", sans-serif;\n  src: url(\"https://fonts.googleapis.com/css2?family=Source+Sans+Pro:wght@700&display=swap\");\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXHNvYnJlLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLDBDQUFBO0VBQ0EsMEZBQUE7QUFDSiIsImZpbGUiOiJzb2JyZS5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJpb24tdGl0bGV7XHJcbiAgICBmb250LWZhbWlseTogJ1NvdXJjZSBTYW5zIFBybycsIHNhbnMtc2VyaWY7XHJcbiAgICBzcmM6IHVybCgnaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3MyP2ZhbWlseT1Tb3VyY2UrU2FucytQcm86d2dodEA3MDAmZGlzcGxheT1zd2FwJyk7XHJcbiAgfSJdfQ== */");

/***/ }),

/***/ "5x4l":
/*!***********************************************!*\
  !*** ./src/app/sobre/sobre-routing.module.ts ***!
  \***********************************************/
/*! exports provided: SobrePageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SobrePageRoutingModule", function() { return SobrePageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _sobre_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./sobre.page */ "zeiC");




const routes = [
    {
        path: '',
        component: _sobre_page__WEBPACK_IMPORTED_MODULE_3__["SobrePage"]
    }
];
let SobrePageRoutingModule = class SobrePageRoutingModule {
};
SobrePageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], SobrePageRoutingModule);



/***/ }),

/***/ "LdKF":
/*!*****************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/sobre/sobre.page.html ***!
  \*****************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\r\n  <ion-toolbar>\r\n    <ion-title>Sobre</ion-title>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content>\r\n  \r\n</ion-content>\r\n");

/***/ }),

/***/ "vxBs":
/*!***************************************!*\
  !*** ./src/app/sobre/sobre.module.ts ***!
  \***************************************/
/*! exports provided: SobrePageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SobrePageModule", function() { return SobrePageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _sobre_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./sobre-routing.module */ "5x4l");
/* harmony import */ var _sobre_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./sobre.page */ "zeiC");







let SobrePageModule = class SobrePageModule {
};
SobrePageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _sobre_routing_module__WEBPACK_IMPORTED_MODULE_5__["SobrePageRoutingModule"]
        ],
        declarations: [_sobre_page__WEBPACK_IMPORTED_MODULE_6__["SobrePage"]]
    })
], SobrePageModule);



/***/ }),

/***/ "zeiC":
/*!*************************************!*\
  !*** ./src/app/sobre/sobre.page.ts ***!
  \*************************************/
/*! exports provided: SobrePage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SobrePage", function() { return SobrePage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_sobre_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./sobre.page.html */ "LdKF");
/* harmony import */ var _sobre_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./sobre.page.scss */ "/KDF");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");




let SobrePage = class SobrePage {
    constructor() { }
    ngOnInit() {
    }
};
SobrePage.ctorParameters = () => [];
SobrePage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-sobre',
        template: _raw_loader_sobre_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_sobre_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [])
], SobrePage);



/***/ })

}]);
//# sourceMappingURL=sobre-sobre-module.js.map