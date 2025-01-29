#!/usr/bin/env node
import {
  askName, brainEven,
// eslint-disable-next-line import/extensions
} from '../src/index.js';

const name = askName();
brainEven(name);
