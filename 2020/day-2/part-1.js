export const count = (c, string) => string.split('').filter(_c => c === _c).length

const checkPasswords = (line) => {
    const [range, char, string] = line.split(' ');
    const [min, max] = range.split('-')
    const num = count(char[0], string);

    return num >= min && num <= max;
};

export default (input) => input.filter(checkPasswords).length;