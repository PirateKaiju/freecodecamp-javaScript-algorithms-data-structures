function convertToRoman(num) {
    let romanNumber = "";

    let romanSymbols = {
        3000 : 'MMM',
        2000 : 'MM',
        1000 : 'M',
        900: 'CM',
        800: 'DCCC',
        700: 'DCC',
        600: 'DC',
        500: 'D',
        400: 'CD',
        300: 'CCC',
        200: 'CC',
        100: 'C',
        90: 'XC',
        80: 'LXXX',
        70: 'LXX',
        60: 'LX',
        50: 'L',
        40: 'XL',
        30: 'XXX',
        20: 'XX',
        10: 'X',
        9: 'IX',
        8: 'VIII',
        7: 'VII',
        6: 'VI',
        5: 'V',
        4: 'IV',
        3: 'III',
        2: 'II',
        1: 'I'
    }

    //Start by breaking the number in decimals
    //Calculate first decimal...
    let dec = 1;
    
    //alert(romanSymbols[1000]);

    //alert(num / dec);

    while((dec / num ) < 1){
        dec *= 10;
    }
    dec /= 10;

    let parsedNumber = [];
    
    //alert(dec);

    while(num !== 0){
        parsedNumber.push(Math.floor(num / dec) * dec); 
        
        //integer div
        
        num = num % dec; //Gets the remainder
        dec /= 10;
    }
    
    //alert(parsedNumber);
    
    let parsedRomanNumber = parsedNumber.map((value) => {
        return romanSymbols[value];
    });
    
    //alert(parsedRomanNumber);
    romanNumber = parsedRomanNumber.join("");
    

    return romanNumber;
}

convertToRoman(1017);
