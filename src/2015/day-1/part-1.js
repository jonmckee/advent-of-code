export default input => {
    const up = input.countChar('(');
    const down = input.countChar(')');

    return up - down;
};
