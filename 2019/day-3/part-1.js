import { getPoints, getIntersections } from './index';
import getInput from '../../input';

const toManhattanDistance = ([x, y]) => ([x1, y1]) =>
    Math.abs(x1 - x) + Math.abs(y1 - y);

const [wireA, wireB] = getInput('\n', toNumber, wire => wire.split(','));
const aPath = getPoints(wireA);
const bPath = getPoints(wireB);

const intersections = getIntersections(aPath, bPath)
    .map(point => point.split(','))
    .map(toManhattanDistance([0, 0]));

console.log('Part 1 ', Math.min(...intersections));

console.log('CORRECT 266');
