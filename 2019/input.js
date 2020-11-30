const fs = require('fs');
const path = require('path');

module.exports = () => {
    const currentDay = process.argv[1].split(path.sep).slice(-2)[0];

    return fs.readFileSync(path.join(__dirname, currentDay, 'input.txt'), 'utf-8');
};