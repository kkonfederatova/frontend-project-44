#!/usr/bin/env node
import readlineSync from 'readline-sync';

import {
  askName, brainCalc,
// eslint-disable-next-line import/extensions
} from '../src/index.js';

const name = askName();
console.log('What is the result of the expression?');
brainCalc(name)
