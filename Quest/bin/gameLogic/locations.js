"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.scene2 = exports.scene1 = exports.won = exports.userName = exports.progress = exports.next = void 0;
var Prompt = require('prompt-sync')();
var classes_1 = require("./classes");
exports.progress = true;
exports.userName = 'Женя';
exports.won = true;
exports.scene1 = new classes_1.Scene("\u041F\u0440\u0438\u0432\u0435\u0442! \u0414\u0430\u0432\u0430\u0439 \u0438\u0433\u0440\u0430\u0442\u044C!\n    ");
exports.scene1.action1 = function () {
    console.log(this.text);
    this.selection = Prompt('Назовите Ваше имя _ ');
};
exports.scene1.action2 = function () {
    if (this.selection.length > 0) {
        exports.userName = this.selection;
        console.log("\u041F\u0440\u0438\u044F\u0442\u043D\u043E \u043F\u043E\u0437\u043D\u0430\u043A\u043E\u043C\u0438\u0442\u044C\u0441\u044F, " + exports.userName + "!\n           \u00A0\n    _______________\n         ____\n    ______________");
        exports.next = exports.scene2;
    }
    else {
        console.log("\u042F \u0441 \u043D\u0435\u0437\u043D\u0430\u043A\u043E\u043C\u044B\u043C\u0438 \u043D\u0435 \u0438\u0433\u0440\u0430\u044E.\n               \u041F\u043E\u043A\u0430");
        exports.progress = false;
    }
    // return userName;
};
exports.scene2 = new classes_1.Scene("\u0412 \u043E\u0434\u043D\u043E\u0439 \u0434\u0435\u0440\u0435\u0432\u043D\u0435 \u0436\u0438\u043B\u0430 \u043C\u0430\u043B\u0435\u043D\u044C\u043A\u0430\u044F \u0434\u0435\u0432\u043E\u0447\u043A\u0430, \u0443 \u043A\u043E\u0442\u043E\u0440\u043E\u0439 \u0431\u044B\u043B\u0430 \u043A\u0440\u0430\u0441\u043D\u0430\u044F \u0448\u0430\u043F\u043A\u0430 \n\u0438 \u043F\u043E\u044D\u0442\u043E\u043C\u0443 \u0437\u0432\u0430\u043B\u0438 \u0435\u0435 \"\u041A\u0440\u0430\u0441\u043D\u0430\u044F \u0428\u0430\u043F\u043E\u0447\u043A\u0430. \u0423 \u0434\u0435\u0432\u043E\u0447\u043A\u0438 \u0431\u044B\u043B\u0430 \u043C\u0430\u043C\u0430 \u0438 \u0431\u0430\u0431\u0443\u0448\u043A\u0430. \n\u0411\u0430\u0431\u0443\u0448\u043A\u0430 \u0436\u0438\u043B\u0430 \u0437\u0430 \u043B\u0435\u0441\u043E\u043C \u0438 \u043E\u0447\u0435\u043D\u044C \u043B\u044E\u0431\u0438\u043B\u0430 \u043F\u0438\u0440\u043E\u0436\u043A\u0438. \u0410 \u0432 \u0442\u0435\u043C\u043D\u043E\u043C-\u0442\u0435\u043C\u043D\u043E\u043C \u043B\u0435\u0441\u0443 \n\u0436\u0438\u043B \u043E\u0434\u0438\u043D\u043E\u043A\u0438\u0439 \u0433\u043E\u043B\u043E\u0434\u043D\u044B\u0439 \u0432\u043E\u043B\u043A, \u043A\u043E\u0442\u043E\u0440\u043E\u0433\u043E \u043D\u0438\u043A\u0442\u043E \u043D\u0435 \u043B\u044E\u0431\u0438\u043B \u0438 \u043D\u0435 \u043A\u043E\u0440\u043C\u0438\u043B \u043F\u0438\u0440\u043E\u0436\u043A\u0430\u043C\u0438. \n\u0427\u044C\u044E \u0438\u0441\u0442\u043E\u0440\u0438\u044E \u0445\u043E\u0447\u0435\u0448\u044C \u0443\u0437\u043D\u0430\u0442\u044C? \n______________\n1 - e\u0441\u043B\u0438 \u0428\u0430\u043F\u043A\u0438 \n\u0438 \n2 - \u0435\u0441\u043B\u0438 \u0412\u043E\u043B\u043A\u0430 \n");
exports.scene2.action2 = function () {
    if (this.selection == '2') {
        console.log("\u041E\u0442\u043B\u0438\u0447\u043D\u044B\u0439 \u0432\u044B\u0431\u043E\u0440, \u0412\u043E\u043B\u043A!");
        exports.next = 'scene3';
        exports.progress = false;
    }
    else if (this.selection == '1') {
        console.log("\u0421 \u0434\u0435\u0432\u0447\u043E\u043D\u043A\u0430\u043C\u0438 \u043D\u0435 \u0438\u0433\u0440\u0430\u044E! \u041F\u043E\u043A\u0430!");
        exports.next = 'finish';
        exports.progress = false;
        exports.won = false;
    }
    else {
        console.log(exports.scene1.selection + ", \u044D\u0442\u043E \u043D\u0435 \u043E\u0442\u0432\u0435\u0442 \u0434\u0430\u0432\u0430\u0439 \u0435\u0449\u0435 \u0440\u0430\u0437.");
        exports.scene2.text = "\uD83D\uDE0D";
        exports.scene2.action1();
        exports.scene2.action2();
    }
};
exports.next = exports.scene1;
// userName = scene1.selection;
// scene1.action3();
// console.log(userName);
//# sourceMappingURL=locations.js.map