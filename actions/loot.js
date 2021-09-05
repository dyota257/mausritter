module.exports = loot;

const {
    treasures
} = require('../tables/treasures.js')

const {roll, one} = require('../util/functions.js')

function loot(number) {
    
    let output = ''

    for (var i=0; i<number; i++) {
        // roll a d20
        let thisroll = roll('1d20')
        
        // the treasures are unevenly distributed so can't just randomly pick()
        let chosenTreasure = treasures.filter(
            (e) => {return e.order.indexOf(thisroll.sum)!=-1}
        )[0]

        output += `<p>You obtained ${one(chosenTreasure.treasure())} ${chosenTreasure.rarity}</p>`
    }
    return output
}
