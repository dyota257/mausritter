import express   from 'express';
const app       = express();

app.use(express.static('public'));
app.set('view engine', 'ejs')

app.get('/',(req, res) => {
    res.render(
        'index',
        {text: `
            <h1>Mausknecht</h1>
            <p>Digital assistant for <a href='https://losing-games.itch.io/mausritter'>Mausritter</a> that rolls the dice and reads the tables for you.</p>
            <p>Enter a command to start, or type "help" to view available commands.</p>
        `, title: ''}
    )
})


import {about} from './actions/about'
app.get('/about',(req, res) => {
    res.render('index',{text: about(),title: 'About Mausknecht'})
})

import {newPlayer}     from './actions/newPlayer'
import {newRoom}       from './actions/newRoom'
import {newSite}       from './actions/newSite'
import {newHex}        from './actions/newHex'
import {newSettlement} from './actions/newSettlement'

app.get('/new/player',     (req, res) => {res.render('index',{text: newPlayer()    , title:'Your new mouse character' })})
app.get('/new/room',       (req, res) => {res.render('index',{text: newRoom()      , title:'In this room...' })})
app.get('/new/site',       (req, res) => {res.render('index',{text: newSite()      , title:'In this place...' })})
app.get('/new/hex',        (req, res) => {res.render('index',{text: newHex()       , title:'Your adventure continues here...' })})
app.get('/new/settlement', (req, res) => {res.render('index',{text: newSettlement(), title:'A mouse settlement' })})

import {cast, choose} from './actions/cast'
app.get('/cast/:spell?/:power?', (req, res) => {
    let spell:string = req.params.spell
    let power:string = req.params.power
    let output:string
    
    if (spell === undefined){
        output = 'What spell did you mean to cast?'
    } else if (choose(spell)===undefined) {
        output = 'That is not a recognised spell. Are you sure you said the right incantation?'
    } else if(power==undefined) {
        output = 'You have to set what power to cast at! (1-3)'
    } else if (Number(power) > 3) {
        output = 'You need to give a power level between 1 to 3.'
    } else {
        output = cast(spell, power)
    }

    res.render('index',{text:output, title: 'Magic!'})
})

import {recharge} from './actions/recharge'
app.get('/recharge/:spell?/', (req, res) => {
    let spell = req.params.spell
    let output:string
    
    if (spell === undefined){
        output = 'What spell did you mean to recharge?'
    } else if (choose(spell)===undefined) {
        output = 'That is not a recognised spell. Are you sure you said the right incantation?'
    } else {
        output = recharge(choose(spell))
    }

    res.render('index',{text:output, title: 'Recharge'})
})

import {loot} from './actions/loot'
app.get('/loot/:number?', (req, res) => {
    let output:string
    if(req.params.number==undefined) {
        output = loot(2)
    } else {
        output = loot(Number(req.params.number))
    }
    res.render('index',{text:output, title: 'Loot!'})
})

import {weather} from './actions/weather'
app.get('/weather/:season?', (req, res) => {
    let season = req.params.season
    const seasons = ['spring', 'summer', 'autumn', 'winter']
    let output:string
    if (season === undefined || !seasons.includes(season.toLowerCase())) {
        output = `Pick one of the following names of seasons: spring, summer, autumn,winter.`
    } else {
        output = weather(req.params.season)
    }
    res.render('index',{text: `${output}`, title:'Weather outlook'})

})

app.get('/help', (req, res) => {res.render('help')})

// handle other routes if not one of the defined routes (e.g. if mis-typed)
app.use((req, res, next)=> {res.render('index', {text: `I don't know what you said, can you say it again?`, title: 'What was that?'});})

// Heroku NEEDS the process.end.PORT part, not 3000
app.listen(
    process.env.PORT || 3000, 
    () => console.log('Listening on port 3000')
);
