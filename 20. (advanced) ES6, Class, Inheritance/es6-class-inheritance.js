//31-2 Destructuring Object to extract values to variables
const fish = { name: 'Hilsha', dress: 'Silver', address: 'Chandpur', price: 9000, number: '0153826382' };
const name = fish.name;
console.log(name); //Hilsha
const { dress, address, number } = fish;
console.log(number); //0153826382

//Nested object
const company = {
    compName: 'Programming Hero',
    ceo: {
        id: 01,
        name: 'korim',
        food: 'fish'
    },
    compNumber: '0178373837',
    web: {
        member: 392,
        work: 'web development',
        tech: {
            first: 'HTML',
            second: 'CSS',
            third: 'JS'
        },
        framwork: 'React'
    }
};
//access object
const { compName, compNumber } = company;
console.log(compName, compNumber); //Programming Hero 0178373837
const { id, food } = company.ceo;
console.log(id, food); //01 fish
const { first, second, third } = company.web.tech;
console.log(first, second, third); //HTML CSS JS


//31-3 (advanced) Array Destructuring, nested object Optional chaining
const myObject = { x: 2, y: 50, z: 600, a: { k: 45, l: 26 }, b: 68 };
const { x, b } = myObject;
console.log(b); //68

//destructuring array
const [p, q] = [45, 'momotag', 91, 86];
console.log(p, q); //45 momotag
    
//nested object Optional chaining
console.log(myObject.a.m.n); //Cannot read properties of undefined (reading 'n')
console.log(myObject?.a?.m?.n); //undefined


//31-4 Array map to do one line loop magic
const numbers = [2,4,6,8,10   ];
//1. loop through each element
//2. for each element call the provided function
//3. result for each element will be stored in an array
const output = numbers.map(x => x * 2);
console.log(output); //[ 4, 8, 12, 16, 20 ]


//31-5 Map string array, array of objects map, foreach
const products = [
    {name: 'phone', price: 12000, color: 'Silver'},
    {name: 'Headset', price: 1000, color: 'Black'},
    {name: 'Laptop', price: 37000, color: 'Silver'}
];
const productNames = products.map(p => p.name);
console.log(productNames);//[ 'phone', 'Headset', 'Laptop' ]
//foreach
products.forEach(p => console.log(p.price));
//output
//12000 
//1000 
//37000


//31-6 (advanced) Implement filter, find on an array of objects
const bigNumbers = numbers.filter(n => n > 5);
console.log(bigNumbers); //[ 6, 8, 10 ]

const silver = products.filter(p => p.color == 'Silver');
console.log(silver);
//OUTPUT
// [
//     { name: 'phone', price: 12000, color: 'Silver' },
//     { name: 'Laptop', price: 37000, color: 'Silver' }
// ]

const blacks = products.find(p => p.color == 'Black');
console.log(blacks); //{ name: 'Headset', price: 1000, color: 'Black' }


//31-7 (advanced) Class, constructor, method, create object from class
class Support {
    name;
    designation = 'Support Web Dev';
    address;
    constructor(name, address) {
        this.name = name;
        this.address = address;
    }
    //Method
    startSession() {
        console.log(`${this.name} start a support session from ${this.address}`);
    }
}
const kamal = new Support('kamal khan', 'BD');
const salman = new Support('Salman khan', 'Dubai');
console.log(salman); //Support {name: 'Salman khan', designation: 'Support Web Dev', address: 'Dubai'}
kamal.startSession(); //kamal khan start a support session from BD
salman.startSession(); //Salman khan start a support session from Dubai


//31-8 (advanced) Inheritance, extends class, super, class method
class TeamMember {
    name;
    address;
    constructor(name, address) {
        this.name = name;
        this.address = address;
    }    
}
class Support extends TeamMember{
    designation = 'Support Web Dev';
    //Method
    startSession() {
        console.log(`${this.name} start a support session from ${this.address}`);
    }
}
class NeptuneDev extends TeamMember {
    designation = 'Neptune App Dev';
    codeEditor;
    constructor(name, address, editor){
        super(name, address);
        this.codeEditor = editor;
    }
    //Method
    releaseApp(version){
        console.log(`${this.name} release app version ${version}`)
    }
}
const kamal2 = new Support('kamal khan', 'BD');
const salman2 = new Support('Salman khan', 'Dubai');
console.log(kamal2); //Support {name: 'kamal khan', designation: 'Support Web Dev', address: 'BD'}
const ash = new NeptuneDev('Ash', 'Mumbai', 'Android studio');
console.log(ash); //NeptuneDev {name: 'Ash', designation: 'Support Web Dev', address: 'Mumbai', codeEditor: 'Android studio'}
ash.releaseApp('1.4.5'); //Ash release app version 1.4.5


//31-9 (advanced) Prototypical inheritance and module summary
/* JavaScript is a bit confusing for developers experienced in class-based languages (like Java or C++), as it is dynamic and does not provide a class implementation per se (the class keyword is introduced in ES2015, but is syntactical sugar, JavaScript remains prototype-based).

When it comes to inheritance, JavaScript only has one construct: objects. Each object has a private property which holds a link to another object called its prototype. That prototype object has a prototype of its own, and so on until an object is reached with null as its prototype. By definition, null has no prototype, and acts as the final link in this prototype chain.

Nearly all objects in JavaScript are instances of Object which sits just below null on the top of a prototype chain.

While this confusion is often considered to be one of JavaScript's weaknesses, the prototypal inheritance model itself is, in fact, more powerful than the classic model. It is, for example, fairly trivial to build a classic model on top of a prototypal model. */