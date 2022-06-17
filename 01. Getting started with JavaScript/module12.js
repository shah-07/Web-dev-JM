
// Use of Typeof //
var bananaPrice = 12;
console.log(typeof bananaPrice); //number
var seenAfter = "yellow";
console.log(typeof seenAfter);//string

var isHot = true;
var isRich = false;
console.log( typeof isHot); //boolean


// Use of toUpperCase //
console.log(seenAfter.toUpperCase()); // YELLOW


// Use of indexOf and split //
var promise = "I promise I will work HARD to become a programmer";
console.log(promise.indexOf('HARD')); //22
console.log(promise.split('I')); //(3) ['', ' promise ', ' will work HARD to become a programmer']


// Use of parseFloat //
var number1 = 25;
var number2 = '15.5';
number2 = parseFloat(number2);
console.log(number1 + number2); //40.5


// Use of toFixed //
var number1 = 0.1;
var number2 = 0.2;
var total = number1 + number2;
total = total.toFixed(5);
console.log(total); //0.30000


// Use of Remainder (%) //
var price1 = 25;
var price2 = 35;
var total = price2 % price1;
console.log(total); //10


// Use of Concatenation //
var firstName = 'justin';
var secondName = 'bieber';
var fullName = firstName + ' ' + secondName;
console.log(fullName); //justin bieber


// Use of Math.abs .round .ceil .floor .random //
var number = 5.45635;
console.log(Math.abs(-7)); //7
console.log(Math.round(number)); //5
console.log(Math.ceil(number)); //6
console.log(Math.floor(number)); //5
console.log(Math.random(number)); //0.307168470054638
console.log(Math.round(Math.random() * 10)); //2


// Use of if and else Condition //
var biscuitPrice = 8;
if(biscuitPrice == 8) {
    console.log("I will eat the biscuits"); //THE OUTPUT
}
else {
    console.log("khali cha is better")
}


// Use of else if Condition //
var jobPaiso = true;
var savingAmount = 500000;

if(jobPaiso == true && savingAmount > 200000) {
    console.log("Aso tomar patri khuji"); //THE OUTPUT
}
else if (jobPaiso == true) {
    console.log("accha koi din pore dekhbo");
}
else {
    console.log("Tor kopale biye nai");
}


// Use of timezone //
var date = new Date('2000-4-17');
console.log(date); //Mon Apr 17 2000 00:00:00 GMT+0600 (Bangladesh Standard Time)