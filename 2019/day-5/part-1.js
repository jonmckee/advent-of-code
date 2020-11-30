const input = require('../input')().split(',').map(n => +n);
const intcode = require('../int-code');

console.log('Part 1: ');
intcode(input, 1);

console.log('CORRECT 7566643');
