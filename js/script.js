// Globala variabler

// Array: med spelets alla ord
const wordList = ["egenskap", "uppskattar", "omständighet"];

// Sträng: ett av orden valt av en slumpgenerator från arrayen ovan
let selectedWord = "";

// DOM-nod: knappen som du startar spelet med
let startGameBtn = document.querySelector("#startGameBtn");

// Array av DOM-noder: Rutorna där bokstäverna ska stå
let letterBox = document.querySelector("#letterBoxes > ul");

let maxWrong = 6;   //Number: 
let guesses = 0;     // Number: håller antalet gissningar som gjorts
let hangmanImg;      // Sträng: sökväg till bild som kommer visas (och ändras) fel svar. t.ex. `/images/h1.png`

let msgHolderEl;     // DOM-nod: Ger meddelande när spelet är över
let letterButtonEls; // Array av DOM-noder: Knapparna för bokstäverna


// Funktion som startar spelet vid knapptryckning, och då tillkallas andra funktioner
//startGameBtn.addEventListener("click", function startGame() {

    // Funktion som slumpar fram ett ord
    function generateRandomWord() {
        selectedWord = wordList[Math.floor(Math.random() * wordList.length)];
    }
    generateRandomWord();


     // Funktion som tar fram bokstävernas rutor, antal rutor beror på vilket ord slumptas fram
    /*function createLetterBoxes() {
        for(let i = 0; i < selectedWord.length; i++) {
        selectedWord.push(i);

     }
console.log(selectedWord);

    }*/

//}

//)






// Funktion som körs när du trycker på bokstäverna och gissar bokstav
// Funktion som ropas vid vinst eller förlust, gör olika saker beroende tillståndet
// Funktion som inaktiverar/aktiverar bokstavsknapparna beroende på vilken del av spelet du är på