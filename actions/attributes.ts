// TYPESCRIPT DONE

export {makeNewCharacterAttributes, Attributes}
import {roll,sum, Diceroll} from '../util/functions'

type Attributes = {
    STR:number,
    DEX:number,
    WIL:number
}

function makeNewCharacterAttributes():Attributes {
    return {
        STR: newAttribute(),
        DEX: newAttribute(),
        WIL: newAttribute()
    }
}

function newAttribute():number {
    let dice:Diceroll = roll('3d6')
    let highestTwo:Array<number> = dice.rolls.sort((a,b)=>{return b-a}).slice(0,2)
    return sum(highestTwo)
}