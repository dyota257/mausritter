export {newSite}

import {construction, ruination, inhabitants, focus, secret} from '../tables/sites'
import {one, join, pick} from '../util/functions'
import {em} from '../util/styles'

function newSite():string {
    let thisfocus = pick(focus)
    let site = {
        construction: em(one(join(pick(construction)))),
        ruination: join(pick(ruination)),
        inhabitants: em(join(pick(inhabitants))),
        direction: pick(thisfocus.direction),
        goal: em(join(thisfocus.goal)),
        secret: em(join(pick(secret))),
    }
    return `
        <p>You come across ${site.construction}, ruined by ${site.ruination}.</p>
        <p>It is inhabited by ${site.inhabitants}, who are ${site.direction} ${site.goal}.</p>
        <p>There is something mysterious about the ${site.secret}.</p>
    `
}