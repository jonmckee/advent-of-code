export const parseRule = line => {
    const [bag, ..._bags] = line
        .replace(/bags?(.|,)?/g, '')
        .replace(/no/g, 0)
        .split(' contain ');
    const bags = _bags.flatMap(b => b.split('  ').map(n => n.trim()));

    return [bag, bags];
};

export const toRules = (allRules, rule) => {
    const [bag, bags] = rule;
    allRules[bag] = bags;
    return allRules;
};

export const toShinyGoldBags = bags => id => {
    const bag = bags[id];

    if (id === 'shiny gold') {
        return 1;
    } else if (!bag) {
        return 0;
    }

    return bag.reduce((gold, rule) => {
        const qty = parseInt(rule);
        const type = rule.split(qty)[1].trim();

        return gold + qty * toShinyGoldBags(bags)(type);
    }, 0);
};

export default input => {
    const rules = input.map(parseRule).reduce(toRules, {});

    const containShinyGoldBags = Object.keys(rules).map(toShinyGoldBags(rules));

    return containShinyGoldBags.count(Boolean) - 1;
};
