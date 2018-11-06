const board = document.getElementById('hang-board');
const guessBoard = document.getElementById('guess-board');
const letterBoard = document.getElementById('letter-board');

let lives = 6;
let elements;
let winCount=0;
let wordBank = ['telephone', 'elevator', 'printer', 'library', 'dictator', 'elephant', 'machismo'];
let mysteryWord = wordBank[Math.floor(Math.random()*6)].split('');

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
createBoard(mysteryWord);

letterBoard.addEventListener('click',(event)=> {
    let tempArray = document.getElementsByClassName(`tile${event.target.dataset.letter}`);
    if (tempArray.length > 0) {
        for(let x = 0;x < tempArray.length; x++) {
            tempArray[x].style.color='#9471A9';
            winCount++;
        }
    } else if (event.target.dataset.letter) {
        lives-= 1;
        document.getElementById('man').src = `./assets/hangman ${lives}.png`;
    }
    event.target.style.color= '#9471A9';
    event.target.dataset.letter= '';
    checkWin();
})
function checkWin() {
    if (lives<= 0){
        document.getElementById('win-status').innerHTML = 'You Lose!';
        document.getElementById('hangman-restart').style.display = 'block';
    } else if(winCount === mysteryWord.length) {
        document.getElementById('win-status').innerHTML = 'You Win!';
        document.getElementById('hangman-restart').style.display = 'block';
    }
}