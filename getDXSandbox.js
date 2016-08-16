#! /usr/bin/env node

var spawn = require('child_process').spawn;
const path = require('path');
var prompt = require('prompt');

var argv = require('minimist')(process.argv.slice(1));
var commands = argv._;

var schema = {
    properties: {
        destination: {
            required: true
        }
    }
};

create(commands[0], commands[1]);

function run(root, destination) {
    const bat = spawn('cmd.exe', ['/c', path.join(path.dirname(root), `getDXAngular2.bat ${destination}`)], { stdio: 'inherit' });
}

function create(root, destination) {
    if (!destination) {
        prompt.start();
        prompt.get(schema, function (err, result) {
            destination = result.destination;
            run(root, destination);
        })
    };

}