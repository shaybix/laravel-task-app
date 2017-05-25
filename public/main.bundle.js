webpackJsonp([1,4],{

/***/ 100:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
// The file contents for the current environment will overwrite these during build.
var environment = {
    production: false
};
//# sourceMappingURL=environment.js.map

/***/ }),

/***/ 155:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(10)(false);
// imports


// module
exports.push([module.i, "app-task-input {\r\n    margin: 35px;\r\n}\r\n\r\n.application-content {\r\n    padding: 20px 50px;\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 156:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(10)(false);
// imports


// module
exports.push([module.i, ".filler {\r\n    -webkit-box-flex: 1;\r\n        -ms-flex: 1 1 auto;\r\n            flex: 1 1 auto;\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 157:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(10)(false);
// imports


// module
exports.push([module.i, "md-input-container {\r\n    width: 100%;\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 158:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(10)(false);
// imports


// module
exports.push([module.i, "md-input-container {\r\n    width: 100%;\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 159:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(10)(false);
// imports


// module
exports.push([module.i, "/*.filler {\r\n    flex: 1 1 auto;\r\n}*/\r\n\r\n\r\nmd-icon {\r\n    cursor: pointer;\r\n}\r\n\r\n\r\n/deep/ md-card .md-grid-tile-buttons .mat-figure {\r\n    display: -webkit-box;\r\n    display: -ms-flexbox;\r\n    display: flex;\r\n    -webkit-box-pack: end !important;\r\n        -ms-flex-pack: end !important;\r\n            justify-content: flex-end !important;\r\n}\r\n\r\n\r\n/deep/ md-card .md-grid-tile-task .mat-figure {\r\n    display: -webkit-box;\r\n    display: -ms-flexbox;\r\n    display: flex;\r\n    -webkit-box-pack: start !important;\r\n        -ms-flex-pack: start !important;\r\n            justify-content: flex-start !important;\r\n}\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 160:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(10)(false);
// imports


// module
exports.push([module.i, "\r\napp-task-item {\r\n    margin: 45px;\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 162:
/***/ (function(module, exports) {

module.exports = "<app-header></app-header>\n<div class=\"application-content\">\n  <app-task-input></app-task-input>\n  <hr>\n  <app-tasks></app-tasks>\n</div>\n"

/***/ }),

/***/ 163:
/***/ (function(module, exports) {

module.exports = "<md-toolbar color=\"primary\">\n  <span>\n    My App\n  </span>\n  <span class=\"filler\"></span>\n    <button md-button>\n      <md-icon>menu</md-icon>\n    </button>\n</md-toolbar>\n"

/***/ }),

/***/ 164:
/***/ (function(module, exports) {

module.exports = "<h3>Edit Task</h3>\n<form (ngSubmit)=\"onEditTask()\">\n  <md-input-container>\n    <input mdInput [(ngModel)]=\"task.title\" name=\"title\"/>\n  </md-input-container>\n</form>\n<button md-button (click)=\"onEditTaskCancelled()\">Cancel</button>\n"

/***/ }),

/***/ 165:
/***/ (function(module, exports) {

module.exports = "<md-card>\n  <form (ngSubmit)=\"onAddTask(f)\" #f=\"ngForm\">\n    <md-input-container>\n      <input mdInput ngModel name=\"title\" placeholder=\"Task Title\">\n    </md-input-container>\n  </form>\n</md-card>"

/***/ }),

/***/ 166:
/***/ (function(module, exports) {

module.exports = "<md-card>\r\n  <md-grid-list cols=\"2\" rowHeight=\"30px\">\r\n    <md-grid-tile class=\"md-grid-tile-task\">\r\n      <md-checkbox #checkbox (click)=\"onChecked(checkbox)\" [checked]=\"(!!task.completed)\">{{ task.title }}</md-checkbox>\r\n    </md-grid-tile>\r\n    <md-grid-tile class=\"md-grid-tile-buttons\">\r\n      <md-icon (click)=\"onShowEdit()\">edit</md-icon>\r\n      <md-icon (click)=\"onDeleteTask()\">delete</md-icon>\r\n    </md-grid-tile>\r\n  </md-grid-list>\r\n  <div *ngIf=\"!hideEdit\">\r\n    <hr>\r\n    <app-task-edit [task]=\"task\" (taskEdited)=\"onTaskEdited($event)\" (editCancelled)=\"onCancelEdit()\"></app-task-edit>\r\n  </div>\r\n</md-card>"

/***/ }),

/***/ 167:
/***/ (function(module, exports) {

module.exports = "<app-task-item *ngFor=\"let aTask of tasks; let i = index\" [index]=\"i\" [task]=\"aTask\"></app-task-item>\n"

/***/ }),

/***/ 18:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(36);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Subject__ = __webpack_require__(24);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Subject___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_Subject__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__ = __webpack_require__(72);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TasksService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var TasksService = (function () {
    function TasksService(_http) {
        this._http = _http;
        this.taskAdded = new __WEBPACK_IMPORTED_MODULE_2_rxjs_Subject__["Subject"]();
        this.taskCompleted = new __WEBPACK_IMPORTED_MODULE_2_rxjs_Subject__["Subject"]();
        this.taskDeleted = new __WEBPACK_IMPORTED_MODULE_2_rxjs_Subject__["Subject"]();
        this.taskEdited = new __WEBPACK_IMPORTED_MODULE_2_rxjs_Subject__["Subject"]();
    }
    TasksService.prototype.loadTasks = function () {
        return this._http.get('api/tasks')
            .map(function (response) { return response.json(); });
    };
    TasksService.prototype.createTask = function (task) {
        var _this = this;
        return this._http.post('api/tasks', task)
            .map(function (response) { return response.json(); })
            .subscribe(function (response) { _this.taskAdded.next(response); }, function (error) { console.log(error); }, function () { });
    };
    TasksService.prototype.deleteTask = function (index, task) {
        var _this = this;
        return this._http.delete("api/tasks/" + task.id)
            .map(function (response) { return response.json(); })
            .subscribe(function (response) { _this.taskDeleted.next(index); }, function (error) { console.log(error); }, function () { });
    };
    TasksService.prototype.saveTask = function (index, task) {
        var _this = this;
        return this._http.put("api/tasks/" + task.id, task)
            .map(function (response) { return response.json(); }).subscribe(function (response) { _this.taskEdited.next({ "index": index, "task": response }); }, function (error) { console.log(error); }, function () { });
    };
    TasksService.prototype.completeTask = function (task) {
        return this._http.put("api/tasks/" + task.id, task)
            .map(function (response) { return response.json(); });
    };
    return TasksService;
}());
TasksService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["c" /* Injectable */])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */]) === "function" && _a || Object])
], TasksService);

var _a;
//# sourceMappingURL=tasks.service.js.map

/***/ }),

/***/ 219:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(85);


/***/ }),

/***/ 59:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Task; });
var Task = (function () {
    function Task(id, title, completed) {
        this.id = id;
        this.title = title;
        this.completed = completed;
    }
    return Task;
}());

