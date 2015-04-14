/*
 * webloader.js - loader implementation for web apps. 
 * 
 * Copyright © 2015, JEDLSoft
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

var path = require("./path.js");
var ilib = require("./ilibglobal.js");
var genericLoader = require("./loader.js");

var webLoader = function(ilib, sync, onLoad) {
	console.log("new webLoader instance\n");

	this.parent.call(this, ilib);
	
	// for use from within a check-out of ilib
	var base, root, pos;
	
	scripts = document.getElementsByTagName("script");

	pos = window.location.href.lastIndexOf('/');
	this.root = path.normalize(window.location.href.substring(0, pos));
	
	for (var i = 0; i < scripts.length; i++) {
		var source = scripts[i].src;
		if (source && (pos = source.search(/ilib-web\.js$/)) !== -1) {
			var colon = source.indexOf('://');
			this.protocol = source.substring(0,colon+3);
			base = path.join(source.substring(colon+3, pos-1), "..");
			break;
		}
	}
	
	this.base = path.normalize(path.join(base || this.root, "data"));

	//console.log("webLoader.constructor: this.base is " + this.base);
	//console.log("webLoader.constructor: this.root is " + this.root);
	
	this.includePath.push(path.join(this.root, "resources")); 	// always check the application's resources dir first
	
	// then try a check-out dir of ilib
	this._exists(path.join(this.base, "localetemp"), "localeinfo.json");
	
	// then a standard locale dir of a built version of ilib
	this._exists(path.join(this.base, "locale"), "localeinfo.json");
	
	// ... else fall back to the standard install directories
	this._exists("/usr/share/javascript/ilib/locale", "localeinfo.json");
};

webLoader.prototype = new genericLoader();
webLoader.prototype.parent = genericLoader;
webLoader.prototype.constructor = webLoader;

webLoader.prototype._loadFile = function (pathname, sync, cb) {
	// use normal web techniques
	var req = new XMLHttpRequest();
	var text = undefined;
		
	//req.open("GET", "file:" + path.resolve(file), false);
	if (pathname.substring(0, this.protocol.length) !== this.protocol) {
		pathname = this.protocol + pathname;
	}
	req.open("GET", pathname, !sync);
	//req.responseType = "text";
	req.onload = function(e) {
		text = req.response;
		if (typeof(cb) === 'function') {
			cb(req.status == 200 ? text : undefined);
		}
	};
	req.onerror = function(err) {
		// file is not there or could not be loaded
		text = undefined;
		if (typeof(cb) === 'function') {
			cb(undefined);
		}
	};
	
	//console.log("url is " + JSON.stringify(req._url, undefined, 4));
	try {
		req.send();
	} catch (e) {
		// could not load the file
		text = undefined;
	}
	
	return text;
};

module.exports = webLoader;