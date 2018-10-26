const board = document.getElementById('match-board');
let cards = [1,2,3,4,1,2,3,4];
let gameStatus = [];
let pick1='';
let pick2='';
let card1='';
let card2='';
let winCount=0;
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

board.addEventListener('click',(event)=>{
    if(!pick1 && !pick2) {
        event.target.innerHTML = event.target.dataset.card;
        pick1 = event.target.dataset.card;
        card1= event.target
    } else if(pick1 && !pick2) {
        event.target.innerHTML = event.target.dataset.card;
        pick2 = event.target.dataset.card;
        card2= event.target
        setTimeout(clearPicks, 2000);
    }
})

function clearPicks() {
    if (pick1 != pick2 ) {
    card2.innerHTML = '';
    card1.innerHTML = '';
    pick1= '';
    pick2= '';
    } else if (pick1 === pick2 ) {
        winCount++;
        card1.remove();
        card2.remove();
        card1 = '';
        card2 = '';
        pick1= '';
        pick2= '';
    }
    checkWin();
}

function checkWin() {
    if(winCount=== 4) {
        alert('you win!');
    }
}