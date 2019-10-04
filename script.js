let gekozenLetter;
let aantalLevens;
let maxAantalLevens;
let buttonGuess;
let buttonStart;

let randomWoorden = ['dehydreren', 'exogeen', 'panorama', 'belegging', 'metalen'];
let alfabet = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];

let pickedWord= randomWoorden[Math.random() * randomWoorden.length | 0];
console.log("Current Word: " + "_ ".repeat(pickedWord.length));

/*Split pickedWord in aparte letters */
let str = (pickedWord);
let res = str.split("");
console.log(res);

function checkGuessInput(){
    let inputText= document.getElementById("guessTextInput").value;
    document.write(inputText);
}

/* Loop: Komt de gekozenLetter overeen met 1 of meer van de juisteLetters array? 
    Ja: weergeef letter(s) op de juiste plaats
    Nee: er verdwijnt 1 van de 5 levens */

    


 /*Als gebruiker heb ik 5 levens, dit wordt met tekst weergegeven. Als de letter fout is gaat er 1 leven vanaf
*/
