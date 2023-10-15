

let current;



let rolledNum = 0;
let currentNum = 0;
let player1Count = 0;
let player2Count = 0;



function appStart() {
    const btnRollDice = document.querySelector('.btn__rolling');
    const btnHold = document.querySelector('.btn__hold');
    const btnNew = document.querySelector('.btn__new-game');

    const playerBox = document.querySelectorAll('.player-box');
    const currentPlayer = document.querySelectorAll('.current-score');
    const playerScore = document.querySelectorAll('.player-score');




    const displayGameover = () => {
        const body = document.querySelector('body');
        const div = document.createElement('div');
        div.innerText = 'gameover';
        const gameoverDiv = body.appendChild(div);
        gameoverDiv.classList.add('.gameover');
    }
    const gameOver = () => {
        btnRollDice.removeEventListener('click', rollingDice);
        btnHold.removeEventListener('click', holding);
        displayGameover();
    }

    const toggleClass = () => {
        if (player1Count >= 50 || player2Count >= 50) return gameOver();
        currentNum = 0
        current.innerText = 0;
        for (let i = 0; i < currentPlayer.length; i++) {
            currentPlayer[i].classList.toggle('current-player');
        }
        for (let i = 0; i < playerBox.length; i++) {
            playerBox[i].classList.toggle('current-player-bg');
        }
        for (let i = 0; i < playerScore.length; i++) {
            playerScore[i].classList.toggle('player-score-plus');
        }

    }

    const setNewGame = () => {
        player1Count = 0;
        player2Count = 0;
        for (let i = 0; i < playerScore.length; i++) {
            playerScore[i].innerText = 0;
        }
    }

    const rollingDice = () => {

        rolledNum = parseInt(Math.random() * 6 + 1);
        const diceImg = document.querySelector('.dice');
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
        const playingPlayerScore = document.querySelector('.player-score-plus');

        if (playingPlayerScore.dataset.player == 1) {
            player1Count += currentNum;
            playingPlayerScore.innerText = player1Count;
        } else {
            player2Count += currentNum;
            playingPlayerScore.innerText = player2Count;
        }
        toggleClass();
    }




    btnRollDice.addEventListener('click', rollingDice);
    btnHold.addEventListener('click', holding);
    btnNew.addEventListener('click', setNewGame);
}

appStart();
