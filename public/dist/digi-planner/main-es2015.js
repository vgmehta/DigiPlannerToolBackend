(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./$$_lazy_route_resource lazy recursive":
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
webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/admin-board services/admin-board.service.ts":
/*!*************************************************************!*\
  !*** ./src/app/admin-board services/admin-board.service.ts ***!
  \*************************************************************/
/*! exports provided: AdminBoardService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdminBoardService", function() { return AdminBoardService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");



class AdminBoardService {
    constructor(http) {
        this.http = http;
    }
    sendingData(base64, roomCode, userId) {
        this.base64 = base64;
        const post = {
            base64: this.base64,
            is_published: 'true'
        };
        return this.http.put(`http://digi-planner-tool-digi-planner-tool.apps.123.252.203.195.nip.io/board/${userId}/${roomCode}`, post, { responseType: 'json' });
    }
}
AdminBoardService.ɵfac = function AdminBoardService_Factory(t) { return new (t || AdminBoardService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"])); };
AdminBoardService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: AdminBoardService, factory: AdminBoardService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AdminBoardService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"] }]; }, null); })();


/***/ }),

/***/ "./src/app/admin-board/admin-board.component.ts":
/*!******************************************************!*\
  !*** ./src/app/admin-board/admin-board.component.ts ***!
  \******************************************************/
/*! exports provided: AdminBoardComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdminBoardComponent", function() { return AdminBoardComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var fabric__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! fabric */ "./node_modules/fabric/dist/fabric.js");
/* harmony import */ var fabric__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(fabric__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _admin_board_services_admin_board_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../admin-board services/admin-board.service */ "./src/app/admin-board services/admin-board.service.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var angularx_social_login__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! angularx-social-login */ "./node_modules/angularx-social-login/__ivy_ngcc__/fesm2015/angularx-social-login.js");
/* harmony import */ var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/snack-bar */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/snack-bar.js");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/button */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/button.js");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/icon */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/icon.js");










function AdminBoardComponent_div_28_mat_icon_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "done");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleProp"]("color", "black");
} }
function AdminBoardComponent_div_28_Template(rf, ctx) { if (rf & 1) {
    const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "button", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AdminBoardComponent_div_28_Template_button_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r4); const color_r1 = ctx.$implicit; const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r3.changeColor(color_r1); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, AdminBoardComponent_div_28_mat_icon_2_Template, 2, 2, "mat-icon", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const color_r1 = ctx.$implicit;
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMap"](color_r1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("title", color_r1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.selectedColor == color_r1);
} }
class AdminBoardComponent {
    constructor(route, adminBoardService, location, authService, snackBar) {
        this.route = route;
        this.adminBoardService = adminBoardService;
        this.location = location;
        this.authService = authService;
        this.snackBar = snackBar;
        this.title = 'adminboard';
        this.colors = ['aqua', 'BlueViolet', 'orange', 'magenta', 'red', 'blue', 'lime'];
        this.jsonString = '';
    }
    ngOnInit() {
        this.canvas = new fabric__WEBPACK_IMPORTED_MODULE_1__["fabric"].Canvas('canvas', {
            backgroundColor: 'white',
            isDrawingMode: false,
        });
        this.canvas.setHeight(650);
        this.canvas.setWidth(1190);
        this.selectedColor = 'aqua';
        this.route.queryParams.subscribe((params) => {
            this.roomCode = params['roomCode'];
            this.boardTitle = params['boardTitle'];
        });
        this.authService.authState.subscribe((user) => {
            this.currentUser = user;
            this.userId = this.currentUser.email;
        });
    }
    exportJsonAdmin() {
        this.convertedCanvas = this.canvas.toDataURL();
        this.adminBoardService
            .sendingData(this.convertedCanvas, this.roomCode, this.userId)
            .subscribe((responseData) => {
            this.showSnackBar(responseData["messages"][0], 'OK');
        });
        this.location.back();
    }
    showSnackBar(message, action) {
        this.snackBar.open(message, action, {
            duration: 3000,
        });
    }
    togglePen() {
        this.canvas.isDrawingMode = !this.canvas.isDrawingMode;
    }
    dialog() {
        fabric__WEBPACK_IMPORTED_MODULE_1__["fabric"].Image.fromURL('../assets/images/dialog.jpg', (img) => {
            const scale = 150 / img.width;
            img.set({
                transparentCorners: false,
                top: 10,
                left: 10,
                scaleX: scale,
                scaleY: scale,
            });
            this.canvas.add(img);
        });
        this.canvas.isDrawingMode = false;
    }
    cloud() {
        fabric__WEBPACK_IMPORTED_MODULE_1__["fabric"].Image.fromURL('../assets/images/cloud.png', (img) => {
            const scale = 150 / img.width;
            img.set({
                top: 10,
                left: 10,
                scaleX: scale,
                scaleY: scale,
            });
            this.canvas.add(img);
        });
        this.canvas.isDrawingMode = false;
    }
    reset() {
        if (confirm('Are you sure you want to reset canvas?')) {
            this.canvas.clear();
            this.canvas.isDrawingMode = false;
        }
    }
    circle() {
        this.canvas.isDrawingMode = false;
        this.canvas.add(new fabric__WEBPACK_IMPORTED_MODULE_1__["fabric"].Circle({
            radius: 50,
            fill: this.selectedColor,
            left: 10,
            top: 10,
        }));
    }
    box() {
        this.canvas.isDrawingMode = false;
        this.canvas.add(new fabric__WEBPACK_IMPORTED_MODULE_1__["fabric"].Rect({
            width: 100,
            height: 100,
            fill: this.selectedColor,
            left: 10,
            top: 10,
        }));
    }
    triangle() {
        this.canvas.isDrawingMode = false;
        this.canvas.add(new fabric__WEBPACK_IMPORTED_MODULE_1__["fabric"].Triangle({
            width: 80,
            height: 80,
            fill: this.selectedColor,
            left: 10,
            top: 10,
        }));
    }
    textBox() {
        this.canvas.isDrawingMode = false;
        this.canvas.add(new fabric__WEBPACK_IMPORTED_MODULE_1__["fabric"].Textbox('MyText', {
            width: 150,
            top: 5,
            left: 5,
            stroke: this.selectedColor,
            fontSize: 20,
            fontFamily: 'Verdana',
            textAlign: 'center',
        }));
    }
    changeColor(color) {
        this.selectedColor = color;
    }
    deleteObjects() {
        this.canvas.isDrawingMode = false;
        var activeObject = this.canvas.getActiveObjects();
        if (activeObject) {
            if (confirm('Are you sure to delete selection?')) {
                activeObject.forEach((object) => {
                    this.canvas.remove(object);
                });
            }
            this.canvas.discardActiveObject();
        }
    }
}
AdminBoardComponent.ɵfac = function AdminBoardComponent_Factory(t) { return new (t || AdminBoardComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_admin_board_services_admin_board_service__WEBPACK_IMPORTED_MODULE_3__["AdminBoardService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_common__WEBPACK_IMPORTED_MODULE_4__["Location"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](angularx_social_login__WEBPACK_IMPORTED_MODULE_5__["AuthService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_6__["MatSnackBar"])); };
AdminBoardComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AdminBoardComponent, selectors: [["app-admin-board"]], decls: 40, vars: 2, consts: [[2, "text-align", "center"], [1, "button-row"], [1, "title"], [1, "button-row-right"], ["mat-flat-button", "", "title", "Pen", "color", "primary", 3, "click"], ["mat-flat-button", "", "title", "Box", "color", "primary", 1, "addShape", 3, "click"], ["mat-flat-button", "", "title", "Circle", "color", "primary", 3, "click"], ["mat-flat-button", "", "title", "Triangle", "color", "primary", 3, "click"], ["mat-flat-button", "", "title", "Cloud Shape", "color", "primary", 3, "click"], ["mat-flat-button", "", "title", "Dialog Box", "color", "primary", 3, "click"], ["mat-flat-button", "", "title", "TextBox", "color", "primary", 3, "click"], [2, "display", "inline-flex"], [1, "button-col"], [4, "ngFor", "ngForOf"], ["id", "canvas"], ["mat-fab", "", "title", "Reset", "color", "warn", 1, "clearButton", 3, "click"], ["mat-fab", "", "title", "Delete", "color", "warn", 3, "click"], ["title", "Save Canvas", "mat-fab", "", "color", "warn", 1, "convertCanvas", 3, "click"], ["mat-mini-fab", "", 2, "border", "1px solid black", 3, "title", "click"], [3, "color", 4, "ngIf"]], template: function AdminBoardComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "button", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AdminBoardComponent_Template_button_click_5_listener() { return ctx.togglePen(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "mat-icon");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "edit");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "button", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AdminBoardComponent_Template_button_click_8_listener() { return ctx.box(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "mat-icon");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "crop_3_2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "button", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AdminBoardComponent_Template_button_click_11_listener() { return ctx.circle(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "mat-icon");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "brightness_1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "button", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AdminBoardComponent_Template_button_click_14_listener() { return ctx.triangle(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "mat-icon");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "change_history");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "button", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AdminBoardComponent_Template_button_click_17_listener() { return ctx.cloud(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "mat-icon");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, "cloud_queue");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "button", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AdminBoardComponent_Template_button_click_20_listener() { return ctx.dialog(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "mat-icon");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, "chat_bubble_outline");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "button", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AdminBoardComponent_Template_button_click_23_listener() { return ctx.textBox(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "mat-icon");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25, "text_rotation_none");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](28, AdminBoardComponent_div_28_Template, 3, 5, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](29, "canvas", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "button", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AdminBoardComponent_Template_button_click_31_listener() { return ctx.reset(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "mat-icon");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](33, "settings_backup_restore");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "button", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AdminBoardComponent_Template_button_click_34_listener() { return ctx.deleteObjects(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "mat-icon");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](36, "delete_forever");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "button", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AdminBoardComponent_Template_button_click_37_listener() { return ctx.exportJsonAdmin(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "mat-icon");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](39, "save");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.boardTitle);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.colors);
    } }, directives: [_angular_material_button__WEBPACK_IMPORTED_MODULE_7__["MatButton"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_8__["MatIcon"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgForOf"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgIf"]], styles: [".title[_ngcontent-%COMP%]{\r\n  font-size: xx-large;\r\n  font-weight: bold;\r\n  float: left;\r\n  margin-top: 1%;\r\n}\r\n\r\n#canvas[_ngcontent-%COMP%]{\r\n  border: 2px solid black;\r\n  border-radius: 10px;\r\n\r\n}\r\n\r\n.button-col[_ngcontent-%COMP%]{\r\n  display: inline-block;\r\n  margin: auto 10px 0 10px;\r\n}\r\n\r\n.button-col[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]{\r\n  margin-top: 8px;\r\n  box-shadow: none;\r\n  display: block;\r\n}\r\n\r\n.input-element[_ngcontent-%COMP%] {\r\n  border: 1px solid black;\r\n  background: none;\r\n  padding: 0;\r\n  outline: none;\r\n  font: inherit;\r\n  text-align: start;\r\n  height: 30px;\r\n  width: 100%;\r\n}\r\n\r\n.button-row[_ngcontent-%COMP%]{\r\n  width: 1067px;\r\n  margin: 10px auto;\r\n  contain: content;\r\n}\r\n\r\n.button-row-left[_ngcontent-%COMP%]{\r\n  float: left;\r\n}\r\n\r\n.button-row-right[_ngcontent-%COMP%]{\r\n  float: right;\r\n}\r\n\r\n.button-row-left[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]{\r\n  margin-right: 8px;\r\n}\r\n\r\n.button-row-right[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]{\r\n  margin-left: 8px;\r\n}\r\n\r\n.mat-flat-button[_ngcontent-%COMP%]:hover {\r\n  background-color: #3F51B5;\r\n}\r\n\r\n.mat-fab[_ngcontent-%COMP%]:hover{\r\n  background-color: darkred;\r\n}\r\n\r\n.mat-mini-fab[_ngcontent-%COMP%]:hover{\r\n  opacity: 0.6;\r\n}\r\n\r\n.mat-h2[_ngcontent-%COMP%]{\r\n  text-align: center;\r\n  margin: 10px auto;\r\n  color: salmon;\r\n}\r\n\r\n.chocolate[_ngcontent-%COMP%]{\r\n  background-color: chocolate;\r\n}\r\n\r\n.olive[_ngcontent-%COMP%]{\r\n  background-color: #446600;\r\n}\r\n\r\n.orange[_ngcontent-%COMP%]{\r\n  background-color: orange;\r\n}\r\n\r\n.CornflowerBlue[_ngcontent-%COMP%]{\r\n  background-color: #1858cd;\r\n}\r\n\r\n.aqua[_ngcontent-%COMP%]{\r\n  background-color: aqua;\r\n}\r\n\r\n.BlueViolet[_ngcontent-%COMP%]{\r\n  background-color: #6918b4;\r\n}\r\n\r\n.salmon[_ngcontent-%COMP%]{\r\n  background-color: salmon;\r\n}\r\n\r\n.orange[_ngcontent-%COMP%]{\r\n  background-color: darkorange;\r\n}\r\n\r\n.white[_ngcontent-%COMP%]{\r\n  background-color: whitesmoke;\r\n}\r\n\r\n.red[_ngcontent-%COMP%]{\r\n  background-color: red;\r\n}\r\n\r\n.blue[_ngcontent-%COMP%]{\r\n  background-color: blue;\r\n}\r\n\r\n.lime[_ngcontent-%COMP%]{\r\n  background-color: lime;\r\n}\r\n\r\n.magenta[_ngcontent-%COMP%]{\r\n  background-color: magenta;\r\n}\r\n\r\n.mat-h2[_ngcontent-%COMP%]{\r\n  text-align: center;\r\n  margin: 20px auto;\r\n  color: salmon;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYWRtaW4tYm9hcmQvYWRtaW4tYm9hcmQuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLG1CQUFtQjtFQUNuQixpQkFBaUI7RUFDakIsV0FBVztFQUNYLGNBQWM7QUFDaEI7O0FBRUE7RUFDRSx1QkFBdUI7RUFDdkIsbUJBQW1COztBQUVyQjs7QUFDQTtFQUNFLHFCQUFxQjtFQUNyQix3QkFBd0I7QUFDMUI7O0FBRUE7RUFDRSxlQUFlO0VBQ2YsZ0JBQWdCO0VBQ2hCLGNBQWM7QUFDaEI7O0FBRUE7RUFDRSx1QkFBdUI7RUFDdkIsZ0JBQWdCO0VBQ2hCLFVBQVU7RUFDVixhQUFhO0VBQ2IsYUFBYTtFQUNiLGlCQUFpQjtFQUNqQixZQUFZO0VBQ1osV0FBVztBQUNiOztBQUVBO0VBQ0UsYUFBYTtFQUNiLGlCQUFpQjtFQUNqQixnQkFBZ0I7QUFDbEI7O0FBRUE7RUFDRSxXQUFXO0FBQ2I7O0FBRUE7RUFDRSxZQUFZO0FBQ2Q7O0FBRUE7RUFDRSxpQkFBaUI7QUFDbkI7O0FBRUE7RUFDRSxnQkFBZ0I7QUFDbEI7O0FBRUE7RUFDRSx5QkFBeUI7QUFDM0I7O0FBRUE7RUFDRSx5QkFBeUI7QUFDM0I7O0FBR0E7RUFDRSxZQUFZO0FBQ2Q7O0FBRUE7RUFDRSxrQkFBa0I7RUFDbEIsaUJBQWlCO0VBQ2pCLGFBQWE7QUFDZjs7QUFFQTtFQUNFLDJCQUEyQjtBQUM3Qjs7QUFFQTtFQUNFLHlCQUF5QjtBQUMzQjs7QUFFQTtFQUNFLHdCQUF3QjtBQUMxQjs7QUFFQTtFQUNFLHlCQUF5QjtBQUMzQjs7QUFFQTtFQUNFLHNCQUFzQjtBQUN4Qjs7QUFDQTtFQUNFLHlCQUF5QjtBQUMzQjs7QUFDQTtFQUNFLHdCQUF3QjtBQUMxQjs7QUFFQTtFQUNFLDRCQUE0QjtBQUM5Qjs7QUFFQTtFQUNFLDRCQUE0QjtBQUM5Qjs7QUFFQTtFQUNFLHFCQUFxQjtBQUN2Qjs7QUFFQTtFQUNFLHNCQUFzQjtBQUN4Qjs7QUFFQTtFQUNFLHNCQUFzQjtBQUN4Qjs7QUFFQTtFQUNFLHlCQUF5QjtBQUMzQjs7QUFFQTtFQUNFLGtCQUFrQjtFQUNsQixpQkFBaUI7RUFDakIsYUFBYTtBQUNmIiwiZmlsZSI6InNyYy9hcHAvYWRtaW4tYm9hcmQvYWRtaW4tYm9hcmQuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi50aXRsZXtcclxuICBmb250LXNpemU6IHh4LWxhcmdlO1xyXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gIGZsb2F0OiBsZWZ0O1xyXG4gIG1hcmdpbi10b3A6IDElO1xyXG59XHJcblxyXG4jY2FudmFze1xyXG4gIGJvcmRlcjogMnB4IHNvbGlkIGJsYWNrO1xyXG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XHJcblxyXG59XHJcbi5idXR0b24tY29se1xyXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICBtYXJnaW46IGF1dG8gMTBweCAwIDEwcHg7XHJcbn1cclxuXHJcbi5idXR0b24tY29sIGJ1dHRvbntcclxuICBtYXJnaW4tdG9wOiA4cHg7XHJcbiAgYm94LXNoYWRvdzogbm9uZTtcclxuICBkaXNwbGF5OiBibG9jaztcclxufVxyXG5cclxuLmlucHV0LWVsZW1lbnQge1xyXG4gIGJvcmRlcjogMXB4IHNvbGlkIGJsYWNrO1xyXG4gIGJhY2tncm91bmQ6IG5vbmU7XHJcbiAgcGFkZGluZzogMDtcclxuICBvdXRsaW5lOiBub25lO1xyXG4gIGZvbnQ6IGluaGVyaXQ7XHJcbiAgdGV4dC1hbGlnbjogc3RhcnQ7XHJcbiAgaGVpZ2h0OiAzMHB4O1xyXG4gIHdpZHRoOiAxMDAlO1xyXG59XHJcblxyXG4uYnV0dG9uLXJvd3tcclxuICB3aWR0aDogMTA2N3B4O1xyXG4gIG1hcmdpbjogMTBweCBhdXRvO1xyXG4gIGNvbnRhaW46IGNvbnRlbnQ7XHJcbn1cclxuXHJcbi5idXR0b24tcm93LWxlZnR7XHJcbiAgZmxvYXQ6IGxlZnQ7XHJcbn1cclxuXHJcbi5idXR0b24tcm93LXJpZ2h0e1xyXG4gIGZsb2F0OiByaWdodDtcclxufVxyXG5cclxuLmJ1dHRvbi1yb3ctbGVmdCBidXR0b257XHJcbiAgbWFyZ2luLXJpZ2h0OiA4cHg7XHJcbn1cclxuXHJcbi5idXR0b24tcm93LXJpZ2h0IGJ1dHRvbntcclxuICBtYXJnaW4tbGVmdDogOHB4O1xyXG59XHJcblxyXG4ubWF0LWZsYXQtYnV0dG9uOmhvdmVyIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjM0Y1MUI1O1xyXG59XHJcblxyXG4ubWF0LWZhYjpob3ZlcntcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiBkYXJrcmVkO1xyXG59XHJcblxyXG5cclxuLm1hdC1taW5pLWZhYjpob3ZlcntcclxuICBvcGFjaXR5OiAwLjY7XHJcbn1cclxuXHJcbi5tYXQtaDJ7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIG1hcmdpbjogMTBweCBhdXRvO1xyXG4gIGNvbG9yOiBzYWxtb247XHJcbn1cclxuXHJcbi5jaG9jb2xhdGV7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogY2hvY29sYXRlO1xyXG59XHJcblxyXG4ub2xpdmV7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogIzQ0NjYwMDtcclxufVxyXG5cclxuLm9yYW5nZXtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiBvcmFuZ2U7XHJcbn1cclxuXHJcbi5Db3JuZmxvd2VyQmx1ZXtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMTg1OGNkO1xyXG59XHJcblxyXG4uYXF1YXtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiBhcXVhO1xyXG59XHJcbi5CbHVlVmlvbGV0e1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICM2OTE4YjQ7XHJcbn1cclxuLnNhbG1vbntcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiBzYWxtb247XHJcbn1cclxuXHJcbi5vcmFuZ2V7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogZGFya29yYW5nZTtcclxufVxyXG5cclxuLndoaXRle1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlc21va2U7XHJcbn1cclxuXHJcbi5yZWR7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogcmVkO1xyXG59XHJcblxyXG4uYmx1ZXtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiBibHVlO1xyXG59XHJcblxyXG4ubGltZXtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiBsaW1lO1xyXG59XHJcblxyXG4ubWFnZW50YXtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiBtYWdlbnRhO1xyXG59XHJcblxyXG4ubWF0LWgye1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICBtYXJnaW46IDIwcHggYXV0bztcclxuICBjb2xvcjogc2FsbW9uO1xyXG59XHJcbiJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AdminBoardComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-admin-board',
                templateUrl: './admin-board.component.html',
                styleUrls: ['./admin-board.component.css'],
            }]
    }], function () { return [{ type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] }, { type: _admin_board_services_admin_board_service__WEBPACK_IMPORTED_MODULE_3__["AdminBoardService"] }, { type: _angular_common__WEBPACK_IMPORTED_MODULE_4__["Location"] }, { type: angularx_social_login__WEBPACK_IMPORTED_MODULE_5__["AuthService"] }, { type: _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_6__["MatSnackBar"] }]; }, null); })();


