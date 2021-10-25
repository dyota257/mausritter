// TYPESCRIPT DONE

export {cast, choose}

import {spells} from '../tables/spells'
import {mauszauber} from '../tables/mauszauber'

import {randomUp, sum,roll,pick, Diceroll} from '../util/functions';

import {figure,good,em,bad} from '../util/styles';

interface Spell {
    order: number,
    spell: string,
    effect: ($dice:number, $sum:number) => string,
    recharge: string
}

function cast(spellname:string, power:string):string {
    let spell:Spell = choose(spellname)
    
    // dice rolls for spell effects
    let dice:Diceroll = roll(`${power}d6`)
    let effect:string = spell.effect(dice.number, dice.sum)
    
    // usage - deplete usage on high rolls
    let usage = 0
    dice.rolls.forEach((e)=>{e > 3 && usage++})

    // miscasting
    let sixes:number = dice.rolls.filter((e)=>{return e===6}).length
    let miscastDamage:number = roll(`${sixes}d6`).sum
    
    return `
        <p>You cast ${em(spell.spell)} with ${figure(power)} power!</p>
        <p>You rolled ${figure(dice.rolls.toString())}.</p>
        <p>${effect}</p>
        ${usage>0 ? (`<p>Usage of ${em(spell.spell)} is depleted by ${figure(usage.toString())}</p>`) : ''}
        ${sixes>0 ? (`<p>The spell was partially miscast. You take ${bad(miscastDamage.toString())} damage to your WIL. Make a WIL save or go Mad!</p>`) : ''}
    `
}

function choose(spellname:string):Spell {
    // combine both base spells and mauszaber
    let combined:Array<Spell> = [].concat(spells, mauszauber)
    
    // filter spell array fot those that have the same spell name as $spellname (returns an array with one object in it), and get the first item in the array (the spell object)
    let spell:Spell = combined.filter(
        (e) => {
            return e.spell.toLowerCase().replace(' ','')  === spellname.toLowerCase().replace(' ', '')
        }
    )[0]
    
    return spell
}
