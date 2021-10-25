"use strict";
// TYPESCRIPT DONE
exports.__esModule = true;
exports.spells = void 0;
var styles_1 = require("../util/styles");
var spells = [
    {
        order: 2,
        spell: "Fireball",
        effect: function ($dice, $sum) { var result = $sum + $dice; return "Shoot a fireball up to 24\". Deal " + styles_1.bad(result.toString()) + " damage to all creatures within 6\"."; },
        recharge: "Burn in the heart of a raging fire for three days and nights."
    },
    {
        order: 3,
        spell: "Heal",
        effect: function ($dice, $sum) { return "Heal " + styles_1.good($sum.toString()) + " STR damage and remove the " + styles_1.em('Injured Condition') + " from a creature."; },
        recharge: "Cut self for d6 STR damage, sprinkle the spell with the blood."
    },
    {
        order: 4,
        spell: "Magic Missile",
        effect: function ($dice, $sum) { var result = $sum + $dice; return "Deal " + styles_1.bad(result.toString()) + " damage to a creature within sight. Drop from a height of at least 30ft."; },
        recharge: "Touch the spell within one Turn."
    },
    {
        order: 5,
        spell: "Fear",
        effect: function ($dice, $sum) { return "Give the " + styles_1.em('Frightened Condition') + " to " + styles_1.em($dice.toString()) + " creatures."; },
        recharge: "Receive the " + styles_1.em('Frightened Condition') + " from a hostile creature while carrying the spell."
    },
    {
        order: 6,
        spell: "Darkness",
        effect: function ($dice, $sum) { var result = $sum * 2; return "Create a " + styles_1.em(result.toString()) + "\" diameter sphere of pure darkness for " + styles_1.em($dice.toString()) + " Turns."; },
        recharge: "Leave uncovered in a lightless place for three days."
    },
    {
        order: 7,
        spell: "Restore",
        effect: function ($dice, $sum) { var result = $dice + 1; return "Remove " + styles_1.em('Exhausted') + " or " + styles_1.em('Frightened Condition') + " from " + styles_1.bad(result.toString()) + " creatures"; },
        recharge: "Bury in a peaceful field or riverbank for three days."
    },
    {
        order: 8,
        spell: "Be Understood",
        effect: function ($dice, $sum) { return "Make your meaning clear to " + styles_1.em($dice.toString()) + " creatures of another species for " + styles_1.em($dice.toString()) + " Turns."; },
        recharge: "Give away freely to a creature of another species."
    },
    {
        order: 9,
        spell: "Ghost Beetle",
        effect: function ($dice, $sum) { var result = $dice * 6; return "Create an illusory beetle that can carry 6 inventory slots for " + styles_1.bad(result.toString()) + " Turns."; },
        recharge: "Bury in a beetle graveyard for three nights."
    },
    {
        order: 10,
        spell: "Light",
        effect: function ($dice, $sum) { return "Force " + styles_1.em($dice.toString()) + " creatures to make a WIL save or become stunned. Alternately, create light as bright as a torch for " + styles_1.em($sum.toString()) + " turns."; },
        recharge: "Catch in the first light of a sunrise and the last light of sunset for three days."
    },
    {
        order: 11,
        spell: "Invisible Ring",
        effect: function ($dice, $sum) { var result = $dice * 6; return "Creates " + styles_1.em(result.toString()) + "\" ring of force. It is invisible and immovable. Lasts " + styles_1.em($dice.toString()) + " Turns."; },
        recharge: "Build an iron ring the same size as last cast. Pass the spell though it. Dissolves the ring."
    },
    {
        order: 12,
        spell: "Knock",
        effect: function ($dice, $sum) { var result = 10 + $dice * 4; return "Open a door or container, as if a Save were made with STR score of " + figure(result.toString()) + "."; },
        recharge: "Put in a locked box, inside a locked box, inside a locked box. Leave for three days."
    },
    {
        order: 13,
        spell: "Grease",
        effect: function ($dice, $sum) { var result = $dice * 6; return "Cover " + styles_1.em(result.toString()) + "\" area in slippery, flammable grease. Creatures in the area must make a DEX save or fall prone."; },
        recharge: "Rub all over in animal fat. Leave until it putrefies."
    },
    {
        order: 14,
        spell: "Grow",
        effect: function ($dice, $sum) { var result = $dice + 1; return "Grow a creature to " + styles_1.em(result.toString()) + " times its original size for 1 Turn."; },
        recharge: "Leave in the highest branches of a tall tree for three days."
    },
    {
        order: 15,
        spell: "Invisibility",
        effect: function ($dice, $sum) { return "Make creature invisible for " + styles_1.em($dice.toString()) + " Turns. Any movement reduces duration by 1 Turn."; },
        recharge: "Go a day without opening your eyes once, while holding the spell."
    },
    {
        order: 16,
        spell: "Catnip",
        effect: function ($dice, $sum) { return "Turn object into an irresistible lure for cats. Lasts " + styles_1.em($dice.toString()) + " Turns."; },
        recharge: "Give a cat a gift it truly desires."
    },
];
exports.spells = spells;