/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./login/login.component */ "./src/app/login/login.component.ts");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./home/home.component */ "./src/app/home/home.component.ts");
/* harmony import */ var _user_board_user_board_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./user-board/user-board.component */ "./src/app/user-board/user-board.component.ts");
/* harmony import */ var _admin_board_admin_board_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./admin-board/admin-board.component */ "./src/app/admin-board/admin-board.component.ts");
/* harmony import */ var _view_boards_view_boards_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./view-boards/view-boards.component */ "./src/app/view-boards/view-boards.component.ts");









const routes = [
    { path: 'login', component: _login_login_component__WEBPACK_IMPORTED_MODULE_2__["LoginComponent"] },
    { path: 'home', component: _home_home_component__WEBPACK_IMPORTED_MODULE_3__["HomeComponent"] },
    { path: 'userboard', component: _user_board_user_board_component__WEBPACK_IMPORTED_MODULE_4__["UserBoardComponent"] },
    { path: 'adminboard', component: _admin_board_admin_board_component__WEBPACK_IMPORTED_MODULE_5__["AdminBoardComponent"] },
    { path: 'viewboard', component: _view_boards_view_boards_component__WEBPACK_IMPORTED_MODULE_6__["ViewBoardsComponent"] },
    { path: '', redirectTo: '/login', pathMatch: 'full' }
];
class AppRoutingModule {
}
AppRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: AppRoutingModule });
AppRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function AppRoutingModule_Factory(t) { return new (t || AppRoutingModule)(); }, imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)],
        _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](AppRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)],
                exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var angularx_social_login__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! angularx-social-login */ "./node_modules/angularx-social-login/__ivy_ngcc__/fesm2015/angularx-social-login.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/toolbar */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/toolbar.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/button */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/button.js");
/* harmony import */ var _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/tooltip */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/tooltip.js");








function AppComponent_span_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r0.currentUser.email);
} }
function AppComponent_button_6_Template(rf, ctx) { if (rf & 1) {
    const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "img", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AppComponent_button_6_Template_img_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r3); const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r2.signOut(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
class AppComponent {
    constructor(authService, router) {
        this.authService = authService;
        this.router = router;
        this.title = 'digi-planner';
    }
    ngOnInit() {
        this.authService.authState.subscribe((user) => {
            this.currentUser = user;
        });
    }
    signOut() {
        this.authService.signOut();
    }
    goToHome() {
        if (this.currentUser) {
            this.router.navigate(['/home']);
        }
        else {
            console.log('not logged in');
            this.router.navigate(['/login']);
        }
    }
}
AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](angularx_social_login__WEBPACK_IMPORTED_MODULE_1__["AuthService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"])); };
AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["app-root"]], decls: 8, vars: 2, consts: [["src", "../assets/library.png", "width", "25", "height", "25"], [1, "title", 3, "click"], [1, "spacer"], ["class", "userIdLabel", 4, "ngIf"], ["mat-button", "", "matTooltip", "logout", "class", "logoutBtn", 4, "ngIf"], [1, "userIdLabel"], ["mat-button", "", "matTooltip", "logout", 1, "logoutBtn"], ["src", "../assets/exit.png", "width", "25", "height", "25", 3, "click"]], template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-toolbar");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "img", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "span", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AppComponent_Template_span_click_2_listener() { return ctx.goToHome(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, " DigiPlanner");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "span", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, AppComponent_span_5_Template, 2, 1, "span", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, AppComponent_button_6_Template, 2, 0, "button", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "router-outlet");
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.currentUser);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.currentUser);
    } }, directives: [_angular_material_toolbar__WEBPACK_IMPORTED_MODULE_3__["MatToolbar"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgIf"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterOutlet"], _angular_material_button__WEBPACK_IMPORTED_MODULE_5__["MatButton"], _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_6__["MatTooltip"]], styles: ["mat-toolbar[_ngcontent-%COMP%]{\r\n    background-color: #0080FF;\r\n    color:white;\r\n}\r\n\r\n.title[_ngcontent-%COMP%]{\r\n    margin-left:5px;\r\n    cursor:pointer;\r\n    background-color: rgba(0, 128, 255, 0.664);\r\n}\r\n\r\n.spacer[_ngcontent-%COMP%]{\r\n    flex: 1 1 auto;\r\n}\r\n\r\n.userIdLabel[_ngcontent-%COMP%]{\r\n    font-size: 14px;\r\n    padding:10px;\r\n    color:white;\r\n}\r\n\r\n.logoutBtn[_ngcontent-%COMP%]:hover{\r\n    background-color: rgb(67, 160, 253);\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXBwLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSx5QkFBeUI7SUFDekIsV0FBVztBQUNmOztBQUVBO0lBQ0ksZUFBZTtJQUNmLGNBQWM7SUFDZCwwQ0FBMEM7QUFDOUM7O0FBRUE7SUFDSSxjQUFjO0FBQ2xCOztBQUVBO0lBQ0ksZUFBZTtJQUNmLFlBQVk7SUFDWixXQUFXO0FBQ2Y7O0FBR0E7SUFDSSxtQ0FBbUM7QUFDdkMiLCJmaWxlIjoic3JjL2FwcC9hcHAuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIm1hdC10b29sYmFye1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzAwODBGRjtcclxuICAgIGNvbG9yOndoaXRlO1xyXG59XHJcblxyXG4udGl0bGV7XHJcbiAgICBtYXJnaW4tbGVmdDo1cHg7XHJcbiAgICBjdXJzb3I6cG9pbnRlcjtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMTI4LCAyNTUsIDAuNjY0KTtcclxufVxyXG5cclxuLnNwYWNlcntcclxuICAgIGZsZXg6IDEgMSBhdXRvO1xyXG59XHJcblxyXG4udXNlcklkTGFiZWx7XHJcbiAgICBmb250LXNpemU6IDE0cHg7XHJcbiAgICBwYWRkaW5nOjEwcHg7XHJcbiAgICBjb2xvcjp3aGl0ZTtcclxufVxyXG5cclxuXHJcbi5sb2dvdXRCdG46aG92ZXJ7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoNjcsIDE2MCwgMjUzKTtcclxufSJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-root',
                templateUrl: './app.component.html',
                styleUrls: ['./app.component.css']
            }]
    }], function () { return [{ type: angularx_social_login__WEBPACK_IMPORTED_MODULE_1__["AuthService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }]; }, null); })();


/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: provideConfig, AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "provideConfig", function() { return provideConfig; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./login/login.component */ "./src/app/login/login.component.ts");
/* harmony import */ var _admin_board_admin_board_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./admin-board/admin-board.component */ "./src/app/admin-board/admin-board.component.ts");
/* harmony import */ var _user_board_user_board_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./user-board/user-board.component */ "./src/app/user-board/user-board.component.ts");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/animations.js");
/* harmony import */ var _user_board_services_shape_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./user-board-services/shape.service */ "./src/app/user-board-services/shape.service.ts");
/* harmony import */ var _material_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./material.module */ "./src/app/material.module.ts");
/* harmony import */ var angularx_social_login__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! angularx-social-login */ "./node_modules/angularx-social-login/__ivy_ngcc__/fesm2015/angularx-social-login.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./home/home.component */ "./src/app/home/home.component.ts");
/* harmony import */ var _join_room_dialog_join_room_dialog_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./join-room-dialog/join-room-dialog.component */ "./src/app/join-room-dialog/join-room-dialog.component.ts");
/* harmony import */ var _view_boards_view_boards_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./view-boards/view-boards.component */ "./src/app/view-boards/view-boards.component.ts");
/* harmony import */ var _create_board_dialog_create_board_dialog_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./create-board-dialog/create-board-dialog.component */ "./src/app/create-board-dialog/create-board-dialog.component.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./constants */ "./src/app/constants.ts");

















// import { SocketIoModule, SocketIoConfig } from 'ngx-socket-io';


const config = new angularx_social_login__WEBPACK_IMPORTED_MODULE_9__["AuthServiceConfig"]([
    {
        id: angularx_social_login__WEBPACK_IMPORTED_MODULE_9__["GoogleLoginProvider"].PROVIDER_ID,
        provider: new angularx_social_login__WEBPACK_IMPORTED_MODULE_9__["GoogleLoginProvider"](_constants__WEBPACK_IMPORTED_MODULE_16__["clientId"])
    },
]);
// const socketConfig: SocketIoConfig = { url: 'http://localhost:4200', options: {} };
function provideConfig() {
    return config;
}
class AppModule {
}
AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"]] });
AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ factory: function AppModule_Factory(t) { return new (t || AppModule)(); }, providers: [
        _user_board_services_shape_service__WEBPACK_IMPORTED_MODULE_7__["ShapeService"],
        {
            provide: angularx_social_login__WEBPACK_IMPORTED_MODULE_9__["AuthServiceConfig"],
            useFactory: provideConfig
        }
    ], imports: [[
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
            _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_6__["BrowserAnimationsModule"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_15__["HttpClientModule"],
            angularx_social_login__WEBPACK_IMPORTED_MODULE_9__["SocialLoginModule"],
            _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_6__["BrowserAnimationsModule"],
            _material_module__WEBPACK_IMPORTED_MODULE_8__["MatModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_10__["AppRoutingModule"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_15__["HttpClientModule"],
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"],
        _login_login_component__WEBPACK_IMPORTED_MODULE_3__["LoginComponent"],
        _admin_board_admin_board_component__WEBPACK_IMPORTED_MODULE_4__["AdminBoardComponent"],
        _user_board_user_board_component__WEBPACK_IMPORTED_MODULE_5__["UserBoardComponent"],
        _home_home_component__WEBPACK_IMPORTED_MODULE_11__["HomeComponent"],
        _join_room_dialog_join_room_dialog_component__WEBPACK_IMPORTED_MODULE_12__["JoinRoomDialogComponent"],
        _view_boards_view_boards_component__WEBPACK_IMPORTED_MODULE_13__["ViewBoardsComponent"],
        _create_board_dialog_create_board_dialog_component__WEBPACK_IMPORTED_MODULE_14__["CreateBoardDialogComponent"]], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
        _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_6__["BrowserAnimationsModule"],
        _angular_common_http__WEBPACK_IMPORTED_MODULE_15__["HttpClientModule"],
        angularx_social_login__WEBPACK_IMPORTED_MODULE_9__["SocialLoginModule"],
        _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_6__["BrowserAnimationsModule"],
        _material_module__WEBPACK_IMPORTED_MODULE_8__["MatModule"],
        _app_routing_module__WEBPACK_IMPORTED_MODULE_10__["AppRoutingModule"],
        _angular_common_http__WEBPACK_IMPORTED_MODULE_15__["HttpClientModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AppModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
                declarations: [
                    _app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"],
                    _login_login_component__WEBPACK_IMPORTED_MODULE_3__["LoginComponent"],
                    _admin_board_admin_board_component__WEBPACK_IMPORTED_MODULE_4__["AdminBoardComponent"],
                    _user_board_user_board_component__WEBPACK_IMPORTED_MODULE_5__["UserBoardComponent"],
                    _home_home_component__WEBPACK_IMPORTED_MODULE_11__["HomeComponent"],
                    _join_room_dialog_join_room_dialog_component__WEBPACK_IMPORTED_MODULE_12__["JoinRoomDialogComponent"],
                    _view_boards_view_boards_component__WEBPACK_IMPORTED_MODULE_13__["ViewBoardsComponent"],
                    _create_board_dialog_create_board_dialog_component__WEBPACK_IMPORTED_MODULE_14__["CreateBoardDialogComponent"],
                ],
                imports: [
                    _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                    _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_6__["BrowserAnimationsModule"],
                    _angular_common_http__WEBPACK_IMPORTED_MODULE_15__["HttpClientModule"],
                    angularx_social_login__WEBPACK_IMPORTED_MODULE_9__["SocialLoginModule"],
                    _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_6__["BrowserAnimationsModule"],
                    _material_module__WEBPACK_IMPORTED_MODULE_8__["MatModule"],
                    _app_routing_module__WEBPACK_IMPORTED_MODULE_10__["AppRoutingModule"],
                    _angular_common_http__WEBPACK_IMPORTED_MODULE_15__["HttpClientModule"],
                ],
                entryComponents: [
                    _join_room_dialog_join_room_dialog_component__WEBPACK_IMPORTED_MODULE_12__["JoinRoomDialogComponent"],
                    _create_board_dialog_create_board_dialog_component__WEBPACK_IMPORTED_MODULE_14__["CreateBoardDialogComponent"]
                ],
                providers: [
                    _user_board_services_shape_service__WEBPACK_IMPORTED_MODULE_7__["ShapeService"],
                    {
                        provide: angularx_social_login__WEBPACK_IMPORTED_MODULE_9__["AuthServiceConfig"],
                        useFactory: provideConfig
                    }
                ],
                bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/board.service.ts":
/*!**********************************!*\
  !*** ./src/app/board.service.ts ***!
  \**********************************/
/*! exports provided: BoardService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BoardService", function() { return BoardService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./constants */ "./src/app/constants.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");




class BoardService {
    constructor(http) {
        this.http = http;
    }
    isExist(userId, room_code) {
        return this.http.get(`${_constants__WEBPACK_IMPORTED_MODULE_1__["URI"]}/room/${userId}/${room_code}`);
    }
    createBoard(room_code, board_title, userId) {
        return this.http.post(`${_constants__WEBPACK_IMPORTED_MODULE_1__["URI"]}/board/${userId}/${room_code}`, { room_title: board_title });
    }
    addJoinedRoom(room_code, userId) {
        return this.http.post(`${_constants__WEBPACK_IMPORTED_MODULE_1__["URI"]}/room/${userId}/${room_code}`, {});
    }
    viewBoard(userId) {
        return this.http.get(`${_constants__WEBPACK_IMPORTED_MODULE_1__["URI"]}/user/${userId}`);
    }
}
BoardService.ɵfac = function BoardService_Factory(t) { return new (t || BoardService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"])); };
BoardService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: BoardService, factory: BoardService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](BoardService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }]; }, null); })();


