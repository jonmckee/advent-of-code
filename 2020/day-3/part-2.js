import { getTreesForSlope } from './part-1';

const slopes = [
    [1, 1],
    [3, 1],
    [5, 1],
    [7, 1],
    [1, 2]
];

export default input => slopes.map(getTreesForSlope(input)).product();
