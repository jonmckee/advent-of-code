import fs from 'fs';
import path from 'path';

const toNumber = n => +n;
const newLine = '\n';

export default (day, split = newLine, map = toNumber) => {
    const year = process.argv.slice(-1)[0].split('/').slice(-2)[0];

    return fs
        .readFileSync(path.resolve(year, day, 'input.txt'), 'utf-8')
        .split(split)
        .map(map);
};
