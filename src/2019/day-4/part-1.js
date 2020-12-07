import getInput from '../../input';
const [min, max] = getInput('-');

const range = Array(max - min + 1)
    .fill(min)
    .map((n, i) => n + i);

const getDigitArray = n => `${n}`.split('').map(d => +d);

const adjacentDigitIsSame = (digit, i, digits) =>
    i < digits.length - 1 && digits[i] === digits[i + 1];

const hasAdjacentDigits = n => {
    const digits = getDigitArray(n);

    return digits.some(adjacentDigitIsSame);
};

const hasNoDecreasingDigits = n => {
    const digits = getDigitArray(n);

    return digits.slice(0, digits.length - 1).every((digit, i) => {
        return digits[i + 1] >= digits[i];
    });
};

const answer = range.filter(
    n => hasAdjacentDigits(n) && hasNoDecreasingDigits(n)
).length;

console.log('Part 1: ', answer);
console.log('CORRECT: 1675');
