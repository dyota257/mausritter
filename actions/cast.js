module.exports = {cast, choose}

const spells = require('../tables/spells.js')


const {randomUp, sum,roll,pick} = require('../util/functions.js')

const {figure,good,em,bad} = require('../util/styles.js')

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
    
    return `
        <p>You cast ${em(spell.spell)} with ${figure(power)} power!</p>
        <p>You rolled ${figure(dice.rolls)}.</p>
        <p>${effect}</p>
        ${usage>0 ? (`<p>Usage of ${em(spell.spell)} is depleted by ${figure(usage)}</p>`) : ''}
        ${sixes>0 ? (`<p>The spell was partially miscast. You take ${bad(miscastDamage)} damage to your WIL. Make a WIL save or go Mad!</p>`) : ''}
    `
}


function choose(spellname) {
    let spell = spells.filter(
        (e) => {
            return e.spell.toLowerCase().replace(' ','')  === spellname.toLowerCase().replace(' ', '')
        }
    )
    console.log(spell)
    return spell[0]
}