#!/usr/bin/env node
import readlineSync from 'readline-sync';

import {
  askName, makeArithmeticProgression,
  // eslint-disable-next-line import/extensions
} from '../src/index.js';

let answer;
let [arithmeticProgression, missingItem] = [];

const name = askName();
console.log('What number is missing in the progression?');

let i = 1;
let isAnswerTrue = true;
while (isAnswerTrue && i < 4) {
  [arithmeticProgression, missingItem] = makeArithmeticProgression();
  console.log(`Question: ${arithmeticProgression.join(' ')}`);
  answer = readlineSync.question('Your answer: ');

  if (parseInt(answer, 10) === missingItem) {
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
