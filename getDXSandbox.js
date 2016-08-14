#! /usr/bin/env node

var exec = require('child_process').exec;
var spawn = require('child_process').spawn;

var argv = require('minimist')(process.argv.slice(1));
var commands = argv._;

create(commands[0]);

function create(destination) {
    var cmd = `set destination=${destination}
git clone https://github.com/GoshaFighten/DXSandbox %destination%
cd /d %destination%
rd .git /S/Q
del .gitignore README.md src\.gitignore
call npm install
call code .
npm start`;
    exec(cmd, function (err, stdout, stderr) {
        if (err) {
            console.error(err);
            return;
        }
        console.log(stdout);
    });
}