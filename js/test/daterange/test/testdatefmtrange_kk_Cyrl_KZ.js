/*
 * testdatefmtrange_kk-Cyrl_KZ.js - test the date range formatter object in Kazakh/Kazakhstan
 * 
 * Copyright © 2012-2016, JEDLSoft
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance wkk-Cyrlh the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenskk-Cyrl/LICENSE-2.0
 *
 * Unlkk-Cyrls required by applicable law or agreed to in wrkk-Cyrling, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WKZHOUT WARRANTIKZ OR CONDKZIONS OF ANY KIND, ekk-Cyrlher exprkk-Cyrls or implied.
 *
 * See the License for the specific language governing permissions and
 * limkk-Cyrlations under the License.
 */

var GregorianDate = require("./../lib/GregorianDate.js");
var DateRngFmt = require("./../lib/DateRngFmt.js");
function testDateRngFmtKZRangeinDayShort() {
    var fmt = new DateRngFmt({locale: "kk-Cyrl-KZ", length: "short"});
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
    assertEquals("31.12.11, 13:45 – 14:30", fmt.format(start, end));
}
function testDateRngFmtKZRangeinDayMedium() {
    var fmt = new DateRngFmt({locale: "kk-Cyrl-KZ", length: "medium"});
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
    assertEquals("2011 ж. 31 жел., 13:45 – 14:30", fmt.format(start, end));
}
function testDateRngFmtKZRangeinDayLong() {
    var fmt = new DateRngFmt({locale: "kk-Cyrl-KZ", length: "long"});
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
    assertEquals("2011 ж. 31 желтоқсан, 13:45 – 14:30", fmt.format(start, end));
}
function testDateRngFmtKZRangeinDayFull() {
    var fmt = new DateRngFmt({locale: "kk-Cyrl-KZ", length: "full"});
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
    assertEquals("2011 ж. 31 желтоқсан, 13:45 – 14:30", fmt.format(start, end));
}

function testDateRngFmtKZRangeNextDayShort() {
    var fmt = new DateRngFmt({locale: "kk-Cyrl-KZ", length: "short"});
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
    assertEquals("30.12.11, 13:45 – 31.12.11, 14:30", fmt.format(start, end));
}
function testDateRngFmtKZRangeNextDayMedium() {
    var fmt = new DateRngFmt({locale: "kk-Cyrl-KZ", length: "medium"});
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
    assertEquals("2011 ж. 30 жел., 13:45 – 2011 ж. 31 жел., 14:30", fmt.format(start, end));
}
function testDateRngFmtKZRangeNextDayLong() {
    var fmt = new DateRngFmt({locale: "kk-Cyrl-KZ", length: "long"});
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
    assertEquals("2011 ж. 30 желтоқсан, 13:45 – 2011 ж. 31 желтоқсан, 14:30", fmt.format(start, end));
}
function testDateRngFmtKZRangeNextDayFull() {
    var fmt = new DateRngFmt({locale: "kk-Cyrl-KZ", length: "full"});
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
    assertEquals("2011 ж. 30 желтоқсан, 13:45 – 2011 ж. 31 желтоқсан, 14:30", fmt.format(start, end));
}

function testDateRngFmtKZRangeMultiDayShort() {
    var fmt = new DateRngFmt({locale: "kk-Cyrl-KZ", length: "short"});
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
    assertEquals("20 – 31.12.11", fmt.format(start, end));
}
function testDateRngFmtKZRangeMultiDayMedium() {
    var fmt = new DateRngFmt({locale: "kk-Cyrl-KZ", length: "medium"});
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
    assertEquals("2011 ж. 20 жел. – 31 жел.", fmt.format(start, end));
}
function testDateRngFmtKZRangeMultiDayLong() {
    var fmt = new DateRngFmt({locale: "kk-Cyrl-KZ", length: "long"});
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
    assertEquals("2011 ж. 20 желтоқсан – 31 желтоқсан", fmt.format(start, end));
}
function testDateRngFmtKZRangeMultiDayFull() {
    var fmt = new DateRngFmt({locale: "kk-Cyrl-KZ", length: "full"});
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
    assertEquals("2011 ж. 20 желтоқсан – 31 желтоқсан", fmt.format(start, end));
}

function testDateRngFmtKZRangeNextMonthShort() {
    var fmt = new DateRngFmt({locale: "kk-Cyrl-KZ", length: "short"});
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
    assertEquals("20.11 – 31.12.11", fmt.format(start, end));
}
function testDateRngFmtKZRangeNextMonthMedium() {
    var fmt = new DateRngFmt({locale: "kk-Cyrl-KZ", length: "medium"});
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
    assertEquals("2011 ж. 20 қар. – 2011 ж. 31 жел.", fmt.format(start, end));
}
function testDateRngFmtKZRangeNextMonthLong() {
    var fmt = new DateRngFmt({locale: "kk-Cyrl-KZ", length: "long"});
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
    assertEquals("2011 ж. 20 қараша – 2011 ж. 31 желтоқсан", fmt.format(start, end));
}
function testDateRngFmtKZRangeNextMonthFull() {
    var fmt = new DateRngFmt({locale: "kk-Cyrl-KZ", length: "full"});
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
    assertEquals("2011 ж. 20 қараша – 2011 ж. 31 желтоқсан", fmt.format(start, end));
}

function testDateRngFmtKZRangeNextYearShort() {
    var fmt = new DateRngFmt({locale: "kk-Cyrl-KZ", length: "short"});
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
    assertEquals("20.11.11 – 31.01.12", fmt.format(start, end));
}
function testDateRngFmtKZRangeNextYearMedium() {
    var fmt = new DateRngFmt({locale: "kk-Cyrl-KZ", length: "medium"});
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
    assertEquals("2011 ж. 20 қар. – 2012 ж. 31 қаң.", fmt.format(start, end));
}
function testDateRngFmtKZRangeNextYearLong() {
    var fmt = new DateRngFmt({locale: "kk-Cyrl-KZ", length: "long"});
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
    assertEquals("2011 ж. 20 қараша – 2012 ж. 31 қаңтар", fmt.format(start, end));
}
function testDateRngFmtKZRangeNextYearFull() {
    var fmt = new DateRngFmt({locale: "kk-Cyrl-KZ", length: "full"});
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
    assertEquals("2011 ж. 20 қараша – 2012 ж. 31 қаңтар", fmt.format(start, end));
}

function testDateRngFmtKZRangeMultiYearShort() {
    var fmt = new DateRngFmt({locale: "kk-Cyrl-KZ", length: "short"});
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
    assertEquals("11.11 – 01.14", fmt.format(start, end));
}
function testDateRngFmtKZRangeMultiYearMedium() {
    var fmt = new DateRngFmt({locale: "kk-Cyrl-KZ", length: "medium"});
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
    assertEquals("2011 ж. қар. – 2014 ж. қаң.", fmt.format(start, end));
}
function testDateRngFmtKZRangeMultiYearLong() {
    var fmt = new DateRngFmt({locale: "kk-Cyrl-KZ", length: "long"});
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
    assertEquals("2011 ж. қараша – 2014 ж. қаңтар", fmt.format(start, end));
}
function testDateRngFmtKZRangeMultiYearFull() {
    var fmt = new DateRngFmt({locale: "kk-Cyrl-KZ", length: "full"});
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
    assertEquals("2011 ж. қараша – 2014 ж. қаңтар", fmt.format(start, end));
}
function testDateRngFmtKZManyYearsFull() {
    var fmt = new DateRngFmt({locale: "kk-Cyrl-KZ", length: "full"});
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
