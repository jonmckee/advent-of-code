const toSum = (sum, x) => sum + x;

export default input => input.map(answers => new Set(answers.join('')).size).reduce(toSum);