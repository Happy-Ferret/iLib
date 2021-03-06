/*
 * testdatefmtrange_en_US.js - test the date range formatter object in US English
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
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 *
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */


var GregorianDate = require("./../lib/GregorianDate.js");
var DateRngFmt = require("./../lib/DateRngFmt.js");
function testDateRngFmtInDayShort() {
    var fmt = new DateRngFmt({length: "short"});
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
    assertEquals("12/31/11, 1:45 PM – 2:30 PM", fmt.format(start, end));
}
function testDateRngFmtInDayMedium() {
    var fmt = new DateRngFmt({length: "medium"});
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
    assertEquals("Dec 31, 2011, 1:45 PM – 2:30 PM", fmt.format(start, end));
}
function testDateRngFmtInDayLong() {
    var fmt = new DateRngFmt({length: "long"});
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
    assertEquals("December 31, 2011 at 1:45 PM – 2:30 PM", fmt.format(start, end));
}
function testDateRngFmtInDayFull() {
    var fmt = new DateRngFmt({length: "full"});
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
    assertEquals("December 31, 2011 at 1:45 PM – 2:30 PM", fmt.format(start, end));
}

function testDateRngFmtNextDayShort() {
    var fmt = new DateRngFmt({length: "short"});
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
    assertEquals("12/30/11, 1:45 PM – 12/31/11, 2:30 PM", fmt.format(start, end));
}
function testDateRngFmtNextDayMedium() {
    var fmt = new DateRngFmt({length: "medium"});
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
    assertEquals("Dec 30, 2011, 1:45 PM – Dec 31, 2011, 2:30 PM", fmt.format(start, end));
}
function testDateRngFmtNextDayLong() {
    var fmt = new DateRngFmt({length: "long"});
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
    assertEquals("December 30, 2011 at 1:45 PM – December 31, 2011 at 2:30 PM", fmt.format(start, end));
}
function testDateRngFmtNextDayFull() {
    var fmt = new DateRngFmt({length: "full"});
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
    assertEquals("December 30, 2011 at 1:45 PM – December 31, 2011 at 2:30 PM", fmt.format(start, end));
}

function testDateRngFmtMultiDayShort() {
    var fmt = new DateRngFmt({length: "short"});
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
    assertEquals("12/20/11 – 12/31/11", fmt.format(start, end));
}
function testDateRngFmtMultiDayMedium() {
    var fmt = new DateRngFmt({length: "medium"});
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
    assertEquals("Dec 20 – 31, 2011", fmt.format(start, end));
}
function testDateRngFmtMultiDayLong() {
    var fmt = new DateRngFmt({length: "long"});
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
    assertEquals("December 20 – 31, 2011", fmt.format(start, end));
}
function testDateRngFmtMultiDayFull() {
    var fmt = new DateRngFmt({length: "full"});
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
    assertEquals("December 20 – 31, 2011", fmt.format(start, end));
}

function testDateRngFmtNextMonthShort() {
    var fmt = new DateRngFmt({length: "short"});
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
    assertEquals("11/20/11 – 12/31/11", fmt.format(start, end));
}
function testDateRngFmtNextMonthMedium() {
    var fmt = new DateRngFmt({length: "medium"});
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
    assertEquals("Nov 20 – Dec 31, 2011", fmt.format(start, end));
}
function testDateRngFmtNextMonthLong() {
    var fmt = new DateRngFmt({length: "long"});
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
    assertEquals("November 20 – December 31, 2011", fmt.format(start, end));
}
function testDateRngFmtNextMonthFull() {
    var fmt = new DateRngFmt({length: "full"});
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
    assertEquals("November 20 – December 31, 2011", fmt.format(start, end));
}

function testDateRngFmtNextYearShort() {
    var fmt = new DateRngFmt({length: "short"});
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
    assertEquals("11/20/11 – 1/31/12", fmt.format(start, end));
}
function testDateRngFmtNextYearMedium() {
    var fmt = new DateRngFmt({length: "medium"});
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
    assertEquals("Nov 20, 2011 – Jan 31, 2012", fmt.format(start, end));
}
function testDateRngFmtNextYearLong() {
    var fmt = new DateRngFmt({length: "long"});
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
    assertEquals("November 20, 2011 – January 31, 2012", fmt.format(start, end));
}
function testDateRngFmtNextYearFull() {
    var fmt = new DateRngFmt({length: "full"});
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
    assertEquals("November 20, 2011 – January 31, 2012", fmt.format(start, end));
}

