const validPassword = line => {
    const [pos, character, string] = line.split(' ');
    const [a, b] = pos.split('-');
    const strArr = string.split('');

    return [strArr[a - 1], strArr[b - 1]].count(c => c === character[0]) === 1;
};

export default input => input.count(validPassword);
