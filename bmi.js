'use strict';

const username = 'jason';
const password = 1234;
let balance = 10000;
const withdraw = 2200;
const deposit = 4000;

if (username === 'jason' && password === 1234) {
  console.log('login successful');
  balance -= withdraw;
  console.log(`your balance is ${balance}`);
  balance += deposit;
  console.log(`your balance is ${balance}`);
} else {
  console.log('login failed');
}