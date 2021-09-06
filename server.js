const express   = require('express');
const app       = express();

app.use(express.static('public'));
app.set('view engine', 'ejs')

app.get('/',(req, res) => {
    res.render(
        'index',
        {text: 'Enter a command to start'}
    )
})

const newPlayer = require('./actions/newPlayer.js')
const newRoom = require('./actions/newRoom.js')
app.get('/new/player',(req, res) => {
    res.render('index',{text: newPlayer()})
})
app.get('/new/room',(req, res) => {
    res.render('index',{text: newRoom()})
})




const {cast, choose} = require('./actions/cast.js')
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

const recharge = require('./actions/recharge.js')
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

const loot = require('./actions/loot.js')
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

// Heroku NEEDS the process.end.PORT part, not 3000
app.listen(
    process.env.PORT || 3000, 
    () => console.log('Listening on port 3000')
);
