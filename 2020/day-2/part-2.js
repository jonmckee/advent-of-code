const checkPasswords = (line) => {
    const [pos, character, string] = line.split(' ');
    const [a, b] = pos.split('-')
    const char = character[0];

    const strArr = string.split('');

    return [strArr[a - 1], strArr[b - 1]].filter(c => c === char).length === 1;
};

export default (input) => input.filter(checkPasswords).length;