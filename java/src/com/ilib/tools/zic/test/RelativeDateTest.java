/*
 * RelativeDateTest.java - 
 *
 * Copyright © 2014 JEDLSoft, All Rights Reserved.
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
package com.ilib.tools.zic.test;

import junit.framework.TestCase;

import com.ilib.tools.zic.RelativeDate;
import com.ilib.tools.zic.RelativeDate.StartRule;

/**
 * RelativeDateTest
 * 
 * @author edwin
 */
public class RelativeDateTest
    extends TestCase
{
    public void testConstructor()
    {
        RelativeDate rd = new RelativeDate();
        assertNotNull(rd);
    }
    
    public void testParseYear()
    {
        RelativeDate rd = new RelativeDate();
        assertNotNull(rd);
        
        String[] fields = {
            "1920"
        };
        
        rd.parse(fields, 0);
        
        assertEquals(1920, rd.getYear());
        assertEquals(-1, rd.getMonth());
        assertEquals(-1, rd.getDayOfMonth());
        assertEquals(-1, rd.getDayOfWeek());
        assertEquals(-1, rd.getHour());
        assertEquals(-1, rd.getMinute());
        assertEquals(-1, rd.getSecond());
        assertEquals('w', rd.getZoneChar());
        assertEquals(StartRule.EQUAL, rd.getRule());
    }

    public void testParseNothing()
    {
        RelativeDate rd = new RelativeDate();
        assertNotNull(rd);
        
        String[] fields = {
        };
        
        rd.parse(fields, 0);
        
        assertEquals(-1, rd.getYear());
        assertEquals(-1, rd.getMonth());
        assertEquals(-1, rd.getDayOfMonth());
        assertEquals(-1, rd.getDayOfWeek());
        assertEquals(-1, rd.getHour());
        assertEquals(-1, rd.getMinute());
        assertEquals(-1, rd.getSecond());
        assertEquals('w', rd.getZoneChar());
        assertEquals(StartRule.EQUAL, rd.getRule());
    }

    public void testParseEmpty()
    {
        RelativeDate rd = new RelativeDate();
        assertNotNull(rd);
        
        String[] fields = {
            "",
            "",
            "",
            ""
        };
        
        rd.parse(fields, 0);
        
        assertEquals(-1, rd.getYear());
        assertEquals(-1, rd.getMonth());
        assertEquals(-1, rd.getDayOfMonth());
        assertEquals(-1, rd.getDayOfWeek());
        assertEquals(-1, rd.getHour());
        assertEquals(-1, rd.getMinute());
        assertEquals(-1, rd.getSecond());
        assertEquals('w', rd.getZoneChar());
        assertEquals(StartRule.EQUAL, rd.getRule());
    }

    public void testParseYearMonth()
    {
        RelativeDate rd = new RelativeDate();
        assertNotNull(rd);
        
        String[] fields = {
            "1920",
            "Feb"
        };
        
        rd.parse(fields, 0);
        
        assertEquals(1920, rd.getYear());
        assertEquals(1, rd.getMonth());
        assertEquals(-1, rd.getDayOfMonth());
        assertEquals(-1, rd.getDayOfWeek());
        assertEquals(-1, rd.getHour());
        assertEquals(-1, rd.getMinute());
        assertEquals(-1, rd.getSecond());
        assertEquals('w', rd.getZoneChar());
        assertEquals(StartRule.EQUAL, rd.getRule());
    }

    public void testParseYearMonthDay()
    {
        RelativeDate rd = new RelativeDate();
        assertNotNull(rd);
        
        String[] fields = {
            "1920",
            "Feb",
            "20"
        };
        
        rd.parse(fields, 0);
        
        assertEquals(1920, rd.getYear());
        assertEquals(1, rd.getMonth());
        assertEquals(20, rd.getDayOfMonth());
        assertEquals(-1, rd.getDayOfWeek());
        assertEquals(-1, rd.getHour());
        assertEquals(-1, rd.getMinute());
        assertEquals(-1, rd.getSecond());
        assertEquals('w', rd.getZoneChar());
        assertEquals(StartRule.EQUAL, rd.getRule());
    }

    public void testParseYearMonthDayTimeShort()
    {
        RelativeDate rd = new RelativeDate();
        assertNotNull(rd);
        
        String[] fields = {
            "1920",
            "Feb",
            "20",
            "2:00"
        };
        
        rd.parse(fields, 0);
        
        assertEquals(1920, rd.getYear());
        assertEquals(1, rd.getMonth());
        assertEquals(20, rd.getDayOfMonth());
        assertEquals(-1, rd.getDayOfWeek());
        assertEquals(2, rd.getHour());
        assertEquals(0, rd.getMinute());
        assertEquals(-1, rd.getSecond());
        assertEquals('w', rd.getZoneChar());
        assertEquals(StartRule.EQUAL, rd.getRule());
    }

    public void testParseYearMonthDayTimeEmpty()
    {
        RelativeDate rd = new RelativeDate();
        assertNotNull(rd);
        
        String[] fields = {
            "1920",
            "Feb",
            "20",
            "",
        };
        
        rd.parse(fields, 0);
        
        assertEquals(1920, rd.getYear());
        assertEquals(1, rd.getMonth());
        assertEquals(20, rd.getDayOfMonth());
        assertEquals(-1, rd.getDayOfWeek());
        assertEquals(-1, rd.getHour());
        assertEquals(-1, rd.getMinute());
        assertEquals(-1, rd.getSecond());
        assertEquals('w', rd.getZoneChar());
        assertEquals(StartRule.EQUAL, rd.getRule());
    }

    public void testParseYearMonthDayTimeLong()
    {
        RelativeDate rd = new RelativeDate();
        assertNotNull(rd);
        
        String[] fields = {
            "1920",
            "Feb",
            "20",
            "2:00:23"
        };
        
        rd.parse(fields, 0);
        
        assertEquals(1920, rd.getYear());
        assertEquals(1, rd.getMonth());
        assertEquals(20, rd.getDayOfMonth());
        assertEquals(-1, rd.getDayOfWeek());
        assertEquals(2, rd.getHour());
        assertEquals(0, rd.getMinute());
        assertEquals(23, rd.getSecond());
        assertEquals('w', rd.getZoneChar());
        assertEquals(StartRule.EQUAL, rd.getRule());
    }

    public void testParseYearMonthDayTimeLongUTC()
    {
        RelativeDate rd = new RelativeDate();
        assertNotNull(rd);
        
        String[] fields = {
            "1920",
            "Feb",
            "20",
            "2:00:23u"
        };
        
        rd.parse(fields, 0);
        
        assertEquals(1920, rd.getYear());
        assertEquals(1, rd.getMonth());
        assertEquals(20, rd.getDayOfMonth());
        assertEquals(-1, rd.getDayOfWeek());
        assertEquals(2, rd.getHour());
        assertEquals(0, rd.getMinute());
        assertEquals(23, rd.getSecond());
        assertEquals('u', rd.getZoneChar());
        assertEquals(StartRule.EQUAL, rd.getRule());
    }

    public void testParseLastWeekday()
    {
        RelativeDate rd = new RelativeDate();
        assertNotNull(rd);
        
        String[] fields = {
            "1920",
            "Feb",
            "lastWed"
        };
        
        rd.parse(fields, 0);
        
        assertEquals(1920, rd.getYear());
        assertEquals(1, rd.getMonth());
        assertEquals(-1, rd.getDayOfMonth());
        assertEquals(3, rd.getDayOfWeek());
        assertEquals(-1, rd.getHour());
        assertEquals(-1, rd.getMinute());
        assertEquals(-1, rd.getSecond());
        assertEquals('w', rd.getZoneChar());
        assertEquals(StartRule.LAST, rd.getRule());
    }

    public void testParseFirstWeekday()
    {
        RelativeDate rd = new RelativeDate();
        assertNotNull(rd);
        
        String[] fields = {
            "1920",
            "Feb",
            "firstThu"
        };
        
        rd.parse(fields, 0);
        
        assertEquals(1920, rd.getYear());
        assertEquals(1, rd.getMonth());
        assertEquals(-1, rd.getDayOfMonth());
        assertEquals(4, rd.getDayOfWeek());
        assertEquals(-1, rd.getHour());
        assertEquals(-1, rd.getMinute());
        assertEquals(-1, rd.getSecond());
        assertEquals('w', rd.getZoneChar());
        assertEquals(StartRule.FIRST, rd.getRule());
    }

    public void testParseGreater()
    {
        RelativeDate rd = new RelativeDate();
        assertNotNull(rd);
        
        String[] fields = {
            "1920",
            "Feb",
            "Thu>=8"
        };
        
        rd.parse(fields, 0);
        
        assertEquals(1920, rd.getYear());
        assertEquals(1, rd.getMonth());
        assertEquals(8, rd.getDayOfMonth());
        assertEquals(4, rd.getDayOfWeek());
        assertEquals(-1, rd.getHour());
        assertEquals(-1, rd.getMinute());
        assertEquals(-1, rd.getSecond());
        assertEquals('w', rd.getZoneChar());
        assertEquals(StartRule.GREATER, rd.getRule());
    }

    public void testParseLess()
    {
        RelativeDate rd = new RelativeDate();
        assertNotNull(rd);
        
        String[] fields = {
            "1920",
            "Feb",
            "Thu<=8"
        };
        
        rd.parse(fields, 0);
        
        assertEquals(1920, rd.getYear());
        assertEquals(1, rd.getMonth());
        assertEquals(8, rd.getDayOfMonth());
        assertEquals(4, rd.getDayOfWeek());
        assertEquals(-1, rd.getHour());
        assertEquals(-1, rd.getMinute());
        assertEquals(-1, rd.getSecond());
        assertEquals('w', rd.getZoneChar());
        assertEquals(StartRule.LESS, rd.getRule());
    }

    public void testParseNoYearMonthDayTimeLong()
    {
        RelativeDate rd = new RelativeDate();
        assertNotNull(rd);
        
        String[] fields = {
            "",
            "Feb",
            "20",
            "2:00:23"
        };
        
        rd.parse(fields, 0);
        
        assertEquals(-1, rd.getYear());
        assertEquals(1, rd.getMonth());
        assertEquals(20, rd.getDayOfMonth());
        assertEquals(-1, rd.getDayOfWeek());
        assertEquals(2, rd.getHour());
        assertEquals(0, rd.getMinute());
        assertEquals(23, rd.getSecond());
        assertEquals('w', rd.getZoneChar());
        assertEquals(StartRule.EQUAL, rd.getRule());
    }

    public void testParseGreaterNoYear()
    {
        RelativeDate rd = new RelativeDate();
        assertNotNull(rd);
        
        String[] fields = {
            "",
            "Feb",
            "Thu>=8"
        };
        
        rd.parse(fields, 0);
        
        assertEquals(-1, rd.getYear());
        assertEquals(1, rd.getMonth());
        assertEquals(8, rd.getDayOfMonth());
        assertEquals(4, rd.getDayOfWeek());
        assertEquals(-1, rd.getHour());
        assertEquals(-1, rd.getMinute());
        assertEquals(-1, rd.getSecond());
        assertEquals('w', rd.getZoneChar());
        assertEquals(StartRule.GREATER, rd.getRule());
    }

    public void testCompareLessThanYear()
    {
        RelativeDate rd1 = new RelativeDate();
        assertNotNull(rd1);
        RelativeDate rd2 = new RelativeDate();
        assertNotNull(rd2);
        
        rd1.setYear(1968);
        rd1.setMonth(7);
        rd1.setDayOfMonth(23);
        rd1.setHour(8);
        rd1.setMinute(30);
        rd1.setSecond(10);
        
        rd2.setYear(1969);
        rd2.setMonth(7);
        rd2.setDayOfMonth(23);
        rd2.setHour(8);
        rd2.setMinute(30);
        rd2.setSecond(10);
        
        assertTrue(rd1.compareTo(rd2) < 0);
    }
    
    public void testCompareGreaterThanYear()
    {
        RelativeDate rd1 = new RelativeDate();
        assertNotNull(rd1);
        RelativeDate rd2 = new RelativeDate();
        assertNotNull(rd2);
        
        rd1.setYear(1968);
        rd1.setMonth(7);
        rd1.setDayOfMonth(23);
        rd1.setHour(8);
        rd1.setMinute(30);
        rd1.setSecond(10);
        
        rd2.setYear(1969);
        rd2.setMonth(7);
        rd2.setDayOfMonth(23);
        rd2.setHour(8);
        rd2.setMinute(30);
        rd2.setSecond(10);
        
        assertTrue(rd2.compareTo(rd1) > 0);
    }

    public void testCompareLessThanMonth()
    {
        RelativeDate rd1 = new RelativeDate();
        assertNotNull(rd1);
        RelativeDate rd2 = new RelativeDate();
        assertNotNull(rd2);
        
        rd1.setYear(1968);
        rd1.setMonth(7);
        rd1.setDayOfMonth(23);
        rd1.setHour(8);
        rd1.setMinute(30);
        rd1.setSecond(10);
        
        rd2.setYear(1968);
        rd2.setMonth(8);
        rd2.setDayOfMonth(23);
        rd2.setHour(8);
        rd2.setMinute(30);
        rd2.setSecond(10);
        
        assertTrue(rd1.compareTo(rd2) < 0);
    }

    public void testCompareGreaterThanMonth()
    {
        RelativeDate rd1 = new RelativeDate();
        assertNotNull(rd1);
        RelativeDate rd2 = new RelativeDate();
        assertNotNull(rd2);
        
        rd1.setYear(1968);
        rd1.setMonth(7);
        rd1.setDayOfMonth(23);
        rd1.setHour(8);
        rd1.setMinute(30);
        rd1.setSecond(10);
        
        rd2.setYear(1968);
        rd2.setMonth(8);
        rd2.setDayOfMonth(23);

        rd2.setHour(8);
        rd2.setMinute(30);
        rd2.setSecond(10);
        
        assertTrue(rd2.compareTo(rd1) > 0);
    }

    public void testCompareLessThanDay()
    {
        RelativeDate rd1 = new RelativeDate();
        assertNotNull(rd1);
        RelativeDate rd2 = new RelativeDate();
        assertNotNull(rd2);
        
        rd1.setYear(1968);
        rd1.setMonth(7);
        rd1.setDayOfMonth(23);
        rd1.setHour(8);
        rd1.setMinute(30);
        rd1.setSecond(10);
        
        rd2.setYear(1968);
        rd2.setMonth(7);
        rd2.setDayOfMonth(24);
        rd2.setHour(8);
        rd2.setMinute(30);
        rd2.setSecond(10);
        
        assertTrue(rd1.compareTo(rd2) < 0);
    }

    public void testCompareGreaterThanDay()
    {
        RelativeDate rd1 = new RelativeDate();
        assertNotNull(rd1);
        RelativeDate rd2 = new RelativeDate();
        assertNotNull(rd2);
        
        rd1.setYear(1968);
        rd1.setMonth(7);
        rd1.setDayOfMonth(23);
        rd1.setHour(8);
        rd1.setMinute(30);
        rd1.setSecond(10);
        
        rd2.setYear(1968);
        rd2.setMonth(7);
        rd2.setDayOfMonth(24);
        rd2.setHour(8);
        rd2.setMinute(30);
        rd2.setSecond(10);
        
        assertTrue(rd2.compareTo(rd1) > 0);
    }

    public void testCompareLessThanHour()
    {
        RelativeDate rd1 = new RelativeDate();
        assertNotNull(rd1);
        RelativeDate rd2 = new RelativeDate();
        assertNotNull(rd2);
        
        rd1.setYear(1968);
        rd1.setMonth(7);
        rd1.setDayOfMonth(23);
        rd1.setHour(8);
        rd1.setMinute(30);
        rd1.setSecond(10);    
        
        rd2.setYear(1968);
        rd2.setMonth(7);
        rd2.setDayOfMonth(23);
        rd2.setHour(9);
        rd2.setMinute(30);
        rd2.setSecond(10);
        
        assertTrue(rd1.compareTo(rd2) < 0);
    }

    public void testCompareGreaterThanHour()
    {
        RelativeDate rd1 = new RelativeDate();
        assertNotNull(rd1);
        RelativeDate rd2 = new RelativeDate();
        assertNotNull(rd2);
        
        rd1.setYear(1968);
        rd1.setMonth(7);
        rd1.setDayOfMonth(23);
        rd1.setHour(8);
        rd1.setMinute(30);
        rd1.setSecond(10);
        
        rd2.setYear(1968);
        rd2.setMonth(7);
        rd2.setDayOfMonth(23);
        rd2.setHour(9);
        rd2.setMinute(30);
        rd2.setSecond(10);
        
        assertTrue(rd2.compareTo(rd1) > 0);
    }

    public void testCompareLessThanMinute()
    {
        RelativeDate rd1 = new RelativeDate();
        assertNotNull(rd1);
        RelativeDate rd2 = new RelativeDate();
        assertNotNull(rd2);
        
        rd1.setYear(1968);
        rd1.setMonth(7);
        rd1.setDayOfMonth(23);
        rd1.setHour(8);
        rd1.setMinute(30);
        rd1.setSecond(10);
        
        rd2.setYear(1968);
        rd2.setMonth(7);
        rd2.setDayOfMonth(23);
        rd2.setHour(8);
        rd2.setMinute(31);
        rd2.setSecond(10);
        
        assertTrue(rd1.compareTo(rd2) < 0);
    }

    public void testCompareGreaterThanMinute()
    {
        RelativeDate rd1 = new RelativeDate();
        assertNotNull(rd1);
        RelativeDate rd2 = new RelativeDate();
        assertNotNull(rd2);
        
        rd1.setYear(1968);
        rd1.setMonth(7);
        rd1.setDayOfMonth(23);
        rd1.setHour(8);
        rd1.setMinute(30);
        rd1.setSecond(10);
        
        rd2.setYear(1968);
        rd2.setMonth(7);
        rd2.setDayOfMonth(23);
        rd2.setHour(8);
        rd2.setMinute(31);
        rd2.setSecond(10);
        
        assertTrue(rd2.compareTo(rd1) > 0);
    }

    public void testCompareLessThanSecond()
    {
        RelativeDate rd1 = new RelativeDate();
        assertNotNull(rd1);
        RelativeDate rd2 = new RelativeDate();
        assertNotNull(rd2);
        
        rd1.setYear(1968);
        rd1.setMonth(7);
        rd1.setDayOfMonth(23);
        rd1.setHour(8);
        rd1.setMinute(30);
        rd1.setSecond(10);
        
        rd2.setYear(1968);
        rd2.setMonth(7);
        rd2.setDayOfMonth(23);
        rd2.setHour(8);
        rd2.setMinute(30);
        rd2.setSecond(11);
        
        assertTrue(rd1.compareTo(rd2) < 0);
    }

    public void testCompareGreaterThanSecond()
    {
        RelativeDate rd1 = new RelativeDate();
        assertNotNull(rd1);
        RelativeDate rd2 = new RelativeDate();
        assertNotNull(rd2);
        
        rd1.setYear(1968);
        rd1.setMonth(7);
        rd1.setDayOfMonth(23);
        rd1.setHour(8);
        rd1.setMinute(30);
        rd1.setSecond(10);
        
        rd2.setYear(1968);
        rd2.setMonth(7);
        rd2.setDayOfMonth(23);
        rd2.setHour(8);
        rd2.setMinute(30);
        rd2.setSecond(11);
        
        assertTrue(rd2.compareTo(rd1) > 0);
    }

    public void testCompareEquals()
    {
        RelativeDate rd1 = new RelativeDate();
        assertNotNull(rd1);
        RelativeDate rd2 = new RelativeDate();
        assertNotNull(rd2);
        
        rd1.setYear(1968);
        rd1.setMonth(7);
        rd1.setDayOfMonth(23);
        rd1.setHour(8);
        rd1.setMinute(30);
        rd1.setSecond(10);
        
        rd2.setYear(1968);
        rd2.setMonth(7);
        rd2.setDayOfMonth(23);
        rd2.setHour(8);
        rd2.setMinute(30);
        rd2.setSecond(10);
        
        assertEquals(0, rd2.compareTo(rd1));
        assertEquals(0, rd1.compareTo(rd2));
    }

    public void testCompareLessThanEmpty()
    {
        RelativeDate rd1 = new RelativeDate();
        assertNotNull(rd1);
        RelativeDate rd2 = new RelativeDate();
        assertNotNull(rd2);
        
        rd1.setYear(1968);
        rd1.setMonth(7);
        rd1.setDayOfMonth(23);
        rd1.setHour(8);
        rd1.setMinute(30);
        rd1.setSecond(10);
        
        assertTrue(rd2.compareTo(rd1) > 0);
    }

    public void testCompareGreaterThanEmpty()
    {
        RelativeDate rd1 = new RelativeDate();
        assertNotNull(rd1);
        RelativeDate rd2 = new RelativeDate();
        assertNotNull(rd2);
        
        rd1.setYear(1968);
        rd1.setMonth(7);
        rd1.setDayOfMonth(23);
        rd1.setHour(8);
        rd1.setMinute(30);
        rd1.setSecond(10);
        
        assertTrue(rd1.compareTo(rd2) < 0);
    }

    public void testCompareEqualsEmpty()
    {
        RelativeDate rd1 = new RelativeDate();
        assertNotNull(rd1);
        RelativeDate rd2 = new RelativeDate();
        assertNotNull(rd2);
        
        assertEquals(0, rd2.compareTo(rd1));
        assertEquals(0, rd1.compareTo(rd2));
    }

    public void testClone()
    {
        RelativeDate rd = new RelativeDate();
        assertNotNull(rd);
        
        String[] fields = {
            "1920",
            "Feb",
            "20",
            "2:00:23u"
        };
        
        rd.parse(fields, 0);
        
        RelativeDate newrd = rd.clone();
        
        assertEquals(1920, newrd.getYear());
        assertEquals(1, newrd.getMonth());
        assertEquals(20, newrd.getDayOfMonth());
        assertEquals(-1, newrd.getDayOfWeek());
        assertEquals(2, newrd.getHour());
        assertEquals(0, newrd.getMinute());
        assertEquals(23, newrd.getSecond());
        assertEquals('u', newrd.getZoneChar());
        assertEquals(StartRule.EQUAL, newrd.getRule());
    }

    public void testCloneWithRule()
    {
        RelativeDate oldrd = new RelativeDate();
        assertNotNull(oldrd);
        
        String[] fields = {
            "1920",
            "Feb",
            "Thu<=8"
        };
        
        oldrd.parse(fields, 0);
        
        RelativeDate rd = oldrd.clone();
        
        assertEquals(1920, rd.getYear());
        assertEquals(1, rd.getMonth());
        assertEquals(8, rd.getDayOfMonth());
        assertEquals(4, rd.getDayOfWeek());
        assertEquals(-1, rd.getHour());
        assertEquals(-1, rd.getMinute());
        assertEquals(-1, rd.getSecond());
        assertEquals('w', rd.getZoneChar());
        assertEquals(StartRule.LESS, rd.getRule());
    }
    
    public void testOffsetToWallTimeHoursOnly()
    {
        RelativeDate rd = new RelativeDate();
        assertNotNull(rd);
        
        String[] fields = {
            "1920",
            "Feb",
            "20",
            "20:00:23u"
        };
        
        rd.parse(fields, 0);
        
        assertEquals(1920, rd.getYear());
        assertEquals(1, rd.getMonth());
        assertEquals(20, rd.getDayOfMonth());
        assertEquals(-1, rd.getDayOfWeek());
        assertEquals(20, rd.getHour());
        assertEquals(0, rd.getMinute());
        assertEquals(23, rd.getSecond());
        assertEquals('u', rd.getZoneChar());
        assertEquals(StartRule.EQUAL, rd.getRule());
        
        rd.offsetToWallTime(2, 0, 0, 0);

        assertEquals(1920, rd.getYear());
        assertEquals(1, rd.getMonth());
        assertEquals(20, rd.getDayOfMonth());
        assertEquals(-1, rd.getDayOfWeek());
        assertEquals(22, rd.getHour());
        assertEquals(0, rd.getMinute());
        assertEquals(23, rd.getSecond());
        assertEquals('w', rd.getZoneChar());
        assertEquals(StartRule.EQUAL, rd.getRule());
    }
    
    public void testOffsetToWallTimeHoursAndMinutes()
    {
        RelativeDate rd = new RelativeDate();
        assertNotNull(rd);
        
        String[] fields = {
            "1920",
            "Feb",
            "20",
            "20:00:00u"
        };
        
        rd.parse(fields, 0);
        
        assertEquals(1920, rd.getYear());
        assertEquals(1, rd.getMonth());
        assertEquals(20, rd.getDayOfMonth());
        assertEquals(-1, rd.getDayOfWeek());
        assertEquals(20, rd.getHour());
        assertEquals(0, rd.getMinute());
        assertEquals(0, rd.getSecond());
        assertEquals('u', rd.getZoneChar());
        assertEquals(StartRule.EQUAL, rd.getRule());
        
        rd.offsetToWallTime(2, 15, 0, 0);

        assertEquals(1920, rd.getYear());
        assertEquals(1, rd.getMonth());
        assertEquals(20, rd.getDayOfMonth());
        assertEquals(-1, rd.getDayOfWeek());
        assertEquals(22, rd.getHour());
        assertEquals(15, rd.getMinute());
        assertEquals(0, rd.getSecond());
        assertEquals('w', rd.getZoneChar());
        assertEquals(StartRule.EQUAL, rd.getRule());
    }
    
    public void testOffsetToWallTimeNextDay()
    {
        RelativeDate rd = new RelativeDate();
        assertNotNull(rd);
        
        String[] fields = {
            "1920",
            "Feb",
            "20",
            "20:00:00u"
        };
        
        rd.parse(fields, 0);
        
        assertEquals(1920, rd.getYear());
        assertEquals(1, rd.getMonth());
        assertEquals(20, rd.getDayOfMonth());
        assertEquals(-1, rd.getDayOfWeek());
        assertEquals(20, rd.getHour());
        assertEquals(0, rd.getMinute());
        assertEquals(0, rd.getSecond());
        assertEquals('u', rd.getZoneChar());
        assertEquals(StartRule.EQUAL, rd.getRule());
        
        rd.offsetToWallTime(8, 0, 0, 0);

        assertEquals(1920, rd.getYear());
        assertEquals(1, rd.getMonth());
        assertEquals(21, rd.getDayOfMonth());
        assertEquals(-1, rd.getDayOfWeek());
        assertEquals(4, rd.getHour());
        assertEquals(0, rd.getMinute());
        assertEquals(0, rd.getSecond());
        assertEquals('w', rd.getZoneChar());
        assertEquals(StartRule.EQUAL, rd.getRule());
    }

    public void testOffsetToWallTimeNextMonth()
    {
        RelativeDate rd = new RelativeDate();
        assertNotNull(rd);
        
        String[] fields = {
            "1921",
            "Feb",
            "28",
            "20:00:00u"
        };
        
        rd.parse(fields, 0);
        
        assertEquals(1921, rd.getYear());
        assertEquals(1, rd.getMonth());
        assertEquals(28, rd.getDayOfMonth());
        assertEquals(-1, rd.getDayOfWeek());
        assertEquals(20, rd.getHour());
        assertEquals(0, rd.getMinute());
        assertEquals(0, rd.getSecond());
        assertEquals('u', rd.getZoneChar());
        assertEquals(StartRule.EQUAL, rd.getRule());
        
        rd.offsetToWallTime(8, 0, 0, 0);

        assertEquals(1921, rd.getYear());
        assertEquals(2, rd.getMonth());
        assertEquals(1, rd.getDayOfMonth());
        assertEquals(-1, rd.getDayOfWeek());
        assertEquals(4, rd.getHour());
        assertEquals(0, rd.getMinute());
        assertEquals(0, rd.getSecond());
        assertEquals('w', rd.getZoneChar());
        assertEquals(StartRule.EQUAL, rd.getRule());
    }

    public void testOffsetToWallTimeNextYear()
    {
        RelativeDate rd = new RelativeDate();
        assertNotNull(rd);
        
        String[] fields = {
            "1921",
            "Dec",
            "31",
            "20:00:00u"
        };
        
        rd.parse(fields, 0);
        
        assertEquals(1921, rd.getYear());
        assertEquals(11, rd.getMonth());
        assertEquals(31, rd.getDayOfMonth());
        assertEquals(-1, rd.getDayOfWeek());
        assertEquals(20, rd.getHour());
        assertEquals(0, rd.getMinute());
        assertEquals(0, rd.getSecond());
        assertEquals('u', rd.getZoneChar());
        assertEquals(StartRule.EQUAL, rd.getRule());
        
        rd.offsetToWallTime(8, 0, 0, 0);

        assertEquals(1922, rd.getYear());
        assertEquals(0, rd.getMonth());
        assertEquals(1, rd.getDayOfMonth());
        assertEquals(-1, rd.getDayOfWeek());
        assertEquals(4, rd.getHour());
        assertEquals(0, rd.getMinute());
        assertEquals(0, rd.getSecond());
        assertEquals('w', rd.getZoneChar());
        assertEquals(StartRule.EQUAL, rd.getRule());
    }

    public void testOffsetToWallTimeLastRule()
    {
        RelativeDate rd = new RelativeDate();
        assertNotNull(rd);
        
        String[] fields = {
            "1920",
            "Feb",
            "lastWed"
        };
        
        rd.parse(fields, 0);
        
        assertEquals(1920, rd.getYear());
        assertEquals(1, rd.getMonth());
        assertEquals(-1, rd.getDayOfMonth());
        assertEquals(3, rd.getDayOfWeek());
        assertEquals(-1, rd.getHour());
        assertEquals(-1, rd.getMinute());
        assertEquals(-1, rd.getSecond());
        assertEquals('w', rd.getZoneChar());
        assertEquals(StartRule.LAST, rd.getRule());
        
        rd.offsetToWallTime(8, 0, 0, 0);

        // should be no change
        assertEquals(1920, rd.getYear());
        assertEquals(1, rd.getMonth());
        assertEquals(-1, rd.getDayOfMonth());
        assertEquals(3, rd.getDayOfWeek());
        assertEquals(-1, rd.getHour());
        assertEquals(-1, rd.getMinute());
        assertEquals(-1, rd.getSecond());
        assertEquals('w', rd.getZoneChar());
        assertEquals(StartRule.LAST, rd.getRule());
    }

    public void testOffsetToWallTimeLastRuleWithBogusZonechar()
    {
        RelativeDate rd = new RelativeDate();
        assertNotNull(rd);
        
        String[] fields = {
            "1920",
            "Feb",
            "lastWed"
        };
        
        rd.parse(fields, 0);
        
        rd.setZoneChar('u');
        
        assertEquals(1920, rd.getYear());
        assertEquals(1, rd.getMonth());
        assertEquals(-1, rd.getDayOfMonth());
        assertEquals(3, rd.getDayOfWeek());
        assertEquals(-1, rd.getHour());
        assertEquals(-1, rd.getMinute());
        assertEquals(-1, rd.getSecond());
        assertEquals('u', rd.getZoneChar());
        assertEquals(StartRule.LAST, rd.getRule());
        
        rd.offsetToWallTime(8, 0, 0, 0);

        // should be no change in the values, but the zone 
        // char should be set back again
        assertEquals(1920, rd.getYear());
        assertEquals(1, rd.getMonth());
        assertEquals(-1, rd.getDayOfMonth());
        assertEquals(3, rd.getDayOfWeek());
        assertEquals(-1, rd.getHour());
        assertEquals(-1, rd.getMinute());
        assertEquals(-1, rd.getSecond());
        assertEquals('w', rd.getZoneChar());
        assertEquals(StartRule.LAST, rd.getRule());
    }

    public void testOffsetToWallTimeLastRuleWithUTCZonechar()
    {
        RelativeDate rd = new RelativeDate();
        assertNotNull(rd);
        
        String[] fields = {
            "1920",
            "Feb",
            "lastWed",
            "2:00u"
        };
        
        rd.parse(fields, 0);
        
        assertEquals(1920, rd.getYear());
        assertEquals(1, rd.getMonth());
        assertEquals(-1, rd.getDayOfMonth());
        assertEquals(3, rd.getDayOfWeek());
        assertEquals(2, rd.getHour());
        assertEquals(0, rd.getMinute());
        assertEquals(-1, rd.getSecond());
        assertEquals('u', rd.getZoneChar());
        assertEquals(StartRule.LAST, rd.getRule());
        
        rd.offsetToWallTime(1, 0, 0, 0);

        // should be no change in the values, but the zone 
        // char should be set back again
        assertEquals(1920, rd.getYear());
        assertEquals(1, rd.getMonth());
        assertEquals(-1, rd.getDayOfMonth());
        assertEquals(3, rd.getDayOfWeek());
        assertEquals(3, rd.getHour());
        assertEquals(0, rd.getMinute());
        assertEquals(-1, rd.getSecond());
        assertEquals('w', rd.getZoneChar());
        assertEquals(StartRule.LAST, rd.getRule());
    }

    public void testOffsetToWallTimeLastRuleWithUTCZonecharPrevDay()
    {
        RelativeDate rd = new RelativeDate();
        assertNotNull(rd);
        
        String[] fields = {
            "1920",
            "Feb",
            "lastWed",
            "2:00u"
        };
        
        rd.parse(fields, 0);
        
        assertEquals(1920, rd.getYear());
        assertEquals(1, rd.getMonth());
        assertEquals(-1, rd.getDayOfMonth());
        assertEquals(3, rd.getDayOfWeek());
        assertEquals(2, rd.getHour());
        assertEquals(0, rd.getMinute());
        assertEquals(-1, rd.getSecond());
        assertEquals('u', rd.getZoneChar());
        assertEquals(StartRule.LAST, rd.getRule());
        
        rd.offsetToWallTime(-4, 0, 0, 0);

        assertEquals(1920, rd.getYear());
        assertEquals(1, rd.getMonth());
        assertEquals(-1, rd.getDayOfMonth());
        assertEquals(2, rd.getDayOfWeek());
        assertEquals(22, rd.getHour());
        assertEquals(0, rd.getMinute());
        assertEquals(-1, rd.getSecond());
        assertEquals('w', rd.getZoneChar());
        assertEquals(StartRule.LAST, rd.getRule());
    }

    public void testOffsetToWallTimeLastRuleWithUTCZonecharPrevDayWrapDown()
    {
        RelativeDate rd = new RelativeDate();
        assertNotNull(rd);
        
        String[] fields = {
            "1920",
            "Feb",
            "lastSun",
            "2:00u"
        };
        
        rd.parse(fields, 0);
        
        assertEquals(1920, rd.getYear());
        assertEquals(1, rd.getMonth());
        assertEquals(-1, rd.getDayOfMonth());
        assertEquals(0, rd.getDayOfWeek());
        assertEquals(2, rd.getHour());
        assertEquals(0, rd.getMinute());
        assertEquals(-1, rd.getSecond());
        assertEquals('u', rd.getZoneChar());
        assertEquals(StartRule.LAST, rd.getRule());
        
        rd.offsetToWallTime(-4, 0, 0, 0);

        assertEquals(1920, rd.getYear());
        assertEquals(1, rd.getMonth());
        assertEquals(-1, rd.getDayOfMonth());
        assertEquals(6, rd.getDayOfWeek());
        assertEquals(22, rd.getHour());
        assertEquals(0, rd.getMinute());
        assertEquals(-1, rd.getSecond());
        assertEquals('w', rd.getZoneChar());
        assertEquals(StartRule.LAST, rd.getRule());
    }

    public void testOffsetToWallTimeLastRuleWithUTCZonecharPrevDayWrapUp()
    {
        RelativeDate rd = new RelativeDate();
        assertNotNull(rd);
        
        String[] fields = {
            "1920",
            "Feb",
            "lastSat",
            "22:00u"
        };
        
        rd.parse(fields, 0);
        
        assertEquals(1920, rd.getYear());
        assertEquals(1, rd.getMonth());
        assertEquals(-1, rd.getDayOfMonth());
        assertEquals(6, rd.getDayOfWeek());
        assertEquals(22, rd.getHour());
        assertEquals(0, rd.getMinute());
        assertEquals(-1, rd.getSecond());
        assertEquals('u', rd.getZoneChar());
        assertEquals(StartRule.LAST, rd.getRule());
        
        rd.offsetToWallTime(4, 0, 0, 0);

        assertEquals(1920, rd.getYear());
        assertEquals(1, rd.getMonth());
        assertEquals(-1, rd.getDayOfMonth());
        assertEquals(0, rd.getDayOfWeek());
        assertEquals(2, rd.getHour());
        assertEquals(0, rd.getMinute());
        assertEquals(-1, rd.getSecond());
        assertEquals('w', rd.getZoneChar());
        assertEquals(StartRule.LAST, rd.getRule());
    }

    public void testOffsetToWallTimeRelativeRule()
    {
        RelativeDate rd = new RelativeDate();
        assertNotNull(rd);
        
        String[] fields = {
            "",
            "Feb",
            "Thu>=8"
        };
        
        rd.parse(fields, 0);
        
        assertEquals(-1, rd.getYear());
        assertEquals(1, rd.getMonth());
        assertEquals(8, rd.getDayOfMonth());
        assertEquals(4, rd.getDayOfWeek());
        assertEquals(-1, rd.getHour());
        assertEquals(-1, rd.getMinute());
        assertEquals(-1, rd.getSecond());
        assertEquals('w', rd.getZoneChar());
        assertEquals(StartRule.GREATER, rd.getRule());
        
        rd.offsetToWallTime(8, 0, 0, 0);

        // should be no change because the transition time 
        // is not given
        assertEquals(-1, rd.getYear());
        assertEquals(1, rd.getMonth());
        assertEquals(8, rd.getDayOfMonth());
        assertEquals(4, rd.getDayOfWeek());
        assertEquals(-1, rd.getHour());
        assertEquals(-1, rd.getMinute());
        assertEquals(-1, rd.getSecond());
        assertEquals('w', rd.getZoneChar());
        assertEquals(StartRule.GREATER, rd.getRule());
    }
    
    public void testOffsetToWallTimeRelativeRuleWithStandardZoneChar()
    {
        RelativeDate rd = new RelativeDate();
        assertNotNull(rd);
        
        String[] fields = {
            "",
            "Feb",
            "Thu>=8",
            "1:00s"
        };
        
        rd.parse(fields, 0);
        
        assertEquals(-1, rd.getYear());
        assertEquals(1, rd.getMonth());
        assertEquals(8, rd.getDayOfMonth());
        assertEquals(4, rd.getDayOfWeek());
        assertEquals(1, rd.getHour());
        assertEquals(0, rd.getMinute());
        assertEquals(-1, rd.getSecond());
        assertEquals('s', rd.getZoneChar());
        assertEquals(StartRule.GREATER, rd.getRule());
        
        rd.offsetToWallTime(8, 0, 1, 0);

        // only change the transition time
        assertEquals(-1, rd.getYear());
        assertEquals(1, rd.getMonth());
        assertEquals(8, rd.getDayOfMonth());
        assertEquals(4, rd.getDayOfWeek());
        assertEquals(2, rd.getHour());
        assertEquals(0, rd.getMinute());
        assertEquals(-1, rd.getSecond());
        assertEquals('w', rd.getZoneChar());
        assertEquals(StartRule.GREATER, rd.getRule());
    }

    public void testOffsetToWallTimeRelativeRuleWithUTCZoneChar()
    {
        RelativeDate rd = new RelativeDate();
        assertNotNull(rd);
        
        String[] fields = {
            "",
            "Feb",
            "Thu>=8",
            "1:00u"
        };
        
        rd.parse(fields, 0);
        
        assertEquals(-1, rd.getYear());
        assertEquals(1, rd.getMonth());
        assertEquals(8, rd.getDayOfMonth());
        assertEquals(4, rd.getDayOfWeek());
        assertEquals(1, rd.getHour());
        assertEquals(0, rd.getMinute());
        assertEquals(-1, rd.getSecond());
        assertEquals('u', rd.getZoneChar());
        assertEquals(StartRule.GREATER, rd.getRule());
        
        rd.offsetToWallTime(1, 0, 0, 0);

        // only change the transition time
        assertEquals(-1, rd.getYear());
        assertEquals(1, rd.getMonth());
        assertEquals(8, rd.getDayOfMonth());
        assertEquals(4, rd.getDayOfWeek());
        assertEquals(2, rd.getHour());
        assertEquals(0, rd.getMinute());
        assertEquals(-1, rd.getSecond());
        assertEquals('w', rd.getZoneChar());
        assertEquals(StartRule.GREATER, rd.getRule());
    }

    public void testOffsetToWallTimeRelativeRuleWithUTCZoneCharPrevDay()
    {
        RelativeDate rd = new RelativeDate();
        assertNotNull(rd);
        
        String[] fields = {
            "",
            "Feb",
            "Thu>=8",
            "2:00u"
        };
        
        rd.parse(fields, 0);
        
        assertEquals(-1, rd.getYear());
        assertEquals(1, rd.getMonth());
        assertEquals(8, rd.getDayOfMonth());
        assertEquals(4, rd.getDayOfWeek());
        assertEquals(2, rd.getHour());
        assertEquals(0, rd.getMinute());
        assertEquals(-1, rd.getSecond());
        assertEquals('u', rd.getZoneChar());
        assertEquals(StartRule.GREATER, rd.getRule());
        
        rd.offsetToWallTime(-8, 0, 0, 0);

        assertEquals(-1, rd.getYear());
        assertEquals(1, rd.getMonth());
        assertEquals(7, rd.getDayOfMonth());
        assertEquals(4, rd.getDayOfWeek());
        assertEquals(18, rd.getHour());
        assertEquals(0, rd.getMinute());
        assertEquals(-1, rd.getSecond());
        assertEquals('w', rd.getZoneChar());
        assertEquals(StartRule.GREATER, rd.getRule());
    }

}
