import { CssInfoResult } from "../node_modules/sasskia-analyzer/dist/src/CssInfo";
export declare class HTMLGenerator {
    protected arguments: any[];
    constructor(args?: any[]);
    generate(result: CssInfoResult): Promise<string>;
}
