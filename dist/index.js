"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var path = require("path");
var cssanalyzer_analyzer_1 = require("cssanalyzer-analyzer");
var info = new cssanalyzer_analyzer_1.CssInfo();
info.parseFile(path.join('test', 'test.scss'))
    .then(function (result) {
    console.log(result.colors.size + ' Farben gefunden:');
    result.colors.forEach(function (value, key) {
        console.log('= Farbe ' + key + ' =');
        for (var _i = 0, value_1 = value; _i < value_1.length; _i++) {
            var color = value_1[_i];
            console.log(color.context + ' - ' + color.selector.prettified + ' { ' + color.property_type + ': ' + color.original + ' }');
        }
    });
})
    .catch(function (error) { return console.error('Error: ', error); });
