import {
    countOccupiedSeats,
    FLOOR,
    OCCUPIED,
    planesEqual,
    prettyPrint,
    seatPassengers
} from './part-1';

const inBounds = ([r, c], max) => r >= 0 && c >= 0 && r < max && c < max;

const getCoordinates = ([row, col], rowDelta, colDelta, max) => {
    let _row = row + rowDelta,
        _col = col + colDelta,
        coordinates = [];

    while (inBounds([_row, _col], max)) {
        coordinates.push([_row, _col]);

        _row += rowDelta;
        _col += colDelta;
    }

    return coordinates;
};

export const adjacentSeatsOccupied = (plane, seat) => {
    const max = plane.length;

    const adjacentSeats = [
        getCoordinates(seat, 1, 1, max),
        getCoordinates(seat, 1, 0, max),
        getCoordinates(seat, 1, -1, max),

        getCoordinates(seat, -1, 1, max),
        getCoordinates(seat, -1, 0, max),
        getCoordinates(seat, -1, -1, max),

        getCoordinates(seat, 0, -1, max),
        getCoordinates(seat, 0, 1, max)
    ];

    const map = adjacentSeats.map(directional => {
        const closestSeatLocation = directional.find(
            ([r, c]) => plane[r][c] !== FLOOR
        );

        if (closestSeatLocation) {
            const [row, col] = closestSeatLocation;

            if (plane[row][col] === OCCUPIED) {
                return [row, col];
            }
        }
    });

    return map.filter(Boolean);
};

export default input => {
    let stabilized = false,
        seatedPlane = input;

    while (!stabilized) {
        const a = seatedPlane;
        const b = seatedPlane.map(seatPassengers(5, adjacentSeatsOccupied));

        stabilized = planesEqual(a, b);
        seatedPlane = b;
    }

    return countOccupiedSeats(seatedPlane);
};
