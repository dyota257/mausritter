export {inhabitants,size,features,governance,industries,events,nameStart,nameEnd,tavernStart,tavernEnd,tavernSpecialty}

const inhabitants = [
    `Shave elaborate patterns in their fur`,
    `Intoxicated by strange plants`,
    `Wary of doing business with outsiders`,
    `Curious for news from afar`,
    `Believe grooming their fur is bad luck`,
    `Wear finely embroidered clothes`,
    `Brew honey-mead, flavoured with pungent herbs`,
    `Cover their faces with long hoods`,
    `Impoverished by a cat lord’s tithes`,
    `Ceremonially crop their tails`,
    `Brave hunters of large beasts`,
    `All descended from single matriarch`,
    `Bake delicious berry pies`,
    `Lab escapees, naive about the world`,
    `Spend their days lazing by a stream`,
    `Long-standing blood feud with another settlement`,
    `Dig grand tunnels, overseen by the guild`,
    `Wear large, wide-brimmed hats`,
    `Have laws and customs confusing to outsiders`,
    `On friendly terms with a predator`,
]

//Roll 2d6 and use the lowest value.
const size = [
    `Farm/manor (1-3 families)`,
    `Crossroads (3-5 families)`,
    `Hamlet (50-150 mice)`,
    `Village (150-300 mice)`,
    `Town (300-1000 mice)`,
    `City (1000+ mice)`,
]

// What feature sets this settlement apart? Cities have two
const features = [
    `Maze of defensive, trap-filled tunnels`,
    `Exceedingly comfortable, well-appointed inn`,
    `Shrine carved of black wood`,
    `Meditative mushroom garden`,
    `Cow skull, repurposed as a guildhouse`,
    `Mess of closely packed shanties`,
    `Neat rows of hanging wooden houses`,
    `Ornate gate, guarded by statues`,
    `Secret bat cult temple`,
    `Beetle racing rink`,
    `Storehouse, stocked with preserves`,
    `Hidden riverboat dock`,
    `Crumbling marble palace, built by ancient mice`,
    `Scavenged human machine, working`,
    `Wooden bridge connects the settlement`,
    `Unnervingly tall, twisting tower`,
    `Beautiful flower garden`,
    `Pigeon rider’s roost`,
    `Overgrown statue of an ancient hero`,
    `Spiral stairwell, leading deep underground`,
]

// Roll d6 + Settlement size (1 for Farm, 6 for City)
const governance = [
    {order: [2,3], leader: `Guided by village elders`},
    {order: [4,5], leader: `Administered by a knight or lower-caste lord`},
    {order: [6,7], leader: `Organised by a guild committee`},
    {order: [8,9], leader: `Free settlement, governed by council of burghermice`},
    {order: [10,11], leader: `House of an upper caste noblemouse`},
    {order: [12], leader: `Seat of baronial power`},
]

// What trade do the mice work? Towns and cities have two.
const industries = [
    `Farmers, tending to towering crops`,
    `Woodcutters, with saws and harnesses`,
    `Rough and scarred fishermice, with nets and rafts`,
    `Dark and musty mushroom farm`,
    `Grains drying on every flat surface`,
    `Pungent cheese, cured for years`,
    `Gardens of rare herbs. Drying racks are guarded`,
    `Hive of bees and their veiled keepers`,
    `Merchants and traders, often in need of guards`,
    `Stonemasons, working a nearby quarry`,
    `Flour mill, driven by a large water-wheel`,
    `Deep mine for iron, silver or tin`,
    `Keep silkworms and weave fine cloth`,
    `Expert explorers of caves and tunnels`,
    `Kiln-fired pottery, glazed in cheerful colours`,
    `Wool mill, draped in bright cloth`,
    `Excellent school, rowdy pupils`,
    `Bustling, well-stocked market`,
    `Smelly scavenged trash pile, carefully picked over`,
    `Beautiful furniture of carved and polished wood`,
]

const events = [
    `Disaster, everyone packing to leave`,
    `Wedding, streets decked in flowers`,
    `Preparing for grand seasonal feast`,
    `An illness has struck`,
    `Storehouse has been plundered by insects`,
    `Market day, farmers flock to the settlement`,
    `Mice are at each other’s throats`,
    `Warband forming to defeat a beast`,
    `Several children have gone missing`,
    `Noblemouse makes a frivolous demand`,
    `Traveling theatre troupe arrives`,
    `Funeral, streets thick with smoke`,
    `Conman whips up an irrational scheme`,
    `Pet beetle gone mad, attacking mice`,
    `Faerie emissary with an impossible request`,
    `Strangely quick-growing plant nearby`,
    `Valuable heirloom has a been stolen`,
    `Cat lord demands a heavy tithe`,
    `Coming of age ceremony for the young mice`,
    `Wizard tower arrives on tortoise-back`,
]

const nameStart = [`Oaks`,`Berry`,`Willow`,`Stump`,`Pine`,`Moon`,`Green`,`Black`,`Stone`,`Hill`,`Fig`,`Apple`,`Swamp`,`Owl`,`Fox`,`Acorn`,`Copper`,`Robber`,`Colby`,`Drain`,`Rose`,`Copper`,`Friend`,`Trunk`,]

const nameEnd = [`thorpe`,`ville`,`mill`,`dale`,`grove`,`town`,`vale`,`seed`,`ashe`,`bush`,`stitch`,`shine`,`stand`,`hill`,`tower`,`farm`,`bridge`,`gate`,`creek`,`pond`,`nest`,`ford`,`grave`,`burn`,]

const tavernStart = [`White`,`Green`,`Black`,`Red`,`Silver`,`Crooked`,`Friendly`,`Hidden`,`Wiley`,`Glass`,`Thorny`,`Broken`,]

const tavernEnd = [`Beetle`,`Fox`,`Wedge`,`Kernel`,`Rat`,`Cheese`,`Eagle`,`Worm`,`Bee`,`Lantern`,`Rose`,`Knight`,]

const tavernSpecialty = [`Spiced baked carrot`,`Boiled worm broth`,`Blackberry pie`,`Pungent aged cheese`,`Barley porridge`,`Thick river-fish steak`,`Baked apple`,`Fried, crumbed insect legs`,`Fresh buttered bread`,`Scavenged candy`,`Honey-roasted seeds`,`Mushroom stew`,]