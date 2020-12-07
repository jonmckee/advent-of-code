import input, { mappers, parsers } from '../input';

const getInput = input('2020');

export const day1 = {
    input: () => getInput('day-1', parsers.newLine, mappers.toNumber),
    part1: require('./day-1/part-1').default,
    part2: require('./day-1/part-2').default
};

export const day2 = {
    input: () => getInput('day-2'),
    part1: require('./day-2/part-1').default,
    part2: require('./day-2/part-2').default
};

export const day3 = {
    input: () => getInput('day-3'),
    part1: require('./day-3/part-1').default,
    part2: require('./day-3/part-2').default
};

export const day4 = {
    input: () => getInput('day-4', parsers.groups, mappers.toGroup),
    part1: require('./day-4/part-1').default,
    part2: require('./day-4/part-2').default
};

export const day5 = {
    input: () => getInput('day-5'),
    part1: require('./day-5/part-1').default,
    part2: require('./day-5/part-2').default
};

export const day6 = {
    input: () => getInput('day-6', parsers.groups, mappers.toGroup),
    part1: require('./day-6/part-1').default,
    part2: require('./day-6/part-2').default
};
