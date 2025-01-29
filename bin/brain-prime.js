#!/usr/bin/env node
import readlineSync from 'readline-sync';

import {
  askName, getRandomNumber, isNumberPrime,
  // eslint-disable-next-line import/extensions
} from '../src/index.js';

let answer;
let number;

const name = askName();
console.log('Answer "yes" if given number is prime. Otherwise answer "no".');

let i = 1;
let isAnswerTrue = true;
while (isAnswerTrue && i < 4) {
  number = getRandomNumber();
  console.log(`Question: ${number}`);
  answer = readlineSync.question('Your answer: ');

  if (isNumberPrime(number) === answer) {
    console.log('Correct!');
    isAnswerTrue = true;
    i += 1;
  } else {
    console.log("'yes' is wrong answer ;(. Correct answer was 'no'.");
    console.log(`Let's try again, ${name}`);
    isAnswerTrue = false;
  }
}

if (isAnswerTrue === true) {
  console.log(`Congratulations, ${name}`);
}
