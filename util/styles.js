module.exports = {figure,good,em,bad}

// for player inputs
function figure(text) {return `<span class="nes-text is-primary">${text}</span>`}

// for healing numbers
function good(text) {return `<span class="nes-text is-success">${text}</span>`}

// for everything else variable
function em(text) {return `<span class="nes-text is-warning">${text}</span>`}

// for damage numbers
function bad(text) {return `<span class="nes-text is-error">${text}</span>`}

/* 
    const {dice,good,em,bad} = require('../util/styles.js')
*/