/***/ }),

/***/ "./src/app/constants.ts":
/*!******************************!*\
  !*** ./src/app/constants.ts ***!
  \******************************/
/*! exports provided: URI, clientId */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "URI", function() { return URI; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "clientId", function() { return clientId; });
const PORT = '8080';
const URI = `http://digi-planner-tool-digi-planner-tool.apps.123.252.203.195.nip.io`;
//const clientId:string='610664320073-4ik734pbbflijv056jr130n5k6e7ia8q.apps.googleusercontent.com';
const clientId = '610664320073-4oui7dgr99meb3n28m5ljp25f65fmf79.apps.googleusercontent.com';



/***/ }),

/***/ "./src/app/create-board-dialog/create-board-dialog.component.ts":
/*!**********************************************************************!*\
  !*** ./src/app/create-board-dialog/create-board-dialog.component.ts ***!
  \**********************************************************************/
/*! exports provided: CreateBoardDialogComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CreateBoardDialogComponent", function() { return CreateBoardDialogComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material/dialog */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/dialog.js");
/* harmony import */ var _board_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../board.service */ "./src/app/board.service.ts");
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/form-field */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/form-field.js");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/input */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/input.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/button */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/button.js");










function CreateBoardDialogComponent_p_11_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "roomcode already exist");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
class CreateBoardDialogComponent {
    constructor(data, dialogRef, boardService) {
        this.data = data;
        this.dialogRef = dialogRef;
        this.boardService = boardService;
        this.isexist = false;
        this.emptyRoomCode = true;
        this.emptyBoardtitle = true;
    }
    ngOnInit() {
    }
    onCancel() {
        this.dialogRef.close();
    }
    validateTitle(boardtitle) {
        this.emptyBoardtitle = boardtitle ? false : true;
    }
    validateRoomCode(roomcode) {
        if (roomcode && roomcode.length >= 4) {
            this.boardService.isExist(this.data.userId, roomcode).subscribe((result) => {
                this.isexist = result['success'];
                this.emptyRoomCode = false;
            }, (err) => {
                this.isexist = false;
                this.emptyRoomCode = false;
            });
        }
        else {
            this.isexist = false;
            this.emptyRoomCode = true;
        }
    }
}
CreateBoardDialogComponent.ɵfac = function CreateBoardDialogComponent_Factory(t) { return new (t || CreateBoardDialogComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MAT_DIALOG_DATA"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MatDialogRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_board_service__WEBPACK_IMPORTED_MODULE_2__["BoardService"])); };
CreateBoardDialogComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: CreateBoardDialogComponent, selectors: [["app-create-board-dialog"]], decls: 17, vars: 5, consts: [["mat-dialog-title", ""], ["matInput", "", "required", "", 3, "ngModel", "ngModelChange", "input"], ["class", "warning", 4, "ngIf"], ["mat-button", "", 3, "click"], ["mat-button", "", 3, "mat-dialog-close", "disabled"], [1, "warning"]], template: function CreateBoardDialogComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h2", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Enter Board details:");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "mat-form-field");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Enter board title:");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "input", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function CreateBoardDialogComponent_Template_input_ngModelChange_5_listener($event) { return ctx.data.boardTitle = $event; })("input", function CreateBoardDialogComponent_Template_input_input_5_listener() { return ctx.validateTitle(ctx.data.boardTitle); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "mat-form-field");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "Enter room code(Min 4 characters):");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "input", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function CreateBoardDialogComponent_Template_input_ngModelChange_10_listener($event) { return ctx.data.roomCode = $event; })("input", function CreateBoardDialogComponent_Template_input_input_10_listener() { return ctx.validateRoomCode(ctx.data.roomCode); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](11, CreateBoardDialogComponent_p_11_Template, 2, 0, "p", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "mat-dialog-actions");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "button", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CreateBoardDialogComponent_Template_button_click_13_listener() { return ctx.onCancel(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "Cancel");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "button", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "Create");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.data.boardTitle);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.data.roomCode);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.isexist);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("mat-dialog-close", ctx.data)("disabled", ctx.isexist || ctx.emptyRoomCode || ctx.emptyBoardtitle);
    } }, directives: [_angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MatDialogTitle"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_3__["MatFormField"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_3__["MatLabel"], _angular_material_input__WEBPACK_IMPORTED_MODULE_4__["MatInput"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["RequiredValidator"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NgModel"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["NgIf"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MatDialogActions"], _angular_material_button__WEBPACK_IMPORTED_MODULE_7__["MatButton"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MatDialogClose"]], styles: [".warning[_ngcontent-%COMP%]{\r\n    color:red;\r\n    font-size:10; \r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY3JlYXRlLWJvYXJkLWRpYWxvZy9jcmVhdGUtYm9hcmQtZGlhbG9nLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxTQUFTO0lBQ1QsWUFBWTtBQUNoQiIsImZpbGUiOiJzcmMvYXBwL2NyZWF0ZS1ib2FyZC1kaWFsb2cvY3JlYXRlLWJvYXJkLWRpYWxvZy5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLndhcm5pbmd7XHJcbiAgICBjb2xvcjpyZWQ7XHJcbiAgICBmb250LXNpemU6MTA7IFxyXG59Il19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CreateBoardDialogComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-create-board-dialog',
                templateUrl: './create-board-dialog.component.html',
                styleUrls: ['./create-board-dialog.component.css']
            }]
    }], function () { return [{ type: undefined, decorators: [{
                type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
                args: [_angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MAT_DIALOG_DATA"]]
            }] }, { type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MatDialogRef"] }, { type: _board_service__WEBPACK_IMPORTED_MODULE_2__["BoardService"] }]; }, null); })();


/***/ }),

/***/ "./src/app/home/home.component.ts":
/*!****************************************!*\
  !*** ./src/app/home/home.component.ts ***!
  \****************************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _join_room_dialog_join_room_dialog_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../join-room-dialog/join-room-dialog.component */ "./src/app/join-room-dialog/join-room-dialog.component.ts");
/* harmony import */ var _create_board_dialog_create_board_dialog_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../create-board-dialog/create-board-dialog.component */ "./src/app/create-board-dialog/create-board-dialog.component.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/dialog */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/dialog.js");
/* harmony import */ var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/snack-bar */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/snack-bar.js");
/* harmony import */ var angularx_social_login__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! angularx-social-login */ "./node_modules/angularx-social-login/__ivy_ngcc__/fesm2015/angularx-social-login.js");
/* harmony import */ var _board_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../board.service */ "./src/app/board.service.ts");
/* harmony import */ var _user_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../user.service */ "./src/app/user.service.ts");
/* harmony import */ var _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/grid-list */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/grid-list.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/button */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/button.js");













function HomeComponent_button_5_Template(rf, ctx) { if (rf & 1) {
    const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function HomeComponent_button_5_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r4); const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r3.createBoard(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "img", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, " Create New Board ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function HomeComponent_button_8_Template(rf, ctx) { if (rf & 1) {
    const _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function HomeComponent_button_8_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r6); const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r5.joinBoard(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "img", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, " Join Board ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function HomeComponent_button_11_Template(rf, ctx) { if (rf & 1) {
    const _r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function HomeComponent_button_11_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r8); const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r7.viewBoard(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "img", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, " View Existing Boards ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
class HomeComponent {
    constructor(route, dialog, snackBar, router, authService, boardService, userService) {
        this.route = route;
        this.dialog = dialog;
        this.snackBar = snackBar;
        this.router = router;
        this.authService = authService;
        this.boardService = boardService;
        this.userService = userService;
        this.isAdmin = false;
        this.isUser = false;
        this.inH = window.innerHeight * 0.9;
    }
    ngOnInit() {
        this.authService.authState.subscribe((user) => {
            this.currentUser = user;
            if (!this.currentUser) {
                this.router.navigate(['/login']);
            }
            else {
                this.userService.getUserType(this.currentUser.email).subscribe((result) => {
                    if (result['success']) {
                        let data = result['data'];
                        let userType = data['roles'][0] === 1 ? 'admin' : 'user';
                        this.isAdmin = userType === 'admin' ? true : false;
                        this.isUser = userType === 'user' ? true : false;
                    }
                });
            }
        });
    }
    createBoard() {
        let dialogRef = this.dialog.open(_create_board_dialog_create_board_dialog_component__WEBPACK_IMPORTED_MODULE_2__["CreateBoardDialogComponent"], {
            data: { boardTitle: null, roomCode: null, userId: this.currentUser.email }
        });
        dialogRef.afterClosed().subscribe((result) => {
            if (result && result.roomCode && result.boardTitle) {
                let roomCode = result.roomCode;
                let boardTitle = result.boardTitle;
                this.boardService.createBoard(roomCode, boardTitle, this.currentUser.email).subscribe((result) => {
                    if (result['success'] === true) {
                        this.showSnackBar('Board created!', 'OK');
                        this.router.navigate(['/adminboard'], {
                            queryParams: { roomCode: roomCode, boardTitle: boardTitle }
                        });
                    }
                    else {
                        this.showSnackBar('cannot create board!', 'cancel');
                    }
                }, (err) => {
                    console.log(err);
                });
            }
        });
    }
    joinBoard() {
        let dialogRef = this.dialog.open(_join_room_dialog_join_room_dialog_component__WEBPACK_IMPORTED_MODULE_1__["JoinRoomDialogComponent"], {
            data: { roomCode: null, userId: this.currentUser.email }
        });
        dialogRef.afterClosed().subscribe((result) => {
            if (result) {
                this.boardService.addJoinedRoom(result, this.currentUser.email).subscribe((value) => {
                    if (value['success']) {
                        this.showSnackBar('Now joining room', 'OK');
                        this.router.navigate(['/userboard'], { queryParams: { room_code: result } });
                    }
                    else {
                        this.showSnackBar('Unable to join room', 'cancel');
                    }
                }, (err) => {
                    console.log(err);
                    this.showSnackBar('Unable to join room', 'cancel');
                });
            }
            else {
                this.showSnackBar('Please enter the room code to join', 'cancel');
            }
        });
    }
    showSnackBar(message, action) {
        this.snackBar.open(message, action, {
            duration: 3000
        });
    }
    viewBoard() {
        this.router.navigate(['/viewboard']);
    }
}
HomeComponent.ɵfac = function HomeComponent_Factory(t) { return new (t || HomeComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_4__["MatDialog"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_5__["MatSnackBar"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](angularx_social_login__WEBPACK_IMPORTED_MODULE_6__["AuthService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_board_service__WEBPACK_IMPORTED_MODULE_7__["BoardService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_user_service__WEBPACK_IMPORTED_MODULE_8__["UserService"])); };
HomeComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: HomeComponent, selectors: [["app-home"]], decls: 13, vars: 4, consts: [["cols", "2", 3, "rowHeight"], ["colspan", "1", "rowspan", "1"], ["src", "../../assets/illustration.png", "width", "500", "height", "400", 1, "image_illus"], ["mat-button", "", "class", "card", 3, "click", 4, "ngIf"], ["mat-button", "", 1, "card", 3, "click"], ["src", "../../assets/strategy.png", "width", "48", "height", "48", 1, "icon"], ["src", "../../assets/meeting-room.png", "width", "48", "height", "48", 1, "icon"], ["src", "../../assets/eye.png", "width", "50", "height", "50", 1, "icon"]], template: function HomeComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-grid-list", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-grid-tile", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "img", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "mat-grid-tile", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, HomeComponent_button_5_Template, 3, 0, "button", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](8, HomeComponent_button_8_Template, 3, 0, "button", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](11, HomeComponent_button_11_Template, 3, 0, "button", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](12, "router-outlet");
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("rowHeight", ctx.inH);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.isAdmin);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.isAdmin || ctx.isUser);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.isAdmin || ctx.isUser);
    } }, directives: [_angular_material_grid_list__WEBPACK_IMPORTED_MODULE_9__["MatGridList"], _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_9__["MatGridTile"], _angular_common__WEBPACK_IMPORTED_MODULE_10__["NgIf"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterOutlet"], _angular_material_button__WEBPACK_IMPORTED_MODULE_11__["MatButton"]], styles: [".image_illus[_ngcontent-%COMP%]{\r\n    width:100%;\r\n    height:auto;\r\n    max-width: 500px;\r\n    float: left;\r\n    margin-top:10%;\r\n    margin-left: 12%;\r\n}\r\n\r\n.options[_ngcontent-%COMP%]{\r\n    clear:right;\r\n    float:right;\r\n    margin-right:20%;\r\n}\r\n\r\n.icon[_ngcontent-%COMP%]{\r\n  padding:10px;  \r\n}\r\n\r\n.card[_ngcontent-%COMP%]{\r\n    width: 400px;\r\n    text-align: left;\r\n    border: 2px solid #0080FF;\r\n    \r\n    color:rgb(0, 75, 150);\r\n    font-size: 18px;\r\n}\r\n\r\n.card[_ngcontent-%COMP%]:hover{\r\n    background-color: #0080FF;\r\n    color:white;\r\n}\r\n\r\n.mat-button-focus-overlay[_ngcontent-%COMP%] {\r\n    background-color:transparent;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaG9tZS9ob21lLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxVQUFVO0lBQ1YsV0FBVztJQUNYLGdCQUFnQjtJQUNoQixXQUFXO0lBQ1gsY0FBYztJQUNkLGdCQUFnQjtBQUNwQjs7QUFFQTtJQUNJLFdBQVc7SUFDWCxXQUFXO0lBQ1gsZ0JBQWdCO0FBQ3BCOztBQUVBO0VBQ0UsWUFBWTtBQUNkOztBQUVBO0lBQ0ksWUFBWTtJQUNaLGdCQUFnQjtJQUNoQix5QkFBeUI7SUFDekIsK0NBQStDO0lBQy9DLHFCQUFxQjtJQUNyQixlQUFlO0FBQ25COztBQUVBO0lBQ0kseUJBQXlCO0lBQ3pCLFdBQVc7QUFDZjs7QUFFQTtJQUNJLDRCQUE0QjtBQUNoQyIsImZpbGUiOiJzcmMvYXBwL2hvbWUvaG9tZS5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmltYWdlX2lsbHVze1xyXG4gICAgd2lkdGg6MTAwJTtcclxuICAgIGhlaWdodDphdXRvO1xyXG4gICAgbWF4LXdpZHRoOiA1MDBweDtcclxuICAgIGZsb2F0OiBsZWZ0O1xyXG4gICAgbWFyZ2luLXRvcDoxMCU7XHJcbiAgICBtYXJnaW4tbGVmdDogMTIlO1xyXG59XHJcblxyXG4ub3B0aW9uc3tcclxuICAgIGNsZWFyOnJpZ2h0O1xyXG4gICAgZmxvYXQ6cmlnaHQ7XHJcbiAgICBtYXJnaW4tcmlnaHQ6MjAlO1xyXG59XHJcblxyXG4uaWNvbntcclxuICBwYWRkaW5nOjEwcHg7ICBcclxufVxyXG5cclxuLmNhcmR7XHJcbiAgICB3aWR0aDogNDAwcHg7XHJcbiAgICB0ZXh0LWFsaWduOiBsZWZ0O1xyXG4gICAgYm9yZGVyOiAycHggc29saWQgIzAwODBGRjtcclxuICAgIC8qIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMTU0LCAyMDUsIDI1NSwwLjUpOyAqL1xyXG4gICAgY29sb3I6cmdiKDAsIDc1LCAxNTApO1xyXG4gICAgZm9udC1zaXplOiAxOHB4O1xyXG59XHJcblxyXG4uY2FyZDpob3ZlcntcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICMwMDgwRkY7XHJcbiAgICBjb2xvcjp3aGl0ZTtcclxufVxyXG5cclxuLm1hdC1idXR0b24tZm9jdXMtb3ZlcmxheSB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOnRyYW5zcGFyZW50O1xyXG59XHJcbiJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](HomeComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-home',
                templateUrl: './home.component.html',
                styleUrls: ['./home.component.css']
            }]
    }], function () { return [{ type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"] }, { type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_4__["MatDialog"] }, { type: _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_5__["MatSnackBar"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] }, { type: angularx_social_login__WEBPACK_IMPORTED_MODULE_6__["AuthService"] }, { type: _board_service__WEBPACK_IMPORTED_MODULE_7__["BoardService"] }, { type: _user_service__WEBPACK_IMPORTED_MODULE_8__["UserService"] }]; }, null); })();


/***/ }),

/***/ "./src/app/join-room-dialog/join-room-dialog.component.ts":
/*!****************************************************************!*\
  !*** ./src/app/join-room-dialog/join-room-dialog.component.ts ***!
  \****************************************************************/
/*! exports provided: JoinRoomDialogComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "JoinRoomDialogComponent", function() { return JoinRoomDialogComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material/dialog */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/dialog.js");
/* harmony import */ var _board_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../board.service */ "./src/app/board.service.ts");
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/form-field */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/form-field.js");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/input */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/input.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/button */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/button.js");










