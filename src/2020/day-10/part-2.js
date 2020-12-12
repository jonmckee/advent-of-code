export default input => {
    const sortedAdapters = input.sort((a, b) => a - b);
    const builtInAdapter = sortedAdapters.last() + 3;
    const adapters = [0, ...sortedAdapters, builtInAdapter];

    const _paths = adapters.reduce(
        (paths, adapter) => {
            [1, 2, 3].forEach(diff => {
                const nextAdapter = adapter + diff;

                if (adapters.includes(nextAdapter)) {
                    if (paths[nextAdapter]) {
                        paths[nextAdapter] += paths[adapter];
                    } else {
                        paths[nextAdapter] = paths[adapter];
                    }
                }
            });

            return paths;
        },
        { 0: 1 }
    );

    return _paths[builtInAdapter];
};
