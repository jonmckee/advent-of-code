const toProduct = (product, n) => product * n;

const hasTwoNumbersThatSumTo = (input, target) => input.some(_x => input.includes(target - _x))

export default (input) => {
    return input.filter(n => hasTwoNumbersThatSumTo(input, 2020 - n))
        .reduce(toProduct, 1);
};