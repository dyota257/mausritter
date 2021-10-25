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
    res.render('index', { text: 'Enter a command to start, or type "help" to view available commands.' });
});
const newPlayer_1 = require("./actions/newPlayer");
const newRoom_1 = require("./actions/newRoom");
const newSite_1 = require("./actions/newSite");
const newHex_1 = require("./actions/newHex");
const newSettlement_1 = require("./actions/newSettlement");
app.get('/new/player', (req, res) => { res.render('index', { text: newPlayer_1.newPlayer() }); });
app.get('/new/room', (req, res) => { res.render('index', { text: newRoom_1.newRoom() }); });
app.get('/new/site', (req, res) => { res.render('index', { text: newSite_1.newSite() }); });
app.get('/new/hex', (req, res) => { res.render('index', { text: newHex_1.newHex() }); });
app.get('/new/settlement', (req, res) => { res.render('index', { text: newSettlement_1.newSettlement() }); });
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
    res.render('index', { text: output });
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
    res.render('index', { text: output });
});
const loot_1 = require("./actions/loot");
app.get('/loot/:number?', (req, res) => {
    if (req.params.number == undefined) {
        res.render('index', { text: loot_1.loot(2) });
    }
    else {
        res.render('index', { text: loot_1.loot(Number(req.params.number)) });
    }
});
const weather_1 = require("./actions/weather");
app.get('/weather/:season?', (req, res) => {
    let season = req.params.season;
    const seasons = ['spring', 'summer', 'autumn', 'winter'];
    let output;
    if (seasons.includes(season.toLowerCase())) {
        output = weather_1.weather(req.params.season);
    }
    else {
        output = `Pick one of the following names of seasons: spring, summer, autumn,winter}.`;
    }
    res.render('index', { text: `${output}` });
});
app.get('/help', (req, res) => {
    res.render('help');
});
// handle other routes if not one of the defined routes (e.g. if mis-typed)
app.use((req, res, next) => {
    res.render('index', { text: `I don't know what you said, can you say it again?` });
});
// Heroku NEEDS the process.end.PORT part, not 3000
app.listen(process.env.PORT || 3000, () => console.log('Listening on port 3000'));
