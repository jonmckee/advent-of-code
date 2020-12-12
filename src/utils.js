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

Array.prototype.last = function () {
    return this.slice(-1)[0];
};

Math.factorial = function (n) {
    if (n === 1) {
        return n;
    } else {
        return n * Math.factorial(n - 1);
    }
};
