export const toBinaryPairs = seat => [
    seat.slice(0, 7).replace(/F/g, 0).replace(/B/g, 1),
    seat.slice(7, 10).replace(/L/g, 0).replace(/R/g, 1)
];

export const toSeatId = seat => {
    const [row, col] = seat.map(s => parseInt(s, 2));
    return row * 8 + col;
};

export default input => {
    const seatIds = input.map(toBinaryPairs).map(toSeatId);

    return Math.max(...seatIds);
};
