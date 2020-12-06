String.prototype.countChar = function (char) {
    return this.split('').count(c => char === c);
};

Array.prototype.count = function (predicate) {
    return this.filter(predicate).length;
};

Array.prototype.product = function () {
    return this.reduce((product, x) => product * x, 1);
};

Array.prototype.sum = function () {
    return this.reduce((sum, x) => sum + x);
};
