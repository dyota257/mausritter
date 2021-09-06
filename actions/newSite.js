module.exports = newSite

const {construction, ruination, inhabitants, focus, secret} = require('../tables/sites.js')
const {one, join, pick} = require('../util/functions.js')
const {em} = require('../util/styles.js')


function newSite() {
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