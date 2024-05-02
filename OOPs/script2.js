'use strict';

//there are 4 feilds in js
//1) public fields
//2) private fields
// 3) public methods
// 4) private methods
// there is also a static version
class Account {
  // 1) public feilds (instances)
  locale = navigator.language;

  // 2) private feilds (instances)
  // where " # " --> defines that property is of private feild where it cannot be accesed outside the calss
  #movements = [];
  #pin;
  constructor(owner, currency, pin) {
    this.owner = owner;
    this.currency = currency;
    this.#pin = pin;
    // "_" --> protected , even this can be accessed outside the class but "_" this signifes the coder that its a protected class member
    //     this._movements = [];
    //     this.locale = navigator.language;

    console.log(`Thanks for opening account ${this.owner}`);
  }

  // 3) public methods

  // to acces the protected class members public class must be written for it as shown below,

  getMovements() {
    return this.#movements;
  }

  // Public interfaces
  deposit(val) {
    this.#movements.push(val);
  }

  withdraw(val) {
    this.deposit(-val);
  }

  reqLoan(val) {
    if (this.#approval(val)) {
      this.deposit(val);
      console.log('loan approved');
    }
  }

  // static
  static helper() {
    console.log('helper');
  }

  // 4) private methods
  #approval(val) {
    return true;
  }
}

// creating the objects form the above class

const acc1 = new Account('Jonas', 'EUR', 1111);
console.log(acc1);

// To add the amount to movements,not actually the best way to do it instead just create the method in class itself
// acc1.movements.push(250);
// acc1.movements.push(300);
acc1.deposit(250);
acc1.withdraw(140);

// accesing the protected class members using public methods
console.log(acc1.getMovements()); // it can only be accessed but it cant do any modification on it

// console.log(acc1.#movements); // this give the error

//calling the static methods outside the class
Account.helper();
