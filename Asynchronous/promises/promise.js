'use strict';

//////////////// execution of call back funtions,where it microtasks queue are used
// prirority of micro tasks event is greater than the other call back functions
// console.log('Test start');
// setTimeout(() => console.log('Timer 0'), 0);
// Promise.resolve('Resolved promise 1').then(res => console.log(res));
// console.log('Test end');

// // creating new promise
// const lotteryPromise = new Promise(function (resolve, reject) {
//   console.log('lottery draw is happening');
//   setTimeout(function () {
//     if (Math.random() >= 0.5) {
//       resolve('You WIN money');
//     } else {
//       reject(new Error('You lost the money'));
//     }
//   }, 2000);
// });

// //consuming the promise
// lotteryPromise.then(res => console.log(res)).catch(err => console.error(err));

// // promisifyying setTimeout

// const wait = function (seconds) {
//   return new Promise(function (resolve) {
//     setTimeout(resolve, seconds * 1000);
//   });
// };

// const waitArrow = sec =>
//   new Promise(resolve => setTimeout(resolve, sec * 1000));

// wait(2)
//   .then(() => {
//     console.log(`I waited 2 seconds`);
//     return wait(1);
//   })
//   .then(() => console.log('i waited for 2 seconds'));
// waitArrow(2).then(console.log(`I have been waititng for 2 seconds `));

// // the below reslove and reject gives output immeadetiely,
// // where before this multitask queue event will be executed
// Promise.resolve('abc').then(x => console.log(x));
// Promise.reject(new Error('Problem!')).then(x => console.error(x));

/////////////////////////////////////////////////////
//  Async functions
const btn = document.querySelector('.btn-country');
const countriesContainer = document.querySelector('.countries');

const renderCountry = function (data, className = '') {
  const languageGetter = Object.keys(data.languages);
  const [language] = languageGetter;

  const currencyGetter = Object.keys(data.currencies);
  const [currency] = currencyGetter;

  const html = `
  <article class="country ${className}">
    <img class="country__img" src="${data.flags.png}" />
    <div class="country__data">
      <h3 class="country__name">${data.name.common}</h3>
      <h4 class="country__region">${data.region}</h4>
      <p class="country__row"><span>👫</span>${(
        +data.population / 1000000
      ).toFixed(1)} people</p>
      <p class="country__row"><span>🗣️</span>${language}</p>
      <p class="country__row"><span>💰</span>${currency}</p>
    </div>
  </article>
  `;
  countriesContainer.insertAdjacentHTML('beforeend', html);
  countriesContainer.style.opacity = 1;
};

const getPosition = function () {
  return new Promise(function (reslove, reject) {
    navigator.geolocation.getCurrentPosition(reslove, reject);
  });
};

const whereAmI = async function () {
  try {
    //get location
    const pos = await getPosition();
    const { latitude: lat, longitude: lng } = pos.coords;

    //reserve gecoding
    const resGeo = await fetch(`https://geocode.xyz/${lat},${lng}?geoit=json`);
    const dataGeo = resGeo.json();
    console.log(dataGeo);

    // country data
    const res = await fetch(
      `https://restcountries.com/v3.1/name/${dataGeo.country}`
    ); // await stops the decode of execution of code here
    const data = await res.json();
    console.log(data);
    renderCountry(data);
  } catch (err) {
    console.error(err.message);
  }
};

whereAmI();
// console.log('First');