function JoinRoomDialogComponent_p_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r0.message);
} }
class JoinRoomDialogComponent {
    constructor(data, dialogRef, boardService) {
        this.data = data;
        this.dialogRef = dialogRef;
        this.boardService = boardService;
        this.isexist = true;
        this.emptyRoomCode = true;
        this.message = '';
    }
    ngOnInit() {
    }
    onCancel() {
        this.dialogRef.close();
    }
    validateRoomCode(roomcode) {
        if (roomcode && roomcode.length >= 4) {
            this.boardService.isExist(this.data.userId, roomcode).subscribe((result) => {
                console.log(result);
                if (result['success']) {
                    if (result['messages'][0] === 'Room Id exists and is accessible') {
                        this.isexist = true;
                    }
                    else {
                        this.isexist = false;
                        this.message = result['messages'][0];
                    }
                }
                else {
                    this.isexist = false;
                    this.message = result['messages'][0];
                }
                this.emptyRoomCode = false;
            }, (err) => {
                console.log(err);
                this.isexist = false;
                this.message = 'room code does not exist';
            });
        }
        else {
            this.isexist = true;
            this.emptyRoomCode = true;
        }
    }
}
JoinRoomDialogComponent.ɵfac = function JoinRoomDialogComponent_Factory(t) { return new (t || JoinRoomDialogComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MAT_DIALOG_DATA"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MatDialogRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_board_service__WEBPACK_IMPORTED_MODULE_2__["BoardService"])); };
JoinRoomDialogComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: JoinRoomDialogComponent, selectors: [["app-join-room-dialog"]], decls: 12, vars: 4, consts: [["mat-dialog-title", ""], ["matInput", "", "required", "", 3, "ngModel", "ngModelChange", "input"], ["class", "warning", 4, "ngIf"], ["mat-button", "", 3, "click"], ["mat-button", "", 3, "mat-dialog-close", "disabled"], [1, "warning"]], template: function JoinRoomDialogComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h2", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Room Code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "mat-form-field");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Enter room code(Min 4 characters):");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "input", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function JoinRoomDialogComponent_Template_input_ngModelChange_5_listener($event) { return ctx.data.roomCode = $event; })("input", function JoinRoomDialogComponent_Template_input_input_5_listener() { return ctx.validateRoomCode(ctx.data.roomCode); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, JoinRoomDialogComponent_p_6_Template, 2, 1, "p", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "mat-dialog-actions");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "button", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function JoinRoomDialogComponent_Template_button_click_8_listener() { return ctx.onCancel(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "Cancel");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "button", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "Join");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.data.roomCode);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.isexist);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("mat-dialog-close", ctx.data.roomCode)("disabled", !ctx.isexist || ctx.emptyRoomCode);
    } }, directives: [_angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MatDialogTitle"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_3__["MatFormField"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_3__["MatLabel"], _angular_material_input__WEBPACK_IMPORTED_MODULE_4__["MatInput"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["RequiredValidator"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NgModel"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["NgIf"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MatDialogActions"], _angular_material_button__WEBPACK_IMPORTED_MODULE_7__["MatButton"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MatDialogClose"]], styles: [".warning[_ngcontent-%COMP%]{\r\n    color:red;\r\n    font-size:10; \r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvam9pbi1yb29tLWRpYWxvZy9qb2luLXJvb20tZGlhbG9nLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxTQUFTO0lBQ1QsWUFBWTtBQUNoQiIsImZpbGUiOiJzcmMvYXBwL2pvaW4tcm9vbS1kaWFsb2cvam9pbi1yb29tLWRpYWxvZy5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLndhcm5pbmd7XHJcbiAgICBjb2xvcjpyZWQ7XHJcbiAgICBmb250LXNpemU6MTA7IFxyXG59Il19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](JoinRoomDialogComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-join-room-dialog',
                templateUrl: './join-room-dialog.component.html',
                styleUrls: ['./join-room-dialog.component.css']
            }]
    }], function () { return [{ type: undefined, decorators: [{
                type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
                args: [_angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MAT_DIALOG_DATA"]]
            }] }, { type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MatDialogRef"] }, { type: _board_service__WEBPACK_IMPORTED_MODULE_2__["BoardService"] }]; }, null); })();


/***/ }),

/***/ "./src/app/login/login.component.ts":
/*!******************************************!*\
  !*** ./src/app/login/login.component.ts ***!
  \******************************************/
/*! exports provided: LoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginComponent", function() { return LoginComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var angularx_social_login__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! angularx-social-login */ "./node_modules/angularx-social-login/__ivy_ngcc__/fesm2015/angularx-social-login.js");
/* harmony import */ var _user_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../user.service */ "./src/app/user.service.ts");
/* harmony import */ var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/snack-bar */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/snack-bar.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/grid-list */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/grid-list.js");
/* harmony import */ var _angular_material_radio__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/radio */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/radio.js");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/button */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/button.js");











function LoginComponent_div_0_div_5_Template(rf, ctx) { if (rf & 1) {
    const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h2");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Select user type and sign in:");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "mat-radio-group", 6, 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function LoginComponent_div_0_div_5_Template_mat_radio_group_change_3_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r4); const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r3.onChange($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "mat-radio-button", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Admin");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "mat-radio-button", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "User");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "button", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function LoginComponent_div_0_div_5_Template_button_click_10_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r4); const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r5.signIn(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](12, "img", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "span", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "Sign in with Google");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function LoginComponent_div_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-grid-list", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "mat-grid-tile", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "img", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "mat-grid-tile", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, LoginComponent_div_0_div_5_Template, 15, 0, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("rowHeight", ctx_r0.inH);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx_r0.currentUser);
} }
class LoginComponent {
    constructor(authService, userService, snackBar, router) {
        this.authService = authService;
        this.userService = userService;
        this.snackBar = snackBar;
        this.router = router;
        this.userType = "admin";
        this.isLoggedIn = true;
        this.inH = window.innerHeight * 0.9;
    }
    ngOnInit() {
        this.authService.authState.subscribe((user) => {
            this.currentUser = user;
            if (this.currentUser) {
                this.router.navigate(['/home']);
            }
            else {
                this.isLoggedIn = false;
            }
        });
    }
    onChange(event) {
        this.userType = event.value;
    }
    signIn() {
        this.authService.signIn(angularx_social_login__WEBPACK_IMPORTED_MODULE_1__["GoogleLoginProvider"].PROVIDER_ID).then((user) => {
            if (user) {
                this.userService.getUserType(user.email).subscribe((result) => {
                    console.log(result['success']);
                    if (result['success']) {
                        let data = result['data'];
                        console.log(data);
                        if ((data['roles'][0] === 1 && this.userType === 'admin') || (data['roles'][0] === 2 && this.userType === 'user')) {
                            this.showSnackBar('Login Successful', 'cancel');
                            this.router.navigate(['/home']);
                        }
                        else {
                            this.signOut();
                            this.showSnackBar('invalid user or usertype!', 'cancel');
                        }
                    }
                    else {
                        this.signOut();
                        this.showSnackBar(result['messages'], 'cancel');
                    }
                });
            }
        }).catch(error => {
            console.log(error);
            this.showSnackBar('Error in signing in', 'cancel');
        });
    }
    signOut() {
        this.authService.signOut();
    }
    showSnackBar(message, action) {
        this.snackBar.open(message, action, {
            duration: 3000,
        });
    }
}
LoginComponent.ɵfac = function LoginComponent_Factory(t) { return new (t || LoginComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](angularx_social_login__WEBPACK_IMPORTED_MODULE_1__["AuthService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_user_service__WEBPACK_IMPORTED_MODULE_2__["UserService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_3__["MatSnackBar"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"])); };
LoginComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: LoginComponent, selectors: [["app-login"]], decls: 1, vars: 1, consts: [[4, "ngIf"], ["cols", "2", 3, "rowHeight"], ["colspan", "1", "rowspan", "1"], ["src", "../../assets/illustration.png", "width", "500", "height", "400", 1, "image_illus"], ["class", "loginForm", 4, "ngIf"], [1, "loginForm"], [1, "radioBtn", 3, "change"], ["typeOfUser", ""], ["value", "admin", "color", "accent", "checked", "true"], ["value", "user"], ["mat-button", "", 1, "card", 3, "click"], ["src", "../../assets/icons-google.png", "width", "30", "height", "30", 1, "gIcon"], [1, "btnText"]], template: function LoginComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, LoginComponent_div_0_Template, 6, 2, "div", 0);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.isLoggedIn);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_5__["NgIf"], _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_6__["MatGridList"], _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_6__["MatGridTile"], _angular_material_radio__WEBPACK_IMPORTED_MODULE_7__["MatRadioGroup"], _angular_material_radio__WEBPACK_IMPORTED_MODULE_7__["MatRadioButton"], _angular_material_button__WEBPACK_IMPORTED_MODULE_8__["MatButton"]], styles: [".image_illus[_ngcontent-%COMP%]{\r\n    width:100%;\r\n    height:auto;\r\n    max-width: 500px;\r\n    float: left;\r\n    margin-top:10%;\r\n    margin-left: 12%;\r\n}\r\n\r\n.card[_ngcontent-%COMP%]{\r\n    width: 300px;\r\n    border: 2px solid #0080FF;\r\n    color:rgb(0, 75, 150);\r\n    font-size: 18px;\r\n}\r\n\r\n.card[_ngcontent-%COMP%]:hover{\r\n    background-color: #0080FF;\r\n    color:white;\r\n}\r\n\r\n.loginForm[_ngcontent-%COMP%]{\r\n    text-align: center;\r\n}\r\n\r\n.mat-radio-button[_ngcontent-%COMP%]    ~ .mat-radio-button[_ngcontent-%COMP%] {\r\n    margin-left: 16px;\r\n    padding:20px;\r\n}\r\n\r\n.signInBtn[_ngcontent-%COMP%]{\r\n    border:2px solid #0080FF;\r\n}\r\n\r\n.signInBtn[_ngcontent-%COMP%]:hover{\r\n    background-color: #0080FF;\r\n    color:white;\r\n}\r\n\r\n.gIcon[_ngcontent-%COMP%]{\r\n    padding:5px;\r\n    float:left;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbG9naW4vbG9naW4uY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLFVBQVU7SUFDVixXQUFXO0lBQ1gsZ0JBQWdCO0lBQ2hCLFdBQVc7SUFDWCxjQUFjO0lBQ2QsZ0JBQWdCO0FBQ3BCOztBQUVBO0lBQ0ksWUFBWTtJQUNaLHlCQUF5QjtJQUN6QixxQkFBcUI7SUFDckIsZUFBZTtBQUNuQjs7QUFDQTtJQUNJLHlCQUF5QjtJQUN6QixXQUFXO0FBQ2Y7O0FBQ0E7SUFDSSxrQkFBa0I7QUFDdEI7O0FBQ0E7SUFDSSxpQkFBaUI7SUFDakIsWUFBWTtBQUNoQjs7QUFFQTtJQUNJLHdCQUF3QjtBQUM1Qjs7QUFFQTtJQUNJLHlCQUF5QjtJQUN6QixXQUFXO0FBQ2Y7O0FBRUE7SUFDSSxXQUFXO0lBQ1gsVUFBVTtBQUNkIiwiZmlsZSI6InNyYy9hcHAvbG9naW4vbG9naW4uY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5pbWFnZV9pbGx1c3tcclxuICAgIHdpZHRoOjEwMCU7XHJcbiAgICBoZWlnaHQ6YXV0bztcclxuICAgIG1heC13aWR0aDogNTAwcHg7XHJcbiAgICBmbG9hdDogbGVmdDtcclxuICAgIG1hcmdpbi10b3A6MTAlO1xyXG4gICAgbWFyZ2luLWxlZnQ6IDEyJTtcclxufVxyXG5cclxuLmNhcmR7XHJcbiAgICB3aWR0aDogMzAwcHg7XHJcbiAgICBib3JkZXI6IDJweCBzb2xpZCAjMDA4MEZGO1xyXG4gICAgY29sb3I6cmdiKDAsIDc1LCAxNTApO1xyXG4gICAgZm9udC1zaXplOiAxOHB4O1xyXG59XHJcbi5jYXJkOmhvdmVye1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzAwODBGRjtcclxuICAgIGNvbG9yOndoaXRlO1xyXG59XHJcbi5sb2dpbkZvcm17XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbn1cclxuLm1hdC1yYWRpby1idXR0b24gfiAubWF0LXJhZGlvLWJ1dHRvbiB7XHJcbiAgICBtYXJnaW4tbGVmdDogMTZweDtcclxuICAgIHBhZGRpbmc6MjBweDtcclxufVxyXG5cclxuLnNpZ25JbkJ0bntcclxuICAgIGJvcmRlcjoycHggc29saWQgIzAwODBGRjtcclxufVxyXG5cclxuLnNpZ25JbkJ0bjpob3ZlcntcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICMwMDgwRkY7XHJcbiAgICBjb2xvcjp3aGl0ZTtcclxufVxyXG5cclxuLmdJY29ue1xyXG4gICAgcGFkZGluZzo1cHg7XHJcbiAgICBmbG9hdDpsZWZ0O1xyXG59XHJcbiJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](LoginComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-login',
                templateUrl: './login.component.html',
                styleUrls: ['./login.component.css']
            }]
    }], function () { return [{ type: angularx_social_login__WEBPACK_IMPORTED_MODULE_1__["AuthService"] }, { type: _user_service__WEBPACK_IMPORTED_MODULE_2__["UserService"] }, { type: _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_3__["MatSnackBar"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] }]; }, null); })();


