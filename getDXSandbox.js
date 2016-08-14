#! /usr/bin/env node

var exec = require('child_process').exec;
var spawn = require('child_process').spawn;

var argv = require('minimist')(process.argv.slice(1));
var commands = argv._;

create(commands[0]);

function create(destination) {
    exec("getDXSandbox.bat " + destination, function (err, stdout, stderr) {
        if (err) {
            console.error(err);
            return;
        }
        console.log(stdout);
    });
}