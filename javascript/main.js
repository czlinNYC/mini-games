// declaring variables and setting back end board
const ticTac = document.getElementById('board');
let playerTurn = 'X';
let gameOver = false;
let turnCount = 0;
let gameBoard =[
    [0,0,0],
    [0,0,0],
    [0,0,0]
] 

// main click function 
ticTac.addEventListener('click',((event)=> {
    // checks if the square ahs been played if not marks the backend and front end boards
    if (!event.target.dataset.played && event.target.dataset.x) {
        if (playerTurn === 'X' ) {
            event.target.src = './assets/tic tac toe x.png';
            turnCount++;
        } else if (playerTurn === 'Y' && event.target.dataset.x) {
            event.target.src = './assets/tic tac toe o.png';
            turnCount++;
        }
         if (event.target.dataset.x) {
            gameBoard[event.target.dataset.x][event.target.dataset.y]= playerTurn;
            event.target.dataset.played = 'true';
         }
        checkWin(playerTurn);
        alertWinner();
        // change turns
        if(playerTurn === 'X') {
            playerTurn = 'Y';
            document.getElementById('turn-indicator').innerHTML = 'Y moves!';
        } else {
            playerTurn = 'X';
            document.getElementById('turn-indicator').innerHTML = 'X moves!';
        }
    }
}));
// check win function. gross. no easy way to do it.
function checkWin(plyr) {
    if ((gameBoard[0][0] === plyr && gameBoard[0][1] === plyr && gameBoard[0][2] === plyr) ||
        (gameBoard[1][0] === plyr && gameBoard[1][1] === plyr && gameBoard[1][2] === plyr) ||
        (gameBoard[2][0] === plyr && gameBoard[2][1] === plyr && gameBoard[2][2] === plyr) ||
        (gameBoard[0][0] === plyr && gameBoard[1][0] === plyr && gameBoard[2][0] === plyr) ||
        (gameBoard[0][1] === plyr && gameBoard[1][1] === plyr && gameBoard[2][1] === plyr) ||
        (gameBoard[0][2] === plyr && gameBoard[1][2] === plyr && gameBoard[2][2] === plyr) ||
        (gameBoard[0][0] === plyr && gameBoard[1][1] === plyr && gameBoard[2][2] === plyr) ||
        (gameBoard[0][2] === plyr && gameBoard[1][1] === plyr && gameBoard[2][0] === plyr)
       ) { gameOver = true; }
           
    }
// alerts winner and makes the restart button appear
function alertWinner() {
    if (gameOver === true) {
        document.getElementById('tac-win').innerHTML= `${playerTurn} wins!`;
        document.getElementById('tictac-restart').style.display = 'block';
    } else if (turnCount === 9) {
        document.getElementById('tac-win').innerHTML= `Draw!`;
        document.getElementById('tictac-restart').style.display = 'block';
    }
}