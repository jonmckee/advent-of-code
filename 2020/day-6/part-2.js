import {count} from '../day-2/part-1';

const toSum = (sum, x) => sum + x;

export default input => {
    return input.map(answers => {
        const groupSize = answers.length;
        const allAnswers = answers.join('');

        return Array(...new Set(allAnswers)).filter(a => count(a, allAnswers) === groupSize).length;

    }).reduce(toSum);
};