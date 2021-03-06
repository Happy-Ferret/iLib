# Development Backlog #

## Features for iLib ##

Here is a list of features in no particular order that may be developed for iLib in a future release. When it comes time to plan for the next release, the priority of each of the following will be re-evaluated and the top few will be scheduled for development.

* Support the BCP-47 standard for locale specs - DONE
    * add script concept to locales, support ISO 15924 script IDs
* code to auto-detect the locale of the environment that iLib is running in - DONE
    * perhaps part of the Locale class when you call the constructor with no arguments?
    * check the environment, http headers if available, browser variables if available, etc.
* person names - DONE
    * parsing
    * formatting
    * sort names (in German and Dutch, "von Beethoven" sorts under "B" instead of "V")
* phone numbers - DONE (Needs more locale data for many other countries)
    * parsing
    * formatting
    * geolocation
    * normalization
    * matching
    * letter dialing conversion (1-800-FLOWERS = 1-800-356-9377) (This part is not done)
* address parsing and formatting - DONE
* number parsing and formatting
    * better support for Asian formats
    * currency conversion via OANDA or other such services
* date parsing and recognition
* calendars
    * Persian calendar - DONE
    * Hebrew calendar - DONE
    * Chinese lunar calendar
    * Japanese Imperial
    * phase of the moon calculations - DONE
    * solstice and equinox calculations - DONE
* String formatting
    * For choice formats, support a syntax like "*2" for the match string to match any number that ends in 2. Needed to do proper plurals and ordinals, especially in Russian. - DONE
        * alternate idea: maybe support regular expressions for the match strings?
    * String truncation function to truncate a string between words where possible - DONE
    * Line wrapping function to wrap lines between words where possible
        * hyphenation?
    * case function, with options: - upper and lower casing currently supported
        * title case
        * start case
        * sentence case
        * lower case
        * etc.
    * integrate choice formatting into replacement parameters in the regular format function?
    * pseudo-translation updates
        * support mapping to other scripts, such as RTL scripts or Asian scripts in order to test your app's support for those scripts - DONE
        * support a "hash" before each string so you can identify when two strings that appear in the UI come from the same or different resource strings
* jQuery plugin.
    * iLib provides the date/locale information to configure the jQuery UI widgets
    * date picker (calendar)
    * IME
    * validators for various data types such as person names, phone numbers, date/times, numbers, currency, percentages, etc.
* Holidays
    * configuration per locale
    * calculations of holiday dates in each year
* transliteration
    * to base characters (de-accenting)
    * to lower- or upper-case
    * phonetically between scripts. eg. Romaji <-> katakana, Pinyin <-> ideographs, Cyrillic <-> Latin
    * to IPA for use in rhyming
    * from IPA to other characters in IPA for use in soundex
    * to sort key string
    * from numeric pinyin to accented pinyin
* resource bundle updates
    * translation wrapper around Bing, Babelfish, Google in the ResBundle object
    * support fetching translations dynamically via AJAX (perhaps requiring the jQuery integration?)
* charset object - DONE
    * identification
    * normalization of IANA charset names
    * charset conversion
    * recognition
* character functions
    * script identification (given a character, tell what script it is used in)
    * character normalization (Unicode normalizations, etc.) - DONE
* word functions
    * given a word, tell which gender it is
    * given a word, tell which case it is
    * given a word, tell the plurality of it
    * given a word, tell the politeness level (Japanese)
* collation/sorting - DONE (code is done, but needs more locale data support though)
    * accent insensitive
    * case insensitive
    * support unique compressions
    * sort key generation and sort key strings
    * sort styles (eg. “dictionary sort” or “phonebook sort” in German)
* Segmentation
    * word- and sentence-segmenting
    * line breaking and text wrapping
        * Asian rules
        * syllabification for Euro languages
    * ellipsizing method in String class - DONE
* unit conversions (metric <-> imperial, celcius <-> fahrenheit) - DONE
* Locale-sensitive UI widgets
    * Calendar picker (based on jquery)
    * Time picker
    * Address form
* Input Method Editors (IME)
    * configurable 101 software keyboards
    * KKC for Japanese
    * Hangul for Korean
    * Pinyin for Chinese (and others? Wubi?)
* More locale data 
    * translations for strings to more locales - DONE
    * date components and formats - DONE
    * name parsing info
    * paper sizes - DONE
    * default timezone for the locale, and lists of timezones in the locale - DONE
    * keyboard layouts
    * collation configurations
    * phonetic transliterations
    * holiday schedules
    * configuration detailing dates of transition from Julian to Gregorian calendar 
    * phone number info and geolocations
    * name configuration

## Features for the JS Assembly Tool ##

Here are a proposed set of features to add to the assembly tool.

* Ability to read a set of HTML/PHP/JSP/etc. files for depends and data directives without including them into the output file. This allows you to assemble an iLib JS file with only the stuff that is needed by your web app.
* Rewrite in Javascript
* Make a simple ilib generator web page, similar to the jquery-ui theme generator, where you pick which classes you want and which locales you want, and it will build a copy of ilib for you with all dependencies satisfied