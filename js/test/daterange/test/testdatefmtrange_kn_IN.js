/*
 * testdatefmtrange_kn_IN.js - test the date range formatter object in Kannada/india
 * 
 * 
 * Copyright © 2012-2016, JEDLSoft
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
function testDateRngFmtRangeinDayShort_kn_IN() {
    var fmt = new DateRngFmt({locale: "kn-IN", length: "short"});
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
    assertEquals("31/12/11 01:45 ಅಪರಾಹ್ನ – 02:30 ಅಪರಾಹ್ನ", fmt.format(start, end));
}
function testDateRngFmtRangeinDayMedium_kn_IN() {
    var fmt = new DateRngFmt({locale: "kn-IN", length: "medium"});
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
    assertEquals("ಡಿಸೆಂ 31, 2011 01:45 ಅಪರಾಹ್ನ – 02:30 ಅಪರಾಹ್ನ", fmt.format(start, end));
}
function testDateRngFmtRangeinDayLong_kn_IN() {
    var fmt = new DateRngFmt({locale: "kn-IN", length: "long"});
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
    assertEquals("ಡಿಸೆಂಬರ್ 31, 2011 01:45 ಅಪರಾಹ್ನ – 02:30 ಅಪರಾಹ್ನ", fmt.format(start, end));
}
function testDateRngFmtRangeinDayFull_kn_IN() {
    var fmt = new DateRngFmt({locale: "kn-IN", length: "full"});
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
    assertEquals("ಡಿಸೆಂಬರ್ 31, 2011 01:45 ಅಪರಾಹ್ನ – 02:30 ಅಪರಾಹ್ನ", fmt.format(start, end));
}

function testDateRngFmtRangeNextDayShort_kn_IN() {
    var fmt = new DateRngFmt({locale: "kn-IN", length: "short"});
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
    assertEquals("30/12/11 01:45 ಅಪರಾಹ್ನ – 31/12/11 02:30 ಅಪರಾಹ್ನ", fmt.format(start, end));
}
function testDateRngFmtRangeNextDayMedium_kn_IN() {
    var fmt = new DateRngFmt({locale: "kn-IN", length: "medium"});
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
    assertEquals("ಡಿಸೆಂ 30, 2011 01:45 ಅಪರಾಹ್ನ – ಡಿಸೆಂ 31, 2011 02:30 ಅಪರಾಹ್ನ", fmt.format(start, end));
}
function testDateRngFmtRangeNextDayLong_kn_IN() {
    var fmt = new DateRngFmt({locale: "kn-IN", length: "long"});
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
    assertEquals("ಡಿಸೆಂಬರ್ 30, 2011 01:45 ಅಪರಾಹ್ನ – ಡಿಸೆಂಬರ್ 31, 2011 02:30 ಅಪರಾಹ್ನ", fmt.format(start, end));
}
function testDateRngFmtRangeNextDayFull_kn_IN() {
    var fmt = new DateRngFmt({locale: "kn-IN", length: "full"});
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
    assertEquals("ಡಿಸೆಂಬರ್ 30, 2011 01:45 ಅಪರಾಹ್ನ – ಡಿಸೆಂಬರ್ 31, 2011 02:30 ಅಪರಾಹ್ನ", fmt.format(start, end));
}

function testDateRngFmtRangeMultiDayShort_kn_IN() {
    var fmt = new DateRngFmt({locale: "kn-IN", length: "short"});
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
    assertEquals("20 – 31/12/11", fmt.format(start, end));
}
function testDateRngFmtRangeMultiDayMedium_kn_IN() {
    var fmt = new DateRngFmt({locale: "kn-IN", length: "medium"});
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
    assertEquals("ಡಿಸೆಂ 20 – 31, 2011", fmt.format(start, end));
}
function testDateRngFmtRangeMultiDayLong_kn_IN() {
    var fmt = new DateRngFmt({locale: "kn-IN", length: "long"});
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
    assertEquals("ಡಿಸೆಂಬರ್ 20 – 31, 2011", fmt.format(start, end));
}
function testDateRngFmtRangeMultiDayFull_kn_IN() {
    var fmt = new DateRngFmt({locale: "kn-IN", length: "full"});
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
    assertEquals("ಡಿಸೆಂಬರ್ 20 – 31, 2011", fmt.format(start, end));
}

function testDateRngFmtRangeNextMonthShort_kn_IN() {
    var fmt = new DateRngFmt({locale: "kn-IN", length: "short"});
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
    assertEquals("20/11 – 31/12/11", fmt.format(start, end));
}
function testDateRngFmtRangeNextMonthMedium_kn_IN() {
    var fmt = new DateRngFmt({locale: "kn-IN", length: "medium"});
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
    assertEquals("ನವೆಂ 20 – ಡಿಸೆಂ 31, 2011", fmt.format(start, end));
}
function testDateRngFmtRangeNextMonthLong_kn_IN() {
    var fmt = new DateRngFmt({locale: "kn-IN", length: "long"});
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
    assertEquals("ನವೆಂಬರ್ 20 – ಡಿಸೆಂಬರ್ 31, 2011", fmt.format(start, end));
}
function testDateRngFmtRangeNextMonthFull_kn_IN() {
    var fmt = new DateRngFmt({locale: "kn-IN", length: "full"});
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
    assertEquals("ನವೆಂಬರ್ 20 – ಡಿಸೆಂಬರ್ 31, 2011", fmt.format(start, end));
}

function testDateRngFmtRangeNextYearShort_kn_IN() {
    var fmt = new DateRngFmt({locale: "kn-IN", length: "short"});
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
    assertEquals("20/11/11 – 31/1/12", fmt.format(start, end));
}
function testDateRngFmtRangeNextYearMedium_kn_IN() {
    var fmt = new DateRngFmt({locale: "kn-IN", length: "medium"});
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
    assertEquals("ನವೆಂ 20, 2011 – ಜನ 31, 2012", fmt.format(start, end));
}
function testDateRngFmtRangeNextYearLong_kn_IN() {
    var fmt = new DateRngFmt({locale: "kn-IN", length: "long"});
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
    assertEquals("ನವೆಂಬರ್ 20, 2011 – ಜನವರಿ 31, 2012", fmt.format(start, end));
}
function testDateRngFmtRangeNextYearFull_kn_IN() {
    var fmt = new DateRngFmt({locale: "kn-IN", length: "full"});
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
    assertEquals("ನವೆಂಬರ್ 20, 2011 – ಜನವರಿ 31, 2012", fmt.format(start, end));
}

function testDateRngFmtRangeMultiYearShort_kn_IN() {
    var fmt = new DateRngFmt({locale: "kn-IN", length: "short"});
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
    assertEquals("11/11 – 1/14", fmt.format(start, end));
}
function testDateRngFmtRangeMultiYearMedium_kn_IN() {
    var fmt = new DateRngFmt({locale: "kn-IN", length: "medium"});
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
    assertEquals("ನವೆಂ, 2011 – ಜನ, 2014", fmt.format(start, end));
}
function testDateRngFmtRangeMultiYearLong_kn_IN() {
    var fmt = new DateRngFmt({locale: "kn-IN", length: "long"});
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
    assertEquals("ನವೆಂಬರ್, 2011 – ಜನವರಿ, 2014", fmt.format(start, end));
}
function testDateRngFmtRangeMultiYearFull_kn_IN() {
    var fmt = new DateRngFmt({locale: "kn-IN", length: "full"});
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
    assertEquals("ನವೆಂಬರ್, 2011 – ಜನವರಿ, 2014", fmt.format(start, end));
}
function testDateRngFmtManyYearsFull_kn_IN() {
    var fmt = new DateRngFmt({locale: "kn-IN", length: "full"});
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
