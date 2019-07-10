'use strict';


// 1) Object initializers and methods
const loaf = {
  flour: 300,
  water: 210,
  hydration: function() {
    return (loaf.water / loaf.flour * 100);
  }
}

console.log(loaf.hydration());

// 2) Iterating over an object's properties

const baz = {
  foo: 'foo',
  bar: 'bar',
  fum: 'fum',
  quux: 'quux',
  spam: 'spam'
}

// why does it only work without a parameter?

function iteration(baz) {
  for (let key in baz) {
    let value = baz[key];
    console.log(`${key}: ${value}`);
  }
}

iteration(baz);

// 3) Arrays in objects
const hobbitDiet = {
  meals: ['breakfast', 
          'second breakfast', 
          'elevenses', 
          'lunch', 
          'afternoon tea', 
          'dinner', 
          'supper']
}

console.log(hobbitDiet.meals[3]);


// 4) Arrays of objects

let ironman = {
  name: 'Stark',
  jobTitle: 'Engineer'
}

let thor = {
  name: 'Odinson',
  jobTitle: 'Guardian of the Galaxy'
}

let captainAmerica = {
  name: 'Rogers',
  jobTitle: 'Soldier'
}

let avengers = [ironman, thor, captainAmerica];

function teamInfo() {
  for (let i = 0; i < avengers.length; i++) {
    for (let key in avengers[i])
      console.log(`${avengers[i][key]}`);
  }
}

teamInfo();

// 5) Properties that aren't there

// 6) Cracking the code

// 7) Factory Functions with LOTR

// 8) BONUS: A Database Search  

// 8a) BONUS II: A Database Method 

