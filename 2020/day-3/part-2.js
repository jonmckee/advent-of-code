import {getTreesForSlope} from "./part-1";

export default (input) => {
    return [
        [1, 1],
        [3, 1],
        [5, 1],
        [7, 1],
        [1, 2]
    ].map(getTreesForSlope(input))
        .reduce((product, n) => product * n);
}