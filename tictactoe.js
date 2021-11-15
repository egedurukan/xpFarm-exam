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