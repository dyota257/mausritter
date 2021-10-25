export {weather}

import {
    spring,
    springEvent,
    summer,
    summerEvent,
    autumn,
    autumnEvent,
    winter,
    winterEvent,
    Season
} from '../tables/weather'

import  {roll, capitalise, pick, picky, join} from '../util/functions'
import  {em } from '../util/styles'

function weather(season:string):string {
    let seasonTable:Array<Season>
    let eventTable:Array<string>
    
    switch (season.toLowerCase()) {
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
    let seasonalEvent:string
    
    if (eventRoll != 5) {
        seasonalEvent = eventTable[eventRoll-1]
    } else {
        seasonalEvent = eventTable[4] + join(eventTable[5])
    }

    return `
        <p>It is ${em(join(todayWeather.weather))} in ${em(season)}. ${todayWeather.heavy ? `The severe weather might ${em('exhaust')} you.` : ''}</p>
        <p>${seasonalEvent}.</p>
    `

    
}