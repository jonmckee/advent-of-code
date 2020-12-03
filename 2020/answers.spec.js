import getInput from '../input';

import day1part1 from './day-1/part-1';
import day1part2 from './day-1/part-2';

import day2part1 from './day-2/part-1';
import day2part2 from './day-2/part-2';

import day3part1 from './day-3/part-1';
import day3part2 from './day-3/part-2';

describe('2020', () => {
    describe('day 1', () => {
        let input;

        beforeAll(() => {
            input = getInput('day-1');
        });

        describe('part 1', () => {
            it('should be 157059', () => {
                const answer = day1part1(input);

                expect(answer).toStrictEqual(157059);
            });
        });

        describe('part 2', () => {
            it('should be 165080960', () => {
                const answer = day1part2(input);

                expect(answer).toStrictEqual(165080960);
            });
        });
    });

    describe('day 2', () => {
        let input;

        beforeAll(() => {
            input = getInput('day-2', '\n', l => l);
        });

        describe('part 1', () => {
            it('should be 515', () => {
                const answer = day2part1(input);

                expect(answer).toStrictEqual(515);
            });
        });

        describe('part 2', () => {
            it('should be 711', () => {
                const answer = day2part2(input);

                expect(answer).toStrictEqual(711);
            });
        });
    });

    describe('day 3', () => {
        let input;

        beforeAll(() => {
            input = getInput('day-3', '\n', l => l);
        });

        describe('part 1', () => {
            it('should be 198', () => {
                const answer = day3part1(input);

                expect(answer).toStrictEqual(198);
            });
        });

        describe('part 2', () => {
            it('should be 5140884672', () => {
                const answer = day3part2(input);

                expect(answer).toStrictEqual(5140884672);
            });
        });
    });
});