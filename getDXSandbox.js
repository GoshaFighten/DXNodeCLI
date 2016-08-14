#! /usr/bin/env node

var exec = require('child_process').exec;

var argv = require('minimist')(process.argv.slice(1));
var commands = argv._;

create(commands[0]);

function create(destination) {
    var cmd = "set destination=" + destination;
    var resultCallback = function (err, stdout, stderr) {
        if (err) {
            console.error(err);
            return;
        }
        console.log(stdout);
    };
    exec(cmd, resultCallback);
    exec('getDXSandbox.bat', resultCallback);
}