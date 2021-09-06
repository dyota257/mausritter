module.exports = loot;

const {
    treasures
} = require('../tables/treasures.js')

const {roll, one, picky} = require('../util/functions.js')
const {figure,good,em,bad} = require('../util/styles.js')

function loot(number) {
    console.log("argument:" + number)
    let output = ''

    for (var i=0; i<number; i++) {
        // roll a d20
        // let thisroll = roll('1d20')
        
        // the treasures are unevenly distributed so can't just randomly pick()
        let chosenTreasure = picky(treasures, '1d20')
        
        output += `<p>You ${good('obtained')} ${one(chosenTreasure.treasure())} ${figure(chosenTreasure.rarity)}</p>`
    }
    console.log(output)
    return output
}