/***/ }),

/***/ "./src/app/material.module.ts":
/*!************************************!*\
  !*** ./src/app/material.module.ts ***!
  \************************************/
/*! exports provided: MatModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MatModule", function() { return MatModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material/toolbar */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/toolbar.js");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/button */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/button.js");
/* harmony import */ var _angular_material_radio__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/radio */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/radio.js");
/* harmony import */ var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/snack-bar */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/snack-bar.js");
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/card */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/card.js");
/* harmony import */ var _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/tooltip */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/tooltip.js");
/* harmony import */ var _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/grid-list */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/grid-list.js");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/dialog */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/dialog.js");
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/form-field */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/form-field.js");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/input */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/input.js");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/icon */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/icon.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");














class MatModule {
}
MatModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: MatModule });
MatModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function MatModule_Factory(t) { return new (t || MatModule)(); }, imports: [_angular_material_toolbar__WEBPACK_IMPORTED_MODULE_1__["MatToolbarModule"],
        _angular_material_button__WEBPACK_IMPORTED_MODULE_2__["MatButtonModule"],
        _angular_material_radio__WEBPACK_IMPORTED_MODULE_3__["MatRadioModule"],
        _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_4__["MatSnackBarModule"],
        _angular_material_card__WEBPACK_IMPORTED_MODULE_5__["MatCardModule"],
        _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_6__["MatTooltipModule"],
        _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_7__["MatGridListModule"],
        _angular_material_dialog__WEBPACK_IMPORTED_MODULE_8__["MatDialogModule"],
        _angular_material_form_field__WEBPACK_IMPORTED_MODULE_9__["MatFormFieldModule"],
        _angular_material_input__WEBPACK_IMPORTED_MODULE_10__["MatInputModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_12__["FormsModule"],
        _angular_material_icon__WEBPACK_IMPORTED_MODULE_11__["MatIconModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](MatModule, { exports: [_angular_material_toolbar__WEBPACK_IMPORTED_MODULE_1__["MatToolbarModule"],
        _angular_material_button__WEBPACK_IMPORTED_MODULE_2__["MatButtonModule"],
        _angular_material_radio__WEBPACK_IMPORTED_MODULE_3__["MatRadioModule"],
        _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_4__["MatSnackBarModule"],
        _angular_material_card__WEBPACK_IMPORTED_MODULE_5__["MatCardModule"],
        _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_6__["MatTooltipModule"],
        _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_7__["MatGridListModule"],
        _angular_material_dialog__WEBPACK_IMPORTED_MODULE_8__["MatDialogModule"],
        _angular_material_form_field__WEBPACK_IMPORTED_MODULE_9__["MatFormFieldModule"],
        _angular_material_input__WEBPACK_IMPORTED_MODULE_10__["MatInputModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_12__["FormsModule"],
        _angular_material_icon__WEBPACK_IMPORTED_MODULE_11__["MatIconModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MatModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                exports: [
                    _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_1__["MatToolbarModule"],
                    _angular_material_button__WEBPACK_IMPORTED_MODULE_2__["MatButtonModule"],
                    _angular_material_radio__WEBPACK_IMPORTED_MODULE_3__["MatRadioModule"],
                    _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_4__["MatSnackBarModule"],
                    _angular_material_card__WEBPACK_IMPORTED_MODULE_5__["MatCardModule"],
                    _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_6__["MatTooltipModule"],
                    _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_7__["MatGridListModule"],
                    _angular_material_dialog__WEBPACK_IMPORTED_MODULE_8__["MatDialogModule"],
                    _angular_material_form_field__WEBPACK_IMPORTED_MODULE_9__["MatFormFieldModule"],
                    _angular_material_input__WEBPACK_IMPORTED_MODULE_10__["MatInputModule"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_12__["FormsModule"],
                    _angular_material_icon__WEBPACK_IMPORTED_MODULE_11__["MatIconModule"],
                ]
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/socket-services/socket.service.ts":
/*!***************************************************!*\
  !*** ./src/app/socket-services/socket.service.ts ***!
  \***************************************************/
/*! exports provided: SocketService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SocketService", function() { return SocketService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var socket_io_client__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! socket.io-client */ "./node_modules/socket.io-client/lib/index.js");
/* harmony import */ var socket_io_client__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(socket_io_client__WEBPACK_IMPORTED_MODULE_1__);

// import { Socket } from 'ngx-socket-io';


class SocketService {
    constructor() {
        this.url = `http://digi-planner-tool-digi-planner-tool.apps.123.252.203.195.nip.io`;
    }
    connect() {
        this.socket = socket_io_client__WEBPACK_IMPORTED_MODULE_1__(this.url);
    }
    sendGroup(group, id) {
        this.socket.emit('groupAltered', [{
                id: group.id,
                left: group.left,
                top: group.top,
                angle: group.angle,
                scaleX: group.scaleX,
                scaleY: group.scaleY
            },
            id]);
    }
    somethingAdded(shape, color, id) {
        this.socket.emit('addedObject', [shape, color, id]);
    }
    somethingModified(groupId, currentUser, id) {
        this.socket.emit('modifiedObject', [groupId, currentUser, id]);
    }
    clearCanvas(canvas, id) {
        this.socket.emit('clearCanvas', [canvas, id]);
    }
    colorChange(data, color, id) {
        this.socket.emit('colorChange', [data, color, id]);
    }
    joinRoom(id) {
        this.socket.emit('joinRoom', id);
    }
    deleteGroup(data, id) {
        this.socket.emit('deleteGroup', [data, id]);
    }
    regr(text, textId, id) {
        this.socket.emit('regrouping', [text, textId, id]);
    }
    drawLines(can) {
        const arr = [can.f, can.s, can.roomId];
        this.socket.emit('drawingLines', arr);
    }
    disconnect() {
        if (this.socket) {
            this.socket.removeAllListeners();
            this.socket.close();
            this.socket = undefined;
        }
    }
}
SocketService.ɵfac = function SocketService_Factory(t) { return new (t || SocketService)(); };
SocketService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: SocketService, factory: SocketService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SocketService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{ providedIn: 'root' }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/app/socket-services/user-socket.service.ts":
/*!********************************************************!*\
  !*** ./src/app/socket-services/user-socket.service.ts ***!
  \********************************************************/
/*! exports provided: UserSocketService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserSocketService", function() { return UserSocketService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var fabric__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! fabric */ "./node_modules/fabric/dist/fabric.js");
/* harmony import */ var fabric__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(fabric__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _user_board_services_group_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../user-board-services/group.service */ "./src/app/user-board-services/group.service.ts");
/* harmony import */ var _user_board_services_shape_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../user-board-services/shape.service */ "./src/app/user-board-services/shape.service.ts");
/* harmony import */ var _socket_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./socket.service */ "./src/app/socket-services/socket.service.ts");






class UserSocketService {
    constructor(groupService, shapeService, socketService) {
        this.groupService = groupService;
        this.shapeService = shapeService;
        this.socketService = socketService;
    }
    init(canvas, renderer, roomId) {
        this.roomId = roomId;
        this.socketService.joinRoom(this.roomId);
        this.socketService.socket.on('groupAltered', (data) => {
            var _a;
            (_a = document.getElementById('deleteBtn')) === null || _a === void 0 ? void 0 : _a.remove();
            for (const obj of canvas.getObjects()) {
                if (obj instanceof fabric__WEBPACK_IMPORTED_MODULE_1__["fabric"].Group) {
                    if (obj.id === data.id) {
                        obj.left = data.left;
                        obj.top = data.top;
                        obj.scaleX = data.scaleX;
                        obj.scaleY = data.scaleY;
                        obj.angle = data.angle || 0;
                        this.groupService.moveLines(obj);
                        obj.setCoords();
                        canvas.renderAll();
                    }
                }
            }
        });
        this.socketService.socket.on('addedObject', (data) => {
            if (data[0] === 'rect') {
                this.shapeService.addRectangle(canvas, renderer, data[1]);
            }
            else if (data[0] === 'ellipse') {
                this.shapeService.addEllipse(canvas, renderer, data[1]);
            }
            else {
                this.shapeService.addTriangle(canvas, renderer, data[1]);
            }
        });
        this.socketService.socket.on('modifiedObject', (data) => {
            var _a;
            const h = data[0];
            (_a = document.getElementById('deleteBtn')) === null || _a === void 0 ? void 0 : _a.remove();
            let gr;
            for (const ob of canvas._objects) {
                if (ob.id === h) {
                    gr = ob;
                    break;
                }
            }
            const shape = gr._objects[0];
            const text = gr._objects[1];
            text.fill = '#7f8c8d';
            text.fontStyle = 'italic';
            shape.set('opacity', 0.7);
            text.set('text', `${data[1].firstName} is editing`);
            this.groupService.unGroup(gr, canvas);
            text.lockMovementX = false;
            text.lockMovementY = false;
        });
        this.socketService.socket.on('regrouping', (h) => {
            var _a;
            (_a = document.getElementById('deleteBtn')) === null || _a === void 0 ? void 0 : _a.remove();
            let g;
            for (const ob of this.groupService.selectedGroup) {
                if (ob.id === h[1]) {
                    g = ob;
                    break;
                }
            }
            const shape = g._objects[0];
            const text = g._objects[1];
            text.fill = '#333';
            text.fontStyle = 'normal';
            text.set('text', h[0]);
            shape.set('opacity', 1);
            this.groupService.regroup(shape, text, canvas, renderer);
        });
        this.socketService.socket.on('clearCanvas', (can) => {
            var _a;
            canvas.clear();
            this.shapeService.setBackground(canvas, 'assets');
            (_a = document.getElementById('deleteBtn')) === null || _a === void 0 ? void 0 : _a.remove();
        });
        this.socketService.socket.on('colorChange', (data) => {
            let gr;
            for (const ob of canvas._objects) {
                if (ob.id === data[0]) {
                    gr = ob;
                    break;
                }
            }
            const text = gr._objects[1];
            const shape = gr._objects[0];
            this.groupService.unGroup(gr, canvas);
            shape.fill = data[1];
            this.groupService.regroup(shape, text, canvas, renderer);
        });
        this.socketService.socket.on('deleteGroup', (data) => {
            let gr;
            for (const ob of canvas._objects) {
                if (ob.id === data) {
                    gr = ob;
                    break;
                }
            }
            this.groupService.delete(canvas, gr);
        });
        this.socketService.socket.on('drawingLines', (data) => {
            const h = {
                f: data[0],
                s: data[1],
            };
            for (const obj of canvas._objects) {
                if (h.f === obj.id) {
                    canvas.selectedElements.push(obj);
                }
                if (h.s === obj.id) {
                    canvas.selectedElements.push(obj);
                }
            }
            this.groupService.drawLineTwoPoints(canvas);
            canvas.selectedElements.splice(0, 2);
        });
    }
}
UserSocketService.ɵfac = function UserSocketService_Factory(t) { return new (t || UserSocketService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_user_board_services_group_service__WEBPACK_IMPORTED_MODULE_2__["GroupService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_user_board_services_shape_service__WEBPACK_IMPORTED_MODULE_3__["ShapeService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_socket_service__WEBPACK_IMPORTED_MODULE_4__["SocketService"])); };
UserSocketService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: UserSocketService, factory: UserSocketService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](UserSocketService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root',
            }]
    }], function () { return [{ type: _user_board_services_group_service__WEBPACK_IMPORTED_MODULE_2__["GroupService"] }, { type: _user_board_services_shape_service__WEBPACK_IMPORTED_MODULE_3__["ShapeService"] }, { type: _socket_service__WEBPACK_IMPORTED_MODULE_4__["SocketService"] }]; }, null); })();


/***/ }),

/***/ "./src/app/user-board-services/constants.service.ts":
/*!**********************************************************!*\
  !*** ./src/app/user-board-services/constants.service.ts ***!
  \**********************************************************/
/*! exports provided: ConstantsService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ConstantsService", function() { return ConstantsService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


class ConstantsService {
    constructor() {
        this.HideControls = { tl: true, tr: false, bl: true, br: true, ml: true, mt: true, mr: true, mb: true, mtr: true };
        this.userBackURL = '../../assets/user_back.png';
        this.PORT = '8080';
        this.URI = `http://digi-planner-tool-digi-planner-tool.apps.123.252.203.195.nip.io`;
        this.starIconURL = '../assets/stars-black-48dp.svg';
        this.colors = ['CornflowerBlue', 'darkcyan', 'MediumAquaMarine', 'lemonchiffon', 'gold', 'silver', 'salmon', 'palevioletred', 'pink'];
        this.connectText = 'Connect';
        this.disconnectText = 'Exit Connection Mode';
    }
}
ConstantsService.ɵfac = function ConstantsService_Factory(t) { return new (t || ConstantsService)(); };
ConstantsService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: ConstantsService, factory: ConstantsService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ConstantsService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/app/user-board-services/group.service.ts":
/*!******************************************************!*\
  !*** ./src/app/user-board-services/group.service.ts ***!
  \******************************************************/
/*! exports provided: GroupService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GroupService", function() { return GroupService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var fabric__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! fabric */ "./node_modules/fabric/dist/fabric.js");
/* harmony import */ var fabric__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(fabric__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _scaling_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./scaling.service */ "./src/app/user-board-services/scaling.service.ts");
/* harmony import */ var _constants_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./constants.service */ "./src/app/user-board-services/constants.service.ts");
/* harmony import */ var _socket_services_socket_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../socket-services/socket.service */ "./src/app/socket-services/socket.service.ts");
/* harmony import */ var _user_database_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./user-database.service */ "./src/app/user-board-services/user-database.service.ts");







