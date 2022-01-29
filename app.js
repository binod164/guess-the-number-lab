const game = {
  title: 'Guess the Number!',
  biggestNum: 100,
  smallestNum: 1,
  secretNum: null,
  play: function() {
    this.secretNum = Math.floor(Math.random() * 
      (this.biggestNum - this.smallestNum + 1)) + this.smallestNum

      getGuess();
  }
}
game.prevGuesses = [];

game.getGuess = function(){
  let guess;
  console.log( `Enter a guess between ${smallestNum} and ${biggestNum}`);
  // if(typeof newGuparseInt(guess) !== 'number'){
  //   return NaN;
  // }else{
  //   while(newGuess>=smallestNum && newGuess<=biggestNum){
  //     if(newGuess === secretNum){
  //       return `Congrats! You guessed the number in ${prevGuesses}!`
  //     }else{
  //       if(newGuess>secretNum){
  //         return `Your guess is too high. Previous guesses `
  //       }else{
  //       return `Your guess is too low. Previous guesses `
  //       }
  //     }
  //   }
  // }
  
}
console.log(game);