

var pres = [ 'cobain' , 'page' , 'hendrix' , 'waters' , 'vai' , 'prince' ];

var chosenword = pres[Math.floor(Math.random() * pres.length)];
var rightLetter = []
var wrongLetter = []
var underScoreArray = [];





var initialGuess = 15

var initialWin = 1



function underscores() {
  for (var iund = 0; iund < chosenword.length; iund++) {
    underScoreArray.push('_');
    document.getElementById('underId').innerHTML = underScoreArray
  }
  
}

function startGame() {
 initialGuess = 15
 chosenword = pres[Math.floor(Math.random() * pres.length)];
  
  underScoreArray = []
  wrongLetter = []

  underscores()
  document.getElementById('underId').innerHTML = underScoreArray.join(' ');

   document.getElementById('guessId').innerHTML = 15
    document.getElementById('letterId').innerHTML = ""
   
    



}




document.onkeyup = function(event){

  var keyCode = event.keyCode ;
  var keyletter = String.fromCharCode(event.keyCode).toLowerCase()


  if (chosenword.indexOf(keyletter) > -1) {
       // rightLetter.push(keyWord);
        document.getElementById('guessId').innerHTML = initialGuess++
       
        underScoreArray[chosenword.indexOf(keyletter)] = keyletter
        document.getElementById('underId').innerHTML = underScoreArray.join('');


       
  } 

    if (underScoreArray.join('') == chosenword) {
      document.getElementById('winId').innerHTML = initialWin++
     underscores()
        // Resets the game
        startGame();
   

    }

    


  else{
    wrongLetter.push(keyletter);
    document.getElementById('guessId').innerHTML = initialGuess--
    document.getElementById('letterId').innerHTML = wrongLetter


    
  }



  if ( initialGuess === 0) {
    initialGuess = 15
       startGame()
  }

}



