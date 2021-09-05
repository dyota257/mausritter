module.exports = recharge

const spells = require('../tables/spells.js')
const {pick,join} = require('../util/functions.js')
const {dice,good,em,bad} = require('../util/styles.js')

function recharge(spell) {
    const requirement = join(spell.recharge)
const output = `To recharge ${em(spell.spell)}, you must ${em(requirement)}`
    console.log(output)
    return output
}