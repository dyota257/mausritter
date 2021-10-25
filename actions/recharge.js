"use strict";
exports.__esModule = true;
exports.recharge = void 0;
var functions_1 = require("../util/functions");
var styles_1 = require("../util/styles");
function recharge(spell) {
    return "To recharge " + styles_1.em(spell.spell) + ", you must " + styles_1.em(functions_1.join(spell.recharge));
}
exports.recharge = recharge;
