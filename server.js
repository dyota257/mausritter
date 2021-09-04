const express   = require('express');
const app       = express();

const makeNewMouse = require('./actions/makeNewMouse.js')
app.get('/',(req, res) => {
    res.send(makeNewMouse())
})

const cast = require('./actions/cast.js')
app.get('/cast/:spell/:power', (req, res) => {
    res.send(cast(req.params.spell, req.params.power))
})

const loot = require('./actions/loot.js')
app.get('/loot/:number', (req, res) => {
    res.send(loot(Number(req.params.number)))
})

// Heroku NEEDS the process.end.PORT part, not 3000
app.listen(
    process.env.PORT || 3000, 
    () => console.log('Listening on port 3000')
);
