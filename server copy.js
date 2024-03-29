import express   from 'express';
const app       = express();

app.use(express.static('public'));
app.set('view engine', 'ejs')

app.get('/',(req, res) => {
    res.render(
        'index',
        {text: 'Enter a command to start, or type "help" to view available commands.'}
    )
})

import newPlayer     from './actions/newPlayer'
import newRoom       from './actions/newRoom'
import newSite       from './actions/newSite'
import newHex        from './actions/newHex'
import newSettlement from './actions/newSettlement'
app.get('/new/player',(req, res) => {
    res.render('index',{text: newPlayer()})
})
app.get('/new/room',(req, res) => {
    res.render('index',{text: newRoom()})
})
app.get('/new/site',(req, res) => {
    res.render('index',{text: newSite()})
})
app.get('/new/hex',(req, res) => {
    res.render('index',{text: newHex()})
})
app.get('/new/settlement',(req, res) => {
    res.render('index',{text: newSettlement()})
})

import {cast, choose} from './actions/cast'
// const spells = require('./tables/spells.js')
app.get('/cast/:spell?/:power?', (req, res) => {
    let spell = req.params.spell
    let power = req.params.power
    let output = ''
    
    if (spell === undefined){
        output = 'What spell did you mean to cast?'
    } else if (choose(spell)===undefined) {
        output = 'That is not a recognised spell. Are you sure you said the right incantation?'
    } else if(power==undefined) {
        output = 'You have to set what power to cast at! (1-3)'
    } else if (power > 3) {
        output = 'You need to give a power level between 1 to 3.'
    } else {
        output = cast(spell, power)
    }

    res.render(
        'index',
        {text:output}
    )
})

import recharge from './actions/recharge'
app.get('/recharge/:spell?/', (req, res) => {
    let spell = req.params.spell
    let output = ''
    
    if (spell === undefined){
        output = 'What spell did you mean to recharge?'
    } else if (choose(spell)===undefined) {
        output = 'That is not a recognised spell. Are you sure you said the right incantation?'
    } else {
        output = recharge(choose(spell))
    }

    res.render(
        'index',
        {text:output}
    )
})

import loot from './actions/loot'
app.get('/loot/:number?', (req, res) => {
    if(req.params.number==undefined) {
        res.render(
            'index',
            {text:loot(2)}
        )    
    } else {
        res.render(
            'index',
            {text:loot(Number(req.params.number))}
        )
    }

})

import weather from './actions/weather'
app.get('/weather/:season?', (req, res) => {
    res.render(
        'index',
        {text: `${weather(req.params.season)}`}
    )

})

// handle other routes if not one of the defined routes (e.g. if mis-typed)
app.use((req, res, next)=> {
    res.render('index', {text: `I don't know what you said, can you say it again?`});
})

// Heroku NEEDS the process.end.PORT part, not 3000
app.listen(
    process.env.PORT || 3000, 
    () => console.log('Listening on port 3000')
);
