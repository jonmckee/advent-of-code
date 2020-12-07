import '../utils';

import * as solutions from './solutions';
import * as answers from './answers';

function testSolution(solutions, answers) {
    return () => {
        const input = solutions.input();

        expect(solutions.part1(input)).toStrictEqual(answers.part1);
        expect(solutions.part2(input)).toStrictEqual(answers.part2);
    };
}

describe('2020', () => {
    Object.keys(solutions).forEach(day => {
        it(day, testSolution(solutions[day], answers[day]));
    });
});
