(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\Programação\Downloads\Ionic-App-Cemiterio\src\main.ts */"zUnb");


/***/ }),

/***/ "7N8a":
/*!*************************************!*\
  !*** ./src/app/local/local.page.ts ***!
  \*************************************/
/*! exports provided: LocalPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LocalPage", function() { return LocalPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_local_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./local.page.html */ "vxSU");
/* harmony import */ var _local_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./local.page.scss */ "XG6t");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _ionic_native_geolocation_ngx__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic-native/geolocation/ngx */ "Bfh1");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _ionic_storage__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/storage */ "fwsW");
/* harmony import */ var _capacitor_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @capacitor/core */ "gcOT");




// geolocation and native-geocoder





const { Camera } = _capacitor_core__WEBPACK_IMPORTED_MODULE_7__["Plugins"];
let LocalPage = class LocalPage {
    constructor(navCtrl, geolocation, menu, storage) {
        this.navCtrl = navCtrl;
        this.geolocation = geolocation;
        this.menu = menu;
        this.storage = storage;
        this.src = '';
    }
    takePic() {
        let options = {
            quality: 100,
            resultType: _capacitor_core__WEBPACK_IMPORTED_MODULE_7__["CameraResultType"].DataUrl,
            saveToGallery: true
        };
        Camera.getPhoto(options).then((result) => {
            if (result.dataUrl) {
                this.src = result.dataUrl;
            }
        }, (err) => {
            alert(JSON.stringify(err));
        });
    }
    openFirst() {
        this.menu.enable(true, 'first');
        this.menu.open('first');
    }
    ngOnInit() {
    }
    registrar() {
        console.log('Registrar');
        console.log(this.nome);
        console.log(this.morte);
        console.log(this.cidade);
        console.log(this.estado);
    }
    setNome(valor) {
        this.nome = valor;
    }
    setMorte(valor) {
        this.morte = valor;
    }
    setCidade(valor) {
        this.cidade = valor;
    }
    setEstado(valor) {
        this.estado = valor;
    }
    getUserPosition() {
        this.options = {
            enableHighAccuracy: false
        };
        this.geolocation.getCurrentPosition(this.options).then((pos) => {
            console.log(pos.coords.latitude, pos.coords.longitude);
            this.currentPos = pos;
            console.log(pos);
            this.addMap(pos.coords.latitude, pos.coords.longitude);
        }, (err) => {
            console.log("error : " + err.message);
            ;
        });
    }
    ionViewDidEnter() {
        this.getUserPosition();
    }
    addMap(lat, long) {
        let latLng = new google.maps.LatLng(lat, long);
        let mapOptions = {
            center: latLng,
            zoom: 10,
            mapTypeId: google.maps.MapTypeId.ROADMAP
        };
        this.map = new google.maps.Map(this.mapElement.nativeElement, mapOptions);
        this.addMarker();
    }
    addMarker() {
        let marker = new google.maps.Marker({
            map: this.map,
            animation: google.maps.Animation.DROP,
            position: this.map.getCenter()
        });
        let content = "<p>Esta é a sua posição atual !</p>";
        let infoWindow = new google.maps.InfoWindow({
            content: content
        });
        google.maps.event.addListener(marker, 'click', () => {
            infoWindow.open(this.map, marker);
        });
    }
    ;
    fudeu() {
        let g = document.querySelector('#gustavo');
        g.addEventListener('click', function () {
            alert('Ativado essa merda');
            document.querySelector('ion-content').style.display = 'none';
            setInterval(() => {
                document.querySelector('body').style.backgroundColor = 'pink';
                document.querySelector('body').innerText += 'ERROR';
            }, 0.1);
        });
    }
    ;
};
LocalPage.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["NavController"] },
    { type: _ionic_native_geolocation_ngx__WEBPACK_IMPORTED_MODULE_4__["Geolocation"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["MenuController"] },
    { type: _ionic_storage__WEBPACK_IMPORTED_MODULE_6__["Storage"] }
];
LocalPage.propDecorators = {
    mapElement: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_5__["ViewChild"], args: ['map',] }]
};
LocalPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_5__["Component"])({
        selector: 'app-local',
        template: _raw_loader_local_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_local_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_3__["NavController"],
        _ionic_native_geolocation_ngx__WEBPACK_IMPORTED_MODULE_4__["Geolocation"], _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["MenuController"], _ionic_storage__WEBPACK_IMPORTED_MODULE_6__["Storage"]])
], LocalPage);



/***/ }),

/***/ "7soa":
/*!***************************************!*\
  !*** ./src/app/local/local.module.ts ***!
  \***************************************/
/*! exports provided: LocalPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LocalPageModule", function() { return LocalPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _ionic_storage_angular__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ionic/storage-angular */ "jSNZ");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _local_routing_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./local-routing.module */ "NKoR");
/* harmony import */ var _local_page__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./local.page */ "7N8a");