class GroupService {
    constructor(scalingService, constants, socketService, userDatabase) {
        this.scalingService = scalingService;
        this.constants = constants;
        this.socketService = socketService;
        this.userDatabase = userDatabase;
        this.selectedGroup = [];
        this.givingId = 0;
        this.currentUser = 'Unknown';
    }
    makeLine(coords) {
        return new fabric__WEBPACK_IMPORTED_MODULE_1__["fabric"].Line(coords, {
            stroke: 'black',
            strokeWidth: 2,
            opacity: 0.6,
            selectable: false,
            preserveObjectStacking: true,
        });
    }
    createGroup(shape, text, canvas, x, y, connections, renderer, groupID, editing, angle, scaleX, scaleY) {
        this.scalingService.scaleShapes(shape, text.getBoundingRect());
        const group = new fabric__WEBPACK_IMPORTED_MODULE_1__["fabric"].Group([shape, text], {
            angle,
            scaleX,
            scaleY,
            left: x,
            top: y,
            connections,
            isEditable: true,
        });
        if (groupID === -1) {
            group.id = this.givingId;
            text.id = this.givingId;
            this.givingId += 1;
            canvas.givingId = this.givingId;
        }
        else {
            group.id = groupID;
            text.id = groupID;
        }
        group.type = 'group';
        group.editing = editing;
        group.setControlsVisibility(this.constants.HideControls);
        this.addEventListeners(canvas, group, renderer);
        canvas.add(group);
        this.userDatabase.sendingCanvas(canvas.toJSON(['id', 'connections', 'givingId', 'editing']));
        return group;
    }
    doubleClickEvent(obj, handler) {
        return () => {
            if (obj.clicked) {
                handler(obj);
            }
            else {
                obj.clicked = true;
                setTimeout(() => {
                    obj.clicked = false;
                }, 500);
            }
        };
    }
    unGroup(group, canvas) {
        this.selectedGroup.push(group);
        group.editing = true;
        this.userDatabase.sendingCanvas(canvas.toJSON(['id', 'connections', 'givingId', 'editing']));
        const items = group._objects;
        group._restoreObjectsState();
        canvas.remove(group);
        for (const item of items) {
            canvas.add(item);
        }
        canvas.renderAll();
    }
    regroup(shape, text, canvas, renderer) {
        let g;
        let u = 0;
        for (const ob of this.selectedGroup) {
            if (ob.id === text.id) {
                g = ob;
                break;
            }
            u++;
        }
        const groupCoord = g.getPointByOrigin(0, 0);
        canvas.remove(shape);
        canvas.remove(text);
        this.createGroup(shape, text, canvas, groupCoord.x, groupCoord.y, g.connections, renderer, g.id, false, g.angle, 1, 1);
        this.selectedGroup.splice(u, 1);
        this.userDatabase.sendingCanvas(canvas.toJSON(['id', 'connections', 'givingId', 'editing']));
    }
    drawLineTwoPoints(canvas) {
        const group1 = canvas.selectedElements[0];
        const group2 = canvas.selectedElements[1];
        const line = this.makeLine([
            group1.getCenterPoint().x,
            group1.getCenterPoint().y,
            group2.getCenterPoint().x,
            group2.getCenterPoint().y,
        ]);
        canvas.add(line);
        canvas.sendToBack(line);
        group1.connections.push({ name: 'p1', line, connectedGroup: group2.id });
        group2.connections.push({ name: 'p2', line, connectedGroup: group1.id });
        canvas.connect = false;
        canvas.connectButtonText = this.constants.connectText;
        this.userDatabase.sendingCanvas(canvas.toJSON(['id', 'connections', 'givingId', 'editing']));
    }
    moveLines(group) {
        const newPoint = group.getCenterPoint();
        for (const connection of group.connections) {
            if (connection.name === 'p1') {
                connection.line.set({
                    x1: newPoint.x,
                    y1: newPoint.y,
                });
            }
            else {
                connection.line.set({
                    x2: newPoint.x,
                    y2: newPoint.y,
                });
            }
        }
    }
    delete(canvas, gr) {
        let group;
        if (gr) {
            group = gr;
        }
        else {
            group = canvas.getActiveObject();
            this.socketService.deleteGroup(group.id, this.constants.roomID);
        }
        for (const connection of group.connections) {
            // tslint:disable-next-line: forin
            for (const index in connection.connectedGroup.connections) {
                const otherGroupConnections = connection.connectedGroup.connections;
                if (otherGroupConnections[index].connectedGroup === group) {
                    otherGroupConnections.splice(index, 1);
                }
            }
            canvas.remove(connection.line);
        }
        canvas.remove(group);
        canvas.renderAll();
        this.userDatabase.sendingCanvas(canvas.toJSON(['id', 'connections', 'givingId', 'editing']));
    }
    addDeleteBtn(x, y, canvas, renderer) {
        var _a;
        (_a = document.getElementById('deleteBtn')) === null || _a === void 0 ? void 0 : _a.remove();
        const btnLeft = x - 10;
        const btnTop = y - 10;
        const delteBtn = renderer.createElement('img');
        delteBtn.id = 'deleteBtn';
        delteBtn.src = '../assets/icons8-delete.svg';
        delteBtn.style = `position:absolute;
    top:${btnTop}px;
    left:${btnLeft}px;
    cursor:pointer;
    width:20px;
    height:20px;`;
        renderer.appendChild(document.getElementsByClassName('canvas-container')[0], delteBtn);
        document.getElementById('deleteBtn').addEventListener('click', (event) => {
            this.delete(canvas);
        });
        this.userDatabase.sendingCanvas(canvas.toJSON(['id', 'connections', 'givingId', 'editing']));
    }
    addEventListeners(canvas, group, renderer) {
        group.on('selected', (e) => {
            this.addDeleteBtn(group.oCoords.tr.x, group.oCoords.tr.y, canvas, renderer);
        });
        group.on('modified', (e) => {
            this.addDeleteBtn(group.oCoords.tr.x, group.oCoords.tr.y, canvas, renderer);
        });
        group.on('scaling', (e) => {
            var _a;
            (_a = document.getElementById('deleteBtn')) === null || _a === void 0 ? void 0 : _a.remove();
            this.socketService.sendGroup(group, this.constants.roomID);
        });
        group.on('moving', (e) => {
            var _a;
            (_a = document.getElementById('deleteBtn')) === null || _a === void 0 ? void 0 : _a.remove();
            if (group.connections.length > 0) {
                this.moveLines(group);
                canvas.renderAll();
            }
            this.socketService.sendGroup(group, this.constants.roomID);
        });
        group.on('rotating', (e) => {
            var _a;
            (_a = document.getElementById('deleteBtn')) === null || _a === void 0 ? void 0 : _a.remove();
            this.socketService.sendGroup(group, this.constants.roomID);
        });
        group.on('removed', (e) => {
            var _a;
            (_a = document.getElementById('deleteBtn')) === null || _a === void 0 ? void 0 : _a.remove();
        });
        group.on('mousedown', this.doubleClickEvent(group, () => {
            if (canvas.connect) {
                canvas.selectedElements.push(group);
                if (canvas.selectedElements.length === 2) {
                    this.drawLineTwoPoints(canvas);
                    this.socketService.drawLines({
                        f: canvas.selectedElements[0].id,
                        s: canvas.selectedElements[1].id,
                        roomId: this.constants.roomID,
                    });
                    canvas.selectedElements.pop();
                    canvas.selectedElements.pop();
                }
            }
            else {
                group.isEditable = false;
                this.socketService.somethingModified(group.id, this.currentUser, this.constants.roomID);
                this.unGroup(group, canvas);
                const text1 = group._objects[1];
                text1.lockMovementX = false;
                text1.lockMovementY = false;
                canvas.setActiveObject(text1);
                text1.enterEditing();
                text1.selectAll();
            }
        }));
        canvas.on('mouse:down', (e) => {
            var _a;
            if (!canvas.getActiveObject()) {
                (_a = document.getElementById('deleteBtn')) === null || _a === void 0 ? void 0 : _a.remove();
            }
        });
    }
}
GroupService.ɵfac = function GroupService_Factory(t) { return new (t || GroupService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_scaling_service__WEBPACK_IMPORTED_MODULE_2__["ScalingService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_constants_service__WEBPACK_IMPORTED_MODULE_3__["ConstantsService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_socket_services_socket_service__WEBPACK_IMPORTED_MODULE_4__["SocketService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_user_database_service__WEBPACK_IMPORTED_MODULE_5__["UserDatabaseService"])); };
GroupService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: GroupService, factory: GroupService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](GroupService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root',
            }]
    }], function () { return [{ type: _scaling_service__WEBPACK_IMPORTED_MODULE_2__["ScalingService"] }, { type: _constants_service__WEBPACK_IMPORTED_MODULE_3__["ConstantsService"] }, { type: _socket_services_socket_service__WEBPACK_IMPORTED_MODULE_4__["SocketService"] }, { type: _user_database_service__WEBPACK_IMPORTED_MODULE_5__["UserDatabaseService"] }]; }, null); })();


/***/ }),

/***/ "./src/app/user-board-services/scaling.service.ts":
/*!********************************************************!*\
  !*** ./src/app/user-board-services/scaling.service.ts ***!
  \********************************************************/
/*! exports provided: ScalingService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ScalingService", function() { return ScalingService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var fabric__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! fabric */ "./node_modules/fabric/dist/fabric.js");
/* harmony import */ var fabric__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(fabric__WEBPACK_IMPORTED_MODULE_1__);



class ScalingService {
    constructor() { }
    scaleShapes(shape, textBoundingRect) {
        let resize = false;
        const height = shape.height * shape.scaleY;
        const width = shape.width * shape.scaleX;
        resize = this.compareTextShape(shape, height, textBoundingRect.height) || this.compareTextShape(shape, width, textBoundingRect.width);
        if (shape instanceof fabric__WEBPACK_IMPORTED_MODULE_1__["fabric"].Ellipse && resize) {
            if (shape.width < textBoundingRect.width) {
                shape.width = textBoundingRect.width + 60;
            }
            if (shape.height < textBoundingRect.height) {
                shape.height = textBoundingRect.height + 60;
            }
            shape.rx = shape.width / 2;
            shape.ry = shape.height / 2;
        }
    }
    compareTextShape(shape, shapeDimen, textDimen) {
        if (shape instanceof fabric__WEBPACK_IMPORTED_MODULE_1__["fabric"].Rect) {
            if (shapeDimen < textDimen) {
                (shape.height * shape.scaleY) === shapeDimen ? shape.height = textDimen + 20 : shape.width = textDimen + 20;
                return true;
            }
            return false;
        }
        if (shape instanceof fabric__WEBPACK_IMPORTED_MODULE_1__["fabric"].Triangle) {
            if (shapeDimen / 2 < textDimen) {
                if ((shape.height * shape.scaleY) === shapeDimen) {
                    shape.height = Math.max(shapeDimen, textDimen) * 1.5;
                    shape.width *= 1.5;
                }
                else {
                    shape.width = Math.max(shapeDimen, textDimen) * 2;
                    shape.height *= 1.5;
                }
                return true;
            }
            return false;
        }
        return true;
    }
}
ScalingService.ɵfac = function ScalingService_Factory(t) { return new (t || ScalingService)(); };
ScalingService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: ScalingService, factory: ScalingService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ScalingService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/app/user-board-services/shape.service.ts":
/*!******************************************************!*\
  !*** ./src/app/user-board-services/shape.service.ts ***!
  \******************************************************/
/*! exports provided: ShapeService, MockShapeService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ShapeService", function() { return ShapeService; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MockShapeService", function() { return MockShapeService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var fabric__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! fabric */ "./node_modules/fabric/dist/fabric.js");
/* harmony import */ var fabric__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(fabric__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _group_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./group.service */ "./src/app/user-board-services/group.service.ts");
/* harmony import */ var _user_database_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./user-database.service */ "./src/app/user-board-services/user-database.service.ts");
/* harmony import */ var _constants_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./constants.service */ "./src/app/user-board-services/constants.service.ts");
/* harmony import */ var _socket_services_socket_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../socket-services/socket.service */ "./src/app/socket-services/socket.service.ts");







class ShapeService {
    constructor(groupService, userDatabaseService, constants, socketService) {
        this.groupService = groupService;
        this.userDatabaseService = userDatabaseService;
        this.constants = constants;
        this.socketService = socketService;
    }
    initCanvas(renderer) {
        this.image = null;
        fabric__WEBPACK_IMPORTED_MODULE_1__["fabric"].Object.prototype.transparentCorners = false;
        const canvas = new fabric__WEBPACK_IMPORTED_MODULE_1__["fabric"].Canvas('canvas', {
            hoverCursor: 'pointer',
            selection: true,
        });
        canvas.setHeight(650);
        canvas.setWidth(1200 - 10);
        canvas.selectedElements = [];
        canvas.selectedColor = this.constants.colors[0];
        this.getTitleFromDatabase(canvas, renderer);
        return canvas;
    }
    setBackground(canvas, base64) {
        canvas.connect = false;
        canvas.connectButtonText = 'Connect';
        if (this.image) {
            canvas.setBackgroundImage(this.image);
            canvas.renderAll();
        }
        else {
            const imageEle = new Image();
            imageEle.src = base64;
            imageEle.onload = () => {
                this.image = new fabric__WEBPACK_IMPORTED_MODULE_1__["fabric"].Image(imageEle, {
                    width: canvas.width,
                    height: canvas.height,
                    opacity: 0.7,
                });
                canvas.setBackgroundImage(this.image);
                canvas.renderAll();
            };
        }
    }
    addEllipse(canvas, renderer, color) {
        const ellipse = new fabric__WEBPACK_IMPORTED_MODULE_1__["fabric"].Ellipse({
            originX: 'center',
            originY: 'center',
            fill: color ? color : canvas.selectedColor,
            rx: 100,
            ry: 50,
            stroke: 'black',
            strokeWidth: 0.3,
            selectable: false,
        });
        this.addText(ellipse, canvas, renderer, 'Double click to edit', -1, 100, 100, false, 0, 1, 1);
    }
    addRectangle(canvas, renderer, color) {
        const rect = new fabric__WEBPACK_IMPORTED_MODULE_1__["fabric"].Rect({
            originX: 'center',
            originY: 'center',
            width: 200,
            height: 100,
            rx: 10,
            ry: 10,
            stroke: 'black',
            strokeWidth: 0.3,
            fill: color ? color : canvas.selectedColor,
            selectable: false,
            strokeLineJoin: 'round',
        });
        this.addText(rect, canvas, renderer, 'Double click to edit', -1, 100, 100, false, 0, 1, 1);
    }
    addTriangle(canvas, renderer, color) {
        const triangle = new fabric__WEBPACK_IMPORTED_MODULE_1__["fabric"].Triangle({
            originX: 'center',
            originY: 'center',
            width: 200,
            height: 150,
            rx: 10,
            ry: 10,
            stroke: 'black',
            strokeWidth: 0.3,
            fill: color ? color : canvas.selectedColor,
            selectable: false,
            strokeLineJoin: 'round',
        });
        this.addText(triangle, canvas, renderer, 'Double \ntap to edit', -1, 100, 100, false, 0, 1, 1);
    }
    addText(shape, canvas, renderer, textVal, groupID, x, y, editing, angle, scaleX, scaleY) {
        const text = new fabric__WEBPACK_IMPORTED_MODULE_1__["fabric"].IText(textVal, {
            fill: '#333',
            charSpacing: 100,
            fontSize: 15,
            originX: 'center',
            originY: 'center',
            textAlign: 'center',
            fontFamily: 'Trebuchet MS',
            top: 0,
            left: 0,
            selectable: false,
        });
        this.addTextListener(canvas, shape, text, renderer);
        return this.groupService.createGroup(shape, text, canvas, x, y, [], renderer, groupID, editing, angle, scaleX, scaleY);
    }
    addTextListener(canvas, shape, text, renderer) {
        text.on('editing:exited', () => {
            this.socketService.regr(text.text, text.id, this.constants.roomID);
            this.groupService.regroup(shape, text, canvas, renderer);
        });
    }
    changeColor(canvas, color, renderer) {
        canvas.selectedColor = color;
        const group = canvas.getActiveObject();
        if (group) {
            const shape = group._objects[0];
            const text = group._objects[1];
            this.socketService.colorChange(group.id, color, this.constants.roomID);
            this.groupService.unGroup(group, canvas);
            shape.fill = color;
            this.groupService.regroup(shape, text, canvas, renderer);
            for (const obj of canvas._objects) {
                if (obj.id === text.id) {
                    canvas.setActiveObject(obj);
                    break;
                }
            }
        }
    }
    getTitleFromDatabase(canvas, renderer) {
        this.constants.roomID === 'unknown'
            ? (canvas.boardTitle = 'UserUI')
            : this.userDatabaseService.getRoomData().subscribe((roomData) => {
                canvas.boardTitle = roomData.data.room_data.room_title;
                if (roomData.data.room_data.canvas_json) {
                    this.loadCanvas(canvas, JSON.parse(roomData.data.room_data.canvas_json), renderer);
                }
                this.setBackground(canvas, roomData.data.room_data.base64);
            }, (error) => {
                canvas.boardTitle = 'UserUI';
                this.setBackground(canvas, this.constants.userBackURL);
            });
    }
    loadCanvas(canvas, canvasJson, renderer) {
        const newCanvas = new fabric__WEBPACK_IMPORTED_MODULE_1__["fabric"].Canvas();
        newCanvas.loadFromJSON(canvasJson);
        this.groupService.givingId = newCanvas.givingId;
        canvas.givingId = newCanvas.givingId;
        const groupArray = [];
        for (const object of newCanvas._objects) {
            if (object.type === 'group') {
                const shape = object._objects[0];
                const groupCoord = object.getPointByOrigin(0, 0);
                const group = this.addText(shape, canvas, renderer, object._objects[1].text, object.id, groupCoord.x, groupCoord.y, object.editing, object.angle, object.scaleX, object.scaleY);
                groupArray.push(group);
            }
        }
        for (const group of groupArray) {
            for (const object of newCanvas._objects) {
                if (object.id === group.id) {
                    this.drawLinesWhileLoading(canvas, object, group);
                }
            }
        }
        for (const group of groupArray) {
            if (group.editing) {
                const shape = group._objects[0];
                const text = group._objects[1];
                text.fill = '#7f8c8d';
                text.fontStyle = 'italic';
                shape.set('opacity', 0.7);
                text.set('text', ` Someone is editing`);
                this.ungroupOnLoad(group, canvas);
                text.lockMovementX = false;
                text.lockMovementY = false;
            }
        }
        canvas.renderAll();
    }
    ungroupOnLoad(group, canvas) {
        this.groupService.selectedGroup.push(group);
        group.editing = true;
        const items = group._objects;
        group._restoreObjectsState();
        canvas.remove(group);
        for (const item of items) {
            item.selectable = false;
            canvas.add(item);
        }
    }
    drawLinesWhileLoading(canvas, object, group) {
        canvas.selectedElements.push(group);
        for (const connection of object.connections) {
            if (connection.name === 'p1') {
                for (const connectedGroup of canvas._objects) {
                    if (connectedGroup.id === connection.connectedGroup) {
                        canvas.selectedElements.push(connectedGroup);
                        this.groupService.drawLineTwoPoints(canvas);
                        canvas.selectedElements.pop();
                        break;
                    }
                }
            }
        }
        canvas.selectedElements.pop();
    }
}
ShapeService.ɵfac = function ShapeService_Factory(t) { return new (t || ShapeService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_group_service__WEBPACK_IMPORTED_MODULE_2__["GroupService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_user_database_service__WEBPACK_IMPORTED_MODULE_3__["UserDatabaseService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_constants_service__WEBPACK_IMPORTED_MODULE_4__["ConstantsService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_socket_services_socket_service__WEBPACK_IMPORTED_MODULE_5__["SocketService"])); };
ShapeService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: ShapeService, factory: ShapeService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ShapeService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root',
            }]
    }], function () { return [{ type: _group_service__WEBPACK_IMPORTED_MODULE_2__["GroupService"] }, { type: _user_database_service__WEBPACK_IMPORTED_MODULE_3__["UserDatabaseService"] }, { type: _constants_service__WEBPACK_IMPORTED_MODULE_4__["ConstantsService"] }, { type: _socket_services_socket_service__WEBPACK_IMPORTED_MODULE_5__["SocketService"] }]; }, null); })();
