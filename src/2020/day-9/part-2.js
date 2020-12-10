import part1 from './part-1';

export default input => {
    const invalidNumber = part1(input);

    let start = 0,
        sum = input[start],
        end = start;

    while (sum !== invalidNumber) {
        end++;

        sum += input[end];

        if (sum > invalidNumber) {
            start++;
            sum = input[start];
            end = start;
        }
    }

    const range = input.slice(start, end + 1);

    return Math.min(...range) + Math.max(...range);
};
