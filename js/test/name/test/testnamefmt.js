/*
 * testnamefmt.js - test the name formatter object
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

var NameFmt = require("./../lib/NameFmt.js");
var Name = require("./../lib/Name.js");

function testNameFmtConstructor() {
    var fmt = new NameFmt();
    
    assertNotUndefined(fmt);
}

function testNameFmtGetLocaleDefault() {
	var fmt = new NameFmt();
    
    assertEquals("en-US", fmt.getLocale().getSpec());
}

function testNameFmtGetLocale() {
	var fmt = new NameFmt({
		locale: "nl-NL"
	});
    
    assertEquals("nl-NL", fmt.getLocale().getSpec());
}

function testNameFmtGetBogus() {
	var fmt = new NameFmt({
		locale: "ii-II"
	});
    
    assertEquals("ii-II", fmt.getLocale().getSpec());
}

function testNameFmtGetStyle() {
	var fmt = new NameFmt({
    	style: "medium"
    });
    
    assertEquals("medium", fmt.getStyle());
}

function testNameFmtGetStyleDefault() {
	var fmt = new NameFmt();
    
    assertEquals("short", fmt.getStyle());
}

function testNameFmtGetStyleBogus() {
	var fmt = new NameFmt({
    	style: "humungous"
    });
    
    assertEquals("short", fmt.getStyle());
}

function testNameFmtENShort() {
	var name = new Name({
		prefix: "Mr.",
		givenName: "John",
		middleName: "Kevin",
		familyName: "Smith",
		suffix: "Phd."
	});
    var fmt = new NameFmt({
    	style: "short"
    });
    
    assertEquals("John Smith", fmt.format(name));
}

function testNameFmtENMedium() {
	var name = new Name({
		prefix: "Mr.",
		givenName: "John",
		middleName: "Kevin",
		familyName: "Smith",
		suffix: "Phd."
	});
    var fmt = new NameFmt({
    	style: "medium"
    });
    
    assertEquals("John Kevin Smith", fmt.format(name));
}

function testNameFmtENLong() {
	var name = new Name({
		prefix: "Mr.",
		givenName: "John",
		middleName: "Kevin",
		familyName: "Smith",
		suffix: "Phd."
	});
    var fmt = new NameFmt({
    	style: "long"
    });
    
    assertEquals("Mr. John Kevin Smith", fmt.format(name));
}

function testNameFmtENFull() {
	var name = new Name({
		prefix: "Mr.",
		givenName: "John",
		middleName: "Kevin",
		familyName: "Smith",
		suffix: "Phd."
	});
    var fmt = new NameFmt({
    	style: "full"
    });
    
    assertEquals("Mr. John Kevin Smith Phd.", fmt.format(name));
}

function testNameFmtENWithCommaInSuffix() {
	var name = new Name({
		prefix: "Mr.",
		givenName: "John",
		middleName: "Kevin",
		familyName: "Smith",
		suffix: ", Phd."
	});
    var fmt = new NameFmt({
    	style: "full"
    });
    
    assertEquals("Mr. John Kevin Smith, Phd.", fmt.format(name));
}

function testNameFmtENComponentsP() {
	var name = new Name({
		prefix: "Mr.",
		givenName: "John",
		middleName: "Kevin",
		familyName: "Smith",
		suffix: "Phd."
	});
    var fmt = new NameFmt({
    	components: "p"
    });
    
    assertEquals("Mr.", fmt.format(name));
}

function testNameFmtENComponentsPG() {
	var name = new Name({
		prefix: "Mr.",
		givenName: "John",
		middleName: "Kevin",
		familyName: "Smith",
		suffix: "Phd."
	});
    var fmt = new NameFmt({
    	components: "pg"
    });
    
    assertEquals("Mr. John", fmt.format(name));
}

function testNameFmtENComponentsPF() {
	var name = new Name({
		prefix: "Mr.",
		givenName: "John",
		middleName: "Kevin",
		familyName: "Smith",
		suffix: "Phd."
	});
    var fmt = new NameFmt({
    	components: "pf"
    });
    
    assertEquals("Mr. Smith", fmt.format(name));
}

function testNameFmtENComponentsPGF() {
	var name = new Name({
		prefix: "Mr.",
		givenName: "John",
		middleName: "Kevin",
		familyName: "Smith",
		suffix: "Phd."
	});
    var fmt = new NameFmt({
    	components: "pgf"
    });
    
    assertEquals("Mr. John Smith", fmt.format(name));
}

function testNameFmtENComponentsPFS() {
	var name = new Name({
		prefix: "Mr.",
		givenName: "John",
		middleName: "Kevin",
		familyName: "Smith",
		suffix: "Phd."
	});
    var fmt = new NameFmt({
    	components: "pfs"
    });
    
    assertEquals("Mr. Smith Phd.", fmt.format(name));
}

function testNameFmtENComponentsPGFScrambled() {
	var name = new Name({
		prefix: "Mr.",
		givenName: "John",
		middleName: "Kevin",
		familyName: "Smith",
		suffix: "Phd."
	});
    var fmt = new NameFmt({
    	components: "gfp"
    });
    
    assertEquals("Mr. John Smith", fmt.format(name));
}

function testNameFmtENComponentsOverrideStyle() {
	var name = new Name({
		prefix: "Mr.",
		givenName: "John",
		middleName: "Kevin",
		familyName: "Smith",
		suffix: "Phd."
	});
    var fmt = new NameFmt({
    	style: "full",
    	components: "gfp"
    });
    
    assertEquals("Mr. John Smith", fmt.format(name));
}


function testNameFmtDEShort() {
	var name = new Name({
		prefix: "Hr.",
		givenName: "Andreas",
		middleName: "Helmut",
		familyName: "Schmidt",
		suffix: "MdB"
	}, {
		locale: "de-DE"
	});
    var fmt = new NameFmt({
    	style: "short",
    	locale: "de-DE"
    });
    
    assertEquals("Andreas Schmidt", fmt.format(name));
}

function testNameFmtDEMedium() {
	var name = new Name({
		prefix: "Hr.",
		givenName: "Andreas",
		middleName: "Helmut",
		familyName: "Schmidt",
		suffix: "MdB"
	}, {
		locale: "de-DE"
	});
    var fmt = new NameFmt({
    	style: "medium",
    	locale: "de-DE"
    });
    
    assertEquals("Andreas Helmut Schmidt", fmt.format(name));
}

function testNameFmtDELong() {
	var name = new Name({
		prefix: "Hr.",
		givenName: "Andreas",
		middleName: "Helmut",
		familyName: "Schmidt",
		suffix: "MdB"
	}, {
		locale: "de-DE"
	});
    var fmt = new NameFmt({
    	style: "long",
    	locale: "de-DE"
    });
    
    assertEquals("Hr. Andreas Helmut Schmidt", fmt.format(name));
}

function testNameFmtDEFull() {
	var name = new Name({
		prefix: "Hr.",
		givenName: "Andreas",
		middleName: "Helmut",
		familyName: "Schmidt",
		suffix: "MdB"
	}, {
		locale: "de-DE"
	});
    var fmt = new NameFmt({
    	style: "full",
    	locale: "de-DE"
    });
    
    assertEquals("Hr. Andreas Helmut Schmidt MdB", fmt.format(name));
}

function testNameFmtDEWithCommaInSuffix() {
	var name = new Name({
		prefix: "Hr.",
		givenName: "Andreas",
		middleName: "Helmut",
		familyName: "Schmidt",
		suffix: ", MdB"
	}, {
		locale: "de-DE"
	});
    var fmt = new NameFmt({
    	style: "full",
    	locale: "de-DE"
    });
    
    assertEquals("Hr. Andreas Helmut Schmidt, MdB", fmt.format(name));
}

function testNameFmtDEComponentsP() {
	var name = new Name({
		prefix: "Hr.",
		givenName: "Andreas",
		middleName: "Helmut",
		familyName: "Schmidt",
		suffix: "MdB"
	}, {
		locale: "de-DE"
	});
    var fmt = new NameFmt({
    	components: "p",
    	locale: "de-DE"
    });
    
    assertEquals("Hr.", fmt.format(name));
}

function testNameFmtDEComponentsPG() {
	var name = new Name({
		prefix: "Hr.",
		givenName: "Andreas",
		middleName: "Helmut",
		familyName: "Schmidt",
		suffix: "MdB"
	}, {
		locale: "de-DE"
	});
    var fmt = new NameFmt({
    	components: "pg",
    	locale: "de-DE"
    });
    
    assertEquals("Hr. Andreas", fmt.format(name));
}

function testNameFmtDEComponentsPF() {
	var name = new Name({
		prefix: "Hr.",
		givenName: "Andreas",
		middleName: "Helmut",
		familyName: "Schmidt",
		suffix: "MdB"
	}, {
		locale: "de-DE"
	});
    var fmt = new NameFmt({
    	components: "pf",
    	locale: "de-DE"
    });
    
    assertEquals("Hr. Schmidt", fmt.format(name));
}

function testNameFmtDEComponentsPGF() {
	var name = new Name({
		prefix: "Hr.",
		givenName: "Andreas",
		middleName: "Helmut",
		familyName: "Schmidt",
		suffix: "MdB"
	}, {
		locale: "de-DE"
	});
    var fmt = new NameFmt({
    	components: "pgf",
    	locale: "de-DE"
    });
    
    assertEquals("Hr. Andreas Schmidt", fmt.format(name));
}

function testNameFmtDEComponentsPFS() {
	var name = new Name({
		prefix: "Hr.",
		givenName: "Andreas",
		middleName: "Helmut",
		familyName: "Schmidt",
		suffix: "MdB"
	}, {
		locale: "de-DE"
	});
    var fmt = new NameFmt({
    	components: "pfs",
    	locale: "de-DE"
    });
    
    assertEquals("Hr. Schmidt MdB", fmt.format(name));
}

function testNameFmtDEComponentsPGFScrambled() {
	var name = new Name({
		prefix: "Hr.",
		givenName: "Andreas",
		middleName: "Helmut",
		familyName: "Schmidt",
		suffix: "MdB"
	}, {
		locale: "de-DE"
	});
    var fmt = new NameFmt({
    	components: "gfp",
    	locale: "de-DE"
    });
    
    assertEquals("Hr. Andreas Schmidt", fmt.format(name));
}

function testNameFmtDEComponentsOverrideStyle() {
	var name = new Name({
		prefix: "Hr.",
		givenName: "Andreas",
		middleName: "Helmut",
		familyName: "Schmidt",
		suffix: "MdB"
	}, {
		locale: "de-DE"
	});
    var fmt = new NameFmt({
    	style: "full",
    	components: "pgf",
    	locale: "de-DE"
    });
    
    assertEquals("Hr. Andreas Schmidt", fmt.format(name));
}
