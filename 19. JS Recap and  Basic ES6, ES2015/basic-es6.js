//30-4 Function default parameter for not provided values
function add(num1, num2 = 0) {
    //option 01 | old way ES5
    // num2 = num2 || 0;
    //option 02
    // if(num2 == undefined){
    //     num2 = 0;
    // }
    const total = num1 + num2;
    return total;
}
const result = add(15);
console.log(result); //15


//30-5 Template string, multiple line string, dynamic string
//multiple line string
const multiline = `line no 01
line no 02
line no 03
line no 04`;
console.log(multiline);
//output//
//line no 01
//line no 02
//line no 03
//line no 04

//dynamic string
const friends = ['abul', 'babul', 'kabul', 'sabul'];
const count = 5;
const old = 'friends - ' + count;
const new1 = `friends - ${friends.length}`;
console.log(new1); //friends - 4


//30-6 Arrow function, multiple parameter, function body 
//function expression (anonymous)
const add1 = function(num1, num2) {
    return num1 + num2;
}
const sum1 = add1(20, 25);
console.log(sum1); //45
//arrow function
const add2 = (num1, num2) => num1 + num2;
const sum2 = add2(20, 07);
console.log(sum2); //27


//30-7 More Arrow functions and big arrow function
const tenTimes = (num) => num * 10;
const output = tenTimes(17); //170

const fiveTimes = num => num * 5;
const value = fiveTimes(17); //85

const getName = () => 'Brandon Sam';
const name = getName()
console.log(name); //Brandon Sam

const doMath = (x, y) => {
    const sum = x + y;
    const diff = x - y;
    const result = sum * diff;
    const output = result * 5;
    return output;
}
const total = doMath(12, 5);
console.log(total);


//30-8 Spread operator, array max, copy arrays
const numbers = [23, 65, 99, 21, 34];
console.log(numbers); //[ 23, 65, 99, 21, 34 ]
console.log(...numbers); //23 65 99 21 34

const max = Math.max(23, 99, 65, 21, 34);
const maxInArray = Math.max(...numbers);
console.log(max, maxInArray); //99 99

const numbers2 = [...numbers, 88]; //new array
numbers.push(55);
console.log(numbers); //[ 23, 65, 99, 21, 34, 55 ]
console.log(numbers2); //[ 23, 65, 99, 21, 34, 88 ]