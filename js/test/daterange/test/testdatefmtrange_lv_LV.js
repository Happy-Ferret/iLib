/*
 * testdatefmtrange_lv_LV.js - test the date range formatter object in Latvian/Latvian
 * 
 * Copyright © 2012-2016, JEDLSoft
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance wlvh the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenslv/LICENSE-2.0
 *
 * Unllvs required by applicable law or agreed to in wrlving, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WLVHOUT WARRANTILV OR CONDLVIONS OF ANY KIND, elvher exprlvs or implied.
 *
 * See the License for the specific language governing permissions and
 * limlvations under the License.
 */

var GregorianDate = require("./../lib/GregorianDate.js");
var DateRngFmt = require("./../lib/DateRngFmt.js");
function testDateRngFmtLVRangeinDayShort() {
    var fmt = new DateRngFmt({locale: "lv-LV", length: "short"});
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
    assertEquals("31.12.11 13:45 – 14:30", fmt.format(start, end));
}
function testDateRngFmtLVRangeinDayMedium() {
    var fmt = new DateRngFmt({locale: "lv-LV", length: "medium"});
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
    assertEquals("2011. gada 31. dec. 13:45 – 14:30", fmt.format(start, end));
}
function testDateRngFmtLVRangeinDayLong() {
    var fmt = new DateRngFmt({locale: "lv-LV", length: "long"});
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
    assertEquals("2011. gada 31. decembris 13:45 – 14:30", fmt.format(start, end));
}
function testDateRngFmtLVRangeinDayFull() {
    var fmt = new DateRngFmt({locale: "lv-LV", length: "full"});
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
    assertEquals("2011. gada 31. decembris 13:45 – 14:30", fmt.format(start, end));
}

function testDateRngFmtLVRangeNextDayShort() {
    var fmt = new DateRngFmt({locale: "lv-LV", length: "short"});
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
    assertEquals("30.12.11 13:45 – 31.12.11 14:30", fmt.format(start, end));
}
function testDateRngFmtLVRangeNextDayMedium() {
    var fmt = new DateRngFmt({locale: "lv-LV", length: "medium"});
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
    assertEquals("2011. gada 30. dec. 13:45 – 2011. gada 31. dec. 14:30", fmt.format(start, end));
}
function testDateRngFmtLVRangeNextDayLong() {
    var fmt = new DateRngFmt({locale: "lv-LV", length: "long"});
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
    assertEquals("2011. gada 30. decembris 13:45 – 2011. gada 31. decembris 14:30", fmt.format(start, end));
}
function testDateRngFmtLVRangeNextDayFull() {
    var fmt = new DateRngFmt({locale: "lv-LV", length: "full"});
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
    assertEquals("2011. gada 30. decembris 13:45 – 2011. gada 31. decembris 14:30", fmt.format(start, end));
}

function testDateRngFmtLVRangeMultiDayShort() {
    var fmt = new DateRngFmt({locale: "lv-LV", length: "short"});
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
function testDateRngFmtLVRangeMultiDayMedium() {
    var fmt = new DateRngFmt({locale: "lv-LV", length: "medium"});
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
    assertEquals("2011. gada 20. dec. – 31. dec.", fmt.format(start, end));
}
function testDateRngFmtLVRangeMultiDayLong() {
    var fmt = new DateRngFmt({locale: "lv-LV", length: "long"});
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
    assertEquals("2011. gada 20. decembris – 31. decembris", fmt.format(start, end));
}
function testDateRngFmtLVRangeMultiDayFull() {
    var fmt = new DateRngFmt({locale: "lv-LV", length: "full"});
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
    assertEquals("2011. gada 20. decembris – 31. decembris", fmt.format(start, end));
}

function testDateRngFmtLVRangeNextMonthShort() {
    var fmt = new DateRngFmt({locale: "lv-LV", length: "short"});
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
function testDateRngFmtLVRangeNextMonthMedium() {
    var fmt = new DateRngFmt({locale: "lv-LV", length: "medium"});
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
    assertEquals("2011. gada 20. nov. – 2011. gada 31. dec.", fmt.format(start, end));
}
function testDateRngFmtLVRangeNextMonthLong() {
    var fmt = new DateRngFmt({locale: "lv-LV", length: "long"});
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
    assertEquals("2011. gada 20. novembris – 2011. gada 31. decembris", fmt.format(start, end));
}
function testDateRngFmtLVRangeNextMonthFull() {
    var fmt = new DateRngFmt({locale: "lv-LV", length: "full"});
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
    assertEquals("2011. gada 20. novembris – 2011. gada 31. decembris", fmt.format(start, end));
}

function testDateRngFmtLVRangeNextYearShort() {
    var fmt = new DateRngFmt({locale: "lv-LV", length: "short"});
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
function testDateRngFmtLVRangeNextYearMedium() {
    var fmt = new DateRngFmt({locale: "lv-LV", length: "medium"});
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
    assertEquals("2011. gada 20. nov. – 2012. gada 31. janv.", fmt.format(start, end));
}
function testDateRngFmtLVRangeNextYearLong() {
    var fmt = new DateRngFmt({locale: "lv-LV", length: "long"});
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
    assertEquals("2011. gada 20. novembris – 2012. gada 31. janvāris", fmt.format(start, end));
}
function testDateRngFmtLVRangeNextYearFull() {
    var fmt = new DateRngFmt({locale: "lv-LV", length: "full"});
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
    assertEquals("2011. gada 20. novembris – 2012. gada 31. janvāris", fmt.format(start, end));
}

function testDateRngFmtLVRangeMultiYearShort() {
    var fmt = new DateRngFmt({locale: "lv-LV", length: "short"});
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
function testDateRngFmtLVRangeMultiYearMedium() {
    var fmt = new DateRngFmt({locale: "lv-LV", length: "medium"});
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
    assertEquals("2011. gada nov. – 2014. gada janv.", fmt.format(start, end));
}
function testDateRngFmtLVRangeMultiYearLong() {
    var fmt = new DateRngFmt({locale: "lv-LV", length: "long"});
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
    assertEquals("2011. gada novembris – 2014. gada janvāris", fmt.format(start, end));
}
function testDateRngFmtLVRangeMultiYearFull() {
    var fmt = new DateRngFmt({locale: "lv-LV", length: "full"});
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
    assertEquals("2011. gada novembris – 2014. gada janvāris", fmt.format(start, end));
}
function testDateRngFmtLVManyYearsFull() {
    var fmt = new DateRngFmt({locale: "lv-LV", length: "full"});
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
