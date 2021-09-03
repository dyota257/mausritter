module.exports = {
    randomUp, 
    sum,
    roll,
    pick
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