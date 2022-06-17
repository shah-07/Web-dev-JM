
//28-1 String comparison using toLowerCase toUpperCase
const anthem = 'Amar Sonar Bangla Ami Tomai Valobashi';
const search = 'valo';

const userInput = 'blACKPinK';
const savedUserName = 'blacKPinK';
console.log(userInput.toLocaleLowerCase()); //blackpink
console.log(savedUserName.toUpperCase()); //BLACKPINK
if (userInput.toLocaleLowerCase() == savedUserName.toLocaleLowerCase()) {
    console.log('user exists'); //user exists
}


//28-2 Apply Search includes, indexOf, startswith, endswith
const products = [
    'Dell hardcore i29 200GB laptop',
    'iphone 1TB camera flashlight phone',
    'yellow laptop with black camera',
    'Dell 1X59 Lenovo commercial yoga laptop',
    'LG supernova laptop',
    'HTC low price phone',
    'Dell purple color phone with Laptop'
];

let searching = 'Dell';
//indexOf
let output = [];
for(const product of products) {
    if(product.toLocaleLowerCase().indexOf(searching.toLocaleLowerCase()) != -1){
        output.push(product);
    }
}
console.log(output); //['Dell hardcore i29 200GB laptop', 'Dell 1X59 Lenovo commercial yoga laptop', 'Dell purple color phone with Laptop']

//includes
searching = 'phone';
output = [];
for(const product of products) {
    if(product.toLocaleLowerCase().includes(searching.toLocaleLowerCase())){
        output.push(product);
    }
}
console.log(output); //['iphone 1TB camera flashlight phone', 'HTC low price phone', 'Dell purple color phone with Laptop']

//startsWith() and endsWith()
searching = 'laptop';
output = [];
for(const product of products) {
    if(product.toLocaleLowerCase().endsWith(searching.toLocaleLowerCase())){ //we can use endsWith()
        output.push(product);
    }
}
console.log(output); //['Dell hardcore i29 200GB laptop', 'Dell 1X59 Lenovo commercial yoga laptop', 'LG supernova laptop', 'Dell purple color phone with Laptop']


//28-3 How to split, slice, substr, substring, concat, join
const anthem = 'Amar Sonar Bangla Ami Tomai Valobashi';
//Split
const words = anthem.split(' ');
const withoutA = anthem.split('a');
console.log(withoutA); //['Am', 'r Son', 'r B', 'ngl', ' Ami Tom', 'i V', 'lob', 'shi']
console.log(words); //[ 'Amar', 'Sonar', 'Bangla', 'Ami', 'Tomai', 'Valobashi' ]

//Slice
const smallSlice = anthem.slice(5, 13)
console.log(smallSlice);//Sonar Ba

//substr
const anotherPart = anthem.substr(11, 8); //the starting index and the number of characters to include in the returned string
console.log(anotherPart);//Bangla A

//substring
const anotherAnotherPart = anthem.substring(11, 15); //the starting and ending indexes
console.log(anotherAnotherPart);//Bang

//concat
//Note: string is immutable
const first = 'Amader';
const second = 'City';
let fullString = first + second;
console.log(fullString);//AmaderCity
fullString = first.concat(second);
console.log(fullString);//AmaderCity
fullString = first.concat(second).concat('abc').concat('RJ Kebria'); 
console.log(fullString);//AmaderCityabcRJ Kebria
//join
const words2 = ['a', 'b', 'c', 'd'];
const allJoined = words2.join(', ');
console.log(allJoined);//a, b, c, d


//28-4 Check an Array using isArray
function megaFriend(friends){
    if(Array.isArray(friends) == false){
        return 'Please provide an array';
    }
    let mega = friends[0];
    for(const friend of friends) {
        if(friend.length > mega.length) {
            mega = friend;
        }
    }
    return mega;
}
const friends = ['Naim', 'Rahat', 'Saiful', 'Liton'];
const myBigBuddy = megaFriend(friends);
console.log(myBigBuddy);//Saiful


//28-5 Get part of an array and insert elements using slice, splice
const numbers = [3, 6, 4, 8, 9, 19, 15, 21, 45, 87];
const numberSliced = numbers.slice(4, 8); // if We slice the array, the original array(numbers) won't change
console.log(numberSliced); //[9, 19, 15, 21]
console.log(numbers); //[3, 6, 4, 8, 9, 19, 15, 21, 45, 87]
//splice to remove an element from an array
const numberSpliced = numbers.splice(4, 3);// if We splice the array, the original array(numbers) will remove those items.
console.log(numberSpliced); //[9, 19, 15]
console.log(numbers); //[3, 6, 4, 8, 21, 45, 87]
//splice to remove and add element of an array
const numberSpliced2 = numbers.splice(4, 3, 99, 111, 888, 777); //adding 99, 111, 888, 777 in the array
console.log(numberSpliced2); //[21, 45, 87]
console.log(numbers); //[3, 6, 4, 8, 99, 111, 888, 777]


//28-6 Have fun with sort and reverse a javascript array
const numbers = [6, 4, 7, 1, 3, 9, 2, 11, 5];
const sortNumbers = numbers.sort();
console.log(sortNumbers); //[1, 2, 3, 4, 5, 6, 7, 9]
const friends = ['kabli', 'josim', 'razzak', 'anwar', 'deepjol', 'badsha'];
const sortedFriends = friends.reverse();
console.log(sortedFriends); //['badsha', 'deepjol', 'anwar', 'razzak', 'josim', 'kabli']
const reversedFriends = friends.sort().reverse();
console.log(reversedFriends); //['razzak', 'kabli', 'josim', 'deepjol', 'badsha', 'anwar']

//number sorting fun
const bigNumbers = [66, 58, 81, 92, 9, 6, 37, 13, 2];
let sortedBigNumbers = bigNumbers.sort();
console.log(sortedBigNumbers); //[13, 2, 37, 58, 6, 66, 81, 9, 92] it isn't sorted
sortedBigNumbers = bigNumbers.sort(function(a, b) {
    return a - b;
});
console.log(sortedBigNumbers); //[2, 6, 9, 13, 37, 58, 66, 81, 92] Now it is sorted


//28-7 Unlimited parameters to a function using arguments
function addNumbers(){
    let result = 0;
    console.log(arguments); //[Arguments] { '0': 23, '1': 43, '2': 54, '3': 36, '4': 43 }
    for(const num of arguments){
        result = result + num;
    }
    return result;
}
const sum = addNumbers(23, 43, 54, 36, 43);
console.log(sum); //199


//28-8 Different types of Error object and explore Try-catch
const myName = 'ami';
try {
    myName = 'tumi'
} catch (error) {
    console.log('getting error', error); //getting error TypeError: Assignment to constant variable.
}
console.log(myName); //ami


//28-9 A simple introduction to Date object in JavaScript
const myFavDate = new Date('1971-12-16');
console.log(myFavDate); //Thu Dec 16 1971 06:00:00 GMT+0600 (Bangladesh Standard Time)
const anotherDate = new Date(1971, 3, 26, 11, 50, 40, 80)
console.log(anotherDate); //Mon Apr 26 1971 11:50:40 GMT+0600 (Bangladesh Standard Time)
if(myFavDate.getTime() > anotherDate.getTime()) {
    console.log('favorite is earlier'); //favorite is earlier
}