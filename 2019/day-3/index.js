const dX = { L: -1, R: 1, D: 0, U: 0 };
const dY = { L: 0, R: 0, D: -1, U: 1 };

export const getPoints = vectors => {
    let x = 0,
        y = 0,
        totalSteps = 0;

    return vectors.reduce((points, vector) => {
        const [direction, ...m] = vector;
        const magnitude = +m.join('');

        for (let i = 1; i <= magnitude; i++) {
            x += dX[direction];
            y += dY[direction];
            totalSteps++;

            const key = `${x},${y}`;
            !points.has(key) && points.set(key, totalSteps);
        }

        return points;
    }, new Map());
};

export const getIntersections = (a, b) => [...a.keys()].filter(x => b.has(x));
