// declaring variables
const board = document.getElementById('match-board');
const selectPlayers =  document.getElementById('player-card-container-match');
let cards = [1,2,3,4,1,2,3,4];
let cards2 = [1,2,3,4,1,2,3,4];
let gameStatus = [];
let pick1='';
let pick2='';
let card1='';
let card2='';
let pick1raw='';
let winCount=0;
let currentPlayers = 1;
let firstPick= false;
let playerOneScore = 0;
let playerTwoScore = 0;
let oneFinal = 0;
let twoFinal = 0;

// shuffling the board
function setBoard(deck) {
    let temp = deck;
    for(let x = 0;x < 8;x++) {
        let numb = Math.floor(Math.random()*temp.length) +1;
        let index = temp.indexOf(numb);
        let loader = temp.splice(index,1)
        gameStatus.push(loader[0]);
        document.getElementById(`card${x}`).dataset.card = loader[0];
    }
    for(let x = 0; x < gameStatus.length;x++) {
    }
}

setBoard(cards);
// handles visuals for turn container
selectPlayers.addEventListener('click',(event)=>{
    if (event.target.dataset.players === "1") {
        currentPlayers = 1;
        document.getElementById('match-player-one-card').style.color = "#489CCA";
        document.getElementById('match-player-two-card').style.color = "white";
        document.getElementById('match-player-one-card').style.backgroundColor = "white";
        document.getElementById('match-player-two-card').style.backgroundColor = "#489CCA";
        document.getElementById('score-container').style.display = 'none';
    } else if (event.target.dataset.players === "2") {
        currentPlayers = 2;
        document.getElementById('match-player-two-card').style.color = "#489CCA";
        document.getElementById('match-player-one-card').style.color = "white";
        document.getElementById('match-player-two-card').style.backgroundColor = "white";
        document.getElementById('match-player-one-card').style.backgroundColor = "#489CCA";
        document.getElementById('score-container').style.display = 'flex';
    }
});
// shows cards that have been clicked and saves them if they have are correct
board.addEventListener('click',(event)=>{
    if(!pick1 && !pick2 && event.target.dataset.card) {
        event.target.src = `./assets/card${event.target.dataset.card}.png`;
        pick1 = event.target.dataset.card;
        pick1raw = event.target.id;
        card1= event.target
        startScore();
    } else if(pick1 && !pick2 && event.target.dataset.card && pick1raw != event.target.id) {
        event.target.src = `./assets/card${event.target.dataset.card}.png`;
        pick2 = event.target.dataset.card;
        pick1raw = event.target.id;
        card2= event.target
        // if correct allows immediate selection of more cards
        if (pick1 === pick2 ) {
            winCount++;
            card1 = '';
            card2 = '';
            pick1= '';
            pick2= '';
            pick1raw='';
            checkWin();
        } else {
    // time delay on incorrect choices
        setTimeout(clearPicks, 2000);
        }
    }
})
function startScore() {
    if (firstPick === false && currentPlayers === 2 && playerOneScore === 0){
        setTimeout(function(){addScore(1);}, 1000);
        firstPick = true;
    } else if (firstPick === false && currentPlayers === 2 && playerTwoScore === 0) {
        setTimeout(function(){addScore(2);}, 1000);
        firstPick = true;
    }
}
function addScore(player) {
    timer = true;
    if (player === 1) {
        playerOneScore++;
    } else if (player === 2) {
        playerTwoScore++;
    }
   setTimeout(function(){addScore(player);}, 1000);
}
// clears the cards if they have been chosen
function clearPicks() {
    card2.src = './assets/memory game card back.png';
    card1.src = './assets/memory game card back.png';
    pick1= '';
    pick2= '';
    pick1raw ='';
}
// checks if win has occurred and shows restart button
function checkWin() {
    if(winCount=== 4 && currentPlayers === 2 && playerTwoScore === 0) {
        let deck = document.getElementsByClassName('match-card');
        Array.prototype.forEach.call(deck, (item)=>{
            item.src = './assets/memory game card back.png';
        })
        firstPick = false;
        document.getElementById('player-one-seconds').innerHTML = playerOneScore ;
        oneFinal = playerOneScore;
        winCount = 0;
        setBoard(cards2);
    } else if (winCount=== 4 && currentPlayers === 2 && playerOneScore > 0 && playerTwoScore > 0){
        document.getElementById('player-two-seconds').innerHTML = playerTwoScore;
        twoFinal = playerTwoScore;
        if (oneFinal < twoFinal){
            document.getElementById('win-announce').innerHTML = 'P1 wins!';
        } else if (twoFinal < oneFinal){
            document.getElementById('win-announce').innerHTML = 'P2 wins!';
        } else {
            document.getElementById('win-announce').innerHTML = 'Draw!';
        }
         
        document.getElementById('memory-restart').style.display = 'block';
    } else if (winCount === 4 && currentPlayers === 1){
        document.getElementById('win-announce').innerHTML = 'You Win!';
        document.getElementById('memory-restart').style.display = 'block';
    }
}