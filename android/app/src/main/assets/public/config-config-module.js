(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["config-config-module"],{

/***/ "MRBM":
/*!***************************************!*\
  !*** ./src/app/config/config.page.ts ***!
  \***************************************/
/*! exports provided: cor, ConfigPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "cor", function() { return cor; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ConfigPage", function() { return ConfigPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_config_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./config.page.html */ "TGsn");
/* harmony import */ var _config_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./config.page.scss */ "p26P");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");




var cor = 'zueira';
let ConfigPage = class ConfigPage {
    constructor(renderer) {
        this.renderer = renderer;
    }
    ngOnInit() {
    }
    onToggleColorTheme(event) {
        console.log(event.detail.checked);
        if (event.detail.checked) {
            //document.body.setAttribute('color-theme','dark');
            this.renderer.setAttribute(document.body, 'color-theme', 'dark');
            cor = 'verde';
        }
        else {
            //document.body.setAttribute('color-theme','light');
            this.renderer.setAttribute(document.body, 'color-theme', 'light');
            cor = 'amarelo';
        }
    }
};
ConfigPage.ctorParameters = () => [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Renderer2"] }
];
ConfigPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-config',
        template: _raw_loader_config_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_config_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_3__["Renderer2"]])
], ConfigPage);



/***/ }),

/***/ "TGsn":
/*!*******************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/config/config.page.html ***!
  \*******************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\r\n  <ion-toolbar>\r\n    <ion-title>Configurações</ion-title>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content>\r\n  <ion-grid fixed>\r\n    <ion-row>\r\n      <ion-col size=\"12\">\r\n        <ion-item>\r\n          <ion-label>Tema Escuro</ion-label>\r\n          <ion-toggle (ionChange)=\"onToggleColorTheme($event)\" id=\"toggle\"></ion-toggle>\r\n        </ion-item>\r\n      </ion-col>\r\n    </ion-row>\r\n  </ion-grid>\r\n</ion-content>\r\n\r\n");

/***/ }),

/***/ "WSrY":
/*!*****************************************!*\
  !*** ./src/app/config/config.module.ts ***!
  \*****************************************/
/*! exports provided: ConfigPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ConfigPageModule", function() { return ConfigPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _config_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./config-routing.module */ "mjki");
/* harmony import */ var _config_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./config.page */ "MRBM");







let ConfigPageModule = class ConfigPageModule {
};
ConfigPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _config_routing_module__WEBPACK_IMPORTED_MODULE_5__["ConfigPageRoutingModule"]
        ],
        declarations: [_config_page__WEBPACK_IMPORTED_MODULE_6__["ConfigPage"]]
    })
], ConfigPageModule);



/***/ }),

/***/ "mjki":
/*!*************************************************!*\
  !*** ./src/app/config/config-routing.module.ts ***!
  \*************************************************/
/*! exports provided: ConfigPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ConfigPageRoutingModule", function() { return ConfigPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _config_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./config.page */ "MRBM");




const routes = [
    {
        path: '',
        component: _config_page__WEBPACK_IMPORTED_MODULE_3__["ConfigPage"]
    }
];
let ConfigPageRoutingModule = class ConfigPageRoutingModule {
};
ConfigPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], ConfigPageRoutingModule);



/***/ }),

/***/ "p26P":
/*!*****************************************!*\
  !*** ./src/app/config/config.page.scss ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJjb25maWcucGFnZS5zY3NzIn0= */");

/***/ })

}]);
//# sourceMappingURL=config-config-module.js.map