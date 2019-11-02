function telephoneCheck(str) {
    // Good luck!
    let re = (/^1?[-\s]?(\(\d{3}\)|\d{3})[-\s]?(\d{3})[-\s]?(\d{4})$/);
    return re.test(str);
    //return str.match(/1?[-\s]?(\(\d{3}\)|\d{3})[-\s]?(\d{3})[-\s]?(\d{4})/);//Test
    //return true;
}

alert(telephoneCheck("555-555-5555"));