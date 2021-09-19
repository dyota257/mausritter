const mauszauber = [
    {
        order: "11", 
        spell: `Anchor`,              
        effect: `Set [DICE] ghosts to haunt an area for [SUM] seasons.`, 
        recharge: `Free a ghost from the mortal realm while holding this spell.`
    },
    {
        order: "12", 
        spell: `Begill`,              
        effect: `Grow Gills for [DICE] x 6 turns.`, 
        recharge: `Leave in the belly of a fish for 3 days.`
    },
    {
        order: "13", 
        spell: `Blind`,               
        effect: `A creature is unable to see for [SUM] rounds`, 
        recharge: `. Stay blindfolded for 3 days while holding the spell.`
    },
    {
        order: "14", 
        spell: `Bloodling Deal`,      
        effect: `[SUM] damage to a creature.`, 
        recharge: `Create [DICE] bloodlings that follow your command that last for [DICE] turns. Nurse a stranger to full health.`
    },
    {
        order: "15", 
        spell: `Bloom`,               
        effect: `The surrounding area will have the plants bloom the most beautiful flowers for [DICE] days.`, 
        recharge: `Bury Under a flower for three days.`
    },
    {
        order: "16", 
        spell: `Bridge`,              
        effect: `Roots grow out to bridge a gap [DICE] feet wide.`, 
        recharge: `Coat in a bundle of roots for 3 days.`
    },
    {
        order: "17", 
        spell: `Burn Out`,            
        effect: `Instantly put out a [SUM] x 2” radius sphere of fire.`, 
        recharge: `Throw into the heart of a wildfire.`
    },
    {
        order: "18", 
        spell: `Chronal Hibernation`, 
        effect: `An incapacitated creature can be left unatdened for an additional [SUM] x6 exploration turns.`, 
        recharge: `Have no one look at the spell for 3 weeks.`
    },
    {
        order: "21", 
        spell: `Cocoon of Vivacity`,  
        effect: `You are encased in a cocoon and can complete a full rest in 6 - [DICE] watches.`, 
        recharge: `Douse in the juices of a mid metamorphosis butterfly.`
    },
    {
        order: "22", 
        spell: `Collapse Space`,      
        effect: `Create a portal connecting two spaces within 60” of each other. The portals last [SUM] turns.`, 
        recharge: `Spend a day worshiping the void between spaces.`
    },
    {
        order: "23", 
        spell: `Constrict`,           
        effect: `Astral serpents bind a creature. The creature cannot move from that spot for [DICE] turns.`, 
        recharge: `Find yourself inadvertently trapped while carrying this spell.`
    },
    {
        order: "24", 
        spell: `Contact`,             
        effect: `You are able to speak to the spirit of a creature that is dead. You remain in contact for [DICE] turns.`, 
        recharge: `Give the spell a proper burial and leave undisturbed for a week.`
    },
    {
        order: "25", 
        spell: `Dream Voyage`,        
        effect: `[DICE] creatures can be brought through to other realms for a day.`, 
        recharge: `Sleep with this spell as a pillow three nights in a row.`
    },
    {
        order: "26", 
        spell: `Earthen Shaping`,     
        effect: (DICE, SUM) => {let result = (DICE + SUM)*2; return `Move a ${result}” sphere of earth up to 24”.`}, 
        recharge: `Leave in a cave for 3 days.`
    },
    {
        order: "27", 
        spell: `Echolocation`,        
        effect: `[DICE] creatures are able to navigate without light for [DICE] turns.`, 
        recharge: `Let the spell absorb the shock of a sonic boom.`
    },
    {
        order: "28", 
        spell: `Erode`,               
        effect: `Turn [SUM] x 2” radius of stone into loose sand.`, 
        recharge: `Leave in a river bed for 3 days`
    },
    {
        order: "31", 
        spell: `Extra Eyes`,          
        effect: `A creature has a pair of eyes on the back of their head for [DICE] days.`, 
        recharge: `Be surprised while holding the spell.`
    },
    {
        order: "32", 
        spell: `Fire Parting`,        
        effect: `Part 24” of flame large enough to pass [SUM] mice shoulder to shoulder through a fire.`, 
        recharge: `Leave frozen in ice for a day.`
    },
    {
        order: "33", 
        spell: `Gale Gate`,           
        effect: `Create a strong wind that makes a room transversable from a single direction. The wind lasts for [DICE] x 6 turns.`, 
        recharge: `Leave uncovered in still air for three days.`
    },
    {
        order: "34", 
        spell: `Glow`,                
        effect: `An object glows like the moon for [DICE] watches.`, 
        recharge: `Expose the spell only to starlight for 3 nights.`
    },
    {
        order: "35", 
        spell: `Grub`,                
        effect: `Create a grub that will pupate into a rideable beetle after 4-[DICE] days.`, 
        recharge: `Bury the spell in rotting wood for 3 days.`
    },
    {
        order: "36", 
        spell: `Homunculus`,          
        effect: `Create a small cretin that shares a resemblance with you that can carry [DICE] items and last for [SUM] watches.`, 
        recharge: `Cut self for d6 DEX damage, sprinkle with the blood.`
    },
    {
        order: "37", 
        spell: `Hover`,               
        effect: `You cannot fall for [SUM] turns.`, 
        recharge: `Suspend in the air with twine for 3 days.`
    },
    {
        order: "38", 
        spell: `Ice Sheet`,           
        effect: `Create a 24” radius sheet of ice over a surface or gap. To move on the ice creatures must make a DEX save or fall prone. The Ice lasts [DICE] rounds.`, 
        recharge: `Leave in a winter storm overnight.`
    },
    {
        order: "41", 
        spell: `Knot Up`,             
        effect: `A snake uncontrollably works itself into a knot for [DICE] rounds.`, 
        recharge: `Give generously to a snake while holding this spell.`
    },
    {
        order: "42", 
        spell: `Lightning Strike`,    
        effect: `Shoot a lightning bolt up to 24". Deal [SUM] damage to the first creature it hits. Any creature within 6” takes [DICE] damage from the bolt arcing to them. The bolt can arc off of any creature it can hit.`, 
        recharge: `Have the 4spell strike by lightning of a storm.`
    },
    {
        order: "43", 
        spell: `Lucky Brew`,          
        effect: `You create a small brew that once drunk makes [DICE] added to the luck roll of the drinker.`, 
        recharge: `Suffer intense misfortune while holding this spell.`
    },
    {
        order: "44", 
        spell: `Madden Deal`,         
        effect: `[SUM] WIL damage to a creature.`, 
        recharge: `Stare unblinking into the space between the stars for 1 night.`
    },
    {
        order: "45", 
        spell: `Magebirth`,           
        effect: `Create life within a hermetically sealed container. In 3-[DICE] weeks the jar will burst with a perfect copy of you with all your memories prior to the casting of the spell.`, 
        recharge: `Have the spell hanging on the wall of a room during a birth.`
    },
    {
        order: "46", 
        spell: `Paralytic`,           
        effect: `A ghostly snake lunges forth at a creature 12” away. The creature cannot move its limbs for [DICE] rounds.`, 
        recharge: `Have a snake bite the spell.`
    },
    {
        order: "47", 
        spell: `Predestination`,      
        effect: `Replace any single result of a roll within the next [SUM]`, 
        recharge: `Consult the cosmos for three days of study.`
    },
    {
        order: "48", 
        spell: `Quicken`,             
        effect: `[DICE] creatures travel at twice the speed for [DICE] watches.`, 
        recharge: `Eat an entire sugar cube while holding the spell.`
    },
    {
        order: "51", 
        spell: `Rage On`,             
        effect: `A fire can burn on for [DICE] days longer than the fuel would allow.`, 
        recharge: `Burn a new candle entirely on top of the spell.`
    },
    {
        order: "52", 
        spell: `Rattle`,              
        effect: `A creature will let out an ethereal rattle before it attacks for [SUM] turns.`, 
        recharge: `Be ambushed while holding this spell.`
    },
    {
        order: "53", 
        spell: `Safe Landing`,        
        effect: `Leaves grow from the ground below slowing the fall of [DICE] creatures.`, 
        recharge: `Drop the spell from the top of the tallest tree.`
    },
    {
        order: "54", 
        spell: `Seasonal Shift`,      
        effect: `[DICE] creatures are teleported forward in time exactly 1 season.`, 
        recharge: `Catch in the light rising sun of an equinox or solstice.`
    },
    {
        order: "55", 
        spell: `Silence`,             
        effect: `No sounds emanate from a creature for [SUM] turns.`, 
        recharge: `Use the spell as a drum in a performance for a town.`
    },
    {
        order: "56", 
        spell: `Starstrike`,          
        effect: `A small fiery mote descends from the sky dealing [DICE]+[SUM] damage to a single creature within 24”,`, 
        recharge: `Bury in a crater for a night.`
    },
    {
        order: "57", 
        spell: `Tempest Jump`,        
        effect: `You jump [SUM] x 6” straight up.`, 
        recharge: `Fly the spell on a kite.`
    },
    {
        order: "58", 
        spell: `Tentacular`,          
        effect: `Forelimb One of your forelimbs elongates into a prehensile tentacle allowing you to reach thing 6” away. Your forelimb reverts after [DICE] watches.`, 
        recharge: `Crush a fish egg with the spell.`
    },
    {
        order: "61", 
        spell: `Thunderclap`,         
        effect: `Force all creatures within a [DICE] x 3” radius to make a WIL save or become stunned.`, 
        recharge: `Use the spell as a windchime during a thunderstorm.`
    },
    {
        order: "62", 
        spell: `Tidal`,               
        effect: `Shove Push everything in a 24” long by [DICE] x 1” wide line back [SUM] x 1”.`, 
        recharge: `Float down a river for a night while holding the spell.`
    },
    {
        order: "63", 
        spell: `Time Mire`,           
        effect: `A creature can act every other turn for [DICE] x 2 rounds.`, 
        recharge: `Keep in a grandfather clock for a night.`
    },
    {
        order: "64", 
        spell: `Transmute`,           
        effect: `Turn 1 ration into [SUM] pips.`, 
        recharge: `Give away a great fortune while holding the spell.`
    },
    {
        order: "65", 
        spell: `Unbearable Visage`,   
        effect: `Your face turns into an unthinkable terror for [SUM] turns. Anyone who sees your face gains the frightened condition.`, 
        recharge: `Stare directly at your greatest fear for a minute while holding the spell.`
    },
    {
        order: "66", 
        spell: `Void Pull`,           
        effect: `Create a tear into the void up to 24” away, every loose object within [DICE] x 6” radius is moved 6” towards that point.`, 
        recharge: `Leave in a vacuum for a day.`
    },
    {
        order: "67", 
        spell: `Webbing`,             
        effect: `You grow a hairless membrane under your forelimbs, you can glide around for [DICE] watches.`, 
        recharge: `Throw from one tree to another.`
    },
    {
        order: "68", 
        spell: `Wither`,              
        effect: `Cause all plant life within a [DICE] x 2” radius instantly die and begin to rot.`, 
        recharge: `Offer the rot to the tribunal of fungi`
    },
    
]

function pick(array) {
    let count = array.length
    let randomPick = Math.floor(Math.random()*count)
    return array[randomPick]
}

function roll(xdx) {
    let number = xdx.split('d')[0]
    let sides = xdx.split('d')[1]

    let rolls = [];
    sum = 0;

    for (var i=0; i < number; i++){
        roll = Math.ceil(Math.random()*sides);
        rolls.push(roll);
        sum += roll
    }
    return {dice: number, rolls: rolls, sum: sum}
}

function cast(spell, power) {
    let rollset = roll(`${power}d6`)
    
    console.log(`You cast ${spell.spell} at ${power} power!`)
    console.log(`${spell.effect(rollset.dice, rollset.sum)}`)
    

}

let spell = mauszauber[13] // pick(mauszauber);

cast(spell, Math.ceil(Math.random()*3));