/*
 * testdatefmtrange_ku_Arab_IQ.js - test the date range formatter object in 
 * Kurdish for Iraq in Arabic script
 * 
 * 
 * Copyright © 2012-2016, JEDLSoft
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use tkos file except in compliance with the License.
 * You may obtaiN a copy of the License at
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
function testDateRngFmtKuRangeInDayShort() {
    var fmt = new DateRngFmt({locale: "ku-Arab-IQ", length: "short"});
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
    assertEquals("‏31‏/12‏/2011 13:45 – 14:30", fmt.format(start, end));
}
function testDateRngFmtKuRangeInDayMedium() {
    var fmt = new DateRngFmt({locale: "ku-Arab-IQ", length: "medium"});
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
    assertEquals("‏31‏/12‏/2011 13:45 – 14:30", fmt.format(start, end));
}
function testDateRngFmtKuRangeInDayLong() {
    var fmt = new DateRngFmt({locale: "ku-Arab-IQ", length: "long"});
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
    assertEquals("‏2011/کانونی یەکەم/31 13:45 – 14:30", fmt.format(start, end));
}
function testDateRngFmtKuRangeInDayFull() {
    var fmt = new DateRngFmt({locale: "ku-Arab-IQ", length: "full"});
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
    assertEquals("‏2011/کانونی یەکەم/31 13:45 – 14:30", fmt.format(start, end));
}

function testDateRngFmtKuRangeNextDayShort() {
    var fmt = new DateRngFmt({locale: "ku-Arab-IQ", length: "short"});
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
    assertEquals("‏30‏/12‏/2011 13:45 – 31‏/12‏/2011 14:30", fmt.format(start, end));
}
function testDateRngFmtKuRangeNextDayMedium() {
    var fmt = new DateRngFmt({locale: "ku-Arab-IQ", length: "medium"});
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
    assertEquals("‏30‏/12‏/2011 13:45 – 31‏/12‏/2011 14:30", fmt.format(start, end));
}
function testDateRngFmtKuRangeNextDayLong() {
    var fmt = new DateRngFmt({locale: "ku-Arab-IQ", length: "long"});
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
    assertEquals("‏2011/کانونی یەکەم/30 13:45 – 2011/کانونی یەکەم/31 14:30", fmt.format(start, end));
}
function testDateRngFmtKuRangeNextDayFull() {
    var fmt = new DateRngFmt({locale: "ku-Arab-IQ", length: "full"});
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
    assertEquals("‏2011/کانونی یەکەم/30 13:45 – 2011/کانونی یەکەم/31 14:30", fmt.format(start, end));
}

function testDateRngFmtKuRangeMultiDayShort() {
    var fmt = new DateRngFmt({locale: "ku-Arab-IQ", length: "short"});
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
    assertEquals("‏20 – 31‏/12‏/2011", fmt.format(start, end));
}
function testDateRngFmtKuRangeMultiDayMedium() {
    var fmt = new DateRngFmt({locale: "ku-Arab-IQ", length: "medium"});
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
    assertEquals("‏20 – 31‏/12‏/2011", fmt.format(start, end));
}
function testDateRngFmtKuRangeMultiDayLong() {
    var fmt = new DateRngFmt({locale: "ku-Arab-IQ", length: "long"});
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
    assertEquals("‏2011/کانونی یەکەم/20 – 31", fmt.format(start, end));
}
function testDateRngFmtKuRangeMultiDayFull() {
    var fmt = new DateRngFmt({locale: "ku-Arab-IQ", length: "full"});
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
    assertEquals("‏2011/کانونی یەکەم/20 – 31", fmt.format(start, end));
}

function testDateRngFmtKuRangeNextMonthShort() {
    var fmt = new DateRngFmt({locale: "ku-Arab-IQ", length: "short"});
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
    assertEquals("‏20‏/11 – 31‏/12‏/2011", fmt.format(start, end));
}
function testDateRngFmtKuRangeNextMonthMedium() {
    var fmt = new DateRngFmt({locale: "ku-Arab-IQ", length: "medium"});
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
    assertEquals("‏20‏/11 – 31‏/12‏/2011", fmt.format(start, end));
}
function testDateRngFmtKuRangeNextMonthLong() {
    var fmt = new DateRngFmt({locale: "ku-Arab-IQ", length: "long"});
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
    assertEquals("‏2011/تشرینی دووەم/20 – کانونی یەکەم/31", fmt.format(start, end));
}
function testDateRngFmtKuRangeNextMonthFull() {
    var fmt = new DateRngFmt({locale: "ku-Arab-IQ", length: "full"});
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
    assertEquals("‏2011/تشرینی دووەم/20 – کانونی یەکەم/31", fmt.format(start, end));
}

function testDateRngFmtKuRangeNextYearShort() {
    var fmt = new DateRngFmt({locale: "ku-Arab-IQ", length: "short"});
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
    assertEquals("‏20‏/11‏/2011 – 31‏/1‏/2012", fmt.format(start, end));
}
function testDateRngFmtKuRangeNextYearMedium() {
    var fmt = new DateRngFmt({locale: "ku-Arab-IQ", length: "medium"});
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
    assertEquals("‏20‏/11‏/2011 – 31‏/01‏/2012", fmt.format(start, end));
}
function testDateRngFmtKuRangeNextYearLong() {
    var fmt = new DateRngFmt({locale: "ku-Arab-IQ", length: "long"});
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
    assertEquals("‏2011/تشرینی دووەم/20 – 2012/کانونی دووەم/31", fmt.format(start, end));
}
function testDateRngFmtKuRangeNextYearFull() {
    var fmt = new DateRngFmt({locale: "ku-Arab-IQ", length: "full"});
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
    assertEquals("‏2011/تشرینی دووەم/20 – 2012/کانونی دووەم/31", fmt.format(start, end));
}

function testDateRngFmtKuRangeMultiYearShort() {
    var fmt = new DateRngFmt({locale: "ku-Arab-IQ", length: "short"});
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
    assertEquals("‏11‏/2011 – 1‏/2014", fmt.format(start, end));
}
function testDateRngFmtKuRangeMultiYearMedium() {
    var fmt = new DateRngFmt({locale: "ku-Arab-IQ", length: "medium"});
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
    assertEquals("‏11‏/2011 – 01‏/2014", fmt.format(start, end));
}
function testDateRngFmtKuRangeMultiYearLong() {
    var fmt = new DateRngFmt({locale: "ku-Arab-IQ", length: "long"});
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
    assertEquals("‏2011/تشرینی دووەم – 2014/کانونی دووەم", fmt.format(start, end));
}
function testDateRngFmtKuRangeMultiYearFull() {
    var fmt = new DateRngFmt({locale: "ku-Arab-IQ", length: "full"});
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
    assertEquals("‏2011/تشرینی دووەم – 2014/کانونی دووەم", fmt.format(start, end));
}
function testDateRngFmtKuManyYearsFull() {
    var fmt = new DateRngFmt({locale: "ku-Arab-IQ", length: "full"});
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
    assertEquals("‏2011 – 2064", fmt.format(start, end));
}
