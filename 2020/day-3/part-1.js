export const getTreesForSlope = input => slope => {
    let x = 0;
    let y = 0;

    let trees = 0;

    while (y < input.length) {
        if (input[y][x] === '#') {
            trees++;
        }

        x = (x + slope[0]) % input[y].length;
        y += slope[1];
    }

    return trees;
};

export default input => getTreesForSlope(input)([3, 1]);
