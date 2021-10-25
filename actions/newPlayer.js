"use strict";
exports.__esModule = true;
exports.newPlayer = void 0;
var character_1 = require("../tables/character");
var functions_js_1 = require("../util/functions.js");
var attributes_1 = require("./attributes");
var styles_1 = require("../util/styles");
function newPlayer() {
    var myName = functions_js_1.pick(character_1.names) + " " + functions_js_1.pick(character_1.matriname);
    var myBirthStar = functions_js_1.pick(character_1.birthStar);
    var myPersonality = {
        starSign: myBirthStar.sign,
        positive: myBirthStar.disposition.split(' / ')[0].toLowerCase(),
        negative: myBirthStar.disposition.split(' / ')[1].toLowerCase()
    };
    var myBackground = functions_js_1.pick(character_1.background);
    var attr = attributes_1.makeNewCharacterAttributes();
    var stats = [attr.STR, attr.DEX, attr.WIL,];
    var highestStat = stats.sort(function (a, b) { return b - a; })[0];
    console.log("The value of the highest sttribute is: " + highestStat);
    return ("\n            <p>You are " + styles_1.em(myName) + ".</p>\n            <p>You were born under the sign of the " + styles_1.em(myBirthStar.sign) + ", which makes you " + styles_1.em(myPersonality.positive) + ", but " + styles_1.em(myPersonality.negative) + ".</p>\n            <p>You had started as a little pink mouseling but later grew to be " + styles_1.em(functions_js_1.pick(character_1.coat).colour.toLowerCase()) + " from head to toe, with a " + styles_1.em(functions_js_1.pick(character_1.coat).pattern.toLowerCase()) + " pattern.</p>\n            <p>" + functions_js_1.pick(character_1.remarkPhysicalDetails) + " " + styles_1.em(functions_js_1.pick(character_1.physicalDetails).toLowerCase()) + ", " + functions_js_1.pick(character_1.selfEsteemPhysicalDetails) + ".</p>\n            <p>Mice knew you as " + styles_1.em(functions_js_1.one(myBackground.background)) + " before, but that was a past life. Now, you are ready to embark on a world of adventure.</p>\n            <p>You have with you some " + styles_1.em('torches') + ", " + styles_1.em('rations') + ", " + styles_1.em(myBackground.itemA) + ", " + styles_1.em(myBackground.itemB) + ", and a weapon of your choice</p>\n            \n            <div>\n                Your stats are:\n                <ul>\n                <li>HP: " + styles_1.figure((myBackground.hp).toString()) + "</li>\n                <li>STR: " + styles_1.figure((attr.STR).toString()) + "</li>\n                <li>DEX: " + styles_1.figure((attr.DEX).toString()) + "</li>\n                <li>WIL: " + styles_1.figure((attr.WIL).toString()) + "</li>\n                <li>Pips: " + styles_1.figure((myBackground.pips).toString()) + "</li>\n                </ul>\n            </div>\n        ");
}
exports.newPlayer = newPlayer;
