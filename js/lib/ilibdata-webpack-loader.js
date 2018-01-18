/**
 * ilibdata-webpack-loader.js - A Webpack loader to process js files and insert
 * requires for all of the data that is needed for all the locales
 *
 * @license
 * Copyright © 2018, JEDLSoft
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 *
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

import { getOptions } from 'loader-utils'
import validateOptions from 'schema-utils'

var path = require('path');
var Locale = require('./Locale.js');

const schema = {
    type: 'object',
    properties: {
        locales: {
            type: 'array'
        }
    }
};

let dataPatternSlashStar = /\/\*\s*!data\s*([^\*]+)\*\//g;
let dataPatternSlashSlash = /\/\/\s*!data\s*([^\n]+)/g;

let macroPatternSlashSlash = /\/\/\s*!macro\s*(\S*)/g;
let macroPatternQuoted = /["']!macro\s*(\S*)["']/g;

/**
 * Find ilib locale data files that are required by the
 * module for the given set of locales and put an
 * explicit require call for each of the the ones that
 * actually exist on disk.
 */
function findLocaleData(datafiles, locales) {
    var output = "";

    datafiles.forEach(function(filename) {
        locales.forEach(function(locale) {
            var pathname = path.join("data/locale", locale, filename + ".json");
            if (fs.existsSync(pathname)) {
                output += "ilib.data." + filename + "_" + locale.replace(/\//g, "_") + " = require('" + pathname + "');\n";
            }
        });
    });

    return output;
}

function toArray(set) {
    var ret = [];
    set.forEach(function(element) {
        ret.push(element);
    });
    return ret;
}

export default function loader(source) {
    const options = getOptions(this);
    var match;
    var partial = source;
    var output = "";

    validateOptions(schema, options, 'Ilib data loader');

    // first find all the locale parts we need to search
    var locales = options.locales;

    var parts = new Set();
    parts.add("."); // always search the root!
    locales.forEach(function(spec) {
        var locale = new Locale(spec);
        parts.add(locale.language);
        if (locale.script) {
            parts.add(locale.language + "/" + locale.script);
            if (locale.region) {
                parts.add(locale.language + "/" + locale.script + "/" + locale.region);
            }
        }
        if (locale.region) {
            parts.add(locale.language + "/" + locale.region);
            parts.add("und/" + locale.script);
        }
    });
    locales = toArray(parts);

    // now find all of the !data comments in the files and load in
    // the locale data files they list there for the given locales
    dataPatternSlashStar.lastIndex = 0;
    while ((match = dataPatternSlashStar.exec(partial)) !== null) {
        var datafiles = match[1].split(/\s+/g);
        output += partial.substring(0, match.index);
        output += findLocaleData(datafiles, locales);
        partial = partial.substring(match.index + match.length);
        dataPatternSlashStar.lastIndex = 0;
    }

    partial = output + partial;
    output = "";

    dataPatternSlashSlash.lastIndex = 0;
    while ((match = dataPatternSlashSlash.exec(partial)) !== null) {
        var datafiles = match[1].split(/\s+/g);
        output += partial.substring(0, match.index);
        output += findLocaleData(datafiles, locales);
        partial = partial.substring(match.index + match.length);
        dataPatternSlashStar.lastIndex = 0;
    }

    output += partial;

    return output;
};