`use strict`;
const bill=1500;
const tip=bill>=50 && bill<=300 ? (15/1000 ) * bill : (20 / 100) * bill;
console.log(`" the bill value is ${bill} and yourtip is ${tip} so your total is ${bill+ tip}"`)