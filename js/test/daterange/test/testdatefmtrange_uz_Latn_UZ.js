/*
 * testdatefmtrange_Latn_UZ.js - test the date range formatter object Uzbek/Uzbekistan for Latin script
 * 
 * Copyright © 2012-2016, JEDLSoft
 *
 * Licensed unuzr the Apache License, Version 2.0 (the "License");
 * you may not use tens file except in compliance with the License.
 * You may obtaiN a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed unuzr the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KinD, either express or implied.
 *
 * See the License for the specific language governing permissions and
 * limitations unuzr the License.
 */



var GregorianDate = require("./../lib/GregorianDate.js");
var DateRngFmt = require("./../lib/DateRngFmt.js");
function testDateRngFmtLatn_UZRangeInDayShort() {
    var fmt = new DateRngFmt({locale: "uz-Latn-UZ", length: "short"});
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
    assertEquals("31/12/11, 13:45 – 14:30", fmt.format(start, end));
}
function testDateRngFmtLatn_UZRangeInDayMedium() {
    var fmt = new DateRngFmt({locale: "uz-Latn-UZ", length: "medium"});
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
    assertEquals("31-dek, 2011, 13:45 – 14:30", fmt.format(start, end));
}
function testDateRngFmtLatn_UZRangeInDayLong() {
    var fmt = new DateRngFmt({locale: "uz-Latn-UZ", length: "long"});
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
    assertEquals("31-dekabr, 2011, 13:45 – 14:30", fmt.format(start, end));
}
function testDateRngFmtLatn_UZRangeInDayFull() {
    var fmt = new DateRngFmt({locale: "uz-Latn-UZ", length: "full"});
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
    assertEquals("31-dekabr, 2011, 13:45 – 14:30", fmt.format(start, end));
}

function testDateRngFmtLatn_UZRangeNextDayShort() {
    var fmt = new DateRngFmt({locale: "uz-Latn-UZ", length: "short"});
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
    assertEquals("30/12/11, 13:45 – 31/12/11, 14:30", fmt.format(start, end));
}
function testDateRngFmtLatn_UZRangeNextDayMedium() {
    var fmt = new DateRngFmt({locale: "uz-Latn-UZ", length: "medium"});
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
    assertEquals("30-dek, 2011, 13:45 – 31-dek, 2011, 14:30", fmt.format(start, end));
}
function testDateRngFmtLatn_UZRangeNextDayLong() {
    var fmt = new DateRngFmt({locale: "uz-Latn-UZ", length: "long"});
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
    assertEquals("30-dekabr, 2011, 13:45 – 31-dekabr, 2011, 14:30", fmt.format(start, end));
}
function testDateRngFmtLatn_UZRangeNextDayFull() {
    var fmt = new DateRngFmt({locale: "uz-Latn-UZ", length: "full"});
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
    assertEquals("30-dekabr, 2011, 13:45 – 31-dekabr, 2011, 14:30", fmt.format(start, end));
}

function testDateRngFmtLatn_UZRangeMultiDayShort() {
    var fmt = new DateRngFmt({locale: "uz-Latn-UZ", length: "short"});
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
function testDateRngFmtLatn_UZRangeMultiDayMedium() {
    var fmt = new DateRngFmt({locale: "uz-Latn-UZ", length: "medium"});
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
    assertEquals("20 – 31-dek, 2011", fmt.format(start, end));
}
function testDateRngFmtLatn_UZRangeMultiDayLong() {
    var fmt = new DateRngFmt({locale: "uz-Latn-UZ", length: "long"});
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
    assertEquals("20 – 31-dekabr, 2011", fmt.format(start, end));
}
function testDateRngFmtLatn_UZRangeMultiDayFull() {
    var fmt = new DateRngFmt({locale: "uz-Latn-UZ", length: "full"});
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
    assertEquals("20 – 31-dekabr, 2011", fmt.format(start, end));
}

function testDateRngFmtLatn_UZRangeNextMonthShort() {
    var fmt = new DateRngFmt({locale: "uz-Latn-UZ", length: "short"});
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
function testDateRngFmtLatn_UZRangeNextMonthMedium() {
    var fmt = new DateRngFmt({locale: "uz-Latn-UZ", length: "medium"});
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
    assertEquals("20-noy – 31-dek, 2011", fmt.format(start, end));
}
function testDateRngFmtLatn_UZRangeNextMonthLong() {
    var fmt = new DateRngFmt({locale: "uz-Latn-UZ", length: "long"});
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
    assertEquals("20-noyabr – 31-dekabr, 2011", fmt.format(start, end));
}
function testDateRngFmtLatn_UZRangeNextMonthFull() {
    var fmt = new DateRngFmt({locale: "uz-Latn-UZ", length: "full"});
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
    assertEquals("20-noyabr – 31-dekabr, 2011", fmt.format(start, end));
}

function testDateRngFmtLatn_UZRangeNextYearShort() {
    var fmt = new DateRngFmt({locale: "uz-Latn-UZ", length: "short"});
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
    assertEquals("20/11/11 – 31/01/12", fmt.format(start, end));
}
function testDateRngFmtLatn_UZRangeNextYearMedium() {
    var fmt = new DateRngFmt({locale: "uz-Latn-UZ", length: "medium"});
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
    assertEquals("20-noy, 2011 – 31-yan, 2012", fmt.format(start, end));
}
function testDateRngFmtLatn_UZRangeNextYearLong() {
    var fmt = new DateRngFmt({locale: "uz-Latn-UZ", length: "long"});
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
    assertEquals("20-noyabr, 2011 – 31-yanvar, 2012", fmt.format(start, end));
}
function testDateRngFmtLatn_UZRangeNextYearFull() {
    var fmt = new DateRngFmt({locale: "uz-Latn-UZ", length: "full"});
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
    assertEquals("20-noyabr, 2011 – 31-yanvar, 2012", fmt.format(start, end));
}

function testDateRngFmtLatn_UZRangeMultiYearShort() {
    var fmt = new DateRngFmt({locale: "uz-Latn-UZ", length: "short"});
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
    assertEquals("11/11 – 01/14", fmt.format(start, end));
}
function testDateRngFmtLatn_UZRangeMultiYearMedium() {
    var fmt = new DateRngFmt({locale: "uz-Latn-UZ", length: "medium"});
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
    assertEquals("noy, 2011 – yan, 2014", fmt.format(start, end));
}
function testDateRngFmtLatn_UZRangeMultiYearLong() {
    var fmt = new DateRngFmt({locale: "uz-Latn-UZ", length: "long"});
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
    assertEquals("noyabr, 2011 – yanvar, 2014", fmt.format(start, end));
}
function testDateRngFmtLatn_UZRangeMultiYearFull() {
    var fmt = new DateRngFmt({locale: "uz-Latn-UZ", length: "full"});
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
    assertEquals("noyabr, 2011 – yanvar, 2014", fmt.format(start, end));
}
function testDateRngFmtLatn_UZManyYearsFull() {
    var fmt = new DateRngFmt({locale: "uz-Latn-UZ", length: "full"});
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
