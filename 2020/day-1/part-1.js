const toProduct = (product, n) => product * n;

export default (input) =>
    input.filter(_x => input.includes(2020 - _x))
        .reduce(toProduct, 1);