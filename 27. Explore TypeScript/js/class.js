"use strict";
class car {
    constructor(name, price) {
        this.name = name;
        this.price = price;
        this._millage = 100000;
    }
    getMillage() {
        const realMillage = this._millage + 40000;
        return realMillage;
    }
    getTotalPrice(tax) {
        const taxAmount = (this.price * tax) / 100;
        const total = taxAmount + this.price;
        return total;
    }
}
const toyota = new car("toyota", 1200000);
const totalPrice = toyota.getTotalPrice(10);
