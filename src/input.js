import fs from 'fs';
import path from 'path';

export const mappers = {
    toNumber: n => +n,
    toGroup: g => g.split(parsers.newLine)
};

export const parsers = {
    groups: '\n\n',
    newLine: '\n',
    none: ''
};

export default year => (day, split = parsers.newLine, map) => {
    const filePath = path.resolve('src', year, day, 'input.txt');
    const fileContents = fs.readFileSync(filePath, 'utf-8');

    if (split === parsers.none) {
        return fileContents;
    } else {
        const input = fileContents.split(split);

        if (map) {
            return input.map(map);
        } else {
            return input;
        }
    }
};
