module.exports = cast

const spells = require('../tables/spells.js')

const {
    randomUp, 
    sum,
    roll,
    pick
} = require('../util/functions.js')

function cast(spellname, power) {
    let spell = choose(spellname)
    
    // dice rolls for spell effects
    let dice = roll(`${power}d6`)
    let effect = spell.effect(dice.number, dice.sum)
    
    // usage - deplete usage on high rolls
    let usage = 0
    dice.rolls.forEach((e)=>{e>3 && usage++})

    // miscasting
    let sixes = dice.rolls.filter((e)=>{return e===6}).length
    miscastDamage = roll(`${sixes}d6`).sum
    
    return `You cast ${spell.spell} with ${power} power!`
    + (`You rolled ${dice.rolls}.`)
    + (effect)
    + (usage>0 && (`Usage of ${spell.spell} is depleted by ${usage}`))
    + (sixes>0 && (`The spell was partially miscast. You take ${miscastDamage} damage to your WIL. Make a WIL save or go Mad!`))
}


function choose(spellname) {
    let spell = spells.filter(
        (e) => {
            return e.spell.toLowerCase()  === spellname.toLowerCase()
        }
    )
    console.log(spell)
    return spell[0]
}