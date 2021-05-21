(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["conta-conta-module"],{

/***/ "9cCN":
/*!***************************************!*\
  !*** ./src/app/conta/conta.module.ts ***!
  \***************************************/
/*! exports provided: ContaPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContaPageModule", function() { return ContaPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _conta_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./conta-routing.module */ "QxDJ");
/* harmony import */ var _conta_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./conta.page */ "covC");







let ContaPageModule = class ContaPageModule {
};
ContaPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _conta_routing_module__WEBPACK_IMPORTED_MODULE_5__["ContaPageRoutingModule"]
        ],
        declarations: [_conta_page__WEBPACK_IMPORTED_MODULE_6__["ContaPage"]]
    })
], ContaPageModule);



/***/ }),

/***/ "JSuc":
/*!***************************************!*\
  !*** ./src/app/conta/conta.page.scss ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("ion-tilte {\n  font-family: \"Source Sans Pro\", sans-serif;\n  src: url(\"https://fonts.googleapis.com/css2?family=Source+Sans+Pro:wght@700&display=swap\");\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXGNvbnRhLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLDBDQUFBO0VBQ0EsMEZBQUE7QUFDSiIsImZpbGUiOiJjb250YS5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJpb24tdGlsdGUge1xyXG4gICAgZm9udC1mYW1pbHk6ICdTb3VyY2UgU2FucyBQcm8nLCBzYW5zLXNlcmlmO1xyXG4gICAgc3JjOiB1cmwoJ2h0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzMj9mYW1pbHk9U291cmNlK1NhbnMrUHJvOndnaHRANzAwJmRpc3BsYXk9c3dhcCcpO1xyXG4gIH1cclxuICAiXX0= */");

/***/ }),

/***/ "QxDJ":
/*!***********************************************!*\
  !*** ./src/app/conta/conta-routing.module.ts ***!
  \***********************************************/
/*! exports provided: ContaPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContaPageRoutingModule", function() { return ContaPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _conta_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./conta.page */ "covC");




const routes = [
    {
        path: '',
        component: _conta_page__WEBPACK_IMPORTED_MODULE_3__["ContaPage"]
    }
];
let ContaPageRoutingModule = class ContaPageRoutingModule {
};
ContaPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], ContaPageRoutingModule);



/***/ }),

/***/ "covC":
/*!*************************************!*\
  !*** ./src/app/conta/conta.page.ts ***!
  \*************************************/
/*! exports provided: ContaPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContaPage", function() { return ContaPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_conta_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./conta.page.html */ "qA5Q");
/* harmony import */ var _conta_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./conta.page.scss */ "JSuc");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");




let ContaPage = class ContaPage {
    constructor() { }
    ngOnInit() {
    }
};
ContaPage.ctorParameters = () => [];
ContaPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-conta',
        template: _raw_loader_conta_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_conta_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [])
], ContaPage);



/***/ }),

/***/ "qA5Q":
/*!*****************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/conta/conta.page.html ***!
  \*****************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\r\n\r\n  <ion-toolbar>\r\n\r\n    <ion-title> Conta </ion-title>\r\n\r\n  </ion-toolbar>\r\n\r\n</ion-header>\r\n\r\n<ion-content>\r\n\r\n</ion-content>\r\n");

/***/ })

}]);
//# sourceMappingURL=conta-conta-module.js.map