export const hasTwoNumbersThatSumTo = (input, target) =>
    input.some(_x => input.includes(target - _x));

export default input =>
    input.filter(n => hasTwoNumbersThatSumTo(input, 2020 - n)).product();
