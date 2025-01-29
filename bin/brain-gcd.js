#!/usr/bin/env node
import readlineSync from 'readline-sync';

import {
  askName, brainGcd,
  // eslint-disable-next-line import/extensions
} from '../src/index.js';

const name = askName();
console.log('Find the greatest common divisor of given numbers.');
brainGcd(name);
