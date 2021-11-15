let board = [];
let moves = [];

function newGame() {
    board = [["", "", ""],["", "", ""],["", "", ""]];
    moves = ["0,0", "0,1","0,2","1,0","1,1","1,2","2,0","2,1","2,2"];
    console.log("Board Created.\nThe game will start with X");
}

function playerMove () {
    return moves[Math.floor(Math.random() * moves.length)];
}

function inputValidator(input){
    if(typeof input !== "number" || (0 > input || input > 2)){
        throw new Error("Invalid input");
    }

    return true;
}

function validateCollection (collection) {
    let winner = '';
    collection.forEach(row => {
        if(row.every(value => value === "X")) {
            winner = "Player X won!";
        } else if(row.every(value => value === "O")) {
            winner = "Player O won!";
        }
    });
    return winner;
}

function checkVertical (board) {
    let verticalLineColl = [];
    for(i = 0; i < board.length; i++){
        let verticalLine = [];
        for(j=0; j<board[i].length; j++){
            verticalLine.push(board[j][i])
        }
        verticalLineColl.push(verticalLine);
    }
    return validateCollection(verticalLineColl);
}

function checkHorizontal (board) {
    return validateCollection(board);
}

function checkDiagonal (board) {
    let winner = '';
    let rightDiagonal = [];
    let leftDiagonal = [];
    for (let i = 0; i < board.length; i++) {
        rightDiagonal.push(board[i][i]);
        leftDiagonal.push(board[i][board.length-i-1]);
    }

    if(rightDiagonal.every(value => value === "X")) {
        winner = "Player X won!";
    } else if(rightDiagonal.every(value => value === "O")) {
        winner = "Player O won!";
    }
    if(leftDiagonal.every(value => value === "X")) {
        winner = "Player X won!";
    } else if(leftDiagonal.every(value => value === "O")) {
        winner = "Player O won!";
    }

    return winner;
}