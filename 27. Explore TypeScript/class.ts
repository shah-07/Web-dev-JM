class car {
  name: string;
  price: number;
  private _millage: number;
  constructor(name: string, price: number) {
    this.name = name;
    this.price = price;
    this._millage = 100000;
  }
  getMillage(): number {
    const realMillage = this._millage + 40000;
    return realMillage;
  }
  getTotalPrice(tax: number) {
    const taxAmount = (this.price * tax) / 100;
    const total = taxAmount + this.price;
    return total;
  }
}

const toyota = new car("toyota", 1200000);
const totalPrice: number = toyota.getTotalPrice(10);
