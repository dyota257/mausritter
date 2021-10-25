export {
    names, 
    matriname,
    bricabrac,
    birthStar,
    coat,
    physicalDetails,
    background,
    remarkPhysicalDetails,
    selfEsteemPhysicalDetails,
    BirthStar,
    Coat,
    Background
}

const names = ["Ada","Agate","Agnes","Aloe","April","Azalea","Bay","Belladonna","Blossom","Brie","Brynn","Cherry","Claire","Crocus","Dahlia","Daisy","Else","Emerald","Erin","Grace","Gwendoline","Hazel","Heather","Hette","Holly","Hyacinth","Iris","Juniper","Lavender","Lily","Magnolia","Marigold","Marjoram","Myrtle","Odette","Olive","Opal","Pearl","Pepper","Poppy","Rosemary","Rue","Saffron","Sandy","Sassafras","Shale","Susan","Thistle","Violet","Willow","Alder","Ambrose","Anise","Annotto","August","Avens","Basil","Beryl","Birch","Boldo","Bill","Burdock","Butter","Cassia","Chicory","Clive","Colby","Dill","Eared","Edmund","Elmer","Ernest","Fennel","Festus","Francis","Gil","Hawthorn","Heath","Horatio","Jack","Jasper","Konrad","Larkspur","Laurel","Lorenz","Mace","Oliver","Orin","Reepicheep","Rowan","Simon","Sorrel","Stilton","Tarragon","Warren","Wattle","Wattle","Whitacre","Wormwood","Yarrow"]

const matriname = ["Baiter","Black","Buckthorne","Burley","Butterball","Catreizen","Danger","Deerider","Grant","Halva","Maker","Pipp","Seedfall","Snow","Summerholme","Thorne","Tunneler","White","Winterholme","Witter"]

const bricabrac = ["pips", "1 Dried five-leaf clover, carefully folded","Stone pendant of the Mother","Stub of a pencil","Dried herbs in waterproof bag","Wire bent into the shape of a moth","Letter of writ from a noblemouse","Smooth piece of coloured glass","Half-eaten piece of cheese, wrapped in paper","1 Smoke-blackened bat tooth","Metal cup etched with hunting scenes","Oddly shimmering opal in silver wire setting","Knife cut from a tin can","Clay jar of thick honey mead","Bee stinger wired to wooden handle","Piece of candied berry","Butterfly wings pressed between parchment","1 Map showing treasure hidden in a settlement","Note from a cat lord regarding a player mouse","Wooden idol of centipede eating its own tail","Tooth of a human child","Pot of bright paint","Angry ant queen in a glass jar","Rolled tapestry depicting ancient battle","Ball of wet clay that never dries out","1 Lock of a faerie's hair","Vial of red ink","Straw basket with leather carrying straps","Fragment of a spell tablet","Dried, poisonous mushroom","Pink plastic furbrush","Collection of dried leaves, bound with twine","Pipe carved of shell","1 Scrap of sheepskin","Quiver of silver-tipped arrows","Wreath of silver wire","Very strong magnet","Bouncy rubber ball","Fish leather satchel","Extremely spicy chilli pepper","Fly preserved in tree sap"]

type BirthStar = {
    sign:string,
    disposition:string
}

const birthStar:Array<BirthStar> = [
    {sign: "Star",   disposition: "Brave / Reckless"},
    {sign: "Wheel",  disposition: "Industrious / Unimaginative"},
    {sign: "Acorn",  disposition: "Inquisitive / Stubborn"},
    {sign: "Storm",  disposition: "Generous / Wrathful"},
    {sign: "Moon",   disposition: "Wise / Mysterious"},
    {sign: "Mother", disposition: "Nurturing / Worrying"}
]

type Coat = {
    colour:string,
    pattern:string
}

const coat:Array<Coat> = [
    {colour: "Chocolate", pattern: "Solid"},
    {colour: "Black",     pattern: "Brindle"},
    {colour: "White",     pattern: "Patchy"},
    {colour: "Tan",       pattern: "Banded"},
    {colour: "Grey",      pattern: "Marbled"},
    {colour: "Blue",      pattern: "Flecked"}
]

const physicalDetails = ["Scarred body","Corpulent body","Skeletal body","Willowy body","Tiny body","Massive body","War paint","Foreign clothes","Elegant clothes","Patched clothes","Fashionable clothes","Unwashed clothes","Missing ear","Lumpy face","Beautiful face","Round face","Delicate face","Elongated face","Groomed fur","Dreadlocks","Dyed fur","Shaved fur","Frizzy fur","Silky fur","Night black eyes","Eye patch","Blood red eyes","Wise eyes","Sharp eyes","Luminous eyes","Cropped tail","Whip-like tail","Tufted tail","Stubby tail","Prehensile tail","Curly tail"]

type Background = {
    hp:number, 
    pips:number, 
    background:string,
    itemA:string,
    itemB:string
}

