const validPassword = line => {
    const [range, char, string] = line.split(' ');
    const [min, max] = range.split('-');
    const num = string.countChar(char[0]);

    return num >= min && num <= max;
};

export default input => input.count(validPassword);
