'use strict';

const btn = document.querySelector('.btn-country');
const countriesContainer = document.querySelector('.countries');

const renderCountry = function (data, className = '') {
  console.log(data);

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

// promises on geolocation above app
navigator.geolocation.getCurrentPosition(
  position => console.log(position),
  err => console.log(err)
);

const getPositions = function () {
  return new Promise(function (reslove, reject) {
    // navigator.geolocation.getPositions(
    //   position => reslove(position),
    //   err => reject(err)
    // );
    navigator.geolocation.getCurrentPosition(reslove, reject);
  });
};

const whereAmI = function () {
  getPositions()
    .then(pos => {
      const { latitude: lat, longitude: lng } = pos.coords;
      console.log(lat, lng);
      return fetch(`https://geocode.xyz/${lat},${lng}?geoit=json`);
    })

    .then(res => {
      if (!res.ok) throw new Error(`Problem with geocoding ${res.status}`);
      return res.json();
    })
    .then(data => {
      console.log(data);
      console.log(`You are in ${data.city},${data.country}`);
      console.log('hel');
      return fetch(`https://restcountries.com/v3.1/name/${data.country}`);
    })
    .then(res => {
      if (!Response.ok) throw new Error(`Country not found! ${res.status}`);
      return res.json();
    })
    .then(renderCountry(data[0]))
    .catch(err => console.log(`${err.message} `));
};

btn.addEventListener('click', whereAmI);
