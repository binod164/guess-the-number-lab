const game = {
  title: 'Guess the Number!',
  biggestNum: 100,
  smallestNum: 1,
  secretNum: null,
  play: function() {
    this.secretNum = Math.floor(Math.random() * 
      (this.biggestNum - this.smallestNum + 1)) + this.smallestNum
  }
}
game.prevGuesses = [];

game.getGuess = function(){
  
  prompt( `Enter a guess between ${this.smallestNum} and ${this.biggestNum}`);
 
}
