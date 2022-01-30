const game = {
  title: 'Guess the Number!',
  biggestNum: 100,
  smallestNum: 1,
  secretNum: null,
  play: function() {
    this.secretNum = Math.floor(Math.random() * 
      (this.biggestNum - this.smallestNum + 1)) + this.smallestNum
      console.log(this.secretNum);
      // this.getGuess();
      
  }
}
game.prevGuesses = [];

game.getGuess = function(){
  
  
  // }
}




  // if(typeof parseInt(guess) !== 'number'){
  //   return NaN;
  // }else{
  //   while(guess>=this.smallestNum && guess<=this.biggestNum){
  //     if(guess === secretNum){
  //       alert(`Congrats! You guessed the number in ${this.prevGuesses}!`)
  //     }else{
  //       if(guess>this.secretNum){
  //         alert(`Your guess is too high. Previous guesses`)
  //       }else{
  //       alert(`Your guess is too low. Previous guesses`)
  //       }
      // }
  //   }
  // }
  



game.play();
// console.log(this.prevGuesses);
