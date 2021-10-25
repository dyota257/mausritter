"use strict";
exports.__esModule = true;
exports.newRoom = void 0;
var functions_1 = require("../util/functions");
var styles_1 = require("../util/styles");
var rooms_1 = require("../tables/rooms");
var roomType = [
    { order: [1, 2], type: 'Empty', feature: function () { return functions_1.pick(rooms_1.empty); }, hasCreatures: function () { return functions_1.chance([1, 2, 3]); }, hasTreasures: function () { return functions_1.chance([1]); } },
    { order: [3], type: 'Obstacle', feature: function () { return functions_1.pick(rooms_1.obstacle); }, hasCreatures: function () { return functions_1.chance([1, 2]); }, hasTreasures: function () { return functions_1.chance([1]); } },
    { order: [4], type: 'Trap', feature: function () { return functions_1.pick(rooms_1.trap); }, hasCreatures: function () { return functions_1.chance([1]); }, hasTreasures: function () { return functions_1.chance([1, 2]); } },
    { order: [5], type: 'Puzzle', feature: function () { return functions_1.pick(rooms_1.puzzle); }, hasCreatures: function () { return functions_1.chance([1]); }, hasTreasures: function () { return functions_1.chance([1, 2, 3, 4, 5]); } },
    { order: [6], type: 'Lair', feature: function () { return functions_1.pick(rooms_1.lair); }, hasCreatures: function () { return functions_1.chance([1, 2, 3, 4, 5]); }, hasTreasures: function () { return functions_1.chance([1, 2, 3, 4]); } },
];
function newRoom() {
    var room = functions_1.picky(roomType, '1d6');
    var feature;
    if (room.type === 'Lair') {
        feature = "it was " + styles_1.em(functions_1.join(room.feature()));
    }
    else {
        feature = "" + styles_1.em(functions_1.one(functions_1.join(room.feature())));
    }
    return "\n        <p>You enter the chamber.</p>\n        <p>You can see " + feature + "</p>\n\n        " + (room.hasCreatures() ? "<p>You see some " + styles_1.em('creatures') + " inside.</p>" : '') + "\n        " + (room.hasTreasures() ? "<p>There is " + styles_1.em('treasure') + " here.</p>" : '') + "\n    ";
}
exports.newRoom = newRoom;
