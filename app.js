const game = {
  title: 'Guess the Number!',
  biggestNum: 100,
  smallestNum: 1,
  secretNum: null,
  play: function() {
    this.secretNum = Math.floor(Math.random() * 
      (this.biggestNum - this.smallestNum + 1)) + this.smallestNum
      
      console.log(this.secretNum);
      while(this.prevGuesses.length === 0 || this.prevGuesses[this.prevGuesses.length - 1] !== this.secretNum){
        this.prevGuesses.push(this.getGuess());
        this.render();
        
      }

      return; 
  }
}
game.prevGuesses = [];

game.getGuess = function(){
  let guess = parseInt(prompt( `Enter a guess between ${this.smallestNum} and ${this.biggestNum}`));
  while(isNaN(guess)===true || guess>this.biggestNum || guess<this.smallesttNum){ 
    guess = parseInt(prompt( `Re - Enter a guess between ${this.smallestNum} and ${this.biggestNum}`));
  }
  return guess;
}

game.render = function(){
  if(this.prevGuesses[this.prevGuesses.length - 1] === this.secretNum){
        alert(`Congrats! You guessed the number in ${this.prevGuesses.length}!`)
       } else{
          if(this.prevGuesses[this.prevGuesses.length - 1]>this.secretNum){
            alert(`Your guess is too high. Previous guesses:${this.prevGuesses.join()}`)
          }else{
            alert(`Your guess is too low. Previous guesses: ${this.prevGuesses.join()}`)
            
         }
        }
}

// game.play();