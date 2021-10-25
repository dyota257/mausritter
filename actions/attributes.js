"use strict";
// TYPESCRIPT DONE
exports.__esModule = true;
exports.makeNewCharacterAttributes = void 0;
var functions_1 = require("../util/functions");
function makeNewCharacterAttributes() {
    return {
        STR: newAttribute(),
        DEX: newAttribute(),
        WIL: newAttribute()
    };
}
exports.makeNewCharacterAttributes = makeNewCharacterAttributes;
function newAttribute() {
    var dice = functions_1.roll('3d6');
    var highestTwo = dice.rolls.sort(function (a, b) { return b - a; }).slice(0, 2);
    return functions_1.sum(highestTwo);
}