class MockShapeService {
    initCanvas(url) {
        const canvas = {
            selectedColor: 'cornsilk',
            connect: false,
            connectButtonText: 'Connect',
            selectedElements: [],
            _objects: [1, 2],
            clear: () => {
                canvas._objects = [];
            },
        };
        return canvas;
    }
    changeColor(canvas, color) {
        canvas.selectedColor = color;
    }
}


/***/ }),

/***/ "./src/app/user-board-services/user-database.service.ts":
/*!**************************************************************!*\
  !*** ./src/app/user-board-services/user-database.service.ts ***!
  \**************************************************************/
/*! exports provided: UserDatabaseService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserDatabaseService", function() { return UserDatabaseService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
/* harmony import */ var _constants_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./constants.service */ "./src/app/user-board-services/constants.service.ts");




class UserDatabaseService {
    constructor(http, constants) {
        this.http = http;
        this.constants = constants;
    }
    sendingCanvas(canvasJSON) {
        delete canvasJSON.backgroundImage;
        this.http.put(`http://digi-planner-tool-digi-planner-tool.apps.123.252.203.195.nip.io/board/${this.constants.userID}/${this.constants.roomID}`, { canvas_json: JSON.stringify(canvasJSON) }, { responseType: 'json' })
            .subscribe(responseData => { });
    }
    getRoomData() {
        return this.http.get(`${this.constants.URI}/board/${this.constants.userID}/${this.constants.roomID}`);
    }
}
UserDatabaseService.ɵfac = function UserDatabaseService_Factory(t) { return new (t || UserDatabaseService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_constants_service__WEBPACK_IMPORTED_MODULE_2__["ConstantsService"])); };
UserDatabaseService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: UserDatabaseService, factory: UserDatabaseService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](UserDatabaseService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"] }, { type: _constants_service__WEBPACK_IMPORTED_MODULE_2__["ConstantsService"] }]; }, null); })();


/***/ }),

/***/ "./src/app/user-board/user-board.component.ts":
/*!****************************************************!*\
  !*** ./src/app/user-board/user-board.component.ts ***!
  \****************************************************/
/*! exports provided: UserBoardComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserBoardComponent", function() { return UserBoardComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _user_board_services_shape_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../user-board-services/shape.service */ "./src/app/user-board-services/shape.service.ts");
/* harmony import */ var _user_board_services_group_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../user-board-services/group.service */ "./src/app/user-board-services/group.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _user_board_services_constants_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../user-board-services/constants.service */ "./src/app/user-board-services/constants.service.ts");
/* harmony import */ var _socket_services_socket_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../socket-services/socket.service */ "./src/app/socket-services/socket.service.ts");
/* harmony import */ var _socket_services_user_socket_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../socket-services/user-socket.service */ "./src/app/socket-services/user-socket.service.ts");
/* harmony import */ var angularx_social_login__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! angularx-social-login */ "./node_modules/angularx-social-login/__ivy_ngcc__/fesm2015/angularx-social-login.js");
/* harmony import */ var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/snack-bar */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/snack-bar.js");
/* harmony import */ var _user_board_services_user_database_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../user-board-services/user-database.service */ "./src/app/user-board-services/user-database.service.ts");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/button */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/button.js");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/icon */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/icon.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material/tooltip */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/tooltip.js");















function UserBoardComponent_div_23_mat_icon_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "done");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleProp"]("color", "black");
} }
function UserBoardComponent_div_23_Template(rf, ctx) { if (rf & 1) {
    const _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "button", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function UserBoardComponent_div_23_Template_button_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r6); const color_r3 = ctx.$implicit; const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r5.changeColor(color_r3); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, UserBoardComponent_div_23_mat_icon_2_Template, 2, 2, "mat-icon", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const color_r3 = ctx.$implicit;
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMap"](color_r3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.canvas.selectedColor == color_r3);
} }
function UserBoardComponent_p_33_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" Note: Double click on any two cards to connect.", ctx_r2.canvas.selectedElements.length, " selected ");
} }
class UserBoardComponent {
    constructor(shapeService, groupService, renderer, route, constants, socketService, userSocketService, authService, snackBar, userDatabase) {
        this.shapeService = shapeService;
        this.groupService = groupService;
        this.renderer = renderer;
        this.route = route;
        this.constants = constants;
        this.socketService = socketService;
        this.userSocketService = userSocketService;
        this.authService = authService;
        this.snackBar = snackBar;
        this.userDatabase = userDatabase;
    }
    ngOnInit() {
        this.constants.roomID = this.route.snapshot.queryParamMap.get('room_code') || 'unknown';
        this.socketService.connect();
        this.canvas = this.shapeService.initCanvas(this.renderer);
        this.userSocketService.init(this.canvas, this.renderer, this.constants.roomID);
        this.authService.authState.subscribe((user) => {
            this.groupService.currentUser = user;
            this.constants.userID = user.email;
        });
    }
    ngOnDestroy() {
        // this.socketService.socket.emit('disconnect');
        this.socketService.disconnect();
    }
    addObj(shape) {
        this.socketService.somethingAdded(shape, this.canvas.selectedColor, this.constants.roomID);
    }
    addEllipse() {
        this.shapeService.addEllipse(this.canvas, this.renderer);
        this.addObj('ellipse');
    }
    addRectangle() {
        this.shapeService.addRectangle(this.canvas, this.renderer);
        this.addObj('rect');
    }
    addTriangle() {
        this.shapeService.addTriangle(this.canvas, this.renderer);
        this.addObj('triangle');
    }
    clear() {
        var _a;
        this.canvas.clear();
        this.shapeService.setBackground(this.canvas, 'assets');
        this.socketService.clearCanvas(this.canvas, this.constants.roomID);
        (_a = document.getElementById('deleteBtn')) === null || _a === void 0 ? void 0 : _a.remove();
        this.userDatabase.sendingCanvas(this.canvas.toJSON(['id', 'connections', 'givingId', 'editing']));
    }
    showSnackBar(message, action) {
        const snackBarRef = this.snackBar.open(message, action, {
            duration: 3000,
        });
        snackBarRef.onAction().subscribe(() => {
            this.clear();
        });
    }
    connect() {
        if (this.canvas.connect) {
            this.canvas.connect = false;
            this.canvas.connectButtonText = this.constants.connectText;
        }
        else {
            while (this.canvas.selectedElements.length > 0) {
                this.canvas.selectedElements.pop();
            }
            this.canvas.connect = true;
            this.canvas.connectButtonText = this.constants.disconnectText;
        }
    }
    exportAsImage(canvasContent) {
        // for IE, Edge
        if (canvasContent.msToBlob) {
            const blob = canvasContent.msToBlob();
            window.navigator.msSaveBlob(blob, 'board-image.png');
        }
        else {
            // other browsers
            const image = canvasContent
                .toDataURL('image/png', 1.0)
                .replace('image/png', 'image/octet-stream');
            const link = document.createElement('a');
            link.download = 'board-image.png';
            link.href = image;
            link.click();
        }
    }
    changeColor(color) {
        this.shapeService.changeColor(this.canvas, color, this.renderer);
    }
}
UserBoardComponent.ɵfac = function UserBoardComponent_Factory(t) { return new (t || UserBoardComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_user_board_services_shape_service__WEBPACK_IMPORTED_MODULE_1__["ShapeService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_user_board_services_group_service__WEBPACK_IMPORTED_MODULE_2__["GroupService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["Renderer2"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_user_board_services_constants_service__WEBPACK_IMPORTED_MODULE_4__["ConstantsService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_socket_services_socket_service__WEBPACK_IMPORTED_MODULE_5__["SocketService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_socket_services_user_socket_service__WEBPACK_IMPORTED_MODULE_6__["UserSocketService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](angularx_social_login__WEBPACK_IMPORTED_MODULE_7__["AuthService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_8__["MatSnackBar"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_user_board_services_user_database_service__WEBPACK_IMPORTED_MODULE_9__["UserDatabaseService"])); };
UserBoardComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: UserBoardComponent, selectors: [["app-user-board"]], decls: 34, vars: 8, consts: [[2, "text-align", "center"], [1, "button-row"], [1, "title"], [1, "button-row-right"], ["mat-flat-button", "", "color", "accent", 3, "disabled", "click"], ["mat-flat-button", "", "color", "accent", 1, "connectButton", 3, "click"], ["id", "canvas-div", 2, "display", "inline-flex"], [1, "button-col"], [4, "ngFor", "ngForOf"], ["id", "canvas"], ["canvasContent", ""], ["mat-fab", "", "matTooltip", "Clear Screen", "matTooltipPosition", "after", "color", "warn", 1, "clearButton", "redButton", "but-col-right", 3, "disabled", "click"], ["mat-fab", "", "matTooltip", "Export", "matTooltipPosition", "after", "color", "warn", 1, "redButton", "but-col-right", 3, "click"], ["class", "mat-h2 noteEle", 4, "ngIf"], ["mat-mini-fab", "", 2, "border", "1px solid darkslategray", 3, "click"], [3, "color", 4, "ngIf"], [1, "mat-h2", "noteEle"]], template: function UserBoardComponent_Template(rf, ctx) { if (rf & 1) {
        const _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "button", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function UserBoardComponent_Template_button_click_5_listener() { return ctx.addRectangle(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "mat-icon");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "crop_3_2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, " Rectangle ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "button", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function UserBoardComponent_Template_button_click_9_listener() { return ctx.addEllipse(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "mat-icon");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "radio_button_unchecked");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, " Ellipse ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "button", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function UserBoardComponent_Template_button_click_13_listener() { return ctx.addTriangle(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "mat-icon");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "change_history");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, " Triangle ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "button", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function UserBoardComponent_Template_button_click_17_listener() { return ctx.connect(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "mat-icon");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, "timeline");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](23, UserBoardComponent_div_23_Template, 3, 4, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](24, "canvas", 9, 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "button", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function UserBoardComponent_Template_button_click_27_listener() { return ctx.showSnackBar("Do you want to clear the screen?", "OK"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "mat-icon");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](29, "layers_clear");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "button", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function UserBoardComponent_Template_button_click_30_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r7); const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](25); return ctx.exportAsImage(_r1); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "mat-icon");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](32, "cloud_download");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](33, UserBoardComponent_p_33_Template, 2, 1, "p", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.canvas.boardTitle);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", ctx.canvas.connect);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", ctx.canvas.connect);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", ctx.canvas.connect);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx.canvas.connectButtonText, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.constants.colors);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", ctx.canvas.connect);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.canvas.connect);
    } }, directives: [_angular_material_button__WEBPACK_IMPORTED_MODULE_10__["MatButton"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_11__["MatIcon"], _angular_common__WEBPACK_IMPORTED_MODULE_12__["NgForOf"], _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_13__["MatTooltip"], _angular_common__WEBPACK_IMPORTED_MODULE_12__["NgIf"]], styles: [".title[_ngcontent-%COMP%]{\r\n    color : rgb(0,75,150);\r\n    font-family: 'Raleway',sans-serif;\r\n    font-size: xx-large;\r\n    font-weight: bold;\r\n    float: left;\r\n    margin-top: 0.5%;\r\n    text-transform: capitalize;\r\n    letter-spacing: normal;\r\n}\r\n\r\n#canvas[_ngcontent-%COMP%]{\r\n    border: 2px solid rgb(0,75,150);\r\n    border-radius: 10px;    \r\n}\r\n\r\n.button-col[_ngcontent-%COMP%]{\r\n    display: inline-block;\r\n    margin: auto 10px 0 10px;\r\n}\r\n\r\n.button-col[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]{\r\n    margin-top: 8px;\r\n    box-shadow: none;\r\n    display: block;\r\n}\r\n\r\n.button-row[_ngcontent-%COMP%]{\r\n    width: 1067px;\r\n    margin: 10px auto;\r\n    contain: content;\r\n}\r\n\r\n.button-row-left[_ngcontent-%COMP%]{\r\n    float: left;\r\n}\r\n\r\n.button-row-right[_ngcontent-%COMP%]{\r\n    float: right;\r\n    margin-bottom: 5px;\r\n}\r\n\r\n.button-row-left[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]{\r\n    margin-right: 8px;\r\n}\r\n\r\n.button-row-right[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]{\r\n    margin-left: 8px;\r\n}\r\n\r\n.mat-flat-button[_ngcontent-%COMP%]:hover {\r\n    background-color: #3F51B5;\r\n  }\r\n\r\n.mat-fab[_ngcontent-%COMP%]:hover{\r\n    background-color: darkred;\r\n}\r\n\r\n.mat-mini-fab[_ngcontent-%COMP%]:hover{\r\n    opacity: 0.6;\r\n}\r\n\r\n.mat-h2[_ngcontent-%COMP%]{\r\n    text-align: center;\r\n    margin: 10px auto;\r\n    color: salmon;\r\n}\r\n\r\n.CornflowerBlue[_ngcontent-%COMP%]{\r\n    background-color: CornflowerBlue;\r\n}\r\n\r\n.darkcyan[_ngcontent-%COMP%]{\r\n    background-color: darkcyan;\r\n}\r\n\r\n.salmon[_ngcontent-%COMP%]{\r\n    background-color: salmon;\r\n}\r\n\r\n.lemonchiffon[_ngcontent-%COMP%]{\r\n    background-color: lemonchiffon;\r\n}\r\n\r\n.gold[_ngcontent-%COMP%]{\r\n    background-color: gold;\r\n}\r\n\r\n.MediumAquaMarine[_ngcontent-%COMP%]{\r\n    background-color: MediumAquaMarine;\r\n}\r\n\r\n.silver[_ngcontent-%COMP%]{\r\n    background-color: silver;\r\n}\r\n\r\n.palevioletred[_ngcontent-%COMP%]{\r\n    background-color: palevioletred;\r\n}\r\n\r\n.pink[_ngcontent-%COMP%]{\r\n    background-color: pink;\r\n}\r\n\r\n.white[_ngcontent-%COMP%]{\r\n    background-color: whitesmoke;\r\n}\r\n\r\n.redButton[_ngcontent-%COMP%]{\r\n  transition: all ease-in-out 0.2s;\r\n  cursor: pointer;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdXNlci1ib2FyZC91c2VyLWJvYXJkLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxxQkFBcUI7SUFDckIsaUNBQWlDO0lBQ2pDLG1CQUFtQjtJQUNuQixpQkFBaUI7SUFDakIsV0FBVztJQUNYLGdCQUFnQjtJQUNoQiwwQkFBMEI7SUFDMUIsc0JBQXNCO0FBQzFCOztBQUVBO0lBQ0ksK0JBQStCO0lBQy9CLG1CQUFtQjtBQUN2Qjs7QUFFQTtJQUNJLHFCQUFxQjtJQUNyQix3QkFBd0I7QUFDNUI7O0FBRUE7SUFDSSxlQUFlO0lBQ2YsZ0JBQWdCO0lBQ2hCLGNBQWM7QUFDbEI7O0FBRUE7SUFDSSxhQUFhO0lBQ2IsaUJBQWlCO0lBQ2pCLGdCQUFnQjtBQUNwQjs7QUFFQTtJQUNJLFdBQVc7QUFDZjs7QUFFQTtJQUNJLFlBQVk7SUFDWixrQkFBa0I7QUFDdEI7O0FBRUE7SUFDSSxpQkFBaUI7QUFDckI7O0FBRUE7SUFDSSxnQkFBZ0I7QUFDcEI7O0FBRUE7SUFDSSx5QkFBeUI7RUFDM0I7O0FBRUY7SUFDSSx5QkFBeUI7QUFDN0I7O0FBRUE7SUFDSSxZQUFZO0FBQ2hCOztBQUVBO0lBQ0ksa0JBQWtCO0lBQ2xCLGlCQUFpQjtJQUNqQixhQUFhO0FBQ2pCOztBQUVBO0lBQ0ksZ0NBQWdDO0FBQ3BDOztBQUNBO0lBQ0ksMEJBQTBCO0FBQzlCOztBQUNBO0lBQ0ksd0JBQXdCO0FBQzVCOztBQUVBO0lBQ0ksOEJBQThCO0FBQ2xDOztBQUNBO0lBQ0ksc0JBQXNCO0FBQzFCOztBQUNBO0lBQ0ksa0NBQWtDO0FBQ3RDOztBQUNBO0lBQ0ksd0JBQXdCO0FBQzVCOztBQUNBO0lBQ0ksK0JBQStCO0FBQ25DOztBQUNBO0lBQ0ksc0JBQXNCO0FBQzFCOztBQUNBO0lBQ0ksNEJBQTRCO0FBQ2hDOztBQUVBO0VBQ0UsZ0NBQWdDO0VBQ2hDLGVBQWU7QUFDakIiLCJmaWxlIjoic3JjL2FwcC91c2VyLWJvYXJkL3VzZXItYm9hcmQuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi50aXRsZXtcclxuICAgIGNvbG9yIDogcmdiKDAsNzUsMTUwKTtcclxuICAgIGZvbnQtZmFtaWx5OiAnUmFsZXdheScsc2Fucy1zZXJpZjtcclxuICAgIGZvbnQtc2l6ZTogeHgtbGFyZ2U7XHJcbiAgICBmb250LXdlaWdodDogYm9sZDtcclxuICAgIGZsb2F0OiBsZWZ0O1xyXG4gICAgbWFyZ2luLXRvcDogMC41JTtcclxuICAgIHRleHQtdHJhbnNmb3JtOiBjYXBpdGFsaXplO1xyXG4gICAgbGV0dGVyLXNwYWNpbmc6IG5vcm1hbDtcclxufVxyXG5cclxuI2NhbnZhc3tcclxuICAgIGJvcmRlcjogMnB4IHNvbGlkIHJnYigwLDc1LDE1MCk7XHJcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4OyAgICBcclxufVxyXG5cclxuLmJ1dHRvbi1jb2x7XHJcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgICBtYXJnaW46IGF1dG8gMTBweCAwIDEwcHg7XHJcbn1cclxuXHJcbi5idXR0b24tY29sIGJ1dHRvbntcclxuICAgIG1hcmdpbi10b3A6IDhweDtcclxuICAgIGJveC1zaGFkb3c6IG5vbmU7XHJcbiAgICBkaXNwbGF5OiBibG9jaztcclxufVxyXG5cclxuLmJ1dHRvbi1yb3d7XHJcbiAgICB3aWR0aDogMTA2N3B4O1xyXG4gICAgbWFyZ2luOiAxMHB4IGF1dG87XHJcbiAgICBjb250YWluOiBjb250ZW50O1xyXG59XHJcblxyXG4uYnV0dG9uLXJvdy1sZWZ0e1xyXG4gICAgZmxvYXQ6IGxlZnQ7XHJcbn1cclxuXHJcbi5idXR0b24tcm93LXJpZ2h0e1xyXG4gICAgZmxvYXQ6IHJpZ2h0O1xyXG4gICAgbWFyZ2luLWJvdHRvbTogNXB4O1xyXG59XHJcblxyXG4uYnV0dG9uLXJvdy1sZWZ0IGJ1dHRvbntcclxuICAgIG1hcmdpbi1yaWdodDogOHB4O1xyXG59XHJcblxyXG4uYnV0dG9uLXJvdy1yaWdodCBidXR0b257XHJcbiAgICBtYXJnaW4tbGVmdDogOHB4O1xyXG59XHJcblxyXG4ubWF0LWZsYXQtYnV0dG9uOmhvdmVyIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICMzRjUxQjU7XHJcbiAgfVxyXG5cclxuLm1hdC1mYWI6aG92ZXJ7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBkYXJrcmVkO1xyXG59XHJcblxyXG4ubWF0LW1pbmktZmFiOmhvdmVye1xyXG4gICAgb3BhY2l0eTogMC42O1xyXG59XHJcblxyXG4ubWF0LWgye1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgbWFyZ2luOiAxMHB4IGF1dG87XHJcbiAgICBjb2xvcjogc2FsbW9uO1xyXG59XHJcblxyXG4uQ29ybmZsb3dlckJsdWV7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBDb3JuZmxvd2VyQmx1ZTtcclxufVxyXG4uZGFya2N5YW57XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBkYXJrY3lhbjtcclxufVxyXG4uc2FsbW9ue1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogc2FsbW9uO1xyXG59XHJcblxyXG4ubGVtb25jaGlmZm9ue1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogbGVtb25jaGlmZm9uO1xyXG59XHJcbi5nb2xke1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogZ29sZDtcclxufVxyXG4uTWVkaXVtQXF1YU1hcmluZXtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IE1lZGl1bUFxdWFNYXJpbmU7XHJcbn1cclxuLnNpbHZlcntcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHNpbHZlcjtcclxufVxyXG4ucGFsZXZpb2xldHJlZHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHBhbGV2aW9sZXRyZWQ7XHJcbn1cclxuLnBpbmt7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBwaW5rO1xyXG59XHJcbi53aGl0ZXtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlc21va2U7XHJcbn1cclxuXHJcbi5yZWRCdXR0b257XHJcbiAgdHJhbnNpdGlvbjogYWxsIGVhc2UtaW4tb3V0IDAuMnM7XHJcbiAgY3Vyc29yOiBwb2ludGVyO1xyXG59Il19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](UserBoardComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-user-board',
                templateUrl: './user-board.component.html',
                styleUrls: ['./user-board.component.css'],
            }]
    }], function () { return [{ type: _user_board_services_shape_service__WEBPACK_IMPORTED_MODULE_1__["ShapeService"] }, { type: _user_board_services_group_service__WEBPACK_IMPORTED_MODULE_2__["GroupService"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Renderer2"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"] }, { type: _user_board_services_constants_service__WEBPACK_IMPORTED_MODULE_4__["ConstantsService"] }, { type: _socket_services_socket_service__WEBPACK_IMPORTED_MODULE_5__["SocketService"] }, { type: _socket_services_user_socket_service__WEBPACK_IMPORTED_MODULE_6__["UserSocketService"] }, { type: angularx_social_login__WEBPACK_IMPORTED_MODULE_7__["AuthService"] }, { type: _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_8__["MatSnackBar"] }, { type: _user_board_services_user_database_service__WEBPACK_IMPORTED_MODULE_9__["UserDatabaseService"] }]; }, null); })();


