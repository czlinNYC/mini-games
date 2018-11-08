// declaring variables
const board = document.getElementById('hang-board');
let guessBoard = document.getElementById('guess-board');
const letterBoard = document.getElementById('letter-board');
const secretContainer = document.getElementById('input-container');
const enterButton = document.getElementById('enter-button');
const selectPlayers = document.getElementById('player-card-container-hang');

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

selectPlayers.addEventListener('click',(event)=>{
    if (event.target.dataset.players === "1") {
        currentPlayers = 1;
        document.getElementById('hang-player-one-card').style.color = "#9471A9";
        document.getElementById('hang-player-two-card').style.color = "white";
        document.getElementById('hang-player-one-card').style.backgroundColor = "white";
        document.getElementById('hang-player-two-card').style.backgroundColor = "#9471A9";
        secretContainer.style.display = 'none';
    } else if (event.target.dataset.players === "2") {
        currentPlayers = 2;
        document.getElementById('hang-player-two-card').style.color = "#9471A9";
        document.getElementById('hang-player-one-card').style.color = "white";
        document.getElementById('hang-player-two-card').style.backgroundColor = "white";
        document.getElementById('hang-player-one-card').style.backgroundColor = "#9471A9";
        secretContainer.style.display = 'block';
    }
});

enterButton.addEventListener('click', (event)=>{
    guessBoard.remove();
    guessBoard = document.createElement('div');
    guessBoard.id = 'guess-board';
    board.appendChild(guessBoard);

    mysteryWord = document.getElementById('input-word').value;
    createBoard(mysteryWord);
    secretContainer.style.display = 'none';
    winCount = 0;
    lives = 6;
    document.getElementById('man').src = `./assets/hangman ${lives}.png`;
})