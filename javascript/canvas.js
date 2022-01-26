class HangmanCanvas {
  constructor(secretWord) {
    this.context = document.getElementById('hangman').getContext('2d');
    this.canvas = document.getElementById('hangman');
    this.secretWord = secretWord
    // ... your code goes here
  }

  createBoard() {
    this.context.clearRect(0, 0, this.canvas.width, this.canvas.height)
    this.drawLines();
  };

  drawLines() {
    let lineA = 300;
    let lineB = 325
    for (let i = 0; i < this.secretWord.length; i++) {
      this.context.beginPath();
      this.context.moveTo(lineA,5); 
      this.context.lineTo(lineB,5);
      this.context.stroke();
      this.context.closePath();
      lineA += 30;
      lineB += 30
    } 
  }

  writeCorrectLetter(index) {
    // ... your code goes here
  }

  writeWrongLetter(letter, errorsLeft) {
    // ... your code goes here
  }

  drawHangman(errorsLeft) {
    // ... your code goes here
  }

  gameOver() {
    // ... your code goes here
  }

  winner() {
    // ... your code goes here
  }
}
