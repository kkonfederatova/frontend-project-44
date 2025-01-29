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
    [a, b] = [b, a % b];
  }
  return a;
};

export const makeArithmeticProgression = () => {
  const step = getRandomNumber(10) + 1;
  const size = getRandomNumber(5) + 5;
  const base = getRandomNumber(10);
  const missingItemIndex = getRandomNumber(size - 1);
  let item = base;
  const arithmeticProgression = [];
  for (let i = 0; i < size; i++) {
    arithmeticProgression.push(item);
    item += step;
  }
  const missingItem = arithmeticProgression[missingItemIndex];
  arithmeticProgression[missingItemIndex] = '..';
  return [arithmeticProgression, missingItem];
};

export const isNumberPrime = (number) => {
  let count = 0;
  const divider = number;
  while (count < 3 && divider != 0) {
    if (number % divider === 0) {
      count += 1;
    }
  }

  return (count === 2) ? 'yes' : 'no';
};
