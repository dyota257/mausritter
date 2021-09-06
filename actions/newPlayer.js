module.exports = newPlayer

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
const {figure,good,em,bad} = require('../util/styles.js')

function newPlayer() {
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

    let stats = [attr.STR,attr.DEX,attr.WIL,]
    let highestStat = stats.sort((a,b)=> b-a)[0]
    console.log(highestStat)
    
    return (
        `
            <p>You are ${em(myName)}.</p>
            <p>You were born under the sign of the ${em(myBirthStar.sign)}, which makes you ${em(myPersonality.positive)}, but ${em(myPersonality.negative)}.</p>
            <p>You had started as a little pink mouseling but later grew to be ${em(pick(coat).colour.toLowerCase())} from head to toe, with a ${em(pick(coat).pattern.toLowerCase())} pattern.</p>
            <p>${pick(remarkPhysicalDetails)} ${em(pick(physicalDetails).toLowerCase())}, ${pick(selfEsteemPhysicalDetails)}.</p>
            <p>Mice knew you as ${em(one(myTrappings.background))} before, but that was a past life. Now, you are ready to embark on a world of adventure.</p>
            <p>You have with you some ${em('torches')}, ${em('rations')}, ${em(myTrappings.itemA)}, ${em(myTrappings.itemB)}, and a weapon of your choice</p>
            
            <div>
                Your stats are:
                <ul>
                <li>HP: ${figure(myBackground.hp)}</li>
                <li>STR: ${figure(attr.STR)}</li>
                <li>DEX: ${figure(attr.DEX)}</li>
                <li>WIL: ${figure(attr.WIL)}</li>
                <li>Pips: ${figure(myBackground.pips)}</li>
                </ul>
            </div>
        `
        )
}

