"use strict";
exports.__esModule = true;
exports.lair = exports.puzzle = exports.trap = exports.obstacle = exports.empty = void 0;
var styles_1 = require("../util/styles");
var empty = [
    'Abandoned insect nest',
    'Cluster of mushrooms',
    'Collapsed wall or ceiling',
    'Dried bug shells on the walls',
    'Furniture made of repurposed trash',
    'Huge drawing of bat face on wall',
    'Mess of tables and chairs',
    'Newspaper clipping wallpaper',
    'Overgrown with moss',
    'Painted mural, now faded',
    'Platforms hanging over rapidly flowing water',
    'Roots bursting out of walls/floor/ceiling',
    'Rotting pile of acorns',
    'Scattering of animal teeth',
    'Shiny candy-wrapper banners',
    'Snake skull doorway',
    'Steady drip of water from ceiling',
    'Stern statue of an ancient mouse',
    'Uneven and deeply cracked floor',
    'White quartz altar',
];
exports.empty = empty;
var obstacle = [
    "Locked door. Key can be found in another room. Knocking the door down takes time and makes noise.",
    "Steep climb. Without special equipment, mice risk exhaustion or falling.",
    "Room with an exit in the centre of the roof, 6\" away from any wall.",
    "Device that creates an high-pitched scream. Each Turn spent here or in adjacent rooms gives " + styles_1.em('Frightened Condition') + ".",
    "Caved-in section of tunnel, leaving a gap too small to crawl through.",
    "Tunnel completely filled with water.",
    "Wide, deep puddle of mud blocking the way. Gives an " + styles_1.em('Exhausted Condition') + " per 6\" traveled.",
    "Long, smooth, upwards sloping metal or plastic tube.",
];
exports.obstacle = obstacle;
var trap = [
    "Large stone door, chiseled loose from frame. Device behind the door tips it forward when handle is turned.",
    "Long hallway flooded with water, electrified by large battery in an alcove.",
    "Dark room filled with noxious, explosive gas. Distinct smell of rotten eggs. " + styles_1.figure('d20') + " damage if ignited.",
    "Thin thread stretched across deadly fall. Safe if traveling slowly, one at a time.",
    "Pit blocking the way. A snake is asleep at the bottom.",
    "Door with three handles in the shape of mushrooms, one safe, the others poison. Poison handles deal " + styles_1.bad('d12') + " magical damage.",
    "Circle of enchanted mushrooms, with a young mouse inside. Those within try desperately to get others to enter.",
    "Floor is covered in sticky glue. Requires a STR save to break a foot loose",
];
exports.trap = trap;
var puzzle = [
    "Room with a floor made of an electrified copper plate. A piece of valuable treasure sits in the centre.",
    "Three feeding bottles with different-colored liquid inside. Each is inert individually but powerful/dangerous when mixed.",
    "A crystal, a magic sword embedded inside. The crystal is very hard, but will dissolve in stomach acid.",
    "Treasure is at the bottom of deep well.",
    "Large smooth steel bowl, upside down. Treasure taped to the inside ceiling of the bowl.",
    "Baited mousetrap. The lever is wired to a stone in the wall and will collapse the corridor if triggered",
];
exports.puzzle = puzzle;
var lair = [
    "Temporary encampment",
    "Recently taken from another creature",
    "Built by mice to hold the creature",
    "Protecting young",
    "Permanent home, newly settled",
    "Permanent home, comfortably appointed",
];
exports.lair = lair;
