export const ACCUMULATE = 'acc';
export const JUMP = 'jmp';
export const NO_OP = 'nop';

export const runProgram = program => {
    const executedInstructions = [];
    let i = 0;
    let accumulator = 0;

    while (true) {
        if (executedInstructions.includes(i) || i === program.length) {
            break;
        } else {
            executedInstructions.push(i);
        }

        const [code, value] = program[i];

        if (code === ACCUMULATE) {
            accumulator += +value;
            i++;
        } else if (code === JUMP) {
            i += +value;
        } else if (code === NO_OP) {
            i++;
        }
    }

    return {
        lastInstruction: i,
        result: accumulator
    };
};

export default input => runProgram(input).result;
