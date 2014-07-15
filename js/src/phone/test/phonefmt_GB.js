function testFormatStyle0() {
	var formatted;
	var parsed = new ilib.PhoneNumber({
			trunkAccess: "0",
			areaCode: "20",
			subscriberNumber: "34523434"
	});
	var expected = "(020) 3452 3434";
	
	var fmt = new ilib.PhoneFmt({locale: "en-GB", style: "default"});
	formatted = fmt.format(parsed);
	
	assertEquals(expected, formatted);
	
	
};

function testFormatStyle1() {
	var formatted;
	var parsed = new ilib.PhoneNumber({
			trunkAccess: "0",
			areaCode: "20",
			subscriberNumber: "34523434"
	});
	var expected = "020 3452 3434";
	
	var fmt = new ilib.PhoneFmt({locale: "en-GB", style: "common"});
	formatted = fmt.format(parsed);
	
	assertEquals(expected, formatted);
	
	
};

function testFormatInternational() {
	var formatted;
	var parsed = new ilib.PhoneNumber({
			iddPrefix: "+",
			countryCode: "33",
			areaCode: "1",
			subscriberNumber: "12345678"
	});
	var expected = "+33 1 12 34 56 78";
	
	var fmt = new ilib.PhoneFmt({locale: "en-GB", style: "default"});
	formatted = fmt.format(parsed);
	
	assertEquals(expected, formatted);
	
	
};

function testFormatInternationalAccessCode() {
	var formatted;
	var parsed = new ilib.PhoneNumber({
			iddPrefix: "00",
			countryCode: "33",
			areaCode: "1",
			subscriberNumber: "12345678"
	});
	var expected = "00 33 1 12 34 56 78";
	
	var fmt = new ilib.PhoneFmt({locale: "en-GB", style: "default"});
	formatted = fmt.format(parsed);
	
	assertEquals(expected, formatted);
	
	
};

function testFormatLongAreaCode() {
	var formatted;
	var parsed = new ilib.PhoneNumber({
			trunkAccess: "0",
			areaCode: "17684",
			subscriberNumber: "12345"
	});
	var expected = "(0176 84) 12345";
	
	var fmt = new ilib.PhoneFmt({locale: "en-GB", style: "default"});
	formatted = fmt.format(parsed);
	
	assertEquals(expected, formatted);
	
	
};


function testFormatMobile() {
	var formatted;
	var parsed = new ilib.PhoneNumber({
			trunkAccess: "0",
			mobilePrefix: "75",
			subscriberNumber: "1234567"
	});
	var expected = "075 123 4567";
	
	var fmt = new ilib.PhoneFmt({locale: "en-GB", style: "default"});
	formatted = fmt.format(parsed);
	
	assertEquals(expected, formatted);
	
	
};

function testFormatMobileInternational() {
	var formatted;
	var parsed = new ilib.PhoneNumber({
			iddPrefix: "+",
			countryCode: "44",
			trunkAccess: "0",
			mobilePrefix: "75",
			subscriberNumber: "1234567"
	});
	var expected = "+44 75 123 4567";
	
	var fmt = new ilib.PhoneFmt({locale: "en-GB", style: "default"});
	formatted = fmt.format(parsed);
	
	assertEquals(expected, formatted);
	
	
};

function testFormatService() {
	var formatted;
	var parsed = new ilib.PhoneNumber({
			trunkAccess: "0",
			serviceCode: "300",
			subscriberNumber: "1234567"
	});
	var expected = "(0300) 123 4567";
	
	var fmt = new ilib.PhoneFmt({locale: "en-GB", style: "default"});
	formatted = fmt.format(parsed);
	
	assertEquals(expected, formatted);
	
	
};

