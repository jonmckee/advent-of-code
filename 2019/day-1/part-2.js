import getInput from '../../input';
const input = getInput();

const calculateFuel = m => Math.floor(m / 3) - 2;
const add = (sum, x) => sum + x;

const getFuelForMass = mass => {
    const fuel = calculateFuel(mass);

    return fuel > 0 ? fuel + getFuelForMass(fuel) : 0;
};

const answer = input.map(getFuelForMass).reduce(add);

console.log('Part 2: ', answer);
console.log('CORRECT: 5277255');
