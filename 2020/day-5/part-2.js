import {toBinaryPairs} from "./part-1";

const COLUMNS = [0, 1, 2, 3, 4, 5, 6, 7];

const toSeatsByRow = (accum, seat) => {
    const [r, c] = seat;

    if (!accum[r]) {
        accum[r] = [c]
    } else {
        accum[r].push(c);
    }

    return accum;
};

export default input => {
    const toRowCol = seat => seat.map(s => parseInt(s, 2));

    const seats = input
        .map(toBinaryPairs)
        .map(toRowCol)
        .reduce(toSeatsByRow, {})

    const row = Object.keys(seats).find(row => seats[row].length === 7);

    const column = COLUMNS.find(c => !seats[row].includes(c));

    return row * 8 + column;
};