//# sourceMappingURL=task.model.js.map

/***/ }),

/***/ 84:
/***/ (function(module, exports) {

function webpackEmptyContext(req) {
	throw new Error("Cannot find module '" + req + "'.");
}
webpackEmptyContext.keys = function() { return []; };
webpackEmptyContext.resolve = webpackEmptyContext;
module.exports = webpackEmptyContext;
webpackEmptyContext.id = 84;


/***/ }),

/***/ 85:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__(91);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__(94);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__(100);




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["a" /* enableProdMode */])();
}
__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 93:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(2);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = (function () {
    function AppComponent() {
        this.title = 'app works!';
    }
    return AppComponent;
}());
AppComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_3" /* Component */])({
        selector: 'app-root',
        template: __webpack_require__(162),
        styles: [__webpack_require__(155)]
    })
], AppComponent);

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 94:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(58);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__(36);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_platform_browser_animations__ = __webpack_require__(92);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_material__ = __webpack_require__(90);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__app_component__ = __webpack_require__(93);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__header_header_component__ = __webpack_require__(95);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__tasks_tasks_component__ = __webpack_require__(99);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__tasks_task_item_task_item_component__ = __webpack_require__(98);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__tasks_task_input_task_input_component__ = __webpack_require__(97);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__tasks_tasks_service__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__tasks_task_edit_task_edit_component__ = __webpack_require__(96);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};













