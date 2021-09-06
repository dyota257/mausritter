const {picky} = require('../util/functions.js')

const roomType = [   
    {order: [1,2],  type: 'Empty',   creatures: [1,2,3]},
    {order: [3],    type: 'Obstacle',creatures: [1,2]},
    {order: [4],    type: 'Trap',    creatures: [1]},
    {order: [5],    type: 'Puzzle',  creatures: [1]},
    {order: [6],    type: 'Lair',    creatures: [1,2,3,4,5]},
]

function roomCreatures(creaturesChance) {
    return 1
}

for (var i=0; i<20;i++){
    let room = picky(roomType, '1d6')
    // console.log(room)
    console.log(room.type)
}