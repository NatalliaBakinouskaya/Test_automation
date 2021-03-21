"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.loser = exports.winner = void 0;
var locations_1 = require("./locations");
exports.winner = {
    greating: "! \u0412\u044B \u0432\u044B\u0438\u0433\u0440\u0430\u043B\u0438!",
    conversation: function () {
        console.log('Игра окончена, ', locations_1.scene1.selection + this.greating);
    },
};
exports.loser = {
    greating: "! \u0412\u044B \u043F\u0440\u043E\u0438\u0433\u0440\u0430\u043B\u0438!",
    conversation: function () {
        console.log('Игра окончена, ', locations_1.scene1.selection + this.greating);
    },
};
//# sourceMappingURL=greatings.js.map