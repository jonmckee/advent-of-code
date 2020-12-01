const shouldLog = false;

const log = (opCode, instr, p) => {
    if (shouldLog) {
        if (opCode === 3 || opCode === 4) {
            console.log(instr[p], instr[p + 1]);
        } else if (opCode === 5 || opCode === 6) {
            console.log(instr[p], instr[p + 1], instr[p + 2]);
        } else if (opCode <= 2 || opCode >= 7) {
            console.log(instr[p], instr[p + 1], instr[p + 2], instr[p + 3]);
        }
    }
};

const getModes = (instruction) => {
    const arr = `${instruction}`.split('');
    arr.splice(arr.length - 2);
    arr.reverse();
    return arr.map(n => +n);
};
const getOperands = (instr, a) => {
    const modes = getModes(instr[a]);
    return [instr[a + 1], instr[a + 2]].map((v, i) => modes[i] ? v : instr[v]);
};

const add = (a, b) => a + b;
const multiply = (a, b) => a * b;
const lessThan = (left, right) => left < right ? 1 : 0;
const equals = (left, right) => left === right ? 1 : 0;
const math = (handler) => (instr, p) => {
    const [left, right] = getOperands(instr, p);
    const store = instr[p + 3];
    instr[store] = handler(left, right);
    return p + 4;
};

const input = (systemId) => (instr, p) => {
    instr[instr[p + 1]] = systemId;
    return p + 2;
};

const output = (instr, p) => {
    const output = instr[p] > 4 ? instr[p + 1] : instr[instr[p + 1]];
    output && console.log('Output ', output);
    return p + 2;
};

const ifTrue = (one, two) => one !== 0 && two;
const ifFalse = (one, two) => one === 0 && two;
const jump = (handler) => (instr, p) => {
    const [left, right] = getOperands(instr, p);
    return handler(left, right) || p + 3;
};

const getOpCode = (instruction) => +`${instruction}`.split('').slice(-1)[0];
const handleOpCode = (opCode, instructions, address, systemId) => {
    const COMMANDS = {
        1: math(add),
        2: math(multiply),
        3: input(systemId),
        4: output,
        5: jump(ifTrue),
        6: jump(ifFalse),
        7: math(lessThan),
        8: math(equals)
    };

    let command = COMMANDS[opCode];

    if (!command) {
        opCode = getOpCode(opCode);
    }

    log(opCode, instructions, address);

    return COMMANDS[opCode](instructions, address);
};

export default (instructions, systemId, noun, verb) => {
    noun && (instructions[1] = noun);
    verb && (instructions[2] = verb);

    let address = 0,
        opCode = instructions[address];

    while (opCode !== 99) {
        address = handleOpCode(opCode, instructions, address, systemId);
        opCode = instructions[address];
    }

    return instructions[0];
};
