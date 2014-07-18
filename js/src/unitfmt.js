/*
 * unitfmt.js - Unit formatter class
 * 
 * Copyright © 2014, JEDLSoft
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
!depends 
ilibglobal.js 
locale.js 
resources.js 
localeinfo.js
*/

// !data unitformats sysres

/**
 * Create a new unit formatter instance. The unit formatter is immutable once
 * it is created, but can format as many different strings with different values
 * as needed with the same options. Create different unit formatter instances 
 * for different purposes and then keep them cached for use later if you have 
 * more than one unit string to format.<p>
 * 
 * The options may contain any of the following properties:
 * 
 * <ul>
 * <li><i>locale</i> - locale to use when formatting the units. The locale also
 * controls the translation of the names of the units. If the locale is
 * not specified, then the default locale of the app or web page will be used.
 * 
 * <li><i>type</i> - Specify the type of units to format. Valid values are:
 * <ul>
 * <li><i>length</i>
 * <li><i>area</i>
 * <li><i>volume</i>
 * <li><i>time</i>
 * <li><i>speed</i>
 * <li><i>temperature</i>
 * <li><i>pressure</i>
 * <li><i>flow</i>
 * <li><i>electricity</i>
 * <li><i>energy</i>
 * <li><i>amounts of computer memory or storage</i>
 * </ul>
 * 
 * <li><i>useNative</i> - when true, use native digits to format the amount. If this
 * property is not specified, this formatter will default to the preference for the
 * current locale.
 * 
 * <li><i>onLoad</i> - a callback function to call when the date format object is fully 
 * loaded. When the onLoad option is given, the UnitFmt object will attempt to
 * load any missing locale data using the ilib loader callback.
 * When the constructor is done (even if the data is already preassembled), the 
 * onLoad function is called with the current instance as a parameter, so this
 * callback can be used with preassembled or dynamic loading or a mix of the two.
 * 
 * <li><i>sync</i> - tell whether to load any missing locale data synchronously or 
 * asynchronously. If this option is given as "false", then the "onLoad"
 * callback must be given, as the instance returned from this constructor will
 * not be usable for a while.
 *  
 * <li><i>loadParams</i> - an object containing parameters to pass to the 
 * loader callback function when locale data is missing. The parameters are not
 * interpretted or modified in any way. They are simply passed along. The object 
 * may contain any property/value pairs as long as the calling code is in
 * agreement with the loader callback function as to what those parameters mean.
 * </ul>
 * 
 * Here is an example of how you might use the unit formatter to format a string with
 * the correct units.<p>
 * 
 * Depends directive: !depends unitfmt.js
 * 
 * @class
 * @constructor
 * @param {Object} options options governing the way this date formatter instance works
 */
ilib.UnitFmt = function(options) {
	var sync = true, 
		loadParams = undefined;
	
	this.locale = new ilib.Locale();
	
	if (options) {
		if (options.locale) {
			this.locale = (typeof(options.locale) === 'string') ? new ilib.Locale(options.locale) : options.locale;
		}
		
		if (options.type) {
			if (options.type === 'date' || 
			    options.type === 'time' || 
			    options.type === 'datetime') {
				this.type = options.type;
			}
		}
				
		if (typeof(options.useNative) === 'boolean') {
			this.useNative = options.useNative;
		}
		
		if (typeof(options.sync) === 'boolean') {
			sync = options.sync;
		}
		
		loadParams = options.loadParams;
	}

	if (!ilib.UnitFmt.cache) {
		ilib.UnitFmt.cache = {};
	}

	new ilib.LocaleInfo(this.locale, {
		sync: sync,
		loadParams: loadParams,
		onLoad: ilib.bind(this, function (li) {
			this.locinfo = li;
			
			// load the strings used to translate the components
			new ilib.ResBundle({
				locale: this.locale,
				name: "sysres",
				sync: sync,
				loadParams: loadParams, 
				onLoad: ilib.bind(this, function (rb) {
					this.sysres = rb;
					
					if (!this.template) {
						ilib.loadData({
							object: ilib.UnitFmt, 
							locale: this.locale, 
							name: "unitformats.json", 
							sync: sync, 
							loadParams: loadParams, 
							callback: ilib.bind(this, function (formats) {
								if (!formats) {
									formats = ilib.UnitFmt.defaultFmt;
									var spec = this.locale.getSpec().replace(/-/g, '_');
									ilib.UnitFmt.cache[spec] = formats;
								}
								this._initTemplate(formats);
								if (options && typeof(options.onLoad) === 'function') {
									options.onLoad(this);
								}
							})
						});
					} else {
						if (options && typeof(options.onLoad) === 'function') {
							options.onLoad(this);
						}
					}
				})
			});	
		})
	});
};

ilib.UnitFmt.defaultFmt = ilib.data.unitformats || {
};

ilib.UnitFmt.prototype = {
	/**
	 * @protected
	 */
	_initTemplate: function (formats) {
		var digits;
		// set up the mapping to native or alternate digits if necessary
		if (typeof(this.useNative) === "boolean") {
			if (this.useNative) {
				digits = this.locinfo.getNativeDigits();
				if (digits) {
					this.digits = digits;
				}
			}
		} else if (this.locinfo.getDigitsStyle() === "native") {
			digits = this.locinfo.getNativeDigits();
			if (digits) {
				this.useNative = true;
				this.digits = digits;
			}
		}
	},
    
	/**
	 * Return the locale used with this formatter instance.
	 * @return {ilib.Locale} the ilib.Locale instance for this formatter
	 */
	getLocale: function() {
		return this.locale;
	},
	
	/**
	 * Return the template string that is used to format date/times for this
	 * formatter instance. This will work, even when the template property is not explicitly 
	 * given in the options to the constructor. Without the template option, the constructor 
	 * will build the appropriate template according to the options and use that template
	 * in the format method. 
	 * 
	 * @return {string} the format template for this formatter
	 */
	getTemplate: function() {
		return this.template;
	},
	
	/**
	 * Return the type of this formatter. The type is a string that has one of the following
	 * values: "time", "date", "datetime".
	 * @return {string} the type of the formatter
	 */
	getType: function() {
		return this.type;
	},
	
	/**
	 * Convert this formatter to a string representation by returning the
	 * format template. This method delegates to getTemplate.
	 * 
	 * @return {string} the format template
	 */
	toString: function() {
		return this.getTemplate();
	},
	
	/**
	 * Format a particular date instance according to the settings of this
	 * formatter object. The type of the date instance being formatted must 
	 * correspond exactly to the calendar type with which this formatter was 
	 * constructed. If the types are not compatible, this formatter will
	 * produce bogus results.
	 * 
	 * @param {string} unit units to format
	 * @param {Object} options
	 * @return {string} the formatted version of the given date instance
	 */
	format: function (unit, options) {
	}	
};
