"use strict";
exports.__esModule = true;
exports.usefulTreasure = exports.unusualTreasure = exports.largeTreasure = exports.valuableTreasure = exports.trinkets = exports.weaponClasses = exports.swordCurses = exports.magicSwords = exports.treasures = void 0;
var functions_1 = require("../util/functions");
var styles_1 = require("../util/styles");
var magicSwords = [
    { name: 'Wrought iron', effect: 'While wielded: You roll critical damage Saves with Advantage' },
    { name: 'Intricate Fae design', effect: 'While wielded: You may disguise yourself as any mouse-sized creature' },
    { name: 'Rusty nail', effect: 'Critical damage: Give a Frightened Condition' },
    { name: 'Snake fang', effect: 'Critical damage: Deal d6 additional damage to DEX' },
    { name: 'Toy soldier’s sabre', effect: 'While wielded: If you lead a warband, they have +1 Armour' },
    { name: 'Water-worn glass', effect: 'While wielded: You can hold breath underwater for 1 Turn' },
    { name: 'Wolf tooth', effect: 'Critical damage: Your next attack is Enhanced' },
    { name: 'Silver sewing needle', effect: 'Critical damage: Clear all usage dots from a non-spell item in your inventory' },
    { name: 'Thorny rose stem', effect: 'Critical damage: Remove a Condition' },
    { name: 'Congealed shadow', effect: 'While wielded: You are invisible when standing perfectly still' },
];
exports.magicSwords = magicSwords;
var swordCurses = [
    { curse: 'Roll critical damage saves with Disadvantage', lift: 'Making a selfless sacrifice in a life or death situation' },
    { curse: 'When you gain an Exhausted Condition, gain another', lift: 'Trading places with a poor farmer for a season' },
    { curse: 'Make a WIL save to not attack when threatened', lift: 'Making lasting peace with a mortal enemy' },
    { curse: 'Reaction rolls are made with -1 modifier', lift: 'Giving away everything you own, no cheating' },
    { curse: 'If you see an ally take damage, take a Frightened Condition', lift: 'Fulfilling a mouse’s dying wish' },
    { curse: 'Spells cast in your presence always mark usage', lift: 'Destroying an owl sorcerer’s source of power' },
];
exports.swordCurses = swordCurses;
var weaponClasses = [
    { order: [1, 2, 3, 4], "class": 'Medium (d6 one paw/d8 both paws)' },
    { order: [5], "class": 'Light (d6 one paw, can be duel-wielded)' },
    { order: [6], "class": 'Heavy (d10 both paws)' },
];
exports.weaponClasses = weaponClasses;
var trinkets = [
    "Ghost lantern (casts a light that banishes ghosts)",
    "Speaking shells (one speaks what the other hears)",
    "Breathing straw (tube that always contains air)",
    "Bat cultist\u2019s dagger (grants passage into sanctum)",
    "Magic beans (grow fully in " + functions_1.roll('1d6').sum + " Turns)",
    "Working human device (make up something fun)",
];
exports.trinkets = trinkets;
var valuableTreasure = [
    'Wheel of fine aged cheese (100p)',
    'Silver chain (2 slots, 500p)',
    'Jeweled pendant (400p)',
    'Gold ring (500p)',
    'Polished diamond (1000p)',
    'String of pearls (2 slots, 1500p)',
];
exports.valuableTreasure = valuableTreasure;
var largeTreasure = [
    'Oversized silver spoon (2 slots, 300p)',
    'Ivory comb (4 slots, 400p)',
    'Huge bottle of fine brandy (4 slots, 500p)',
    'Ancient mouse statue (4 slots, 500p)',
    'Ancient mouse throne (6 slots, 1000p)',
    'Giant golden wristwatch (4 slots, 1000p)',
];
exports.largeTreasure = largeTreasure;
var unusualTreasure = [
    'Bundle of pungent herbs (200p to an apothecary)',
    'Odd-coloured dried mushrooms (200p to a witch)',
    'Eerily glowing stone (300p to a wizard)',
    'Heirloom of sentimental value to a noblemouse',
    'Legal documents granting land rights to the holder',
    'Treasure map',
];
exports.unusualTreasure = unusualTreasure;
var usefulTreasure = [
    functions_1.roll('1d6').sum + " packs of rations, well preserved",
    functions_1.roll('1d6').sum + " bundles of torches",
    "Mundane weapon",
    "Mundane armour",
    "Mundane utility item",
    "Lost mouse, willing to help",
];
exports.usefulTreasure = usefulTreasure;
function pickMagicSword() {
    var sword = functions_1.pick(magicSwords);
    var cursed;
    var curse;
    var effectLeadIn;
    switch (functions_1.firstLetter(sword.effect).toLowerCase()) {
        case 'w':
            effectLeadIn = "While wielding it,";
            break;
        case 'c':
            effectLeadIn = "When you deal critical damage,";
            break;
    }
    if (functions_1.roll('1d6').sum === 6) {
        cursed = 'cursed';
        curse = functions_1.pick(swordCurses);
        effectLeadIn = 'Normally, ' + functions_1.join(effectLeadIn);
    }
    var effectDesc = functions_1.join(sword.effect.slice(sword.effect.indexOf(":") + 2));
    return styles_1.bad(cursed) + " magic sword of " + styles_1.em(functions_1.join(sword.name)) + ". " + effectLeadIn + " " + styles_1.em(effectDesc) + ". " + (cursed && "However, it does not do this; instead it is cursed with: " + styles_1.bad(curse.curse) + ". The curse can only be lifted by " + styles_1.em(functions_1.join(curse.lift)) + ".");
}
var spells_1 = require("../tables/spells");
var mauszauber_1 = require("../tables/mauszauber");
var combinedSpells = [].concat(spells_1.spells, mauszauber_1.mauszauber);
var treasures = [
    { order: [1], rarity: '(rare)', treasure: function () { return pickMagicSword(); } },
    { order: [2], rarity: '(rare)', treasure: function () { return "magic spell: " + styles_1.em(functions_1.pick(combinedSpells).spell); } },
    { order: [3], rarity: '(rare)', treasure: function () { return styles_1.em(functions_1.join(functions_1.pick(trinkets))); } },
    { order: [4], rarity: '(rare)', treasure: function () { return styles_1.em(functions_1.join(functions_1.pick(valuableTreasure))); } },
    { order: [5], rarity: '(rare)', treasure: function () { return styles_1.em(functions_1.join(functions_1.pick(unusualTreasure))); } },
    { order: [6, 7, 8], rarity: '(rare)', treasure: function () { return styles_1.em(functions_1.join(functions_1.pick(largeTreasure))); } },
    { order: [9, 10], rarity: '(uncommon)', treasure: function () { return styles_1.em(functions_1.join(functions_1.pick(usefulTreasure))); } },
    { order: [11], rarity: '(rare)', treasure: function () { return "box containing " + styles_1.em((functions_1.roll('1d6').sum * 100).toString()) + " pips"; } },
    { order: [12, 13, 14], rarity: '(common)', treasure: function () { return "bag containing " + styles_1.em((functions_1.roll('1d6').sum * 50).toString()) + " pips"; } },
    { order: [15, 16, 17], rarity: '(common)', treasure: function () { return "purse containing " + styles_1.em((functions_1.roll('1d6').sum * 10).toString()) + " pips"; } },
    { order: [18, 19, 20], rarity: '(common)', treasure: function () { return "loose scattering of " + styles_1.em((functions_1.roll('1d6').sum * 5).toString()) + " pips"; } },
];
exports.treasures = treasures;
