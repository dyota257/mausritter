module.exports = makeNewMouse

const {
    names, 
    matriname,
    bricabrac,
    birthStar,
    coat,
    physicalDetails,
    background,
    remarkPhysicalDetails,
    selfEsteemPhysicalDetails,
} = require('../tables/character.js')

const {
    randomUp, 
    sum,
    roll,
    pick,
    one
} = require('../util/functions.js')

const makeNewCharacterAttributes = require('./attributes.js')

function makeNewMouse() {
    let myName = `${pick(names)} ${pick(matriname)}`
    let myBirthStar = pick(birthStar)
    let myPersonality = {
        starSign: myBirthStar.sign,
        positive: myBirthStar.disposition.split(' / ')[0].toLowerCase(),
        negative: myBirthStar.disposition.split(' / ')[1].toLowerCase(),
    }
    
    let myBackground = pick(background);
    let myTrappings = {
        hp: myBackground.hp,
        pips: myBackground.pips,
        background: myBackground.background,
        itemA: myBackground.itemA,
        itemB: myBackground.itemB,
    }
    let attr = makeNewCharacterAttributes()
    
    return (`You are ${myName}.\n\nYou were born under the sign of the ${myBirthStar.sign}, which makes you ${myPersonality.positive}, but ${myPersonality.negative}.\n\nYou had started as a little pink mouseling but later grew to be ${pick(coat).colour.toLowerCase()} from head to toe, with a ${pick(coat).pattern.toLowerCase()} pattern.\n\n${pick(remarkPhysicalDetails)} ${pick(physicalDetails).toLowerCase()}, ${pick(selfEsteemPhysicalDetails)}.\n\nMice knew you as ${one(myTrappings.background)} before, but that was a past life. Now, with your ${myTrappings.itemA} and ${myTrappings.itemB}, you are ready to embark on a world of adventure.\n\n\nYour stats are:\nHP: ${myBackground.hp}\nSTR: ${attr.STR}\nDEX: ${attr.DEX}\nWIL: ${attr.WIL}\nPips: ${myBackground.pips}`)
}