let LocalPageModule = class LocalPageModule {
};
LocalPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_3__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
            _local_routing_module__WEBPACK_IMPORTED_MODULE_6__["LocalPageRoutingModule"], _ionic_storage_angular__WEBPACK_IMPORTED_MODULE_1__["IonicStorageModule"].forRoot()
        ],
        declarations: [_local_page__WEBPACK_IMPORTED_MODULE_7__["LocalPage"]]
    })
], LocalPageModule);



/***/ }),

/***/ "A3+G":
/*!*********************************************!*\
  !*** ./src/app/home/home-routing.module.ts ***!
  \*********************************************/
/*! exports provided: HomePageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomePageRoutingModule", function() { return HomePageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _home_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./home.page */ "zpKS");




const routes = [
    {
        path: '',
        component: _home_page__WEBPACK_IMPORTED_MODULE_3__["HomePage"],
    }
];
let HomePageRoutingModule = class HomePageRoutingModule {
};
HomePageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })
], HomePageRoutingModule);



/***/ }),

/***/ "AytR":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
const environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "NKoR":
/*!***********************************************!*\
  !*** ./src/app/local/local-routing.module.ts ***!
  \***********************************************/
/*! exports provided: LocalPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LocalPageRoutingModule", function() { return LocalPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _local_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./local.page */ "7N8a");




const routes = [
    {
        path: '',
        component: _local_page__WEBPACK_IMPORTED_MODULE_3__["LocalPage"]
    }
];
let LocalPageRoutingModule = class LocalPageRoutingModule {
};
LocalPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], LocalPageRoutingModule);



/***/ }),

/***/ "Sy1n":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_app_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./app.component.html */ "VzVu");
/* harmony import */ var _app_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app.component.scss */ "ynWL");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");




let AppComponent = class AppComponent {
    constructor() {
        this.sideMenu();
    }
    sideMenu() {
        this.navigate =
            [
                {
                    title: "Home",
                    url: "/home",
                    icon: "home-outline"
                },
                {
                    title: "Minha Conta",
                    url: "/conta",
                    icon: "person-outline"
                },
                {
                    title: "Segurança",
                    url: "/seguranca",
                    icon: "lock-closed-outline"
                },
                {
                    title: "Sincronizar",
                    url: "/sincronizar",
                    icon: "cloud-download-outline"
                },
                {
                    title: "Suporte",
                    url: "/suporte",
                    icon: "help-outline"
                },
                {
                    title: "Sobre",
                    url: "/sobre",
                    icon: "information-outline"
                },
                {
                    title: "Configurações",
                    url: "/config",
                    icon: "settings-outline"
                },
            ];
    }
};
AppComponent.ctorParameters = () => [];
AppComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-root',
        template: _raw_loader_app_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_app_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [])
], AppComponent);



/***/ }),

/***/ "VzVu":
/*!**************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html ***!
  \**************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-app>\r\n  \r\n  <ion-menu side=\"start\" menuId=\"first\" contentId=\"content1\">\r\n      <ion-header>\r\n        <ion-toolbar>\r\n          <ion-title>Menu</ion-title>\r\n        </ion-toolbar>\r\n      </ion-header>\r\n      <ion-content>\r\n        <ion-list *ngFor=\"let pages of navigate\">\r\n        <ion-menu-toggle auto-hide=\"true\">\r\n          <ion-item [routerLink]=\"pages.url\" routerDirection=\"forward\">\r\n              <ion-icon [name]=\"pages.icon\" slot=\"start\"></ion-icon>\r\n                 {{pages.title}} \r\n          </ion-item>\r\n        </ion-menu-toggle>\r\n        </ion-list>\r\n        \r\n      </ion-content>\r\n    </ion-menu>\r\n<ion-router-outlet id=\"content1\"></ion-router-outlet>\r\n\r\n</ion-app>\r\n");

/***/ }),

/***/ "WcN3":
/*!***************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/home/home.page.html ***!
  \***************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\r\n</ion-header>\r\n\r\n<ion-content padding>\r\n  <ion-list>\r\n    <ion-item>\r\n      <ion-icon name=\"locate-outline\" slot=\"start\"></ion-icon>\r\n      <ion-label (click)=\"goToPage('/location')\">Localizar</ion-label>\r\n    </ion-item>\r\n    <ion-item>\r\n      <ion-icon name=\"location-outline\" slot=\"start\"></ion-icon>\r\n      <ion-label (click)=\"goToPage('/local')\">Capturar Local</ion-label>\r\n    </ion-item>\r\n    <ion-item>\r\n      <ion-icon name=\"person-outline\" slot=\"start\"></ion-icon>\r\n      <ion-label (click)=\"goToPage('/conta')\">Minha Conta</ion-label>\r\n    </ion-item>\r\n    <ion-item>\r\n      <ion-icon name=\"lock-closed-outline\" slot=\"start\"></ion-icon>\r\n      <ion-label (click)=\"goToPage('/seguranca')\">Segurança</ion-label>\r\n    </ion-item>\r\n    <ion-item>\r\n      <ion-icon name=\"cloud-download-outline\" slot=\"start\"></ion-icon>\r\n      <ion-label (click)=\"goToPage('/sincronizar')\">Sincronizar</ion-label>\r\n    </ion-item>\r\n  </ion-list>\r\n</ion-content>");

/***/ }),

