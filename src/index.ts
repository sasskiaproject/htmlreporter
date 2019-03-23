import * as path from "path";
import {CssInfo} from "sasskia-analyzer";
import {HTMLGenerator} from "./HTMLGenerator";

const info = new CssInfo({ appendContentToFeature: true });
info.parseFile(path.join('test', 'test.scss'))
    .then((result) => {
        const html = new HTMLGenerator();
        html.generate(result)
            .then((outputPath) => console.log('HTML report was generated – check ' + outputPath))
            .catch((error) => console.error(error));
    })
    .catch((error) => console.error('Error: ', error));
