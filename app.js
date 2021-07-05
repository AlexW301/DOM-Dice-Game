/*
GAME RULES:

- The game has 2 players, playing in rounds
- In each turn, a player rolls a dice as many times as he whishes. Each result get added to his ROUND score
- BUT, if the player rolls a 1, all his ROUND score gets lost. After that, it's the next player's turn
- The player can choose to 'Hold', which means that his ROUND score gets added to his GLBAL score. After that, it's the next player's turn
- The first player to reach 100 points on GLOBAL score wins the game

*/

var score, roundScore, activePlayer, gamePlaying;
var lastRoll = [0,0];


init();


document.querySelector('.btn-roll').addEventListener('click', function() {
    if(gamePlaying){
             // 1. random number
     var dice = Math.floor(Math.random() * 6) + 1;
     var dice2 = Math.floor(Math.random() * 6) + 1;
    //  var dice = 6;
     //2. display result
     var diceDOM = document.querySelector('.dice');
     diceDOM.style.display = 'block';
     diceDOM.src = 'dice-' + dice + '.png';
     // dice 2
     var diceDOM2 = document.querySelector('.dice-2');
     diceDOM2.style.display = 'block';
     diceDOM2.src = 'dice-' + dice2 + '.png';
     // update the round score if the numberr rolled was not a 1 
    if(dice !== 1 && dice2 !== 1 && lastRoll[activePlayer] != 6)
     {
         roundScore += dice + dice2;
         document.querySelector('#current-' + activePlayer).textContent = roundScore;
         console.log(dice);
         console.log(dice2);
         if(dice === 6){
             lastRollCalc = 6;
         }
         else if (dice2 === 6){
             lastRollCalc = 6;
         }
         else if (dice !== 6 && dice2 !== 6){ 
             lastRollCalc = 2;
         }
         console.log(lastRollCalc);
         return lastRoll[activePlayer] = lastRollCalc;
     }
     if (lastRoll[activePlayer] === 6 && dice === 6 || dice2 === 6)
     {
        scores[activePlayer] = 0;
        document.getElementById('score-' + activePlayer).textContent = '0';
        nextPlayer();
     }
     else
     {
      nextPlayer();
     }
     
    }
    } 
     );


document.querySelector('.btn-hold').addEventListener('click',function(){
    if(gamePlaying){
        //Add current score to global score
    scores[activePlayer] += roundScore;
    

    // Update the UI
    document.querySelector('#score-' + activePlayer).textContent = scores[activePlayer];
   
    var input = document.querySelector('.final-score').value;
    var winningScore;
    console.log(input);

    // Check if player won the game
    if(input){
    winningScore = input;
    }
    else{
    winningScore = 100;
    }
    if(scores[activePlayer] >= winningScore){
        document.querySelector('#name-' + activePlayer).textContent = 'Winner';
        document.querySelector('.dice').style.display = 'none';
        document.querySelector('.dice-2').style.display = 'none';
        document.querySelector('.player-' + activePlayer + '-panel').classList.add('winner');
        document.querySelector('.player-' + activePlayer + '-panel').classList.remove('.active');
        gamePlaying = false;
    } else {
        document.querySelector('.player-' + activePlayer + '-panel').classList.remove('.active');
        nextPlayer();
    }
    }
    
});


function nextPlayer(){
    activePlayer === 0 ? activePlayer = 1 : activePlayer = 0
        roundScore = 0;
        lastRoll[activePlayer] = 0;

        document.getElementById('current-0').textContent = '0';
        document.getElementById('current-1').textContent = '0';

       // document.querySelector('.player-0-panel').classList.remove'active');
       // document.querySelector('.player-1-panel').classList.add('active');

       document.querySelector('.player-0-panel').classList.toggle('active');
       document.querySelector('.player-1-panel').classList.toggle('active');

       document.querySelector('.dice').style.display = 'none';
       document.querySelector('.dice-2').style.display = 'none';
}

//document.querySelector('#current-' + activePlayer).textContent = dice;
// document.querySelector('#current-' + activePlayer).innerHTML = '<em>' + dice + '<em>';

//var x = document.querySelector('#score-0').textContent;
//console.log(x);


document.querySelector('.btn-new').addEventListener('click', init);

function init(){
    scores = [0,0];
    activePlayer = 0;
    roundScore = 0;
    gamePlaying = true;

    document.querySelector('.dice').style.display = 'none';
    document.querySelector('.dice-2').style.display = 'none';

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







