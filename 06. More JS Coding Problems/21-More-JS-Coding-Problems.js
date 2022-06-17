// 21-2 Remove duplicate items from an array
// Here is my code
arr = [1, 2, 5, 5, 3, 4, 5, 5, 5, 37, 86, 34, 6, 7, 8, 9, 10, 34, 62];

for(let i = 0; i < arr.length; i++) {
    for(let j = i + 1; j < arr.length; j++) {
        if(arr[i] == arr[j]) {
            arr.splice(j, 1);
            j--;
        }
    }
}

console.log(arr); //(14) [1, 2, 5, 3, 4, 37, 86, 34, 6, 7, 8, 9, 10, 62]


// Here is vaia's code
const numbers = [1, 2, 3, 4, 5, 2, 7, 3, 8, 4, 4, 9, 5, 10, 55, 76, 6, 46, 55];
function removeDuplicate() {
    const unique = [];
    for(const element of numbers) { // it's called (for of) loop
        if(unique.indexOf(element) == -1){
            unique.push(element);
        }
    }
    return unique;
}
let uniqueNumber = removeDuplicate();
console.log(uniqueNumber); //(13) [1, 2, 3, 4, 5, 7, 8, 9, 10, 55, 76, 6, 46]


// 21-3 Explore string nature and reverse a string
const greetings = 'Hello, how are you?';
function textReverse(text) {
    let reverse = '';
    for(const letter of text){
        reverse = letter + reverse;
    }
    return reverse;
}
const revered = textReverse(greetings);
console.log(revered); //?uoy era woh ,olleH

// 21-5 Use add and multiplication to calculate wood requirements
/* chair Wood = 3cft/chair
table Wood = 10cft/table
bed Wood = 50cft/bed 
*/

function woodCalculator(chairQuantity, tableQuantity, bedQuantity) {
    const perChairWood = 3;
    const perTableWood = 10;
    const perBedWood = 50;
    //Wood Calculation
    const chairWoodQuantity = chairQuantity * perChairWood;
    const tableWoodQuantity = tableQuantity * perTableWood;
    const bedWoodQuantity = bedQuantity * perBedWood;
    //adding all wood quantity
    totalWood = chairWoodQuantity + tableWoodQuantity + bedWoodQuantity;
    return totalWood;
}

const naimsWood = woodCalculator(1, 2, 3);
console.log(naimsWood); //173


// 21-6 (optional)Write foo, bar, foobar if divisible by 3 or 5 or both
for(i=1; i<=50; i++){
    if(i%3==0 && i%5==0){
        console.log('Foobar');
    }
    else if(i%3==0){
        console.log('Foo');
    }
    else if(i%5==0){
        console.log('bar');
    }
    else{
        console.log(i);
    }
}


// 21-7 Find the cheapest phone from an array of phone objects
const phones = [
    {name: 'samsung s5', price: 45000, camera: 10, storage: 32},
    {name: 'walton m32', price: 25000, camera: 8, storage: 8},
    {name: 'nokia n70', price: 35000, camera: 8, storage: 8},
    {name: 'LG v30', price: 15000, camera: 8, storage: 8},
    {name: 'symphony L21', price: 8000, camera: 8, storage: 8},

]
let cheapest = phones[0];
for(const phone of phones) {
    if(phone.price < cheapest.price) {
        cheapest = phone;
    }
}
console.log('Cheapest phone:', cheapest); //Cheapest phone: { name: 'symphony L21', price: 8000, camera: 8, storage: 8 }


// 21-8 Calculate the total cost of the products in a shopping cart
const cart = [
    {name: 'laptop', price: 43000, quantity: 1},
    {name: 'shirt', price: 500, quantity: 8},
    {name: 'watch', price: 3680, quantity: 3},
    {name: 'phone', price: 55000, quantity: 1}
];

let cartTotal = 0;
for(const product of cart){
    const productTotal = product.price * product.quantity;
    cartTotal = cartTotal + productTotal;
}
console.log(cartTotal); //113040

// 21-9 (advanced) Travelling in a Jungle and counting wild animals
function animalscount(miles) {
    const animalDensFirst10miles = 10;
    const animalDensSecond10miles = 50;
    const animalDensrestMiles = 100;

    if(miles <= 10) {
        const numberOfAnimals = animalDensFirst10miles * miles;
        return numberOfAnimals;
    } else if(miles <= 20) {
        const numberOfFist10miles = 10 * animalDensFirst10miles;
        const numberOfSecond10miles = (miles - 10) * animalDensSecond10miles;
        const total = numberOfFist10miles + numberOfSecond10miles;
        return total;
    } else {
        const numberOfFist10miles = 10 * animalDensFirst10miles;
        const numberOfSecond10miles = 10 * animalDensSecond10miles;
        const restMiles = (miles - 20) * animalDensrestMiles;
        const totalRestMiles = numberOfFist10miles + numberOfSecond10miles + restMiles;
        return totalRestMiles;
    }
}

const animals = animalscount(35);
console.log(animals); //2100