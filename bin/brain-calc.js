#!/usr/bin/env node
import {
  askName, brainCalc,
// eslint-disable-next-line import/extensions
} from '../src/index.js';

const name = askName();
brainCalc(name);
