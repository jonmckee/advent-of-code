import fs from 'fs';
import path from 'path';

export const mappers = {
    toNumber: n => +n,
    toGroup: g => g.split(parsers.newLine)
};

export const parsers = {
    groups: '\n\n',
    newLine: '\n'
};

export default year => (day, split = parsers.newLine, map) => {
    const input = fs
        .readFileSync(path.resolve('src', year, day, 'input.txt'), 'utf-8')
        .split(split);

    if (map) {
        return input.map(map);
    } else {
        return input;
    }
};
