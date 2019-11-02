function palindrome(str) {
    // Good luck!
    str = str.toLowerCase().replace(/[\W_]/g, '');
    return(str === str.split("").reverse().join(""));
    
}

    //palindrome("eye");