export default input =>
    input.map(answers => new Set(answers.join('')).size).sum();
