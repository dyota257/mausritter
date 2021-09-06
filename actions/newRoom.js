module.exports = newRoom

const {pick, join, chance, picky, one} = require('../util/functions.js')
const {em} = require('../util/styles.js')

const {empty,obstacle,trap,puzzle,lair} = require('../tables/rooms.js')

const roomType = [   
    {order: [1,2],  type: 'Empty',    feature: ()=> {return pick(empty);}, hasCreatures: ()=>{return chance([1,2,3])    }, hasTreasures: ()=>{return chance([1])        } },
    {order: [3],    type: 'Obstacle', feature: ()=> {return pick(obstacle);}, hasCreatures: ()=>{return chance([1,2])      }, hasTreasures: ()=>{return chance([1])        } },
    {order: [4],    type: 'Trap',     feature: ()=> {return pick(trap);}, hasCreatures: ()=>{return chance([1])        }, hasTreasures: ()=>{return chance([1,2])      } },
    {order: [5],    type: 'Puzzle',   feature: ()=> {return pick(puzzle);}, hasCreatures: ()=>{return chance([1])        }, hasTreasures: ()=>{return chance([1,2,3,4,5])} },
    {order: [6],    type: 'Lair',     feature: ()=> {return pick(lair);}, hasCreatures: ()=>{return chance([1,2,3,4,5])}, hasTreasures: ()=>{return chance([1,2,3,4])  } },
]

// need to add 'feature' property

// need to fill in room features tables



function newRoom() {
    let room = picky(roomType, '1d6')
    let feature = ''
    if (room.type === 'Lair') {
        feature = `it was ${em(join(room.feature()))}`
    } else {
        feature = `${em(one(join(room.feature())))}`
    }

    console.log(room.feature())
    return `
        <p>You enter the chamber.</p>
        <p>You can see ${feature}</p>

        ${room.hasCreatures() ? `<p>You see some ${em('creatures')} inside.</p>` : ''}
        ${room.hasTreasures() ? `<p>There is ${em('treasure')} here.</p>` : ''}
    `
}
// ${em(one(join(room.type)))}