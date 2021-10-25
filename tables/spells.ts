// TYPESCRIPT DONE

import {good,em,bad} from '../util/styles'
export  {spells, Spell}

type Spell = {
    order:number, 
    spell:string,
    effect:($dice:number, $sum:number) => string,
    recharge:string
}

const spells:Array<Spell> = [
    {
        order:2, 
        spell:`Fireball`, 
        effect: ($dice:number, $sum:number):string => {let result = $sum + $dice; return `Shoot a fireball up to 24". Deal ${bad(result.toString())} damage to all creatures within 6".`}, 
        recharge:`Burn in the heart of a raging fire for three days and nights.`
    },
    {
        order:3, 
        spell:`Heal`, 
        effect: ($dice:number, $sum:number):string => {return `Heal ${good($sum.toString())} STR damage and remove the ${em('Injured Condition')} from a creature.`}, 
        recharge:`Cut self for d6 STR damage, sprinkle the spell with the blood.`
    },
    {
        order:4, 
        spell:`Magic Missile`, 
        effect: ($dice:number, $sum:number):string => {let result = $sum + $dice; return `Deal ${bad(result.toString())} damage to a creature within sight. Drop from a height of at least 30ft.`}, 
        recharge:`Touch the spell within one Turn.`
    },
    {
        order:5, 
        spell:`Fear`, 
        effect: ($dice:number, $sum:number):string => {return `Give the ${em('Frightened Condition')} to ${em($dice.toString())} creatures.`}, 
        recharge:`Receive the ${em('Frightened Condition')} from a hostile creature while carrying the spell.`
    },
    {
        order:6, 
        spell:`Darkness`, 
        effect: ($dice:number, $sum:number):string => {let result = $sum * 2; return `Create a ${em(result.toString())}" diameter sphere of pure darkness for ${em($dice.toString())} Turns.`}, 
        recharge:`Leave uncovered in a lightless place for three days.`
    },
    {
        order:7, 
        spell:`Restore`, 
        effect: ($dice:number, $sum:number):string => {let result = $dice + 1; return `Remove ${em('Exhausted')} or ${em('Frightened Condition')} from ${bad(result.toString())} creatures`},
        recharge:`Bury in a peaceful field or riverbank for three days.`
    },
    {
        order:8, 
        spell:`Be Understood`, 
        effect: ($dice:number, $sum:number):string => {return `Make your meaning clear to ${em($dice.toString())} creatures of another species for ${em($dice.toString())} Turns.`}, 
        recharge:`Give away freely to a creature of another species.`
    },
    {
        order:9, 
        spell:`Ghost Beetle`, 
        effect: ($dice:number, $sum:number):string => {let result = $dice * 6; return `Create an illusory beetle that can carry 6 inventory slots for ${bad(result.toString())} Turns.`}, 
        recharge:`Bury in a beetle graveyard for three nights.`
    },
    {
        order:10, 
        spell:`Light`, 
        effect: ($dice:number, $sum:number):string => {return `Force ${em($dice.toString())} creatures to make a WIL save or become stunned. Alternately, create light as bright as a torch for ${em($sum.toString())} turns.`}, 
        recharge:`Catch in the first light of a sunrise and the last light of sunset for three days.`
    },
    {
        order:11, 
        spell:`Invisible Ring`, 
        effect: ($dice:number, $sum:number):string => {let result = $dice * 6; return `Creates ${em(result.toString())}" ring of force. It is invisible and immovable. Lasts ${em($dice.toString())} Turns.`}, 
        recharge:`Build an iron ring the same size as last cast. Pass the spell though it. Dissolves the ring.`
    },
    {
        order:12, 
        spell:`Knock`, 
        effect: ($dice:number, $sum:number):string => {let result = 10 + $dice * 4; return `Open a door or container, as if a Save were made with STR score of ${figure(result.toString())}.`}, 
        recharge:`Put in a locked box, inside a locked box, inside a locked box. Leave for three days.`
    },
    {
        order:13, 
        spell:`Grease`, 
        effect: ($dice:number, $sum:number):string => {let result = $dice * 6; return `Cover ${em(result.toString())}" area in slippery, flammable grease. Creatures in the area must make a DEX save or fall prone.`}, 
        recharge:`Rub all over in animal fat. Leave until it putrefies.`
    },
    {
        order:14, 
        spell:`Grow`, 
        effect: ($dice:number, $sum:number):string => {let result = $dice + 1; return `Grow a creature to ${em(result.toString())} times its original size for 1 Turn.`}, 
        recharge:`Leave in the highest branches of a tall tree for three days.`
    },
    {
        order:15, 
        spell:`Invisibility`, 
        effect: ($dice:number, $sum:number):string => {return `Make creature invisible for ${em($dice.toString())} Turns. Any movement reduces duration by 1 Turn.`}, 
        recharge:`Go a day without opening your eyes once, while holding the spell.`
    },
    {
        order:16, 
        spell:`Catnip`, 
        effect: ($dice:number, $sum:number):string => {return `Turn object into an irresistible lure for cats. Lasts ${em($dice.toString())} Turns.`}, 
        recharge:`Give a cat a gift it truly desires.`
    },
]




