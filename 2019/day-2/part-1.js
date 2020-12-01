import intcode from '../int-code';

import getInput from '../../input';
const input = getInput(',');

console.log('Part 1: ', intcode(input, 0, 12, 2));
console.log('CORRECT: 7210630');
