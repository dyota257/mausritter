export {newHex}

import {hexType, countryside, forest, river, humanTown} from '../tables/hexes'
import {pick, picky,one, join} from '../util/functions'
import {em} from '../util/styles'

function newHex():string {
    let landmark:string
    let landform:string = picky(hexType, '1d6').type
    
    switch(landform) {
        case "Countryside":
            landmark = pick(countryside);
            break;
        case "Forest":
            landmark = pick(forest);
            break;
        case "River":
            landmark = pick(river);
            break;
        case "Human town":
            landmark = pick(humanTown);
            break;
    }

    return `By ${one(join(landform))}, in ${one(em(join(landmark)))}...`
}