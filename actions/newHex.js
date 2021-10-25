"use strict";
exports.__esModule = true;
exports.newHex = void 0;
var hexes_1 = require("../tables/hexes");
var functions_1 = require("../util/functions");
var styles_1 = require("../util/styles");
function newHex() {
    var landmark;
    var landform = functions_1.picky(hexes_1.hexType, '1d6').type;
    switch (landform) {
        case "Countryside":
            landmark = functions_1.pick(hexes_1.countryside);
            break;
        case "Forest":
            landmark = functions_1.pick(hexes_1.forest);
            break;
        case "River":
            landmark = functions_1.pick(hexes_1.river);
            break;
        case "Human town":
            landmark = functions_1.pick(hexes_1.humanTown);
            break;
    }
    return "By " + functions_1.one(functions_1.join(landform)) + ", in " + functions_1.one(styles_1.em(functions_1.join(landmark))) + "...";
}
exports.newHex = newHex;
