//35-1 Module introduction Different way to Create Object
//1. using object literal
const student = { name: 'shakib', job: 'cricketer' };
//2. constractor
const person = new Object();
person.name = 'shahbaj';

//3.
//const human = object.Create(null);
const human = Object.create(student);
//console.log(human.job); cricketer

//4. class = (syntactic sugar)
class People {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
}
const peop = new People('naim', 22);
//console.log(peop); People { name: 'naim', age: 22 }

//5. function
function Manush(name) {
  this.name = name;
}
const man = new Manush('kader');
//console.log(man); Manush { name: 'kader' }


//35-2 Object method property review
const student2 = {
  id: 101,
  money: 5000,
  name: 'Nisarul',
  major: 'mathematics',
  isRich: false,
  subjects: ['english', 'economics', 'math 101', 'calculus'],
  bestFriend: {
    name: 'kudus',
    major: 'mathematics'
  },
  takeExam: function () {
    //console.log(this.name, 'taking exam') Nisarul taking exam
  },
  treatDey: function (expense, boksis) {
    this.money = this.money - expense - boksis;
    return this.money;
  }
}

student2.takeExam();
const remaining1 = student2.treatDey(900, 100);
const remaining2 = student2.treatDey(500, 50);
//console.log(remaining2); 3450


//35-3 Keys, values, entities, delete, seal, freeze
const bottle = { color: 'yellow', hold: 'water', price: 50, isCleaned: true };
//getting all properties names
const keys = Object.keys(bottle);
console.log(keys); //[ 'color', 'hold', 'price', 'isCleaned' ]
//get all values
const values = Object.values(bottle);
console.log(values); //[ 'yellow', 'water', 50, true ]
const pairs = Object.entries(bottle);
console.log(pairs);
/* OUTPUT
[
  [ 'color', 'yellow' ],
  [ 'hold', 'water' ],
  [ 'price', 50 ],
  [ 'isCleaned', true ]
] */

//delete
delete bottle.isCleaned;
console.log(bottle); //{ color: 'yellow', hold: 'water', price: 50 }
//seal
Object.seal(bottle);
delete bottle.color;
console.log(bottle); //{ color: 'yellow', hold: 'water', price: 50 }
//freeze
Object.freeze(bottle);
bottle.price = 100;
console.log(bottle); //{ color: 'yellow', hold: 'water', price: 50 }


//35-4 Loop through an object using for in, for of, object entries
/*
for(let i = 0; i < 10; i++){}
for(const num of numbers){} //array
for(const prop in students){} //object
*/
for (const prop in bottle) {
  console.log(prop, bottle[prop]);
  /* OUTPUT
  color yellow
  hold water
  price 50 */
}


//35-5 (advanced) Compare objects, referential integrity
const first = { a: 1, b: 2 };
const second = { b: 2, a: 1 };
const third = first;

if (JSON.stringify(first) === JSON.stringify(second)) {
  console.log('objects are equal');
} else {
  console.log('objects are not equal');
}
// output: objects are not equal

function compareObjects(obj1, obj2) {
  if (Object.keys(obj1).length !== Object.keys(obj2).length) {
    return false;
  }
  for (const prop in obj1) {
    if (obj1[prop] !== obj2[prop]) {
      return false;
    }
  }
  return true;
}
const isEqual = compareObjects(first, second);
console.log(isEqual); //true


//35-6 (advanced) Use bind to borrow method from another object
const kibria = {
  id: 101,
  money: 5000,
  name: 'Nisarul',
  treatDey: function (expense) {
    this.money = this.money - expense;
    console.log(this);
    return this.money;
  }
}
const heroBalam = {
  id: 102,
  money: 6000,
  name: 'Hero Balam'
}
const GolamKebria = {
  id: 103,
  money: 8000,
  name: 'Golam Kebria'
}
kibria.treatDey(100); //{  id: 101,  money: 4900,  name: 'Nisarul',  treatDey: [Function: treatDey]}
const heroTreatDey = kibria.treatDey.bind(heroBalam);
heroTreatDey(500); //{ id: 102, money: 5500, name: 'Hero Balam' }
const golamTreatDey = kibria.treatDey.bind(GolamKebria);
golamTreatDey(2000); //{ id: 103, money: 6000, name: 'Golam Kebria' }


//35-7 (advanced) Difference between bind, call and apply
const kibria2 = {
  id: 101,
  money: 5000,
  name: 'Nisarul',
  treatDey: function (expense) {
    this.money = this.money - expense;
    console.log(this);
    return this.money;
  }
}
const heroBalam2 = {
  id: 102,
  money: 6000,
  name: 'Hero Balam'
}
const golamKebria = {
  id: 103,
  money: 8000,
  name: 'Golam Kebria'
}
//call
kibria2.treatDey.call(heroBalam2, 300); //{ id: 102, money: 5700, name: 'Hero Balam' }
//apply
kibria2.treatDey.apply(golamKebria, [3000]); //{ id: 103, money: 5000, name: 'Golam Kebria' }



