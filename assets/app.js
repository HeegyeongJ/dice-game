const btnRollDice = document.querySelector('.btn__rolling');
const btnHold = document.querySelector('.btn__hold');
const diceImg = document.querySelector('.dice');
const playerBox = document.querySelectorAll('.player-box');
const currentPlayer = document.querySelectorAll('.current-score');
const playerScore = document.querySelectorAll('.player-score');
let playingPlayerScore;
let current;



let rolledNum = 0;
let currentNum = 0;
let playerNum = 0;


const toggleClass = () => {
    playerNum = 0;
    currentNum = 0
    current.innerText = 0;
    for (let i = 0; i < currentPlayer.length; i++){
        currentPlayer[i].classList.toggle('current-player');
    }
    for (let i = 0; i < playerBox.length; i++){
        playerBox[i].classList.toggle('current-player-bg');
    }
    for (let i = 0; i < playerScore.length; i++){
        playerScore[i].classList.toggle('player-score-plus');
    }
    
}

const rollingDice = () => {
    rolledNum = parseInt(Math.random()* 6 + 1);
    diceImg.src = `assets/imgs/dice0${rolledNum}.png`

    current = document.querySelector('.current-player');

    if (rolledNum >= 3) {
        currentNum += rolledNum;
        current.innerText = currentNum;
    } else {
        rolledNum = 0;
        currentNum = 0;
        current.innerText = 0;
        toggleClass();
    }

}


const holding = () => {
    currentNum = current.innerText * 1;
    playerNum += currentNum;
    playingPlayerScore = document.querySelector('.player-score-plus');
    playingPlayerScore.innerText = playerNum;
    
    toggleClass();
}

    

btnRollDice.addEventListener('click', rollingDice);
btnHold.addEventListener('click', holding);