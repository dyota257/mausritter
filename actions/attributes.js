module.exports = makeNewCharacterAttributes
const {roll,sum} = require('../util/functions.js')

function newAttribute() {
    dice = roll('3d6')
    highestTwo = dice.rolls.sort((a,b)=>{return b-a}).slice(0,2)
    return sum(highestTwo)
}

function makeNewCharacterAttributes() {
    return {
        STR: newAttribute(),
        DEX: newAttribute(),
        WIL: newAttribute()
    }
}
