import '../src/utils';

import { years } from '../src';

function testSolution(solutions, answers) {
    const input = solutions.input();

    return () => {
        expect(solutions.part1.default(input)).toStrictEqual(answers.part1);
        expect(solutions.part2.default(input)).toStrictEqual(answers.part2);
    };
}

describe('Advent of Code', () => {
    Object.keys(years).forEach(year => {
        describe(year, () => {
            const { solutions, answers } = years[year];

            Object.keys(solutions).forEach(day => {
                const _day = day.slice(3);
                const solution = solutions[day];

                describe(`Day ${_day}`, () => {
                    let input;

                    beforeAll(() => {
                        input = solution.input();
                    });

                    it('Part 1', () => {
                        expect(solution.part1.default(input)).toStrictEqual(
                            answers[day].part1
                        );
                    });

                    it('Part 2', () => {
                        expect(solution.part2.default(input)).toStrictEqual(
                            answers[day].part2
                        );
                    });
                });
            });
        });
    });
});
