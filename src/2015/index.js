import input, { mappers, parsers } from '../input';

const getInput = input('2015');

export const solutions = {
    day1: {
        input: () => getInput('day-1', parsers.none),
        part1: require('./day-1/part-1'),
        part2: require('./day-1/part-2')
    },
    day2: {
        input: () => getInput('day-2'),
        part1: require('./day-2/part-1'),
        part2: require('./day-2/part-2')
    },
    day3: {
        input: () => getInput('day-3', parsers.none),
        part1: require('./day-3/part-1'),
        part2: require('./day-3/part-2')
    }
};

export const answers = {
    day1: { part1: 280, part2: 1797 },
    day2: { part1: 1586300, part2: 3737498 },
    day3: { part1: 2592, part2: 2360 }
};
