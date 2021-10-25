export {recharge}

import {Spell} from '../tables/spells'
import {join} from '../util/functions'
import {em} from '../util/styles'

function recharge(spell:Spell):string {
    return `To recharge ${em(spell.spell)}, you must ${em(join(spell.recharge))}`
}