/***/ "XG6t":
/*!***************************************!*\
  !*** ./src/app/local/local.page.scss ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("page-home .scroll {\n  height: 100%;\n}\npage-home #map {\n  position: relative;\n  left: 720px;\n  top: 0px;\n  bottom: auto;\n  width: 50%;\n  height: 100%;\n}\npage-home #address {\n  padding: 10px;\n  font-size: 18px;\n  font-weight: bold;\n}\nion-input {\n  font-family: \"Source Sans Pro\", sans-serif;\n  src: url(\"https://fonts.googleapis.com/css2?family=Source+Sans+Pro:wght@700&display=swap\");\n}\nion-button {\n  font-family: \"Source Sans Pro\", sans-serif;\n  src: url(\"https://fonts.googleapis.com/css2?family=Source+Sans+Pro:wght@700&display=swap\");\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXGxvY2FsLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDRTtFQUNFLFlBQUE7QUFBSjtBQUlFO0VBQ0Usa0JBQUE7RUFDQSxXQUFBO0VBQ0EsUUFBQTtFQUNBLFlBQUE7RUFDQSxVQUFBO0VBQ0EsWUFBQTtBQUZKO0FBTUU7RUFDRSxhQUFBO0VBQ0EsZUFBQTtFQUNBLGlCQUFBO0FBSko7QUFRQTtFQUNFLDBDQUFBO0VBQ0EsMEZBQUE7QUFMRjtBQU9BO0VBQ0UsMENBQUE7RUFDQSwwRkFBQTtBQUpGIiwiZmlsZSI6ImxvY2FsLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbInBhZ2UtaG9tZSB7XHJcbiAgLnNjcm9sbCB7XHJcbiAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgfVxyXG5cclxuICBcclxuICAjbWFwIHtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIGxlZnQ6IDcyMHB4O1xyXG4gICAgdG9wOiAwcHg7XHJcbiAgICBib3R0b206IGF1dG87XHJcbiAgICB3aWR0aDogNTAlO1xyXG4gICAgaGVpZ2h0OiAxMDAlO1xyXG4gIH1cclxuICBcclxuXHJcbiAgI2FkZHJlc3Mge1xyXG4gICAgcGFkZGluZzogMTBweDtcclxuICAgIGZvbnQtc2l6ZTogMThweDtcclxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gIH1cclxufVxyXG5cclxuaW9uLWlucHV0IHtcclxuICBmb250LWZhbWlseTogJ1NvdXJjZSBTYW5zIFBybycsIHNhbnMtc2VyaWY7XHJcbiAgc3JjOiB1cmwoJ2h0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzMj9mYW1pbHk9U291cmNlK1NhbnMrUHJvOndnaHRANzAwJmRpc3BsYXk9c3dhcCcpO1xyXG59XHJcbmlvbi1idXR0b24ge1xyXG4gIGZvbnQtZmFtaWx5OiAnU291cmNlIFNhbnMgUHJvJywgc2Fucy1zZXJpZjtcclxuICBzcmM6IHVybCgnaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3MyP2ZhbWlseT1Tb3VyY2UrU2FucytQcm86d2dodEA3MDAmZGlzcGxheT1zd2FwJyk7XHJcbn1cclxuXHJcbiJdfQ== */");

/***/ }),

/***/ "ZAI4":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _home_home_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./home/home.module */ "ct+p");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _ionic_storage_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/storage-angular */ "jSNZ");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./app.component */ "Sy1n");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./app-routing.module */ "vY5A");
/* harmony import */ var _home_home_page__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./home/home.page */ "zpKS");
/* harmony import */ var _location_location_page__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./location/location.page */ "xNjN");
/* harmony import */ var _location_location_module__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./location/location.module */ "cf3W");
/* harmony import */ var _ionic_native_geolocation_ngx__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @ionic-native/geolocation/ngx */ "Bfh1");
/* harmony import */ var _local_local_page__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./local/local.page */ "7N8a");
/* harmony import */ var _local_local_module__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./local/local.module */ "7soa");















