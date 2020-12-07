const parseRule = line => {
    const [bag, ..._bags] = line.replace(/bags?(.|,)?/g, '').split(' contain ');

    const bags = _bags.flatMap(b => b.split('  ').map(n => n.trim()));

    return [bag, bags];
};

export default input => {
    const rules = input.map(parseRule).reduce((allRules, rule) => {
        const [bag, bags] = rule;
        allRules[bag] = bags;

        return allRules;
    }, {});

    console.log(rules);
};
