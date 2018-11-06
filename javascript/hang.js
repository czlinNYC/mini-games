// declaring variables
const board = document.getElementById('hang-board');
const guessBoard = document.getElementById('guess-board');
const letterBoard = document.getElementById('letter-board');

let lives = 6;
let elements;
let winCount=0;
let wordBank = ['telephone', 'elevator', 'printer', 'library', 'dictator', 'elephant', 'machismo'];
let mysteryWord = wordBank[Math.floor(Math.random()*6)].split('');
// draws the tiles for the mysterword
function createBoard(wordArray){
    for(let x = 0; x< wordArray.length; x++) {
        let newTile = document.createElement('div');
        newTile.innerHTML = `<center>${wordArray[x]}</center>`;
        newTile.classList.add(`boardTile`);
        newTile.classList.add(`tile${wordArray[x]}`);
        newTile.dataset.letter = `${wordArray[x]}`;
        guessBoard.appendChild(newTile);
    }
}
// calling it
createBoard(mysteryWord);
// main click function
letterBoard.addEventListener('click',(event)=> {
    // cycles through the mystery word and array and activates each letter
    let tempArray = document.getElementsByClassName(`tile${event.target.dataset.letter}`);
    if (tempArray.length > 0) {
        for(let x = 0;x < tempArray.length; x++) {
            tempArray[x].style.color='#9471A9';
            winCount++;
        }
    // swaps picture if not correct
    } else if (event.target.dataset.letter) {
        lives-= 1;
        document.getElementById('man').src = `./assets/hangman ${lives}.png`;
        document.getElementById('man').style.display = `block`; 
    }
    event.target.style.color= '#9471A9';
    event.target.dataset.letter= '';
    checkWin();
})
// checks for win and shows restart button if win or loss has occured.
function checkWin() {
    if (lives<= 0){
        document.getElementById('win-status').innerHTML = 'You Lose!';
        document.getElementById('hangman-restart').style.display = 'block';
    } else if(winCount === mysteryWord.length) {
        document.getElementById('win-status').innerHTML = 'You Win!';
        document.getElementById('hangman-restart').style.display = 'block';
    }
}