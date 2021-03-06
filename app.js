const game = {
  title: 'Guess the Number!',
  biggestNum: null,
  smallestNum: null,
  secretNum: null,
  play: function() {

    this.range()
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

game.range = function(){ //Bonus:Get the smallest and biggest number
  this.biggestNum = parseInt(prompt( `Enter biggest number`));
  while(isNaN(this.biggestNum)===true){ 
    this.biggestNum = parseInt(prompt( `Please re-enter biggest number`));
}
  this.smallestNum = parseInt(prompt( `Enter smallest number`));
  while(isNaN(this.smallestNum)===true || this.smallestNum > this.biggestNum-2){ 
    this.smallestNum = parseInt(prompt( `Please re-enter smallest number`));
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

game.play();