function testFormatIEIDD() {
	var formatted;
	var parsed = new ilib.PhoneNumber({
			iddPrefix: "+",
			countryCode: "353",
			trunkAccess: "0",
			areaCode: "1",
			subscriberNumber: "1234567"
	});
	var expected = "+353 1 123 4567";
	
	var fmt = new ilib.PhoneFmt({locale: "en-GB", style: "default"});
	formatted = fmt.format(parsed);
	
	assertEquals(expected, formatted);
	
	
};

function testFormatStyle0Partial0() {
	var formatted;
	var parsed = new ilib.PhoneNumber({
			trunkAccess: "0"
	});
	var expected = "0";
	
	var fmt = new ilib.PhoneFmt({locale: "en-GB", style: "default"});
	formatted = fmt.format(parsed);
	
	assertEquals(expected, formatted);
	
	
};
function testFormatStyle0Partial1() {
	var formatted;
	var parsed = new ilib.PhoneNumber({
			trunkAccess: "0",
			subscriberNumber: "1"
	});
	var expected = "01";
	
	var fmt = new ilib.PhoneFmt({locale: "en-GB", style: "default"});
	formatted = fmt.format(parsed);
	
	assertEquals(expected, formatted);
	
	
};
function testFormatStyle0Partial2() {
	var formatted;
	var parsed = new ilib.PhoneNumber({
			trunkAccess: "0",
			subscriberNumber: "12"
	});
	var expected = "012";
	
	var fmt = new ilib.PhoneFmt({locale: "en-GB", style: "default"});
	formatted = fmt.format(parsed);
	
	assertEquals(expected, formatted);
	
	
};
function testFormatStyle0Partial3() {
	var formatted;
	var parsed = new ilib.PhoneNumber({
			trunkAccess: "0",
			subscriberNumber: "120"
	});
	var expected = "0120";
	
	var fmt = new ilib.PhoneFmt({locale: "en-GB", style: "default"});
	formatted = fmt.format(parsed);
	
	assertEquals(expected, formatted);
	
	
};
function testFormatStyle0Partial4() {
	var formatted;
	var parsed = new ilib.PhoneNumber({
			trunkAccess: "0",
			areaCode: "1202"
	});
	var expected = "(01202) ";
	
	var fmt = new ilib.PhoneFmt({locale: "en-GB", style: "default"});
	formatted = fmt.format(parsed);
	
	assertEquals(expected, formatted);
	
	
};
function testFormatStyle0Partial5() {
	var formatted;
	var parsed = new ilib.PhoneNumber({
			trunkAccess: "0",
			areaCode: "1202",
			subscriberNumber: "3"
	});
	var expected = "(01202) 3";
	
	var fmt = new ilib.PhoneFmt({locale: "en-GB", style: "default"});
	formatted = fmt.format(parsed);
	
	assertEquals(expected, formatted);
	
	
};
function testFormatStyle0Partial6() {
	var formatted;
	var parsed = new ilib.PhoneNumber({
			trunkAccess: "0",
			areaCode: "1202",
			subscriberNumber: "34"
	});
	var expected = "(01202) 34";
	
	var fmt = new ilib.PhoneFmt({locale: "en-GB", style: "default"});
	formatted = fmt.format(parsed);
	
	assertEquals(expected, formatted);
	
	
};
function testFormatStyle0Partial7() {
	var formatted;
	var parsed = new ilib.PhoneNumber({
			trunkAccess: "0",
			areaCode: "1202",
			subscriberNumber: "345"
	});
	var expected = "(01202) 345";
	
	var fmt = new ilib.PhoneFmt({locale: "en-GB", style: "default"});
	formatted = fmt.format(parsed);
	
	assertEquals(expected, formatted);
	
	
};
function testFormatStyle0Partial8() {
	var formatted;
	var parsed = new ilib.PhoneNumber({
			trunkAccess: "0",
			areaCode: "1202",
			subscriberNumber: "3453"
	});
	var expected = "(01202) 3453";
	
	var fmt = new ilib.PhoneFmt({locale: "en-GB", style: "default"});
	formatted = fmt.format(parsed);
	
	assertEquals(expected, formatted);
	
	
};
function testFormatStyle0Partial9() {
	var formatted;
	var parsed = new ilib.PhoneNumber({
			trunkAccess: "0",
			areaCode: "1202",
			subscriberNumber: "34534"
	});
	var expected = "(01202) 34534";
	
	var fmt = new ilib.PhoneFmt({locale: "en-GB", style: "default"});
	formatted = fmt.format(parsed);
	
	assertEquals(expected, formatted);
	
	
};
function testFormatStyle0Partial10() {
	var formatted;
	var parsed = new ilib.PhoneNumber({
			trunkAccess: "0",
			areaCode: "1202",
			subscriberNumber: "345343"
	});
	var expected = "(01202) 345343";
	
	var fmt = new ilib.PhoneFmt({locale: "en-GB", style: "default"});
	formatted = fmt.format(parsed);
	
	assertEquals(expected, formatted);
	
	
};