function testDateRngFmtMultiYearShort() {
    var fmt = new DateRngFmt({length: "short"});
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
function testDateRngFmtMultiYearMedium() {
    var fmt = new DateRngFmt({length: "medium"});
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
    assertEquals("Nov, 2011 – Jan, 2014", fmt.format(start, end));
}
function testDateRngFmtMultiYearLong() {
    var fmt = new DateRngFmt({length: "long"});
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
    assertEquals("November, 2011 – January, 2014", fmt.format(start, end));
}
function testDateRngFmtMultiYearFull() {
    var fmt = new DateRngFmt({length: "full"});
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
    assertEquals("November, 2011 – January, 2014", fmt.format(start, end));
}
function testDateRngFmtManyYearsFull() {
    var fmt = new DateRngFmt({length: "full"});
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

function testDateRngFmtRangeShortWithinDay() {
    var fmt = new DateRngFmt();
    assertNotNull(fmt);
    
    var date1 = new GregorianDate({
		year: 2011,
		month: 11,
		day: 18,
		hour: 14,
		minute: 34,
		second: 12,
		millisecond: 0
	});
    var date2 = new GregorianDate({
		year: 2011,
		month: 11,
		day: 18,
		hour: 17,
		minute: 0,
		second: 0,
		millisecond: 0
	});

    assertEquals("11/18/11, 2:34 PM – 5:00 PM", fmt.format(date1, date2));    
}

function testDateRngFmtRangeShortWithinMonth() {
    var fmt = new DateRngFmt();
    assertNotNull(fmt);
    
    var date1 = new GregorianDate({
		year: 2011,
		month: 11,
		day: 2,
		hour: 14,
		minute: 0,
		second: 0,
		millisecond: 0
	});
    var date2 = new GregorianDate({
		year: 2011,
		month: 11,
		day: 19,
		hour: 8,
		minute: 0,
		second: 0,
		millisecond: 0
	});

    assertEquals("11/2/11 – 11/19/11", fmt.format(date1, date2));    
}

function testDateRngFmtRangeShortConsecutiveDays() {
    var fmt = new DateRngFmt();
    assertNotNull(fmt);
    
    var date1 = new GregorianDate({
		year: 2011,
		month: 11,
		day: 18,
		hour: 14,
		minute: 0,
		second: 0,
		millisecond: 0
	});
    var date2 = new GregorianDate({
		year: 2011,
		month: 11,
		day: 19,
		hour: 8,
		minute: 0,
		second: 0,
		millisecond: 0
	});

    assertEquals("11/18/11, 2:00 PM – 11/19/11, 8:00 AM", fmt.format(date1, date2));    
}

function testDateRngFmtRangeShortWithinYear() {
    var fmt = new DateRngFmt();
    assertNotNull(fmt);
    
    var date1 = new GregorianDate({
		year: 2011,
		month: 5,
		day: 2,
		hour: 14,
		minute: 0,
		second: 0,
		millisecond: 0
	});
    var date2 = new GregorianDate({
		year: 2011,
		month: 11,
		day: 19,
		hour: 8,
		minute: 0,
		second: 0,
		millisecond: 0
	});

    assertEquals("5/2/11 – 11/19/11", fmt.format(date1, date2));    
}

function testDateRngFmtRangeShortWithinDecade() {
    var fmt = new DateRngFmt();
    assertNotNull(fmt);
    
    var date1 = new GregorianDate({
		year: 2001,
		month: 9,
		day: 11,
		hour: 8,
		minute: 36,
		second: 0,
		millisecond: 0
	});
    var date2 = new GregorianDate({
		year: 2010,
		month: 12,
		day: 31,
		hour: 0,
		minute: 0,
		second: 0,
		millisecond: 0
	});

    assertEquals("9/01 – 12/10", fmt.format(date1, date2));
}

function testDateRngFmtRangeShortLongTime() {
    var fmt = new DateRngFmt();
    assertNotNull(fmt);
    
    var date1 = new GregorianDate({
		year: 1776,
		month: 7,
		day: 4,
		hour: 11,
		minute: 0,
		second: 0,
		millisecond: 0
	});
    var date2 = new GregorianDate({
		year: 2008,
		month: 1,
		day: 31,
		hour: 0,
		minute: 0,
		second: 0,
		millisecond: 0
	});

    assertEquals("76 – 08", fmt.format(date1, date2));
}

function testDateRngFmtRangeLongWithinDay() {
    var fmt = new DateRngFmt({
        length: "long"
    });
    assertNotNull(fmt);
    
    var date1 = new GregorianDate({
		year: 2011,
		month: 11,
		day: 18,
		hour: 14,
		minute: 34,
		second: 12,
		millisecond: 0
	});
    var date2 = new GregorianDate({
		year: 2011,
		month: 11,
		day: 18,
		hour: 17,
		minute: 0,
		second: 0,
		millisecond: 0
	});

    assertEquals("November 18, 2011 at 2:34 PM – 5:00 PM", fmt.format(date1, date2));    
}

function testDateRngFmtRangeLongConsecutiveDays() {
    var fmt = new DateRngFmt({
        length: "long"
    });
    assertNotNull(fmt);
    
    var date1 = new GregorianDate({
		year: 2011,
		month: 11,
		day: 18,
		hour: 14,
		minute: 0,
		second: 0,
		millisecond: 0
	});
    var date2 = new GregorianDate({
		year: 2011,
		month: 11,
		day: 19,
		hour: 8,
		minute: 0,
		second: 0,
		millisecond: 0
	});

    assertEquals("November 18, 2011 at 2:00 PM – November 19, 2011 at 8:00 AM", fmt.format(date1, date2));    
}

function testDateRngFmtRangeLongWithinMonth() {
    var fmt = new DateRngFmt({
        length: "long"
    });
    assertNotNull(fmt);
    
    var date1 = new GregorianDate({
		year: 2011,
		month: 11,
		day: 2,
		hour: 14,
		minute: 0,
		second: 0,
		millisecond: 0
	});
    var date2 = new GregorianDate({
		year: 2011,
		month: 11,
		day: 19,
		hour: 8,
		minute: 0,
		second: 0,
		millisecond: 0
	});

    assertEquals("November 2 – 19, 2011", fmt.format(date1, date2));    
}

function testDateRngFmtRangeLongWithinYear() {
    var fmt = new DateRngFmt({
        length: "long"
    });
    assertNotNull(fmt);
    
    var date1 = new GregorianDate({
		year: 2011,
		month: 5,
		day: 2,
		hour: 14,
		minute: 0,
		second: 0,
		millisecond: 0
	});
    var date2 = new GregorianDate({
		year: 2011,
		month: 11,
		day: 19,
		hour: 8,
		minute: 0,
		second: 0,
		millisecond: 0
	});

    assertEquals("May 2 – November 19, 2011", fmt.format(date1, date2));    
}

function testDateRngFmtRangeLongWithinDecade() {
    var fmt = new DateRngFmt({
        length: "long"
    });
    assertNotNull(fmt);
    
    var date1 = new GregorianDate({
		year: 2001,
		month: 9,
		day: 11,
		hour: 8,
		minute: 36,
		second: 0,
		millisecond: 0
	});
    var date2 = new GregorianDate({
		year: 2010,
		month: 12,
		day: 31,
		hour: 0,
		minute: 0,
		second: 0,
		millisecond: 0
	});

    assertEquals("September, 2001 – December, 2010", fmt.format(date1, date2));
}

function testDateRngFmtRangeLongLongTime() {
    var fmt = new DateRngFmt({
        length: "long"
    });
    assertNotNull(fmt);
    
    var date1 = new GregorianDate({
		year: 1776,
		month: 7,
		day: 4,
		hour: 11,
		minute: 0,
		second: 0,
		millisecond: 0
	});
    var date2 = new GregorianDate({
		year: 2008,
		month: 1,
		day: 31,
		hour: 0,
		minute: 0,
		second: 0,
		millisecond: 0
	});

    assertEquals("1776 – 2008", fmt.format(date1, date2));
}

function testDateRngFmtRangeFullWithinDay() {
    var fmt = new DateRngFmt({
        length: "full"
    });
    assertNotNull(fmt);
    
    var date1 = new GregorianDate({
		year: 2011,
		month: 11,
		day: 18,
		hour: 14,
		minute: 34,
		second: 12,
		millisecond: 0
	});
    var date2 = new GregorianDate({
		year: 2011,
		month: 11,
		day: 18,
		hour: 17,
		minute: 0,
		second: 0,
		millisecond: 0
	});

    assertEquals("November 18, 2011 at 2:34 PM – 5:00 PM", fmt.format(date1, date2));    
}

function testDateRngFmtRangeFullConsecutiveDays() {
    var fmt = new DateRngFmt({
        length: "full"
    });
    assertNotNull(fmt);
    
    var date1 = new GregorianDate({
		year: 2011,
		month: 11,
		day: 18,
		hour: 14,
		minute: 0,
		second: 0,
		millisecond: 0
	});
    var date2 = new GregorianDate({
		year: 2011,
		month: 11,
		day: 19,
		hour: 8,
		minute: 0,
		second: 0,
		millisecond: 0
	});

    assertEquals("November 18, 2011 at 2:00 PM – November 19, 2011 at 8:00 AM", fmt.format(date1, date2));    
}

function testDateRngFmtRangeFullWithinMonth() {
    var fmt = new DateRngFmt({
        length: "full"
    });
    assertNotNull(fmt);
    
    var date1 = new GregorianDate({
		year: 2011,
		month: 11,
		day: 2,
		hour: 14,
		minute: 0,
		second: 0,
		millisecond: 0
	});
    var date2 = new GregorianDate({
		year: 2011,
		month: 11,
		day: 19,
		hour: 8,
		minute: 0,
		second: 0,
		millisecond: 0
	});

    assertEquals("November 2 – 19, 2011", fmt.format(date1, date2));    
}

function testDateRngFmtRangeFullWithinYear() {
    var fmt = new DateRngFmt({
        length: "full"
    });
    assertNotNull(fmt);
    
    var date1 = new GregorianDate({
		year: 2011,
		month: 5,
		day: 2,
		hour: 14,
		minute: 0,
		second: 0,
		millisecond: 0
	});
    var date2 = new GregorianDate({
		year: 2011,
		month: 11,
		day: 19,
		hour: 8,
		minute: 0,
		second: 0,
		millisecond: 0
	});

    assertEquals("May 2 – November 19, 2011", fmt.format(date1, date2));    
}

function testDateRngFmtRangeFullWithinDecade() {
    var fmt = new DateRngFmt({
        length: "full"
    });
    assertNotNull(fmt);
    
    var date1 = new GregorianDate({
		year: 2001,
		month: 9,
		day: 11,
		hour: 8,
		minute: 36,
		second: 0,
		millisecond: 0
	});
    var date2 = new GregorianDate({
		year: 2010,
		month: 12,
		day: 31,
		hour: 0,
		minute: 0,
		second: 0,
		millisecond: 0
	});

    assertEquals("September, 2001 – December, 2010", fmt.format(date1, date2));
}

function testDateRngFmtRangeFullLongTime() {
    var fmt = new DateRngFmt({
        length: "full"
    });
    assertNotNull(fmt);
    
    var date1 = new GregorianDate({
		year: 1776,
		month: 7,
		day: 4,
		hour: 11,
		minute: 0,
		second: 0,
		millisecond: 0
	});
    var date2 = new GregorianDate({
		year: 2008,
		month: 1,
		day: 31,
		hour: 0,
		minute: 0,
		second: 0,
		millisecond: 0
	});

    assertEquals("1776 – 2008", fmt.format(date1, date2));
}


