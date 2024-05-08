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

// import add from './shoppingCart.js';

// add('bread', 7);

////////

//async function x (){} ---> actuall use of asynchronous method

// // method to use the top level await
// const res = await fetch(`https://jsonplaceholder.typicode.com/posts`);
// const data = await res.json();
// console.log(data);
// console.log

const getLastPost = async function () {
  const res = await fetch(`https://jsonplaceholder.typicode.com/posts`);
  const data = await res.json();
  return { title: data.at(-1).title, body: data.at(-1).body };
};

const lastPost = getLastPost();

// not very clear
// lastPost.then(last => console.log(last));

const lastPost2 = await getLastPost();
console.log(lastPost2);

// the below function will be able to call only once , main moto of creating this function is that not to use the code multiple time

const shoppingCart2 = function () {
  const cart = [];
  const shppingCost = 10;
  const totalQuantity = 9;
  const totalPrice = 237;

  const addToCart = function (product, quantity) {
    cart.push({ product, quantity });
    console.log(product, quantity + 'added to cart');
  };
  const orderStock = function (product, quantity) {
    console.log(`${product} ${quantity} ordered form supplier`);
  };
  return {
    addToCart,
    cart,
    totalQuantity,
    totalPrice,
  };
};

shoppingCart2.addToCart('bread', 4);
shoppingCart2.addToCart('pizza', 5);

console.log(shoppingCart2);
console.log(shoppingCart2.totalPrice); // it gives undefined where its a block scope,

// // using of common js, which only works in node.js

// // export
// export.addedToCart = function(){
//   console.log('item added to cart');
// }

// //import
// const { addToCart } = require('./shoppingCart');
