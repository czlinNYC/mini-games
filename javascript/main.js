const ticTac = document.getElementById('board');
let playerTurn = 'X';
let gameOver = false;
let gameBoard =[
    [0,0,0],
    [0,0,0],
    [0,0,0]
] 


ticTac.addEventListener('click',((event)=> {
    event.target.innerHTML = playerTurn;
    gameBoard[event.target.dataset.x][event.target.dataset.y]= playerTurn;
    checkWin(playerTurn);
    alertWinner();
    if(playerTurn === 'X') {
        playerTurn = 'Y';
    } else {
        playerTurn = 'X';
    }
}));

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

function alertWinner() {
    if (gameOver === true) {
        alert(`Player ${playerTurn} has won!`)
    }
}