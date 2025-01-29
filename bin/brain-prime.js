#!/usr/bin/env node
import readlineSync from 'readline-sync';

import {
  askName, brainPrime,
  // eslint-disable-next-line import/extensions
} from '../src/index.js';

const name = askName();
brainPrime(name);
