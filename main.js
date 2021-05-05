const yargs = require('yargs');
const files = require('./files.js');

yargs.command({
    command: 'read',
    describe: 'Read a file',
    builder: {
        path: {
            describe: 'Specify the path of the file to be read',
            demandOption: true,
            type: 'string'
        }
    },
    handler(argv) {
        files.pathCheck(argv.path);
    }
    }
);

yargs.parse();