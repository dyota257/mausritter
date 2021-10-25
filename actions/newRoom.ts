export {newRoom}

import {pick, join, chance, picky, one} from '../util/functions'
import {em} from '../util/styles'
import {empty,obstacle,trap,puzzle,lair} from '../tables/rooms'

type RoomType = {
    order:Array<number>,
    type:string,
    feature:()=>string,
    hasCreatures:()=>boolean,
    hasTreasures:()=>boolean
}

const roomType:Array<RoomType> = [
    {order: [1,2],type: 'Empty',    feature: ()=> {return pick(empty);},    hasCreatures: ()=>{return chance([1,2,3])    }, hasTreasures: ()=>{return chance([1])        } },
    {order: [3],  type: 'Obstacle', feature: ()=> {return pick(obstacle);}, hasCreatures: ()=>{return chance([1,2])      }, hasTreasures: ()=>{return chance([1])        } },
    {order: [4],  type: 'Trap',     feature: ()=> {return pick(trap);},     hasCreatures: ()=>{return chance([1])        }, hasTreasures: ()=>{return chance([1,2])      } },
    {order: [5],  type: 'Puzzle',   feature: ()=> {return pick(puzzle);},   hasCreatures: ()=>{return chance([1])        }, hasTreasures: ()=>{return chance([1,2,3,4,5])} },
    {order: [6],  type: 'Lair',     feature: ()=> {return pick(lair);},     hasCreatures: ()=>{return chance([1,2,3,4,5])}, hasTreasures: ()=>{return chance([1,2,3,4])  } },
]

function newRoom():string {
    let room:RoomType = picky(roomType, '1d6')
    let feature:string
    if (room.type === 'Lair') {
        feature = `it was ${em(join(room.feature()))}`
    } else {
        feature = `${em(one(join(room.feature())))}`
    }

    return `
        <p>You enter the chamber.</p>
        <p>You can see ${feature}</p>

        ${room.hasCreatures() ? `<p>You see some ${em('creatures')} inside.</p>` : ''}
        ${room.hasTreasures() ? `<p>There is ${em('treasure')} here.</p>` : ''}
    `
}