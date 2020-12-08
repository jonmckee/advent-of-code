export const getNextHouse = (currentCoordinate, direction) => {
    const [x, y] = currentCoordinate;

    return {
        '^': [x, y + 1],
        v: [x, y - 1],
        '>': [x + 1, y],
        '<': [x - 1, y]
    }[direction];
};

export const toCoordinates = (houses, dir) => {
    const curHouse = houses.slice(-1)[0];
    const nextHouse = getNextHouse(curHouse, dir);

    houses.push(nextHouse);

    return houses;
};

export const toUniqueCoordinates = (unique, [x, y]) => {
    if (!unique.some(([_x, _y]) => _x === x && _y === y)) {
        unique.push([x, y]);
    }

    return unique;
};

export default input => {
    const coordinates = input.split('').reduce(toCoordinates, [[0, 0]]);
    const uniqueCoordinates = coordinates.reduce(toUniqueCoordinates, []);

    return uniqueCoordinates.length;
};
