import fs from 'fs';
import path from 'path';

const toNumber = n => +n;
const newLine = '\n';

export default year => (day, map = toNumber, split = newLine) => {
    return fs
        .readFileSync(path.resolve(year, day, 'input.txt'), 'utf-8')
        .split(split)
        .map(map);
};
