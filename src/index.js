import readlineSync from 'readline-sync';

export const askName = () => {
  console.log('Welcome to the Brain Games!');
  const name = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${name}!`);
  console.log('Answer "yes" if the number is even, otherwise answer "no".');
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
