const spells = [
    {
        order:2, 
        spell:`Fireball`, 
        effect: ($dice, $sum) => {let result = $sum + $dice; return `Shoot a fireball up to 24". Deal ${result} damage to all creatures within 6".`}, 
        recharge:`Burn in the heart of a raging fire for three days and nights.`
    },
    {
        order:3, 
        spell:`Heal`, 
        effect: ($dice, $sum) => {return `Heal ${$sum} STR damage and remove the Injured Condition from a creature.`}, 
        recharge:`Cut self for d6 STR damage, sprinkle the spell with the blood.`
    },
    {
        order:4, 
        spell:`Magic Missile`, 
        effect: ($dice, $sum) => {let result = $sum + $dice; return `Deal ${result} damage to a creature within sight. Drop from a height of at least 30ft.`}, 
        recharge:`Touch the spell within one Turn.`
    },
    {
        order:5, 
        spell:`Fear`, 
        effect: ($dice, $sum) => {return `Give the Frightened Condition to ${$dice} creatures.`}, 
        recharge:`Receive the Frightened Condition from a hostile creature while carrying the spell.`
    },
    {
        order:6, 
        spell:`Darkness`, 
        effect: ($dice, $sum) => {let result = $sum * 2; return `Create a ${result}" diameter sphere of pure darkness for ${$dice} Turns.`}, 
        recharge:`Leave uncovered in a lightless place for three days.`
    },
    {
        order:7, 
        spell:`Restore`, 
        effect: ($dice, $sum) => {let result = $dice + 1; return `Remove Exhausted or Frightened Condition from ${result} creatures`},
        recharge:`Bury in a peaceful field or riverbank for three days.`
    },
    {
        order:8, 
        spell:`Be Understood`, 
        effect: ($dice, $sum) => {return `Make your meaning clear to ${$dice} creatures of another species for ${$dice} Turns.`}, 
        recharge:`Give away freely to a creature of another species.`
    },
    {
        order:9, 
        spell:`Ghost Beetle`, 
        effect: ($dice, $sum) => {let result = $dice * 6; return `Create an illusory beetle that can carry 6 inventory slots for ${result} Turns.`}, 
        recharge:`Bury in a beetle graveyard for three nights.`
    },
    {
        order:10, 
        spell:`Light`, 
        effect: ($dice, $sum) => {return `Force ${$dice} creatures to make a WIL save or become stunned. Alternately, create light as bright as a torch for ${$sum} turns.`}, 
        recharge:`Catch in the first light of a sunrise and the last light of sunset for three days.`
    },
    {
        order:11, 
        spell:`Invisible Ring`, 
        effect: ($dice, $sum) => {let result = $dice * 6; return `Creates ${result}" ring of force. It is invisible and immovable. Lasts ${$dice} Turns.`}, 
        recharge:`Build an iron ring the same size as last cast. Pass the spell though it. Dissolves the ring.`
    },
    {
        order:12, 
        spell:`Knock`, 
        effect: ($dice, $sum) => {let result = 10 + $dice * 4; return `Open a door or container, as if a Save were made with STR score of ${result}.`}, 
        recharge:`Put in a locked box, inside a locked box, inside a locked box. Leave for three days.`
    },
    {
        order:13, 
        spell:`Grease`, 
        effect: ($dice, $sum) => {let result = $dice * 6; return `Cover ${result}" area in slippery, flammable grease. Creatures in the area must make a DEX save or fall prone.`}, 
        recharge:`Rub all over in animal fat. Leave until it putrefies.`
    },
    {
        order:14, 
        spell:`Grow`, 
        effect: ($dice, $sum) => {let result = $dice + 1; return `Grow a creature to ${result} times its original size for 1 Turn.`}, 
        recharge:`Leave in the highest branches of a tall tree for three days.`
    },
    {
        order:15, 
        spell:`Invisibility`, 
        effect: ($dice, $sum) => {return `Make creature invisible for ${$dice} Turns. Any movement reduces duration by 1 Turn.`}, 
        recharge:`Go a day without opening your eyes once, while holding the spell.`
    },
    {
        order:16, 
        spell:`Catnip`, 
        effect: ($dice, $sum) => {return `Turn object into an irresistible lure for cats. Lasts ${$dice} Turns.`}, 
        recharge:`Give a cat a gift it truly desires.`
    },
]



module.exports = spells;