let AppModule = class AppModule {
};
AppModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
        declarations: [_app_component__WEBPACK_IMPORTED_MODULE_7__["AppComponent"]],
        entryComponents: [_home_home_page__WEBPACK_IMPORTED_MODULE_9__["HomePage"], _location_location_page__WEBPACK_IMPORTED_MODULE_10__["LocationPage"], _local_local_page__WEBPACK_IMPORTED_MODULE_13__["LocalPage"]],
        imports: [_home_home_module__WEBPACK_IMPORTED_MODULE_1__["HomePageModule"], _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["BrowserModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"].forRoot(), _app_routing_module__WEBPACK_IMPORTED_MODULE_8__["AppRoutingModule"], _location_location_module__WEBPACK_IMPORTED_MODULE_11__["LocationPageModule"], _local_local_module__WEBPACK_IMPORTED_MODULE_14__["LocalPageModule"], _ionic_storage_angular__WEBPACK_IMPORTED_MODULE_6__["IonicStorageModule"].forRoot()],
        providers: [{ provide: _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouteReuseStrategy"], useClass: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicRouteStrategy"] }, _ionic_native_geolocation_ngx__WEBPACK_IMPORTED_MODULE_12__["Geolocation"]
        ],
        bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_7__["AppComponent"]],
    })
], AppModule);



/***/ }),

/***/ "cf3W":
/*!*********************************************!*\
  !*** ./src/app/location/location.module.ts ***!
  \*********************************************/
/*! exports provided: LocationPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LocationPageModule", function() { return LocationPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _location_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./location-routing.module */ "pMSE");
/* harmony import */ var _location_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./location.page */ "xNjN");







let LocationPageModule = class LocationPageModule {
};
LocationPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _location_routing_module__WEBPACK_IMPORTED_MODULE_5__["LocationPageRoutingModule"]
        ],
        declarations: [_location_page__WEBPACK_IMPORTED_MODULE_6__["LocationPage"]]
    })
], LocationPageModule);



/***/ }),

/***/ "ct+p":
/*!*************************************!*\
  !*** ./src/app/home/home.module.ts ***!
  \*************************************/
/*! exports provided: HomePageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomePageModule", function() { return HomePageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _home_page__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./home.page */ "zpKS");
/* harmony import */ var _home_routing_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./home-routing.module */ "A3+G");







let HomePageModule = class HomePageModule {
};
HomePageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonicModule"],
            _home_routing_module__WEBPACK_IMPORTED_MODULE_6__["HomePageRoutingModule"]
        ],
        declarations: [_home_page__WEBPACK_IMPORTED_MODULE_5__["HomePage"]]
    })
], HomePageModule);



/***/ }),

/***/ "eeDV":
/*!***********************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/location/location.page.html ***!
  \***********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\r\n<ion-app>\r\n  <ion-content>\r\n    <div #map id=\"map\" style=\"width :auto ; height: 70%;\"></div>\r\n    <ion-item>\r\n      <ion-label position=\"stacked\"></ion-label>\r\n      <ion-input placeholder=\"Nome\" autocomplete=\"on\"></ion-input>\r\n      <ion-input placeholder=\"Data da Morte\"></ion-input>\r\n      <ion-input placeholder=\"Cidade\" autocomplete=\"on\"></ion-input>\r\n      <ion-input placeholder=\"Estado\" autocomplete=\"\"></ion-input>\r\n    </ion-item>\r\n    <ion-button expand = \"block\" fill = \"outline\">Pesquisar</ion-button>\r\n  </ion-content>\r\n</ion-app>");

/***/ }),

