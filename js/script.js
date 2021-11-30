// Globala variabler


    let startGameBtn = document.querySelector("#startGameBtn");     // DOM-nod: knappen som du startar spelet med
    const wordList = ["hey", "uppskattar", "hello"];    // Array: med spelets alla ord
    let selectedWord = "";       // Sträng: ett av orden valt av en slumpgenerator från arrayen ovan
    let lettersSelectedWord = [];
    let itemList;
    let inputItem;
    let mistakes = 1;     // Number: håller antalet gissningar som gjorts
    let letterBoxEls;         // Array av DOM-noder: Rutorna där bokstäverna ska stå
    let letterButton = document.querySelectorAll("ul button"); // Array av DOM-noder: Knapparna för bokstäverna
    let lettersClick = [];
    let allLettersClick = [];
    let index;
    let guesses = 0;
    let orice = [];
    let hangmanImg;      // Sträng: sökväg till bild som kommer visas (och ändras) fel svar. t.ex. `/images/h1.png`
    let msgHolderWin = "Snyggt jobbat! Du har vunnit! Om du vill spela igen tryck på Starta spelet knapp!";
    let msgHolderLose = "Du har förlorat! Ingen panik, du kan spela igen. Tryck på Starta spelet knapp!";     // DOM-nod: Ger meddelande när spelet är över
    
    
    

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
    
    
    //Set the value attribute to all letters which are the same with the ones from selectedWord
    function setValue() {
        document.getElementsByTagName("input")[index].setAttribute("value", lettersClick);
        
        
    }
    function uniqueValues() {
        orice = lettersSelectedWord.filter((value, index, array) => array.indexOf(value) === index);
      }
    
    
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
    
    function reloadPage() {
        history.go(0);
    }
    
    
    // Funktion som startar spelet vid knapptryckning, och då tillkallas andra funktioner
    startGameBtn.addEventListener("click", function startGame() {
        generateRandomWord();
        wordList.push(selectedWord);
        lettersSelectedWord = selectedWord.split("");
        createLetterBoxes();
        letterButton.forEach(button => {
            button.addEventListener("click", function () {
               button.setAttribute("disabled", "");
               lettersClick = button.textContent;
               allLettersClick.push(lettersClick);
              findIndexLetter();
              uniqueValues();
              
              if (selectedWord.indexOf(lettersClick) !== -1) {
                guesses++;
                
                
                if (guesses == orice.length) {
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
    
    
    //Funktion som skapar en ny array när du tryck på bokstaverna
    











   
   
  
  


// Funktion som inaktiverar/aktiverar bokstavsknapparna beroende på vilken del av spelet du är på