"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const app = express_1.default();
app.use(express_1.default.static('public'));
app.set('view engine', 'ejs');
app.get('/', (req, res) => {
    res.render('index', { text: `
            <h1>Mausknecht</h1>
            <p>Digital assistant for <a href='https://losing-games.itch.io/mausritter'>Mausritter</a> that rolls the dice and reads the tables for you.</p>
            <p>Enter a command to start, or type "help" to view available commands.</p>
        `, title: '' });
});
const about_1 = require("./actions/about");
app.get('/about', (req, res) => {
    res.render('index', { text: about_1.about(), title: 'About Mausknecht' });
});
const newPlayer_1 = require("./actions/newPlayer");
const newRoom_1 = require("./actions/newRoom");
const newSite_1 = require("./actions/newSite");
const newHex_1 = require("./actions/newHex");
const newSettlement_1 = require("./actions/newSettlement");
app.get('/new/player', (req, res) => { res.render('index', { text: newPlayer_1.newPlayer(), title: 'Your new mouse character' }); });
app.get('/new/room', (req, res) => { res.render('index', { text: newRoom_1.newRoom(), title: 'In this room...' }); });
app.get('/new/site', (req, res) => { res.render('index', { text: newSite_1.newSite(), title: 'In this place...' }); });
app.get('/new/hex', (req, res) => { res.render('index', { text: newHex_1.newHex(), title: 'Your adventure continues here...' }); });
app.get('/new/settlement', (req, res) => { res.render('index', { text: newSettlement_1.newSettlement(), title: 'A mouse settlement' }); });
const cast_1 = require("./actions/cast");
app.get('/cast/:spell?/:power?', (req, res) => {
    let spell = req.params.spell;
    let power = req.params.power;
    let output;
    if (spell === undefined) {
        output = 'What spell did you mean to cast?';
    }
    else if (cast_1.choose(spell) === undefined) {
        output = 'That is not a recognised spell. Are you sure you said the right incantation?';
    }
    else if (power == undefined) {
        output = 'You have to set what power to cast at! (1-3)';
    }
    else if (Number(power) > 3) {
        output = 'You need to give a power level between 1 to 3.';
    }
    else {
        output = cast_1.cast(spell, power);
    }
    res.render('index', { text: output, title: 'Magic!' });
});
const recharge_1 = require("./actions/recharge");
app.get('/recharge/:spell?/', (req, res) => {
    let spell = req.params.spell;
    let output;
    if (spell === undefined) {
        output = 'What spell did you mean to recharge?';
    }
    else if (cast_1.choose(spell) === undefined) {
        output = 'That is not a recognised spell. Are you sure you said the right incantation?';
    }
    else {
        output = recharge_1.recharge(cast_1.choose(spell));
    }
    res.render('index', { text: output, title: 'Recharge' });
});
const loot_1 = require("./actions/loot");
app.get('/loot/:number?', (req, res) => {
    let output;
    if (req.params.number == undefined) {
        output = loot_1.loot(2);
    }
    else {
        output = loot_1.loot(Number(req.params.number));
    }
    res.render('index', { text: output, title: 'Loot!' });
});
const weather_1 = require("./actions/weather");
app.get('/weather/:season?', (req, res) => {
    let season = req.params.season;
    const seasons = ['spring', 'summer', 'autumn', 'winter'];
    let output;
    if (season === undefined || !seasons.includes(season.toLowerCase())) {
        output = `Pick one of the following names of seasons: spring, summer, autumn,winter.`;
    }
    else {
        output = weather_1.weather(req.params.season);
    }
    res.render('index', { text: `${output}`, title: 'Weather outlook' });
});
app.get('/help', (req, res) => { res.render('help'); });
// handle other routes if not one of the defined routes (e.g. if mis-typed)
app.use((req, res, next) => { res.render('index', { text: `I don't know what you said, can you say it again?`, title: 'What was that?' }); });
// Heroku NEEDS the process.end.PORT part, not 3000
app.listen(process.env.PORT || 3000, () => console.log('Listening on port 3000'));
