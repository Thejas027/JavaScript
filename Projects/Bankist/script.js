'use strict';

// Data

const account1 = {
  owner: 'Jonas Schmedtmann',
  movements: [200, 455.23, -306.5, 25000, -642.21, -133.9, 79.97, 1300],
  interestRate: 1.2, // %
  pin: 1111,

  movementsDates: [
    '2024-01-18T21:31:17.178Z',
    '2024-02-01T07:42:02.383Z',
    '2024-04-02T09:15:04.904Z',
    '2024-04-20T10:17:24.185Z',
    '2024-04-23T14:11:59.604Z',
    '2020-05-26T17:01:17.194Z',
    '2024-04-27T23:36:17.929Z',
    '2024-04-29T10:51:36.790Z',
  ],
  currency: 'EUR',
  locale: 'pt-PT',
};

const account2 = {
  owner: 'Jessica Davis',
  movements: [5000, 3400, -150, -790, -3210, -1000, 8500, -30],
  interestRate: 1.5,
  pin: 2222,

  movementsDates: [
    '2024-01-18T21:31:17.178Z',
    '2024-02-01T07:42:02.383Z',
    '2024-04-02T09:15:04.904Z',
    '2024-04-20T10:17:24.185Z',
    '2024-04-24T14:11:59.604Z',
    '2020-05-27T17:01:17.194Z',
    '2024-04-28T23:36:17.929Z',
    '2024-04-29T10:51:36.790Z',
  ],
  currency: 'USD',
  locale: 'en-US',
};

const account3 = {
  owner: 'Steven Thomas Williams',
  movements: [200, -200, 340, -300, -20, 50, 400, -460],
  interestRate: 0.7,
  pin: 3333,
  movementsDates: [
    '2024-01-18T21:31:17.178Z',
    '2024-02-11T07:42:02.383Z',
    '2024-04-22T09:15:04.904Z',
    '2024-04-20T10:17:24.185Z',
    '2024-04-23T14:11:59.604Z',
    '2020-05-26T17:01:17.194Z',
    '2024-04-28T23:36:17.929Z',
    '2024-04-30T10:51:36.790Z',
  ],
  currency: 'JPY',
  locale: 'pt-PT',
};

const account4 = {
  owner: 'Sarah Smith',
  movements: [430, 1000, 700, 50, 90],
  interestRate: 1,
  pin: 4444,
  movementsDates: [
    '2024-01-18T21:31:17.178Z',
    '2024-02-07T07:42:02.383Z',
    '2024-04-12T09:15:04.904Z',
    '2024-04-15T10:17:24.185Z',
    '2024-04-24T14:11:59.604Z',
    '2020-05-27T17:01:17.194Z',
    '2024-04-28T23:36:17.929Z',
    '2024-04-29T10:51:36.790Z',
  ],
  currency: 'USD',
  locale: 'en-US',
};

const accounts = [account1, account2, account3, account4];

// Elements
const labelWelcome = document.querySelector('.welcome');
const labelDate = document.querySelector('.date');
const labelBalance = document.querySelector('.balance_value');
const labelSumIn = document.querySelector('.summary_value--in');
const labelSumOut = document.querySelector('.summary_value--out');
const labelSumInterest = document.querySelector('.summary_value--interest');
const labelTimer = document.querySelector('.timer');

const containerApp = document.querySelector('.app');
const containerMovements = document.querySelector('.movements');

const btnLogin = document.querySelector('.login_btn');
const btnTransfer = document.querySelector('.form_btn--transfer');
const btnLoan = document.querySelector('.form_btn--loan');
const btnClose = document.querySelector('.form_btn--close');
const btnSort = document.querySelector('.btn--sort');

const inputLoginUsername = document.querySelector('.login_input--user');
const inputLoginPin = document.querySelector('.login_input--pin');
const inputTransferTo = document.querySelector('.form_input--to');
const inputTransferAmount = document.querySelector('.form_input--amount');
const inputLoanAmount = document.querySelector('.form_input--loan-amount');
const inputCloseUsername = document.querySelector('.form_input--user');
const inputClosePin = document.querySelector('.form_input--pin');

//------------------------Formatting the dates

