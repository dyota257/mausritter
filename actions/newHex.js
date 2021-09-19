module.exports = newHex

const {hexType, countryside, forest, river, humanTown} = require('../tables/hexes.js')
const {pick, picky,one, join} = require('../util/functions.js')
const {em} = require('../util/styles.js')

function newHex() {
    let landmark = ''
    let landform = picky(hexType, '1d6').type
    switch(landform) {
        case "Countryside":
            landmark = pick(countryside);
            break;
        case "Forest":
            landmark = pick(forest);
            break;
        case "River":
            landmark = pick(river);
            break;
        case "Human town":
            landmark = pick(humanTown);
            break;
    }

    return `By ${one(join(landform))}, in ${one(em(join(landmark)))}...`
}

console.log(newHex())
