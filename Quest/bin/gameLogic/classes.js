"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Scene = void 0;
var Prompt = require('prompt-sync')();
var Scene = /** @class */ (function () {
    function Scene(text) {
        this.text = text;
        this.selection = '';
    }
    Scene.prototype.action1 = function () {
        console.log(this.text);
        this.selection = Prompt('Выберите номер ответа _ ');
    };
    Scene.prototype.action2 = function () {
    };
    Scene.prototype.action3 = function () {
        this.action1();
        this.action2();
    };
    return Scene;
}());
exports.Scene = Scene;
//# sourceMappingURL=classes.js.map