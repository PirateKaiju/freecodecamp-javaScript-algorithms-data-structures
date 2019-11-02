
function rot13(str) { // LBH QVQ VG!
    
    let allLetters = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
    let splitted = str.split("");
    
    //Transcription will be made only for letters
    let transc = splitted.map((letter) => {
        
        //It is a letter, apply rot13
        if(letter.match(/^[A-Za-z]/)){
        
            let pos = allLetters.indexOf(letter);
            
            pos = ((pos + 13) % 26);
            
            let transcLetter = allLetters[pos];
            
            return transcLetter;
        }
        
        //Else, it is a symbol
        return letter;
        
    });

    str = transc.join("");
    return str;
}

// Change the inputs below to test
alert(rot13("SERR CVMMN!"));

//14 -> 1

//(pos + 13) % 26

//(13 + (pos) % 13)

//14 + 