const getPerimeter = (x, y) => 2 * x + 2 * y;

const getShortestPerimeter = ([l, w, h]) =>
    Math.min(getPerimeter(l, w), getPerimeter(l, h), getPerimeter(h, w));

const getVolume = dimensions => dimensions.product();

export default input => {
    return input
        .map(box => {
            const dimensions = box.split('x');

            return getShortestPerimeter(dimensions) + getVolume(dimensions);
        })
        .sum();
};
