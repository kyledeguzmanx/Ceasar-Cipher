function rot13(str) {
    let array = str.split("").map(function(letter){
      
      switch(letter){
        case "A": letter="N";break;
        case "N": letter="A";break;
        
        case "B": letter="O";break;
        case "O": letter="B";break;
        
        case "C": letter="P";break;
        case "P": letter="C";break;
        
        case "D": letter="Q";break;
        case "Q": letter="D";break;
        
        case "E": letter="R";break;
        case "R": letter="E";break;
        
        case "F": letter="S";break;
        case "S": letter="F";break;
        
        case "G": letter="T";break;
        case "T": letter="G";break;
        
        case "H": letter="U";break;
        case "U": letter="H";break;
        
        case "I": letter="V";break;
        case "V": letter="I";break;
        
        case " ": letter=" ";break;
        
        case "J": letter="W";break;
        case "W": letter="J";break;
        
        case "K": letter="X";break;
        case "X": letter="K";break;
        
        case "L": letter="Y";break;
        case "Y": letter="L";break;
        
        case "M": letter="Z";break;
        case "Z": letter="M";break;
      }
        return letter;
      
    });
    return array.join("");
  }
  
  console.log(rot13("SERR PBQR PNZC"));
  