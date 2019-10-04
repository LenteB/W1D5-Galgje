let gekozenLetter;
let aantalLevens;
let maxAantalLevens;
let buttonGuess;
let buttonStart;

let randomWoorden = ['dehydreren', 'exogeen', 'panorama', 'belegging', 'metalen'];
let alfabet = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];

const wordPicker= randomWoorden[Math.random() * randomWoorden.length | 0];
console.log("Current Word: " + "_ ".repeat(wordPicker.length));

function checkGuessInput(){
    let inputText= document.getElementById("guessTextInput").value;
    document.write(inputText);
}

/*- Pak het random gekozen woord uit de array
kijk hoeveel letters het zijn en print zoveel
streepse als de lente van het woord-->
<h1><script>document.write("- - - - - - - - ");</script></h1>
    for (let i = 0; i < juisteWoord.length; i++) {
       
    }       
    document.getElementById('').onkeypress= returnGekozenLetter;
function returnGekozenLetter()
    /*Als gebruiker heb ik 5 levens, dit wordt met tekst weergegeven. Als de letter fout is gaat er 1 leven vanaf
document.getElementById("") = maxAantalLevens;
*/