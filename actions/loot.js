module.exports = loot;

const {
    treasures
} = require('../tables/treasures.js')

const {roll, one} = require('../util/functions.js')
const {figure,good,em,bad} = require('../util/styles.js')

function loot(number) {
    
    let output = ''

    for (var i=0; i<number; i++) {
        // roll a d20
        let thisroll = roll('1d20')
        
        // the treasures are unevenly distributed so can't just randomly pick()
        // let chosenTreasure = treasures.filter(
        //     (e) => {return e.order.indexOf(thisroll.sum)!=-1}
        // )[0]
        let chosenTreasure = treasures[0]
        output += `<p>You ${good('obtained')} ${one(chosenTreasure.treasure())} ${figure(chosenTreasure.rarity)}</p>`
    }
    return output
}
