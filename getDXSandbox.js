#! /usr/bin/env node

var spawn = require('child_process').spawn;
const path = require('path');

var argv = require('minimist')(process.argv.slice(1));
var commands = argv._;

create(commands[0], commands[1]);

function create(root, destination) {
    const bat = spawn('cmd.exe', ['/c', path.join(path.dirname(root), `getDXSandbox.bat ${destination}`)], { stdio: 'inherit' });
}