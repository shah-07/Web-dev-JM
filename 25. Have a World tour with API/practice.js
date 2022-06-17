// 1
const person = {
  name: 'Nisarul',
  id: 101,
  skills: {
    sports: 'cricket',
    programming: 'C programming language',
  },
  friends: ['Shahbaz', 'Afsana', 'Arif'],
  hobby: function () {
    const string = `I love ${this.skills.programming}`;
    return string;
  }
}
const myMethod = person.hobby();
console.log(myMethod); //I love C programming language


// 2
const myString = `My ID is ${person.id}. I sometimes play ${person.skills.sports}. My best buddy is ${person.friends[0]}.`;
console.log(myString); //My ID is 101. I sometimes play cricket. My best buddy is Shahbaz.


// 3.1
const arrowfunc = () => 89;
console.log(arrowfunc()); //89
// 3.2
const arrowfunc2 = (num) => num / 7;
const myNumber = arrowfunc2(21);
console.log(myNumber); //3
// 3.3
const arrowfunc3 = (num1, num2) => (num1 + num2) / 2;
const myNumber2 = arrowfunc3(5, 7);
console.log(myNumber2); //6
// 3.4
const arrowfunc4 = (num1, num2) => {
  num1 = num1 + 7;
  num2 = num2 + 7;
  sum = num1 + num2;
  return sum;
}
const myNumber3 = arrowfunc4(3, 9);
console.log(myNumber3); //26


// 4 - 5
//map
const numbers = [28, 42, 49, 21, 35];
const numbers2 = numbers.map(element => element / 7);
console.log(numbers2); // [ 4, 6, 7, 3, 5 ]
//forEach
numbers.forEach(element => console.log(element));
/* 
OUTPUT
28
42
49
21
35 
*/
//filter
const bigNumbers = numbers.filter(n => n > 30);
console.log(bigNumbers); //[ 42, 49, 35 ]
//find 
const findNumber = numbers.find(n => n < 30);
console.log(findNumber); //28


// 6
// destructuring object
const { id, skills } = person;
console.log(skills.sports); //cricket
// destructuring array
const [a, balance, c] = numbers;
console.log(balance); //42
