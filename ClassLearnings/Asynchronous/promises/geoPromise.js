'use strict';





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