var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["b" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_6__app_component__["a" /* AppComponent */],
            __WEBPACK_IMPORTED_MODULE_7__header_header_component__["a" /* HeaderComponent */],
            __WEBPACK_IMPORTED_MODULE_8__tasks_tasks_component__["a" /* TasksComponent */],
            __WEBPACK_IMPORTED_MODULE_9__tasks_task_item_task_item_component__["a" /* TaskItemComponent */],
            __WEBPACK_IMPORTED_MODULE_10__tasks_task_input_task_input_component__["a" /* TaskInputComponent */],
            __WEBPACK_IMPORTED_MODULE_12__tasks_task_edit_task_edit_component__["a" /* TaskEditComponent */],
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
            __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormsModule */],
            __WEBPACK_IMPORTED_MODULE_3__angular_http__["a" /* HttpModule */],
            __WEBPACK_IMPORTED_MODULE_4__angular_platform_browser_animations__["a" /* BrowserAnimationsModule */],
            __WEBPACK_IMPORTED_MODULE_5__angular_material__["a" /* MdToolbarModule */],
            __WEBPACK_IMPORTED_MODULE_5__angular_material__["b" /* MdMenuModule */],
            __WEBPACK_IMPORTED_MODULE_5__angular_material__["c" /* MdButtonModule */],
            __WEBPACK_IMPORTED_MODULE_5__angular_material__["d" /* MdIconModule */],
            __WEBPACK_IMPORTED_MODULE_5__angular_material__["e" /* MdCardModule */],
            __WEBPACK_IMPORTED_MODULE_5__angular_material__["f" /* MdCheckboxModule */],
            __WEBPACK_IMPORTED_MODULE_5__angular_material__["g" /* MdInputModule */],
            __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormsModule */],
            __WEBPACK_IMPORTED_MODULE_5__angular_material__["h" /* MdGridListModule */]
        ],
        providers: [__WEBPACK_IMPORTED_MODULE_11__tasks_tasks_service__["a" /* TasksService */]],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_6__app_component__["a" /* AppComponent */]]
    })
], AppModule);

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 95:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(2);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HeaderComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var HeaderComponent = (function () {
    function HeaderComponent() {
        this.title = '';
    }
    HeaderComponent.prototype.ngOnInit = function () {
    };
    return HeaderComponent;
}());
HeaderComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_3" /* Component */])({
        selector: 'app-header',
        template: __webpack_require__(163),
        styles: [__webpack_require__(156)]
    }),
    __metadata("design:paramtypes", [])
], HeaderComponent);

//# sourceMappingURL=header.component.js.map

/***/ }),

/***/ 96:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__task_model__ = __webpack_require__(59);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__tasks_service__ = __webpack_require__(18);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TaskEditComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var TaskEditComponent = (function () {
    function TaskEditComponent(tasksService) {
        this.tasksService = tasksService;
        this.taskEdited = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* EventEmitter */]();
        this.editCancelled = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* EventEmitter */]();
    }
    TaskEditComponent.prototype.ngOnInit = function () {
    };
    TaskEditComponent.prototype.onEditTask = function () {
        var task = this.task;
        this.taskEdited.emit(task);
    };
    TaskEditComponent.prototype.onEditTaskCancelled = function () {
        this.editCancelled.emit(true);
    };
    return TaskEditComponent;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["O" /* Input */])(),
    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__task_model__["a" /* Task */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__task_model__["a" /* Task */]) === "function" && _a || Object)
], TaskEditComponent.prototype, "task", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_0" /* Output */])(),
    __metadata("design:type", typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* EventEmitter */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* EventEmitter */]) === "function" && _b || Object)
], TaskEditComponent.prototype, "taskEdited", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_0" /* Output */])(),
    __metadata("design:type", typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* EventEmitter */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* EventEmitter */]) === "function" && _c || Object)
], TaskEditComponent.prototype, "editCancelled", void 0);
TaskEditComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_3" /* Component */])({
        selector: 'app-task-edit',
        template: __webpack_require__(164),
        styles: [__webpack_require__(157)]
    }),
    __metadata("design:paramtypes", [typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_2__tasks_service__["a" /* TasksService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__tasks_service__["a" /* TasksService */]) === "function" && _d || Object])
], TaskEditComponent);

var _a, _b, _c, _d;
//# sourceMappingURL=task-edit.component.js.map

/***/ }),

