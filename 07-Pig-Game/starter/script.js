'use strict';

// Selecting Elements
const player0DOM = document.querySelector('.player--0')
const player1DOM = document.querySelector('.player--1')
const score0DOM = document.querySelector('#score--0');
const score1DOM = document.querySelector('#score--1');
const current0DOM = document.querySelector('#current--0');
const current1DOM = document.querySelector('#current--1');
const diceDOM = document.querySelector('.dice');
const btnNew = document.querySelector('.btn--new');
const btnRoll = document.querySelector('.btn--roll');
const btnHold = document.querySelector('.btn--hold');

// Functions
const resetCurrentAndDie = function () {
    score0DOM.textContent = 0;
    score1DOM.textContent = 0;
    diceDOM.classList.add('hidden');
}
const disableBtns = function (bool) {
    btnHold.disabled = bool;
    btnRoll.disabled = bool;
}
const toggleBackground = function () {
    player0DOM.classList.toggle('player--active');
    player1DOM.classList.toggle('player--active');
}
// Reset scores and die

resetCurrentAndDie();

let currentScore = 0;
let activePlayer = 0;
let totalScore = [0, 0];

// Rolling Dice Functionality

btnRoll.addEventListener('click', function () {
    //1. Generating a random dice roll
    let dice = Math.floor(Math.random() * 6) + 1;

    //2. Remove hidden class, Display the Dice roll
    diceDOM.classList.remove('hidden');
    const diceImg = document.querySelector('img');
    diceImg.src = `dice-${dice}.png`;

    //3. Check for rolled 1: if true, switch to next player
    if (dice !== 1) {
        // add dice to current score
        currentScore += dice;
        document.querySelector(`#current--${activePlayer}`).textContent = currentScore;
    } else {
        // switch to next player
        document.querySelector(`#current--${activePlayer}`).textContent = 0;
        currentScore = 0;
        activePlayer = activePlayer === 0 ? 1 : 0;
        toggleBackground();
    }
});

// if user clicks hold, add current score to total score
btnHold.addEventListener('click', function () {
    // if active player is 0, add current score to totalScore[0]
    activePlayer === 0 ? totalScore[0] += currentScore : totalScore[1] += currentScore;
    // game winning events
    if (totalScore[activePlayer] >= 20) {
        document.querySelector(`.player--${activePlayer}`).classList.add('player--winner');
        diceDOM.classList.add('hidden');
        toggleBackground();
        disableBtns(true);
    }
    // update the score to the DOM
    document.querySelector(`#score--${activePlayer}`).textContent = totalScore[activePlayer];

    document.querySelector(`#current--${activePlayer}`).textContent = 0;
    currentScore = 0;
    activePlayer = activePlayer === 0 ? 1 : 0;
    toggleBackground();

});

btnNew.addEventListener('click', function () {
    // reset background for p0 and p1
    player0DOM.classList.remove('player--winner');
    player1DOM.classList.remove('player--winner');
    player0DOM.classList.add('player--active');
    player1DOM.classList.remove('player--active');
    // reset scores and die
    totalScore = [0, 0];
    resetCurrentAndDie();
    //re enable the roll dice and hold buttons
    disableBtns(false);
    // reset currentScore for p0 and p1
    currentScore = 0;
    current0DOM.textContent = 0;
    current1DOM.textContent = 0;
    // switch back to player 0 to start next game
    activePlayer = activePlayer === 1 ? 0 : 0;

})