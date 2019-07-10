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

function createCharacter(name, nickname, race, origin, attack, defense, weapon) {
  return {
    name,
    nickname,
    race,
    origin,
    attack,
    defense,
    weapon,
    describe: function() {
      if (this.weapon === undefined) {
        console.log(`${this.name} is a ${this.race} from ${this.origin}.`);
      } else {
        console.log(`${this.name} is a ${this.race} from ${this.origin} who uses a ${weapon}.`);
      }
    },
    evaluateFight: function(opponent) {
      let oppDamage = this.attack - opponent.defense;
      let thisDamage = opponent.attack - this.defense;
      if (oppDamage < 0) {
        oppDamage = 0;
      }
      if (thisDamage < 0) {
        thisDamage = 0;
      }
      return `Your opponent takes ${oppDamage} and you receive ${thisDamage}.`;
    }
  };
}

const characters = [
  createCharacter(
    'Gandalf the White',
    'gandalf',
    'Wizard',
    'Middle Earth',
    10,
    6,
    'wizard staff'
  ),
  createCharacter('Bilbo Baggins', 'bilbo', 'Hobbit', 'The Shire', 2, 1, 'the Ring'),
  createCharacter('Frodo Baggins', 'frodo', 'Hobbit', 'The Shire', 3, 2, 'String and Barrow Blade'),
  createCharacter(
    'Aragorn son of Arathorn',
    'aragorn',
    'Man',
    'Dunnedain',
    6,
    8
  ),
  createCharacter('Legolas', 'legolas', 'Elf', 'Woodland Realm', 8, 5)
];

characters.push(createCharacter('Arwen Undomiel', 'arwen', 'Half-Elf', 'Rivendell', 7, 5));

characters.find(function(item) {
  if (item['nickname'] === 'aragorn') {
    item.describe();
  }
});

const filteredCharacters = characters.filter(char => char['race'] === 'Hobbit');
console.log(JSON.stringify(filteredCharacters));

const filteredCharacters2 = characters.filter(char => char['attack'] > 5); 
console.log(JSON.stringify(filteredCharacters2));

// 8) BONUS: A Database Search

const HEROES = [
  { id: 1, name: 'Captain America', squad: 'Avengers' },
  { id: 2, name: 'Iron Man', squad: 'Avengers' },
  { id: 3, name: 'Spiderman', squad: 'Avengers' },
  { id: 4, name: 'Superman', squad: 'Justice League' },
  { id: 5, name: 'Wonder Woman', squad: 'Justice League' },
  { id: 6, name: 'Aquaman', squad: 'Justice League' },
  { id: 7, name: 'Hulk', squad: 'Avengers' },
];

function findOne(arr, query) {
  const result = arr.filter(element => {
    for (const key in query) {
      if (!(key in element) || element[key] !== query[key]) {
        return false;
      }
    }
    return true;
  });
  if (!result[0]) {
    return null;
  } else {
    return result[0];
  }
}

console.log(findOne(HEROES, { id: 1 }));
console.log(findOne(HEROES, { id: 10 }));
console.log(findOne(HEROES, { id: 2, name: 'Aquaman' }));
console.log(findOne(HEROES, { id: 5, squad: 'Justice League' }));
console.log(findOne(HEROES, { squad: 'Justice League' }));

// 8a) BONUS II: A Database Method

const Database = {
  store: {
    heroes: [
      { id: 1, name: 'Captain America', squad: 'Avengers' },
      { id: 2, name: 'Iron Man', squad: 'Avengers' },
      { id: 3, name: 'Spiderman', squad: 'Avengers' },
      { id: 4, name: 'Superman', squad: 'Justice League' },
      { id: 5, name: 'Wonder Woman', squad: 'Justice League' },
      { id: 6, name: 'Aquaman', squad: 'Justice League' },
      { id: 7, name: 'Hulk', squad: 'Avengers' }
    ]
  },
  findOne: function(query) {
    const result = this.store.heroes.filter(element => {
      for (const key in query) {
        if (!(key in element) || element[key] !== query[key]) {
          return false;
        }
      }
      return true;
    });
    if (!result[0]) {
      return null;
    } else {
      return result[0];
    }
  }
};

console.log(Database.findOne({ squad: 'Justice League' }));