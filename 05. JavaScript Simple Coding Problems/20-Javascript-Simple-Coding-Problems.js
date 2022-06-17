// 20-2 Swap variable, swap without temp, destructing
var first = 5;
var second = 7;
console.log(first, second); //5 7
//first Approach
var temp = first;
first = second;
second = temp;
console.log(first, second); //7 5

// Destructuring
[first, second] = [second, first];
console.log(first, second); //5 7


// 20-3 Find max of two values, find max of three values
let businessman = 300;
let minister = 400;
let cornel = 500;
const max = Math.max(businessman, minister, cornel);
const min = Math.min(businessman, minister, cornel);
console.log(max, min); //500 300


// 20-4 Sum of all numbers in an array
function arrayTotal(numbers) {
    let sum = 0;
    for(let i = 0; i < numbers.length; i++) {
        const element = numbers[i];
        sum = sum + element;
    }
    return sum;
}
const total = arrayTotal([32, 45, 67]);
console.log(total); //144


//20-5 Find the largest element of an array
function largestNumber(numbers) {
    let largest = numbers[0];
    for(let i = 0; i < numbers.length; i++){
        element = numbers[i];
        if(element > largest) { // if we use less than < then the output will show the lowest number
            largest = element;
        }
    }
    return largest;
}
console.log(largestNumber([34, 35, 64, 24, 22, 39])); // 64


// 20-6 Create a Fibonacci Series using a for loop
let fibo = [0, 1];
for (let i = 2; i <= 10; i++) {
    //nth = (n-1)th + (n-2)th
    //ith = (i-1)th + (n-2)th
    fibo[i] = fibo[i-1] + fibo[i-2];
}
console.log(fibo); //(11) [0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55]


// 20-7 Handle unexpected input using simple return
function fibonacciSeries(num){
    if(typeof num != 'number') {
        return 'Please give a number';
    }
    if(num < 2) {
        return 'Please enter a valid number';
    }
    const fibo = [0, 1];
    for(let i = 2; i <= num; i++){
        fibo[i] = fibo[i-1] + fibo[i-2];
    }
    return fibo;
}
const fiboSeries = fibonacciSeries(10);
console.log(fiboSeries)