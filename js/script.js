// Globala variabler


let startGameBtn = document.querySelector("#startGameBtn");     // DOM-nod: knappen som du startar spelet med
const wordList = ["hey", "uppskattar", "hello"];    // Array: med spelets alla ord
let selectedWord = "";       // Sträng: ett av orden valt av en slumpgenerator från arrayen ovan
//let lettersSelectedWord = [];
let itemList;
let inputItem;
let inputItems;
let guesses = [];     // Number: håller antalet gissningar som gjorts
let letterBoxEls;         // Array av DOM-noder: Rutorna där bokstäverna ska stå
let letterButton = document.querySelectorAll("ul button"); // Array av DOM-noder: Knapparna för bokstäverna
let lettersClick = [];
let allLettersClick = [];
let guessWord = [];
let i;
let orice;



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
    //lettersSelectedWord = selectedWord.split("");

    

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
    createLetterBoxes();
   

/*
}

)*/

// Funktion som körs när du trycker på bokstäverna och gissar bokstav 

function findIndexLetter() {
    for (i = 0; i < selectedWord.length; i++) {
        orice = selectedWord.indexOf(lettersClick[i]);
        if (orice !== -1) {    
            setValue();
    }    
        }
}
    
function setValue() {
    document.getElementsByTagName("input")[orice].setAttribute("value", lettersClick);
}

//Funktion som skapar en ny array när du tryck på bokstaverna
letterButton.forEach(button => {
    button.addEventListener("click", function () {
       button.setAttribute("disabled", "");
       lettersClick = button.textContent;
       allLettersClick.push(lettersClick);
       if (selectedWord.indexOf(lettersClick) !== -1) {
        findIndexLetter()
        

            
               
            }
           
    else {
        console.log("not ok");
    }  
    }
    )
}
)









   
   
  
  

// Funktion som ropas vid vinst eller förlust, gör olika saker beroende tillståndet
// Funktion som inaktiverar/aktiverar bokstavsknapparna beroende på vilken del av spelet du är på