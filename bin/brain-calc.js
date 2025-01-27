import readlineSync from 'readline-sync';

import {
  askName, makeExpression,
// eslint-disable-next-line import/extensions
} from '../src/index.js';

let result;
let answer;

const name = askName();
console.log('What is the result of the expression?');

let i = 1;
let isAnswerTrue = true;
while (isAnswerTrue && i < 4) {
  result = makeExpression();
  answer = readlineSync.question('Your answer: ');
  if (result === parseInt(answer, 10)) {
    console.log('Correct!');
    isAnswerTrue = true;
    i += 1;
  } else {
    console.log("'yes' is wrong answer ;(. Correct answer was 'no'.");
    console.log(`Let's try again, ${name}`);
    isAnswerTrue = false;
  }
}
