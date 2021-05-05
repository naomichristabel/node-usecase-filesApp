const chalk = require('chalk');
const fsPromises = require("fs").promises;
const path = require('path');

const getFileStats = (filePath) => {
   
    (async () => {
        try {
            const stats = await fsPromises.stat(filePath);
            const metaData = [{
                fileName: path.basename(filePath),
                filePath: filePath,
                size: stats.size,
                createdAt: utcDate(stats.birthtime),
                isDirectory: false
            }];

            const metaDataJSON = JSON.stringify(metaData);
            console.log(metaDataJSON);
        }
        catch (error) {
            console.log(error);
          }
    })();
}

const utcDate = (date) => {
    const year = date.getUTCFullYear();
    let month = '' + (date.getUTCMonth() + 1);
    let day = '' + date.getUTCDate();

    if (day.length < 2) day = '0' + day;
    if (month.length < 2) month = '0' + month;

    return [year, month, day].join('-');
}

module.exports = {
    getFileStats: getFileStats
}