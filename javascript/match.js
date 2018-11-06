// declaring variables
const board = document.getElementById('match-board');
let cards = [1,2,3,4,1,2,3,4];
let gameStatus = [];
let pick1='';
let pick2='';
let card1='';
let card2='';
let pick1raw='';
let winCount=0;
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
// shows cards that have been clicked and saves them if they have are correct
board.addEventListener('click',(event)=>{
    if(!pick1 && !pick2 && event.target.dataset.card) {
        event.target.src = `./assets/card${event.target.dataset.card}.png`;
        pick1 = event.target.dataset.card;
        pick1raw = event.target.id;
        card1= event.target
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
    if(winCount=== 4) {
        document.getElementById('win-announce').innerHTML = 'You Win!';
        document.getElementById('memory-restart').style.display = 'block';
    }
}