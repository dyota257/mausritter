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
} = require('./tables/character.js')

const {
    randomUp, 
    sum,
    roll,
    pick
} = require('./functions.js')

function pickBricabrac(){
    let myBricabrac = pick(bricabrac);
    
    if( myBricabrac === "pips" ){
        let pips = roll('1d8').sum;
        return `${pips} pips`;
    } else {
        return myBricabrac;
    }
}

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

console.log(`You are ${myName}, with a ${pickBricabrac(bricabrac)}.\n\nYou were born under the sign of the ${myBirthStar.sign}, which makes you ${myPersonality.positive}, but ${myPersonality.negative}.\n\nYou had started as a little pink mouseling but later grew to be ${pick(coat).colour.toLowerCase()} from head to toe, with a ${pick(coat).pattern.toLowerCase()} pattern.\n\n${pick(remarkPhysicalDetails)} ${pick(physicalDetails).toLowerCase()}, ${pick(selfEsteemPhysicalDetails)}.\n\n Mice knew you as the ${myTrappings.background} before, but that was a past life. Now, with your ${myTrappings.itemA} and ${myTrappings.itemB}, you are ready to embark on a world of adventure.`);