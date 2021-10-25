"use strict";
// TYPESCRIPT DONE
exports.__esModule = true;
exports.choose = exports.cast = void 0;
var spells_1 = require("../tables/spells");
var mauszauber_1 = require("../tables/mauszauber");
var functions_1 = require("../util/functions");
var styles_1 = require("../util/styles");
function cast(spellname, power) {
    var spell = choose(spellname);
    // dice rolls for spell effects
    var dice = functions_1.roll(power + "d6");
    var effect = spell.effect(dice.number, dice.sum);
    // usage - deplete usage on high rolls
    var usage = 0;
    dice.rolls.forEach(function (e) { e > 3 && usage++; });
    // miscasting
    var sixes = dice.rolls.filter(function (e) { return e === 6; }).length;
    var miscastDamage = functions_1.roll(sixes + "d6").sum;
    return "\n        <p>You cast " + styles_1.em(spell.spell) + " with " + styles_1.figure(power) + " power!</p>\n        <p>You rolled " + styles_1.figure(dice.rolls.toString()) + ".</p>\n        <p>" + effect + "</p>\n        " + (usage > 0 ? ("<p>Usage of " + styles_1.em(spell.spell) + " is depleted by " + styles_1.figure(usage.toString()) + "</p>") : '') + "\n        " + (sixes > 0 ? ("<p>The spell was partially miscast. You take " + styles_1.bad(miscastDamage.toString()) + " damage to your WIL. Make a WIL save or go Mad!</p>") : '') + "\n    ";
}
exports.cast = cast;
function choose(spellname) {
    // combine both base spells and mauszaber
    var combined = [].concat(spells_1.spells, mauszauber_1.mauszauber);
    // filter spell array fot those that have the same spell name as $spellname (returns an array with one object in it), and get the first item in the array (the spell object)
    var spell = combined.filter(function (e) {
        return e.spell.toLowerCase().replace(' ', '') === spellname.toLowerCase().replace(' ', '');
    })[0];
    return spell;
}
exports.choose = choose;
