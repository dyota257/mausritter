module.exports = {
    randomUp, 
    sum,
    roll,
    pick,
    one,
    join,
    capitalise
};

function randomUp(n) {
    return Math.ceil(Math.random() * n)
}

function sum(array) {
    let result = 0;
    for (var i=0; i<array.length; i++) {
        result += array[i]
    };
    return result;
}

function roll(xdx) {
    
    let number = Number(xdx.split('d')[0]);
    let sides = Number(xdx.split('d')[1]);
    let rolls = [];
  
  for (var i=1; i <= number; i++) {
      roll = randomUp(sides);
      // console.log(roll);
        rolls.push(roll);
  }
  
  let dice = {
      number:number,
      rolls: rolls,
      sum: sum(rolls),
  }

  return dice
}

function pick (array) {
  let index  = randomUp(array.length - 1);
  let choice = array[index];
  return choice;
}

function firstLetter(string) {return string.slice(0,1)}

function one(string) {
    let first = firstLetter(string).toLowerCase()
    const vowels = ['a', 'e', 'i', 'o', 'u']
    let vstart = vowels.indexOf(first)!=-1

    vstart ? article = 'an' : article = 'a'

    return (`${article} ${string}`)
}

function join(sentence) {
    let first = firstLetter(sentence).toLowerCase()
    let rest = sentence.slice(1,)
    return `${first}${rest}` 
}


function capitalise(string) {
    let first = string.slice(0,1).toUpperCase()
    let rest = string.slice(1,).toLowerCase()

    return `${first}${rest}`
}