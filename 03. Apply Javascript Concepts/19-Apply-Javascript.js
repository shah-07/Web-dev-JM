// let const 19-1

// value of variable could change
let price = 27;
price = 29;
price = 31;

// value of the variable will not change
const myName = 'lal e lal mr. Helal';
console.log(myName); //lal e lal mr. Helal
//myName = 22; //this is not assignable


// 19-2 Unit Convert Inch to Feet, miles to kilometer
function inchToFeet(inches) {
    var feet = inches / 12;
    feet = feet.toFixed(1); // this is string type
    feet = parseFloat(feet); // this is number type
    return feet;
}
var myInches = 67;
var feet = inchToFeet(myInches);
console.log('myInches in feet', feet); //myInches in feet 5.6

function mileToKilomiter(miles) {
    var km = miles * 1.60934;
    return km;
}
var marathon = mileToKilomiter(26.2);
console.log('marathon in km', marathon); //marathon in km 42.164708

// 19-3 Check even and odd number using function
function isEven(number) {
    if (number % 2 == 0) {
        return true;
    }
    return false;
}
const myNumber = 1642;
const isEvenNumber = isEven(myNumber);
console.log(myNumber, 'is an Even Number =', isEvenNumber); //1642 is an Even Number = true


// 19-4 Check whether a year is a Leap Year or not
function isLeapYear(year) {
    if ((0 == year % 4) && (0 != year % 100) || (0 == year % 400)) {
        return true;
    } else {
        return false;
    }
}
const myYear = 1904;
const isMyYearLeapYear = isLeapYear(myYear);
console.log('is my year leap year', isMyYearLeapYear); //is my year leap year false


// 19-5 Calculate Factorial of a number using for loop
function factorial(facNumber) {
    var result = 1;
    for(var i = 1; i <= facNumber; i++) {
        result = result * i;
    }
    return result;
}
console.log(factorial(5)); //120


// 19-7 Calculate Factorial of a number using while loop
function getFactorial(number) {
    let factorial = 1;
    let i = number;
    while (i >= 1) {
        factorial = factorial * i;
        i--;
    }
    return factorial;
}
console.log(getFactorial(7)); //5040

//19-8 (advanced) Calculate Factorial in a Recursive function
function factorial(n) {
    // 1) Base case
    if (n == 1) {
        return 1;
    }
    // 2) Recursive call to itself
    return n * factorial(n - 1);
}
/**
 * factorial(4)
 *   4 * factorial(4-1= 3) // n * factorial(n - 1)
 *     3 * factorial(3-1= 2)
 *       2 * factorial(2-1= 1)
 *       2 * 1 = 2
 *     3 * 2 = 6
 *   4 * 6 = 24
 * factorial(4) = 24
 */

const myFactorial = factorial(4);
console.log(myFactorial); //24


