import { parseRule, toRules } from './part-1';

export const toTotalBags = bags => id => {
    const bag = bags[id];

    if (!bag) {
        return 1;
    }

    return bag.reduce((total, rule) => {
        const qty = parseInt(rule);
        const type = rule.split(qty)[1].trim();

        const number = qty + qty * toTotalBags(bags)(type);

        return total + number;
    }, 0);
};

export default input => {
    const rules = input.map(parseRule).reduce(toRules, {});

    return toTotalBags(rules)('shiny gold');
};
