module.exports = newSettlement

const {inhabitants,size,features,governance,industries,events,nameStart,nameEnd,tavernStart,tavernEnd,tavernSpecialty} = require('../tables/settlements.js')

const {pick, roll, join, one} = require('../util/functions.js')
const {em} = require('../util/styles.js')

function newSettlement() {
    let name = em(pick(nameStart) + pick(nameEnd))
    let lowest = roll('2d6').rolls.sort((a,b) => a-b)[0]
    let settlementSize = size[lowest-1].split(' ')
    let settlement = one(join(settlementSize[0]))
    let settlementPopulation = em(settlementSize[1] + ' ' + settlementSize[2])
    let thisInhabitants = em(join(pick(inhabitants)))
    console.log(settlement)
    console.log(lowest)
    return `
        <p>You find yourself at ${settlement} called ${name}. You could guess that there may be ${settlementPopulation} here.</p>
        <p>The mice here ${thisInhabitants}.</p>
    `
}

newSettlement()