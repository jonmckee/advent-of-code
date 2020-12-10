import { hasTwoNumbersThatSumTo } from '../day-1/part-2';

const PREAMBLE_SIZE = 25;

const getPreamble = (list, index, preambleSize) => {
    if (index >= preambleSize) {
        return list.slice(index - preambleSize, index);
    } else {
        throw new Error('Still in preamble ya dummy');
    }
};

export default input => {
    return input.slice(PREAMBLE_SIZE).find((number, i) => {
        const preamble = getPreamble(input, i + PREAMBLE_SIZE, PREAMBLE_SIZE);

        return !hasTwoNumbersThatSumTo(preamble, number);
    });
};
