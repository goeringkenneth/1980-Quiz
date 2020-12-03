//start game
function game(){
    // let score=0
 function startGame() {
      const start= document.querySelector('.intro button');
      const introScreen=document.querySelector('.intro');
      const quizScreen=document.querySelector('.quiz');
      
      start.addEventListener('click', function(){
        introScreen.classList.add('fadeOut');
        quizScreen.classList.add('fadeIn');
      });
    };
    startGame();
};

// start game/timer
game();

// brings up question 1
// answer result subtract time if worng
//go to next question

// if you run out of time you lose,  get a score of 0 ,and stops game.
// alerts you have lost

// when finish with quiz stops timer, and that is your score
// brings up a promt for name(key)
// submist score into local storage.