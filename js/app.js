var scores, roundScore, activePlayer; // Global variables

scores = [0, 0];
roundScore = 0;
activePlayer = 0;

document.querySelector('#current-' + activePlayer).textContent = dice;
// document.querySelector('#current-' + activePlayer).innerHTML = '<em>' + dice + '</em>';

var x = document.querySelector('#score-1').textContent;
console.log(x);

document.querySelector('.dice').style.display = 'none';

document.querySelector('.btn-roll').addEventListener('click', function () {

    // 1. Random number
    var dice = Math.floor(Math.random() * 6) + 1; // scoped variables

    //2. Display he result
    var diceDOM = document.querySelector('.dice');
    diceDOM.style.display = 'block';
    
    //3. Update the round score IF the rolled number was NOT a 1

});