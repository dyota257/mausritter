module.exports = weather

const {
    spring,
    springEvent,
    summer,
    summerEvent,
    autumn,
    autumnEvent,
    winter,
    winterEvent
} = require('../tables/weather.js')

const  {roll, capitalise, pick, picky, join} = require('../util/functions.js')
const  {em } = require('../util/styles.js')

function weather(arg) {
    let season = arg.toLowerCase()
    
    // handle if season isn't one of the following things...
    const seasons = ['spring', 'summer', 'autumn', 'winter', 'fall']

    let seasonTable = {}
    let eventTable = []
    
    switch (season) {
        case 'spring':
            seasonTable = spring    
            eventTable = springEvent
            break;
        case 'summer':
            seasonTable = summer    
            eventTable = summerEvent
            break;
        case 'autumn':
            seasonTable = autumn    
            eventTable = autumnEvent
            break;
        case 'winter':
            seasonTable = winter    
            eventTable = winterEvent
            break;
    }

    let todayWeather = picky(seasonTable, '2d6');
    let eventRoll = roll('1d6').sum
    let seasonalEvent = ''
    
    if (eventRoll != 5) {
        seasonalEvent = eventTable[eventRoll-1]
    } else {
        seasonalEvent = eventTable[4] + join(eventTable[5])
    }

    if (seasons.includes(season.toLowerCase())) {
        output = `<p>It is ${em(join(todayWeather.weather))} in ${em(season)}. ${todayWeather.heavy ? `The severe weather might ${em('exhaust')} you.` : ''}</p>
        <p>${seasonalEvent}.</p>`
    } else {
        output = `That is not a season! <br> Pick one of the following names of seasons: ${em('spring, summer, autumn, fall, winter')}.`
    }
    
    return output
}