export const OCCUPIED = '#';
export const EMPTY = 'L';
export const FLOOR = '.';

const getAdjacentSeats = (seat, max) => {
    const [row, col] = seat;

    return [
        [row - 1, col - 1],
        [row - 1, col],
        [row - 1, col + 1],
        [row + 1, col - 1],
        [row + 1, col],
        [row + 1, col + 1],
        [row, col - 1],
        [row, col + 1]
    ].filter(([r, c]) => r >= 0 && c >= 0 && r < max && c < max);
};

export const adjacentSeatsOccupied = (plane, seat) => {
    const adjacentSeats = getAdjacentSeats(seat, plane.length);

    return adjacentSeats.filter(([r, c]) => plane[r][c] === OCCUPIED);
};

export const prettyPrint = input =>
    console.log(input.map(row => row.join('')).join('\n'));

export const planesEqual = (a, b) =>
    a.every((row, rowIndex) =>
        row.every(
            (seat, colIndex) => a[rowIndex][colIndex] === b[rowIndex][colIndex]
        )
    );

export const countOccupiedSeats = plane =>
    plane.map(row => row.count(seat => seat === OCCUPIED)).sum();

export const seatPassengers = (
    maxOccupied = 4,
    checkOccupied = adjacentSeatsOccupied
) => (row, rowIndex, plane) => {
    return row.map((seat, col) => {
        const adjacentOccupiedSeats = checkOccupied(plane, [rowIndex, col])
            .length;

        if (seat === EMPTY && adjacentOccupiedSeats === 0) {
            return OCCUPIED;
        } else if (seat === OCCUPIED && adjacentOccupiedSeats >= maxOccupied) {
            return EMPTY;
        }

        return seat;
    });
};

export default input => {
    let stabilized = false,
        seatedPlane = input;

    while (!stabilized) {
        const a = seatedPlane;
        const b = seatedPlane.map(seatPassengers());

        stabilized = planesEqual(a, b);

        seatedPlane = b;
    }

    return countOccupiedSeats(seatedPlane);
};
