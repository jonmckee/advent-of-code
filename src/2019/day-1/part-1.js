import getInput from '../../input';
const input = getInput();

const calculateFuel = m => Math.floor(m / 3) - 2;
const add = (sum, x) => sum + x;

const answer = input.map(calculateFuel).reduce(add);

console.log('Part 1: ', answer);
console.log('CORRECT  3520097');
