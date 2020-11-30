const input = require('../input')().split(',').map(n => +n);
const intcode = require('../int-code');

console.log('Part 2: ');
intcode(input, 5);

console.log('CORRECT 9265694');