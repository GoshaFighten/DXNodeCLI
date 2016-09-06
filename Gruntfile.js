module.exports = function (grunt) {
    grunt.registerTask("makedxTemplate", "Make DX Template", function (folder) {
        var header = "#! /usr/bin/env node";
        var templatefilepath = [folder, "markup.html"].join("/");
        var datafilepath = [folder, "data.js"].join("/");
        var codefilepath = [folder, "code.js"].join("/");
        var corefilepath = "dxTemplateCore.js";
        var outputfilepath = [folder, "index.js"].join("/");

        var template = grunt.file.read(templatefilepath, {
            encoding: "utf8"
        });
        var data = grunt.file.read(datafilepath, {
            encoding: "utf8"
        });
        var code = grunt.file.read(codefilepath, {
            encoding: "utf8"
        });
        var core = grunt.file.read(corefilepath, {
            encoding: "utf8"
        });

        var htmlVariable = "var htmFile = \`" + template + "\`";
        var dataVariable = "var dataCode = \`" + data + "\`";
        var codeVariable = "var jsCode = \`" + code + "\`";

        var lines = [header, htmlVariable, dataVariable, codeVariable, core];

        var result = lines.join("\n");

        grunt.file.write(outputfilepath, result, {
            encoding: "utf8"
        });
    });
    grunt.registerTask("makedxJquery", "Make DX jQuery Template", ["makedxTemplate:dxJquery"]);
    grunt.registerTask("makedxAngular", "Make DX Angular Template", ["makedxTemplate:dxAngular"]);
    grunt.registerTask("makedxKnockout", "Make DX Knockout Template", ["makedxTemplate:dxKnockout"]);
    grunt.registerTask("makedxTemplates", "Make DX Tempaltes", ["makedxJquery", "makedxAngular", "makedxKnockout"]);
};