"use strict";
exports.__esModule = true;
exports.loot = void 0;
var treasures_1 = require("../tables/treasures");
var functions_1 = require("../util/functions");
var styles_1 = require("../util/styles");
function loot(number) {
    console.log("argument:" + number);
    var output = '';
    for (var i = 0; i < number; i++) {
        // the treasures are unevenly distributed so can't just randomly pick()
        var chosenTreasure = functions_1.picky(treasures_1.treasures, '1d20');
        output += "<p>You " + styles_1.good('obtained') + " " + functions_1.one(chosenTreasure.treasure()) + " " + styles_1.figure(chosenTreasure.rarity) + "</p>";
    }
    console.log(output);
    return output;
}
exports.loot = loot;
