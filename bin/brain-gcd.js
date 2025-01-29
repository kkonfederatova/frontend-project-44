#!/usr/bin/env node
import readlineSync from 'readline-sync';

import {
  askName, getGCD, getRandomNumber,
  // eslint-disable-next-line import/extensions
} from '../src/index.js';

let answer;
let a;
let b;
let correctAnswer;

const name = askName();
console.log('Find the greatest common divisor of given numbers.');

let i = 1;
let isAnswerTrue = true;
while (isAnswerTrue && i < 4) {
  a = getRandomNumber();
  b = getRandomNumber();
  console.log(`Question: ${a} ${b}`);
  answer = readlineSync.question('Your answer: ');

  correctAnswer = getGCD(a, b);

  if (parseInt(answer, 10) === correctAnswer) {
    console.log('Correct!');
    isAnswerTrue = true;
    i += 1;
  } else {
    console.log("'yes' is wrong answer ;(. Correct answer was 'no'.");
    console.log(`Let's try again, ${name}!`);
    isAnswerTrue = false;
  }
}

if (isAnswerTrue === true) {
  console.log(`Congratulations, ${name}!`);
}
