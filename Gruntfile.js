module.exports = function (grunt) {
    grunt.registerTask('makedxJquery', 'Concat Files', function () {
        var header = "#! /usr/bin/env node";
        var templatefilepath = "dxJquery/markup.html";
        var codefilepath = "dxJquery/code.js";
        var corefilepath = "dxJquery/core.js";
        var outputfilepath = "dxJquery/index.js";

        var template = grunt.file.read(templatefilepath, {
            encoding: "utf8"
        });
        var code = grunt.file.read(codefilepath, {
            encoding: "utf8"
        });
        var core = grunt.file.read(corefilepath, {
            encoding: "utf8"
        });

        var htmlVariable = "var htmFile = \`" + template + "\`";
        var codeVariable = "var jsCode = \`" + code + "\`";

        var lines = [header, htmlVariable, codeVariable, core];

        var result = lines.join("\n");

        grunt.file.write(outputfilepath, result, {
            encoding: "utf8"
        });
    });
};