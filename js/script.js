// Globala variabler


let startGameBtn = document.querySelector("#startGameBtn");     // DOM-nod: knappen som du startar spelet med
const wordList = ["hey", "uppskattar", "hello"];    // Array: med spelets alla ord
let selectedWord = "";       // Sträng: ett av orden valt av en slumpgenerator från arrayen ovan
let lettersSelectedWord = [];
let itemList;
let inputItem;
let inputItems;
let guesses = 0;     // Number: håller antalet gissningar som gjorts
let letterBoxEls;         // Array av DOM-noder: Rutorna där bokstäverna ska stå
let letterButton = document.querySelectorAll("ul button"); // Array av DOM-noder: Knapparna för bokstäverna
let lettersClick = [];
let allLettersClick = [];
let guessWord = [];
let i;
let index;
let lives = 6;




let hangmanImg;      // Sträng: sökväg till bild som kommer visas (och ändras) fel svar. t.ex. `/images/h1.png`
let msgHolderEl = "Du har förlorat!";     // DOM-nod: Ger meddelande när spelet är över


// Funktion som slumpar fram ett ord
function generateRandomWord() {
        selectedWord = wordList[Math.floor(Math.random() * wordList.length)];
}

// Funktion som tar fram bokstävernas rutor, antal rutor beror på vilket ord slumptas fram
function createLetterBoxes() {
    for (i = 0; i < selectedWord.length; i++) {
        letterBoxEls = document.querySelector("#letterBoxes > ul");
        letterBoxEls.setAttribute("id", "selected-word");
        itemList = document.createElement("li");
        letterBoxEls.appendChild(itemList);
        inputItem = document.createElement("input");
        inputItem.setAttribute("class", "letter")
        itemList.appendChild(inputItem);
    }
}

// Funktion som startar spelet vid knapptryckning, och då tillkallas andra funktioner
startGameBtn.addEventListener("click", function startGame() {
    generateRandomWord();
    wordList.push(selectedWord);
    lettersSelectedWord = selectedWord.split("");
    createLetterBoxes();
 }
)

// Funktion som körs när du trycker på bokstäverna och gissar bokstav 

function findIndexLetter() {
    for (i = 0; i < selectedWord.length; i++) {
        index = selectedWord.indexOf(lettersClick, i); 
        if (index !== -1) {    
            setValue();
            
    }    
        }
}

//Set the value attribute to all letters which are the same with the ones from selectedWord
function setValue() {
    document.getElementsByTagName("input")[index].setAttribute("value", lettersClick);
}

function decreaseLife() {
    lives--;
    if (lives === 0) {
        alert(msgHolderEl);
    }
}
//Funktion som skapar en ny array när du tryck på bokstaverna
letterButton.forEach(button => {
    button.addEventListener("click", function () {
       button.setAttribute("disabled", "");
       lettersClick = button.textContent;
       allLettersClick.push(lettersClick);
       findIndexLetter();
       if (selectedWord.indexOf(lettersClick) !== -1) {
        
        
        
        }
          
    else {
        
        for (let j = 6; j >= guesses; j--) {
            hangmanImg = `images/h${guesses + 1}.png`;
            document.querySelector("img").src = hangmanImg;
            
        }
            guesses++;
            
        
        
        
        
    }  
    }
    )
}
)









   
   
  
  

// Funktion som ropas vid vinst eller förlust, gör olika saker beroende tillståndet
// Funktion som inaktiverar/aktiverar bokstavsknapparna beroende på vilken del av spelet du är på