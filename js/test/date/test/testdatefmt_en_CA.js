/*
 * testdatefmt_en_CA.js - test the date formatter object in Canadian English
 * 
 * Copyright © 2012-2015, JEDLSoft
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

var JulianDate = require("./../lib/JulianDate.js");
var GregorianDate = require("./../lib/GregorianDate.js");
var DateFmt = require("./../lib/DateFmt.js");
function testDateFmtenCAConstructorEmpty() {
    var fmt = new DateFmt();
    
    assertNotNull(fmt);
}


function testDateFmtenCASimpleShort() {
    var fmt = new DateFmt({locale: "en-CA", length: "short"});
    assertNotNull(fmt);
    
    var date = new GregorianDate({
		locale: "en-CA",
		year: 2011,
		month: 9,
		day: 29,
		hour: 13,
		minute: 45,
		second: 0,
		millisecond: 0
	});
    assertEquals("2011-09-29", fmt.format(date));
}

function testDateFmtenCASimpleMedium() {
    var fmt = new DateFmt({locale: "en-CA", length: "medium"});
    assertNotNull(fmt);
    
    var date = new GregorianDate({
		locale: "en-CA",
		year: 2011,
		month: 9,
		day: 29,
		hour: 13,
		minute: 45,
		second: 0,
		millisecond: 0
	});
    assertEquals("Sep 29, 2011", fmt.format(date));
}

function testDateFmtenCASimpleLong() {
    var fmt = new DateFmt({locale: "en-CA", length: "long"});
    assertNotNull(fmt);
    
    var date = new GregorianDate({
		locale: "en-CA",
		year: 2011,
		month: 9,
		day: 29,
		hour: 13,
		minute: 45,
		second: 0,
		millisecond: 0
	});
    assertEquals("September 29, 2011", fmt.format(date));
}

function testDateFmtenCASimpleFull() {
    var fmt = new DateFmt({locale: "en-CA", length: "full"});
    assertNotNull(fmt);
    
    var date = new GregorianDate({
		locale: "en-CA",
		year: 2011,
		month: 9,
		day: 29,
		hour: 13,
		minute: 45,
		second: 0,
		millisecond: 0
	});
    assertEquals("September 29, 2011", fmt.format(date));
}

function testDateFmtenCASimpleTimeShort() {
    var fmt = new DateFmt({locale: "en-CA", length: "short", type: "time"});
    assertNotNull(fmt);
    
    var date = new GregorianDate({
		locale: "en-CA",
		year: 2011,
		month: 9,
		day: 29,
		hour: 13,
		minute: 45,
		second: 0,
		millisecond: 0
	});
    assertEquals("1:45 PM", fmt.format(date));
}

function testDateFmtenCASimpleTimeMedium() {
    var fmt = new DateFmt({locale: "en-CA", length: "medium", type: "time"});
    assertNotNull(fmt);
    
    var date = new GregorianDate({
		locale: "en-CA",
		year: 2011,
		month: 9,
		day: 29,
		hour: 13,
		minute: 45,
		second: 0,
		millisecond: 0
	});
    assertEquals("1:45 PM", fmt.format(date));
}

function testDateFmtenCASimpleTimeLong() {
    var fmt = new DateFmt({locale: "en-CA", timelength: "long", type: "time"});
    assertNotNull(fmt);
    
    var date = new GregorianDate({
		locale: "en-CA",
		year: 2011,
		month: 9,
		day: 29,
		hour: 13,
		minute: 45,
		second: 0,
		millisecond: 0
	});
    assertEquals("1:45 PM", fmt.format(date));
}

function testDateFmtenCASimpleTimeFull() {
    var fmt = new DateFmt({locale: "en-CA", length: "full", type: "time"});
    assertNotNull(fmt);
    
    var date = new GregorianDate({
		locale: "en-CA",
		year: 2011,
		month: 9,
		day: 29,
		hour: 13,
		minute: 45,
		second: 0,
		millisecond: 0
	});
    assertEquals("1:45 PM", fmt.format(date));
}

function testDateFmtenCADateTimeSimpleShort() {
    var fmt = new DateFmt({locale: "en-CA", length: "short", type: "datetime"});
    assertNotNull(fmt);
    
    var date = new GregorianDate({
		locale: "en-CA",
		year: 2011,
		month: 9,
		day: 29,
		hour: 13,
		minute: 45,
		second: 0,
		millisecond: 0
	});
    assertEquals("2011-09-29, 1:45 PM", fmt.format(date));
}

function testDateFmtenCADateTimeSimpleMedium() {
    var fmt = new DateFmt({locale: "en-CA", length: "medium", type: "datetime"});
    assertNotNull(fmt);
    
    var date = new GregorianDate({
		locale: "en-CA",
		year: 2011,
		month: 9,
		day: 29,
		hour: 13,
		minute: 45,
		second: 0,
		millisecond: 0
	});
    assertEquals("Sep 29, 2011, 1:45 PM", fmt.format(date));
}

function testDateFmtenCADateTimeSimpleLong() {
    var fmt = new DateFmt({locale: "en-CA", length: "long", type: "datetime"});
    assertNotNull(fmt);
    
    var date = new GregorianDate({
		locale: "en-CA",
		year: 2011,
		month: 9,
		day: 29,
		hour: 13,
		minute: 45,
		second: 0,
		millisecond: 0
	});
    assertEquals("September 29, 2011 at 1:45 PM", fmt.format(date));
}

function testDateFmtenCADateTimeSimpleFull() {
    var fmt = new DateFmt({locale: "en-CA", length: "full", type: "datetime"});
    assertNotNull(fmt);
    
    var date = new GregorianDate({
		locale: "en-CA",
		year: 2011,
		month: 9,
		day: 29,
		hour: 13,
		minute: 45,
		second: 0,
		millisecond: 0
	});
    assertEquals("September 29, 2011 at 1:45 PM", fmt.format(date));
}


function testDateFmtenCATemplateCalendar() {
    var fmt = new DateFmt({locale: "en-CA", calendar: "julian", template: "yyyy-MM-dd"});
    assertNotNull(fmt);
    
    var date = new JulianDate({
		year: 2011,
		month: 9,
		day: 29,
		hour: 13,
		minute: 45,
		second: 0,
		millisecond: 0
	});
    assertEquals("2011-09-29", fmt.format(date));
}

function testDateFmtenCATemplateCalendarIncompatibleDateType() {
    var fmt = new DateFmt({locale: "en-CA", calendar: "julian", template: "yyyy-MM-dd HH:mm"});
    assertNotNull(fmt);
    
    var date = new GregorianDate({
		locale: "en-CA",
		year: 2011,
		month: 9,
		day: 29,
		hour: 13,
		minute: 45,
		second: 0,
		millisecond: 0
	});
    // convert automatically to a Julian calendar date
    assertEquals("2011-09-16 13:45", fmt.format(date));
}

function testDateFmtenCATemplateClock12SwitchHH() {
    var fmt = new DateFmt({locale: "en-CA", clock: "12", template: "HH:mm"});
    assertNotNull(fmt);
    
    var date = new GregorianDate({
		locale: "en-CA",
		year: 2011,
		month: 9,
		day: 29,
		hour: 13,
		minute: 45,
		second: 0,
		millisecond: 0
	});
    assertEquals("01:45", fmt.format(date));
}

function testDateFmtenCATemplateClock12Switchkk() {
    var fmt = new DateFmt({locale: "en-CA", clock: "12", template: "kk:mm"});
    assertNotNull(fmt);
    
    var date = new GregorianDate({
		locale: "en-CA",
		year: 2011,
		month: 9,
		day: 29,
		hour: 13,
		minute: 45,
		second: 0,
		millisecond: 0
	});
    assertEquals("01:45", fmt.format(date));
}

function testDateFmtenCATemplateClock24Switchhh() {
    var fmt = new DateFmt({locale: "en-CA", clock: "24", template: "hh:mm"});
    assertNotNull(fmt);
    
    var date = new GregorianDate({
		locale: "en-CA",
		year: 2011,
		month: 9,
		day: 29,
		hour: 13,
		minute: 45,
		second: 0,
		millisecond: 0
	});
    assertEquals("13:45", fmt.format(date));
}

function testDateFmtenCATemplateClock24SwitchKK() {
    var fmt = new DateFmt({locale: "en-CA", clock: "24", template: "KK:mm"});
    assertNotNull(fmt);
    
    var date = new GregorianDate({
		locale: "en-CA",
		year: 2011,
		month: 9,
		day: 29,
		hour: 13,
		minute: 45,
		second: 0,
		millisecond: 0
	});
    assertEquals("13:45", fmt.format(date));
}

function testDateFmtenCATemplateNoClockDoNotFollowLocaleDefault12hh() {
    var fmt = new DateFmt({locale: "en-CA", locale: "en-CA", template: "hh:mm"});
    assertNotNull(fmt);
    
    var date = new GregorianDate({
		locale: "en-CA",
		year: 2011,
		month: 9,
		day: 29,
		hour: 13,
		minute: 45,
		second: 0,
		millisecond: 0
	});
    assertEquals("01:45", fmt.format(date));
}

function testDateFmtenCATemplateNoClockDoNotFollowLocaleDefault12KK() {
    var fmt = new DateFmt({locale: "en-CA", locale: "en-CA", template: "KK:mm"});
    assertNotNull(fmt);
    
    var date = new GregorianDate({
		locale: "en-CA",
		year: 2011,
		month: 9,
		day: 29,
		hour: 13,
		minute: 45,
		second: 0,
		millisecond: 0
	});
    assertEquals("01:45", fmt.format(date));
}

function testDateFmtenCATemplateNoClockDoNotFollowLocaleDefault24HH() {
    var fmt = new DateFmt({locale: "en-CA", locale: "en-CA", template: "HH:mm"});
    assertNotNull(fmt);
    
    var date = new GregorianDate({
		locale: "en-CA",
		year: 2011,
		month: 9,
		day: 29,
		hour: 13,
		minute: 45,
		second: 0,
		millisecond: 0
	});
    assertEquals("13:45", fmt.format(date));
}

function testDateFmtenCATemplateNoClockDoNotFollowLocaleDefault24kk() {
    var fmt = new DateFmt({locale: "en-CA", locale: "en-CA", template: "kk:mm"});
    assertNotNull(fmt);
    
    var date = new GregorianDate({
		locale: "en-CA",
		year: 2011,
		month: 9,
		day: 29,
		hour: 13,
		minute: 45,
		second: 0,
		millisecond: 0
	});
    assertEquals("13:45", fmt.format(date));
}


function testDateFmtenCATypeDate() {
    var fmt = new DateFmt({locale: "en-CA", type: "date"});
    assertNotNull(fmt);
    
    var date = new GregorianDate({
		locale: "en-CA",
		year: 2011,
		month: 9,
		day: 29,
		hour: 13,
		minute: 45,
		second: 0,
		millisecond: 0
	});
    assertEquals("2011-09-29", fmt.format(date));
}

function testDateFmtenCATypeTime() {
    var fmt = new DateFmt({locale: "en-CA", type: "time"});
    assertNotNull(fmt);
    
    var date = new GregorianDate({
		locale: "en-CA",
		year: 2011,
		month: 9,
		day: 29,
		hour: 13,
		minute: 45,
		second: 0,
		millisecond: 0
	});
    assertEquals("1:45 PM", fmt.format(date));
}

function testDateFmtenCATypeDateTime() {
    var fmt = new DateFmt({locale: "en-CA", type: "datetime"});
    assertNotNull(fmt);
    
    var date = new GregorianDate({
		locale: "en-CA",
		year: 2011,
		month: 9,
		day: 29,
		hour: 13,
		minute: 45,
		second: 0,
		millisecond: 0
	});
    assertEquals("2011-09-29, 1:45 PM", fmt.format(date));
}


function testDateFmtenCAShortDateComponentsY() {
    var fmt = new DateFmt({locale: "en-CA", date: "y"});
    assertNotNull(fmt);
    
    var date = new GregorianDate({
		locale: "en-CA",
		year: 2011,
		month: 9,
		day: 29,
		hour: 13,
		minute: 45,
		second: 0,
		millisecond: 0
	});
    assertEquals("2011", fmt.format(date));
}

function testDateFmtenCAShortDateComponentsM() {
    var fmt = new DateFmt({locale: "en-CA", date: "m"});
    assertNotNull(fmt);
    
    var date = new GregorianDate({
		locale: "en-CA",
		year: 2011,
		month: 9,
		day: 29,
		hour: 13,
		minute: 45,
		second: 0,
		millisecond: 0
	});
    assertEquals("09", fmt.format(date));
}

function testDateFmtenCAShortDateComponentsN() {
    var fmt = new DateFmt({locale: "en-CA", date: "n"});
    assertNotNull(fmt);
    
    var date = new GregorianDate({
		locale: "en-CA",
		year: 2011,
		month: 9,
		day: 29,
		hour: 13,
		minute: 45,
		second: 0,
		millisecond: 0
	});
    assertEquals("S", fmt.format(date));
}

function testDateFmtenCAShortDateComponentsD() {
    var fmt = new DateFmt({locale: "en-CA", date: "d"});
    assertNotNull(fmt);
    
    var date = new GregorianDate({
		locale: "en-CA",
		year: 2011,
		month: 9,
		day: 29,
		hour: 13,
		minute: 45,
		second: 0,
		millisecond: 0
	});
    assertEquals("29", fmt.format(date));
}

function testDateFmtenCAShortDateComponentsDM() {
    var fmt = new DateFmt({locale: "en-CA", date: "dm"});
    assertNotNull(fmt);
    
    var date = new GregorianDate({
		locale: "en-CA",
		year: 2011,
		month: 9,
		day: 29,
		hour: 13,
		minute: 45,
		second: 0,
		millisecond: 0
	});
    assertEquals("09-29", fmt.format(date));
}

function testDateFmtenCAShortDateComponentsMY() {
    var fmt = new DateFmt({locale: "en-CA", date: "my"});
    assertNotNull(fmt);
    
    var date = new GregorianDate({
		locale: "en-CA",
		year: 2011,
		month: 9,
		day: 29,
		hour: 13,
		minute: 45,
		second: 0,
		millisecond: 0
	});
    assertEquals("2011-09", fmt.format(date));
}

function testDateFmtenCAShortDateComponentsDMY() {
    var fmt = new DateFmt({locale: "en-CA", date: "dmy"});
    assertNotNull(fmt);
    
    var date = new GregorianDate({
		locale: "en-CA",
		year: 2011,
		month: 9,
		day: 29,
		hour: 13,
		minute: 45,
		second: 0,
		millisecond: 0
	});
    assertEquals("2011-09-29", fmt.format(date));
}

function testDateFmtenCAShortDateComponentsWDM() {
    var fmt = new DateFmt({locale: "en-CA", date: "wdm"});
    assertNotNull(fmt);
    
    var date = new GregorianDate({
		locale: "en-CA",
		year: 2011,
		month: 9,
		day: 29,
		hour: 13,
		minute: 45,
		second: 0,
		millisecond: 0
	});
    assertEquals("T, 09-29", fmt.format(date));
}

function testDateFmtenCAShortDateComponentsWDMY() {
    var fmt = new DateFmt({locale: "en-CA", date: "wdmy"});
    assertNotNull(fmt);
    
    var date = new GregorianDate({
		locale: "en-CA",
		year: 2011,
		month: 9,
		day: 29,
		hour: 13,
		minute: 45,
		second: 0,
		millisecond: 0
	});
    assertEquals("T, 2011-09-29", fmt.format(date));
}


function testDateFmtenCAFullDateComponentsY() {
    var fmt = new DateFmt({locale: "en-CA", length: "full", date: "y"});
    assertNotNull(fmt);
    
    var date = new GregorianDate({
		locale: "en-CA",
		year: 2011,
		month: 9,
		day: 29,
		hour: 13,
		minute: 45,
		second: 0,
		millisecond: 0
	});
    assertEquals("2011", fmt.format(date));
}

function testDateFmtenCAFullDateComponentsM() {
    var fmt = new DateFmt({locale: "en-CA", length: "full", date: "m"});
    assertNotNull(fmt);
    
    var date = new GregorianDate({
		locale: "en-CA",
		year: 2011,
		month: 9,
		day: 29,
		hour: 13,
		minute: 45,
		second: 0,
		millisecond: 0
	});
    assertEquals("September", fmt.format(date));
}

function testDateFmtenCAFullDateComponentsD() {
    var fmt = new DateFmt({locale: "en-CA", length: "full", date: "d"});
    assertNotNull(fmt);
    
    var date = new GregorianDate({
		locale: "en-CA",
		year: 2011,
		month: 9,
		day: 29,
		hour: 13,
		minute: 45,
		second: 0,
		millisecond: 0
	});
    assertEquals("29", fmt.format(date));
}

function testDateFmtenCAFullDateComponentsDM() {
    var fmt = new DateFmt({locale: "en-CA", length: "full", date: "dm"});
    assertNotNull(fmt);
    
    var date = new GregorianDate({
		locale: "en-CA",
		year: 2011,
		month: 9,
		day: 29,
		hour: 13,
		minute: 45,
		second: 0,
		millisecond: 0
	});
    assertEquals("September 29", fmt.format(date));
}

function testDateFmtenCAFullDateComponentsMY() {
    var fmt = new DateFmt({locale: "en-CA", length: "full", date: "my"});
    assertNotNull(fmt);
    
    var date = new GregorianDate({
		locale: "en-CA",
		year: 2011,
		month: 9,
		day: 29,
		hour: 13,
		minute: 45,
		second: 0,
		millisecond: 0
	});
    assertEquals("September, 2011", fmt.format(date));
}

function testDateFmtenCAFullDateComponentsDMY() {
    var fmt = new DateFmt({locale: "en-CA", length: "full", date: "dmy"});
    assertNotNull(fmt);
    
    var date = new GregorianDate({
		locale: "en-CA",
		year: 2011,
		month: 9,
		day: 29,
		hour: 13,
		minute: 45,
		second: 0,
		millisecond: 0
	});
    assertEquals("September 29, 2011", fmt.format(date));
}

function testDateFmtenCAFullDateComponentsWDM() {
    var fmt = new DateFmt({locale: "en-CA", length: "full", date: "wdm"});
    assertNotNull(fmt);
    
    var date = new GregorianDate({
		locale: "en-CA",
		year: 2011,
		month: 9,
		day: 29,
		hour: 13,
		minute: 45,
		second: 0,
		millisecond: 0
	});
    assertEquals("Thursday, September 29", fmt.format(date));
}

function testDateFmtenCAFullDateComponentsWDMY() {
    var fmt = new DateFmt({locale: "en-CA", length: "full", date: "wdmy"});
    assertNotNull(fmt);
    
    var date = new GregorianDate({
		locale: "en-CA",
		year: 2011,
		month: 9,
		day: 29,
		hour: 13,
		minute: 45,
		second: 0,
		millisecond: 0
	});
    assertEquals("Thursday, September 29, 2011", fmt.format(date));
}


function testDateFmtenCAShortTimeComponentsS() {
    var fmt = new DateFmt({locale: "en-CA", type: "time", time: "s"});
    assertNotNull(fmt);
    
    var date = new GregorianDate({
		locale: "en-CA",
		year: 2011,
		month: 9,
		day: 29,
		hour: 13,
		minute: 45,
		second: 37,
		millisecond: 0
	});
    assertEquals("37", fmt.format(date));
}

function testDateFmtenCAShortTimeComponentsM() {
    var fmt = new DateFmt({locale: "en-CA", type: "time", time: "m"});
    assertNotNull(fmt);
    
    var date = new GregorianDate({
		locale: "en-CA",
		year: 2011,
		month: 9,
		day: 29,
		hour: 13,
		minute: 45,
		second: 37,
		millisecond: 0
	});
    assertEquals("45", fmt.format(date));
}

function testDateFmtenCAShortTimeComponentsH() {
    var fmt = new DateFmt({locale: "en-CA", type: "time", time: "h"});
    assertNotNull(fmt);
    
    var date = new GregorianDate({
		locale: "en-CA",
		year: 2011,
		month: 9,
		day: 29,
		hour: 13,
		minute: 45,
		second: 37,
		millisecond: 0
	});
    assertEquals("1", fmt.format(date));
}

function testDateFmtenCAShortTimeComponentsMS() {
    var fmt = new DateFmt({locale: "en-CA", type: "time", time: "ms"});
    assertNotNull(fmt);
    
    var date = new GregorianDate({
		locale: "en-CA",
		year: 2011,
		month: 9,
		day: 29,
		hour: 13,
		minute: 45,
		second: 37,
		millisecond: 0
	});
    assertEquals("45:37", fmt.format(date));
}

function testDateFmtenCAShortTimeComponentsHM() {
    var fmt = new DateFmt({locale: "en-CA", type: "time", time: "hm"});
    assertNotNull(fmt);
    
    var date = new GregorianDate({
		locale: "en-CA",
		year: 2011,
		month: 9,
		day: 29,
		hour: 13,
		minute: 45,
		second: 37,
		millisecond: 0
	});
    assertEquals("1:45", fmt.format(date));
}

function testDateFmtenCAShortTimeComponentsHMS() {
    var fmt = new DateFmt({locale: "en-CA", type: "time", time: "hms"});
    assertNotNull(fmt);
    
    var date = new GregorianDate({
		locale: "en-CA",
		year: 2011,
		month: 9,
		day: 29,
		hour: 13,
		minute: 45,
		second: 37,
		millisecond: 0
	});
    assertEquals("1:45:37", fmt.format(date));
}

function testDateFmtenCAShortTimeComponentsHMA() {
    var fmt = new DateFmt({locale: "en-CA", type: "time", time: "hma"});
    assertNotNull(fmt);
    
    var date = new GregorianDate({
		locale: "en-CA",
		year: 2011,
		month: 9,
		day: 29,
		hour: 13,
		minute: 45,
		second: 37,
		millisecond: 0
	});
    assertEquals("1:45 PM", fmt.format(date));
}

function testDateFmtenCAShortTimeComponentsHMZ() {
    var fmt = new DateFmt({
		locale: "en-CA", 
        type: "time", 
        time: "hmz", 
        timezone: "America/Toronto"
    });
    assertNotNull(fmt);
    
    var date = new GregorianDate({
		locale: "en-CA",
		year: 2011,
		month: 9,
		day: 29,
		hour: 13,
		minute: 45,
		second: 37,
		millisecond: 0,
        timezone: "America/Toronto"
	});
    assertEquals("1:45 EDT", fmt.format(date));
}

function testDateFmtenCAShortTimeComponentsHMAZ() {
    var fmt = new DateFmt({
		locale: "en-CA", 
        type: "time", 
        time: "hmaz", 
        timezone: "America/Toronto"
    });
    assertNotNull(fmt);
    
    var date = new GregorianDate({
		locale: "en-CA",
		year: 2011,
		month: 9,
		day: 29,
		hour: 13,
		minute: 45,
		second: 37,
		millisecond: 0, 
        timezone: "America/Toronto"
	});
    assertEquals("1:45 PM EDT", fmt.format(date));
}

function testDateFmtenCAShortTimeComponentsHMSA() {
    var fmt = new DateFmt({locale: "en-CA", type: "time", time: "hmsa"});
    assertNotNull(fmt);
    
    var date = new GregorianDate({
		locale: "en-CA",
		year: 2011,
		month: 9,
		day: 29,
		hour: 13,
		minute: 45,
		second: 37,
		millisecond: 0, 
        timezone: "America/Toronto"
	});
    assertEquals("1:45:37 PM", fmt.format(date));
}

function testDateFmtenCAShortTimeComponentsHMSZ() {
    var fmt = new DateFmt({
		locale: "en-CA", 
        type: "time", 
        time: "hmsz", 
        timezone: "America/Toronto"
    });
    assertNotNull(fmt);
    
    var date = new GregorianDate({
		locale: "en-CA",
		year: 2011,
		month: 9,
		day: 29,
		hour: 13,
		minute: 45,
		second: 37,
		millisecond: 0, 
        timezone: "America/Toronto"
	});
    assertEquals("1:45:37 EDT", fmt.format(date));
}

function testDateFmtenCAShortTimeComponentsHMSAZ() {
    var fmt = new DateFmt({
		locale: "en-CA", 
        type: "time", 
        time: "hmsaz", 
        timezone: "America/Toronto"
    });
    assertNotNull(fmt);
    
    var date = new GregorianDate({
		locale: "en-CA",
		year: 2011,
		month: 9,
		day: 29,
		hour: 13,
		minute: 45,
		second: 37,
		millisecond: 0, 
        timezone: "America/Toronto"
	});
    assertEquals("1:45:37 PM EDT", fmt.format(date));
}


function testDateFmtenCAFullTimeComponentsS() {
    var fmt = new DateFmt({locale: "en-CA", type: "time", length: "full", time: "s"});
    assertNotNull(fmt);
    
    var date = new GregorianDate({
		locale: "en-CA",
		year: 2011,
		month: 9,
		day: 29,
		hour: 13,
		minute: 45,
		second: 37,
		millisecond: 0, 
        timezone: "America/Toronto"
	});
    assertEquals("37", fmt.format(date));
}

function testDateFmtenCAFullTimeComponentsM() {
    var fmt = new DateFmt({locale: "en-CA", type: "time", length: "full", time: "m"});
    assertNotNull(fmt);
    
    var date = new GregorianDate({
		locale: "en-CA",
		year: 2011,
		month: 9,
		day: 29,
		hour: 13,
		minute: 45,
		second: 37,
		millisecond: 0
	});
    assertEquals("45", fmt.format(date));
}

function testDateFmtenCAFullTimeComponentsH() {
    var fmt = new DateFmt({locale: "en-CA", type: "time", length: "full", time: "h"});
    assertNotNull(fmt);
    
    var date = new GregorianDate({
		locale: "en-CA",
		year: 2011,
		month: 9,
		day: 29,
		hour: 13,
		minute: 45,
		second: 37,
		millisecond: 0
	});
    assertEquals("1", fmt.format(date));
}

function testDateFmtenCAFullTimeComponentsMS() {
    var fmt = new DateFmt({locale: "en-CA", type: "time", length: "full", time: "ms"});
    assertNotNull(fmt);
    
    var date = new GregorianDate({
		locale: "en-CA",
		year: 2011,
		month: 9,
		day: 29,
		hour: 13,
		minute: 45,
		second: 37,
		millisecond: 0
	});
    assertEquals("45:37", fmt.format(date));
}

function testDateFmtenCAFullTimeComponentsHM() {
    var fmt = new DateFmt({locale: "en-CA", type: "time", length: "full", time: "hm"});
    assertNotNull(fmt);
    
    var date = new GregorianDate({
		locale: "en-CA",
		year: 2011,
		month: 9,
		day: 29,
		hour: 13,
		minute: 45,
		second: 37,
		millisecond: 0
	});
    assertEquals("1:45", fmt.format(date));
}

function testDateFmtenCAFullTimeComponentsHMS() {
    var fmt = new DateFmt({locale: "en-CA", type: "time", length: "full", time: "hms"});
    assertNotNull(fmt);
    
    var date = new GregorianDate({
		locale: "en-CA",
		year: 2011,
		month: 9,
		day: 29,
		hour: 13,
		minute: 45,
		second: 37,
		millisecond: 0
	});
    assertEquals("1:45:37", fmt.format(date));
}

function testDateFmtenCAFullTimeComponentsHMA() {
    var fmt = new DateFmt({locale: "en-CA", type: "time", length: "full", time: "hma"});
    assertNotNull(fmt);
    
    var date = new GregorianDate({
		locale: "en-CA",
		year: 2011,
		month: 9,
		day: 29,
		hour: 13,
		minute: 45,
		second: 37,
		millisecond: 0
	});
    assertEquals("1:45 PM", fmt.format(date));
}

function testDateFmtenCAFullTimeComponentsHMZ() {
    var fmt = new DateFmt({
		locale: "en-CA", 
        type: "time", 
        length: "full", 
        time: "hmz", 
        timezone: "America/Toronto"
    });
    assertNotNull(fmt);
    
    var date = new GregorianDate({
		locale: "en-CA",
		year: 2011,
		month: 9,
		day: 29,
		hour: 13,
		minute: 45,
		second: 37,
		millisecond: 0
	});
    assertEquals("1:45 EDT", fmt.format(date));
}

function testDateFmtenCAFullTimeComponentsHMAZ() {
    var fmt = new DateFmt({
		locale: "en-CA", 
        type: "time", 
        length: "full", 
        time: "hmaz", 
        timezone: "America/Toronto"
    });
    assertNotNull(fmt);
    
    var date = new GregorianDate({
		locale: "en-CA",
		year: 2011,
		month: 9,
		day: 29,
		hour: 13,
		minute: 45,
		second: 37,
		millisecond: 0
	});
    assertEquals("1:45 PM EDT", fmt.format(date));
}

function testDateFmtenCAFullTimeComponentsHMSA() {
    var fmt = new DateFmt({locale: "en-CA", type: "time", length: "full", time: "hmsa"});
    assertNotNull(fmt);
    
    var date = new GregorianDate({
		locale: "en-CA",
		year: 2011,
		month: 9,
		day: 29,
		hour: 13,
		minute: 45,
		second: 37,
		millisecond: 0
	});
    assertEquals("1:45:37 PM", fmt.format(date));
}

function testDateFmtenCAFullTimeComponentsHMSZ() {
    var fmt = new DateFmt({
		locale: "en-CA", 
        type: "time", 
        length: "full", 
        time: "hmsz", 
        timezone: "America/Toronto"
    });
    assertNotNull(fmt);
    
    var date = new GregorianDate({
		locale: "en-CA",
		year: 2011,
		month: 9,
		day: 29,
		hour: 13,
		minute: 45,
		second: 37,
		millisecond: 0
	});
    assertEquals("1:45:37 EDT", fmt.format(date));
}

function testDateFmtenCAFullTimeComponentsHMSAZ() {
    var fmt = new DateFmt({
		locale: "en-CA", 
        type: "time", 
        length: "full", 
        time: "hmsaz", 
        timezone: "America/Toronto"
    });
    assertNotNull(fmt);
    
    var date = new GregorianDate({
		locale: "en-CA",
		year: 2011,
		month: 9,
		day: 29,
		hour: 13,
		minute: 45,
		second: 37,
		millisecond: 0
	});
    assertEquals("1:45:37 PM EDT", fmt.format(date));
}

function testDateFmtenCAWithTimeZoneAndNoDST() {
    var fmt = new DateFmt({
		locale: "en-CA", 
        type: "time", 
        length: "full", 
        time: "hmsz", 
        timezone: "America/Toronto"
    });
    assertNotNull(fmt);
    
    var date = new GregorianDate({
		locale: "en-CA",
		year: 2011,
		month: 12,
		day: 29,
		hour: 13,
		minute: 45,
		second: 37,
		millisecond: 0
	});
    assertEquals("1:45:37 EST", fmt.format(date));
}

