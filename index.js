#! /usr/bin/env node

var fs = require('fs');
var path = require('path');

var argv = require('minimist')(process.argv.slice(2));
var commands = argv._;
console.log('Test ' + commands[0] + ' ' + commands[1] + ' ' + commands[2]);
create(commands[0], commands[1]);

var searchScriptLine = "/jquery.js";
var searchVersionLine = "/version/";

function create(name, version) {
    var root = path.resolve("src");
    var htmFile = `
        <!DOCTYPE html>
        <html>
        <head>
            <title></title>
            <meta charset='utf-8' />
            <link rel='stylesheet' type='text/css' href='http://cdn3.devexpress.com/jslib/version/css/dx.common.css' />
            <link rel='stylesheet' type='text/css' href='http://cdn3.devexpress.com/jslib/version/css/dx.light.css' />
            <script type='text/javascript' src='http://ajax.aspnetcdn.com/ajax/jQuery/jquery-2.2.4.min.js'></script>
            <script type='text/javascript' src='http://cdn3.devexpress.com/jslib/version/js/dx.all.js'></script>
            <script type='text/javascript' src="/src/js/jquery.js"></script>
        </head>
        <body>
            <div id="btn"></div>
        </body>
        </html>
    `;
    var jsCode = `
        $(function () {
            $("#btn").dxButton({
                text: 'Click'
            });
        });    
    `;
    var result = htmFile.replace(searchScriptLine, "/" + name + ".js");
    console.log(result);
    result = result.replace(searchVersionLine, "/" + version + "/");
    fs.writeFileSync(path.join(root, name + ".html"), result);
    fs.writeFileSync(path.join(root, "js/" + name + ".js"), jsCode);
}