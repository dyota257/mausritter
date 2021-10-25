"use strict";
exports.__esModule = true;
exports.weather = void 0;
var weather_1 = require("../tables/weather");
var functions_1 = require("../util/functions");
var styles_1 = require("../util/styles");
function weather(season) {
    var seasonTable;
    var eventTable;
    switch (season.toLowerCase()) {
        case 'spring':
            seasonTable = weather_1.spring;
            eventTable = weather_1.springEvent;
            break;
        case 'summer':
            seasonTable = weather_1.summer;
            eventTable = weather_1.summerEvent;
            break;
        case 'autumn':
            seasonTable = weather_1.autumn;
            eventTable = weather_1.autumnEvent;
            break;
        case 'winter':
            seasonTable = weather_1.winter;
            eventTable = weather_1.winterEvent;
            break;
    }
    var todayWeather = functions_1.picky(seasonTable, '2d6');
    var eventRoll = functions_1.roll('1d6').sum;
    var seasonalEvent;
    if (eventRoll != 5) {
        seasonalEvent = eventTable[eventRoll - 1];
    }
    else {
        seasonalEvent = eventTable[4] + functions_1.join(eventTable[5]);
    }
    return "\n        <p>It is " + styles_1.em(functions_1.join(todayWeather.weather)) + " in " + styles_1.em(season) + ". " + (todayWeather.heavy ? "The severe weather might " + styles_1.em('exhaust') + " you." : '') + "</p>\n        <p>" + seasonalEvent + ".</p>\n    ";
}
exports.weather = weather;
