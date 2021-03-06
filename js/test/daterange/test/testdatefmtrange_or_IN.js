/*
 * testdatefmtrange_or_IN.js - test the date range formatter object in Oriya/India
 * 
 * Copyright © 2015-2016, JEDLSoft
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KinD, either express or implied.
 *
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

var GregorianDate = require("./../lib/GregorianDate.js");
var DateRngFmt = require("./../lib/DateRngFmt.js");
function testDateRngFmtRangeinDayShort_or_IN() {
    var fmt = new DateRngFmt({locale: "or-IN", length: "short"});
    assertNotNull(fmt);
    
    var start = new GregorianDate({
		year: 2011,
		month: 12,
		day: 31,
		hour: 13,
		minute: 45,
		second: 0,
		millisecond: 0
	});
    var end = new GregorianDate({
		year: 2011,
		month: 12,
		day: 31,
		hour: 14,
		minute: 30,
		second: 0,
		millisecond: 0
	});
    assertEquals("31-12-11 1:45 pm – 2:30 pm", fmt.format(start, end));
}
function testDateRngFmtRangeinDayMedium_or_IN() {
    var fmt = new DateRngFmt({locale: "or-IN", length: "medium"});
    assertNotNull(fmt);
    
    var start = new GregorianDate({
		year: 2011,
		month: 12,
		day: 31,
		hour: 13,
		minute: 45,
		second: 0,
		millisecond: 0
	});
    var end = new GregorianDate({
		year: 2011,
		month: 12,
		day: 31,
		hour: 14,
		minute: 30,
		second: 0,
		millisecond: 0
	});
    assertEquals("31 ଡିସେମ୍ବର 2011 1:45 pm – 2:30 pm", fmt.format(start, end));
}
function testDateRngFmtRangeinDayLong_or_IN() {
    var fmt = new DateRngFmt({locale: "or-IN", length: "long"});
    assertNotNull(fmt);
    
    var start = new GregorianDate({
		year: 2011,
		month: 12,
		day: 31,
		hour: 13,
		minute: 45,
		second: 0,
		millisecond: 0
	});
    var end = new GregorianDate({
		year: 2011,
		month: 12,
		day: 31,
		hour: 14,
		minute: 30,
		second: 0,
		millisecond: 0
	});
    assertEquals("31 ଡିସେମ୍ବର 2011 1:45 pm – 2:30 pm", fmt.format(start, end));
}
function testDateRngFmtRangeinDayFull_or_IN() {
    var fmt = new DateRngFmt({locale: "or-IN", length: "full"});
    assertNotNull(fmt);
    
    var start = new GregorianDate({
		year: 2011,
		month: 12,
		day: 31,
		hour: 13,
		minute: 45,
		second: 0,
		millisecond: 0
	});
    var end = new GregorianDate({
		year: 2011,
		month: 12,
		day: 31,
		hour: 14,
		minute: 30,
		second: 0,
		millisecond: 0
	});
    assertEquals("31 ଡିସେମ୍ବର 2011 1:45 pm – 2:30 pm", fmt.format(start, end));
}

function testDateRngFmtRangeNextDayShort_or_IN() {
    var fmt = new DateRngFmt({locale: "or-IN", length: "short"});
    assertNotNull(fmt);
    
    var start = new GregorianDate({
		year: 2011,
		month: 12,
		day: 30,
		hour: 13,
		minute: 45,
		second: 0,
		millisecond: 0
	});
    var end = new GregorianDate({
		year: 2011,
		month: 12,
		day: 31,
		hour: 14,
		minute: 30,
		second: 0,
		millisecond: 0
	});
    assertEquals("30-12-11 1:45 pm – 31-12-11 2:30 pm", fmt.format(start, end));
}
function testDateRngFmtRangeNextDayMedium_or_IN() {
    var fmt = new DateRngFmt({locale: "or-IN", length: "medium"});
    assertNotNull(fmt);
    
    var start = new GregorianDate({
		year: 2011,
		month: 12,
		day: 30,
		hour: 13,
		minute: 45,
		second: 0,
		millisecond: 0
	});
    var end = new GregorianDate({
		year: 2011,
		month: 12,
		day: 31,
		hour: 14,
		minute: 30,
		second: 0,
		millisecond: 0
	});
    assertEquals("30 ଡିସେମ୍ବର 2011 1:45 pm – 31 ଡିସେମ୍ବର 2011 2:30 pm", fmt.format(start, end));
}
function testDateRngFmtRangeNextDayLong_or_IN() {
    var fmt = new DateRngFmt({locale: "or-IN", length: "long"});
    assertNotNull(fmt);
    
    var start = new GregorianDate({
		year: 2011,
		month: 12,
		day: 30,
		hour: 13,
		minute: 45,
		second: 0,
		millisecond: 0
	});
    var end = new GregorianDate({
		year: 2011,
		month: 12,
		day: 31,
		hour: 14,
		minute: 30,
		second: 0,
		millisecond: 0
	});
    assertEquals("30 ଡିସେମ୍ବର 2011 1:45 pm – 31 ଡିସେମ୍ବର 2011 2:30 pm", fmt.format(start, end));
}
function testDateRngFmtRangeNextDayFull_or_IN() {
    var fmt = new DateRngFmt({locale: "or-IN", length: "full"});
    assertNotNull(fmt);
    
    var start = new GregorianDate({
		year: 2011,
		month: 12,
		day: 30,
		hour: 13,
		minute: 45,
		second: 0,
		millisecond: 0
	});
    var end = new GregorianDate({
		year: 2011,
		month: 12,
		day: 31,
		hour: 14,
		minute: 30,
		second: 0,
		millisecond: 0
	});
    assertEquals("30 ଡିସେମ୍ବର 2011 1:45 pm – 31 ଡିସେମ୍ବର 2011 2:30 pm", fmt.format(start, end));
}

function testDateRngFmtRangeMultiDayShort_or_IN() {
    var fmt = new DateRngFmt({locale: "or-IN", length: "short"});
    assertNotNull(fmt);
    
    var start = new GregorianDate({
		year: 2011,
		month: 12,
		day: 20,
		hour: 13,
		minute: 45,
		second: 0,
		millisecond: 0
	});
    var end = new GregorianDate({
		year: 2011,
		month: 12,
		day: 31,
		hour: 14,
		minute: 30,
		second: 0,
		millisecond: 0
	});
    assertEquals("20 – 31-12-11", fmt.format(start, end));
}
function testDateRngFmtRangeMultiDayMedium_or_IN() {
    var fmt = new DateRngFmt({locale: "or-IN", length: "medium"});
    assertNotNull(fmt);
    
    var start = new GregorianDate({
		year: 2011,
		month: 12,
		day: 20,
		hour: 13,
		minute: 45,
		second: 0,
		millisecond: 0
	});
    var end = new GregorianDate({
		year: 2011,
		month: 12,
		day: 31,
		hour: 14,
		minute: 30,
		second: 0,
		millisecond: 0
	});
    assertEquals("20 – 31 ଡିସେମ୍ବର 2011", fmt.format(start, end));
}
function testDateRngFmtRangeMultiDayLong_or_IN() {
    var fmt = new DateRngFmt({locale: "or-IN", length: "long"});
    assertNotNull(fmt);
    
    var start = new GregorianDate({
		year: 2011,
		month: 12,
		day: 20,
		hour: 13,
		minute: 45,
		second: 0,
		millisecond: 0
	});
    var end = new GregorianDate({
		year: 2011,
		month: 12,
		day: 31,
		hour: 14,
		minute: 30,
		second: 0,
		millisecond: 0
	});
    assertEquals("20 – 31 ଡିସେମ୍ବର 2011", fmt.format(start, end));
}
function testDateRngFmtRangeMultiDayFull_or_IN() {
    var fmt = new DateRngFmt({locale: "or-IN", length: "full"});
    assertNotNull(fmt);
    
    var start = new GregorianDate({
		year: 2011,
		month: 12,
		day: 20,
		hour: 13,
		minute: 45,
		second: 0,
		millisecond: 0
	});
    var end = new GregorianDate({
		year: 2011,
		month: 12,
		day: 31,
		hour: 14,
		minute: 30,
		second: 0,
		millisecond: 0
	});
    assertEquals("20 – 31 ଡିସେମ୍ବର 2011", fmt.format(start, end));
}

function testDateRngFmtRangeNextMonthShort_or_IN() {
    var fmt = new DateRngFmt({locale: "or-IN", length: "short"});
    assertNotNull(fmt);
    
    var start = new GregorianDate({
		year: 2011,
		month: 11,
		day: 20,
		hour: 13,
		minute: 45,
		second: 0,
		millisecond: 0
	});
    var end = new GregorianDate({
		year: 2011,
		month: 12,
		day: 31,
		hour: 14,
		minute: 30,
		second: 0,
		millisecond: 0
	});
    assertEquals("20-11 – 31-12-11", fmt.format(start, end));
}
function testDateRngFmtRangeNextMonthMedium_or_IN() {
    var fmt = new DateRngFmt({locale: "or-IN", length: "medium"});
    assertNotNull(fmt);
    
    var start = new GregorianDate({
		year: 2011,
		month: 11,
		day: 20,
		hour: 13,
		minute: 45,
		second: 0,
		millisecond: 0
	});
    var end = new GregorianDate({
		year: 2011,
		month: 12,
		day: 31,
		hour: 14,
		minute: 30,
		second: 0,
		millisecond: 0
	});
    assertEquals("20 ନଭେମ୍ବର – 31 ଡିସେମ୍ବର 2011", fmt.format(start, end));
}
function testDateRngFmtRangeNextMonthLong_or_IN() {
    var fmt = new DateRngFmt({locale: "or-IN", length: "long"});
    assertNotNull(fmt);
    
    var start = new GregorianDate({
		year: 2011,
		month: 11,
		day: 20,
		hour: 13,
		minute: 45,
		second: 0,
		millisecond: 0
	});
    var end = new GregorianDate({
		year: 2011,
		month: 12,
		day: 31,
		hour: 14,
		minute: 30,
		second: 0,
		millisecond: 0
	});
    assertEquals("20 ନଭେମ୍ବର – 31 ଡିସେମ୍ବର 2011", fmt.format(start, end));
}
function testDateRngFmtRangeNextMonthFull_or_IN() {
    var fmt = new DateRngFmt({locale: "or-IN", length: "full"});
    assertNotNull(fmt);
    
    var start = new GregorianDate({
		year: 2011,
		month: 11,
		day: 20,
		hour: 13,
		minute: 45,
		second: 0,
		millisecond: 0
	});
    var end = new GregorianDate({
		year: 2011,
		month: 12,
		day: 31,
		hour: 14,
		minute: 30,
		second: 0,
		millisecond: 0
	});
    assertEquals("20 ନଭେମ୍ବର – 31 ଡିସେମ୍ବର 2011", fmt.format(start, end));
}

function testDateRngFmtRangeNextYearShort_or_IN() {
    var fmt = new DateRngFmt({locale: "or-IN", length: "short"});
    assertNotNull(fmt);
    
    var start = new GregorianDate({
		year: 2011,
		month: 11,
		day: 20,
		hour: 13,
		minute: 45,
		second: 0,
		millisecond: 0
	});
    var end = new GregorianDate({
		year: 2012,
		month: 1,
		day: 31,
		hour: 14,
		minute: 30,
		second: 0,
		millisecond: 0
	});
    assertEquals("20-11-11 – 31-1-12", fmt.format(start, end));
}
function testDateRngFmtRangeNextYearMedium_or_IN() {
    var fmt = new DateRngFmt({locale: "or-IN", length: "medium"});
    assertNotNull(fmt);
    
    var start = new GregorianDate({
		year: 2011,
		month: 11,
		day: 20,
		hour: 13,
		minute: 45,
		second: 0,
		millisecond: 0
	});
    var end = new GregorianDate({
		year: 2012,
		month: 1,
		day: 31,
		hour: 14,
		minute: 30,
		second: 0,
		millisecond: 0
	});
    assertEquals("20 ନଭେମ୍ବର 2011 – 31 ଜାନୁଆରୀ 2012", fmt.format(start, end));
}
function testDateRngFmtRangeNextYearLong_or_IN() {
    var fmt = new DateRngFmt({locale: "or-IN", length: "long"});
    assertNotNull(fmt);
    
    var start = new GregorianDate({
		year: 2011,
		month: 11,
		day: 20,
		hour: 13,
		minute: 45,
		second: 0,
		millisecond: 0
	});
    var end = new GregorianDate({
		year: 2012,
		month: 1,
		day: 31,
		hour: 14,
		minute: 30,
		second: 0,
		millisecond: 0
	});
    assertEquals("20 ନଭେମ୍ବର 2011 – 31 ଜାନୁଆରୀ 2012", fmt.format(start, end));
}
function testDateRngFmtRangeNextYearFull_or_IN() {
    var fmt = new DateRngFmt({locale: "or-IN", length: "full"});
    assertNotNull(fmt);
    
    var start = new GregorianDate({
		year: 2011,
		month: 11,
		day: 20,
		hour: 13,
		minute: 45,
		second: 0,
		millisecond: 0
	});
    var end = new GregorianDate({
		year: 2012,
		month: 1,
		day: 31,
		hour: 14,
		minute: 30,
		second: 0,
		millisecond: 0
	});
    assertEquals("20 ନଭେମ୍ବର 2011 – 31 ଜାନୁଆରୀ 2012", fmt.format(start, end));
}

function testDateRngFmtRangeMultiYearShort_or_IN() {
    var fmt = new DateRngFmt({locale: "or-IN", length: "short"});
    assertNotNull(fmt);
    
    var start = new GregorianDate({
		year: 2011,
		month: 11,
		day: 20,
		hour: 13,
		minute: 45,
		second: 0,
		millisecond: 0
	});
    var end = new GregorianDate({
		year: 2014,
		month: 1,
		day: 31,
		hour: 14,
		minute: 30,
		second: 0,
		millisecond: 0
	});
    assertEquals("11-11 – 1-14", fmt.format(start, end));
}
function testDateRngFmtRangeMultiYearMedium_or_IN() {
    var fmt = new DateRngFmt({locale: "or-IN", length: "medium"});
    assertNotNull(fmt);
    
    var start = new GregorianDate({
		year: 2011,
		month: 11,
		day: 20,
		hour: 13,
		minute: 45,
		second: 0,
		millisecond: 0
	});
    var end = new GregorianDate({
		year: 2014,
		month: 1,
		day: 31,
		hour: 14,
		minute: 30,
		second: 0,
		millisecond: 0
	});
    assertEquals("ନଭେମ୍ବର 2011 – ଜାନୁଆରୀ 2014", fmt.format(start, end));
}
function testDateRngFmtRangeMultiYearLong_or_IN() {
    var fmt = new DateRngFmt({locale: "or-IN", length: "long"});
    assertNotNull(fmt);
    
    var start = new GregorianDate({
		year: 2011,
		month: 11,
		day: 20,
		hour: 13,
		minute: 45,
		second: 0,
		millisecond: 0
	});
    var end = new GregorianDate({
		year: 2014,
		month: 1,
		day: 31,
		hour: 14,
		minute: 30,
		second: 0,
		millisecond: 0
	});
    assertEquals("ନଭେମ୍ବର 2011 – ଜାନୁଆରୀ 2014", fmt.format(start, end));
}
function testDateRngFmtRangeMultiYearFull_or_IN() {
    var fmt = new DateRngFmt({locale: "or-IN", length: "full"});
    assertNotNull(fmt);
    
    var start = new GregorianDate({
		year: 2011,
		month: 11,
		day: 20,
		hour: 13,
		minute: 45,
		second: 0,
		millisecond: 0
	});
    var end = new GregorianDate({
		year: 2014,
		month: 1,
		day: 31,
		hour: 14,
		minute: 30,
		second: 0,
		millisecond: 0
	});
    assertEquals("ନଭେମ୍ବର 2011 – ଜାନୁଆରୀ 2014", fmt.format(start, end));
}
function testDateRngFmtManyYearsFull_or_IN() {
    var fmt = new DateRngFmt({locale: "or-IN", length: "full"});
    assertNotNull(fmt);
    
    var start = new GregorianDate({
		year: 2011,
		month: 11,
		day: 20,
		hour: 13,
		minute: 45,
		second: 0,
		millisecond: 0
	});
    var end = new GregorianDate({
		year: 2064,
		month: 1,
		day: 31,
		hour: 14,
		minute: 30,
		second: 0,
		millisecond: 0
	});
    assertEquals("2011 – 2064", fmt.format(start, end));
}
