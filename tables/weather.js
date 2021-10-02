// spring
const spring = [
    {order: [2],         weather: 'A rain storm',        heavy: true},
    {order: [3, 4, 5],   weather: 'Drizzling',           heavy: false},
    {order: [6, 7, 8],   weather: 'Overcast',          heavy: false},
    {order: [9, 10, 11], weather: 'Bright and sunny',  heavy: false},
    {order: [12],        weather: 'Clear and warm',    heavy: false}
]

const springEvent = [
    'Flooding washes away an important landmark',
    'Mother bird, very protective of her eggs',
    'Merchant’s cart sunken in a pool of mud',
    'Migrating butterflies, hungry for nectar',
    'Mice weaving wreathes of flowers to prepare for...',
    'Wedding festival, a joyous procession'
]

// summer
const summer = [
    {order: [2],         weather: 'A thunder storm',    heavy: true},
    {order: [3, 4, 5],   weather: 'Very hot',         heavy: true},
    {order: [6, 7, 8],   weather: 'Clear, hot',       heavy: false},
    {order: [9, 10, 11], weather: 'Pleasantly sunny', heavy: false},
    {order: [12],        weather: 'Beautifully warm', heavy: false}
]

const summerEvent = [
    'Heat wave makes travel exhausting for next week',
    'Baby bird, fallen from nest',
    'Pleasant and refreshing sun shower',
    'Swarm of locusts destroy a settlement’s crops',
    'Mice building elaborate costumes to prepare for...',
    'Midsummer festival, a wild dance'
]

// autumn
const autumn = [
    {order: [2],         weather: 'Wild winds',      heavy: true},
    {order: [3, 4, 5],   weather: 'Heavy rain',      heavy: true},
    {order: [6, 7, 8],   weather: 'Cool',            heavy: false},
    {order: [9, 10, 11], weather: 'Patchy rain',     heavy: false},
    {order: [12],        weather: 'Clear and crisp', heavy: false}
]

const autumnEvent = [
    'An important tree is felled by wild winds',
    'Mother bird, distraught from children leaving home',
    'A large patch of mushrooms emerges overnight',
    'Rumors that truffles are growing nearby',
    'Mice carrying bundles of grain and baking pies for...',
    'Harvest festival, a grand feast'
]

// winter
const winter = [
    {order: [2],         weather: 'A snow storm',      heavy: true},
    {order: [3, 4, 5],   weather: 'Sleet',           heavy: true},
    {order: [6, 7, 8],   weather: 'Bitter cold',     heavy: true},
    {order: [9, 10, 11], weather: 'Overcast',        heavy: false},
    {order: [12],        weather: 'Clear and crisp', heavy: false}
]

const winterEvent = [
    'Snow prevents above-ground movement for a week',
    'Bird with a broken wing, old and grey',
    'Lost migrating duck, separated by the flock',
    'Travellers disappear in a fast moving storm',
    'Mice building an effigy of old Winter to prepare for...',
    'Midwinter festival, a magnificent bonfire'
]

module.exports = {
    spring,
    springEvent,
    summer,
    summerEvent,
    autumn,
    autumnEvent,
    winter,
    winterEvent
}