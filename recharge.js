const spells = require('./tables/spells.js')
const {pick,join} = require('./functions.js')

function recharge(spell) {
    const requirement = join(spell.recharge)
    const output = `To recharge ${spell.spell}, you must ${requirement}`
    console.log(output)
    return output
}

recharge(pick(spells))
