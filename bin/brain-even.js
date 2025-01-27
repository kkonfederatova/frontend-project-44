#!/usr/bin/env node
import readlineSync from 'readline-sync';

import {
  askName, getRandomNumber, isNumberEven, isAnswerEven,
// eslint-disable-next-line import/extensions
} from '../src/index.js';

let answer;
let number;

const name = askName();

let i = 1;
let isAnswerTrue = true;
while (isAnswerTrue && i < 4) {
  number = getRandomNumber();
  console.log(`Question: ${number}`);
  answer = readlineSync.question('Your answer: ');

  if (isNumberEven(number) === isAnswerEven(answer)) {
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
