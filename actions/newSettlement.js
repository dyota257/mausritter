"use strict";
exports.__esModule = true;
exports.newSettlement = void 0;
var settlements_1 = require("../tables/settlements");
var functions_1 = require("../util/functions");
var styles_1 = require("../util/styles");
function newSettlement() {
    var name = styles_1.em(functions_1.pick(settlements_1.nameStart) + functions_1.pick(settlements_1.nameEnd));
    var lowest = functions_1.roll('2d6').rolls.sort(function (a, b) { return a - b; })[0];
    var settlementSize = settlements_1.size[lowest - 1].split(' ');
    var settlement = functions_1.one(functions_1.join(settlementSize[0]));
    var settlementPopulation = styles_1.em(settlementSize[1] + ' ' + settlementSize[2]);
    var thisInhabitants = styles_1.em(functions_1.join(functions_1.pick(settlements_1.inhabitants)));
    // picky on a 1d6, plus the settlement size
    var governancePick = functions_1.roll('1d6').sum + lowest;
    var government = styles_1.em(settlements_1.governance.filter(function (e) {
        return e.order.indexOf(governancePick) != -1;
    })[0].leader);
    var notableFeature;
    if (lowest == 6) {
        // if lowest == 6, the settlement is a city. Cities have two notable features.
        notableFeature = "You notice the " + styles_1.em(functions_1.join(functions_1.pick(settlements_1.features))) + " and the " + styles_1.em(functions_1.join(functions_1.pick(settlements_1.features))) + ".";
    }
    else {
        notableFeature = "You notice the " + styles_1.em(functions_1.join(functions_1.pick(settlements_1.features))) + ".";
    }
    var jobs;
    if (lowest == 5 || lowest == 6) {
        // if it's a town or a city, the population has two main jobs. 
        jobs = styles_1.em(functions_1.join(functions_1.pick(settlements_1.industries))) + " and " + styles_1.em(functions_1.join(functions_1.pick(settlements_1.industries))) + ".";
    }
    else {
        jobs = styles_1.em(functions_1.join(functions_1.pick(settlements_1.industries))) + ".";
    }
    var somethingHappening = styles_1.em(functions_1.join(functions_1.pick(settlements_1.events)));
    var tavern;
    if (lowest <= 3) {
        tavern = "<p>You happily discover there is a tavern here called " + styles_1.em("The " + functions_1.pick(settlements_1.tavernStart) + " " + functions_1.pick(settlements_1.tavernEnd)) + ". The window says their specialty is " + styles_1.em(functions_1.join(functions_1.pick(settlements_1.tavernSpecialty))) + "</p>";
    }
    return "\n        <p>You find yourself at " + settlement + " called " + name + ". " + notableFeature + " You could guess that there may be " + settlementPopulation + " here.</p>\n        <p>The mice here " + thisInhabitants + ". It looks like they are mainly " + jobs + ". " + government + " seems to be the way they are governed.</p>\n        <p>As you arrive today, " + somethingHappening + "</p>\n        " + (tavern ? tavern : '') + "\n    ";
}
exports.newSettlement = newSettlement;
console.log(newSettlement());
