/*
 * testaddress.js - test the address parsing and formatting routines
 * 
 * Copyright © 2013-2015, JEDLSoft
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

var Address = require("../lib/Address.js");
var AddressFmt = require("../lib/AddressFmt.js");

function testParseARAddressNormal() {
	var parsedAddress = new Address("Luis Escala Piedras 623\nPiso 2, depto 4\nC1070AAM Capital Federa\nARGENTINA", {locale: 'es-AR'});
	
	assertNotUndefined(parsedAddress);
	assertEquals("Luis Escala Piedras 623, Piso 2, depto 4", parsedAddress.streetAddress);
	assertEquals("Capital Federa", parsedAddress.locality);
	assertUndefined(parsedAddress.region);
	assertEquals("C1070AAM", parsedAddress.postalCode);
	assertEquals("ARGENTINA", parsedAddress.country);
	assertEquals("AR", parsedAddress.countryCode);
};


function testParseARAddressNoZip() {
	var parsedAddress = new Address("Luis Escala Piedras 623\nPiso 2, depto 4\nCapital Federa\nARGENTINA", {locale: 'es-AR'});
	
	assertNotUndefined(parsedAddress);
	assertEquals("Luis Escala Piedras 623, Piso 2, depto 4", parsedAddress.streetAddress);
	assertEquals("Capital Federa", parsedAddress.locality);
	assertUndefined(parsedAddress.region);
	assertEquals("ARGENTINA", parsedAddress.country);
	assertEquals("AR", parsedAddress.countryCode);
	assertUndefined(parsedAddress.postalCode);
};

function testParseARAddressNoCountry() {
	var parsedAddress = new Address("Juana Aguirre, Piedras No 623, Piso2 Dto.4\nC1070AAM Capital Federal", {locale: 'es-AR'});
	
	assertNotUndefined(parsedAddress);
	assertEquals("Juana Aguirre, Piedras No 623, Piso2 Dto.4", parsedAddress.streetAddress);
	assertEquals("Capital Federal", parsedAddress.locality);
	assertUndefined(parsedAddress.region);
	assertEquals("C1070AAM", parsedAddress.postalCode);
	assertUndefined(parsedAddress.country);
	assertEquals("AR", parsedAddress.countryCode);
};

function testParseARAddressManyLines() {
	var parsedAddress = new Address("Juana Aguirre\nEscuela Rural 45 \nPiedras No 623\nPiso2 Dto.4\nC1070AAM Capital Federal\nARGENTINA\n\n\n", {locale: 'es-AR'});
	
	assertNotUndefined(parsedAddress);
	assertEquals("Juana Aguirre, Escuela Rural 45, Piedras No 623, Piso2 Dto.4", parsedAddress.streetAddress);
	assertEquals("Capital Federal", parsedAddress.locality);
	assertUndefined(parsedAddress.region);
	assertEquals("C1070AAM", parsedAddress.postalCode);
	assertEquals("ARGENTINA", parsedAddress.country);
	assertEquals("AR", parsedAddress.countryCode);
	
};

function testParseARAddressOneLine() {
	var parsedAddress = new Address("Juana Aguirre, Piedras No 623, Piso2 Dto.4, C1070AAM Capital Federal, ARGENTINA", {locale: 'es-AR'});
	
	assertNotUndefined(parsedAddress);
	assertEquals("Juana Aguirre, Piedras No 623, Piso2 Dto.4", parsedAddress.streetAddress);
	assertEquals("Capital Federal", parsedAddress.locality);
	assertUndefined(parsedAddress.region);
	assertEquals("C1070AAM", parsedAddress.postalCode);
	assertEquals("ARGENTINA", parsedAddress.country);
	assertEquals("AR", parsedAddress.countryCode);
	
};

function testParseARAddressSuperfluousWhitespace() {
	var parsedAddress = new Address("\t\t\tLuis Escala Piedras 623\n\n\nPiso 2, depto 4\n   \t\nC1070AAM Capital Federa\n   \r\t\t \t \t ARGENTINA\n\n\n", {locale: 'es-AR'});
	
	assertNotUndefined(parsedAddress);
	assertEquals("Luis Escala Piedras 623, Piso 2, depto 4", parsedAddress.streetAddress);
	assertEquals("Capital Federa", parsedAddress.locality);
	assertUndefined(parsedAddress.region);
	assertEquals("C1070AAM", parsedAddress.postalCode);
	assertEquals("ARGENTINA", parsedAddress.country);
	assertEquals("AR", parsedAddress.countryCode);
	
};

function testParseARAddressNoDelimiters() {
	var parsedAddress = new Address("Luis Escala Piedras 623 Piso 2, depto 4 C1070AAM  Capital Federa ARGENTINA", {locale: 'es-AR'});
	
	assertNotUndefined(parsedAddress);
	assertEquals("Luis Escala Piedras 623 Piso 2, depto 4", parsedAddress.streetAddress);
	assertEquals("Capital Federa", parsedAddress.locality);
	assertUndefined(parsedAddress.region);
	assertEquals("C1070AAM", parsedAddress.postalCode);
	assertEquals("ARGENTINA", parsedAddress.country);
	assertEquals("AR", parsedAddress.countryCode);
	
};

function testParseARAddressSpecialChars() {
	var parsedAddress = new Address("At. Sr. Hiro Gordo-Globo\nSumo Informática S.A.\nCalle 39 No 1540\nB1000TBU San Sebastian\nARGENTINA", {locale: 'es-AR'});
	
	assertNotUndefined(parsedAddress);
	assertEquals("At. Sr. Hiro Gordo-Globo, Sumo Informática S.A., Calle 39 No 1540", parsedAddress.streetAddress);
	assertEquals("San Sebastian", parsedAddress.locality);
	assertUndefined(parsedAddress.region);
	assertEquals("B1000TBU", parsedAddress.postalCode);
	assertEquals("ARGENTINA", parsedAddress.country);
	assertEquals("AR", parsedAddress.countryCode);
	
};


function testParseARAddressFromUS() {
	var parsedAddress = new Address("At. Sr. Hiro Gordo-Globo, Sumo Informática S.A., Calle 39 No 1540\nB1000TBU San Sebastian\nArgentina", {locale: 'en-US'});
	
	// the country name is in English because this address is for a contact in a US database
	
	assertNotUndefined(parsedAddress);
	assertEquals("At. Sr. Hiro Gordo-Globo, Sumo Informática S.A., Calle 39 No 1540", parsedAddress.streetAddress);
	assertEquals("San Sebastian", parsedAddress.locality);
	assertUndefined(parsedAddress.region);
	assertEquals("B1000TBU", parsedAddress.postalCode);
	assertEquals("Argentina", parsedAddress.country);
	assertEquals("AR", parsedAddress.countryCode);
	
};

function testFormatAddressAR() {
	var parsedAddress = new Address({
		streetAddress: "At. Sr. Hiro Gordo-Globo, Sumo Informática S.A., Calle 39 No 1540",
		locality: "San Sebastian",
		postalCode: "B1000TBU",
		country: "ARGENTINA",
		countryCode: "AT"
	}, {locale: 'es-AR'});
	
	var expected = "At. Sr. Hiro Gordo-Globo, Sumo Informática S.A., Calle 39 No 1540\nB1000TBU San Sebastian\nARGENTINA";
	var formatter = new AddressFmt({locale: 'es-AR'});
	assertEquals(expected, formatter.format(parsedAddress));
	
};

function testFormatAddressARFromUS() {
	var parsedAddress = new Address({
		streetAddress: "At. Sr. Hiro Gordo-Globo, Sumo Informática S.A., Calle 39 No 1540",
		locality: "San Sebastian",
		postalCode: "B1000TBU",
		country: "Argentina",
		countryCode: "AT"
	}, {locale: 'en-US'});
	
	var expected = "At. Sr. Hiro Gordo-Globo, Sumo Informática S.A., Calle 39 No 1540\nB1000TBU San Sebastian\nArgentina";
	var formatter = new AddressFmt({locale: 'en-US'});
	assertEquals(expected, formatter.format(parsedAddress));
	
};
