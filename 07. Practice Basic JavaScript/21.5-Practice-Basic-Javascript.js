// NO:01 task
const stringTypeVariable = 'Jabale Noor Shahbaz';
const numberTypeVariable = 0152175;
const booleanTypeVariable = true;
console.log(typeof(stringTypeVariable), typeof(numberTypeVariable), typeof(booleanTypeVariable));

// NO:07 task
let number = 7;
while(number <= 19){
    if(number % 2 == 1){
        console.log(number);
    }
    number++;
}

// NO:08 task
const array = [23, 64, 74, 57, 35, 97];
console.log(array.length); //6
array[3] = 22;
console.log(array); //(6) [23, 64, 74, 22, 35, 97]
array.push(34, 64);
console.log(array); //(8) [23, 64, 74, 22, 35, 97, 34, 64]
array.pop();
console.log(array); //(7) [23, 64, 74, 22, 35, 97, 34]

// NO:09 and task
for(element of array) {
    console.log(element);
}

// NO:10 task
for(element of array) {
    if(element > 80) {
        console.log(element);
    }
}

// NO:12 task
const college = {ID: 101, Name: 'Shahbaz', Roll: 3084, GPA: 4.50};
college.GPA = 4.78;
console.log(college);

// Problem Solving NO:03
function paperRequirements(firstNumOfCopies, secondNumOfCopies, thirdNumOfCopies) {
    const firstBookpagecount = firstNumOfCopies * 100;
    const secondBookpagecount = secondNumOfCopies * 200;
    const thirdBookpagecount = thirdNumOfCopies * 300;
    const totalPaperRequire = firstBookpagecount + secondBookpagecount + thirdBookpagecount;
    return totalPaperRequire;
}

const books = paperRequirements(2, 1, 1);
console.log(books);

// Problem Solving NO:04
const friendsName = ['Naim', 'Rahat', 'Saiful'];
function bestFriend(friendsName){
    let firstName = friendsName[0];
    for(friend of friendsName) {
        if(friend > firstName) {
            firstName = friend;
        }
    }
    return firstName;
}
const myBestFriend = bestFriend(friendsName);
console.log(myBestFriend); //Saiful

//Problem Solving NO:05
const anyNumbers = [34, 63, 636, 75, 64, -35, 56, -85];
const positiveNum = [];
for(const num of anyNumbers) {
    if(num > 0){
        positiveNum.push(num);
    } else {
        break;
    }
}
console.log(positiveNum); //(5) [34, 63, 636, 75, 64]


