//35-8 ( super advanced) Understand this keyword in JavaScript
const kibria = {
  id: 101,
  money: 5000,
  name: 'Nisarul',
  treatDeyArrow: () => {
    console.log(this);
  },
  treatDeyInside: function () {
    const myArrow = () => console.log(this)
    myArrow();
  },
  treatDey: function (expense) {
    this.money = this.money - expense;
    console.log('here555', this);
    return this.money;
  }
}
const heroBalam = {
  id: 102,
  money: 6000,
  name: 'Hero Balam'
}
function add() {
  console.log(this);
}
//arrow function can't hold their (this) value, they carry their parents' (this) value
//but normal function can hold their (this) value
//(this) value of DOM is depand on their event