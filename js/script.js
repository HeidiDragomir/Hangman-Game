// Globala variabler


let startGameBtn = document.querySelector("#startGameBtn");     // DOM-nod: knappen som du startar spelet med
const wordList = ["hey", "uppskattar", "helloo"];    // Array: med spelets alla ord
let selectedWord;       // Sträng: ett av orden valt av en slumpgenerator från arrayen ovan
let itemList;
let inputItem;
let guesses = [ ];     // Number: håller antalet gissningar som gjorts
let letterBox;         // Array av DOM-noder: Rutorna där bokstäverna ska stå
let letterButton = document.querySelectorAll("ul button"); // Array av DOM-noder: Knapparna för bokstäverna

let lettersElement = null;

let maxWrong = 6;   //Number: 
let hangmanImg;      // Sträng: sökväg till bild som kommer visas (och ändras) fel svar. t.ex. `/images/h1.png`
let msgHolderEl;     // DOM-nod: Ger meddelande när spelet är över


/*
// Funktion som startar spelet vid knapptryckning, och då tillkallas andra funktioner
startGameBtn.addEventListener("click", function startGame() {*/




    // Funktion som slumpar fram ett ord
    function generateRandomWord() {
        selectedWord = wordList[Math.floor(Math.random() * wordList.length)];
    }
    generateRandomWord();
    wordList.push(selectedWord);
    

// Funktion som tar fram bokstävernas rutor, antal rutor beror på vilket ord slumptas fram
    function createLetterBoxes() {
        for (let i = 0; i < selectedWord.length; i++) {
            letterBox = document.querySelector("#letterBoxes > ul");
            letterBox.setAttribute("id", "selected-word");
            itemList = document.createElement("li");
            letterBox.appendChild(itemList);
            inputItem = document.createElement("input");
            inputItem.setAttribute("type", "text");
            inputItem.setAttribute("class", "letter");
            inputItem.setAttribute("value", "");
            itemList.appendChild(inputItem);
        }
    }
    createLetterBoxes();
   

/*
}

)*/





// Funktion som körs när du trycker på bokstäverna och gissar bokstav 


letterButton.forEach(button => {
    button.addEventListener("click", function guessWord() {
       console.log(guesses.push(button.textContent));
        
    });
});

//letterButton.addEventListener("click", function guessWord() {
   
   
  
   /*if (selectedWord.includes(letter)) {
       const indexesList = getindexes(letter);
       indexesList.forEach((val, i) => {
           letterButton[value].textContent = this.textContent;
       });
   }*/







// Funktion som ropas vid vinst eller förlust, gör olika saker beroende tillståndet
// Funktion som inaktiverar/aktiverar bokstavsknapparna beroende på vilken del av spelet du är på