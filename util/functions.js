"use strict";
// TYPESCRIPT DONE
exports.__esModule = true;
exports.chance = exports.picky = exports.firstLetter = exports.capitalise = exports.join = exports.one = exports.pick = exports.roll = exports.sum = exports.randomUp = void 0;
function randomUp(n) {
    return Math.ceil(Math.random() * n);
}
exports.randomUp = randomUp;
function randomDown(n) {
    return Math.floor(Math.random() * n);
}
function sum(array) {
    var result = 0;
    for (var i = 0; i < array.length; i++) {
        result += array[i];
    }
    ;
    return result;
}
exports.sum = sum;
function picky(table, dice) {
    var thisroll = roll(dice);
    var chosenObject = table.filter(function (e) {
        return e.order.indexOf(thisroll.sum) != -1;
    })[0];
    return chosenObject;
}
exports.picky = picky;
function roll(xdx) {
    var number = Number(xdx.split('d')[0]);
    var sides = Number(xdx.split('d')[1]);
    var rolls = [];
    for (var i = 1; i <= number; i++) {
        var roll_1 = randomUp(sides);
        // console.log(roll);
        rolls.push(roll_1);
    }
    var dice = {
        number: number,
        rolls: rolls,
        sum: sum(rolls)
    };
    return dice;
}
exports.roll = roll;
function pick(array) {
    var index = randomDown(array.length);
    var choice = array[index];
    return choice;
}
exports.pick = pick;
function firstLetter(string) { return string.slice(0, 1); }
exports.firstLetter = firstLetter;
function one(string) {
    var first = firstLetter(string).toLowerCase();
    var vowels = ['a', 'e', 'i', 'o', 'u'];
    var vstart = vowels.indexOf(first) != -1;
    var article;
    vstart ? article = 'an' : article = 'a';
    return article + " " + string;
}
exports.one = one;
function join(sentence) {
    var first = firstLetter(sentence).toLowerCase();
    var rest = sentence.slice(1);
    return "" + first + rest;
}
exports.join = join;
function capitalise(string) {
    var first = string.slice(0, 1).toUpperCase();
    var rest = string.slice(1).toLowerCase();
    return "" + first + rest;
}
exports.capitalise = capitalise;
function chance(array) {
    var thisroll = roll('1d6');
    console.log(thisroll);
    return array.indexOf(thisroll.sum) != -1;
}
exports.chance = chance;
