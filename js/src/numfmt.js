/*
 * numfmt.js - Number formatter definition
 * 
 * Copyright © 2012, JEDL Software, Inc.
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

// !depends ilibglobal.js locale.js strings.js resources.js currency.js

/**
 * @private
 */
ilib._roundFnc = {
	/**
	 * @private
	 * @param {number} num number to round
	 * @returns {number} rounded number
	 */
	floor: function (num) {
		return Math.floor(num);
	},
	
	/**
	 * @private
	 * @param {number} num number to round
	 * @returns {number} rounded number
	 */
	ceiling: function (num) {
		return Math.ceil(num);
	},
	
	/**
	 * @private
	 * @param {number} num number to round
	 * @returns {number} rounded number
	 */
	down: function (num) {
		return (num < 0) ? Math.ceil(num) : Math.floor(num);
	},
	
	/**
	 * @private
	 * @param {number} num number to round
	 * @returns {number} rounded number
	 */
	up: function (num) {
		return (num < 0) ? Math.floor(num) : Math.ceil(num);
	},
	
	/**
	 * @private
	 * @param {number} num number to round
	 * @returns {number} rounded number
	 */
	halfup: function (num) {
		return (num < 0) ? Math.ceil(num - 0.5) : Math.floor(num + 0.5);
	},
	
	/**
	 * @private
	 * @param {number} num number to round
	 * @returns {number} rounded number
	 */
	halfdown: function (num) {
		return (num < 0) ? Math.floor(num + 0.5) : Math.ceil(num - 0.5);
	},
	
	/**
	 * @private
	 * @param {number} num number to round
	 * @returns {number} rounded number
	 */
	halfeven: function (num) {
		return (Math.floor(num) % 2 === 0) ? Math.ceil(num - 0.5) : Math.floor(num + 0.5);
	},
	
	/**
	 * @private
	 * @param {number} num number to round
	 * @returns {number} rounded number
	 */
	halfodd: function (num) {
		return (Math.floor(num) % 2 !== 0) ? Math.ceil(num - 0.5) : Math.floor(num + 0.5);
	}
};

/**
 * @class
 * Create a new number formatter instance. Locales differ in the way that digits
 * in a formatted number are grouped, in the way the decimal character is represented, 
 * etc. Use this formatter to get it right for any locale.<p>
 * 
 * This formatter can format plain numbers, currency amounts, and percentage amounts.<p>  
 * 
 * As with all formatters, the recommended
 * practice is to create one formatter and use it multiple times to format various
 * numbers.<p>
 * 
 * The options can contain any of the following properties:
 * 
 * <ul>
 * <li><i>locale</i> - use the conventions of the specified locale when figuring out how to
 * format a number.
 * <li><i>type</i> - the type of this formatter. Valid values are "number", "currency", or 
 * "percentage". If this property is not specified, the default is "number".
 * <li><i>currency</i> - the ISO 4217 3-letter currency code to use when the formatter type 
 * is "currency". If the type is "currency" and this property is not specified, the currency
 * that is standard for the locale will be used. 
 * <li><i>maxFractionDigits</i> - the maximum number of digits that should appear in the
 * formatted output after the decimal. A value of -1 means unlimited, and 0 means only print
 * the integral part of the number. 
 * <li><i>minFractionDigits</i> - the minimum number of fractional digits that should
 * appear in the formatted output. If the number does not have enough fractional digits
 * to reach this minimum, the number will be zero-padded at the end to get to the limit.
 * If the type of the formatter is "currency" and this
 * property is not specified, then the minimum fraction digits is set to the normal number
 * of digits used with that currency, which is almost always 0, 2, or 3 digits.
 * <li><i>roundingMode</i> - When the maxFractionDigits or maxIntegerDigits is specified,
 * this property governs how the least significant digits are rounded to conform to that
 * maximum. The value of this property is a string with one of the following values:
 * <ul>
 *   <li><i>up</i> - round away from zero
 *   <li><i>down</i> - round towards zero. This has the effect of truncating the number
 *   <li><i>ceiling</i> - round towards positive infinity
 *   <li><i>floor</i> - round towards negative infinity
 *   <li><i>halfup</i> - round towards nearest neighbour. If equidistant, round up.
 *   <li><i>halfdown</i> - round towards nearest neighbour. If equidistant, round down.
 *   <li><i>halfeven</i> - round towards nearest neighbour. If equidistant, round towards the even neighbour
 *   <li><i>halfodd</i> - round towards nearest neighbour. If equidistant, round towards the odd neighbour
 * </ul>
 * When the type of the formatter is "currency" and the <i>roundingMode</i> property is not
 * set, then the standard legal rounding rules for the locale are followed. If the type
 * is "number" or "percentage" and the <i>roundingMode</i> property is not set, then the 
 * default mode is "halfdown".</i>.
 * <li><i>style</i> - When the type of this formatter is "currency", the currency amount
 * can be formatted in the following styles: "common" and "iso". The common style is the
 * one commonly used in every day writing where the currency unit is represented using a 
 * symbol. eg. "$57.35" for fifty-seven dollars and thirty five cents. The iso style is 
 * the international style where the currency unit is represented using the ISO 4217 code.
 * eg. "USD 57.35" for the same amount. The default is "common" style if the style is
 * not specified.<p>
 * 
 * When the type of this formatter is "number",
 * the style can be either "standard" or "scientific". A "standard" style means a fully
 * specified floating point number formatted for the locale, whereas "scientific" uses
 * scientific notation for all numbers. That is, 1 integral digit, followed by a number
 * of fractional digits, followed by an "e" which denotes exponentiation, followed digits
 * which give the power of 10 in the exponent. Note that if you specify a maximum number
 * of integral digits, the formatter with a standard style will give you standard 
 * formatting for smaller numbers and scientific notation for larger numbers. The default
 * is standard style if this is not specified. 
 * </ul>
 * <p>
 * 
 * Depends directive: !depends numfmt.js
 * 
 * @constructor
 * @param {Object.<string,*>} options A set of options that govern how the formatter will behave 
 */
