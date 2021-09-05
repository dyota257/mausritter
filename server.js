const express   = require('express');
const app       = express();

app.use(express.static('public'));
app.set('view engine', 'ejs')

const makeNewMouse = require('./actions/makeNewMouse.js')
app.get('/',(req, res) => {
    res.render(
        'index',
        {text: makeNewMouse()}
    )
})

const cast = require('./actions/cast.js')
app.get('/cast/:spell/:power', (req, res) => {
    res.render(
        'index',
        {text:cast(req.params.spell, req.params.power)}
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
