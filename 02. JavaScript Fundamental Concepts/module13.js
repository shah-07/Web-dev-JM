
// Array, index, set by index, indexOf //
var friendsAge = [15, 17, 14, 16];
var sonaliAge = friendsAge[2];
friendsAge[1] = 21;
var position = friendsAge.indexOf(21);
console.log(friendsAge[1]); //21
console.log(friendsAge.length); //4


// Array push, pop, array length //
friendsAge.push(19, 20);
console.log(friendsAge); //(6) [15, 21, 14, 16, 19, 20]
console.log(friendsAge.length); //6
friendsAge.pop();
console.log(friendsAge); //(5) [15, 21, 14, 16, 19]


// array add and remove element from the beginning and slice //
var teaLine = ['kalam', 'Salam', 'Balam'];
teaLine.push('Jalam');
console.log(teaLine); //(4) ['kalam', 'Salam', 'Balam', 'Jalam']
teaLine.shift(); // remove
console.log(teaLine); //(3) ['Salam', 'Balam', 'Jalam']
teaLine.unshift('palam'); // add
console.log(teaLine); //(4) ['palam', 'Salam', 'Balam', 'Jalam']
var part = teaLine.slice(0, 2);
console.log(part); //(2) ['palam', 'Salam']


// While loop //
var num = 10;
while (num <= 15) {
    console.log(num);
    num++;
}
// OUTPUT: 10 11 12 13 14 15


// For Loop //
var nums = [55, 66, 77, 88, 99, 11, 44];
for(var i = 0; i < nums.length; i++) {
    var element = nums[i];
    console.log(element);
}
// OUTPUT: 55 66 77 88 99 11 44


// switch case break and default //
num = 1000;
switch(num) {
    case 1000:
        console.log('I am 1000'); //OUTPUT
        break;
    case 100:
        console.log('I am 100');
        break;
    case 20:
    case 10:
        console.log('I am either 10 or 20');
        break;
    default:
        console.log(`I don't know who you are`);
}


// Function, call function //
function sayLoveYou(){
    console.log('Jaan o baby');
    console.log("Billy baby... Koi tumi");
}

sayLoveYou(); //Jaan o baby 
              //Billy baby... Koi tumi
var date = 14;
var place = "Restaurent";
sayLoveYou(); //Jaan o baby 
              //Billy baby... Koi tumi
var hangoutPlace = "TSC";
sayLoveYou(); //Jaan o baby 
              //Billy baby... Koi tumi


// Function parameter, multiple parameter, function return //
function add(num1, num2) {
    var result = num1 + num2;
    return result;
}
var sum = add(15, 17);
console.log(sum); //32


// Object, key value pair, get object property, set value //
var student = {id: 121, phone: 45463, name: "Naim"};
var student2 = {id: 131, phone: 3633, name: "Rahat"};
// Access the property
var phoneNo1 = student.phone; // 1st way
var phoneNo2 = student["phone"]; // 2nd way
var phonePropName = "phone";
var phoneNo3 = student[phonePropName]; // 3rd way

// Update value
student2.phone = 363363; // 1st way
student2["phone"] = 729749; // 2st way
student2[phonePropName] = 353633; // 3st way

// Add property and value
student2.gender = "male"
student2["gender"] = "male";

console.log(student, student2);
/**
 *OUTPUT*
{id: 121, phone: 45463, name: 'Naim'} {id: 131, phone: 353633, name: 'Rahat', gender: 'male'}

arg0:{id: 121, phone: 45463, name: 'Naim'} //arg = argument
id:121
name:'Naim'
phone:45463
[[Prototype]]:Object

arg1:{id: 131, phone: 353633, name: 'Rahat', gender: 'male'}
gender:'male'
id:131
name:'Rahat'
phone:353633
[[Prototype]]:Object
*/