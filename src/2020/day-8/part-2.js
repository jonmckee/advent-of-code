import { ACCUMULATE, JUMP, NO_OP, runProgram } from './part-1';

const flipCode = code => {
    if (code === NO_OP) {
        return JUMP;
    } else if (code === JUMP) {
        return NO_OP;
    } else {
        return code;
    }
};

const copy = arr => JSON.parse(JSON.stringify(arr));

const runProgramWithHotFix = (program, fixIndex) => {
    const hotFix = copy(program);
    hotFix[fixIndex][0] = flipCode(hotFix[fixIndex][0]);
    return runProgram(hotFix);
};

export default input =>
    input
        .map(([code], i) =>
            code !== ACCUMULATE ? runProgramWithHotFix(input, i) : {}
        )
        .find(fix => fix.lastInstruction === input.length).result;
