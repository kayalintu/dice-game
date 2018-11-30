var scores, roundScore, activePlayer; // Global variables

init();

document.querySelector('.btn-roll').addEventListener('click', function () {

    // 1. Random number
    var dice = Math.floor(Math.random() * 6) + 1; // Variables in scoped

    // 2. Display he result
    var diceDOM = document.querySelector('.dice');
    diceDOM.style.display = 'block';
    diceDOM.src =  'images/' +'dice-' + dice + '.png';
    
    // 3. Update the round score IF the rolled number was NOT a 1
    if (dice > 1) {
        // Add score
        roundScore += dice; // It's equal roundScore + dice;
        document.querySelector('#current-' + activePlayer).textContent = roundScore;
    } else {
        // Next player
        nextPlayer(); // Call the function
    }

});

document.querySelector('.btn-hold').addEventListener('click', function () {
   // Add CURRENT score to GLOBAL score
    scores[activePlayer] += roundScore;

   // Update the UI
    document.querySelector('#score-' + activePlayer).textContent = scores[activePlayer];

   // Check if player won the game
    if (scores[activePlayer] >= 20) {
        document.querySelector('#name-' + activePlayer).textContent = 'Winner!';
        document.querySelector('.dice').style.display = 'none';
        document.querySelector('.player-' + activePlayer + '-panel').classList.add('winner');
        document.querySelector('.player-' + activePlayer + '-panel').classList.remove('active');
    } else {
        // Next player
        nextPlayer(); // Call the function
    }

});

// Function for DRY
function nextPlayer() {
    activePlayer === 0 ? activePlayer = 1 : activePlayer = 0;  // The same as if/else statements
    roundScore = 0;

    document.getElementById('current-0').textContent = '0';
    document.getElementById('current-1').textContent = '0';

    document.querySelector('.player-0-panel').classList.toggle('active'); // Remove or add class to active player
    document.querySelector('.player-1-panel').classList.toggle('active'); // Remove or add class to active player

    document.querySelector('.dice').style.display = 'none';
}

// Start a new game
document.querySelector('.btn-new').addEventListener('click', init);

// Reset for new game
function init() {
    scores = [0, 0];
    activePlayer = 0;
    roundScore = 0;

    document.querySelector('.dice').style.display = 'none';

    document.getElementById('score-0').textContent = '0';
    document.getElementById('score-1').textContent = '0';
    document.getElementById('current-0').textContent = '0';
    document.getElementById('current-1').textContent = '0';

    document.getElementById('name-0').textContent = 'Player 1';
    document.getElementById('name-1').textContent = 'Player 2';

    document.querySelector('.player-0-panel').classList.remove('winner');
    document.querySelector('.player-1-panel').classList.remove('winner');
    document.querySelector('.player-0-panel').classList.remove('active');
    document.querySelector('.player-1-panel').classList.remove('active');
    document.querySelector('.player-0-panel').classList.add('active');
}