/***/ }),

/***/ "./src/app/user.service.ts":
/*!*********************************!*\
  !*** ./src/app/user.service.ts ***!
  \*********************************/
/*! exports provided: UserService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserService", function() { return UserService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./constants */ "./src/app/constants.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");




class UserService {
    constructor(http) {
        this.http = http;
    }
    getUserType(email) {
        return this.http.get(`${_constants__WEBPACK_IMPORTED_MODULE_1__["URI"]}/user/${email}`);
    }
}
UserService.ɵfac = function UserService_Factory(t) { return new (t || UserService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"])); };
UserService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: UserService, factory: UserService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](UserService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }]; }, null); })();


/***/ }),

/***/ "./src/app/view-boards/view-boards.component.ts":
/*!******************************************************!*\
  !*** ./src/app/view-boards/view-boards.component.ts ***!
  \******************************************************/
/*! exports provided: ViewBoardsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ViewBoardsComponent", function() { return ViewBoardsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var angularx_social_login__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! angularx-social-login */ "./node_modules/angularx-social-login/__ivy_ngcc__/fesm2015/angularx-social-login.js");
/* harmony import */ var _board_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../board.service */ "./src/app/board.service.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/button */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/button.js");







const _c0 = function (a0) { return { room_code: a0 }; };
function ViewBoardsComponent_div_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "p", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "p", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "button", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "a", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "View");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const board_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](board_r1.room_title);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("Room Code: ", board_r1.room_id, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("queryParams", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](3, _c0, board_r1.room_id));
} }
class ViewBoardsComponent {
    constructor(router, authService, boardService) {
        this.router = router;
        this.authService = authService;
        this.boardService = boardService;
    }
    ngOnInit() {
        this.authService.authState.subscribe((user) => {
            this.currentUser = user;
            if (!this.currentUser) {
                this.router.navigate(['/login']);
            }
        });
        this.boardService.viewBoard(this.currentUser.email).subscribe((result) => {
            if (result['success']) {
                let data = result['data'];
                this.boards = data.boards;
            }
            else {
                console.log('unable to fetch boards');
            }
        });
    }
}
ViewBoardsComponent.ɵfac = function ViewBoardsComponent_Factory(t) { return new (t || ViewBoardsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](angularx_social_login__WEBPACK_IMPORTED_MODULE_2__["AuthService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_board_service__WEBPACK_IMPORTED_MODULE_3__["BoardService"])); };
ViewBoardsComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ViewBoardsComponent, selectors: [["app-view-boards"]], decls: 3, vars: 1, consts: [[1, "title"], ["class", "card", 4, "ngFor", "ngForOf"], [1, "card"], [1, "container"], [1, "btitle"], [1, "roomCode"], ["mat-button", "", 1, "viewBtn"], ["routerLink", "/userboard", 3, "queryParams"]], template: function ViewBoardsComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h2", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Existing Boards");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, ViewBoardsComponent_div_2_Template, 10, 5, "div", 1);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.boards);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_4__["NgForOf"], _angular_material_button__WEBPACK_IMPORTED_MODULE_5__["MatButton"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterLinkWithHref"]], styles: [".card[_ngcontent-%COMP%] {\r\n    width: 200px;\r\n    height: 80px;\r\n    padding: 15px;\r\n    border-radius:5px;\r\n    color: rgb(0, 75, 150);\r\n    border: 2px solid rgb(35, 145, 255);\r\n    box-shadow: 10px 10px 15px lightgrey;\r\n    margin:20px 0px 0px 20px;\r\n    float:left;\r\n  }\r\n\r\n.card[_ngcontent-%COMP%]:hover{\r\n    color:white;\r\n    cursor: pointer;\r\n    background-color: rgb(35, 145, 255);\r\n    box-shadow: 10px 10px 15px grey;\r\n}\r\n\r\n.container[_ngcontent-%COMP%]{\r\n    height: 60px;\r\n}\r\n\r\n.title[_ngcontent-%COMP%]{\r\n    margin:20px;\r\n    color: rgb(0, 75, 150);\r\n}\r\n\r\n.btitle[_ngcontent-%COMP%]{\r\n    font-size: 16px;\r\n    margin-bottom: 0px;\r\n}\r\n\r\n.roomCode[_ngcontent-%COMP%], .date[_ngcontent-%COMP%]{\r\n    font-size: 12px;\r\n}\r\n\r\n.viewBtn[_ngcontent-%COMP%]{\r\n    float: right;\r\n    margin-bottom: 5px;\r\n}\r\n\r\na[_ngcontent-%COMP%]{\r\n    text-decoration: none;\r\n    color:rgb(0, 75, 150);\r\n}\r\n\r\na[_ngcontent-%COMP%]:hover{\r\n    color:white;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdmlldy1ib2FyZHMvdmlldy1ib2FyZHMuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLFlBQVk7SUFDWixZQUFZO0lBQ1osYUFBYTtJQUNiLGlCQUFpQjtJQUNqQixzQkFBc0I7SUFDdEIsbUNBQW1DO0lBQ25DLG9DQUFvQztJQUNwQyx3QkFBd0I7SUFDeEIsVUFBVTtFQUNaOztBQUVGO0lBQ0ksV0FBVztJQUNYLGVBQWU7SUFDZixtQ0FBbUM7SUFDbkMsK0JBQStCO0FBQ25DOztBQUNBO0lBQ0ksWUFBWTtBQUNoQjs7QUFDQTtJQUNJLFdBQVc7SUFDWCxzQkFBc0I7QUFDMUI7O0FBQ0E7SUFDSSxlQUFlO0lBQ2Ysa0JBQWtCO0FBQ3RCOztBQUNBO0lBQ0ksZUFBZTtBQUNuQjs7QUFFQTtJQUNJLFlBQVk7SUFDWixrQkFBa0I7QUFDdEI7O0FBRUE7SUFDSSxxQkFBcUI7SUFDckIscUJBQXFCO0FBQ3pCOztBQUVBO0lBQ0ksV0FBVztBQUNmIiwiZmlsZSI6InNyYy9hcHAvdmlldy1ib2FyZHMvdmlldy1ib2FyZHMuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5jYXJkIHtcclxuICAgIHdpZHRoOiAyMDBweDtcclxuICAgIGhlaWdodDogODBweDtcclxuICAgIHBhZGRpbmc6IDE1cHg7XHJcbiAgICBib3JkZXItcmFkaXVzOjVweDtcclxuICAgIGNvbG9yOiByZ2IoMCwgNzUsIDE1MCk7XHJcbiAgICBib3JkZXI6IDJweCBzb2xpZCByZ2IoMzUsIDE0NSwgMjU1KTtcclxuICAgIGJveC1zaGFkb3c6IDEwcHggMTBweCAxNXB4IGxpZ2h0Z3JleTtcclxuICAgIG1hcmdpbjoyMHB4IDBweCAwcHggMjBweDtcclxuICAgIGZsb2F0OmxlZnQ7XHJcbiAgfVxyXG5cclxuLmNhcmQ6aG92ZXJ7XHJcbiAgICBjb2xvcjp3aGl0ZTtcclxuICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigzNSwgMTQ1LCAyNTUpO1xyXG4gICAgYm94LXNoYWRvdzogMTBweCAxMHB4IDE1cHggZ3JleTtcclxufVxyXG4uY29udGFpbmVye1xyXG4gICAgaGVpZ2h0OiA2MHB4O1xyXG59XHJcbi50aXRsZXtcclxuICAgIG1hcmdpbjoyMHB4O1xyXG4gICAgY29sb3I6IHJnYigwLCA3NSwgMTUwKTtcclxufVxyXG4uYnRpdGxle1xyXG4gICAgZm9udC1zaXplOiAxNnB4O1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMHB4O1xyXG59XHJcbi5yb29tQ29kZSwuZGF0ZXtcclxuICAgIGZvbnQtc2l6ZTogMTJweDtcclxufVxyXG5cclxuLnZpZXdCdG57XHJcbiAgICBmbG9hdDogcmlnaHQ7XHJcbiAgICBtYXJnaW4tYm90dG9tOiA1cHg7XHJcbn1cclxuXHJcbmF7XHJcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbiAgICBjb2xvcjpyZ2IoMCwgNzUsIDE1MCk7XHJcbn1cclxuXHJcbmE6aG92ZXJ7XHJcbiAgICBjb2xvcjp3aGl0ZTtcclxufVxyXG4iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ViewBoardsComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-view-boards',
                templateUrl: './view-boards.component.html',
                styleUrls: ['./view-boards.component.css']
            }]
    }], function () { return [{ type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"] }, { type: angularx_social_login__WEBPACK_IMPORTED_MODULE_2__["AuthService"] }, { type: _board_service__WEBPACK_IMPORTED_MODULE_3__["BoardService"] }]; }, null); })();


/***/ }),

/***/ "./src/environments/environment.ts":
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

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\My Files\Programs\DB\digi-planner new\DigiPlannerTool\client\src\main.ts */"./src/main.ts");


/***/ }),

/***/ 1:
/*!***********************!*\
  !*** jsdom (ignored) ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports) {

/* (ignored) */

/***/ }),

/***/ 2:
/*!********************************************************!*\
  !*** jsdom/lib/jsdom/living/generated/utils (ignored) ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/* (ignored) */

/***/ }),

/***/ 3:
/*!***************************************!*\
  !*** jsdom/lib/jsdom/utils (ignored) ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/* (ignored) */

/***/ }),

/***/ 4:
/*!********************!*\
  !*** ws (ignored) ***!
  \********************/
/*! no static exports found */
/***/ (function(module, exports) {

/* (ignored) */

/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main-es2015.js.map