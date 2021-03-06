/*
 * testdatefmt_th_TH.js - test the date formatter object in พฤaiLand
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

var ThaiSolarDate = require("./../lib/ThaiSolarDate.js");
var JulianDate = require("./../lib/JulianDate.js");
var DateFmt = require("./../lib/DateFmt.js");
function testDateFmtConstructorEmpty_th_TH() {
    var fmt = new DateFmt({locale: "th-TH"});
    
    assertNotNull(fmt);
}


function testDateFmtSimpleShort_th_TH() {
    var fmt = new DateFmt({locale: "th-TH", calendar: "thaisolar", length: "short"});
    assertNotNull(fmt);
    
    var date = new ThaiSolarDate({
		locale: "th-TH",
		year: 2011,
		month: 9,
		day: 29,
		hour: 13,
		minute: 45,
		second: 0,
		millisecond: 0
	});
    assertEquals("29/9/11", fmt.format(date));
}

function testDateFmtSimpleMedium_th_TH() {
    var fmt = new DateFmt({locale: "th-TH", calendar: "thaisolar", length: "medium"});
    assertNotNull(fmt);
    
    var date = new ThaiSolarDate({
		locale: "th-TH",
		year: 2011,
		month: 9,
		day: 29,
		hour: 13,
		minute: 45,
		second: 0,
		millisecond: 0
	});
    assertEquals("29 ก.ย. 2011", fmt.format(date));
}

function testDateFmtSimpleLong_th_TH() {
    var fmt = new DateFmt({locale: "th-TH", calendar: "thaisolar", length: "long"});
    assertNotNull(fmt);
    
    var date = new ThaiSolarDate({
		locale: "th-TH",
		year: 2011,
		month: 9,
		day: 29,
		hour: 13,
		minute: 45,
		second: 0,
		millisecond: 0
	});
    assertEquals("29 กันยายน 2011", fmt.format(date));
}

function testDateFmtSimpleFull_th_TH() {
    var fmt = new DateFmt({locale: "th-TH", calendar: "thaisolar", length: "full"});
    assertNotNull(fmt);
    
    var date = new ThaiSolarDate({
		locale: "th-TH",
		year: 2011,
		month: 9,
		day: 29,
		hour: 13,
		minute: 45,
		second: 0,
		millisecond: 0
	});
    assertEquals("29 กันยายน 2011", fmt.format(date));
}

function testDateFmtSimpleTimeShort_th_TH() {
    var fmt = new DateFmt({locale: "th-TH", calendar: "thaisolar", length: "short", type: "time"});
    assertNotNull(fmt);
    
    var date = new ThaiSolarDate({
		locale: "th-TH",
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

function testDateFmtSimpleTimeMedium_th_TH() {
    var fmt = new DateFmt({locale: "th-TH", calendar: "thaisolar", length: "medium", type: "time"});
    assertNotNull(fmt);
    
    var date = new ThaiSolarDate({
		locale: "th-TH",
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

function testDateFmtSimpleTimeLong_th_TH() {
    var fmt = new DateFmt({locale: "th-TH", calendar: "thaisolar", timelength: "long", type: "time"});
    assertNotNull(fmt);
    
    var date = new ThaiSolarDate({
		locale: "th-TH",
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

function testDateFmtSimpleTimeFull_th_TH() {
    var fmt = new DateFmt({locale: "th-TH", calendar: "thaisolar", length: "full", type: "time"});
    assertNotNull(fmt);
    
    var date = new ThaiSolarDate({
		locale: "th-TH",
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

function testDateFmtDateTimeSimpleShort_th_TH() {
    var fmt = new DateFmt({locale: "th-TH", calendar: "thaisolar", length: "short", type: "datetime"});
    assertNotNull(fmt);
    
    var date = new ThaiSolarDate({
		locale: "th-TH",
		year: 2011,
		month: 9,
		day: 29,
		hour: 13,
		minute: 45,
		second: 0,
		millisecond: 0
	});
    assertEquals("29/9/11 13:45", fmt.format(date));
}

function testDateFmtDateTimeSimpleMedium_th_TH() {
    var fmt = new DateFmt({locale: "th-TH", calendar: "thaisolar", length: "medium", type: "datetime"});
    assertNotNull(fmt);
    
    var date = new ThaiSolarDate({
		locale: "th-TH",
		year: 2011,
		month: 9,
		day: 29,
		hour: 13,
		minute: 45,
		second: 0,
		millisecond: 0
	});
    assertEquals("29 ก.ย. 2011 13:45", fmt.format(date));
}

function testDateFmtDateTimeSimpleLong_th_TH() {
    var fmt = new DateFmt({locale: "th-TH", calendar: "thaisolar", length: "long", type: "datetime"});
    assertNotNull(fmt);
    
    var date = new ThaiSolarDate({
		locale: "th-TH",
		year: 2011,
		month: 9,
		day: 29,
		hour: 13,
		minute: 45,
		second: 0,
		millisecond: 0
	});
    assertEquals("29 กันยายน 2011 13:45", fmt.format(date));
}

function testDateFmtDateTimeSimpleFull_th_TH() {
    var fmt = new DateFmt({locale: "th-TH", calendar: "thaisolar", length: "full", type: "datetime"});
    assertNotNull(fmt);
    
    var date = new ThaiSolarDate({
		locale: "th-TH",
		year: 2011,
		month: 9,
		day: 29,
		hour: 13,
		minute: 45,
		second: 0,
		millisecond: 0
	});
    assertEquals("29 กันยายน 2011 13:45", fmt.format(date));
}


function testDateFmtTemplateCalendar_th_TH() {
    var fmt = new DateFmt({locale: "th-TH", calendar: "thaisolar", calendar: "julian", template: "yyyy-MM-dd"});
    assertNotNull(fmt);
    
    var date = new JulianDate({
    	locale: "th-TH",
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



function testDateFmtTemplateClock12SwitchHH_th_TH() {
    var fmt = new DateFmt({locale: "th-TH", calendar: "thaisolar", clock: "12", template: "HH:mm"});
    assertNotNull(fmt);
    
    var date = new ThaiSolarDate({
		locale: "th-TH",
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

function testDateFmtTemplateClock12Switchkk_th_TH() {
    var fmt = new DateFmt({locale: "th-TH", calendar: "thaisolar", clock: "12", template: "kk:mm"});
    assertNotNull(fmt);
    
    var date = new ThaiSolarDate({
		locale: "th-TH",
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

function testDateFmtTemplateClock24Switchhh_th_TH() {
    var fmt = new DateFmt({locale: "th-TH", calendar: "thaisolar", clock: "24", template: "hh:mm"});
    assertNotNull(fmt);
    
    var date = new ThaiSolarDate({
		locale: "th-TH",
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

function testDateFmtTemplateClock24SwitchKK_th_TH() {
    var fmt = new DateFmt({locale: "th-TH", calendar: "thaisolar", clock: "24", template: "KK:mm"});
    assertNotNull(fmt);
    
    var date = new ThaiSolarDate({
		locale: "th-TH",
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

function testDateFmtTemplateNoClockNotFollowLocaleDefault12hh_th_TH() {
    var fmt = new DateFmt({locale: "th-TH", calendar: "thaisolar", template: "hh:mm"});
    assertNotNull(fmt);
    
    var date = new ThaiSolarDate({
		locale: "th-TH",
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

function testDateFmtTemplateNoClockNotFollowLocaleDefault12KK_th_TH() {
    var fmt = new DateFmt({locale: "th-TH", calendar: "thaisolar", template: "KK:mm"});
    assertNotNull(fmt);
    
    var date = new ThaiSolarDate({
		locale: "th-TH",
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

function testDateFmtTemplateNoClockNotFollowLocaleDefault24HH_th_TH() {
    var fmt = new DateFmt({locale: "th-TH", calendar: "thaisolar", template: "HH:mm"});
    assertNotNull(fmt);
    
    var date = new ThaiSolarDate({
		locale: "th-TH",
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

function testDateFmtTemplateNoClockNotFollowLocaleDefault24kk_th_TH() {
    var fmt = new DateFmt({locale: "th-TH", calendar: "thaisolar", template: "kk:mm"});
    assertNotNull(fmt);
    
    var date = new ThaiSolarDate({
		locale: "th-TH",
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


function testDateFmtTypeDate_th_TH() {
    var fmt = new DateFmt({locale: "th-TH", calendar: "thaisolar", type: "date"});
    assertNotNull(fmt);
    
    var date = new ThaiSolarDate({
		locale: "th-TH",
		year: 2011,
		month: 9,
		day: 29,
		hour: 13,
		minute: 45,
		second: 0,
		millisecond: 0
	});
    assertEquals("29/9/11", fmt.format(date));
}

function testDateFmtTypeTime_th_TH() {
    var fmt = new DateFmt({locale: "th-TH", calendar: "thaisolar", type: "time"});
    assertNotNull(fmt);
    
    var date = new ThaiSolarDate({
		locale: "th-TH",
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

function testDateFmtTypeDateTime_th_TH() {
    var fmt = new DateFmt({locale: "th-TH", calendar: "thaisolar", type: "datetime"});
    assertNotNull(fmt);
    
    var date = new ThaiSolarDate({
		locale: "th-TH",
		year: 2011,
		month: 9,
		day: 29,
		hour: 13,
		minute: 45,
		second: 0,
		millisecond: 0
	});
    assertEquals("29/9/11 13:45", fmt.format(date));
}


function testDateFmtShortDateComponentsY_th_TH() {
    var fmt = new DateFmt({locale: "th-TH", calendar: "thaisolar", date: "y"});
    assertNotNull(fmt);
    
    var date = new ThaiSolarDate({
		locale: "th-TH",
		year: 2011,
		month: 9,
		day: 29,
		hour: 13,
		minute: 45,
		second: 0,
		millisecond: 0
	});
    assertEquals("11", fmt.format(date));
}

function testDateFmtShortDateComponentsM_th_TH() {
    var fmt = new DateFmt({locale: "th-TH", calendar: "thaisolar", date: "m"});
    assertNotNull(fmt);
    
    var date = new ThaiSolarDate({
		locale: "th-TH",
		year: 2011,
		month: 9,
		day: 29,
		hour: 13,
		minute: 45,
		second: 0,
		millisecond: 0
	});
    assertEquals("9", fmt.format(date));
}

function testDateFmtShortDateComponentsN_th_TH() {
    var fmt = new DateFmt({locale: "th-TH", calendar: "thaisolar", date: "m", length:"full"});
    assertNotNull(fmt);
    
    var date = new ThaiSolarDate({
		locale: "th-TH",
		year: 2011,
		month: 9,
		day: 29,
		hour: 13,
		minute: 45,
		second: 0,
		millisecond: 0
	});
    assertEquals("กันยายน", fmt.format(date));
}

function testDateFmtShortDateComponentsD_th_TH() {
    var fmt = new DateFmt({locale: "th-TH", calendar: "thaisolar", date: "d"});
    assertNotNull(fmt);
    
    var date = new ThaiSolarDate({
		locale: "th-TH",
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

function testDateFmtShortDateComponentsDM_th_TH() {
    var fmt = new DateFmt({locale: "th-TH", calendar: "thaisolar", date: "dm"});
    assertNotNull(fmt);
    
    var date = new ThaiSolarDate({
		locale: "th-TH",
		year: 2011,
		month: 9,
		day: 29,
		hour: 13,
		minute: 45,
		second: 0,
		millisecond: 0
	});
    assertEquals("29/9", fmt.format(date));
}

function testDateFmtShortDateComponentsMY_th_TH() {
    var fmt = new DateFmt({locale: "th-TH", calendar: "thaisolar", date: "my"});
    assertNotNull(fmt);
    
    var date = new ThaiSolarDate({
		locale: "th-TH",
		year: 2011,
		month: 9,
		day: 29,
		hour: 13,
		minute: 45,
		second: 0,
		millisecond: 0
	});
    assertEquals("9/11", fmt.format(date));
}

function testDateFmtShortDateComponentsDMY_th_TH() {
    var fmt = new DateFmt({locale: "th-TH", calendar: "thaisolar", date: "dmy"});
    assertNotNull(fmt);
    
    var date = new ThaiSolarDate({
		locale: "th-TH",
		year: 2011,
		month: 9,
		day: 29,
		hour: 13,
		minute: 45,
		second: 0,
		millisecond: 0
	});
    assertEquals("29/9/11", fmt.format(date));
}

function testDateFmtShortDateComponentsWDM_th_TH() {
    var fmt = new DateFmt({locale: "th-TH", calendar: "thaisolar", date: "wdm"});
    assertNotNull(fmt);
    
    var date = new ThaiSolarDate({
		locale: "th-TH",
		year: 2554,
		month: 9,
		day: 29,
		hour: 13,
		minute: 45,
		second: 0,
		millisecond: 0
	});
    assertEquals("พฤที่ 29/9", fmt.format(date));
}

function testDateFmtShortDateComponentsWDMY_th_TH() {
    var fmt = new DateFmt({locale: "th-TH", calendar: "thaisolar", date: "wdmy"});
    assertNotNull(fmt);
    
    var date = new ThaiSolarDate({
		locale: "th-TH",
		year: 2554,
		month: 9,
		day: 29,
		hour: 13,
		minute: 45,
		second: 0,
		millisecond: 0
	});
    assertEquals("พฤที่ 29/9/54", fmt.format(date));
}


function testDateFmtFullDateComponentsY_th_TH() {
    var fmt = new DateFmt({locale: "th-TH", calendar: "thaisolar", length: "full", date: "y"});
    assertNotNull(fmt);
    
    var date = new ThaiSolarDate({
		locale: "th-TH",
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

function testDateFmtFullDateComponentsM_th_TH() {
    var fmt = new DateFmt({locale: "th-TH", calendar: "thaisolar", length: "full", date: "m"});
    assertNotNull(fmt);
    
    var date = new ThaiSolarDate({
		locale: "th-TH",
		year: 2011,
		month: 9,
		day: 29,
		hour: 13,
		minute: 45,
		second: 0,
		millisecond: 0
	});
    assertEquals("กันยายน", fmt.format(date));
}

function testDateFmtFullDateComponentsD_th_TH() {
    var fmt = new DateFmt({locale: "th-TH", calendar: "thaisolar", length: "full", date: "d"});
    assertNotNull(fmt);
    
    var date = new ThaiSolarDate({
		locale: "th-TH",
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

function testDateFmtFullDateComponentsDM_th_TH() {
    var fmt = new DateFmt({locale: "th-TH", calendar: "thaisolar", length: "full", date: "dm"});
    assertNotNull(fmt);
    
    var date = new ThaiSolarDate({
		locale: "th-TH",
		year: 2011,
		month: 9,
		day: 29,
		hour: 13,
		minute: 45,
		second: 0,
		millisecond: 0
	});
    assertEquals("29 กันยายน", fmt.format(date));
}

function testDateFmtFullDateComponentsMY_th_TH() {
    var fmt = new DateFmt({locale: "th-TH", calendar: "thaisolar", length: "full", date: "my"});
    assertNotNull(fmt);
    
    var date = new ThaiSolarDate({
		locale: "th-TH",
		year: 2011,
		month: 9,
		day: 29,
		hour: 13,
		minute: 45,
		second: 0,
		millisecond: 0
	});
    assertEquals("กันยายน 2011", fmt.format(date));
}

function testDateFmtFullDateComponentsDMY_th_TH() {
    var fmt = new DateFmt({locale: "th-TH", calendar: "thaisolar", length: "full", date: "dmy"});
    assertNotNull(fmt);
    
    var date = new ThaiSolarDate({
		locale: "th-TH",
		year: 2011,
		month: 9,
		day: 29,
		hour: 13,
		minute: 45,
		second: 0,
		millisecond: 0
	});
    assertEquals("29 กันยายน 2011", fmt.format(date));
}

function testDateFmtFullDateComponentsWDM_th_TH() {
    var fmt = new DateFmt({locale: "th-TH", calendar: "thaisolar", length: "full", date: "wdm"});
    assertNotNull(fmt);
    
    var date = new ThaiSolarDate({
		locale: "th-TH",
		year: 2554,
		month: 9,
		day: 29,
		hour: 13,
		minute: 45,
		second: 0,
		millisecond: 0
	});
    assertEquals("วันพฤหัสบดีที่ 29 กันยายน", fmt.format(date));
}

function testDateFmtFullDateComponentsWDMY_th_TH() {
    var fmt = new DateFmt({locale: "th-TH", calendar: "thaisolar", length: "full", date: "wdmy"});
    assertNotNull(fmt);
    
    var date = new ThaiSolarDate({
		locale: "th-TH",
		year: 2554,
		month: 9,
		day: 29,
		hour: 13,
		minute: 45,
		second: 0,
		millisecond: 0
	});
    assertEquals("วันพฤหัสบดีที่ 29 กันยายน 2554", fmt.format(date));
}


function testDateFmtShortTimeComponentsS_th_TH() {
    var fmt = new DateFmt({locale: "th-TH", calendar: "thaisolar", type: "time", time: "s"});
    assertNotNull(fmt);
    
    var date = new ThaiSolarDate({
		locale: "th-TH",
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

function testDateFmtShortTimeComponentsM_th_TH() {
    var fmt = new DateFmt({locale: "th-TH", calendar: "thaisolar", type: "time", time: "m"});
    assertNotNull(fmt);
    
    var date = new ThaiSolarDate({
		locale: "th-TH",
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

function testDateFmtShortTimeComponentsH_th_TH() {
    var fmt = new DateFmt({locale: "th-TH", calendar: "thaisolar", type: "time", time: "h"});
    assertNotNull(fmt);
    
    var date = new ThaiSolarDate({
		locale: "th-TH",
		year: 2011,
		month: 9,
		day: 29,
		hour: 13,
		minute: 45,
		second: 37,
		millisecond: 0
	});
    assertEquals("13", fmt.format(date));
}

function testDateFmtShortTimeComponentsMS_th_TH() {
    var fmt = new DateFmt({locale: "th-TH", calendar: "thaisolar", type: "time", time: "ms"});
    assertNotNull(fmt);
    
    var date = new ThaiSolarDate({
		locale: "th-TH",
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

function testDateFmtShortTimeComponentsHM_th_TH() {
    var fmt = new DateFmt({locale: "th-TH", calendar: "thaisolar", type: "time", time: "hm"});
    assertNotNull(fmt);
    
    var date = new ThaiSolarDate({
		locale: "th-TH",
		year: 2011,
		month: 9,
		day: 29,
		hour: 13,
		minute: 45,
		second: 37,
		millisecond: 0
	});
    assertEquals("13:45", fmt.format(date));
}

function testDateFmtShortTimeComponentsHMS_th_TH() {
    var fmt = new DateFmt({locale: "th-TH", calendar: "thaisolar", type: "time", time: "hms"});
    assertNotNull(fmt);
    
    var date = new ThaiSolarDate({
		locale: "th-TH",
		year: 2011,
		month: 9,
		day: 29,
		hour: 13,
		minute: 45,
		second: 37,
		millisecond: 0
	});
    assertEquals("13:45:37", fmt.format(date));
}

function testDateFmtShortTimeComponentsHMA_th_TH() {
    var fmt = new DateFmt({locale: "th-TH", calendar: "thaisolar", type: "time", time: "hma"});
    assertNotNull(fmt);
    
    var date = new ThaiSolarDate({
		locale: "th-TH",
		year: 2011,
		month: 9,
		day: 29,
		hour: 13,
		minute: 45,
		second: 37,
		millisecond: 0
	});
    assertEquals("13:45", fmt.format(date));
}

function testDateFmtShortTimeComponentsHMZ_th_TH() {
    var fmt = new DateFmt({
        locale: "th-TH", calendar: "thaisolar", 
        type: "time", 
        time: "hmz"
    });
    assertNotNull(fmt);
    
    var date = new ThaiSolarDate({
		locale: "th-TH",
		year: 2011,
		month: 9,
		day: 29,
		hour: 13,
		minute: 45,
		second: 37,
		millisecond: 0
	});
    assertEquals("13:45 +07", fmt.format(date));
}

function testDateFmtShortTimeComponentsHMAZ_th_TH() {
    var fmt = new DateFmt({
        locale: "th-TH", calendar: "thaisolar", 
        type: "time", 
        time: "hmaz"
    });
    assertNotNull(fmt);
    
    var date = new ThaiSolarDate({
		locale: "th-TH",
		year: 2011,
		month: 9,
		day: 29,
		hour: 13,
		minute: 45,
		second: 37,
		millisecond: 0
	});
    assertEquals("13:45 +07", fmt.format(date));
}

function testDateFmtShortTimeComponentsHMSA_th_TH() {
    var fmt = new DateFmt({locale: "th-TH", calendar: "thaisolar", type: "time", time: "hmsa"});
    assertNotNull(fmt);
    
    var date = new ThaiSolarDate({
		locale: "th-TH",
		year: 2011,
		month: 9,
		day: 29,
		hour: 13,
		minute: 45,
		second: 37,
		millisecond: 0
	});
    assertEquals("13:45:37", fmt.format(date));
}

function testDateFmtShortTimeComponentsHMSZ_th_TH() {
    var fmt = new DateFmt({
        locale: "th-TH", calendar: "thaisolar", 
        type: "time", 
        time: "hmsz"
    });
    assertNotNull(fmt);
    
    var date = new ThaiSolarDate({
		locale: "th-TH",
		year: 2011,
		month: 9,
		day: 29,
		hour: 13,
		minute: 45,
		second: 37,
		millisecond: 0
	});
    assertEquals("13:45:37 +07", fmt.format(date));
}

function testDateFmtShortTimeComponentsHMSAZ_th_TH() {
    var fmt = new DateFmt({
        locale: "th-TH", calendar: "thaisolar", 
        type: "time", 
        time: "hmsaz"
    });
    assertNotNull(fmt);
    
    var date = new ThaiSolarDate({
		locale: "th-TH",
		year: 2011,
		month: 9,
		day: 29,
		hour: 13,
		minute: 45,
		second: 37,
		millisecond: 0
	});
    assertEquals("13:45:37 +07", fmt.format(date));
}


function testDateFmtFullTimeComponentsS_th_TH() {
    var fmt = new DateFmt({locale: "th-TH", calendar: "thaisolar", type: "time", length: "full", time: "s"});
    assertNotNull(fmt);
    
    var date = new ThaiSolarDate({
		locale: "th-TH",
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

function testDateFmtFullTimeComponentsM_th_TH() {
    var fmt = new DateFmt({locale: "th-TH", calendar: "thaisolar", type: "time", length: "full", time: "m"});
    assertNotNull(fmt);
    
    var date = new ThaiSolarDate({
		locale: "th-TH",
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

function testDateFmtFullTimeComponentsH_th_TH() {
    var fmt = new DateFmt({locale: "th-TH", calendar: "thaisolar", type: "time", length: "full", time: "h"});
    assertNotNull(fmt);
    
    var date = new ThaiSolarDate({
		locale: "th-TH",
		year: 2011,
		month: 9,
		day: 29,
		hour: 13,
		minute: 45,
		second: 37,
		millisecond: 0
	});
    assertEquals("13", fmt.format(date));
}

function testDateFmtFullTimeComponentsMS_th_TH() {
    var fmt = new DateFmt({locale: "th-TH", calendar: "thaisolar", type: "time", length: "full", time: "ms"});
    assertNotNull(fmt);
    
    var date = new ThaiSolarDate({
		locale: "th-TH",
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

function testDateFmtFullTimeComponentsHM_th_TH() {
    var fmt = new DateFmt({locale: "th-TH", calendar: "thaisolar", type: "time", length: "full", time: "hm"});
    assertNotNull(fmt);
    
    var date = new ThaiSolarDate({
		locale: "th-TH",
		year: 2011,
		month: 9,
		day: 29,
		hour: 13,
		minute: 45,
		second: 37,
		millisecond: 0
	});
    assertEquals("13:45", fmt.format(date));
}

function testDateFmtFullTimeComponentsHMS_th_TH() {
    var fmt = new DateFmt({locale: "th-TH", calendar: "thaisolar", type: "time", length: "full", time: "hms"});
    assertNotNull(fmt);
    
    var date = new ThaiSolarDate({
		locale: "th-TH",
		year: 2011,
		month: 9,
		day: 29,
		hour: 13,
		minute: 45,
		second: 37,
		millisecond: 0
	});
    assertEquals("13:45:37", fmt.format(date));
}

function testDateFmtFullTimeComponentsHMA_th_TH() {
    var fmt = new DateFmt({locale: "th-TH", calendar: "thaisolar", type: "time", length: "full", time: "hma"});
    assertNotNull(fmt);
    
    var date = new ThaiSolarDate({
		locale: "th-TH",
		year: 2011,
		month: 9,
		day: 29,
		hour: 13,
		minute: 45,
		second: 37,
		millisecond: 0
	});
    assertEquals("13:45", fmt.format(date));
}

function testDateFmtFullTimeComponentsHMZ_th_TH() {
    var fmt = new DateFmt({
        locale: "th-TH", calendar: "thaisolar", 
        type: "time", 
        length: "full", 
        time: "hmz"
    });
    assertNotNull(fmt);
    
    var date = new ThaiSolarDate({
		locale: "th-TH",
		year: 2011,
		month: 9,
		day: 29,
		hour: 13,
		minute: 45,
		second: 37,
		millisecond: 0
	});
    assertEquals("13:45 +07", fmt.format(date));
}

function testDateFmtFullTimeComponentsHMAZ_th_TH() {
    var fmt = new DateFmt({
        locale: "th-TH", calendar: "thaisolar", 
        type: "time", 
        length: "full", 
        time: "hmaz"
    });
    assertNotNull(fmt);
    
    var date = new ThaiSolarDate({
		locale: "th-TH",
		year: 2011,
		month: 9,
		day: 29,
		hour: 13,
		minute: 45,
		second: 37,
		millisecond: 0
	});
    assertEquals("13:45 +07", fmt.format(date));
}

function testDateFmtFullTimeComponentsHMSA_th_TH() {
    var fmt = new DateFmt({locale: "th-TH", calendar: "thaisolar", type: "time", length: "full", time: "hmsa"});
    assertNotNull(fmt);
    
    var date = new ThaiSolarDate({
		locale: "th-TH",
		year: 2011,
		month: 9,
		day: 29,
		hour: 13,
		minute: 45,
		second: 37,
		millisecond: 0
	});
    assertEquals("13:45:37", fmt.format(date));
}

function testDateFmtFullTimeComponentsHMSZ_th_TH() {
    var fmt = new DateFmt({
        locale: "th-TH", calendar: "thaisolar", 
        type: "time", 
        length: "full", 
        time: "hmsz"
    });
    assertNotNull(fmt);
    
    var date = new ThaiSolarDate({
		locale: "th-TH",
		year: 2011,
		month: 9,
		day: 29,
		hour: 13,
		minute: 45,
		second: 37,
		millisecond: 0
	});
    assertEquals("13:45:37 +07", fmt.format(date));
}

function testDateFmtFullTimeComponentsHMSAZ_th_TH() {
    var fmt = new DateFmt({
        locale: "th-TH", calendar: "thaisolar", 
        type: "time", 
        length: "full", 
        time: "hmsaz"
    });
    assertNotNull(fmt);
    
    var date = new ThaiSolarDate({
		locale: "th-TH",
		year: 2011,
		month: 9,
		day: 29,
		hour: 13,
		minute: 45,
		second: 37,
		millisecond: 0
	});
    assertEquals("13:45:37 +07", fmt.format(date));
}

function testDateFmtWithTimeZoneAndNoDST_th_TH() {
    var fmt = new DateFmt({
        locale: "th-TH", calendar: "thaisolar", 
        type: "time", 
        length: "full", 
        time: "hmsz"
    });
    assertNotNull(fmt);
    
    var date = new ThaiSolarDate({
		locale: "th-TH",
		year: 2011,
		month: 12,
		day: 29,
		hour: 13,
		minute: 45,
		second: 37,
		millisecond: 0
	});
    assertEquals("13:45:37 +07", fmt.format(date));
}

function testDateFmtFormatRelativeWithinMinuteAfter_th_TH() {
    var fmt = new DateFmt({locale: "th-TH", calendar: "thaisolar", length: "full"});
    assertNotNull(fmt);
    
    var reference = new ThaiSolarDate({
		locale: "th-TH",
		year: 2011,
		month: 11,
		day: 20,
		hour: 13,
		minute: 45,
		second: 0,
		millisecond: 0
	});
    var date = new ThaiSolarDate({
		locale: "th-TH",
		year: 2011,
		month: 11,
		day: 20,
		hour: 13,
		minute: 45,
		second: 30,
		millisecond: 0
	});
    assertEquals("ในอีก 30 วินาที", fmt.formatRelative(reference, date));
}
function testDateFmtFormatRelativeWithinMinuteBefore_th_TH() {
    var fmt = new DateFmt({locale: "th-TH", calendar: "thaisolar", length: "full"});
    assertNotNull(fmt);
    
    var reference = new ThaiSolarDate({
		locale: "th-TH",
		year: 2011,
		month: 11,
		day: 20,
		hour: 13,
		minute: 45,
		second: 0,
		millisecond: 0
	});
    var date = new ThaiSolarDate({
		locale: "th-TH",
		year: 2011,
		month: 11,
		day: 20,
		hour: 13,
		minute: 44,
		second: 30,
		millisecond: 0
	});
    assertEquals("30 วินาทีที่ผ่านมา", fmt.formatRelative(reference, date));
}
function testDateFmtFormatRelativeWithinHourAfter_th_TH() {
    var fmt = new DateFmt({locale: "th-TH", calendar: "thaisolar", length: "full"});
    assertNotNull(fmt);
    
    var reference = new ThaiSolarDate({
		locale: "th-TH",
		year: 2011,
		month: 11,
		day: 20,
		hour: 13,
		minute: 45,
		second: 0,
		millisecond: 0
	});
    var date = new ThaiSolarDate({
		locale: "th-TH",
		year: 2011,
		month: 11,
		day: 20,
		hour: 13,
		minute: 55,
		second: 0,
		millisecond: 0
	});
    assertEquals("ในอีก 10 นาที", fmt.formatRelative(reference, date));
}
function testDateFmtFormatRelativeWithinHourBefore_th_TH() {
    var fmt = new DateFmt({locale: "th-TH", calendar: "thaisolar", length: "full"});
    assertNotNull(fmt);
    
    var reference = new ThaiSolarDate({
		locale: "th-TH",
		year: 2011,
		month: 11,
		day: 20,
		hour: 13,
		minute: 45,
		second: 0,
		millisecond: 0
	});
    var date = new ThaiSolarDate({
		locale: "th-TH",
		year: 2011,
		month: 11,
		day: 20,
		hour: 13,
		minute: 35,
		second: 0,
		millisecond: 0
	});
    assertEquals("10 นาทีที่ผ่านมา", fmt.formatRelative(reference, date));
}
function testDateFmtFormatRelativeWithinDayAfter_th_TH() {
    var fmt = new DateFmt({locale: "th-TH", calendar: "thaisolar", length: "full"});
    assertNotNull(fmt);
    
    var reference = new ThaiSolarDate({
		locale: "th-TH",
		year: 2011,
		month: 11,
		day: 20,
		hour: 13,
		minute: 45,
		second: 0,
		millisecond: 0
	});
    var date = new ThaiSolarDate({
		locale: "th-TH",
		year: 2011,
		month: 11,
		day: 20,
		hour: 17,
		minute: 55,
		second: 0,
		millisecond: 0
	});
    assertEquals("ในอีก 4 ชั่วโมง", fmt.formatRelative(reference, date));
}
function testDateFmtFormatRelativeWithinDayBefore_th_TH() {
    var fmt = new DateFmt({locale: "th-TH", calendar: "thaisolar", length: "full"});
    assertNotNull(fmt);
    
    var reference = new ThaiSolarDate({
		locale: "th-TH",
		year: 2011,
		month: 11,
		day: 20,
		hour: 13,
		minute: 45,
		second: 0,
		millisecond: 0
	});
    var date = new ThaiSolarDate({
		locale: "th-TH",
		year: 2011,
		month: 11,
		day: 20,
		hour: 9,
		minute: 35,
		second: 0,
		millisecond: 0
	});
    assertEquals("4 ชั่วโมงที่ผ่านมา", fmt.formatRelative(reference, date));
}

function testDateFmtFormatRelativeWithinFortnightAfter_th_TH() {
    var fmt = new DateFmt({locale: "th-TH", calendar: "thaisolar", length: "full"});
    assertNotNull(fmt);
    
    var reference = new ThaiSolarDate({
		locale: "th-TH",
		year: 2011,
		month: 11,
		day: 20,
		hour: 13,
		minute: 45,
		second: 0,
		millisecond: 0
	});
    var date = new ThaiSolarDate({
		locale: "th-TH",
		year: 2011,
		month: 11,
		day: 24,
		hour: 15,
		minute: 55,
		second: 0,
		millisecond: 0
	});
    assertEquals("ในอีก 4 วัน", fmt.formatRelative(reference, date));
}
function testDateFmtFormatRelativeWithinFortnightBefore_th_TH() {
    var fmt = new DateFmt({locale: "th-TH", calendar: "thaisolar", length: "full"});
    assertNotNull(fmt);
    
    var reference = new ThaiSolarDate({
		locale: "th-TH",
		year: 2011,
		month: 11,
		day: 20,
		hour: 13,
		minute: 45,
		second: 0,
		millisecond: 0
	});
    var date = new ThaiSolarDate({
		locale: "th-TH",
		year: 2011,
		month: 11,
		day: 16,
		hour: 9,
		minute: 35,
		second: 0,
		millisecond: 0
	});
    assertEquals("4 วันที่ผ่านมา", fmt.formatRelative(reference, date));
}

function testDateFmtFormatRelativeWithinQuarterAfter_th_TH() {
    var fmt = new DateFmt({locale: "th-TH", calendar: "thaisolar", length: "full"});
    assertNotNull(fmt);
    
    var reference = new ThaiSolarDate({
		locale: "th-TH",
		year: 2011,
		month: 9,
		day: 20,
		hour: 13,
		minute: 45,
		second: 0,
		millisecond: 0
	});
    var date = new ThaiSolarDate({
		locale: "th-TH",
		year: 2011,
		month: 11,
		day: 24,
		hour: 15,
		minute: 55,
		second: 0,
		millisecond: 0
	});
    assertEquals("ในอีก 9 สัปดาห์", fmt.formatRelative(reference, date));
}
function testDateFmtFormatRelativeWithinQuarterBefore_th_TH() {
    var fmt = new DateFmt({locale: "th-TH", calendar: "thaisolar", length: "full"});
    assertNotNull(fmt);
    
    var reference = new ThaiSolarDate({
		locale: "th-TH",
		year: 2011,
		month: 9,
		day: 20,
		hour: 13,
		minute: 45,
		second: 0,
		millisecond: 0
	});
    var date = new ThaiSolarDate({
		locale: "th-TH",
		year: 2011,
		month: 7,
		day: 18,
		hour: 9,
		minute: 35,
		second: 0,
		millisecond: 0
	});
    assertEquals("9 สัปดาห์ที่ผ่านมา", fmt.formatRelative(reference, date));
}

function testDateFmtFormatRelativeWithinTwoYearsAfter_th_TH() {
    var fmt = new DateFmt({locale: "th-TH", calendar: "thaisolar", length: "full"});
    assertNotNull(fmt);
    
    var reference = new ThaiSolarDate({
		locale: "th-TH",
		year: 2011,
		month: 9,
		day: 20,
		hour: 13,
		minute: 45,
		second: 0,
		millisecond: 0
	});
    var date = new ThaiSolarDate({
		locale: "th-TH",
		year: 2013,
		month: 1,
		day: 24,
		hour: 15,
		minute: 55,
		second: 0,
		millisecond: 0
	});
    assertEquals("ในอีก 16 เดือน", fmt.formatRelative(reference, date));
}
function testDateFmtFormatRelativeWithinTwoYearsBefore_th_TH() {
    var fmt = new DateFmt({locale: "th-TH", calendar: "thaisolar", length: "full"});
    assertNotNull(fmt);
    
    var reference = new ThaiSolarDate({
		locale: "th-TH",
		year: 2011,
		month: 9,
		day: 20,
		hour: 13,
		minute: 45,
		second: 0,
		millisecond: 0
	});
    var date = new ThaiSolarDate({
		locale: "th-TH",
		year: 2010,
		month: 7,
		day: 18,
		hour: 9,
		minute: 35,
		second: 0,
		millisecond: 0
	});
    assertEquals("14 เดือนที่ผ่านมา", fmt.formatRelative(reference, date));
}

function testDateFmtFormatRelativeYearsAfter_th_TH() {
    var fmt = new DateFmt({locale: "th-TH", calendar: "thaisolar", length: "full"});
    assertNotNull(fmt);
    
    var reference = new ThaiSolarDate({
		locale: "th-TH",
		year: 2011,
		month: 9,
		day: 20,
		hour: 13,
		minute: 45,
		second: 0,
		millisecond: 0
	});
    var date = new ThaiSolarDate({
		locale: "th-TH",
		year: 2025,
		month: 10,
		day: 24,
		hour: 15,
		minute: 55,
		second: 0,
		millisecond: 0
	});
    assertEquals("ในอีก 14 ปี", fmt.formatRelative(reference, date));
}
function testDateFmtFormatRelativeYearsBefore_th_TH() {
    var fmt = new DateFmt({locale: "th-TH", calendar: "thaisolar", length: "full"});
    assertNotNull(fmt);
    
    var reference = new ThaiSolarDate({
		locale: "th-TH",
		year: 2011,
		month: 9,
		day: 20,
		hour: 13,
		minute: 45,
		second: 0,
		millisecond: 0
	});
    var date = new ThaiSolarDate({
		locale: "th-TH",
		year: 1990,
		month: 7,
		day: 18,
		hour: 9,
		minute: 35,
		second: 0,
		millisecond: 0
	});
    assertEquals("21 ปีที่ผ่านมา", fmt.formatRelative(reference, date));
}


function testDateFmtShortDMWY_th_TH() {
    var fmt = new DateFmt({locale: "th-TH", calendar: "thaisolar", length: "short", date: "dmwy"});
    assertNotNull(fmt);
    
    var date = new ThaiSolarDate({
		locale: "th-TH",
		year: 2554,
		month: 9,
		day: 29,
		hour: 13,
		minute: 45,
		second: 0,
		millisecond: 0
	});
    assertEquals("พฤที่ 29/9/54", fmt.format(date));
}

function testDateFmtMediumDMWY_th_TH() {
    var fmt = new DateFmt({locale: "th-TH", calendar: "thaisolar", length: "medium", date: "dmwy"});
    assertNotNull(fmt);
    
    var date = new ThaiSolarDate({
		locale: "th-TH",
		year: 2554,
		month: 9,
		day: 29,
		hour: 13,
		minute: 45,
		second: 0,
		millisecond: 0
	});
    assertEquals("พฤ.ที่ 29 ก.ย. 2554", fmt.format(date));
}

function testDateFmtLongDMWY_th_TH() {
    var fmt = new DateFmt({locale: "th-TH", calendar: "thaisolar", length: "long", date: "dmwy"});
    assertNotNull(fmt);
    
    var date = new ThaiSolarDate({
		locale: "th-TH",
		year: 2554,
		month: 9,
		day: 29,
		hour: 13,
		minute: 45,
		second: 0,
		millisecond: 0
	});
    assertEquals("พฤ.ที่ 29 กันยายน 2554", fmt.format(date));
}

function testDateFmtFullDMWY_th_TH() {
    var fmt = new DateFmt({locale: "th-TH", calendar: "thaisolar", length: "full", date: "dmwy"});
    assertNotNull(fmt);
    
    var date = new ThaiSolarDate({
		locale: "th-TH",
		year: 2554,
		month: 9,
		day: 29,
		hour: 13,
		minute: 45,
		second: 0,
		millisecond: 0
	});
    assertEquals("วันพฤหัสบดีที่ 29 กันยายน 2554", fmt.format(date));
}

function testDateFmtShortDMY_th_TH() {
    var fmt = new DateFmt({locale: "th-TH", calendar: "thaisolar", length: "short", date: "dmy"});
    assertNotNull(fmt);
    
    var date = new ThaiSolarDate({
		locale: "th-TH",
		year: 2011,
		month: 9,
		day: 29,
		hour: 13,
		minute: 45,
		second: 0,
		millisecond: 0
	});
    assertEquals("29/9/11", fmt.format(date));
}

function testDateFmtMediumDMY_th_TH() {
    var fmt = new DateFmt({locale: "th-TH", calendar: "thaisolar", length: "medium", date: "dmy"});
    assertNotNull(fmt);
    
    var date = new ThaiSolarDate({
		locale: "th-TH",
		year: 2011,
		month: 9,
		day: 29,
		hour: 13,
		minute: 45,
		second: 0,
		millisecond: 0
	});
    assertEquals("29 ก.ย. 2011", fmt.format(date));
}

function testDateFmtLongDMY_th_TH() {
    var fmt = new DateFmt({locale: "th-TH", calendar: "thaisolar", length: "long", date: "dmy"});
    assertNotNull(fmt);
    
    var date = new ThaiSolarDate({
		locale: "th-TH",
		year: 2011,
		month: 9,
		day: 29,
		hour: 13,
		minute: 45,
		second: 0,
		millisecond: 0
	});
    assertEquals("29 กันยายน 2011", fmt.format(date));
}

function testDateFmtFullDMY_th_TH() {
    var fmt = new DateFmt({locale: "th-TH", calendar: "thaisolar", length: "full", date: "dmy"});
    assertNotNull(fmt);
    
    var date = new ThaiSolarDate({
		locale: "th-TH",
		year: 2011,
		month: 9,
		day: 29,
		hour: 13,
		minute: 45,
		second: 0,
		millisecond: 0
	});
    assertEquals("29 กันยายน 2011", fmt.format(date));
}

function testDateFmtShortDMW_th_TH() {
    var fmt = new DateFmt({locale: "th-TH", calendar: "thaisolar", length: "short", date: "dmw"});
    assertNotNull(fmt);
    
    var date = new ThaiSolarDate({
		locale: "th-TH",
		year: 2554,
		month: 9,
		day: 29,
		hour: 13,
		minute: 45,
		second: 0,
		millisecond: 0
	});
    assertEquals("พฤที่ 29/9", fmt.format(date));
}

function testDateFmtMediumDMW_th_TH() {
    var fmt = new DateFmt({locale: "th-TH", calendar: "thaisolar", length: "medium", date: "dmw"});
    assertNotNull(fmt);
    
    var date = new ThaiSolarDate({
		locale: "th-TH",
		year: 2554,
		month: 9,
		day: 29,
		hour: 13,
		minute: 45,
		second: 0,
		millisecond: 0
	});
    assertEquals("พฤ.ที่ 29 ก.ย.", fmt.format(date));
}

function testDateFmtLongDMW_th_TH() {
    var fmt = new DateFmt({locale: "th-TH", calendar: "thaisolar", length: "long", date: "dmw"});
    assertNotNull(fmt);
    
    var date = new ThaiSolarDate({
		locale: "th-TH",
		year: 2554,
		month: 9,
		day: 29,
		hour: 13,
		minute: 45,
		second: 0,
		millisecond: 0
	});
    assertEquals("พฤ.ที่ 29 กันยายน", fmt.format(date));
}

function testDateFmtFullDMW_th_TH() {
    var fmt = new DateFmt({locale: "th-TH", calendar: "thaisolar", length: "full", date: "dmw"});
    assertNotNull(fmt);
    
    var date = new ThaiSolarDate({
		locale: "th-TH",
		year: 2554,
		month: 9,
		day: 29,
		hour: 13,
		minute: 45,
		second: 0,
		millisecond: 0
	});
    assertEquals("วันพฤหัสบดีที่ 29 กันยายน", fmt.format(date));
}

function testDateFmtShortDMW_th_TH() {
    var fmt = new DateFmt({locale: "th-TH", calendar: "thaisolar", length: "short", date: "dm"});
    assertNotNull(fmt);
    
    var date = new ThaiSolarDate({
		locale: "th-TH",
		year: 2554,
		month: 9,
		day: 29,
		hour: 13,
		minute: 45,
		second: 0,
		millisecond: 0
	});
    assertEquals("29/9", fmt.format(date));
}

function testDateFmtMediumDM_th_TH() {
    var fmt = new DateFmt({locale: "th-TH", calendar: "thaisolar", length: "medium", date: "dm"});
    assertNotNull(fmt);
    
    var date = new ThaiSolarDate({
		locale: "th-TH",
		year: 2554,
		month: 9,
		day: 29,
		hour: 13,
		minute: 45,
		second: 0,
		millisecond: 0
	});
    assertEquals("29 ก.ย.", fmt.format(date));
}

function testDateFmtLongDM_th_TH() {
    var fmt = new DateFmt({locale: "th-TH", calendar: "thaisolar", length: "long", date: "dm"});
    assertNotNull(fmt);
    
    var date = new ThaiSolarDate({
		locale: "th-TH",
		year: 2554,
		month: 9,
		day: 29,
		hour: 13,
		minute: 45,
		second: 0,
		millisecond: 0
	});
    assertEquals("29 กันยายน", fmt.format(date));
}

function testDateFmtFullDM_th_TH() {
    var fmt = new DateFmt({locale: "th-TH", calendar: "thaisolar", length: "full", date: "dm"});
    assertNotNull(fmt);
    
    var date = new ThaiSolarDate({
		locale: "th-TH",
		year: 2554,
		month: 9,
		day: 29,
		hour: 13,
		minute: 45,
		second: 0,
		millisecond: 0
	});
    assertEquals("29 กันยายน", fmt.format(date));
}

function testDateFmtShortMY_th_TH() {
    var fmt = new DateFmt({locale: "th-TH", calendar: "thaisolar", length: "short", date: "my"});
    assertNotNull(fmt);
    
    var date = new ThaiSolarDate({
		locale: "th-TH",
		year: 2554,
		month: 9,
		day: 29,
		hour: 13,
		minute: 45,
		second: 0,
		millisecond: 0
	});
    assertEquals("9/54", fmt.format(date));
}

function testDateFmtMediumMY_th_TH() {
    var fmt = new DateFmt({locale: "th-TH", calendar: "thaisolar", length: "medium", date: "my"});
    assertNotNull(fmt);
    
    var date = new ThaiSolarDate({
		locale: "th-TH",
		year: 2554,
		month: 9,
		day: 29,
		hour: 13,
		minute: 45,
		second: 0,
		millisecond: 0
	});
    assertEquals("ก.ย. 2554", fmt.format(date));
}

function testDateFmtLongMY_th_TH() {
    var fmt = new DateFmt({locale: "th-TH", calendar: "thaisolar", length: "long", date: "my"});
    assertNotNull(fmt);
    
    var date = new ThaiSolarDate({
		locale: "th-TH",
		year: 2554,
		month: 9,
		day: 29,
		hour: 13,
		minute: 45,
		second: 0,
		millisecond: 0
	});
    assertEquals("กันยายน 2554", fmt.format(date));
}

function testDateFmtFullMY_th_TH() {
    var fmt = new DateFmt({locale: "th-TH", calendar: "thaisolar", length: "full", date: "my"});
    assertNotNull(fmt);
    
    var date = new ThaiSolarDate({
		locale: "th-TH",
		year: 2554,
		month: 9,
		day: 29,
		hour: 13,
		minute: 45,
		second: 0,
		millisecond: 0
	});
    assertEquals("กันยายน 2554", fmt.format(date));
}

function testDateFmtShortDW_th_TH() {
    var fmt = new DateFmt({locale: "th-TH", calendar: "thaisolar", length: "short", date: "dw"});
    assertNotNull(fmt);
    
    var date = new ThaiSolarDate({
		locale: "th-TH",
		year: 2554,
		month: 9,
		day: 29,
		hour: 13,
		minute: 45,
		second: 0,
		millisecond: 0
	});
    assertEquals("พฤที่ 29", fmt.format(date));
}

function testDateFmtMediumDW_th_TH() {
    var fmt = new DateFmt({locale: "th-TH", calendar: "thaisolar", length: "medium", date: "dw"});
    assertNotNull(fmt);
    
    var date = new ThaiSolarDate({
		locale: "th-TH",
		year: 2554,
		month: 9,
		day: 29,
		hour: 13,
		minute: 45,
		second: 0,
		millisecond: 0
	});
    assertEquals("พฤ.ที่ 29", fmt.format(date));
}

function testDateFmtLongDW_th_TH() {
    var fmt = new DateFmt({locale: "th-TH", calendar: "thaisolar", length: "long", date: "dw"});
    assertNotNull(fmt);
    
    var date = new ThaiSolarDate({
		locale: "th-TH",
		year: 2554,
		month: 9,
		day: 29,
		hour: 13,
		minute: 45,
		second: 0,
		millisecond: 0
	});
    assertEquals("พฤ.ที่ 29", fmt.format(date));
}

function testDateFmtFullDW_th_TH() {
    var fmt = new DateFmt({locale: "th-TH", calendar: "thaisolar", length: "full", date: "dw"});
    assertNotNull(fmt);
    
    var date = new ThaiSolarDate({
		locale: "th-TH",
		year: 2554,
		month: 9,
		day: 29,
		hour: 13,
		minute: 45,
		second: 0,
		millisecond: 0
	});
    assertEquals("วันพฤหัสบดีที่ 29", fmt.format(date));
}
