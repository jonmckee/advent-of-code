import '../src/utils';

import * as years from '../src';

function testSolution(solutions, answers) {
    return () => {
        const input = solutions.input();

        expect(solutions.part1.default(input)).toStrictEqual(answers.part1);
        expect(solutions.part2.default(input)).toStrictEqual(answers.part2);
    };
}

describe('Advent of Code', () => {
    Object.keys(years).forEach(year => {
        const name = year.replace('year', '');

        describe(name, () => {
            const { solutions, answers } = years[year];

            Object.keys(solutions).forEach(day => {
                const _day = day.slice(3);

                it(`Day ${_day}`, testSolution(solutions[day], answers[day]));
            });
        });
    });
});
