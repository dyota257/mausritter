"use strict";
exports.__esModule = true;
exports.bad = exports.em = exports.good = exports.figure = void 0;
// for player inputs
function figure(text) { return "<span class=\"nes-text is-primary\">" + text + "</span>"; }
exports.figure = figure;
// for healing numbers
function good(text) { return "<span class=\"nes-text is-success\">" + text + "</span>"; }
exports.good = good;
// for everything else variable
function em(text) { return "<span class=\"nes-text is-warning\">" + text + "</span>"; }
exports.em = em;
// for damage numbers
function bad(text) { return "<span class=\"nes-text is-error\">" + text + "</span>"; }
exports.bad = bad;
/*
    const {dice,good,em,bad} = require('../util/styles.js')
*/ 
