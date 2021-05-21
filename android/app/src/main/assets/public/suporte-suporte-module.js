(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["suporte-suporte-module"],{

/***/ "0NE1":
/*!***************************************************!*\
  !*** ./src/app/suporte/suporte-routing.module.ts ***!
  \***************************************************/
/*! exports provided: SuportePageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SuportePageRoutingModule", function() { return SuportePageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _suporte_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./suporte.page */ "27eb");




const routes = [
    {
        path: '',
        component: _suporte_page__WEBPACK_IMPORTED_MODULE_3__["SuportePage"]
    }
];
let SuportePageRoutingModule = class SuportePageRoutingModule {
};
SuportePageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], SuportePageRoutingModule);



/***/ }),

/***/ "27eb":
/*!*****************************************!*\
  !*** ./src/app/suporte/suporte.page.ts ***!
  \*****************************************/
/*! exports provided: SuportePage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SuportePage", function() { return SuportePage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_suporte_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./suporte.page.html */ "iLSr");
/* harmony import */ var _suporte_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./suporte.page.scss */ "WR8A");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");




let SuportePage = class SuportePage {
    constructor() { }
    ngOnInit() {
    }
};
SuportePage.ctorParameters = () => [];
SuportePage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-suporte',
        template: _raw_loader_suporte_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_suporte_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [])
], SuportePage);



/***/ }),

/***/ "K6Oj":
/*!*******************************************!*\
  !*** ./src/app/suporte/suporte.module.ts ***!
  \*******************************************/
/*! exports provided: SuportePageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SuportePageModule", function() { return SuportePageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _suporte_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./suporte-routing.module */ "0NE1");
/* harmony import */ var _suporte_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./suporte.page */ "27eb");







let SuportePageModule = class SuportePageModule {
};
SuportePageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _suporte_routing_module__WEBPACK_IMPORTED_MODULE_5__["SuportePageRoutingModule"]
        ],
        declarations: [_suporte_page__WEBPACK_IMPORTED_MODULE_6__["SuportePage"]]
    })
], SuportePageModule);



/***/ }),

/***/ "WR8A":
/*!*******************************************!*\
  !*** ./src/app/suporte/suporte.page.scss ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("ion-title {\n  font-family: \"Source Sans Pro\", sans-serif;\n  src: url(\"https://fonts.googleapis.com/css2?family=Source+Sans+Pro:wght@700&display=swap\");\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXHN1cG9ydGUucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksMENBQUE7RUFDQSwwRkFBQTtBQUNKIiwiZmlsZSI6InN1cG9ydGUucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaW9uLXRpdGxle1xyXG4gICAgZm9udC1mYW1pbHk6ICdTb3VyY2UgU2FucyBQcm8nLCBzYW5zLXNlcmlmO1xyXG4gICAgc3JjOiB1cmwoJ2h0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzMj9mYW1pbHk9U291cmNlK1NhbnMrUHJvOndnaHRANzAwJmRpc3BsYXk9c3dhcCcpO1xyXG4gIH0iXX0= */");

/***/ }),

/***/ "iLSr":
/*!*********************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/suporte/suporte.page.html ***!
  \*********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\r\n  <ion-toolbar>\r\n    <ion-title style=\"text-align:center\">Suporte</ion-title>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content>\r\n  <ion-item>\r\n    <h3>Contato</h3>\r\n  </ion-item>\r\n    <ion-item>\r\n    <ion-icon name=\"person-outline\" slot=\"start\"></ion-icon>\r\n      BZS-Tecnologia\r\n    </ion-item>\r\n    <ion-item>\r\n      <ion-icon name=\"location-outline\" slot=\"start\"></ion-icon>\r\n      Avenida Maripá, Centro\r\n      3286, Mal. Cândido Rondon - PR, 85960-000.\r\n    </ion-item>\r\n    <ion-item>\r\n      <ion-icon name=\"call-outline\" slot=\"start\"></ion-icon>\r\n      +55 (45) 3284-2212\r\n    </ion-item>\r\n    <ion-item>\r\n      <ion-icon name=\"mail-outline\" slot=\"start\"></ion-icon>\r\n      bzs@bzs.com.br\r\n    </ion-item>\r\n</ion-content>");

/***/ })

}]);
//# sourceMappingURL=suporte-suporte-module.js.map