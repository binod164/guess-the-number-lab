const game = {
  title: 'Guess the Number!',
  biggestNum: 100,
  smallestNum: 1,
  secretNum: null,
  play: function() {
    
    this.secretNum = Math.floor(Math.random() * 
      (this.biggestNum - this.smallestNum + 1)) + this.smallestNum
      
      do{
        this.prevGuesses.push(this.getGuess());
        this.render();
      }while(this.guess !== this.secretNum)

      //Using while loop
      // while(this.prevGuesses.length === 0 || this.guess !== this.secretNum){
      //   this.prevGuesses.push(this.getGuess());
      //   this.render();
      // }
  }
}
game.prevGuesses = [];
game.guess = null;
game.getGuess = function(){
  this.guess = parseInt(prompt( `Enter a guess between ${this.smallestNum} and ${this.biggestNum}`));
  while(isNaN(this.guess)===true || this.guess>this.biggestNum || this.guess<this.smallestNum){ 
    this.guess = parseInt(prompt( `Please re-enter a guess between ${this.smallestNum} and ${this.biggestNum}`));
  }
  return this.guess;
}
game.render = function(){
  if(this.guess === this.secretNum){
        alert(`Congrats! You guessed the number in ${this.prevGuesses.length} guesses!`)
  } else{
          if(this.guess>this.secretNum){
            alert(`Your guess is too high. Previous guesses:${this.prevGuesses.join(" , ")}`)
            this.biggestNum = this.guess;//Bonus
          }else{
            alert(`Your guess is too low. Previous guesses: ${this.prevGuesses.join(" , ")}`)
            this.smallestNum = this.guess;//Bonus
            
          }
    }
}
