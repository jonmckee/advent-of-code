const area = (x, y) => 2 * x * y;

const getSurfaceArea = ([l, w, h]) => area(l, w) + area(w, h) + area(h, l);

const getSmallestArea = ([l, w, h]) => Math.min(l * w, w * h, h * l);

export default input => {
    return input
        .map(box => {
            const dimensions = box.split('x');

            return getSurfaceArea(dimensions) + getSmallestArea(dimensions);
        })
        .sum();
};
