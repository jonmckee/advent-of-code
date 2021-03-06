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
    },
    day8: {
        input: () => getInput('day-8', parsers.newLine, mappers.toPair(' ')),
        part1: require('./day-8/part-1'),
        part2: require('./day-8/part-2')
    },
    day9: {
        input: () => getInput('day-9', parsers.newLine, mappers.toNumber),
        part1: require('./day-9/part-1'),
        part2: require('./day-9/part-2')
    },
    day10: {
        input: () => getInput('day-10', parsers.newLine, mappers.toNumber),
        part1: require('./day-10/part-1'),
        part2: require('./day-10/part-2')
    },
    day11: {
        input: () => getInput('day-11', parsers.newLine, mappers.toChar),
        part1: require('./day-11/part-1'),
        part2: require('./day-11/part-2')
    }
};

export const answers = {
    day1: { part1: 157059, part2: 165080960 },
    day2: { part1: 515, part2: 711 },
    day3: { part1: 198, part2: 5140884672 },
    day4: { part1: 182, part2: 109 },
    day5: { part1: 880, part2: 731 },
    day6: { part1: 6587, part2: 3235 },
    day7: { part1: 211, part2: 12414 },
    day8: { part1: 1930, part2: 1688 },
    day9: { part1: 542529149, part2: 75678618 },
    day10: { part1: 2592, part2: 198428693313536 },
    day11: { part1: 2470, part2: 2259 }
};
