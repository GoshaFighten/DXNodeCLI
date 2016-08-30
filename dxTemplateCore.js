var fs = require('fs');
var path = require('path');
var prompt = require('prompt');

var searchScriptLine = /%scriptFile%/g;
var searchVersionLine = /%version%/g;

var argv = require('minimist')(process.argv.slice(2));
var commands = argv._;

create(commands[0], commands[1]);

function create(name, version) {
    var root = path.resolve("src");

    var schema = {
        properties: {
            name: {
                required: true,
                before: function (value) {
                    return value.trim();
                }
            },
            version: {
                required: true,
                pattern: /^\d{1,2}\.\d{1,2}\.\d{1,2}$/
            }
        }
    };

    prompt.override = {
        name: name,
        version: version
    }

    prompt.start();
    prompt.get(schema, function (err, result) {
        name = result.name;
        version = result.version;
        htmFile = htmFile.replace(searchScriptLine, name);
        htmFile = htmFile.replace(searchVersionLine, version);
        fs.mkdir(path.join(root, name), function (err) {
            if (err) {
                return console.log('failed to write directory', err);
            };
            var writeFileCallback = function (error) {
                if (error) {
                    return console.log('failed to write file', error);
                };
            }
            fs.writeFile(path.join(root, name, name + ".html"), htmFile, writeFileCallback);
            fs.writeFile(path.join(root, name, "data.js"), dataCode, writeFileCallback);
            fs.writeFile(path.join(root, name, name + ".js"), jsCode, writeFileCallback);
        })
    })
}