/*
 * normalize_BR.js - test phonenumber normalize function()
 * 
 * Copyright © 2014-2015,2017, JEDLSoft
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

if (typeof(PhoneNumber) === "undefined") {
    var PhoneNumber = require("../.././../lib/PhoneNumber.js");
}

if (typeof(ilib) === "undefined") {
    var ilib = require("../../..");
}

module.exports.normalize_BR = {
    setUp: function(callback) {
        ilib.clearCache();
        callback();
    },

    testBRIDDPrefix: function(test) {
        var parsed = new PhoneNumber("00 14 31 55 345 343", {locale: 'pt-BR'});
        var expected = "+3155345343";
        
        test.expect(1);
        test.equal(parsed.normalize({locale: 'pt-BR'}), expected); 
        test.done();
    },
    
    testBRIDDPrefixAlreadyPlus: function(test) {
        var parsed = new PhoneNumber("+31 55 345 343", {locale: 'pt-BR'});
        var expected = "+3155345343";
        
        test.expect(1);
        test.equal(parsed.normalize({locale: 'pt-BR'}), expected); 
        test.done();
    },
    
    testBRWithNoLocale: function(test) {
        var parsed = new PhoneNumber("00 14 31 55 345 343", {locale: 'pt-BR'});
        var expected = "+3155345343";
        
        test.expect(1);
        test.equal(parsed.normalize({}), expected);
        test.done();
    },
    
    testBRNoHints: function(test) {
        var parsed = new PhoneNumber("00 14 31 55 345 343", {locale: 'pt-BR'});
        var expected = "+3155345343";
        
        test.expect(1);
        test.equal(parsed.normalize(), expected); 
        test.done();
    },
    
    
    testBRLDNumberUsingBRRMCC: function(test) {
        var parsed = new PhoneNumber("62-312-3456", {locale: 'pt-BR'});
        var hints = {
            mcc: "724"
        };
        var expected = "+55623123456";
        
        test.expect(1);
        test.equal(parsed.normalize(hints), expected); 
        test.done();
    },
    
    testBRLDNumberUsingBRMCCOtherLocale: function(test) {
        var parsed = new PhoneNumber("98-912-3456", {locale: 'pt-BR'});
        var hints = {
            mcc: "724",
            locale:"de-DE"
        };
        var expected = "+55989123456";
        
        test.expect(1);
        test.equal(parsed.normalize(hints), expected); 
        test.done();
    },
    
    testBRLDNumberUsingBRMCC: function(test) {
        var parsed = new PhoneNumber("02302 654321", {locale: 'de-DE'});
        var hints = {
            mcc: "724" 
        };
        var expected = "+492302654321";
        
        test.expect(1);
        test.equal(parsed.normalize(hints), expected); // 'de-DE'
        test.done();
    },
    
    testBRAreaCodeFromHint: function(test) {
        var parsed = new PhoneNumber("212-3456", {locale: 'pt-BR'});
        var hints = {
            defaultAreaCode: "21"
        };
        var expected = "+55212123456";
        
        test.expect(1);
        test.equal(parsed.normalize(hints), expected); 
        test.done();
    },
    
    testBRAreaCodeIgnoreHint: function(test) {
        var parsed = new PhoneNumber("98-212-3456", {locale: 'pt-BR'});
        var hints = {
            defaultAreaCode: "21"
        };
        var expected = "+55982123456";
        
        test.expect(1);
        test.equal(parsed.normalize(hints), expected); 
        test.done();
    },
    
    testBRNoAreaCodeAndNoCountry: function(test) {
        var parsed = new PhoneNumber("212-3456", {locale: 'pt-BR'});
        var expected = "2123456";
        
        test.expect(1);
        test.equal(parsed.normalize(), expected);
        test.done();
    },
    
    testBRAssistedDialingLocalToLocalUMTS: function(test) {
        var phone = new PhoneNumber("2123456", {locale: 'pt-BR'});
        var hints = {
            mcc: "724",
            networkType: "umts",
            defaultAreaCode: "21",
            assistedDialing: true
        };
        var expectedString = "2123456";
    
        test.expect(1);
        test.equal(phone.normalize(hints), expectedString);     
        test.done();
    },
    
    testBRAssistedDialingLocalToLocalUMTSAddTrunkClosed: function(test) {
        var phone = new PhoneNumber("+55 21 2123456", {locale: 'pt-BR'});
        var hints = {
            mcc: "724",
            networkType: "umts",
            defaultAreaCode: "21",
            assistedDialing: true
        };
        var expectedString = "0212123456";
        test.expect(1);
        test.equal(phone.normalize(hints), expectedString);     
        test.done();
    },
    
    testBRAssistedDialingLocalToLocalCDMA: function(test) {
        var phone = new PhoneNumber("2123456", {locale: 'pt-BR'});
        var hints = {
            mcc: "724",
            networkType: "cdma",
            defaultAreaCode: "98",
            assistedDialing: true
        };
        var expectedString = "2123456";
    
        test.expect(1);
        test.equal(phone.normalize(hints), expectedString); 
        test.done();
    },
    
    testBRAssistedDialingLocalToLocalCDMAAddTrunkClosed: function(test) {
        var phone = new PhoneNumber("+55 62 2123456", {locale: 'pt-BR'});
        var hints = {
            mcc: "724",
            networkType: "cdma",
            defaultAreaCode: "62",
            assistedDialing: true
        };
        var expectedString = "0622123456";
    
        test.expect(1);
        test.equal(phone.normalize(hints), expectedString); 
        test.done();
    },
    
    testBRAssistedDialingIntlToLocalUMTS: function(test) {
        var phone = new PhoneNumber("32012325", {locale: 'pt-BR'});
        var hints = {
            mcc: "208", // from France
            networkType: "umts",
            defaultAreaCode: "62",
            assistedDialing: true
        };
        var expectedString = "+556232012325";
    
        test.expect(1);
        test.equal(phone.normalize(hints), expectedString); 
        test.done();
    },
    
    testBRAssistedDialingIntlToLDUMTS: function(test) {
        var phone = new PhoneNumber("079 32012325", {locale: 'pt-BR'});
        var hints = {
            mcc: "208", // from France
            networkType: "umts",
            defaultAreaCode: "79",
            assistedDialing: true
        };
        var expectedString = "+557932012325";
    
        test.expect(1);
        test.equal(phone.normalize(hints), expectedString);     
        test.done();
    },
    
    testBRAssistedDialingIntlToLocalCDMA: function(test) {
        var phone = new PhoneNumber("32012325", {locale: 'pt-BR'});
        var hints = {
            mcc: "505", // From Australia
            networkType: "cdma",
            defaultAreaCode: "85",
            assistedDialing: true
        };
        var expectedString = "0011558532012325";
    
        test.expect(1);
        test.equal(phone.normalize(hints), expectedString);     
        test.done();
    },
    
    testBRAssistedDialingIntlToLDCDMA: function(test) {
        var phone = new PhoneNumber("099 2123456", {locale: 'pt-BR'});
        var hints = {
            mcc: "208", // from France
            networkType: "cdma",
            defaultAreaCode: "21",
            assistedDialing: true
        };
        var expectedString = "0055992123456";
    
        test.expect(1);
        test.equal(phone.normalize(hints), expectedString);     
        test.done();
    }
    
    
};