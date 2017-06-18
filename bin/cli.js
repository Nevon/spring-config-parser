#!/usr/bin/env node
const fs = require("fs");

const package = require("../package.json")
const parse = require("../index")


const {file, profiles} = require('yargs')
    .usage('Usage: $0 -f [configFile] -p [profiles...]')
    .example('$0 -f application.yml -p local ci', 'Reads application.yml with the active profiles local and ci')
    .alias('f', 'file')
    .nargs('f', 1)
    .demandOption(['f'])
    .help('h')
    .alias('h', 'help')
    .alias('p', 'profiles')
    .array('profiles')
    .version()
    .argv;

fs.readFile(file, "utf8", (err, data) => {
    if (err) {
        console.error(err.message)
        process.exit(1)
    }

    try {
        console.log(parse(data, profiles))
    } catch (err) {
        console.error(err.message)
        process.exit(1)
    }
})