'use strict';

const months = [
  'January',
  'February',
  'March',
  'April',
  'May',
  'June',
  'July',
  'August',
  'September',
  'October',
  'November',
  'December',
];

//
class workout {
  date = new Date();
  id = (Date.now() + ' ').slice(-10);

  constructor(coords, distance, duration) {
    this.coords = coords; //[lat,lng]
    this.distance = distance; // in km
    this.duration = duration; // in min
  }

  _setDesceprition() {
    const months = [
      'January',
      'February',
      'March',
      'April',
      'May',
      'June',
      'July',
      'August',
      'September',
      'October',
      'November',
      'December',
    ];

    this.desceptrion = `${this.type[0].toUpperCase()}${this.type.slice(1)} on ${
      months[this.date.getMonth()]
    } ${this.date.getDate()}`;
  }
  click() {
    this.clicks++;
  }
}

class Running extends workout {
  type = 'running';
  constructor(coords, distance, duration, cadence) {
    super(coords, distance, duration);
    this.cadence = cadence;
    this.calcPace();
    this._setDesceprition();
  }

  calcPace() {
    //min/km
    this.pace = this.duration / this.distance;
    return this.pace;
  }
}

class Cycling extends workout {
  type = 'cycling';
  constructor(coords, distance, duration, elevationGain) {
    super(coords, distance, duration);
    this.elevationGain = elevationGain;
    this.calcSpeed();
    this._setDesceprition();
  }
  calcSpeed() {
    this.speed = this.distance / (this.duration / 60);
    return this.speed;
  }
}

///////////////////////////////
const form = document.querySelector('.form');
const containerWorkouts = document.querySelector('.workouts');
const inputType = document.querySelector('.form-input--type');
const inputDistance = document.querySelector('.form-input--distance');
const inputDuration = document.querySelector('.form-input--duration');
const inputCadence = document.querySelector('.form-input--cadence');
const inputElevation = document.querySelector('.form-input--elevation');

/////////////////////////
// APPLICATION ARCHITECTURE
class App {
  #map;
  #mapEvent;
  #workouts = [];
  #mapZoomLevel = 13;

  constructor() {
    //Getting users location
    this._getPosition();

    //reterving the data from the local storage
    this._getLocalStorage();
    //Attaching the event handlers
    form.addEventListener('submit', this._newWorkout.bind(this));
    inputType.addEventListener('change', this._toogleEvlevationFeild);
    containerWorkouts.addEventListener('click', this._moveToPopup.bind(this));
  }

  _getPosition() {
    if (navigator.geolocation)
      navigator.geolocation.getCurrentPosition(
        this._loadMap.bind(this),
        function () {
          alert('could not get your location ');
        }
      );
  }

