module.exports = loot;

const {
    treasures
} = require('../tables/treasures.js')

const {pick, one} = require('../util/functions.js')

function loot(number) {
    let output = ''
    for (var i=0; i<number; i++) {
        output += `<p>You obtained ${one(pick(treasures).treasure())}</p>`
    }
    return output
}
