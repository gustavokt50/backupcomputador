(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["insert-insert-module"],{

/***/ "MnTm":
/*!***************************************!*\
  !*** ./src/app/insert/insert.page.ts ***!
  \***************************************/
/*! exports provided: InsertPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InsertPage", function() { return InsertPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_insert_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./insert.page.html */ "alTK");
/* harmony import */ var _insert_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./insert.page.scss */ "bw9Q");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");




let InsertPage = class InsertPage {
    constructor() { }
    ngOnInit() {
    }
};
InsertPage.ctorParameters = () => [];
InsertPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-insert',
        template: _raw_loader_insert_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_insert_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [])
], InsertPage);



/***/ }),

/***/ "alTK":
/*!*******************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/insert/insert.page.html ***!
  \*******************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n\n\n");

/***/ }),

/***/ "bw9Q":
/*!*****************************************!*\
  !*** ./src/app/insert/insert.page.scss ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJpbnNlcnQucGFnZS5zY3NzIn0= */");

/***/ }),

/***/ "rP7y":
/*!*****************************************!*\
  !*** ./src/app/insert/insert.module.ts ***!
  \*****************************************/
/*! exports provided: InsertPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InsertPageModule", function() { return InsertPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _insert_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./insert-routing.module */ "zY+y");
/* harmony import */ var _insert_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./insert.page */ "MnTm");







let InsertPageModule = class InsertPageModule {
};
InsertPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _insert_routing_module__WEBPACK_IMPORTED_MODULE_5__["InsertPageRoutingModule"]
        ],
        declarations: [_insert_page__WEBPACK_IMPORTED_MODULE_6__["InsertPage"]]
    })
], InsertPageModule);



/***/ }),

/***/ "zY+y":
/*!*************************************************!*\
  !*** ./src/app/insert/insert-routing.module.ts ***!
  \*************************************************/
/*! exports provided: InsertPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InsertPageRoutingModule", function() { return InsertPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _insert_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./insert.page */ "MnTm");




const routes = [
    {
        path: '',
        component: _insert_page__WEBPACK_IMPORTED_MODULE_3__["InsertPage"]
    }
];
let InsertPageRoutingModule = class InsertPageRoutingModule {
};
InsertPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], InsertPageRoutingModule);



/***/ })

}]);
//# sourceMappingURL=insert-insert-module.js.map