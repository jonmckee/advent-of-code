import getInput from '../../input';
const [min, max] = getInput('-');

const range = Array(max - min + 1).fill(min).map((n, i) => n + i);

const getDigitArray = n => `${n}`.split('').map(d => +d);
const adjacentDigitIsSame = (digit, i, digits) => i < digits.length - 1 && digit === digits[i + 1];

const hasAdjacentDigits = n => {
    return getDigitArray(n).some(adjacentDigitIsSame);
};

const hasNoDecreasingDigits = n => {
    const digits = getDigitArray(n);
    const subsequentDigitNotDecreasing = (digit, i) => digits[i + 1] >= digit;

    return digits.slice(0, digits.length - 1).every(subsequentDigitNotDecreasing);
};

const hasNoMoreThanTwoAdjacentDigits = n => {
    const digits = getDigitArray(n);
    const adjacentDigits = [...new Set(digits.filter(adjacentDigitIsSame))];

    return !adjacentDigits.every(d => `${n}`.includes(`${d}${d}${d}`));
};

const answer = range.filter(n =>
    hasAdjacentDigits(n)
    && hasNoDecreasingDigits(n)
    && hasNoMoreThanTwoAdjacentDigits(n)
).length;

console.log('Part 2: ', answer);
console.log('CORRECT: 1142');
