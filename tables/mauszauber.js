"use strict";
exports.__esModule = true;
exports.mauszauber = void 0;
var mauszauber = [
    {
        order: 11,
        spell: "Anchor",
        effect: function ($dice, $sum) { return "Set " + $dice.toString() + " ghosts to haunt an area for " + $sum.toString() + " seasons."; },
        recharge: "Free a ghost from the mortal realm while holding this spell."
    },
    {
        order: 12,
        spell: "Begill",
        effect: function ($dice, $sum) { return "Grow Gills for " + $dice.toString() + " turns."; },
        recharge: "Leave in the belly of a fish for 3 days."
    },
    {
        order: 13,
        spell: "Blind",
        effect: function ($dice, $sum) { return "A creature is unable to see for " + $sum.toString() + " rounds."; },
        recharge: "Stay blindfolded for 3 days while holding the spell."
    },
    {
        order: 14,
        spell: "Bloodling Deal",
        effect: function ($dice, $sum) { return $sum.toString() + " damage to a creature. Create " + $dice.toString() + " bloodlings that follow your command that last for " + $dice.toString() + " turns."; },
        recharge: "Nurse a stranger to full health."
    },
    {
        order: 15,
        spell: "Bloom",
        effect: function ($dice, $sum) { return "The surrounding area will have the plants bloom the most beautiful flowers for " + $dice.toString() + " days."; },
        recharge: "Bury Under a flower for three days."
    },
    {
        order: 16,
        spell: "Bridge",
        effect: function ($dice, $sum) { return "Roots grow out to bridge a gap " + $dice.toString() + " feet wide."; },
        recharge: "Coat in a bundle of roots for 3 days."
    },
    {
        order: 17,
        spell: "Burn Out",
        effect: function ($dice, $sum) { return "Instantly put out a " + $sum * 2 + "\u201D radius sphere of fire."; },
        recharge: "Throw into the heart of a wildfire."
    },
    {
        order: 18,
        spell: "Chronal Hibernation",
        effect: function ($dice, $sum) { return "An incapacitated creature can be left unatdened for an additional " + $sum * 6 + " exploration turns."; },
        recharge: "Have no one look at the spell for 3 weeks."
    },
    {
        order: 21,
        spell: "Cocoon of Vivacity",
        effect: function ($dice, $sum) { return "You are encased in a cocoon and can complete a full rest in " + (6 - $dice) + " watches."; },
        recharge: "Douse in the juices of a mid metamorphosis butterfly."
    },
    {
        order: 22,
        spell: "Collapse Space",
        effect: function ($dice, $sum) { return "Create a portal connecting two spaces within 60\u201D of each other. The portals last " + $sum.toString() + " turns."; },
        recharge: "Spend a day worshiping the void between spaces."
    },
    {
        order: 23,
        spell: "Constrict",
        effect: function ($dice, $sum) { return "Astral serpents bind a creature. The creature cannot move from that spot for " + $dice.toString() + " turns."; },
        recharge: "Find yourself inadvertently trapped while carrying this spell."
    },
    {
        order: 24,
        spell: "Contact",
        effect: function ($dice, $sum) { return "You are able to speak to the spirit of a creature that is dead. You remain in contact for " + $dice.toString() + " turns."; },
        recharge: "Give the spell a proper burial and leave undisturbed for a week."
    },
    {
        order: 25,
        spell: "Dream Voyage",
        effect: function ($dice, $sum) { return $dice.toString() + " creatures can be brought through to other realms for a day."; },
        recharge: "Sleep with this spell as a pillow three nights in a row."
    },
    {
        order: 26,
        spell: "Earthen Shaping",
        effect: function (DICE, SUM) { var result = (DICE + SUM) * 2; return "Move a " + result + "\u201D sphere of earth up to 24\u201D."; },
        recharge: "Leave in a cave for 3 days."
    },
    {
        order: 27,
        spell: "Echolocation",
        effect: function ($dice, $sum) { return $dice.toString() + " creatures are able to navigate without light for " + $dice.toString() + " turns."; },
        recharge: "Let the spell absorb the shock of a sonic boom."
    },
    {
        order: 28,
        spell: "Erode",
        effect: function ($dice, $sum) { return "Turn " + $sum * 2 + "\u201D radius of stone into loose sand."; },
        recharge: "Leave in a river bed for 3 days"
    },
    {
        order: 31,
        spell: "Extra Eyes",
        effect: function ($dice, $sum) { return "A creature has a pair of eyes on the back of their head for " + $dice.toString() + " days."; },
        recharge: "Be surprised while holding the spell."
    },
    {
        order: 32,
        spell: "Fire Parting",
        effect: function ($dice, $sum) { return "Part 24\u201D of flame large enough to pass " + $sum.toString() + " mice shoulder to shoulder through a fire."; },
        recharge: "Leave frozen in ice for a day."
    },
    {
        order: 33,
        spell: "Gale Gate",
        effect: function ($dice, $sum) { return "Create a strong wind that makes a room transversable from a single direction. The wind lasts for " + $dice * 6 + "  turns."; },
        recharge: "Leave uncovered in still air for three days."
    },
    {
        order: 34,
        spell: "Glow",
        effect: function ($dice, $sum) { return "An object glows like the moon for " + $dice.toString() + " watches."; },
        recharge: "Expose the spell only to starlight for 3 nights."
    },
    {
        order: 35,
        spell: "Grub",
        effect: function ($dice, $sum) { return "Create a grub that will pupate into a rideable beetle after " + (4 - $dice) + " days."; },
        recharge: "Bury the spell in rotting wood for 3 days."
    },
    {
        order: 36,
        spell: "Homunculus",
        effect: function ($dice, $sum) { return "Create a small cretin that shares a resemblance with you that can carry " + $dice.toString() + " items and last for " + $sum.toString() + " watches."; },
        recharge: "Cut self for d6 DEX damage, sprinkle with the blood."
    },
    {
        order: 37,
        spell: "Hover",
        effect: function ($dice, $sum) { return "You cannot fall for " + $sum.toString() + " turns."; },
        recharge: "Suspend in the air with twine for 3 days."
    },
    {
        order: 38,
        spell: "Ice Sheet",
        effect: function ($dice, $sum) { return "Create a 24\u201D radius sheet of ice over a surface or gap. To move on the ice creatures must make a DEX save or fall prone. The Ice lasts " + $dice.toString() + " rounds."; },
        recharge: "Leave in a winter storm overnight."
    },
    {
        order: 41,
        spell: "Knot Up",
        effect: function ($dice, $sum) { return "A snake uncontrollably works itself into a knot for " + $dice.toString() + " rounds."; },
        recharge: "Give generously to a snake while holding this spell."
    },
    {
        order: 42,
        spell: "Lightning Strike",
        effect: function ($dice, $sum) { return "Shoot a lightning bolt up to 24\". Deal " + $sum.toString() + " damage to the first creature it hits. Any creature within 6\u201D takes " + $dice.toString() + " damage from the bolt arcing to them. The bolt can arc off of any creature it can hit."; },
        recharge: "Have the 4spell strike by lightning of a storm."
    },
    {
        order: 43,
        spell: "Lucky Brew",
        effect: function ($dice, $sum) { return "You create a small brew that once drunk makes " + $dice.toString() + " added to the luck roll of the drinker."; },
        recharge: "Suffer intense misfortune while holding this spell."
    },
    {
        order: 44,
        spell: "Madden Deal",
        effect: function ($dice, $sum) { return $sum.toString() + " WIL damage to a creature."; },
        recharge: "Stare unblinking into the space between the stars for 1 night."
    },
    {
        order: 45,
        spell: "Magebirth",
        effect: function ($dice, $sum) { return "Create life within a hermetically sealed container. In " + (3 - $dice) + " weeks the jar will burst with a perfect copy of you with all your memories prior to the casting of the spell."; },
        recharge: "Have the spell hanging on the wall of a room during a birth."
    },
    {
        order: 46,
        spell: "Paralytic",
        effect: function ($dice, $sum) { return "A ghostly snake lunges forth at a creature 12\u201D away. The creature cannot move its limbs for " + $dice.toString() + " rounds."; },
        recharge: "Have a snake bite the spell."
    },
    {
        order: 47,
        spell: "Predestination",
        effect: function ($dice, $sum) { return "Replace any single result of a roll within the next " + $sum.toString(); },
        recharge: "Consult the cosmos for three days of study."
    },
    {
        order: 48,
        spell: "Quicken",
        effect: function ($dice, $sum) { return $dice.toString() + " creatures travel at twice the speed for " + $dice.toString() + " watches."; },
        recharge: "Eat an entire sugar cube while holding the spell."
    },
    {
        order: 51,
        spell: "Rage On",
        effect: function ($dice, $sum) { return "A fire can burn on for " + $dice.toString() + " days longer than the fuel would allow."; },
        recharge: "Burn a new candle entirely on top of the spell."
    },
    {
        order: 52,
        spell: "Rattle",
        effect: function ($dice, $sum) { return "A creature will let out an ethereal rattle before it attacks for " + $sum.toString() + " turns."; },
        recharge: "Be ambushed while holding this spell."
    },
    {
        order: 53,
        spell: "Safe Landing",
        effect: function ($dice, $sum) { return "Leaves grow from the ground below slowing the fall of " + $dice.toString() + " creatures."; },
        recharge: "Drop the spell from the top of the tallest tree."
    },
    {
        order: 54,
        spell: "Seasonal Shift",
        effect: function ($dice, $sum) { return $dice.toString() + " creatures are teleported forward in time exactly 1 season."; },
        recharge: "Catch in the light rising sun of an equinox or solstice."
    },
    {
        order: 55,
        spell: "Silence",
        effect: function ($dice, $sum) { return "No sounds emanate from a creature for " + $sum.toString() + " turns."; },
        recharge: "Use the spell as a drum in a performance for a town."
    },
    {
        order: 56,
        spell: "Starstrike",
        effect: function ($dice, $sum) { return "A small fiery mote descends from the sky dealing " + ($dice + $sum) + " damage to a single creature within 24\u201D,"; },
        recharge: "Bury in a crater for a night."
    },
    {
        order: 57,
        spell: "Tempest Jump",
        effect: function ($dice, $sum) { return "You jump " + $sum * 6 + " \u201D straight up."; },
        recharge: "Fly the spell on a kite."
    },
    {
        order: 58,
        spell: "Tentacular",
        effect: function ($dice, $sum) { return "One of your forelimbs elongates into a prehensile tentacle allowing you to reach thing 6\u201D away. Your forelimb reverts after " + $dice.toString() + " watches."; },
        recharge: "Crush a fish egg with the spell."
    },
    {
        order: 61,
        spell: "Thunderclap",
        effect: function ($dice, $sum) { return "Force all creatures within a " + $dice * 3 + "\u201D radius to make a WIL save or become stunned."; },
        recharge: "Use the spell as a windchime during a thunderstorm."
    },
    {
        order: 62,
        spell: "Tidal",
        effect: function ($dice, $sum) { return "Shove Push everything in a 24\u201D long by " + $dice.toString() + "\u201D wide line back " + $sum.toString() + "\u201D."; },
        recharge: "Float down a river for a night while holding the spell."
    },
    {
        order: 63,
        spell: "Time Mire",
        effect: function ($dice, $sum) { return "A creature can act every other turn for " + $dice * 2 + " rounds."; },
        recharge: "Keep in a grandfather clock for a night."
    },
    {
        order: 64,
        spell: "Transmute",
        effect: function ($dice, $sum) { return "Turn 1 ration into " + $sum.toString() + " pips."; },
        recharge: "Give away a great fortune while holding the spell."
    },
    {
        order: 65,
        spell: "Unbearable Visage",
        effect: function ($dice, $sum) { return "Your face turns into an unthinkable terror for " + $sum.toString() + " turns. Anyone who sees your face gains the frightened condition."; },
        recharge: "Stare directly at your greatest fear for a minute while holding the spell."
    },
    {
        order: 66,
        spell: "Void Pull",
        effect: function ($dice, $sum) { return "Create a tear into the void up to 24\u201D away, every loose object within " + $dice * 6 + "\u201D radius is moved 6\u201D towards that point."; },
        recharge: "Leave in a vacuum for a day."
    },
    {
        order: 67,
        spell: "Webbing",
        effect: function ($dice, $sum) { return "You grow a hairless membrane under your forelimbs, you can glide around for " + $dice.toString() + " watches."; },
        recharge: "Throw from one tree to another."
    },
    {
        order: 68,
        spell: "Wither",
        effect: function ($dice, $sum) { return "Cause all plant life within a " + $dice * 2 + "\u201D radius instantly die and begin to rot."; },
        recharge: "Offer the rot to the tribunal of fungi"
    },
];
exports.mauszauber = mauszauber;
