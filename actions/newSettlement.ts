export {newSettlement}

import {inhabitants,size,features,governance,industries,events,nameStart,nameEnd,tavernStart,tavernEnd,tavernSpecialty} from '../tables/settlements'
import {picky, pick, roll, join, one} from '../util/functions'
import {em} from '../util/styles'

function newSettlement():string {
    let name = em(pick(nameStart) + pick(nameEnd))
    let lowest = roll('2d6').rolls.sort((a,b) => a-b)[0]
    
    let settlementSize = size[lowest-1].split(' ')
    let settlement = one(join(settlementSize[0]))
    let settlementPopulation = em(settlementSize[1] + ' ' + settlementSize[2])
   
    let thisInhabitants = em(join(pick(inhabitants)))

    // picky on a 1d6, plus the settlement size
    let governancePick = roll('1d6').sum + lowest 
    let government = em(governance.filter((e) => {
            return e.order.indexOf(governancePick) != -1
    })[0].leader)

    let notableFeature:string
    if (lowest == 6) {
        // if lowest == 6, the settlement is a city. Cities have two notable features.
        notableFeature = `You notice the ${em(join(pick(features)))} and the ${em(join(pick(features)))}.`
    } else {
        notableFeature = `You notice the ${em(join(pick(features)))}.`
    }

    let jobs:string
    if (lowest == 5 || lowest == 6) {
        // if it's a town or a city, the population has two main jobs. 
        jobs = `${em(join(pick(industries)))} and ${em(join(pick(industries)))}.`
    } else {
        jobs = `${em(join(pick(industries)))}.`
    }

    let somethingHappening:string = em(join(pick(events)))
    
    let tavern:string

    if (lowest <= 3) {
        tavern = `<p>You happily discover there is a tavern here called ${em(`The ${pick(tavernStart)} ${pick(tavernEnd)}`)}. The window says their specialty is ${em(join(pick(tavernSpecialty)))}</p>`
    }
    
    return `
        <p>You find yourself at ${settlement} called ${name}. ${notableFeature} You could guess that there may be ${settlementPopulation} here.</p>
        <p>The mice here ${thisInhabitants}. It looks like they are mainly ${jobs}. ${government} seems to be the way they are governed.</p>
        <p>As you arrive today, ${somethingHappening}</p>
        ${tavern ? tavern : ''}
    `
}

console.log(newSettlement())