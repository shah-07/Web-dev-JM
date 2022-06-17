// 19_5-1 Javascript concepts and apply revision with four challenges

// 1.celsius to fahrenheit
function celsiusToFahrenheit(celsius) {
    let fahrenheit;
    fahrenheit = (celsius * (9/5)) + 32;
    return fahrenheit;
}
console.log(celsiusToFahrenheit(36)); //96.8

// 2.fahrenheit to celsius
function fahrenheitToCelsius(fahrenheit) {
    let celsius;
    celsius = (fahrenheit - 32) * 5/9;
    return celsius;
}
console.log(fahrenheitToCelsius(98)); //36.67

// 3.Grade calculation
function getGpa(num) {
    if(num <= 100 && num >= 80) {
        return console.log('A+');
    } 
    else if(num <= 79 && num >= 70) {
        return console.log('A');
    }
    else if(num <= 69 && num >= 60) {
        return console.log('A-');
    }
    else if(num <= 59 && num >= 50) {
        return console.log('B');
    }
    else if(num <= 49 && num >= 40) {
        return console.log('C');
    }
    else if(num <= 39 && num >= 33) {
        return console.log('D');
    }
    else if(num <= 32 && num >= 0) {
        return console.log('F');
    }
    else {
        return console.log('wrong number');
    }
}

console.log(getGpa(85));

// 4.Simple interest
function getInterest(Balance, interestRate, year) {
    interestRate = Balance * (interestRate / 100);
    let totalAmount;
    totalAmount = (Balance + (interestRate * year));
    return totalAmount;
}
console.log(getInterest(100000, 5, 5));