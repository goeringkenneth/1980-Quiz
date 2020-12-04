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

       
        
        function setTimer() {
          var timerEl=document.querySelector('.timer');
  var secondsLeft=60*2;
    var timerInterval = setInterval(function() {
      secondsLeft--;
      timerEl.textContent= secondsLeft+"sec Left";
  
      if(secondsLeft === 0) {
        clearInterval(timerInterval);
      }
      
  
    }, 1000);console.log(timerEl);
  
  
 
      
    
// brings up question 1
// start game/timer
    // function takeQuiz(){
    //   var options=document.querySelectorAll('.quiz button');
    //   var questionEl=document.querySelector('.question')
    //   var optionsEl=options.
    //   options.forEach(option=>{
    //     option.addEventListener("click", function(){
    //       console.log(this);
    //     });
    //   });
      
    //   };


    //   takeQuiz();
    };
    setTimer();
    });
  };
  startGame();
};

      
    
    
// answer result subtract time if worng
//go to next question





game();

// answer result subtract time if worng
//go to next question

// if you run out of time you lose,  get a score of 0 ,and stops game.
// alerts you have lost

// when finish with quiz stops timer, and that is your score
// brings up a promt for name(key)
// submist score into local storage.
