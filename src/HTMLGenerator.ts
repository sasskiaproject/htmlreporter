import * as fs from "fs";
import * as Handlebars from "handlebars";
import * as path from "path";
import {HandlebarHelper} from "./HandlebarHelper";
import {CssInfoResult} from 
"../node_modules/sasskia-analyzer/dist/src/CssInfo";

export class HTMLGenerator {
    protected arguments = [];

    constructor(args = []) {
        this.arguments = args;
    }

    public generate(result: CssInfoResult): Promise<string> {
        return new Promise((resolve, reject) => {
            HandlebarHelper.addHelpers();

            const html = fs.readFileSync(path.join('resources', 'templates', 'index.html'), 'UTF-8');
            const template = Handlebars.compile(html);
            const outputPath = path.join('gen', 'report.html');

            fs.writeFile(outputPath, template({result: result, arguments: this.arguments}), function(err) {
                if(err) {
                    return console.log(err);
                }
                resolve(outputPath);
            });
        });
    }
}
