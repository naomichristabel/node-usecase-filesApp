const fs = require('fs');
const stats = require('./stats.js');

const getDirStats = (path) => {
    let fileArr =[];
    let paths = [];

    fs.readdirSync(path).forEach(file => fileArr.push(file));
    fileArr = fileArr.sort();
    fileArr.forEach(file => paths.push(path + '\\' + file));
    paths.forEach(filePath => stats.getFileStats(filePath));
}

module.exports = {
    getDirStats: getDirStats
}