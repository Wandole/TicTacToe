function DisplayBoard(game) {

    this.game = game;
    this.boardArray = game.gameBoard;

    this.winnerElement = document.querySelector(".winner-display");
    this.gameBoardElement = document.querySelector(".game-board");
    this.playerNameElement = document.querySelector(".player-name");
    this.btnNewGameElement = document.querySelector(".btn-new-game-container");
    this.btnResetElement = document.querySelector(".btn-reset-container");


    this.displayCase = (posX, posY) => {
        const boardCase = document.querySelector(`[data-type="${posX}-${posY}"]`);

        if (this.game.getValueAtPosition(posX, posY) == 0) {
            boardCase.innerHTML = "";
        }
        else {
            boardCase.innerHTML = this.game.getValueAtPosition(posX, posY);
        }
    }

    this.resovleDisplay = (play, winner) => {
        let textwinner = "";

        this.displayWinner();

        if (play == "tie") {
            textwinner = "Tie game!";
        }
        else{
            textwinner = `${winner.str()} won!`;
        }
        
        this.winnerElement.innerHTML = textwinner;
    }


    this.resetGameBoard = () => {
        this.game.reset();
        this.boardArray = game.gameBoard;

        this.displayGameBoard();

        for (let i = 0; i < 3; i++){
            for (let j = 0; j < 3; j++){
                this.displayCase(i, j);
            }
        }
    }

    this.displayGameBoard = () => {
        this.winnerElement.style.display = "none";
        this.gameBoardElement.style.display = "flex";
        this.playerNameElement.style.display = "none";
        this.btnNewGameElement.style.display = "flex";
        this.btnResetElement.style.display = "flex";
    }

    this.displayPlayer = () => {
        this.winnerElement.style.display = "none";
        this.gameBoardElement.style.display = "none";
        this.playerNameElement.style.display = "flex";
        this.btnNewGameElement.style.display = "none";
        this.btnResetElement.style.display = "none";
    }

    this.displayWinner = () => {
        this.winnerElement.style.display = "flex";
        this.gameBoardElement.style.display = "none";
        this.playerNameElement.style.display = "none";
        this.btnNewGameElement.style.display = "flex";
        this.btnResetElement.style.display = "flex";
    }

    this.displayScore = () => {
        document.querySelector(".player-one-score").innerHTML = `${this.game.playerOne.str()}: ${this.game.playerOne.nbrWin}`;
        document.querySelector(".player-two-score").innerHTML = `${this.game.playerTwo.str()}: ${this.game.playerTwo.nbrWin}`;
    }


}

export {DisplayBoard}