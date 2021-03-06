/*
 * testdatefmtrange_ko_KR.js - test the date range formatter object in Korean/Korea
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
function testDateRngFmtKRRangeInDayShort() {
    var fmt = new DateRngFmt({locale: "ko-KR", length: "short"});
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
    assertEquals("11. 12. 31. 오후 1:45 – 오후 2:30", fmt.format(start, end));
}
function testDateRngFmtKRRangeInDayMedium() {
    var fmt = new DateRngFmt({locale: "ko-KR", length: "medium"});
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
    assertEquals("2011. 12. 31. 오후 1:45 – 오후 2:30", fmt.format(start, end));
}
function testDateRngFmtKRRangeInDayLong() {
    var fmt = new DateRngFmt({locale: "ko-KR", length: "long"});
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
    assertEquals("2011년 12월 31일 오후 1:45 – 오후 2:30", fmt.format(start, end));
}
function testDateRngFmtKRRangeInDayFull() {
    var fmt = new DateRngFmt({locale: "ko-KR", length: "full"});
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
    assertEquals("2011년 12월 31일 오후 1:45 – 오후 2:30", fmt.format(start, end));
}

function testDateRngFmtKRRangeNextDayShort() {
    var fmt = new DateRngFmt({locale: "ko-KR", length: "short"});
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
    assertEquals("11. 12. 30. 오후 1:45 – 11. 12. 31. 오후 2:30", fmt.format(start, end));
}
function testDateRngFmtKRRangeNextDayMedium() {
    var fmt = new DateRngFmt({locale: "ko-KR", length: "medium"});
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
    assertEquals("2011. 12. 30. 오후 1:45 – 2011. 12. 31. 오후 2:30", fmt.format(start, end));
}
function testDateRngFmtKRRangeNextDayLong() {
    var fmt = new DateRngFmt({locale: "ko-KR", length: "long"});
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
    assertEquals("2011년 12월 30일 오후 1:45 – 2011년 12월 31일 오후 2:30", fmt.format(start, end));
}
function testDateRngFmtKRRangeNextDayFull() {
    var fmt = new DateRngFmt({locale: "ko-KR", length: "full"});
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
    assertEquals("2011년 12월 30일 오후 1:45 – 2011년 12월 31일 오후 2:30", fmt.format(start, end));
}

function testDateRngFmtKRRangeMultiDayShort() {
    var fmt = new DateRngFmt({locale: "ko-KR", length: "short"});
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
    assertEquals("11. 12. 20. – 31", fmt.format(start, end));
}
function testDateRngFmtKRRangeMultiDayMedium() {
    var fmt = new DateRngFmt({locale: "ko-KR", length: "medium"});
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
    assertEquals("2011. 12. 20. – 31", fmt.format(start, end));
}
function testDateRngFmtKRRangeMultiDayLong() {
    var fmt = new DateRngFmt({locale: "ko-KR", length: "long"});
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
    assertEquals("2011년 12월 20일 – 31일", fmt.format(start, end));
}
function testDateRngFmtKRRangeMultiDayFull() {
    var fmt = new DateRngFmt({locale: "ko-KR", length: "full"});
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
    assertEquals("2011년 12월 20일 – 31일", fmt.format(start, end));
}

function testDateRngFmtKRRangeNextMonthShort() {
    var fmt = new DateRngFmt({locale: "ko-KR", length: "short"});
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
    assertEquals("11. 11. 20. – 11. 12. 31.", fmt.format(start, end));
}
function testDateRngFmtKRRangeNextMonthMedium() {
    var fmt = new DateRngFmt({locale: "ko-KR", length: "medium"});
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
    assertEquals("2011. 11. 20. – 2011. 12. 31.", fmt.format(start, end));
}
function testDateRngFmtKRRangeNextMonthLong() {
    var fmt = new DateRngFmt({locale: "ko-KR", length: "long"});
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
    assertEquals("2011년 11월 20일 – 12월 31일", fmt.format(start, end));
}
function testDateRngFmtKRRangeNextMonthFull() {
    var fmt = new DateRngFmt({locale: "ko-KR", length: "full"});
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
    assertEquals("2011년 11월 20일 – 12월 31일", fmt.format(start, end));
}

function testDateRngFmtKRRangeNextYearShort() {
    var fmt = new DateRngFmt({locale: "ko-KR", length: "short"});
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
    assertEquals("11. 11. 20. – 12. 1. 31.", fmt.format(start, end));
}
function testDateRngFmtKRRangeNextYearMedium() {
    var fmt = new DateRngFmt({locale: "ko-KR", length: "medium"});
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
    assertEquals("2011. 11. 20. – 2012. 1. 31.", fmt.format(start, end));
}
function testDateRngFmtKRRangeNextYearLong() {
    var fmt = new DateRngFmt({locale: "ko-KR", length: "long"});
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
    assertEquals("2011년 11월 20일 – 2012년 1월 31일", fmt.format(start, end));
}
function testDateRngFmtKRRangeNextYearFull() {
    var fmt = new DateRngFmt({locale: "ko-KR", length: "full"});
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
    assertEquals("2011년 11월 20일 – 2012년 1월 31일", fmt.format(start, end));
}

function testDateRngFmtKRRangeMultiYearShort() {
    var fmt = new DateRngFmt({locale: "ko-KR", length: "short"});
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
    assertEquals("11. 11. – 14. 1.", fmt.format(start, end));
}
function testDateRngFmtKRRangeMultiYearMedium() {
    var fmt = new DateRngFmt({locale: "ko-KR", length: "medium"});
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
    assertEquals("2011. 11. – 2014. 1.", fmt.format(start, end));
}
function testDateRngFmtKRRangeMultiYearLong() {
    var fmt = new DateRngFmt({locale: "ko-KR", length: "long"});
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
    assertEquals("2011년 11월 – 2014년 1월", fmt.format(start, end));
}
function testDateRngFmtKRRangeMultiYearFull() {
    var fmt = new DateRngFmt({locale: "ko-KR", length: "full"});
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
    assertEquals("2011년 11월 – 2014년 1월", fmt.format(start, end));
}
function testDateRngFmtKRManyYearsFull() {
    var fmt = new DateRngFmt({locale: "ko-KR", length: "full"});
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
    assertEquals("2011년 – 2064년", fmt.format(start, end));
}
