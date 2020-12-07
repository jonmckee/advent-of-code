import input, { mappers, parsers } from '../input';

const getInput = input('2020');

export const solutions = {
    day1: {
        input: () => getInput('day-1', parsers.newLine, mappers.toNumber),
        part1: require('./day-1/part-1'),
        part2: require('./day-1/part-2')
    },
    day2: {
        input: () => getInput('day-2'),
        part1: require('./day-2/part-1'),
        part2: require('./day-2/part-2')
    },
    day3: {
        input: () => getInput('day-3'),
        part1: require('./day-3/part-1'),
        part2: require('./day-3/part-2')
    },
    day4: {
        input: () => getInput('day-4', parsers.groups, mappers.toGroup),
        part1: require('./day-4/part-1'),
        part2: require('./day-4/part-2')
    },
    day5: {
        input: () => getInput('day-5'),
        part1: require('./day-5/part-1'),
        part2: require('./day-5/part-2')
    },
    day6: {
        input: () => getInput('day-6', parsers.groups, mappers.toGroup),
        part1: require('./day-6/part-1'),
        part2: require('./day-6/part-2')
    },
    day7: {
        input: () => getInput('day-7', parsers.newLine),
        part1: require('./day-7/part-1'),
        part2: require('./day-7/part-2')
    }
};

export const answers = {
    day1: { part1: 157059, part2: 165080960 },
    day2: { part1: 515, part2: 711 },
    day3: { part1: 198, part2: 5140884672 },
    day4: { part1: 182, part2: 109 },
    day5: { part1: 880, part2: 731 },
    day6: { part1: 6587, part2: 3235 },
    day7: { part1: 211, part2: 12414 }
};