ilib.NumFmt = function (options) {
	this.locale = new ilib.Locale();
	this.type = "number";
	
	if (options) {
		if (options.locale) {
			this.locale = (typeof(options.locale) === 'string') ? new ilib.Locale(options.locale) : options.locale;
		}
		
		if (options.type) {
			if (options.type === 'number' || 
				options.type === 'currency' || 
				options.type === 'percentage') {
				this.type = options.type;
			}
		}
		
		if (options.currency) {
			this.currency = options.currency;
		}
		
		if (typeof(options.maxFractionDigits) === 'number') {
			this.maxFractionDigits = options.maxFractionDigits;
		}
		if (typeof(options.minFractionDigits) === 'number') {
			this.minFractionDigits = options.minFractionDigits;
		}
		if (options.style) {
			this.style = options.style;
		}
	}
	
	this.localeInfo = new ilib.LocaleInfo(this.locale);
	switch (this.type) {
		case "currency":
			var templates,
				curopts = {
					locale: this.locale
				};
			
			if (this.currency) {
				curopts.code = this.currency;
			}
			
			this.currencyInfo = new ilib.Currency(curopts);
			if (this.style !== "common" && this.style !== "iso") {
				this.style = "common";
			}
			
			if (typeof(this.maxFractionDigits) !== 'number' && typeof(this.minFractionDigits) !== 'number') {
				this.minFractionDigits = this.maxFractionDigits = this.currencyInfo.getFractionDigits();
			}
			
			templates = this.localeInfo.getCurrencyFormats();
			this.template = new ilib.String(templates[this.style]);
			this.sign = (this.style === "iso") ? this.currencyInfo.getCode() : this.currencyInfo.getSign(); 
			break;
		case "percentage":
			this.template = new ilib.String(this.localeInfo.getPercentageFormat());
			break;
		default:
			break;
	}
	
	if (this.maxFractionDigits < this.minFractionDigits) {
		this.minFractionDigits = this.maxFractionDigits;
	}
	
	this.roundingMode = options && options.roundingMode;
	if (!this.roundingMode) {
		this.roundingMode = this.localeInfo.getRoundingMode();
	}
	if (!this.roundingMode) {
		this.roundingMode = this.currencyInfo && this.currencyInfo.roundingMode;
	}
	if (!this.roundingMode) {
		this.roundingMode = "halfdown";
	}
	
	// set up the function, so we only have to figure it out once
	// and not every time we do format()
	this.round = ilib._roundFnc[this.roundingMode];
	if (!this.round) {
		this.roundingMode = "halfdown";
		this.round = ilib._roundFnc[this.roundingMode];
	}
};

/**
 * Return an array of available locales that this formatter can format
 * @returns {Array.<ilib.Locale>|undefined} an array of available locales
 */
ilib.NumFmt.getAvailableLocales = function () {
	return undefined;
};

/**
 * @private
 * @const
 * @type string
 */
ilib.NumFmt.zeros = "0000000000000000000000000000000000000000000000000000000000000000000000";


