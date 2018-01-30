/*
 * ilib-webpack-plugin.js - webpack configuration script for ilib
 *
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
var webpack = require('webpack');
var path = require('path');
var Locale = require("./lib/Locale.js");
var fs = require("fs");
var UglifyJS = require("uglify-js");

function toArray(set) {
    var ret = [];
    set.forEach(function(element) {
        ret.push(element);
    });
    return ret;
}

function Asset(content) {
    this.content = content || "";
}
Asset.prototype.source = function() {
    return this.content;
};
Asset.prototype.size = function() {
    return this.content.length;
};

function IlibWebpackPlugin(options) {
    this.locales = (options && options.locales) || ["en-US"];
    this.assembly = (options && options.assembly);
    this.compilationType = (options && options.compilation);
    this.size = (options && options.size);
}

IlibWebpackPlugin.prototype.apply = function(compiler) {
    compiler.plugin('emit', function(compilation, callback) {
        var localeData = compilation.localeDataSet;
        var outputFileName, output, _this;

        if (localeData) {
            var locales = ["en-US"],
                plugins = this.options.plugins;

            for (var i = 0; i < plugins.length; i++) {
                if (plugins[i] instanceof IlibWebpackPlugin && plugins[i].locales) {
                    _this = plugins[i];
                    locales = plugins[i].locales;
                    break;
                }
            }

            var outputSet = {};

            locales.forEach(function(locale) {
                localeData.forEach(function(filename) {
                    // time zone data in the zoneinfo files are a special case because they are non-locale data
                    if (filename === "zoneinfo") {
                        // console.log(">>>>>>>>>>>>> processing zoneinfo. cwd is " + process.cwd());
                        var cwdToData = "./data/locale/zoneinfo/zonetab.json";
                        var data = fs.readFileSync(cwdToData, "utf-8");
                        var zonetab = JSON.parse(data);
                        // console.log(">>>>>>>>>>>>> got zone tab.");
                        var line = 'ilib.data.zonetab = ' + data + ';\n';
                        if (!outputSet.root) {
                            outputSet.root = {};
                        }
                        outputSet.root.zonetab = line;

                        var regionSet = new Set();
                        locales.forEach(function(locale) {
                            regionSet.add(new Locale(locale).region);
                        });
                        var zoneSet = new Set();
                        regionSet.forEach(function(region) {
                            if (zonetab[region]) {
                                zonetab[region].forEach(function(zone) {
                                    zoneSet.add(zone);
                                });
                            }
                        });
                        zoneSet.forEach(function(zone) {
                            try {
                                var cwdToData = path.join("data/locale/zoneinfo", zone + ".json");
                                if (fs.existsSync(cwdToData)) {
                                    data = fs.readFileSync(cwdToData, "utf-8");
                                    var line = 'ilib.data.zoneinfo["' + zone.replace(/-/g, "m").replace(/\+/g, "p") + '"] = ' + data + ';\n';
                                    // console.log(">>>>>>>>>>>>> Adding zone: " + line);
                                    outputSet.root[zone] = line;
                                }
                            } catch (e) {
                                console.log("Error: " + e);
                            }
                        }.bind(this));

                        // now add the generic zones
                        var list = fs.readdirSync("data/locale/zoneinfo");
                        list = list.concat(fs.readdirSync("data/locale/zoneinfo/Etc").map(function(zone) {
                            return "Etc/" + zone;
                        }));

                        list.filter(function(pathname) {
                            return pathname.endsWith(".json") && pathname !== "zonetab.json";
                        }).forEach(function (file) {
                            var zone = path.basename(file, ".json");
                            var cwdToData = path.join("data/locale/zoneinfo", file);
                            data = fs.readFileSync(cwdToData, "utf-8");
                            var line = 'ilib.data.zoneinfo["' + zone.replace(/-/g, "m").replace(/\+/g, "p") + '"] = ' + data + ';\n';
                            // console.log(">>>>>>>>>>>>> Adding generic zone: " + line);
                            // compiler.addDependency(cwdToData);
                            outputSet.root[zone] = line;
                        }.bind(this));
                    } else {
                        var l = new Locale(locale);

                        var parts = [
                            ".",
                            l.language
                        ];

                        if (l.script) {
                            parts.push(l.language + "/" + l.script);
                            if (l.region) {
                                parts.push(l.language + "/" + l.script + "/" + l.region);
                            }
                        }
                        if (l.region) {
                            parts.push(l.language + "/" + l.region);
                            parts.push("und/" + l.region);
                        }

                        parts.forEach(function(localeDir) {
                            try {
                                var cwdToData = path.join("data/locale", localeDir, filename + ".json");
                                if (fs.existsSync(cwdToData)) {
                                    var part = localeDir === "." ? "root" : localeDir;
                                    part = part.replace(/\//g, "-");

                                    if (!outputSet[part]) {
                                        outputSet[part] = {};
                                    }
                                    if (!outputSet[part][filename]) {
                                        var line = "ilib.data." + filename.replace(/\//g, "_").replace(/-/g, "_");
                                        if (part !== "root") {
                                            line += "_" + part.replace(/-/g, "_");
                                        }
                                        data = fs.readFileSync(cwdToData, "utf-8");
                                        line += " = " + data + ";\n";
                                        // console.log(">>>>>>>>>>>>> Adding line: " + line);

                                        outputSet[part][filename] = line;
                                    }
                                }
                            } catch (e) {
                                console.log("Error: " + e);
                            }
                        }.bind(this));
                    }
                });
            }.bind(this));

            var ilibFileName = "ilib";
            if (_this.size) {
                ilibFileName += "-" + _this.size;
            }
            if (_this.assembly === "dynamic") {
                ilibFileName += "-dyn";
            }
            if (_this.compilationType === "compiled") {
                ilibFileName += "-compiled";
            }
            ilibFileName += ".js";

            for (var filename in outputSet) {
                var outputFileName = filename + ".js";
                var dataFiles = outputSet[filename];

                var output =
                    "/*\n" +
                    " * WARNING: this is a file generated by ilib-webpack-plugin.js.\n" +
                    " * Do not hand edit or else your changes may be overwritten and lost.\n" +
                    " */\n";
                output += 'var ilib=require("./' + ilibFileName + '");\n';

                for (var dataFile in dataFiles) {
                    output += dataFiles[dataFile];
                }

                output += "module.exports = ilib;\n";
                console.log("Emitting " + outputFileName + " size " + output.length);
                if (_this.compilationType === "compiled") {
                    try {
                        var result = UglifyJS.minify(output, {fromString: true});
                        if (!result.error) {
                            output = result.code;
                            console.log("After compression: " + output.length);
                        } else {
                            console.log("Error compressing " + outputFileName + ": " + result.error);
                        }
                    } catch (e) {
                        console.log("Error while parsing " + filename);
                        console.log(e);
                    }
                }
                
                compilation.assets[outputFileName] = new Asset(output);
            }

            console.log("Done emitting locale data.");
        } else {
            console.log("No data to include");
        }
        callback();
    });
};

module.exports = IlibWebpackPlugin;