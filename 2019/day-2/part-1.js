const intcode = require('../int-code');
const input = require('../input')().split(',').map(n => +n);

console.log('Part 1: ', intcode(input, 0, 12, 2));
console.log('CORRECT: 7210630');
