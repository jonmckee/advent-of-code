import getInput from '../input';

import day1part1 from './day-1/part-1';
import day1part2 from './day-1/part-2';

describe('day 1', () => {
    let input;

    beforeAll(() => {
        input = getInput('day-1');
    });

    describe('part 1', () => {
        it('should be UNSOLVED', () => {
            const answer = day1part1(input);

            expect(answer).toStrictEqual(157059);
        });
    });

    describe('part 2', () => {
        it('should be UNSOLVED', () => {
            const answer = day1part2(input);

            expect(answer).toStrictEqual(165080960);
        });
    });
});
