const {getPoints, getInput, getIntersections} = require('./index');

const [wireA, wireB] = getInput();
const aPath = getPoints(wireA);
const bPath = getPoints(wireB);

const toCumulativeSteps = point => aPath.get(point) + bPath.get(point);
const stepsForIntersections = getIntersections(aPath, bPath).map(toCumulativeSteps);

console.log(`Part 2  ${Math.min(...stepsForIntersections)}`);
console.log('CORRECT 19242');