const board = document.getElementById('hang-board');
const guessBoard = document.getElementById('guess-board');
let word = 'word';
let mysteryWord = word.split('');
let lives = 5;
let elements;
let winCount=0;

function createBoard(wordArray){
    for(let x = 0; x< wordArray.length; x++) {
        let newTile = document.createElement('div');
        newTile.classList.add(`boardTile`);
        newTile.classList.add(`tile${wordArray[x]}`);
        newTile.dataset.letter = `${wordArray[x]}`;
        guessBoard.appendChild(newTile);
    }
}
createBoard(mysteryWord);

board.addEventListener('click',(event)=> {
    let tempArray = document.getElementsByClassName(`tile${event.target.dataset.letter}`);
    console.log(tempArray,'temp');
    if (tempArray.length > 0) {
        for(let x = 0;x < tempArray.length; x++) {
            tempArray[x].innerHTML=`${event.target.dataset.letter}`;
            winCount++;
            console.log(lives);
        }
    } else {
        lives-= 1;
        console.log(lives);
    }
    event.target.innerHTML= '';
    event.target.dataset.letter= '';
    checkWin();
})
function checkWin() {
    if (lives<= 0){
        alert('you lose');
    } else if(winCount === mysteryWord.length) {
        alert('you win')
    }
}