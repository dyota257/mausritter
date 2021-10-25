export {loot};

import {treasures, Treasure} from '../tables/treasures'

import {one, picky} from '../util/functions'
import {figure,good} from '../util/styles'

function loot(number:number):string {
    console.log("argument:" + number)
    let output:string = ''

    for (var i=0; i<number; i++) {
        
        // the treasures are unevenly distributed so can't just randomly pick()
        let chosenTreasure:Treasure = picky(treasures, '1d20')
        
        output += `<p>You ${good('obtained')} ${one(chosenTreasure.treasure())} ${figure(chosenTreasure.rarity)}</p>`
    }
    console.log(output)
    return output
}
