export default input => {
    let floor = 0;

    const sentToBasement = instruction => {
        if (instruction === '(') {
            floor += 1;
        } else {
            floor -= 1;
        }

        return floor < 0;
    };

    return input.split('').findIndex(sentToBasement) + 1;
};
