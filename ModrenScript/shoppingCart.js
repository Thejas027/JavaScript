//Exporting modules
console.log('Exporting values');

// these are not accessible outside this module where it acts as a private members for other modules
const shoppingCart = 10;
const cart = [];

// to access any thing from one module to other just add "export" keyword to it at the starting
export const addToCart = function (product, quantity) {
  cart.push({ product, quantity });
  console.log(`${product} ${quantity} added to cart`);
};

const totalPrice = 290;
const totalQuantity = 10;

export { totalPrice, totalQuantity as tq };

// exporting the default values

export default function (product, quantity) {
  cart.push({ product, quantity });
  console.log(product, quantity + 'added to cart');
}

// all these imports are not the copy of the exports but these are the live connections
