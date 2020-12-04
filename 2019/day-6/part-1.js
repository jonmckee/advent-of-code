import getInput from '../../input';

const input = getInput('\n', toNumber, o => o.split(')'));

const toSum = (sum, n) => sum + n;

const orbits = input.reduce((orbits, [object, satellite]) => {
    if (orbits[object]) orbits[object].push(satellite);
    else orbits[object] = [satellite];

    return orbits;
}, {});

function countOrbits(sum, object) {
    const satellites = orbits[object];

    if (!satellites) {
        return sum;
    } else {
        return sum + satellites.map(s => countOrbits(sum + 1, s)).reduce(toSum)
    }
}

const centerOfMass = orbits.COM;
const answer = countOrbits(centerOfMass.length, centerOfMass);

console.log('Part 1:', answer);
console.log('CORRECT 130681');