ilib.NumFmt.prototype = {
	/*
	 * @private
	 */
	_pad: function (str, length, left) {
		return (str.length >= length) ? 
			str : 
			(left ? 
				ilib.NumFmt.zeros.substring(0,length-str.length) + str : 
				str + ilib.NumFmt.zeros.substring(0,length-str.length));  
	},
	
	/**
	 * @private
	 * @param {number} num the number to format
	 * @returns {string} the formatted number 
	 */
	_formatScientific: function (num) {
		if (typeof(this.maxFractionDigits) === 'number') {
			// if there is fraction digits, round it to the right length first
			// divide or multiply by 10 by manipulating the exponent so as to
			// avoid the rounding errors of floating point numbers
			var e, 
				factor,
				str = num.toExponential(),
				parts = str.split("e"),
				significant = parts[0];
			
			e = parts[1];	
			factor = Math.pow(10, this.maxFractionDigits);
			significant = this.round(significant * factor) / factor;
			return "" + significant + "e" + e;
		} else {
			return num.toExponential(this.minFractionDigits);
		}
	},
	
	/**
	 * @private 
	 * @param {number} num the number to format
	 * @returns {string} the formatted number
	 */ 
	_formatStandard: function (num) {
		var i;
		
		// console.log("_formatNumberStandard: formatting number " + num);
		if (this.maxFractionDigits > -1) {
			var factor = Math.pow(10, this.maxFractionDigits);
			num = this.round(num * factor) / factor;
		}

		var parts = ("" + num).split("."),
			integral = parts[0],
			fraction = parts[1],
			cycle, 
			groupSize = this.localeInfo.getGroupingDigits(),
			formatted;
		
		if (this.minFractionDigits > 0) {
			fraction = this._pad(fraction || "", this.minFractionDigits, false);
		}

		if (groupSize > 0) {
			cycle = ilib.mod(integral.length-1, groupSize);
			formatted = "";
			for (i = 0; i < integral.length-1; i++) {
				formatted += integral.charAt(i);
				if (cycle === 0) {
					formatted += this.localeInfo.getGroupingSeparator();
				}
				cycle = ilib.mod(cycle - 1, groupSize);
			}
			formatted += integral.charAt(integral.length-1);
		} else {
			formatted = integral;
		}
		
		if (fraction && (typeof(this.maxFractionDigits) === 'undefined' || this.maxFractionDigits > 0)) {
			formatted += this.localeInfo.getDecimalSeparator();
			formatted += fraction;
		}
		
		// console.log("_formatNumberStandard: returning " + formatted);
		return formatted;
	},
	
	/**
	 * Format a number according to the settings of this number formatter instance.
	 * @param num {number|ilib.Number} a floating point number to format
	 * @returns {string} a string containing the formatted number
	 */
	format: function (num) {
		var formatted, n;

		n = (typeof(num) === 'object') ? num.value() : num;
		if (this.type === "number") {
			formatted = (this.style === "scientific") ? 
					this._formatScientific(n) : 
					this._formatStandard(n);
		} else {			
			formatted = this.template.format({n: this._formatStandard(n), s: this.sign});
		}
		
		return formatted;
	},
	
	/*
	parse: function (numString) {
	},
	*/
	
	/**
	 * Return the type of formatter. Valid values are "number", "currency", and
	 * "percentage".
	 * 
	 * @returns {string} the type of formatter
	 */
	getType: function () {
		return this.type;
	},
	
	/**
	 * Return the locale for this formatter instance.
	 * @returns {ilib.Locale} the locale instance for this formatter
	 */
	getLocale: function () {
		return this.locale;
	},
	
	/**
	 * Returns true if this formatter groups together digits in the integral 
	 * portion of a number, based on the options set up in the constructor. In 
	 * most western European cultures, this means separating every 3 digits 
	 * of the integral portion of a number with a particular character.
	 * 
	 * @returns {boolean} true if this formatter groups digits in the integral
	 * portion of the number
	 */
	isGroupingUsed: function () {
		return (this.localeInfo.getGroupingSeparator() !== 'undefined');
	},
	
	/**
	 * Returns the maximum fraction digits set up in the constructor.
	 * 
	 * @returns {number} the maximum number of fractional digits this
	 * formatter will format, or -1 for no maximum
	 */
	getMaxFractionDigits: function () {
		return typeof(this.maxFractionDigits) !== 'undefined' ? this.maxFractionDigits : -1;
	},
	
	/**
	 * Returns the minimum fraction digits set up in the constructor. If
	 * the formatter has the type "currency", then the minimum fraction
	 * digits is the amount of digits that is standard for the currency
	 * in question unless overridden in the options to the constructor.
	 * 
	 * @returns {number} the minimum number of fractional digits this
	 * formatter will format, or -1 for no minimum
	 */
	getMinFractionDigits: function () {
		return typeof(this.minFractionDigits) !== 'undefined' ? this.minFractionDigits : -1;
	},

	/**
	 * Returns the ISO 4217 code for the currency that this formatter formats.
	 * IF the typeof this formatter is not "currency", then this method will
	 * return undefined.
	 * 
	 * @returns {string} the ISO 4217 code for the currency that this formatter
	 * formats, or undefined if this not a currency formatter
	 */
	getCurrency: function () {
		return this.currencyInfo && this.currencyInfo.getCode();
	},
	
	/**
	 * Returns the rounding mode set up in the constructor. The rounding mode
	 * controls how numbers are rounded when the integral or fraction digits 
	 * of a number are limited.
	 * 
	 * @returns {string} the name of the rounding mode used in this formatter
	 */
	getRoundingMode: function () {
		return this.roundingMode;
	},
	
	/**
	 * If this formatter is a currency formatter, then the style determines how the
	 * currency is denoted in the formatted output. This method returns the style
	 * that this formatter will produce. (See the constructor comment for more about
	 * the styles.)
	 * @returns {string} the name of the style this formatter will use to format
	 * currency amounts, or "undefined" if this formatter is not a currency formatter
	 */
	getStyle: function () {
		return this.style;
	}
};