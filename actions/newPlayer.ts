export {newPlayer}

import {
    names, 
    matriname,
    bricabrac,
    birthStar,
    coat,
    physicalDetails,
    background,
    remarkPhysicalDetails,
    selfEsteemPhysicalDetails,
    BirthStar,
    Coat,
    Background
} from '../tables/character'

import {
    randomUp, 
    sum,
    roll,
    pick,
    one
} from '../util/functions.js'

import {makeNewCharacterAttributes, Attributes} from './attributes'
import {figure,good,em,bad} from '../util/styles'

function newPlayer():string {
    let myName:string = `${pick(names)} ${pick(matriname)}`
    let myBirthStar:BirthStar = pick(birthStar)
    let myPersonality = {
        starSign: myBirthStar.sign,
        positive: myBirthStar.disposition.split(' / ')[0].toLowerCase(),
        negative: myBirthStar.disposition.split(' / ')[1].toLowerCase(),
    }
    
    let myBackground:Background = pick(background);
    let attr:Attributes = makeNewCharacterAttributes()
    let stats:Array<number> = [attr.STR,attr.DEX,attr.WIL,]
    let highestStat:number = stats.sort((a,b)=> b-a)[0]
    console.log(`The value of the highest sttribute is: ${highestStat}`)
    
    return (
        `
            <p>You are ${em(myName)}.</p>
            <p>You were born under the sign of the ${em(myBirthStar.sign)}, which makes you ${em(myPersonality.positive)}, but ${em(myPersonality.negative)}.</p>
            <p>You had started as a little pink mouseling but later grew to be ${em(pick(coat).colour.toLowerCase())} from head to toe, with a ${em(pick(coat).pattern.toLowerCase())} pattern.</p>
            <p>${pick(remarkPhysicalDetails)} ${em(pick(physicalDetails).toLowerCase())}, ${pick(selfEsteemPhysicalDetails)}.</p>
            <p>Mice knew you as ${em(one(myBackground.background))} before, but that was a past life. Now, you are ready to embark on a world of adventure.</p>
            <p>You have with you some ${em('torches')}, ${em('rations')}, ${em(myBackground.itemA)}, ${em(myBackground.itemB)}, and a weapon of your choice</p>
            
            <div>
                Your stats are:
                <ul>
                <li>HP: ${figure((myBackground.hp).toString())}</li>
                <li>STR: ${figure((attr.STR).toString())}</li>
                <li>DEX: ${figure((attr.DEX).toString())}</li>
                <li>WIL: ${figure((attr.WIL).toString())}</li>
                <li>Pips: ${figure((myBackground.pips).toString())}</li>
                </ul>
            </div>
        `
    )
}