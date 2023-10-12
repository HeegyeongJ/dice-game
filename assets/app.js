const btnRollDice = document.querySelector('.btn__rolling');
const btnHold = document.querySelector('.btn__hold');
const diceImg = document.querySelector('.dice');
const player1Current = document.querySelector('.player1-current');
const player2Current = document.querySelector('.player2-current');

let rolledNum = 0;
let currentNum = 0;

const toggleClass = () => {
    player1Current.classList.toggle('current-player');
    player2Current.classList.toggle('current-player'); 
    
}

const rollingDice = () => {
    rolledNum = parseInt(Math.random()* 6 + 1);
    diceImg.src = `assets/imgs/dice0${rolledNum}.png`
    
    const current = document.querySelector('.current-player');

    
    if (rolledNum >= 3) {
        currentNum += rolledNum;
        current.innerText = currentNum;
    } else {
        rolledNum = 0;
        currentNum = 0;
        current.innerText = 0;
        toggleClass();
        return;
    }
    
}

const holding = () => {

}

    

btnRollDice.addEventListener('click', rollingDice);
btnHold.addEventListener('click', holding)