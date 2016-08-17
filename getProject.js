var spawn = require('child_process').spawn;
const path = require('path');
var prompt = require('prompt');
var argv = require('minimist')(process.argv.slice(1));
var commands = argv._;

exports.create = (command) => {
    var root = commands[0];
    var destination = commands[1];
    var schema = {
        properties: {
            destination: {
                required: true,
                default: destination
            }
        }
    };
    prompt.start();
    prompt.get(schema, function (err, result) {
        destination = result.destination;
        const bat = spawn('cmd.exe', ['/c', path.join(path.dirname(root), `${command} ${destination}`)], { stdio: 'inherit' });
    })
}