function testFormatStyle0PartialLocal1() {
	var formatted;
	var parsed = new ilib.PhoneNumber({
			subscriberNumber: "4"
	});
	var expected = "4";
	
	var fmt = new ilib.PhoneFmt({locale: "en-GB", style: "default"});
	formatted = fmt.format(parsed);
	
	assertEquals(expected, formatted);
	
	
};
function testFormatStyle0PartialLocal2() {
	var formatted;
	var parsed = new ilib.PhoneNumber({
			subscriberNumber: "45"
	});
	var expected = "45";
	
	var fmt = new ilib.PhoneFmt({locale: "en-GB", style: "default"});
	formatted = fmt.format(parsed);
	
	assertEquals(expected, formatted);
	
	
};
function testFormatStyle0PartialLocal3() {
	var formatted;
	var parsed = new ilib.PhoneNumber({
			subscriberNumber: "456"
	});
	var expected = "456";
	
	var fmt = new ilib.PhoneFmt({locale: "en-GB", style: "default"});
	formatted = fmt.format(parsed);
	
	assertEquals(expected, formatted);
	
	
};
function testFormatStyle0PartialLocal4() {
	var formatted;
	var parsed = new ilib.PhoneNumber({
			subscriberNumber: "4563"
	});
	var expected = "4563";
	
	var fmt = new ilib.PhoneFmt({locale: "en-GB", style: "default"});
	formatted = fmt.format(parsed);
	
	assertEquals(expected, formatted);
	
	
};
function testFormatStyle0PartialLocal5() {
	var formatted;
	var parsed = new ilib.PhoneNumber({
			subscriberNumber: "45634"
	});
	var expected = "45634";
	
	var fmt = new ilib.PhoneFmt({locale: "en-GB", style: "default"});
	formatted = fmt.format(parsed);
	
	assertEquals(expected, formatted);
	
	
};
function testFormatStyle0PartialLocal6() {
	var formatted;
	var parsed = new ilib.PhoneNumber({
			subscriberNumber: "456345"
	});
	var expected = "456345";
	
	var fmt = new ilib.PhoneFmt({locale: "en-GB", style: "default"});
	formatted = fmt.format(parsed);
	
	assertEquals(expected, formatted);
	
	
};
function testFormatStyle0PartialLocal7() {
	var formatted;
	var parsed = new ilib.PhoneNumber({
			subscriberNumber: "4563453"
	});
	var expected = "456 3453";
	
	var fmt = new ilib.PhoneFmt({locale: "en-GB", style: "default"});
	formatted = fmt.format(parsed);
	
	assertEquals(expected, formatted);
	
	
};
function testFormatStyle0PartialLocal8() {
	var formatted;
	var parsed = new ilib.PhoneNumber({
			subscriberNumber: "45634535"
	});
	var expected = "4563 4535";
	
	var fmt = new ilib.PhoneFmt({locale: "en-GB", style: "default"});
	formatted = fmt.format(parsed);
	
	assertEquals(expected, formatted);
	
	
};
function testFormatStyle0PartialLocal9() {
	var formatted;
	var parsed = new ilib.PhoneNumber({
			subscriberNumber: "456345352"	// too long
	});
	var expected = "456345352";	// use last resort rule
	
	var fmt = new ilib.PhoneFmt({locale: "en-GB", style: "default"});
	formatted = fmt.format(parsed);
	
	assertEquals(expected, formatted);
	
	
};

