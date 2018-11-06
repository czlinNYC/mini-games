// declaring variables and setting back end board
const ticTac = document.getElementById('board');
let playerTurn = 'X';
let gameOver = false;
let gameBoard =[
    [0,0,0],
    [0,0,0],
    [0,0,0]
] 

// main click function 
ticTac.addEventListener('click',((event)=> {
    // checks if the square ahs been played if not marks the backend and front end boards
    if (!event.target.dataset.played) {
        if (playerTurn === 'X' ) {
            event.target.src = './assets/tic tac toe x.png';
        } else if (playerTurn === 'Y' ) {
            event.target.src = './assets/tic tac toe o.png';
        }
        gameBoard[event.target.dataset.x][event.target.dataset.y]= playerTurn;
        event.target.dataset.played = 'true';
        checkWin(playerTurn);
        alertWinner();
        // change turns
        if(playerTurn === 'X') {
            playerTurn = 'Y';
        } else {
            playerTurn = 'X';
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
    }
}