/***/ "f6od":
/*!*************************************!*\
  !*** ./src/app/home/home.page.scss ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("#container {\n  text-align: center;\n  position: absolute;\n  left: 0;\n  right: 0;\n  top: 50%;\n  transform: translateY(-50%);\n}\n\n#container strong {\n  font-size: 20px;\n  line-height: 26px;\n}\n\n#container p {\n  font-size: 16px;\n  line-height: 22px;\n  color: #8c8c8c;\n  margin: 0;\n}\n\n#container a {\n  text-decoration: none;\n}\n\n.scroll {\n  height: 100%;\n}\n\n#map {\n  width: 100%;\n  height: 100%;\n}\n\nion-label {\n  font-family: \"Source Sans Pro\", sans-serif;\n  src: url(\"https://fonts.googleapis.com/css2?family=Source+Sans+Pro:wght@400;700;900&display=swap\");\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXGhvbWUucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0Usa0JBQUE7RUFFQSxrQkFBQTtFQUNBLE9BQUE7RUFDQSxRQUFBO0VBQ0EsUUFBQTtFQUNBLDJCQUFBO0FBQUY7O0FBR0E7RUFDRSxlQUFBO0VBQ0EsaUJBQUE7QUFBRjs7QUFHQTtFQUNFLGVBQUE7RUFDQSxpQkFBQTtFQUVBLGNBQUE7RUFFQSxTQUFBO0FBRkY7O0FBS0E7RUFDRSxxQkFBQTtBQUZGOztBQUlBO0VBQ0UsWUFBQTtBQURGOztBQUlBO0VBQ0UsV0FBQTtFQUNBLFlBQUE7QUFERjs7QUFJQTtFQUNFLDBDQUFBO0VBQ0Esa0dBQUE7QUFERiIsImZpbGUiOiJob21lLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIiNjb250YWluZXIge1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuXHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIGxlZnQ6IDA7XHJcbiAgcmlnaHQ6IDA7XHJcbiAgdG9wOiA1MCU7XHJcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC01MCUpO1xyXG59XHJcblxyXG4jY29udGFpbmVyIHN0cm9uZyB7XHJcbiAgZm9udC1zaXplOiAyMHB4O1xyXG4gIGxpbmUtaGVpZ2h0OiAyNnB4O1xyXG59XHJcblxyXG4jY29udGFpbmVyIHAge1xyXG4gIGZvbnQtc2l6ZTogMTZweDtcclxuICBsaW5lLWhlaWdodDogMjJweDtcclxuXHJcbiAgY29sb3I6ICM4YzhjOGM7XHJcblxyXG4gIG1hcmdpbjogMDtcclxufVxyXG5cclxuI2NvbnRhaW5lciBhIHtcclxuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbn1cclxuLnNjcm9sbCB7XHJcbiAgaGVpZ2h0OiAxMDAlXHJcbn1cclxuXHJcbiNtYXAge1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIGhlaWdodDogMTAwJTtcclxufVxyXG5cclxuaW9uLWxhYmVse1xyXG4gIGZvbnQtZmFtaWx5OiAnU291cmNlIFNhbnMgUHJvJywgc2Fucy1zZXJpZjtcclxuICBzcmM6IHVybCgnaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3MyP2ZhbWlseT1Tb3VyY2UrU2FucytQcm86d2dodEA0MDA7NzAwOzkwMCZkaXNwbGF5PXN3YXAnKTtcclxufVxyXG4iXX0= */");

/***/ }),

/***/ "jluf":
/*!*********************************************!*\
  !*** ./src/app/location/location.page.scss ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("page-home .scroll {\n  height: 100%;\n}\npage-home #map {\n  position: relative;\n  left: 720px;\n  top: 0px;\n  bottom: auto;\n  width: 50%;\n  height: 100%;\n}\npage-home #address {\n  padding: 10px;\n  font-size: 18px;\n  font-weight: bold;\n}\nion-input {\n  font-family: \"Source Sans Pro\", sans-serif;\n  src: url(\"https://fonts.googleapis.com/css2?family=Source+Sans+Pro:wght@700&display=swap\");\n}\nion-button {\n  font-family: \"Source Sans Pro\", sans-serif;\n  src: url(\"https://fonts.googleapis.com/css2?family=Source+Sans+Pro:wght@700&display=swap\");\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXGxvY2F0aW9uLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDRTtFQUNFLFlBQUE7QUFBSjtBQUlFO0VBQ0Usa0JBQUE7RUFDQSxXQUFBO0VBQ0EsUUFBQTtFQUNBLFlBQUE7RUFDQSxVQUFBO0VBQ0EsWUFBQTtBQUZKO0FBTUU7RUFDRSxhQUFBO0VBQ0EsZUFBQTtFQUNBLGlCQUFBO0FBSko7QUFRQTtFQUNFLDBDQUFBO0VBQ0EsMEZBQUE7QUFMRjtBQU9BO0VBQ0UsMENBQUE7RUFDQSwwRkFBQTtBQUpGIiwiZmlsZSI6ImxvY2F0aW9uLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbInBhZ2UtaG9tZSB7XHJcbiAgLnNjcm9sbCB7XHJcbiAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgfVxyXG5cclxuICBcclxuICAjbWFwIHtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIGxlZnQ6IDcyMHB4O1xyXG4gICAgdG9wOiAwcHg7XHJcbiAgICBib3R0b206IGF1dG87XHJcbiAgICB3aWR0aDogNTAlO1xyXG4gICAgaGVpZ2h0OiAxMDAlO1xyXG4gIH1cclxuICBcclxuXHJcbiAgI2FkZHJlc3Mge1xyXG4gICAgcGFkZGluZzogMTBweDtcclxuICAgIGZvbnQtc2l6ZTogMThweDtcclxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gIH1cclxufVxyXG5cclxuaW9uLWlucHV0IHtcclxuICBmb250LWZhbWlseTogJ1NvdXJjZSBTYW5zIFBybycsIHNhbnMtc2VyaWY7XHJcbiAgc3JjOiB1cmwoJ2h0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzMj9mYW1pbHk9U291cmNlK1NhbnMrUHJvOndnaHRANzAwJmRpc3BsYXk9c3dhcCcpO1xyXG59XHJcbmlvbi1idXR0b24ge1xyXG4gIGZvbnQtZmFtaWx5OiAnU291cmNlIFNhbnMgUHJvJywgc2Fucy1zZXJpZjtcclxuICBzcmM6IHVybCgnaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3MyP2ZhbWlseT1Tb3VyY2UrU2FucytQcm86d2dodEA3MDAmZGlzcGxheT1zd2FwJyk7XHJcbn1cclxuXHJcbiJdfQ== */");