/***/ 97:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__tasks_service__ = __webpack_require__(18);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TaskInputComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var TaskInputComponent = (function () {
    function TaskInputComponent(tasksService) {
        this.tasksService = tasksService;
        this.task = {
            "id": null,
            "title": "",
            "completed": false
        };
    }
    TaskInputComponent.prototype.ngOnInit = function () {
    };
    TaskInputComponent.prototype.onAddTask = function (form) {
        var task = this.task;
        task.title = form.value.title;
        this.tasksService.createTask(task);
        form.reset();
    };
    return TaskInputComponent;
}());
TaskInputComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_3" /* Component */])({
        selector: 'app-task-input',
        template: __webpack_require__(165),
        styles: [__webpack_require__(158)]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__tasks_service__["a" /* TasksService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__tasks_service__["a" /* TasksService */]) === "function" && _a || Object])
], TaskInputComponent);

var _a;
//# sourceMappingURL=task-input.component.js.map

/***/ }),

/***/ 98:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__task_model__ = __webpack_require__(59);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__tasks_service__ = __webpack_require__(18);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TaskItemComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var TaskItemComponent = (function () {
    function TaskItemComponent(tasksService) {
        this.tasksService = tasksService;
        this.hideEdit = true;
    }
    TaskItemComponent.prototype.ngOnInit = function () {
    };
    TaskItemComponent.prototype.ngOnChanges = function () {
        console.log(this.task.completed);
    };
    TaskItemComponent.prototype.onChecked = function (element) {
        var _this = this;
        var task = this.task;
        task.completed = this.task.completed ? false : true;
        this.tasksService.completeTask(task).subscribe(function (task) {
            _this.tasksService.taskCompleted.next({ "index": _this.index, "task": task });
        });
    };
    TaskItemComponent.prototype.onShowEdit = function () {
        this.hideEdit = false;
    };
    TaskItemComponent.prototype.onTaskEdited = function (editedTask) {
        this.tasksService.saveTask(this.index, this.task);
        this.hideEdit = true;
    };
    TaskItemComponent.prototype.onCancelEdit = function () {
        this.hideEdit = true;
    };
    TaskItemComponent.prototype.onDeleteTask = function () {
        this.tasksService.deleteTask(this.index, this.task);
    };
    return TaskItemComponent;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["O" /* Input */])(),
    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__task_model__["a" /* Task */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__task_model__["a" /* Task */]) === "function" && _a || Object)
], TaskItemComponent.prototype, "task", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["O" /* Input */])(),
    __metadata("design:type", Number)
], TaskItemComponent.prototype, "index", void 0);
TaskItemComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_3" /* Component */])({
        selector: 'app-task-item',
        template: __webpack_require__(166),
        styles: [__webpack_require__(159)]
    }),
    __metadata("design:paramtypes", [typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__tasks_service__["a" /* TasksService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__tasks_service__["a" /* TasksService */]) === "function" && _b || Object])
], TaskItemComponent);

var _a, _b;
//# sourceMappingURL=task-item.component.js.map

/***/ }),

/***/ 99:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__tasks_service__ = __webpack_require__(18);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TasksComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var TasksComponent = (function () {
    function TasksComponent(tasksService) {
        this.tasksService = tasksService;
    }
    TasksComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.tasksService.loadTasks().subscribe(function (tasks) {
            _this.tasks = tasks;
        });
        this.tasksService.taskAdded.subscribe(function (task) {
            _this.tasks.push(task);
        });
        this.tasksService.taskCompleted.subscribe(function (response) {
            console.log('triggered taskCompleted subscription!');
            _this.tasks.splice(response.index, 1, response.task);
        }, function (error) { console.log(error); }, function () { console.log('completed!'); });
        this.tasksService.taskDeleted.subscribe(function (index) {
            _this.tasks.splice(index, 1);
        });
        this.tasksService.taskEdited.subscribe(function (response) {
            _this.tasks.splice(response.index, 1, response.task);
        });
    };
    TasksComponent.prototype.ngOnDestroy = function () {
        this.tasksService.taskAdded.unsubscribe();
        this.tasksService.taskCompleted.unsubscribe();
        this.tasksService.taskDeleted.unsubscribe();
        this.tasksService.taskEdited.unsubscribe();
    };
    return TasksComponent;
}());
TasksComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_3" /* Component */])({
        selector: 'app-tasks',
        template: __webpack_require__(167),
        styles: [__webpack_require__(160)]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__tasks_service__["a" /* TasksService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__tasks_service__["a" /* TasksService */]) === "function" && _a || Object])
], TasksComponent);

var _a;
//# sourceMappingURL=tasks.component.js.map

/***/ })

},[219]);
//# sourceMappingURL=main.bundle.js.map