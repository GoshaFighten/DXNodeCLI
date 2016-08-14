var fs = require('fs');
var path = require('path');

var searchScriptLine = /%scriptFile%/g;
var searchVersionLine = /%version%/g;

var argv = require('minimist')(process.argv.slice(2));
var commands = argv._;

create(commands[0], commands[1]);

function create(name, version) {
    var root = path.resolve("src");

    var result = htmFile.replace(searchScriptLine, name);
    result = result.replace(searchVersionLine, version);
    fs.mkdir(path.join(root, name), function (err) {
        if (err) {
            return console.log('failed to write directory', err);
        };
        var writeFileCallback = function (error) {
            if (error) {
                return console.log('failed to write file', error);
            };
        }
        fs.writeFile(path.join(root, name, name + ".html"), result, writeFileCallback);
        fs.writeFile(path.join(root, name, name + ".js"), jsCode, writeFileCallback);
    })
}