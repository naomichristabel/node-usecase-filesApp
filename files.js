const fs = require('fs');
const chalk = require('chalk');
const stats = require('./stats.js');
const dirStats = require('./dirStats.js');

const pathCheck = (path) => {
    try {
        fs.lstatSync(path).isDirectory();
    } catch (e) {
        console.log(chalk.inverse.red('Invalid Path'));
        return;
    }
        
        isDir = fs.existsSync(path) && fs.lstatSync(path).isDirectory();
        if (isDir) {
            console.log(chalk.inverse.blue('It is a directory'));
            dirStats.getDirStats(path);
        }
        else {
            console.log(chalk.inverse.magenta('It is a file'));
            stats.getFileStats(path);

        }
     
}

module.exports = {
    pathCheck: pathCheck
}