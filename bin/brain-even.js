#!/usr/bin/env node
import readlineSync from 'readline-sync';

import {
  askName, brainEven,
// eslint-disable-next-line import/extensions
} from '../src/index.js';

let answer;
let number;

const name = askName();
console.log('Answer "yes" if the number is even, otherwise answer "no".');
brainEven(name);