function testFormatStyle1PartialLocal1() {
	var formatted;
	var parsed = new ilib.PhoneNumber({
			subscriberNumber: "4"
	});
	var expected = "4";
	
	var fmt = new ilib.PhoneFmt({locale: "en-GB", style: "common"});
	formatted = fmt.format(parsed);
	
	assertEquals(expected, formatted);
	
	
};
function testFormatStyle1PartialLocal2() {
	var formatted;
	var parsed = new ilib.PhoneNumber({
			subscriberNumber: "45"
	});
	var expected = "45";
	
	var fmt = new ilib.PhoneFmt({locale: "en-GB", style: "common"});
	formatted = fmt.format(parsed);
	
	assertEquals(expected, formatted);
	
	
};
function testFormatStyle1PartialLocal3() {
	var formatted;
	var parsed = new ilib.PhoneNumber({
			subscriberNumber: "456"
	});
	var expected = "456";
	
	var fmt = new ilib.PhoneFmt({locale: "en-GB", style: "common"});
	formatted = fmt.format(parsed);
	
	assertEquals(expected, formatted);
	
	
};
function testFormatStyle1PartialLocal4() {
	var formatted;
	var parsed = new ilib.PhoneNumber({
			subscriberNumber: "4563"
	});
	var expected = "4563";
	
	var fmt = new ilib.PhoneFmt({locale: "en-GB", style: "common"});
	formatted = fmt.format(parsed);
	
	assertEquals(expected, formatted);
	
	
};
function testFormatStyle1PartialLocal5() {
	var formatted;
	var parsed = new ilib.PhoneNumber({
			subscriberNumber: "45634"
	});
	var expected = "45634";
	
	var fmt = new ilib.PhoneFmt({locale: "en-GB", style: "common"});
	formatted = fmt.format(parsed);
	
	assertEquals(expected, formatted);
	
	
};
function testFormatStyle1PartialLocal6() {
	var formatted;
	var parsed = new ilib.PhoneNumber({
			subscriberNumber: "456345"
	});
	var expected = "456345";
	
	var fmt = new ilib.PhoneFmt({locale: "en-GB", style: "common"});
	formatted = fmt.format(parsed);
	
	assertEquals(expected, formatted);
	
	
};
function testFormatStyle1PartialLocal7() {
	var formatted;
	var parsed = new ilib.PhoneNumber({
			subscriberNumber: "4563453"
	});
	var expected = "456 3453";
	
	var fmt = new ilib.PhoneFmt({locale: "en-GB", style: "common"});
	formatted = fmt.format(parsed);
	
	assertEquals(expected, formatted);
	
	
};
function testFormatStyle1PartialLocal8() {
	var formatted;
	var parsed = new ilib.PhoneNumber({
			subscriberNumber: "45634534"
	});
	var expected = "4563 4534";
	
	var fmt = new ilib.PhoneFmt({locale: "en-GB", style: "common"});
	formatted = fmt.format(parsed);
	
	assertEquals(expected, formatted);
	
	
};
function testFormatStyle1PartialLocal9() {
	var formatted;
	var parsed = new ilib.PhoneNumber({
			subscriberNumber: "456345345"	// too long
	});
	var expected = "456345345"; // use last resort rule
	
	var fmt = new ilib.PhoneFmt({locale: "en-GB", style: "common"});
	formatted = fmt.format(parsed);
	
	assertEquals(expected, formatted);
	
	
};