  _loadMap(position) {
    const { latitude } = position.coords;
    const { longitude } = position.coords;

    const coords = [latitude, longitude];

    this.#map = L.map('map').setView(coords, this.#mapZoomLevel);

    L.tileLayer('https://{s}.tile.openstreetmap.fr/hot/{z}/{x}/{y}.png', {
      attribution:
        '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
    }).addTo(this.#map);

    //Handling click on maps , this event handler is from libaray
    this.#map.on('click', this._showForm.bind(this));

    this.#workouts.forEach(work => {
      this._renderWorkoutMarker(work);
    });
  }

  _showForm(mapE) {
    this.#mapEvent = mapE;
    form.classList.remove('hidden');
    inputDistance.focus();
  }

  _hideForm() {
    // empty the inputs
    inputElevation.value =
      inputDuration.value =
      inputDistance.value =
      inputCadence.value =
        '';

    // hide the input form
    form.style.display = 'none';
    form.classList.add('hidden');
    setTimeout(() => (form.style.display = 'grid'), 1000);
  }

  _toogleEvlevationFeild() {
    inputElevation.closest('.form-row').classList.toggle('form-row--hidden');
    inputCadence.closest('.form-row').classList.toggle('form-row--hidden');
  }

  _newWorkout(e) {
    const validateInput = (...inputs) =>
      inputs.every(inp => Number.isFinite(inp));
    const allPositive = (...inputs) => inputs.every(inp => inp > 0);
    e.preventDefault();

    //Get data from form
    const type = inputType.value;
    const distance = +inputDistance.value;
    const duration = +inputDuration.value;
    const { lat, lng } = this.#mapEvent.latlng;
    let workout;

    //If workout, Running create a Running object

    if (type === 'running') {
      const cadence = +inputCadence.value;
      //Check if data is valid
      if (
        !validateInput(distance, duration, cadence) ||
        !allPositive(distance, duration, cadence)
      )
        return alert('Input have to be positive number!');
      workout = new Running([lat, lng], distance, duration, cadence);
    }

    //If workout, Cycling create a Cycling object

    if (type === 'cycling') {
      const elevation = +inputElevation.value;
      //Check if data is valid
      if (
        !validateInput(distance, duration, elevation) ||
        !allPositive(distance, duration)
      )
        return alert('Input have to be positive number!');
      workout = new Cycling([lat, lng], distance, duration, elevation);
    }

    //Add new object to workout array
    this.#workouts.push(workout);

    //Render  workout on map as a marker
    this._renderWorkoutMarker(workout);

    //Render workout on list
    this._renderWorkout(workout);

    //Hide form + clear inputs
    this._hideForm();

    //set local storge method to all workout
    this._setLocalStorage();
  }
  _renderWorkoutMarker(workout) {
    L.marker(workout.coords)
      .addTo(this.#map)
      .bindPopup(
        L.popup({
          maxWidth: 250,
          minWidth: 100,
          autoClose: false,
          closeOnClick: false,
          className: `${workout.type}-popup`,
        })
      )
      .setPopupContent(
        `${workout.type === 'running' ? '🏃' : '🚵'} ${workout.desceptrion}`
      )
      .openPopup();
  }

  _renderWorkout(workout) {
    let html = `
    <li class="workout workout--${workout.type}" data-id="${workout.id}">
          <h2 class="workout-title">${workout.desceptrion}</h2>
          <div class="workout-details">
            <span class="workout-icon">${
              workout.type === 'running' ? '🏃' : '🚵'
            }</span>
            <span class="workout-value">${workout.distance}</span>
            <span class="workout-unit">km</span>
          </div>

          <div class="workout-details">
            <span class="workout-icon">⏱</span>
            <span class="workout-value">${workout.duration}</span>
            <span class="workout-unit">min</span>
          </div>
     
    `;

    if (workout.type === 'running')
      html += `
          <div class="workout-details">
            <span class="workout-icon">⚡️</span>
            <span class="workout-value">${workout.pace.toFixed(1)}</span>
            <span class="workout-unit">min/km</span>
          </div>
          <div class="workout-details">
            <span class="workout-icon">🦶</span>
            <span class="workout-value">${workout.cadence}</span>
            <span class="workout-unit">m</span>
          </div>
        </li>
            `;

    if (workout.type === 'cycling')
      html += `
            <div class="workout-details">
            <span class="workout-icon">⚡️</span>
            <span class="workout-value">${workout.speed.toFixed(1)}</span>
            <span class="workout-unit">km/h</span>
          </div>
          <div class="workout-details">
            <span class="workout-icon">⛰</span>
            <span class="workout-value">${workout.elevationGain}</span>
            <span class="workout-unit">m</span>
          </div>
          </li>
    `;

    form.insertAdjacentHTML('afterend', html);
  }

  _moveToPopup(e) {
    const workoutEl = e.target.closest('.workout');
    console.log(workoutEl);

    //Gaurd class
    if (!workoutEl) return;

    const workout = this.#workouts.find(
      work => work.id === workoutEl.dataset.id
    );
    console.log(workout);

    this.#map.setView(workout.coords, this.#mapZoomLevel, {
      animate: true,
      pan: {
        duration: 1,
      },
    });
  }

  _setLocalStorage() {
    localStorage.setItem('workouts', JSON.stringify(this.#workouts));
  }

  _getLocalStorage() {
    const data = JSON.parse(localStorage.getItem('workouts'));
    if (!data) return;

    this.#workouts = data; //restoring the data from local storage API

    this.#workouts.forEach(work => {
      this._renderWorkout(work);
    });
  }

  resizeTo() {
    localStorage.removeItem('workouts');
    location.reload();
  }
}

const app = new App();
