module.exports = newRoom

const {join, roll, picky, one} = require('../util/functions.js')
const {em} = require('../util/styles.js')

const roomType = [   
    {order: [1,2],  type: 'Empty',   hasCreatures: ()=>{return d6check([1,2,3])    }, hasTreasures: ()=>{return d6check([1])        } },
    {order: [3],    type: 'Obstacle',hasCreatures: ()=>{return d6check([1,2])      }, hasTreasures: ()=>{return d6check([1])        } },
    {order: [4],    type: 'Trap',    hasCreatures: ()=>{return d6check([1])        }, hasTreasures: ()=>{return d6check([1,2])      } },
    {order: [5],    type: 'Puzzle',  hasCreatures: ()=>{return d6check([1])        }, hasTreasures: ()=>{return d6check([1,2,3,4,5])} },
    {order: [6],    type: 'Lair',    hasCreatures: ()=>{return d6check([1,2,3,4,5])}, hasTreasures: ()=>{return d6check([1,2,3,4])  } },
]

function d6check(array) {
    let thisroll = roll('1d6')
    console.log(thisroll)
    return array.indexOf(thisroll.sum) != -1
}

function newRoom() {
    let room = picky(roomType, '1d6')
    
    console.log(room.type)
    console.log("Has creatures: " + room.hasCreatures())
    console.log("Has treasures: " + room.hasTreasures())

    return `
        <p>You enter ${em(one(join(room.type)))} chamber.</p>
        ${room.hasCreatures ? `<p>You see some ${em('creatures')} inside.</p>` : ''}
        ${room.hasTreasures ? `<p>There is ${em('treasure')} here.</p>` : ''}
    `
    
}
