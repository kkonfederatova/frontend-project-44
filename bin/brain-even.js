#!/usr/bin/env node
import readlineSync from 'readline-sync';

const getRandomNumber = () => {
  const max = 100;
  return Math.floor(Math.random() * max);
};

const isNumberEven = (number) => (number % 2 === 0);

const isAnswerEven = (answer) => (answer === 'yes');

let name = '';
let answer;
let number;

console.log('Welcome to the Brain Games!');
name = readlineSync.question('May I have your name? ');
console.log(`Hello, ${name}!`);
console.log('Answer "yes" if the number is even, otherwise answer "no".');

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
