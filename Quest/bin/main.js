"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var locations_1 = require("./gameLogic/locations");
var greatings_1 = require("./gameLogic/greatings");
while (locations_1.progress == true) {
    locations_1.next.action3();
}
locations_1.won === true ? greatings_1.winner.conversation() : greatings_1.loser.conversation();
//# sourceMappingURL=main.js.map