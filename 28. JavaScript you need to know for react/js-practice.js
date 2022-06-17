const array1 = [1, 3, 4, 5, 6];

const map1 = array1.map(x => x * 2);
// console.log(map1);

const array2 = [...array1, 4, 9];
// console.log(array2);

const person = [
  { name: "shahbaj", gender: "male" },
  { name: "dina", gender: "female" },
  { name: "araf", gender: "male" }
];
const male = person.filter(x => x.gender == "male");
// console.log(male);


const array3 = [4, 12, 8, 130, 44]
const found = array3.find(element => element > 10);
// console.log(found);

const avengers = ['thor', 'captain america', 'hulk'];
avengers.forEach((item, index) => {
  // console.log(index, item);
});

const person2 = ["john", "sandy", "sam", ["mike", "max"], "diego", "paul"];
const [a, b, , c, ...d] = person2;

const friend = [d, "tom", "jerry"];
const newFriend = [...d, "tom", "jerry"];

// console.log(a);
// console.log(b);
// console.log(c);
// console.log(d);
// console.log(friend);
// console.log(newFriend);


const obj = { name: 'max', age: 22, address: 'dhaka', favorite: { cricket: "tamim", football: "messi" } };
const { name, age } = obj;
// console.log(name, age);
const { cricket, football } = obj.favorite;
// console.log(cricket, football);

// 1. JSON
const student = {
  name: "sakib khan",
  age: 32,
  movies: ["king khan", "dhakar mastan"]
}

const studentJSON = JSON.stringify(student);
// console.log(studentJSON);

const studentObj = JSON.parse(studentJSON);
// console.log(studentObj);

//2. fetch
// fetch('url')
//   .then(res => res.json())
//   .then(data => console.log(data));


// keys, values
const keys = Object.keys(student);
// console.log(keys);
const values = Object.values(student);
// console.log(values);

const female = person.filter(p => p.gender != "male");
// console.log(female);

const newPerson = { name: "taki", gender: "male" };
const newPersons = [...person, newPerson];
// console.log(newPersons);

const money = 80;
const food = money > 100 ? 'biriyani' : 'cha biscuit';
// console.log(food);

const num = 56;
const numString = 56 + '';
// console.log(numString);
const num1 = '5670';
const num1Int = +num1;
// console.log(num1Int);


