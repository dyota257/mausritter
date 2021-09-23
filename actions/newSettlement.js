module.exports = newSettlement

const {inhabitants,size,features,governance,industries,events,nameStart,nameEnd,tavernStart,tavernEnd,tavernSpecialty} = require('../tables/settlements.js')

const {picky, pick, roll, join, one} = require('../util/functions.js')
const {em} = require('../util/styles.js')

function newSettlement() {
    let name = em(pick(nameStart) + pick(nameEnd))
    let lowest = roll('2d6').rolls.sort((a,b) => a-b)[0]
    
    let settlementSize = size[lowest-1].split(' ')
    let settlement = one(join(settlementSize[0]))
    let settlementPopulation = em(settlementSize[1] + ' ' + settlementSize[2])
   
    let thisInhabitants = em(join(pick(inhabitants)))

    let governancePick = roll('1d6').sum + lowest 
    console.log(governancePick)
    let government = em(governance.filter(
        (e) => {
            // picky on a 1d6, plus the settlement size
            return e.order.indexOf(governancePick) != -1
        }
    )[0].leader)

    let notableFeature = ''
    if (lowest == 6) {
        // if lowest == 6, the settlement is a city. Cities have two notable features.
        notableFeature = `You notice the ${em(join(pick(features)))} and the ${em(join(pick(features)))}.`
    } else {
        notableFeature = `You notice the ${em(join(pick(features)))}.`
    }

    let jobs = ''
    if (lowest == 5 || lowest == 6) {
        // if it's a town or a city, the population has two main jobs. 
        jobs = `${em(join(pick(industries)))} and ${em(join(pick(industries)))}.`
    } else {
        jobs = `${em(join(pick(industries)))}.`
    }
    console.log(settlement)
    console.log(government)
    console.log(lowest)
    console.log(notableFeature)
    console.log(jobs)
    return `
        <p>You find yourself at ${settlement} called ${name}. ${notableFeature} You could guess that there may be ${settlementPopulation} here.</p>
        <p>The mice here ${thisInhabitants}. It looks like they are mainly ${jobs}. ${government} seems to be the way they are governed.</p>
    `
}

newSettlement()
