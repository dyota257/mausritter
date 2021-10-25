// TYPESCRIPT DONE

export {
    randomUp,
    sum,
    roll,
    pick,
    one,
    join,
    capitalise,
    firstLetter,
    picky,
    chance,
    Diceroll
};


function randomUp(n:number):number {
    return Math.ceil(Math.random() * n);
}
function randomDown(n:number):number {
    return Math.floor(Math.random() * n);
}
function sum(array:Array<number>) {
    let result = 0;
    for (var i = 0; i < array.length; i++) {
        result += array[i];
    };
    return result;
}
function picky(table:Array<any>, dice:string) {
    let thisroll:Diceroll = roll(dice);
    let chosenObject = table.filter(function (e) {
        return e.order.indexOf(thisroll.sum) != -1;
    })[0];
    return chosenObject;
}

type  Diceroll = {
    number: number,
    rolls: Array<number>,
    sum: number
}

function roll(xdx:string) {
    var number = Number(xdx.split('d')[0]);
    var sides = Number(xdx.split('d')[1]);
    var rolls = [];
    for (var i = 1; i <= number; i++) {
        var roll_1 = randomUp(sides);
        // console.log(roll);
        rolls.push(roll_1);
    }
    var dice:Diceroll = {
        number: number,
        rolls: rolls,
        sum: sum(rolls)
    };
    return dice;
}
function pick(array:Array<any>) {
    let index = randomDown(array.length);
    let choice = array[index];
    return choice;
}
function firstLetter(string:string):string { return string.slice(0, 1); }
function one(string:string):string {
    let first = firstLetter(string).toLowerCase();
    const vowels = ['a', 'e', 'i', 'o', 'u'];
    let vstart = vowels.indexOf(first) != -1;
    let article:string;
    vstart ? article = 'an' : article = 'a';
    return `${article} ${string}`;
}
function join(sentence:string) {
    var first = firstLetter(sentence).toLowerCase();
    var rest = sentence.slice(1);
    return `${first}${rest}`;
}
function capitalise(string:string) {
    var first = string.slice(0, 1).toUpperCase();
    var rest = string.slice(1).toLowerCase();
    return `${first}${rest}`;
}
function chance(array:Array<any>):boolean {
    var thisroll:Diceroll = roll('1d6');
    console.log(thisroll);
    return array.indexOf(thisroll.sum) != -1;
}