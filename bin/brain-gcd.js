#!/usr/bin/env node
import {
  askName, brainGcd,
  // eslint-disable-next-line import/extensions
} from '../src/index.js';

const name = askName();
brainGcd(name);