const background:Array<Background> = [
    {hp: 1, pips: 1, background: "Test subject"       ,    itemA: `Spell: Magic missile`,           itemB: `Lead coat (Heavy armour)`},
    {hp: 1, pips: 2, background: "Kitchen forager"    ,    itemA: `Shield & jerkin (Light armour)`, itemB: `Cookpots`},
    {hp: 1, pips: 3, background: "Cage dweller"       ,    itemA: `Spell: Be understood`,           itemB: `Bottle of milk`},
    {hp: 1, pips: 4, background: "Hedge witch"        ,    itemA: `Spell: Heal`,                    itemB: `Incense stick`},
    {hp: 1, pips: 5, background: "Leatherworker"      ,    itemA: `Shield & jerkin (Light armour)`, itemB: `Shears`},
    {hp: 1, pips: 6, background: "Street tough"       ,    itemA: `Dagger (Light, d6)`,             itemB: `Flask of coffee`},
    {hp: 2, pips: 1, background: "Mendicant priest"   ,    itemA: `Spell: Restore`,                 itemB: `Holy symbol`},
    {hp: 2, pips: 2, background: "Beetleherd"         ,    itemA: `Hireling: Loyal beetle`,         itemB: `Pole, 6"`},
    {hp: 2, pips: 3, background: "Ale brewer"         ,    itemA: `Hireling: Drunken torchbearer`,  itemB: `Small barrel of ale`},
    {hp: 2, pips: 4, background: "Fishermouse"        ,    itemA: `Net`,                            itemB: `Needle (Light, d6)`},
    {hp: 2, pips: 5, background: "Blacksmith"         ,    itemA: `Hammer (Medium, d6/d8)`,         itemB: `Metal file`},
    {hp: 2, pips: 6, background: "Wireworker"         ,    itemA: `Wire, spool`,                    itemB: `Electric lantern`},
    {hp: 3, pips: 1, background: "Woodcutter"         ,    itemA: `Axe (Medium, d6/d8)`,            itemB: `Twine, roll`},
    {hp: 3, pips: 2, background: "Bat cultist"        ,    itemA: `Spell: Darkness`,                itemB: `Bag of bat teeth`},
    {hp: 3, pips: 3, background: "Tin miner"          ,    itemA: `Pickaxe (Medium, d6/d8)`,        itemB: `Lantern`},
    {hp: 3, pips: 4, background: "Trash collector"    ,    itemA: `Trashhook (Heavy, d10)`,         itemB: `Mirror`},
    {hp: 3, pips: 5, background: "Wall rover"         ,    itemA: `Fishhook`,                       itemB: `Thread, spool`},
    {hp: 3, pips: 6, background: "Merchant"           ,    itemA: `Hireling: Pack rat`,             itemB: `20p IOU from a noblemouse`},
    {hp: 4, pips: 1, background: "Raft crew"          ,    itemA: `Hammer (Medium, d6/d8)`,         itemB: `Wooden spikes`},
    {hp: 4, pips: 2, background: "Worm wrangler"      ,    itemA: `Pole, 6"`,                       itemB: `Soap`},
    {hp: 4, pips: 3, background: "Sparrow rider"      ,    itemA: `Fishhook`,                       itemB: `Goggles`},
    {hp: 4, pips: 4, background: "Sewer guide"        ,    itemA: `Metal file`,                     itemB: `Thread, spool`},
    {hp: 4, pips: 5, background: "Prison guard"       ,    itemA: `Chain, 6"`,                      itemB: `Spear (Heavy, d10)`},
    {hp: 4, pips: 6, background: "Fungus farmer"      ,    itemA: `Dried mushroom (as rations)`,    itemB: `Spore mask`},
    {hp: 5, pips: 1, background: "Dam builder"        ,    itemA: `Shovel`,                         itemB: `Wooden spikes`},
    {hp: 5, pips: 2, background: "Cartographer"       ,    itemA: `Quill & ink`,                    itemB: `Compass`},
    {hp: 5, pips: 3, background: "Trap thief"         ,    itemA: `Block of cheese`,                itemB: `Glue`},
    {hp: 5, pips: 4, background: "Vagabond"           ,    itemA: `Tent`,                           itemB: `Treasure map, dubious`},
    {hp: 5, pips: 5, background: "Grain farmer"       ,    itemA: `Spear (Heavy, d10)`,             itemB: `Whistle`},
    {hp: 5, pips: 6, background: "Message runner"     ,    itemA: `Bedroll`,                        itemB: `Documents, sealed`},
    {hp: 6, pips: 1, background: "Troubadour"         ,    itemA: `Musical instrument`,             itemB: `Disguise kit`},
    {hp: 6, pips: 2, background: "Gambler"            ,    itemA: `Set of loaded dice`,             itemB: `Mirror`},
    {hp: 6, pips: 3, background: "Sap tapper"         ,    itemA: `Bucket`,                         itemB: `Wooden spikes`},
    {hp: 6, pips: 4, background: "Bee keeper"         ,    itemA: `Jar of honey`,                   itemB: `Net`},
    {hp: 6, pips: 5, background: "Librarian"          ,    itemA: `Scrap of obscure book`,          itemB: `Quill & ink`},
    {hp: 6, pips: 6, background: "Pauper noblemouse"  ,    itemA: `Felt hat`,                       itemB: `Perfume`}
]

const remarkPhysicalDetails = [
    "Strangers never mention your",
    "Your mother always complimented your",
    "You never try to hide your",
    "There are a lot of memories carried in your"
]

const selfEsteemPhysicalDetails = [
    "but you always felt a bit of shame in them",
    "it made you who you are",
    "and you show it with pride",
    "you don't care what mice think"
]

