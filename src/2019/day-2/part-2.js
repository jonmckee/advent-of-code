const intcode = require('../int-code');
import getInput from '../../input';
const input = getInput(',');

const desiredAnswer = 19690720;

for (let noun = 0; noun <= 99; noun++) {
    for (let verb = 0; verb <= 99; verb++) {
        if (intcode([...input], 0, noun, verb) === desiredAnswer) {
            console.log('Part 2: ', 100 * noun + verb);
        }
    }
}

console.log('CORRECT: 3892');
