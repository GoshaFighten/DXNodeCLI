var fs = require('fs');
var path = require('path');

var searchScriptLine = /%jquery%/g;
var searchVersionLine = /%version%/g;

var argv = require('minimist')(process.argv.slice(2));
var commands = argv._;

create(commands[0], commands[1]);

function create(name, version) {
    var root = path.resolve("src");

    var result = htmFile.replace(searchScriptLine, name);
    result = result.replace(searchVersionLine, version);
    fs.writeFileSync(path.join(root, name + ".html"), result);
    fs.writeFileSync(path.join(root, "js/" + name + ".js"), jsCode);
}