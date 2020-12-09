import fs from 'fs';
import path from 'path';

export const mappers = {
    toGroup: g => g.split(parsers.newLine),
    toNumber: n => +n,
    toPair: split => n => n.split(split)
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
