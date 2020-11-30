const input = require('../input')().split('\n').map(o => o.split(')'));
const toSum = (sum, n) => sum + n;

const orbits = input.reduce((orbits, [object, satellite]) => {
    if (orbits[object]) orbits[object].push(satellite);
    else orbits[object] = [satellite];

    return orbits;
}, {});

console.log(orbits);
const answer = '';

console.log('Part 2:', answer);
// console.log('CORRECT');