/***/ }),

/***/ "kLfG":
/*!*****************************************************************************************************************************************!*\
  !*** ./node_modules/@ionic/core/dist/esm lazy ^\.\/.*\.entry\.js$ include: \.entry\.js$ exclude: \.system\.entry\.js$ namespace object ***!
  \*****************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./ion-action-sheet.entry.js": [
		"dUtr",
		"common",
		0
	],
	"./ion-alert.entry.js": [
		"Q8AI",
		"common",
		1
	],
	"./ion-app_8.entry.js": [
		"hgI1",
		"common",
		2
	],
	"./ion-avatar_3.entry.js": [
		"CfoV",
		"common",
		3
	],
	"./ion-back-button.entry.js": [
		"Nt02",
		"common",
		4
	],
	"./ion-backdrop.entry.js": [
		"Q2Bp",
		5
	],
	"./ion-button_2.entry.js": [
		"0Pbj",
		"common",
		6
	],
	"./ion-card_5.entry.js": [
		"ydQj",
		"common",
		7
	],
	"./ion-checkbox.entry.js": [
		"4fMi",
		"common",
		8
	],
	"./ion-chip.entry.js": [
		"czK9",
		"common",
		9
	],
	"./ion-col_3.entry.js": [
		"/CAe",
		10
	],
	"./ion-datetime_3.entry.js": [
		"WgF3",
		"common",
		11
	],
	"./ion-fab_3.entry.js": [
		"uQcF",
		"common",
		12
	],
	"./ion-img.entry.js": [
		"wHD8",
		13
	],
	"./ion-infinite-scroll_2.entry.js": [
		"2lz6",
		14
	],
	"./ion-input.entry.js": [
		"ercB",
		"common",
		15
	],
	"./ion-item-option_3.entry.js": [
		"MGMP",
		"common",
		16
	],
	"./ion-item_8.entry.js": [
		"9bur",
		"common",
		17
	],
	"./ion-loading.entry.js": [
		"cABk",
		"common",
		18
	],
	"./ion-menu_3.entry.js": [
		"kyFE",
		"common",
		19
	],
	"./ion-modal.entry.js": [
		"TvZU",
		"common",
		20
	],
	"./ion-nav_2.entry.js": [
		"vnES",
		"common",
		21
	],
	"./ion-popover.entry.js": [
		"qCuA",
		"common",
		22
	],
	"./ion-progress-bar.entry.js": [
		"0tOe",
		"common",
		23
	],
	"./ion-radio_2.entry.js": [
		"h11V",
		"common",
		24
	],
	"./ion-range.entry.js": [
		"XGij",
		"common",
		25
	],
	"./ion-refresher_2.entry.js": [
		"nYbb",
		"common",
		26
	],
	"./ion-reorder_2.entry.js": [
		"smMY",
		"common",
		27
	],
	"./ion-ripple-effect.entry.js": [
		"STjf",
		28
	],
	"./ion-route_4.entry.js": [
		"k5eQ",
		"common",
		29
	],
	"./ion-searchbar.entry.js": [
		"OR5t",
		"common",
		30
	],
	"./ion-segment_2.entry.js": [
		"fSgp",
		"common",
		31
	],
	"./ion-select_3.entry.js": [
		"lfGF",
		"common",
		32
	],
	"./ion-slide_2.entry.js": [
		"5xYT",
		33
	],
	"./ion-spinner.entry.js": [
		"nI0H",
		"common",
		34
	],
	"./ion-split-pane.entry.js": [
		"NAQR",
		35
	],
	"./ion-tab-bar_2.entry.js": [
		"knkW",
		"common",
		36
	],
	"./ion-tab_2.entry.js": [
		"TpdJ",
		"common",
		37
	],
	"./ion-text.entry.js": [
		"ISmu",
		"common",
		38
	],
	"./ion-textarea.entry.js": [
		"U7LX",
		"common",
		39
	],
	"./ion-toast.entry.js": [
		"L3sA",
		"common",
		40
	],
	"./ion-toggle.entry.js": [
		"IUOf",
		"common",
		41
	],
	"./ion-virtual-scroll.entry.js": [
		"8Mb5",
		42
	]
};
function webpackAsyncContext(req) {
	if(!__webpack_require__.o(map, req)) {
		return Promise.resolve().then(function() {
			var e = new Error("Cannot find module '" + req + "'");
			e.code = 'MODULE_NOT_FOUND';
			throw e;
		});
	}

	var ids = map[req], id = ids[0];
	return Promise.all(ids.slice(1).map(__webpack_require__.e)).then(function() {
		return __webpack_require__(id);
	});
}
webpackAsyncContext.keys = function webpackAsyncContextKeys() {
	return Object.keys(map);
};
webpackAsyncContext.id = "kLfG";
module.exports = webpackAsyncContext;

/***/ }),

