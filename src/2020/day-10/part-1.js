export default input => {
    const sortedAdapters = input.sort((a, b) => a - b);

    const builtInAdapter = sortedAdapters.last() + 3;

    const adapters = [0, ...sortedAdapters, builtInAdapter];

    const differences = adapters.map((adapter, i) => {
        if (i < adapters.length - 1) {
            return adapters[i + 1] - adapter;
        }
    });

    const deltaOne = differences.count(d => d === 1);

    const deltaThree = differences.count(d => d === 3);

    return deltaOne * deltaThree;
};
