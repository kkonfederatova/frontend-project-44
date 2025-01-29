import readlineSync from 'readline-sync';

export const askName = () => {
  console.log('Welcome to the Brain Games!');
  const name = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${name}!`);
  return name;
};

export const getRandomNumber = (max = 100) => Math.floor(Math.random() * max);

export const isNumberEven = (number) => (number % 2 === 0);

export const isAnswerEven = (answer) => (answer === 'yes');

export const getRandomMathOperation = () => {
  const mathOperation = ['+', '-', '*'];
  const index = getRandomNumber(3);
  return mathOperation[index];
};

// eslint-disable-next-line consistent-return
export const makeExpression = () => {
  const a = getRandomNumber();
  const b = getRandomNumber();
  const mathOperation = getRandomMathOperation();

  console.log(`Question: ${a} ${mathOperation} ${b}`);
  switch (mathOperation) {
    case '+':
      return a + b;
    case '-':
      return a - b;
    case '*':
      return a * b;
    default:
      console.log('There is no expression');
  }
};

export const getGCD = (a, b) => {
  if (a === 0) return b;
  if (b === 0) return a;
  if (a === b) return a;

  while (b !== 0) {
    // eslint-disable-next-line no-param-reassign
    [a, b] = [b, a % b];
  }
  return a;
};

export const makeArithmeticProgression = () => {
  const minProgressionStep = 1;
  const minPogressionSize = 5;
  const step = getRandomNumber(10) + minProgressionStep;
  const size = getRandomNumber(5) + minPogressionSize;
  const base = getRandomNumber(10);
  const missingItemIndex = getRandomNumber(size - 1);
  let item = base;
  const arithmeticProgression = [];
  for (let i = 0; i < size; i += 1) {
    arithmeticProgression.push(item);
    item += step;
  }
  const missingItem = arithmeticProgression[missingItemIndex];
  arithmeticProgression[missingItemIndex] = '..';
  return [arithmeticProgression, missingItem];
};

export const isNumberPrime = (number) => {
  if (number < 2) return 'no';
  if (number === 2 || number === 3) return 'yes';
  if (number % 2 === 0 || number % 3 === 0) return 'no';

  for (let i = 5; i * i <= number; i += 6) {
    if (number % i === 0 || number % (i + 2) === 0) return 'no';
  }

  return 'yes';
};

export const brainEven = (name) => {
  let answer;
  let number;
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
      console.log(`Let's try again, ${name}!`);
      isAnswerTrue = false;
    }
  }

  if (isAnswerTrue === true) {
    console.log(`Congratulations, ${name}!`);
  }
};

export const brainCalc = (name) => {
  let result;
  let answer;
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
      console.log(`Let's try again, ${name}!`);
      isAnswerTrue = false;
    }
  }
  if (isAnswerTrue === true) {
    console.log(`Congratulations, ${name}!`);
  }
};

export const brainGcd = (name) => {
  let answer;
  let a;
  let b;
  let correctAnswer;
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
};

export const brainProgression = (name) => {
  let answer;
  let [arithmeticProgression, missingItem] = [];
  let i = 1;
  let isAnswerTrue = true;
  console.log('What number is missing in the progression?');
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
      console.log(`Let's try again, ${name}!`);
      isAnswerTrue = false;
    }
  }

  if (isAnswerTrue === true) {
    console.log(`Congratulations, ${name}!`);
  }
};
