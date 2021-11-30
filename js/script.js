// Globala variabler


let startGameBtn = document.querySelector("#startGameBtn");
const wordList = ["erfarenhet", "uppskatta", "förvirring", "genomgång", "djupdykning", "förinställning", "omvärdera", "användarna", "igenkänning", "hänvisning"];
let selectedWord = "";
let lettersSelectedWord = [];
let itemList;
let inputItem;
let mistakes = 1;
let letterBoxEls;
let letterButton = document.querySelectorAll("ul button");
let lettersClick = [];
let index;
let guesses = 0;
let fltLetters = [];
let hangmanImg;
let msgHolderWin = "Snyggt jobbat! Du har vunnit! Om du vill spela igen tryck på Starta spelet knapp!";
let msgHolderLose = "Tyvärr, du har förlorat! Ingen panik, du kan spela igen. Tryck på Starta spelet knapp!";
    
    
    

// Funktion som slumpar fram ett ord
function generateRandomWord() {
        selectedWord = wordList[Math.floor(Math.random() * wordList.length)];
}

// Funktion som tar fram bokstävernas rutor, antal rutor beror på vilket ord slumptas fram
function createLetterBoxes() {
    for (let i = 0; i < selectedWord.length; i++) {
        letterBoxEls = document.querySelector("#letterBoxes > ul");
        letterBoxEls.setAttribute("id", "selected-word");
        itemList = document.createElement("li");
        letterBoxEls.appendChild(itemList);
        inputItem = document.createElement("input");
        inputItem.setAttribute("class", "letter");
        inputItem.setAttribute("disabled", "");
        itemList.appendChild(inputItem);
    }
}

// Funktion som körs när du trycker på bokstäverna och gissar bokstav 
function findIndexLetter() {
    for (let i = 0; i < selectedWord.length; i++) {
        index = selectedWord.indexOf(lettersClick, i); 

        if (index !== -1) {
            setValue();   
        }  
    }   
} 


//Funktion som lägger till attributet "value" till gissade bokstaverna
function setValue() {
    document.getElementsByTagName("input")[index].setAttribute("value", lettersClick);
}

//Funktion som filterar word selected bokstaverna för att veta hur många det finns (de som upprepar bara en gång)
function uniqueValues() {
    fltLetters = lettersSelectedWord.filter((value, index, array) => array.indexOf(value) === index);
}

//Funktion som räknar alla felen och för varje fel dyker upp hangman bilden; om du har vunnit dyker upp en meddelande
function countMistakes() {
    for (let j = 6; j >= mistakes; j--) {
        hangmanImg = `images/h${mistakes}.png`;
        document.querySelector("img").src = hangmanImg;
        let countMistakes = document.querySelector("#mistakes");
        countMistakes.textContent = mistakes;  
    }
    mistakes++;
    if (mistakes === 7) {
        alert(msgHolderLose);
        setInterval(reloadPage, 2000);  
    }    
}

//Funktion som reload sidan i fall av vinnet/förlorat
function reloadPage() {
    history.go(0);
}


// Event som startar spelet vid knapptryckning, och då tillkallas andra funktioner
startGameBtn.addEventListener("click", function startGame() {
    generateRandomWord();
    wordList.push(selectedWord);
    lettersSelectedWord = selectedWord.split("");
    createLetterBoxes();
    letterButton.forEach(button => {
        button.addEventListener("click", function () {
            button.setAttribute("disabled", "");
            lettersClick = button.textContent;
            findIndexLetter();
            uniqueValues();
            
            if (selectedWord.indexOf(lettersClick) !== -1) {
                guesses++;
                if (guesses == fltLetters.length) {
                    alert(msgHolderWin);
                    setInterval(reloadPage, 1500); 
                }
            }
    
            else {
                countMistakes();   
            } 
        }
        )
    }
    )
}
)
    











   
   
  
  


// Funktion som inaktiverar/aktiverar bokstavsknapparna beroende på vilken del av spelet du är på