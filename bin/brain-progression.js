#!/usr/bin/env node
import readlineSync from 'readline-sync';

import {
  askName, brainProgression,
  // eslint-disable-next-line import/extensions
} from '../src/index.js';

const name = askName();
brainProgression(name);
