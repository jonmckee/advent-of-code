import { toCoordinates, toUniqueCoordinates } from './part-1';

export default input => {
    const instructions = input.split('');

    const santa = instructions.filter((_, i) => i % 2 === 0);
    const robot = instructions.filter((_, i) => i % 2 === 1);

    const santaHouses = santa.reduce(toCoordinates, [[0, 0]]);
    const robotHouses = robot.reduce(toCoordinates, [[0, 0]]);

    return [...santaHouses, ...robotHouses].reduce(toUniqueCoordinates, [])
        .length;
};
