const employee: { name: string; age: number; salary: number } = {
  name: "web agency",
  age: 20,
  salary: 40000,
};

type person = {
  name: string;
  age: number;
  salary: number;
};
const student: person = {
  name: "rahim",
  age: 34,
  salary: 4353535,
};

//arrow function
const NewAdd = (num1: number, num2: number): number => num1 + num2;