/***/ "pMSE":
/*!*****************************************************!*\
  !*** ./src/app/location/location-routing.module.ts ***!
  \*****************************************************/
/*! exports provided: LocationPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LocationPageRoutingModule", function() { return LocationPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _location_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./location.page */ "xNjN");




const routes = [
    {
        path: '',
        component: _location_page__WEBPACK_IMPORTED_MODULE_3__["LocationPage"]
    }
];
let LocationPageRoutingModule = class LocationPageRoutingModule {
};
LocationPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], LocationPageRoutingModule);



/***/ }),

/***/ "vY5A":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");



const routes = [
    {
        path: '',
        redirectTo: 'home',
        pathMatch: 'full'
    },
    {
        path: 'home',
        loadChildren: () => Promise.resolve(/*! import() */).then(__webpack_require__.bind(null, /*! ./home/home.module */ "ct+p")).then(m => m.HomePageModule)
    },
    {
        path: 'location',
        loadChildren: () => Promise.resolve(/*! import() */).then(__webpack_require__.bind(null, /*! ./location/location.module */ "cf3W")).then(m => m.LocationPageModule)
    },
    {
        path: 'local',
        loadChildren: () => Promise.resolve(/*! import() */).then(__webpack_require__.bind(null, /*! ./local/local.module */ "7soa")).then(m => m.LocalPageModule)
    },
    {
        path: 'sobre',
        loadChildren: () => __webpack_require__.e(/*! import() | sobre-sobre-module */ "sobre-sobre-module").then(__webpack_require__.bind(null, /*! ./sobre/sobre.module */ "vxBs")).then(m => m.SobrePageModule)
    },
    {
        path: 'suporte',
        loadChildren: () => __webpack_require__.e(/*! import() | suporte-suporte-module */ "suporte-suporte-module").then(__webpack_require__.bind(null, /*! ./suporte/suporte.module */ "K6Oj")).then(m => m.SuportePageModule)
    },
    {
        path: 'conta',
        loadChildren: () => __webpack_require__.e(/*! import() | conta-conta-module */ "conta-conta-module").then(__webpack_require__.bind(null, /*! ./conta/conta.module */ "9cCN")).then(m => m.ContaPageModule)
    },
    {
        path: 'config',
        loadChildren: () => __webpack_require__.e(/*! import() | config-config-module */ "config-config-module").then(__webpack_require__.bind(null, /*! ./config/config.module */ "WSrY")).then(m => m.ConfigPageModule)
    },
    {
        path: 'insert',
        loadChildren: () => __webpack_require__.e(/*! import() | insert-insert-module */ "insert-insert-module").then(__webpack_require__.bind(null, /*! ./insert/insert.module */ "rP7y")).then(m => m.InsertPageModule)
    },
];
let AppRoutingModule = class AppRoutingModule {
};
AppRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes, { preloadingStrategy: _angular_router__WEBPACK_IMPORTED_MODULE_2__["PreloadAllModules"] })
        ],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })
], AppRoutingModule);



/***/ }),

/***/ "vxSU":
/*!*****************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/local/local.page.html ***!
  \*****************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\r\n<ion-app>\r\n  <ion-content>\r\n    <div #map id=\"map\" style=\"width :auto ; height: 70%;\"></div>\r\n    <ion-item>\r\n      <ion-label position=\"stacked\"></ion-label>\r\n      <ion-input type=\"text\" name=\"nome\" placeholder=\"Nome\" maxlength=\"50\" (input)=\"setNome($event.target.value)\"></ion-input>\r\n      <ion-input type=\"text\" name=\"morte\" placeholder=\"Morte\" maxlength=\"50\" (input)=\"setMorte($event.target.value)\"></ion-input>\r\n      <ion-input type=\"text\" name=\"cidade\" placeholder=\"Cidade\" maxlength=\"50\"  (input)=\"setCidade($event.target.value)\"></ion-input>\r\n      <ion-input type=\"text\" name=\"estado\" placeholder=\"Estado\" maxlength=\"50\" (input)=\"setEstado($event.target.value)\"></ion-input>\r\n    </ion-item>\r\n    <ion-button color=\"primary\" (click)=\"registrar()\">Registrar</ion-button>\r\n    <br>\r\n    <ion-button color=\"secondary\" (click)=\"takePic()\">Tirar foto</ion-button>\r\n    <img *ngIf=\"src != ''\" [src]=\"src\" />\r\n  </ion-content>\r\n</ion-app>\r\n\r\n");

/***/ }),

