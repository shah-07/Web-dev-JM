//34-1 Module Overview, Dynamic data types
const a = 19;
const b = 'jamal uddin';
console.log(typeof a); //number 
// (javascript) dynamic type variable


//34-2 Primitive data type and non-primitive data type
/* primitive data type
1. Number
2. String
3. Boolean
4. Undefined
5. Null
6. Symble */
let x = 10;
let y = x;
console.log(x, y); //10 10
x = 20;
console.log(x, y); //20 10 
//Both are not changed. this is immutable

//non-primitive data type
//1. Object
const p = { job: 'web developer' };
const q = p;
console.log(p, q); //{ job: 'web devoloper' } { job: 'web devoloper' }
p.job = 'front-end developer';
console.log(p, q); //{ job: 'front-end developer' } { job: 'front-end developer' }
// Both are changed


//34-3 Different Truthy and Falsy values in JavaScript
/* 
Falsy:
false
0
empty string
undefined
null
NaN
-----------------------------
Truthy:
any number (positive or negative)
any string including single whitespace, '0', 'false'
[]
{};
anything else that is not falsy will be truthy
*/


//34-4 Null Vs Undefined, different ways you will get undefined
/* 
undefined
1. variable value not assigned
2. function but didn't return anything
3. just wrote return but didn't return anything
4. papameter that isn't passed
5. property that doesn't exist in an object
6. accessing array element out of range
7. accessing deleted array element
8. explicitly set value to undefined
*/

const myObj = { name: 'samad', profession: null };
//null
// null means there is no value


//34-5 double equal (==) vs triple equal (===), implicit conversion
const first = '0';
const second = false;
if (first == second) {
  console.log('condition is true');
}
else {
  console.log('condition is false');
}
//condition is true


//34-6 Block scope, global scope, Hoisting
// for more info search on the internet.


//34-7 (advanced) Closure, encapsulation, private variable
function stopWatch() {
  let counter = 0;
  return function () {
    counter++;
    return counter;
  }
}
let clock1 = stopWatch();
console.log(clock1(), clock1(), clock1(), clock1()); //1 2 3 4
let clock2 = stopWatch();
console.log(clock2(), clock2());//1 2


//34-8 (advanced) Callback function and pass different functions
function welcomeMessage(name, greetHandler) {
  greetHandler(name);
}
function greetMorning(name) {
  console.log('Good Morning', name);
}
function greetAfternoon(name) {
  console.log('Good Afternoon', name);
}
welcomeMessage('Shahbaj', greetMorning);//Good Morning Shahbaj
welcomeMessage('Nisarul', greetAfternoon);//Good Afternoon Nisarul


