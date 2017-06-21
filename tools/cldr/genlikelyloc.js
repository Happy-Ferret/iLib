/*
 * genlikelyloc.js - ilib tool to generate the likelylocales.json files from 
 * the CLDR data files
 * 
 * Copyright © 2013-2017, JEDLSoft
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

/*
 * This code is intended to be run under node.js 
 */

var fs = require('fs');
var common = require('./common');
var Locale = common.Locale;

function usage() {
	console.log("Usage: genlikelyloc [-h] CLDR_json_dir locale_data_dir\n" +
			"Generate likely locale information file.\n" +
			"-h or --help\n" +
			"  this help\n" +
			"CLDR_json_dir\n" +
			"  the top level of the Unicode CLDR distribution in json format\n" +
			"locale_data_dir\n" +
			"  the top level of the ilib locale data directory\n");
	process.exit(1);
}

var cldrDirName;
var localeDirName;

process.argv.forEach(function (val, index, array) {
	if (val === "-h" || val === "--help") {
		usage();
	}
});

if (process.argv.length < 4) {
	console.error('Error: not enough arguments');
	usage();
}

cldrDirName = process.argv[2] +"cldr-core";
localeDirName = process.argv[3];

console.log("gendatefmts - generate date formats information files.\n" +
		"Copyright (c) 2013-2017 JEDLSoft");

console.log("CLDR dir: " + cldrDirName);
console.log("locale dir: " + localeDirName);

if (!fs.existsSync(cldrDirName)) {
	console.error("Could not access CLDR dir " + cldrDirName);
	usage();
}

if (!fs.existsSync(localeDirName)) {
	console.error("Could not access locale data directory " + localeDirName);
	usage();
}

var likelySubtags, likelySubtagsData, filename, json;



try {
	filename = cldrDirName + "/supplemental/likelySubtags.json";
	console.log("Reading " + filename);
	json = fs.readFileSync(filename, "utf-8");
	likelySubtags = JSON.parse(json);
} catch (e) {
	console.log("Error: Could not load file " + filename);
	process.exist(2);
}

var likelylocales = {};
likelySubtagsData = likelySubtags.supplemental;

for (var partial in likelySubtagsData.likelySubtags) {
	if (partial.search(/[0-9]/g) == -1) {
		if (partial && likelySubtagsData.likelySubtags[partial]) {
		var partloc = new Locale(partial.replace(/und-/g, ""));
		var full = new Locale(likelySubtagsData.likelySubtags[partial]);
		likelylocales[partloc.getSpec()] = full.getSpec(); 
		}
	}
}

console.log("Writing likelylocales.json...");

// now write out the system resources

var filename = localeDirName + "/likelylocales.json";
fs.writeFile(filename, JSON.stringify(likelylocales, true, 4), function (err) {
	if (err) {
		console.log(err);
		throw err;
	}
});

console.log("Done.");
