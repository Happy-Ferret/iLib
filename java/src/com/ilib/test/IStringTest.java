/**
 * IStringTest.java - set the international string class 
 * 
 * Copyright 2013, JEDLSoft, All Rights Reserved.
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
 * 
 * Created on Jan 4, 2013 by edwin
 */
package com.ilib.test;

import java.text.ParseException;
import java.util.HashMap;
import java.util.Map;

import junit.framework.TestCase;

import org.json.JSONException;
import org.json.JSONObject;

import com.ilib.IString;

/**
 * IStringTest
 * 
 * @author edwin
 */
public class IStringTest
    extends TestCase
{

    public void testStringConstructorFull() {
        IString str = new IString("test test test");
        
        assertNotNull(str);

        assertEquals(14, str.length());
        assertEquals("test test test", str.toString());
    }

    public void testStringFormatNoArgs() {
        IString str = new IString("Format this string.");
        
        assertNotNull(str);
        
        assertEquals("Format this string.", str.format((Map<String,String>)null));
    }

    public void testStringFormatEmpty() {
        IString str = new IString("");
        
        assertNotNull(str);
        
        assertEquals("", str.format((Map<String,String>)null));
    }

    public void testStringFormatEmptyWithArgs() {
        IString str = new IString("");
        assertNotNull(str);
        
        HashMap<String,String> values = new HashMap<String,String>();
        values.put("test", "Foo");  

        assertEquals("", str.format(values));
    }

    public void testStringFormatWithArg() {
        IString str = new IString("Format {size} string.");
        
        assertNotNull(str);
        
        HashMap<String,String> values = new HashMap<String,String>();
        values.put("size", "medium");  

        assertEquals("Format medium string.", str.format(values));
    }

    public void testStringFormatWithMultipleArgs() {
        IString str = new IString("Format {size} {object}.");
        
        assertNotNull(str);
        
        HashMap<String,String> values = new HashMap<String,String>();
        values.put("size", "medium");  
        values.put("object", "string");

        assertEquals("Format medium string.", str.format(values));
    }

    public void testStringFormatWithMissingArgs() {
        IString str = new IString("Format {size} {object}.");
        
        assertNotNull(str);
        
        HashMap<String,String> values = new HashMap<String,String>();
        values.put("object", "string");

        assertEquals("Format {size} string.", str.format(values));
    }

    public void testStringFormatWithEmptyArg() {
        IString str = new IString("Format {size} string.");
        
        assertNotNull(str);
        
        HashMap<String,String> values = new HashMap<String,String>();
        values.put("size", "");  

        assertEquals("Format  string.", str.format(values));
    }

    public void testStringFormatHandleNonAsciiParam() {
        IString str = new IString("Format {size} string.");
        
        assertNotNull(str);
        
        HashMap<String,String> values = new HashMap<String,String>();
        values.put("size", "médïûm");

        assertEquals("Format médïûm string.", str.format(values));
    }

    public void testStringFormatHandleNonAsciiReplacement() {
        IString str = new IString("Format {sïzé} string.");
        
        assertNotNull(str);
        
        HashMap<String,String> values = new HashMap<String,String>();
        values.put("sïzé", "medium");

        assertEquals("Format medium string.", str.format(values));
    }

    public void testStringFormatMultipleReplacements() {
        IString str = new IString("User {user} has {num} objects in their {container}.");
        
        assertNotNull(str);
        
        HashMap<String,String> values = new HashMap<String,String>();
        values.put("user", "edwin");
        values.put("num", Integer.toString(2));
        values.put("container", "locker");

        assertEquals("User edwin has 2 objects in their locker.", str.format(values));
    }

    public void testStringFormatWithArgJSON() {
        IString str = new IString("Format {size} string.");
        
        assertNotNull(str);
        
        JSONObject json = null;
        try {
            json = new JSONObject("{\"size\":\"medium\"}");
        } catch ( JSONException e ) {
            e.printStackTrace();
            fail();
        }
        
        assertEquals("Format medium string.", str.format(json));
    }

    public void testStringFormatWithMultipleArgsJSON() {
        IString str = new IString("Format {size} {object}.");
        
        assertNotNull(str);
        
        JSONObject json = null;
        try {
            json = new JSONObject("{\"size\":\"medium\",\"object\":\"string\"}");
        } catch ( JSONException e ) {
            e.printStackTrace();
            fail();
        }
        
        assertEquals("Format medium string.", str.format(json));
    }

    public void testStringFormatWithMissingArgsJSON() {
        IString str = new IString("Format {size} {object}.");
        
        assertNotNull(str);
        
        JSONObject json = null;
        try {
            json = new JSONObject("{\"object\":\"string\"}");
        } catch ( JSONException e ) {
            e.printStackTrace();
            fail();
        }
        
        assertEquals("Format {size} string.", str.format(json));
    }

    public void testStringFormatWithEmptyArgJSON() {
        IString str = new IString("Format {size} string.");
        
        assertNotNull(str);
        
        JSONObject json = null;
        try {
            json = new JSONObject("{\"size\":\"\"}");
        } catch ( JSONException e ) {
            e.printStackTrace();
            fail();
        }
        
        assertEquals("Format  string.", str.format(json));
    }

    public void testStringFormatHandleNonAsciiParamJSON() {
        IString str = new IString("Format {size} string.");
        
        assertNotNull(str);
        
        JSONObject json = null;
        try {
            json = new JSONObject("{\"size\":\"médïûm\"}");
        } catch ( JSONException e ) {
            e.printStackTrace();
            fail();
        }
        
        assertEquals("Format médïûm string.", str.format(json));
    }

    public void testStringFormatHandleNonAsciiReplacementJSON() {
        IString str = new IString("Format {sïzé} string.");
        
        assertNotNull(str);
        
        JSONObject json = null;
        try {
            json = new JSONObject("{\"sïzé\":\"medium\"}");
        } catch ( JSONException e ) {
            e.printStackTrace();
            fail();
        }
        
        assertEquals("Format medium string.", str.format(json));
    }

    public void testStringFormatMultipleReplacementsJSON() {
        IString str = new IString("User {user} has {num} objects in their {container}.");
        
        assertNotNull(str);
        
        try {
            JSONObject json = new JSONObject("{user:\"edwin\",num:2,container:\"locker\"}");
        
            assertEquals("User edwin has 2 objects in their locker.", str.format(json));
        } catch ( Exception e ) {
            e.printStackTrace();
            fail();
        }
    }

    public void testStringFormatChoiceSimple1() {
        IString str = new IString("1#first string|2#second string");
        
        assertNotNull(str);
        
        try {
            assertEquals("first string", str.formatChoice(1, (Map<String,String>)null));
        } catch ( ParseException e ) {
            e.printStackTrace();
            fail();
        }
    }

    public void testStringFormatChoiceSimple2() {
        IString str = new IString("1#first string|2#second string");
        
        assertNotNull(str);
        
        try {
            assertEquals("second string", str.formatChoice(2, (Map<String,String>)null));
        } catch ( ParseException e ) {
            e.printStackTrace();
            fail();
        }
    }

    public void testStringFormatChoiceDouble1() {
        IString str = new IString("1#first string|2#second string");
        
        assertNotNull(str);
        
        try {
            assertEquals("first string", str.formatChoice(1));
        } catch ( ParseException e ) {
            e.printStackTrace();
            fail();
        }
    }

    public void testStringFormatChoiceDouble2() {
        IString str = new IString("1#first string|2#second string");
        
        assertNotNull(str);
        
        try {
            assertEquals("second string", str.formatChoice(2));
        } catch ( ParseException e ) {
            e.printStackTrace();
            fail();
        }
    }

    public void testStringFormatChoiceOnlyOneChoicePositive() {
        IString str = new IString("1#first string");
        
        assertNotNull(str);
        
        try {
            assertEquals("first string", str.formatChoice(1, (Map<String,String>)null));
        } catch ( ParseException e ) {
            e.printStackTrace();
            fail();
        }
    }

    public void testStringFormatChoiceOnlyOneChoiceDoubleNegative() {
        IString str = new IString("1#first string");
        
        assertNotNull(str);
        
        try {
            assertEquals("", str.formatChoice(2));
        } catch ( ParseException e ) {
            e.printStackTrace();
            fail();
        }
    }
    
    public void testStringFormatChoiceOnlyOneChoiceDoublePositive() {
        IString str = new IString("1#first string");
        
        assertNotNull(str);
        
        try {
            assertEquals("first string", str.formatChoice(1));
        } catch ( ParseException e ) {
            e.printStackTrace();
            fail();
        }
    }

    public void testStringFormatChoiceOnlyOneChoiceNegative() {
        IString str = new IString("1#first string");
        
        assertNotNull(str);
        
        try {
            assertEquals("", str.formatChoice(2, (Map<String,String>)null));
        } catch ( ParseException e ) {
            e.printStackTrace();
            fail();
        }
    }

    public void testStringFormatChoiceNoString() {
        IString str = new IString("");
        
        assertNotNull(str);
        
        try {
            assertEquals("", str.formatChoice(2, (Map<String,String>)null));
        } catch ( ParseException e ) {
            e.printStackTrace();
            fail();
        }
    }

    public void testStringFormatChoiceSimpleNoMatch() {
        IString str = new IString("1#first string|2#second string");
        
        assertNotNull(str);
        
        try {
            assertEquals("", str.formatChoice(3, (Map<String,String>)null));
        } catch ( ParseException e ) {
            e.printStackTrace();
            fail();
        }
    }

    public void testStringFormatChoiceDoubleNoString() {
        IString str = new IString("");
        
        assertNotNull(str);
        
        try {
            assertEquals("", str.formatChoice(2));
        } catch ( ParseException e ) {
            e.printStackTrace();
            fail();
        }
    }

    public void testStringFormatChoiceDoubleNoMatch() {
        IString str = new IString("1#first string|2#second string");
        
        assertNotNull(str);
        
        try {
            assertEquals("", str.formatChoice(3));
        } catch ( ParseException e ) {
            e.printStackTrace();
            fail();
        }
    }

    public void testStringFormatChoiceSimpleDefault() {
        IString str = new IString("1#first string|2#second string|#other string");
        
        assertNotNull(str);
        
        try {
            assertEquals("other string", str.formatChoice(3, (Map<String,String>)null));
        } catch ( ParseException e ) {
            e.printStackTrace();
            fail();
        }
    }

    public void testStringFormatChoiceLessThanOrEqualPositive() {
        IString str = new IString("<=2#first string|3#second string|#other string");
        
        assertNotNull(str);
        
        try {
            assertEquals("first string", str.formatChoice(1, (Map<String,String>)null));
        } catch ( ParseException e ) {
            e.printStackTrace();
            fail();
        }
   }

    public void testStringFormatChoiceLessThanOrEqualEqual() {
        IString str = new IString("<=2#first string|3#second string|#other string");
        
        assertNotNull(str);
        
        try {
            assertEquals("first string", str.formatChoice(2, (Map<String,String>)null));
        } catch ( ParseException e ) {
            e.printStackTrace();
            fail();
        }
    }
    
    public void testStringFormatChoiceDoubleDefault() {
        IString str = new IString("1#first string|2#second string|#other string");
        
        assertNotNull(str);
        
        try {
            assertEquals("other string", str.formatChoice(3));
        } catch ( ParseException e ) {
            e.printStackTrace();
            fail();
        }
    }

    public void testStringFormatChoiceLessThanOrEqualDoublePositive() {
        IString str = new IString("<=2#first string|3#second string|#other string");
        
        assertNotNull(str);
        
        try {
            assertEquals("first string", str.formatChoice(1));
        } catch ( ParseException e ) {
            e.printStackTrace();
            fail();
        }
   }

    public void testStringFormatChoiceDoubleLessThanOrEqualEqual() {
        IString str = new IString("<=2#first string|3#second string|#other string");
        
        assertNotNull(str);
        
        try {
            assertEquals("first string", str.formatChoice(2));
        } catch ( ParseException e ) {
            e.printStackTrace();
            fail();
        }
    }

    public void testStringFormatChoiceLessThanOrEqualNotLessThan() {
        IString str = new IString("<=2#first string|3#second string|#other string");
        
        assertNotNull(str);
        
        try {
            assertEquals("second string", str.formatChoice(3, (Map<String,String>)null));
        } catch ( ParseException e ) {
            e.printStackTrace();
            fail();
        }
    }

    public void testStringFormatChoiceGreaterThanOrEqualPositive() {
        IString str = new IString(">=2#first string|1#second string|#other string");
        
        assertNotNull(str);
        
        try {
            assertEquals("first string", str.formatChoice(4, (Map<String,String>)null));
        } catch ( ParseException e ) {
            e.printStackTrace();
            fail();
        }
    }

    public void testStringFormatChoiceGreaterThanOrEqualEqual() {
        IString str = new IString(">=2#first string|1#second string|#other string");
        
        assertNotNull(str);
        
        try {
            assertEquals("first string", str.formatChoice(2, (Map<String,String>)null));
        } catch ( ParseException e ) {
            e.printStackTrace();
            fail();
        }
    }

    public void testStringFormatChoiceGreaterThanOrEqualNotLessThan() {
        IString str = new IString(">=2#first string|1#second string|#other string");
        
        assertNotNull(str);
        
        try {
            assertEquals("second string", str.formatChoice(1, (Map<String,String>)null));
        } catch ( ParseException e ) {
            e.printStackTrace();
            fail();
        }
    }

    public void testStringFormatChoiceLessThanPositive() {
        IString str = new IString("<2#first string|3#second string|#other string");
        
        assertNotNull(str);
        
        try {
            assertEquals("first string", str.formatChoice(1, (Map<String,String>)null));
        } catch ( ParseException e ) {
            e.printStackTrace();
            fail();
        }
    }

    public void testStringFormatChoiceLessThanEqual() {
        IString str = new IString("<2#first string|3#second string|#other string");
        
        assertNotNull(str);
        
        try {
            assertEquals("other string", str.formatChoice(2, (Map<String,String>)null));
        } catch ( ParseException e ) {
            e.printStackTrace();
            fail();
        }
    }

    public void testStringFormatChoiceLessThanNotLessThan() {
        IString str = new IString("<2#first string|3#second string|#other string");
        
        assertNotNull(str);
        
        try {
            assertEquals("second string", str.formatChoice(3, (Map<String,String>)null));
        } catch ( ParseException e ) {
            e.printStackTrace();
            fail();
        }
    }

    public void testStringFormatChoiceGreaterThanPositive() {
        IString str = new IString(">2#first string|1#second string|#other string");
        
        assertNotNull(str);
        
        try {
            assertEquals("first string", str.formatChoice(4, (Map<String,String>)null));
        } catch ( ParseException e ) {
            e.printStackTrace();
            fail();
        }
    }

    public void testStringFormatChoiceGreaterThanEqual() {
        IString str = new IString(">2#first string|1#second string|#other string");
        
        assertNotNull(str);

        try {
            assertEquals("other string", str.formatChoice(2, (Map<String,String>)null));
        } catch ( ParseException e ) {
            e.printStackTrace();
            fail();
        }
    }

    public void testStringFormatChoiceGreaterThanNotLessThan() {
        IString str = new IString(">2#first string|1#second string|#other string");
        
        assertNotNull(str);
        
        try {
            assertEquals("second string", str.formatChoice(1, (Map<String,String>)null));
        } catch ( ParseException e ) {
            e.printStackTrace();
            fail();
        }
    }

    public void testStringFormatRange1() {
        IString str = new IString("0-2#first string {num}|3-5#second string {num}|#other string {num}");
        
        assertNotNull(str);
        
        int num = 1;
        HashMap<String,String> values = new HashMap<String,String>();
        values.put("num", Integer.toString(num));

        try {
            assertEquals("first string 1", str.formatChoice(num, values));
        } catch ( ParseException e ) {
            e.printStackTrace();
            fail();
        }
    }

    public void testStringFormatRange4() {
        IString str = new IString("0-2#first string {num}|3-5#second string {num}|#other string {num}");
        
        assertNotNull(str);
        
        int num = 4;
        HashMap<String,String> values = new HashMap<String,String>();
        values.put("num", Integer.toString(num));

        try {
            assertEquals("second string 4", str.formatChoice(num, values));
        } catch ( ParseException e ) {
            e.printStackTrace();
            fail();
        }
    }

    public void testStringFormatRange7() {
        IString str = new IString("0-2#first string {num}|3-5#second string {num}|#other string {num}");
        
        assertNotNull(str);
        
        int num = 7;
        HashMap<String,String> values = new HashMap<String,String>();
        values.put("num", Integer.toString(num));

        try {
            assertEquals("other string 7", str.formatChoice(num, values));
        } catch ( ParseException e ) {
            e.printStackTrace();
            fail();
        }
    }

    public void testStringFormatRange1JSON() {
        IString str = new IString("0-2#first string {num}|3-5#second string {num}|#other string {num}");
        
        assertNotNull(str);
        JSONObject json = null;
        try {
            json = new JSONObject("{\"num\":\"1\"}");
        } catch ( JSONException e ) {
            e.printStackTrace();
            fail();
        }
        
        try {
            assertEquals("first string 1", str.formatChoice(1, json));
        } catch ( ParseException e ) {
            e.printStackTrace();
            fail();
        }
    }

    public void testStringFormatRange4JSON() {
        IString str = new IString("0-2#first string {num}|3-5#second string {num}|#other string {num}");
        
        assertNotNull(str);
        
        assertNotNull(str);
        JSONObject json = null;
        try {
            json = new JSONObject("{\"num\":\"4\"}");
        } catch ( JSONException e ) {
            e.printStackTrace();
            fail();
        }
        
        try {
            assertEquals("second string 4", str.formatChoice(4, json));
        } catch ( ParseException e ) {
            e.printStackTrace();
            fail();
        }
    }

    public void testStringFormatRange7JSON() {
        IString str = new IString("0-2#first string {num}|3-5#second string {num}|#other string {num}");
        
        assertNotNull(str);
        
        JSONObject json = null;
        try {
            json = new JSONObject("{\"num\":\"7\"}");
        } catch ( JSONException e ) {
            e.printStackTrace();
            fail();
        }
        
        try {
            assertEquals("other string 7", str.formatChoice(7, json));
        } catch ( ParseException e ) {
            e.printStackTrace();
            fail();
        }
    }

    public void testStringFormatChoiceBooleanTrue() {
        IString str = new IString("true#first string|false#second string");
        
        assertNotNull(str);
        
        try {
            assertEquals("first string", str.formatChoice(true, (Map<String,String>)null));
        } catch ( ParseException e ) {
            e.printStackTrace();
            fail();
        }
    }

    public void testStringFormatChoiceBooleanFalse() {
        IString str = new IString("true#first string|false#second string");
        
        assertNotNull(str);
        
        try {
            assertEquals("second string", str.formatChoice(false, (Map<String,String>)null));
        } catch ( ParseException e ) {
            e.printStackTrace();
            fail();
        }
    }

    public void testStringFormatChoiceBooleanTrueAsInteger() {
        IString str = new IString("true#first string|false#second string");
        
        assertNotNull(str);
        
        try {
            assertEquals("first string", str.formatChoice(1, (Map<String,String>)null));
        } catch ( ParseException e ) {
            e.printStackTrace();
            fail();
        }
    }

    public void testStringFormatChoiceBooleanFalseAsInteger() {
        IString str = new IString("true#first string|false#second string");
        
        assertNotNull(str);
        
        try {
            assertEquals("second string", str.formatChoice(0, (Map<String,String>)null));
        } catch ( ParseException e ) {
            e.printStackTrace();
            fail();
        }
    }

    public void testStringFormatChoiceBooleanMissing() {
        IString str = new IString("true#first string");
        
        assertNotNull(str);
        
        try {
            assertEquals("", str.formatChoice(false, (Map<String,String>)null));
        } catch ( ParseException e ) {
            e.printStackTrace();
            fail();
        }
    }

    public void testStringFormatChoiceBooleanWithParams() {
        IString str = new IString("true#first string {name}|false#second string {name}");
        
        assertNotNull(str);
        
        HashMap<String,String> values = new HashMap<String,String>();
        values.put("name", "joe");  

        try {
            assertEquals("second string joe", str.formatChoice(false, values));
        } catch ( ParseException e ) {
            e.printStackTrace();
            fail();
        }
    }

    public void testStringFormatChoiceBooleanWithParamsJSON() {
        IString str = new IString("true#first string {name}|false#second string {name}");
        
        assertNotNull(str);
        
        JSONObject json = null;
        try {
            json = new JSONObject("{\"name\":\"joe\"}");
        } catch ( JSONException e ) {
            e.printStackTrace();
            fail();
        }
        
        try {
            assertEquals("second string joe", str.formatChoice(false, json));
        } catch ( ParseException e ) {
            e.printStackTrace();
            fail();
        }
    }

    public void testStringFormatChoiceStringStaticA() {
        IString str = new IString("a#first string|b#second string|c#third string");
        
        assertNotNull(str);
        
        try {
            assertEquals("first string", str.formatChoice("a", (Map<String,String>)null));
        } catch ( ParseException e ) {
            e.printStackTrace();
            fail();
        }
    }

    public void testStringFormatChoiceStringStaticB() {
        IString str = new IString("a#first string|b#second string|c#third string");
        
        assertNotNull(str);
        
        try {
            assertEquals("second string", str.formatChoice("b", (Map<String,String>)null));
        } catch ( ParseException e ) {
            e.printStackTrace();
            fail();
        }
    }

    public void testStringFormatChoiceStringStaticC() {
        IString str = new IString("a#first string|b#second string|c#third string");
        
        assertNotNull(str);
        
        try {
            assertEquals("third string", str.formatChoice("c", (Map<String,String>)null));
        } catch ( ParseException e ) {
            e.printStackTrace();
            fail();
        }
    }

    public void testStringFormatChoiceStringIgnoreCase() {
        IString str = new IString("a#first string|b#second string|c#third string");
        
        assertNotNull(str);
        
        try {
            assertEquals("second string", str.formatChoice("B", (Map<String,String>)null));
        } catch ( ParseException e ) {
            e.printStackTrace();
            fail();
        }
    }

    public void testStringFormatChoiceRegExpA() {
        IString str = new IString("a.*b#first string|b.*c#second string|c+d#third string");
        
        assertNotNull(str);
        
        try {
            assertEquals("first string", str.formatChoice("acccb", (Map<String,String>)null));
        } catch ( ParseException e ) {
            e.printStackTrace();
            fail();
        }
    }

    public void testStringFormatChoiceRegExpB() {
        IString str = new IString("a.*b#first string|b.*c#second string|c+d#third string");
        
        assertNotNull(str);
        
        try {
            assertEquals("second string", str.formatChoice("bbccc", (Map<String,String>)null));
        } catch ( ParseException e ) {
            e.printStackTrace();
            fail();
        }
    }

    public void testStringFormatChoiceRegExpC() {
        IString str = new IString("a.*b#first string|b.*c#second string|c+d#third string");
        
        assertNotNull(str);
        
        try {
            assertEquals("third string", str.formatChoice("ccccd", (Map<String,String>)null));
        } catch ( ParseException e ) {
            e.printStackTrace();
            fail();
        }
    }

    public void testStringFormatChoiceRegExpDefault() {
        IString str = new IString("a.*b#first string|b.*c#second string|#third string");
        
        assertNotNull(str);
        
        try {
            assertEquals("third string", str.formatChoice("ccccd", (Map<String,String>)null));
        } catch ( ParseException e ) {
            e.printStackTrace();
            fail();
        }
    }

    public void testStringFormatChoiceRegExpMissing() {
        IString str = new IString("a.*b#first string|b.*c#second string|c+d#third string");
        
        assertNotNull(str);
        
        try {
            assertEquals("", str.formatChoice("efff", (Map<String,String>)null));
        } catch ( ParseException e ) {
            e.printStackTrace();
            fail();
        }
    }

    public void testStringFormatChoiceWithParams() {
        IString str = new IString("a.*b#first string {name}|b.*c#second string {name}|c+d#third string {name}");
        
        assertNotNull(str);
        
        HashMap<String,String> values = new HashMap<String,String>();
        values.put("name", "joe");  

        try {
            assertEquals("second string joe", str.formatChoice("bbccc", values));
        } catch ( ParseException e ) {
            e.printStackTrace();
            fail();
        }
    }

    public void testStringFormatChoiceWithParamsJSON() {
        IString str = new IString("a.*b#first string {name}|b.*c#second string {name}|c+d#third string {name}");
        
        assertNotNull(str);
        
        JSONObject json = null;
        try {
            json = new JSONObject("{\"name\":\"joe\"}");
        } catch ( JSONException e ) {
            e.printStackTrace();
            fail();
        }
        
        try {
            assertEquals("second string joe", str.formatChoice("bbccc", json));
        } catch ( ParseException e ) {
            e.printStackTrace();
            fail();
        }
    }

    public void testStringFormatChoiceWithReplacement0() {
        IString str = new IString("0#There are no strings.|1#There is one string.|#There are {num} strings.");
        
        assertNotNull(str);
        
        HashMap<String,String> values = new HashMap<String,String>();
        values.put("num", Integer.toString(0));  

        try {
            assertEquals("There are no strings.", str.formatChoice(0, values));
        } catch ( ParseException e ) {
            e.printStackTrace();
            fail();
        }
    }

    public void testStringFormatChoiceWithReplacement1() {
        IString str = new IString("0#There are no strings.|1#There is one string.|#There are {num} strings.");
        
        assertNotNull(str);
        
        HashMap<String,String> values = new HashMap<String,String>();
        values.put("num", Integer.toString(1));  

        try {
            assertEquals("There is one string.", str.formatChoice(1, values));
        } catch ( ParseException e ) {
            e.printStackTrace();
            fail();
        }
    }

    public void testStringFormatChoiceWithReplacement2() {
        IString str = new IString("0#There are no strings.|1#There is one string.|#There are {num} strings.");
        
        assertNotNull(str);
        
        HashMap<String,String> values = new HashMap<String,String>();
        values.put("num", Integer.toString(2));  

        try {
            assertEquals("There are 2 strings.", str.formatChoice(2, values));
        } catch ( ParseException e ) {
            e.printStackTrace();
            fail();
        }
    }

    public void testStringFormatChoiceWithMultipleReplacement0() {
        IString str = new IString("0#User {name} has no items.|1#User {name} has {num} item.|#User {name} has {num} items.");
        
        assertNotNull(str);
        
        HashMap<String,String> values = new HashMap<String,String>();
        values.put("name", "johndoe");  
        values.put("num", Integer.toString(0));
        
        try {
            assertEquals("User johndoe has no items.", str.formatChoice(0, values));
        } catch ( ParseException e ) {
            e.printStackTrace();
            fail();
        }
    }

    public void testStringFormatChoiceWithMultipleReplacement1() {
        IString str = new IString("0#User {name} has no items.|1#User {name} has {num} item.|#User {name} has {num} items.");
        
        assertNotNull(str);

        HashMap<String,String> values = new HashMap<String,String>();
        values.put("name", "johndoe");  
        values.put("num", Integer.toString(1));
        
        try {
            assertEquals("User johndoe has 1 item.", str.formatChoice(1, values));
        } catch ( ParseException e ) {
            e.printStackTrace();
            fail();
        }
    }

    public void testStringFormatChoiceWithMultipleReplacement2() {
        IString str = new IString("0#User {name} has no items.|1#User {name} has {num} item.|#User {name} has {num} items.");
        
        assertNotNull(str);
        
        HashMap<String,String> values = new HashMap<String,String>();
        values.put("name", "johndoe");  
        values.put("num", Integer.toString(2));
        
        try {
            assertEquals("User johndoe has 2 items.", str.formatChoice(2, values));
        } catch ( ParseException e ) {
            e.printStackTrace();
            fail();
        }
    }
    
    public void testStringFormatChoiceWithReplacement0JSON() {
        IString str = new IString("0#There are no strings.|1#There is one string.|#There are {num} strings.");
        
        assertNotNull(str);
        
        JSONObject json = null;
        try {
            json = new JSONObject("{\"num\":\"0\"}");
        } catch ( JSONException e ) {
            e.printStackTrace();
            fail();
        }
        
        try {
            assertEquals("There are no strings.", str.formatChoice(0, json));
        } catch ( ParseException e ) {
            e.printStackTrace();
            fail();
        }
    }

    public void testStringFormatChoiceWithReplacement1JSON() {
        IString str = new IString("0#There are no strings.|1#There is one string.|#There are {num} strings.");
        
        assertNotNull(str);
        
        JSONObject json = null;
        try {
            json = new JSONObject("{\"num\":\"1\"}");
        } catch ( JSONException e ) {
            e.printStackTrace();
            fail();
        }
        
        try {
            assertEquals("There is one string.", str.formatChoice(1, json));
        } catch ( ParseException e ) {
            e.printStackTrace();
            fail();
        }
    }

    public void testStringFormatChoiceWithReplacement2JSON() {
        IString str = new IString("0#There are no strings.|1#There is one string.|#There are {num} strings.");
        
        assertNotNull(str);
        
        JSONObject json = null;
        try {
            json = new JSONObject("{\"num\":\"2\"}");
        } catch ( JSONException e ) {
            e.printStackTrace();
            fail();
        }
        
        try {
            assertEquals("There are 2 strings.", str.formatChoice(2, json));
        } catch ( ParseException e ) {
            e.printStackTrace();
            fail();
        }
    }

    public void testStringFormatChoiceWithMultipleReplacement0JSON() {
        IString str = new IString("0#User {name} has no items.|1#User {name} has {num} item.|#User {name} has {num} items.");
        
        assertNotNull(str);
        
        JSONObject json = null;
        try {
            json = new JSONObject("{\"name\":\"johndoe\",num:0}");
        } catch ( JSONException e ) {
            e.printStackTrace();
            fail();
        }
        
        try {
            assertEquals("User johndoe has no items.", str.formatChoice(0, json));
        } catch ( ParseException e ) {
            e.printStackTrace();
            fail();
        }
    }

    public void testStringFormatChoiceWithMultipleReplacement1JSON() {
        IString str = new IString("0#User {name} has no items.|1#User {name} has {num} item.|#User {name} has {num} items.");
        
        assertNotNull(str);
        
        JSONObject json = null;
        try {
            json = new JSONObject("{\"name\":\"johndoe\",num:1}");
        } catch ( JSONException e ) {
            e.printStackTrace();
            fail();
        }
        
        try {
            assertEquals("User johndoe has 1 item.", str.formatChoice(1, json));
        } catch ( ParseException e ) {
            e.printStackTrace();
            fail();
        }
    }

    public void testStringFormatChoiceWithMultipleReplacement2JSON() {
        IString str = new IString("0#User {name} has no items.|1#User {name} has {num} item.|#User {name} has {num} items.");
        
        assertNotNull(str);
        
        JSONObject json = null;
        try {
            json = new JSONObject("{\"name\":\"johndoe\",num:2}");
        } catch ( JSONException e ) {
            e.printStackTrace();
            fail();
        }
        
        try {
            assertEquals("User johndoe has 2 items.", str.formatChoice(2, json));
        } catch ( ParseException e ) {
            e.printStackTrace();
            fail();
        }
    }

    public void testStringFormatChoiceArabicPluralsZero() {
        IString str = new IString("zero#There are no strings.|one#There is 1 string.|two#There are 2 strings." +
        		"|few#There are just {num} strings.|many#There are {num} strings.", "ar");
        
        assertNotNull(str);

        int num = 0;
        HashMap<String,String> values = new HashMap<String,String>();
        values.put("num", Integer.toString(num));

        try {
            assertEquals("There are no strings.", str.formatChoice(num, values));
        } catch ( ParseException e ) {
            e.printStackTrace();
            fail();
        }
    }

    public void testStringFormatChoiceArabicPluralsOne() {
        IString str = new IString("zero#There are no strings.|one#There is 1 string.|two#There are 2 strings." +
        		"|few#There are just {num} strings.|many#There are {num} strings.", "ar");
        
        assertNotNull(str);

        int num = 1;
        HashMap<String,String> values = new HashMap<String,String>();
        values.put("num", Integer.toString(num));

        try {
            assertEquals("There is 1 string.", str.formatChoice(num, values));
        } catch ( ParseException e ) {
            e.printStackTrace();
            fail();
        }
    }

    public void testStringFormatChoiceArabicPluralsTwo() {
        IString str = new IString("zero#There are no strings.|one#There is 1 string.|two#There are 2 strings." +
        		"|few#There are just {num} strings.|many#There are {num} strings.", "ar");
        
        assertNotNull(str);

        int num = 2;
        HashMap<String,String> values = new HashMap<String,String>();
        values.put("num", Integer.toString(num));

        try {
            assertEquals("There are 2 strings.", str.formatChoice(num, values));
        } catch ( ParseException e ) {
            e.printStackTrace();
            fail();
        }
    }

    public void testStringFormatChoiceArabicPluralsFew() {
        IString str = new IString("zero#There are no strings.|one#There is 1 string.|two#There are 2 strings." +
        		"|few#There are just {num} strings.|many#There are {num} strings.", "ar");
        
        assertNotNull(str);

        int num = 7;
        HashMap<String,String> values = new HashMap<String,String>();
        values.put("num", Integer.toString(num));

        try {
            assertEquals("There are just 7 strings.", str.formatChoice(num, values));
        } catch ( ParseException e ) {
            e.printStackTrace();
            fail();
        }
    }

    public void testStringFormatChoiceArabicPluralsMany() {
        IString str = new IString("zero#There are no strings.|one#There is 1 string.|two#There are 2 strings." +
        		"|few#There are just {num} strings.|many#There are {num} strings.", "ar");
        
        assertNotNull(str);

        int num = 875;
        HashMap<String,String> values = new HashMap<String,String>();
        values.put("num", Integer.toString(num));

        try {
            assertEquals("There are 875 strings.", str.formatChoice(num, values));
        } catch ( ParseException e ) {
            e.printStackTrace();
            fail();
        }
    }
    
    public void testStringFormatChoiceHebrewPluralsOne() {
    	IString str = new IString("one#There is only 1 string.|many#There are {num} strings.|other#There are {num} particular strings.", "he");
        
        assertNotNull(str);

        int num = 1;
        HashMap<String,String> values = new HashMap<String,String>();
        values.put("num", Integer.toString(num));

        try {
            assertEquals("There is only 1 string.", str.formatChoice(num, values));
        } catch ( ParseException e ) {
            e.printStackTrace();
            fail();
        }
    }

    public void testStringFormatChoiceHebrewPluralsMany() {
    	IString str = new IString("one#There is only 1 string.|many#There are {num} strings.|other#There are {num} particular strings.", "he");
        
        assertNotNull(str);

        int num = 50;
        HashMap<String,String> values = new HashMap<String,String>();
        values.put("num", Integer.toString(num));

        try {
            assertEquals("There are 50 strings.", str.formatChoice(num, values));
        } catch ( ParseException e ) {
            e.printStackTrace();
            fail();
        }
    }

    public void testStringFormatChoiceHebrewPluralsDefault() {
        IString str = new IString("one#There is only 1 string.|many#There are {num} strings.|other#There are {num} particular strings.", "he");
        
        assertNotNull(str);

        int num = 5502;
        HashMap<String,String> values = new HashMap<String,String>();
        values.put("num", Integer.toString(num));

        try {
            assertEquals("There are 5502 particular strings.", str.formatChoice(num, values));
        } catch ( ParseException e ) {
            e.printStackTrace();
            fail();
        }
    }
    
    public void testStringFormatChoiceRussianPluralsOne() {
    	IString str = new IString("one#{Player} забил {num} гол за сезон.|few#{Player} забил {num} гола за сезон.|many#{Player} забил {num} голов за сезон.", "ru");
        
        assertNotNull(str);

        int num = 31;
        HashMap<String,String> values = new HashMap<String,String>();
        values.put("num", Integer.toString(num));
        values.put("Player", "Bale");

        try {
            assertEquals("Bale забил 31 гол за сезон.", str.formatChoice(num, values));
        } catch ( ParseException e ) {
            e.printStackTrace();
            fail();
        }
    }

    public void testStringFormatChoiceRussianPluralsFew() {
    	IString str = new IString("one#{Player} забил {num} гол за сезон.|few#{Player} забил {num} гола за сезон.|many#{Player} забил {num} голов за сезон.", "ru");
        
        assertNotNull(str);

        int num = 24;
        HashMap<String,String> values = new HashMap<String,String>();
        values.put("num", Integer.toString(num));
        values.put("Player", "Benzema");

        try {
            assertEquals("Benzema забил 24 гола за сезон.", str.formatChoice(num, values));
        } catch ( ParseException e ) {
            e.printStackTrace();
            fail();
        }
    }

    public void testStringFormatChoiceRussianPluralsMany() {
    	IString str = new IString("one#{Player} забил {num} гол за сезон.|few#{Player} забил {num} гола за сезон.|many#{Player} забил {num} голов за сезон.", "ru");
        
        assertNotNull(str);

        int num = 56;
        HashMap<String,String> values = new HashMap<String,String>();
        values.put("num", Integer.toString(num));
        values.put("Player", "Ronaldo");

        try {
            assertEquals("Ronaldo забил 56 голов за сезон.", str.formatChoice(num, values));
        } catch ( ParseException e ) {
            e.printStackTrace();
            fail();
        }
    }
    
    public void testStringFormatChoiceMaltesePluralsOneJSON() {
        IString str = new IString("one#There is 1 item.|few#There are only {num} strings.|many#There is amount of {num} strings." +
        		"|other#There are {num} strings by default.", "mt");
        
        assertNotNull(str);

        int num = 1;
        JSONObject json = null;
        try {
            json = new JSONObject("{ num : 1 }");
        } catch ( JSONException e ) {
            e.printStackTrace();
            fail();
        }

        try {
            assertEquals("There is 1 item.", str.formatChoice(num, json));
        } catch ( ParseException e ) {
            e.printStackTrace();
            fail();
        }
    }

    public void testStringFormatChoiceMaltesePluralsFewJSON() {
    	IString str = new IString("one#There is 1 item.|few#There are only {num} strings.|many#There is amount of {num} strings." +
        		"|other#There are {num} strings by default.", "mt");
        
        assertNotNull(str);

        int num = 0;
        JSONObject json = null;
        try {
            json = new JSONObject("{ num : 0 }");
        } catch ( JSONException e ) {
            e.printStackTrace();
            fail();
        }

        try {
            assertEquals("There are only 0 strings.", str.formatChoice(num, json));
        } catch ( ParseException e ) {
            e.printStackTrace();
            fail();
        }
    }

    public void testStringFormatChoiceMaltesePluralsManyJSON() {
    	IString str = new IString("one#There is 1 item.|few#There are only {num} strings.|many#There is amount of {num} strings." +
        		"|other#There are {num} strings by default.", "mt");
        
        assertNotNull(str);

        int num = 215;
        JSONObject json = null;
        try {
            json = new JSONObject("{ num : 215 }");
        } catch ( JSONException e ) {
            e.printStackTrace();
            fail();
        }

        try {
            assertEquals("There is amount of 215 strings.", str.formatChoice(num, json));
        } catch ( ParseException e ) {
            e.printStackTrace();
            fail();
        }
    }

    public void testStringFormatChoiceMaltesePluralsOtherJSON() {
    	IString str = new IString("one#There is 1 item.|few#There are only {num} strings.|many#There is amount of {num} strings." +
        		"|other#There are {num} strings by default.", "mt");
        
        assertNotNull(str);

        int num = 700;
        JSONObject json = null;
        try {
            json = new JSONObject("{ num : 700 }");
        } catch ( JSONException e ) {
            e.printStackTrace();
            fail();
        }

        try {
            assertEquals("There are 700 strings by default.", str.formatChoice(num, json));
        } catch ( ParseException e ) {
            e.printStackTrace();
            fail();
        }
    }
    
    public void testStringFormatChoiceSlovenianPluralsOneJSON() {
    	IString str = new IString("one#There is {num} item.|two#There are only {num} strings.|few#There is amount of {num} strings.", "sl");
        
        assertNotNull(str);

        int num = 101;
        JSONObject json = null;
        try {
            json = new JSONObject("{ num : 101 }");
        } catch ( JSONException e ) {
            e.printStackTrace();
            fail();
        }

        try {
            assertEquals("There is 101 item.", str.formatChoice(num, json));
        } catch ( ParseException e ) {
            e.printStackTrace();
            fail();
        }
    }

    public void testStringFormatChoiceSlovenianPluralsTwoJSON() {
    	IString str = new IString("one#There is {num} item.|two#There are only {num} strings.|few#There is amount of {num} strings.", "sl");
        
        assertNotNull(str);

        int num = 4802;
        JSONObject json = null;
        try {
            json = new JSONObject("{ num : 4802 }");
        } catch ( JSONException e ) {
            e.printStackTrace();
            fail();
        }

        try {
            assertEquals("There are only 4802 strings.", str.formatChoice(num, json));
        } catch ( ParseException e ) {
            e.printStackTrace();
            fail();
        }
    }

    public void testStringFormatChoiceSlovenianPluralsFewJSON() {
    	IString str = new IString("one#There is {num} item.|two#There are only {num} strings.|few#There is amount of {num} strings.", "sl");
        
        assertNotNull(str);

        int num = 404;
        JSONObject json = null;
        try {
            json = new JSONObject("{ num : 404 }");
        } catch ( JSONException e ) {
            e.printStackTrace();
            fail();
        }

        try {
            assertEquals("There is amount of 404 strings.", str.formatChoice(num, json));
        } catch ( ParseException e ) {
            e.printStackTrace();
            fail();
        }
    }
    
    public void testStringFormatChoiceSlovenianPluralsOtherJSON() {
    	IString str = new IString("one#There is {num} item.|two#There are only {num} strings.|few#There is amount of {num} strings.", "sl");
        
        assertNotNull(str);

        int num = 125;
        JSONObject json = null;
        try {
            json = new JSONObject("{ num : 125 }");
        } catch ( JSONException e ) {
            e.printStackTrace();
            fail();
        }

        try {
            assertEquals("", str.formatChoice(num, json));
        } catch ( ParseException e ) {
            e.printStackTrace();
            fail();
        }
    }

    public void testStringFormatChoiceRussianPluralsManyJSON() {
    	IString str = new IString("one#{Player} забил {num} гол за сезон.|few#{Player} забил {num} гола за сезон.|many#{Player} забил {num} голов за сезон.", "ru");
        
        assertNotNull(str);
        
        int num = 56;
        JSONObject json = null;
        try {
            json = new JSONObject("{\"Player\":\"Ronaldo\", num:56}");
        } catch ( JSONException e ) {
            e.printStackTrace();
            fail();
        }
        
        try {
            assertEquals("Ronaldo забил 56 голов за сезон.", str.formatChoice(num, json));
        } catch ( ParseException e ) {
            e.printStackTrace();
            fail();
        }
    }
    
    public void testStringFormatChoiceLatvianPluralsOneJSON() {
    	IString str = new IString("one#There is {num} item.|zero#There are only {num} strings.|other#There is amount of {num} strings.", "lv");
        
        assertNotNull(str);

        int num = 41;
        JSONObject json = null;
        try {
            json = new JSONObject("{ num : 41 }");
        } catch ( JSONException e ) {
            e.printStackTrace();
            fail();
        }

        try {
            assertEquals("There is 41 item.", str.formatChoice(num, json));
        } catch ( ParseException e ) {
            e.printStackTrace();
            fail();
        }
    }

    public void testStringFormatChoiceLatvianPluralsOtherJSON() {
    	IString str = new IString("one#There is {num} item.|two#There are only {num} strings.|other#There is amount of {num} strings.", "lv");
        
        assertNotNull(str);

        int num = 65;
        JSONObject json = null;
        try {
            json = new JSONObject("{ num : 65 }");
        } catch ( JSONException e ) {
            e.printStackTrace();
            fail();
        }

        try {
            assertEquals("There is amount of 65 strings.", str.formatChoice(num, json));
        } catch ( ParseException e ) {
            e.printStackTrace();
            fail();
        }
    }
    
    public void testStringFormatChoiceKazakhPluralsOneJSON() {
    	IString str = new IString("one#There is {num} item.|two#There are only {num} strings.|few#There is amount of {num} strings.", "kz");
        
        assertNotNull(str);

        int num = 125;
        JSONObject json = null;
        try {
            json = new JSONObject("{ num : 125 }");
        } catch ( JSONException e ) {
            e.printStackTrace();
            fail();
        }

        try {
            assertEquals("", str.formatChoice(num, json));
        } catch ( ParseException e ) {
            e.printStackTrace();
            fail();
        }
    }

    public void testStringFormatChoiceDefaultPluralsManyJSON() {
    	IString str = new IString("one#There is 1 bottle.|other#There are {count} bottles.");
        
        assertNotNull(str);
        
        int num = 33;
        JSONObject json = null;
        try {
            json = new JSONObject("{ count:33}");
        } catch ( JSONException e ) {
            e.printStackTrace();
            fail();
        }
        
        try {
            assertEquals("There are 33 bottles.", str.formatChoice(num, json));
        } catch ( ParseException e ) {
            e.printStackTrace();
            fail();
        }
    }
    
    public void testStringFormatChoiceWelshPluralsZero() {
        IString str = new IString("zero#There are no strings.|one#There is 1 strings.|two#There are 2 strings." +
        		"|few#There are only {num} strings.|many#There are {num} particular strings.|other#There is exact count of {num} strings.", "cy");
        
        assertNotNull(str);

        int num = 0;
        HashMap<String,String> values = new HashMap<String,String>();
        values.put("num", Integer.toString(num));

        try {
            assertEquals("There are no strings.", str.formatChoice(num, values));
        } catch ( ParseException e ) {
            e.printStackTrace();
            fail();
        }
    }
    
    public void testStringFormatChoiceWelshPluralsFew() {
        IString str = new IString("zero#There are no strings.|one#There is 1 strings.|two#There are 2 strings." +
        		"|few#There are only {num} strings.|many#There are {num} particular strings.|other#There is exact count of {num} strings.", "cy");
        assertNotNull(str);

        int num = 3;
        HashMap<String,String> values = new HashMap<String,String>();
        values.put("num", Integer.toString(num));

        try {
            assertEquals("There are only 3 strings.", str.formatChoice(num, values));
        } catch ( ParseException e ) {
            e.printStackTrace();
            fail();
        }
    }

    public void testStringFormatChoiceWelshPluralsDefault() {
        IString str = new IString("zero#There are no strings.|one#There is 1 strings.|two#There are 2 strings." +
        		"|few#There are only {num} strings.|many#There are {num} particular strings.|other#There is exact count of {num} strings.", "cy");
        assertNotNull(str);

        int num = 24;
        HashMap<String,String> values = new HashMap<String,String>();
        values.put("num", Integer.toString(num));

        try {
            assertEquals("There is exact count of 24 strings.", str.formatChoice(num, values));
        } catch ( ParseException e ) {
            e.printStackTrace();
            fail();
        }
    }

    public void testStringFormatChoiceDefaultPluralsOther() {
    	IString str = new IString("one#{when} {user} has 1 book {where}.|other#{when} {user} has {num} books {where}.");
        
        assertNotNull(str);

        int num = 25;
        HashMap<String,String> values = new HashMap<String,String>();
        values.put("num", Integer.toString(num));
        values.put("when", "Currently");
        values.put("user", "Alex");
        values.put("where", "at home");

        try {
            assertEquals("Currently Alex has 25 books at home.", str.formatChoice(num, values));
        } catch ( ParseException e ) {
            e.printStackTrace();
            fail();
        }
    }

    public void testStringFormatChoiceDefaultPluralsStringKey() {
    	IString str = new IString("one#{when} {user} has 1 book {where}.|other#{when} {user} has {num} books {where}.");
        
        assertNotNull(str);

        int num = 25;
        HashMap<String,String> values = new HashMap<String,String>();
        values.put("num", Integer.toString(num));
        values.put("when", "Currently");
        values.put("user", "Alex");
        values.put("where", "at home");

        try {
            assertEquals("Currently Alex has 1 book at home.", str.formatChoice("one", values));
        } catch ( ParseException e ) {
            e.printStackTrace();
            fail();
        }
    }
}
