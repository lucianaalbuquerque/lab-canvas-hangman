class Hangman {
  constructor(words) {
    this.words = words;
    this.letters = [];
    this.secretWord = '';
    this.guessedLetters = '';
    this.errorsLeft = 10;
  }

  pickWord() {
    let randomIndex = Math.floor(Math.random() * this.words.length + 1); 
    return this.words[randomIndex];
  }

  checkIfLetter(keyCode) {
    if(keyCode.matches("[a-zA-Z]+")) {
      return true;
    } 
      return false;
    
  }

  checkClickedLetters(letter) {
    this.letters.find( letter => {
      if (this.letters.includes(letter)) {
        return true;
      } else {
        return false;
      }
    })
  }

  addCorrectLetter(letter) {
    this.guessedLetters += letter;
  }

  addWrongLetter(letter) {
    this.errorsLeft -= 1;
    if (!this.letters.includes(letter)) {
      this.letters.push(letter);
    }
  }

  checkGameOver() {
    if (this.errorsLeft > 0 ) {
      return false
    } else if (this.errorsLeft = 0 ) {
      return true;
    }
  }

  checkWinner() {
    if (this.guessedLetters.length === this.secretWord.length) {
      return true;
    }
  };
}

let hangman;

const startGameButton = document.getElementById('start-game-button');

if (startGameButton) {
  startGameButton.addEventListener('click', event => {
    hangman = new Hangman(['node', 'javascript', 'react', 'miami', 'paris', 'amsterdam', 'lisboa']);

    hangman.secretWord = hangman.pickWord();
    hangmanCanvas = new HangmanCanvas(hangman.secretWord);

    hangmanCanvas.createBoard();
  });
}

document.addEventListener('keydown', event => {
  
  // React to user pressing a key
  // ... your code goes here
});