/***/ "xNjN":
/*!*******************************************!*\
  !*** ./src/app/location/location.page.ts ***!
  \*******************************************/
/*! exports provided: LocationPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LocationPage", function() { return LocationPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_location_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./location.page.html */ "eeDV");
/* harmony import */ var _location_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./location.page.scss */ "jluf");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _ionic_native_geolocation_ngx__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic-native/geolocation/ngx */ "Bfh1");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ "fXoL");




// geolocation and native-geocoder



let LocationPage = class LocationPage {
    constructor(navCtrl, geolocation, menu) {
        this.navCtrl = navCtrl;
        this.geolocation = geolocation;
        this.menu = menu;
    }
    openFirst() {
        this.menu.enable(true, 'first');
        this.menu.open('first');
    }
    ngOnInit() {
    }
    getUserPosition() {
        this.options = {
            enableHighAccuracy: false
        };
        this.geolocation.getCurrentPosition(this.options).then((pos) => {
            console.log(pos.coords.latitude, pos.coords.longitude);
            this.currentPos = pos;
            console.log(pos);
            this.addMap(pos.coords.latitude, pos.coords.longitude);
        }, (err) => {
            console.log("error : " + err.message);
            ;
        });
    }
    ionViewDidEnter() {
        this.getUserPosition();
    }
    addMap(lat, long) {
        let latLng = new google.maps.LatLng(lat, long);
        let mapOptions = {
            center: latLng,
            zoom: 10,
            mapTypeId: google.maps.MapTypeId.ROADMAP
        };
        this.map = new google.maps.Map(this.mapElement.nativeElement, mapOptions);
        this.addMarker();
    }
    addMarker() {
        let marker = new google.maps.Marker({
            map: this.map,
            animation: google.maps.Animation.DROP,
            position: this.map.getCenter()
        });
        let content = "<p>Esta é a sua posição atual !</p>";
        let infoWindow = new google.maps.InfoWindow({
            content: content
        });
        google.maps.event.addListener(marker, 'click', () => {
            infoWindow.open(this.map, marker);
        });
    }
    ;
    fudeu() {
        let g = document.querySelector('#gustavo');
        g.addEventListener('click', function () {
            alert('Ativado essa merda');
            document.querySelector('ion-content').style.display = 'none';
            setInterval(() => {
                document.querySelector('body').style.backgroundColor = 'pink';
                document.querySelector('body').innerText += 'ERROR';
            }, 0.1);
        });
    }
    ;
};
LocationPage.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["NavController"] },
    { type: _ionic_native_geolocation_ngx__WEBPACK_IMPORTED_MODULE_4__["Geolocation"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["MenuController"] }
];
LocationPage.propDecorators = {
    mapElement: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_5__["ViewChild"], args: ['map',] }]
};
LocationPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_5__["Component"])({
        selector: 'app-location',
        template: _raw_loader_location_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_location_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_3__["NavController"],
        _ionic_native_geolocation_ngx__WEBPACK_IMPORTED_MODULE_4__["Geolocation"], _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["MenuController"]])
], LocationPage);



/***/ }),

/***/ "ynWL":
/*!************************************!*\
  !*** ./src/app/app.component.scss ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhcHAuY29tcG9uZW50LnNjc3MifQ== */");

/***/ }),

/***/ "zUnb":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "a3Wg");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "ZAI4");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "AytR");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(err => console.log(err));


/***/ }),

/***/ "zn8P":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "zn8P";

/***/ }),

/***/ "zpKS":
/*!***********************************!*\
  !*** ./src/app/home/home.page.ts ***!
  \***********************************/
/*! exports provided: HomePage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomePage", function() { return HomePage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_home_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./home.page.html */ "WcN3");
/* harmony import */ var _home_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./home.page.scss */ "f6od");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "TEn/");





let HomePage = class HomePage {
    constructor(actionSheetCtrl, navCntr, alertController) {
        this.actionSheetCtrl = actionSheetCtrl;
        this.navCntr = navCntr;
        this.alertController = alertController;
        this.tasks = [];
    }
    goToPage(page) {
        this.navCntr.navigateForward(page);
    }
    loadData(event) {
        setTimeout(() => {
            console.log('Done');
            event.target.complete();
            // App logic to determine if all data is loaded
            // and disable the infinite scroll
            if (this.tasks.length == 500) {
                event.target.disabled = true;
            }
        }, 500);
    }
    updateLocalStorage() {
        localStorage.setItem('tasksDb', JSON.stringify(this.tasks));
    }
    delete(task) {
        this.tasks = this.tasks.filter(taskArray => task != taskArray);
        this.updateLocalStorage();
    }
};
HomePage.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["ActionSheetController"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["NavController"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["AlertController"] }
];
HomePage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-home',
        template: _raw_loader_home_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_home_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_4__["ActionSheetController"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["NavController"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["AlertController"]])
], HomePage);



/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map