const formatMovementDate = function (date) {
  const calcDaysPassed = (date1, date2) =>
    Math.round(Math.abs(date2 - date1) / (1000 * 60 * 60 * 24));

  const daysPassed = calcDaysPassed(new Date(), date);
  console.log(daysPassed);

  if (daysPassed === 0) return 'Today';
  if (daysPassed === 1) return 'Yesterday';
  if (daysPassed <= 7) return `${daysPassed} days ago`;

  // const day = `${date.getDate()}`.padStart(2, 0);
  // const month = `${date.getMonth() + 1}`.padStart(2, 0);
  // const year = `${date.getFullYear()}`;
  // return `${day}/${month}/${year}`;
  const days = new Intl.DateTimeFormat('kn-IN').format(date);
  return days;
};

//-------------currency formatter

const currencyFormat = function (value, locale, currency) {
  return new Intl.NumberFormat(locale, {
    style: 'currency',
    currency: currency,
  }).format(value);
};

//------------display movements part , where this function dispalys all the deposits and with drawals in the container movements section

const displayMovements = function (acc, sort = false) {
  containerMovements.innerHTML = '';

  const movs = sort
    ? acc.movements.slice().sort((a, b) => a - b)
    : acc.movements;

  movs.forEach(function (mov, i) {
    const type = mov > 0 ? 'deposit' : 'withdrawal';

    const date = new Date(acc.movementsDates[i]);
    const displayDate = formatMovementDate(date);

    const formattedMovCurrency = currencyFormat(mov, acc.locale, acc.currency);

    const html = `
    <div class="movements_row">
    <div class="movements_type movements_type--${type}">${i + 1}${type}</div>
      <div class="movements_date">${displayDate}</div>
    <div class="movements_value">${formattedMovCurrency}</div>
  </div>
  `;

    containerMovements.insertAdjacentHTML('afterbegin', html);
    // console.log(mov);
  });
};

//--------------------calculates the total balance , and displays it at the balance part

const calcDisplayMovements = function (accns) {
  accns.balance = accns.movements.reduce((acc, mov) => acc + mov, 0);
  labelBalance.textContent = currencyFormat(
    accns.balance,
    accns.locale,
    accns.currency
  );
};

//------------------------ summary part
// where it calculates the total incomes,outgoing and interest rate and displays it on the summary section

const calcDisplaySummary = function (acc) {
  const incomes = acc.movements
    .filter(mov => mov > 0)
    .reduce((acc, curr) => acc + curr, 0);
  labelSumIn.textContent = currencyFormat(incomes, acc.locale, acc.currency);

  const outGoingMoney = acc.movements
    .filter(mov => mov < 0)
    .reduce((acc, curr) => acc + curr, 0);

  labelSumOut.textContent = currencyFormat(
    Math.abs(outGoingMoney),
    acc.locale,
    acc.currency
  );

  const interest = acc.movements
    .filter(mov => mov > 0)
    .map(deposit => (deposit * acc.interestRate) / 100)
    .filter(mov => mov >= 5)
    .reduce((acc, interest) => acc + interest, 0);

  labelSumInterest.textContent = currencyFormat(
    interest,
    acc.locale,
    acc.currency
  );
};

// username section,where for login purpose the username is created..

const createUserNames = function (accs) {
  accs.forEach(function (acc) {
    acc.username = acc.owner // acc.username is the new property that has been created
      .toLowerCase()
      .split(' ')
      .map(name => name[0])
      .join('');
  });
};
createUserNames(accounts);

//Refactoring

const updateUI = function (acc) {
  // display movements
  displayMovements(acc);
  //display balance
  calcDisplayMovements(acc);
  //display summary
  calcDisplaySummary(acc);
};

// countdown timer section

const startLogOutTimer = function () {
  const tick = function () {
    const min = String(Math.trunc(time / 60)).padStart(2, 0);
    const sec = String(time % 60).padStart(2, 0);

    //in each call print the time
    labelTimer.textContent = `${min}:${sec}`;

    //when time = 0 , stop timer and logout
    if (time === 0) {
      clearInterval(timer);
      labelWelcome.textContent = 'Log in to get started';
      containerApp.style.opacity = 0;
    }
    //decrease by 1s
    time--;
  };

  //set time to 5 min
  let time = 10;
  // call for every second
  tick();
  const timer = setInterval(tick, 1000);

  inputTransferTo.value = inputTransferAmount.value = ' ';
  inputLoanAmount.value = '';
  inputCloseUsername.value = inputClosePin.value = '';
  return timer;
};

