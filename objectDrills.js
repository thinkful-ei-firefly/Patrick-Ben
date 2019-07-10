'use strict';

// 1) Object initializers and methods
const loaf = {
  flour: 300,
  water: 210,
  hydration: function() {
    return (loaf.water / loaf.flour) * 100;
  }
};

console.log(loaf.hydration());

// 2) Iterating over an object's properties

const baz = {
  foo: 'foo',
  bar: 'bar',
  fum: 'fum',
  quux: 'quux',
  spam: 'spam'
};

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
  meals: [
    'breakfast',
    'second breakfast',
    'elevenses',
    'lunch',
    'afternoon tea',
    'dinner',
    'supper'
  ]
};

console.log(hobbitDiet.meals[3]);

// 4) Arrays of objects

let ironman = {
  name: 'Stark',
  jobTitle: 'Engineer'
};

let thor = {
  name: 'Odinson',
  jobTitle: 'Guardian of the Galaxy'
};

let captainAmerica = {
  name: 'Rogers',
  jobTitle: 'Soldier'
};

let avengers = [ironman, thor, captainAmerica];

function teamInfo(arr) {
  for (let i = 0; i < arr.length; i++) {
    for (let key in arr[i]) {
      console.log(`${key}: ${avengers[i][key]}`);
    }
  }
}

teamInfo(avengers);

// 5) Properties that aren't there

let ironman2 = {
  name: 'Stark',
  jobTitle: 'Engineer'
};

let thor2 = {
  name: 'Odinson',
  jobTitle: 'Guardian of the Galaxy',
  boss: 'Stark'
};

let captainAmerica2 = {
  name: 'Rogers',
  jobTitle: 'Soldier',
  boss: 'Stark'
};

let avengers2 = [ironman2, thor2, captainAmerica2];

function teamInfo2(arr) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i]['boss']) {
      console.log(
        `${arr[i]['jobTitle']} ${arr[i]['name']} reports to ${arr[i]['boss']}`);
    } else {
      console.log(`${arr[i]['jobTitle']} ${arr[i]['name']} doesn't report to anybody.`);
    }
  }
}

teamInfo2(avengers2);

// 6) Cracking the code

const cipher = {
  a: 1,
  b: 2,
  c: 3,
  d: 4
};

function decode(word) {
  if (cipher[word[0]]) {
    return word[cipher[word[0]]];
  } else {
    return ' ';
  }
}

function decodeWords(str) {
  const arr = str.split(' ');

  for (let i = 0; i < arr.length; i++) {
    arr[i] = decode(arr[i]);
  }
  return arr.join('');
}

const input = 'craft block argon meter bells brown croon droop';


console.log(decodeWords(input));

// 7) Factory Functions with LOTR

function createCharacter(name, nickname, race, origin, attack, defense) {
  return {
    name,
    nickname,
    race,
    origin,
    attack,
    defense,
    describe: function() {
      return `${this.name} is a ${this.race} from ${this.origin}`
    },
    evaluateFight: function(character) {
      let damage = this.attack - character.defense;
      let rDamage = character.attack - this.defense;
        if (rDamage < 0) {
          rDamage = 0;
        }
        if (damage < 0) {
          damage = 0;
        }
      return `Your opponent takes ${damage} damage and you receive ${rDamage} damage`
    }
};

const characters = [
  createCharacter('gandalf the white','gandalf', 'Wizard', 'Middle Earth', 10, 6)
  
]


let newChar = {
  Name: 'Arwen Undomiel',
  Nickname: 'arwen',
  Race: 'Half-Elf',
  Origin: 'Rivendell',
  Attack: 7,
  Defense: 5,
  describe: function() {
    return `${this.Name} is a ${this.Race} from ${this.Origin}`;
  }
  evaluateFight: function() {
    return `Your opponent takes ${x} damage and you receive ${y} damage`;
}

// 8) BONUS: A Database Search

// 8a) BONUS II: A Database Method
