"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var fs = require("fs");
var Handlebars = require("handlebars");
var path = require("path");
var HandlebarHelper_1 = require("./HandlebarHelper");
var HTMLGenerator = /** @class */ (function () {
    function HTMLGenerator(args) {
        if (args === void 0) { args = []; }
        this.arguments = [];
        this.arguments = args;
    }
    HTMLGenerator.prototype.generate = function (result) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            HandlebarHelper_1.HandlebarHelper.addHelpers();
            var html = fs.readFileSync(path.join('resources', 'templates', 'index.html'), 'UTF-8');
            var template = Handlebars.compile(html);
            var outputPath = path.join('gen', 'report.html');
            fs.writeFile(outputPath, template({ result: result, arguments: _this.arguments }), function (err) {
                if (err) {
                    return console.log(err);
                }
                resolve(outputPath);
            });
        });
    };
    return HTMLGenerator;
}());
exports.HTMLGenerator = HTMLGenerator;