//--------------------------login section

let currentAccount, timer;

btnLogin.addEventListener('click', function (e) {
  // prevent form from submitting
  e.preventDefault();

  currentAccount = accounts.find(
    acc => acc.username === inputLoginUsername.value
  );

  if (currentAccount?.pin === Number(inputLoginPin.value)) {
    //display ui
    labelWelcome.textContent = `Welcome back,${
      currentAccount.owner.split(' ')[0]
    }`;
    containerApp.style.opacity = 100;

    // //adjusting day,month,year
    const now = new Date();
    //----------just kept for references....
    // const day = `${now.getDate()}`.padStart(2, 0);
    // const month = `${now.getMonth() + 1}`.padStart(2, 0);
    // const year = now.getFullYear();
    // const hour = ` ${now.getHours()}`.padStart(0, 2);
    // const min = `${now.getMinutes()}`.padStart(0, 2);

    const options = {
      hour: 'numeric',
      minute: 'numeric',
      second: 'numeric',
      day: 'numeric',
      month: 'long',
      year: 'numeric',
    };

    // to display the date and time accordingly based on machine will be
    // const locale = navigator.language;

    const today = new Intl.DateTimeFormat('kn-IN', options).format(now);
    // const today = new Intl.DateTimeFormat(locale, options).format(now);  // uncomment this to display based on browser setup
    // labelDate.textContent = `${day}/${month}/${year},${hour}:${min}`;
    labelDate.textContent = today;

    //clear feilds
    inputLoginUsername.value = inputLoginPin.value = '';
    inputLoginPin.blur();

    if (timer) clearInterval(timer);
    timer = startLogOutTimer();
    updateUI(currentAccount);
  }
});

//-------------------------transfer button
btnTransfer.addEventListener('click', function (e) {
  e.preventDefault();

  const amount = Number(inputTransferAmount.value);
  const receiverAcc = accounts.find(
    acc => acc.username === inputTransferTo.value
  );
  inputTransferTo.value = inputTransferAmount.value = ' ';
  inputTransferAmount.blur();
  if (
    amount > 0 &&
    receiverAcc &&
    currentAccount.balance >= amount &&
    receiverAcc?.username !== currentAccount.username
  ) {
    // doing the transfer
    currentAccount.movements.push(-amount);
    receiverAcc.movements.push(amount);

    //add transfer date
    currentAccount.movementsDates.push(new Date().toISOString());
    receiverAcc.movementsDates.push(new Date().toISOString());

    //update UI
    updateUI(currentAccount);

    //set new time interval
    clearInterval(timer);
    timer = startLogOutTimer();
  }
});

//----------------------------request loan
btnLoan.addEventListener('click', function (e) {
  e.preventDefault();
  const loanAmt = Math.floor(inputLoanAmount.value);
  if (
    loanAmt > 0 &&
    currentAccount.movements.some(mov => mov >= loanAmt * 0.1)
  ) {
    setTimeout(function () {
      // add movement
      currentAccount.movements.push(loanAmt);

      //add loan date
      currentAccount.movementsDates.push(new Date().toISOString());

      //update UI
      updateUI(currentAccount);

      //reset the time interval
      clearInterval(timer);
      timer = startLogOutTimer();
    }, 2500);
  }
  inputLoanAmount.value = '';
});

//-----------------button close
btnClose.addEventListener('click', function (e) {
  e.preventDefault();
  if (
    inputCloseUsername.value === currentAccount.username &&
    Number(inputClosePin.value) === currentAccount.pin
  ) {
    const index = accounts.findIndex(
      acc => acc.username === currentAccount.username
    );
    console.log(index);
    accounts.splice(index, 1);
    containerApp.style.opacity = 0;
  }
  inputCloseUsername.value = inputClosePin.value = '';
});

//------------------sort btn
let sorted = false;
btnSort.addEventListener('click', function (e) {
  e.preventDefault();
  displayMovements(currentAccount, !sorted);
  sorted = !sorted;
});
