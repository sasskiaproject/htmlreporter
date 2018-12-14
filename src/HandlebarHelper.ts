import * as Handlebars from "handlebars";

export class HandlebarHelper {
    public static addHelpers() {
        // even helper
        Handlebars.registerHelper('if_even', function(conditional, options) {
            if((conditional % 2) == 0) {
                return options.fn(this);
            } else {
                return options.inverse(this);
            }
        });

        Handlebars.registerHelper('if_cond', function(v1, v2, options) {
            if(v1 === v2) {
                return options.fn(this);
            }
            return options.inverse(this);
        });

        Handlebars.registerHelper('if_cond_difference_equals', function(v1, v2, result, options) {
            if(result === v1-v2) {
                return options.fn(this);
            }
            return options.inverse(this);
        });

        Handlebars.registerHelper( 'each_in_map', function ( map, block ) {
            if (!map) {
                return null;
            }
            let out = '';
            let i = 0;
            map.forEach((value, key) => {
                out += block.fn( {key: key, value: value, index: i} );
                i++;
            });
            return out;
        } );
    }
}
