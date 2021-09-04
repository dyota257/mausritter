module.exports = cast

const spells = require('./tables/spells.js')

const {
    randomUp, 
    sum,
    roll,
    pick
} = require('./functions.js')

function cast(spell, power) {
    // dice rolls for spell effects
    let dice = roll(`${power}d6`)
    let effect = spell.effect(dice.number, dice.sum)
    
    // usage - deplete usage on high rolls
    let usage = 0
    dice.rolls.forEach((e)=>{e>3 && usage++})

    // miscasting
    let sixes = dice.rolls.filter((e)=>{return e===6}).length
    miscastDamage = roll(`${sixes}d6`).sum
    
    console.log(`You cast ${spell.spell} with ${power} power!`)
    console.log(`You rolled ${dice.rolls}.`)
    console.log(effect)
    usage>0 && console.log(`Usage of ${spell.spell} is depleted by ${usage}`)
    sixes>0 && console.log(`The spell was partially miscast. You take ${miscastDamage} damage to your WIL. Make a WIL save or go Mad!`)
}
