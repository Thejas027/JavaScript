//Importing modules

// import { addToCart, totalPrice as price, tq } from './shoppingCart.js';

// // to import all the things at a single strech be like

// //
// console.log('Importing modules');

// // console.log(shippingCart); // this give error since it behaves as a private member from one module to anther module directly it cannot be accessed the key word "export" must be added

// addToCart('bread', 10);

// // the imported code can be used here
// console.log(tq, price);

// import * as ShoppingCart from './shoppingCart.js';
// ShoppingCart.addToCart('bread', 9);
// console.log(ShoppingCart.totalPrice, ShoppingCart.tq);

//////////////////////////
// accessing the default values

import add from './shoppingCart.js';

add('bread', 7);
