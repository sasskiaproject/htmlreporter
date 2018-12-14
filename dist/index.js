"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var path = require("path");
var cssanalyzer_analyzer_1 = require("cssanalyzer-analyzer");
var HTMLGenerator_1 = require("./HTMLGenerator");
var info = new cssanalyzer_analyzer_1.CssInfo({ appendContentToFeature: true });
info.parseFile(path.join('test', 'test.scss'))
    .then(function (result) {
    var html = new HTMLGenerator_1.HTMLGenerator();
    html.generate(result)
        .then(function (outputPath) { return console.log('HTML report was generated – check ' + outputPath); })
        .catch(function (error) { return console.error(error); });
})
    .catch(function (error) { return console.error('Error: ', error); });
