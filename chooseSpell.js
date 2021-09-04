const spells = require('./tables/spells.js')



function choose(spellname) {
    let spell = spells.filter(
        (e) => {
            return e.spell.toLowerCase()  === spellname.toLowerCase()
        }
    )
    console.log(spell)
    return spell
}

choose("hEal")