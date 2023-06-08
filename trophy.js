`use strict`;
const dolphins =(96+112+101)/3;
const koalas=(88,91,110)/3;
const isDraw =  dolphins === koalas && dolphins + koalas > 100;
const minScore = 100;

console.log(dolphinsA);
console.log(koalas);

if (isDraw && koalas>= minScore && dolphins >= minScore) {
  console.log("Both wins the trophy");
} else if (dolphins> koalas && dolphins>= minScore) {
  console.log(`Dolphins is the winner 🏆. Score : ${dolphins}`);
} else if (koalas> dolphins && koalas>= minScore) {
  console.log(`Koalas is the winner 🏆. Score : ${koalas}`);
} else {
  console.log('No one wins the trophy 😔');
}