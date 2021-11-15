const fs = require('fs');

const chai = require('chai');
const assert = chai.assert;
chai.should();

eval(fs.readFileSync('./tictactoe.js')+'');

newGame();

describe('test playerMove()', () => {
    it('should return existing element from moves list',() => {
        const movelist = ["0,0", "0,1","0,2","1,0","1,1","1,2","2,0","2,1","2,2"];
        movelist.includes(playerMove()).should.equal(true);
    });
});

describe('test inputValidator', () => {
    it('should return true on corect input', () => {
        inputValidator(1,0).should.equal(true);
    });

    it('should throw error on incorrect input', () => {
        assert.throws(() => { inputValidator(5,0) }, Error);
    });

    it('should throw error on incorrect input type', () => {
        assert.throws(() => { inputValidator("1",0) }, Error);
    });
});

describe('test checkVertical()', () => {
    it('should return with the winner X on 3 vertical match', () => {
        const currentBoard = [["X","",""],["X","",""],["X","",""]];
        checkVertical(currentBoard).should.equal("Player X won!");
    });

    it('should return with the winner O on 3 vertical match', () => {
        const currentBoard = [["O","",""],["O","",""],["O","",""]];
        checkVertical(currentBoard).should.equal("Player O won!");
    });

    it('should return empyt when no vertical matches', () => {
        const currentBoard = [["X","",""],["X","",""],["O","",""]];
        checkVertical(currentBoard).should.equal("");
    });
});

describe('test checkHorizontal()', () => {
    it('should return with the winner X on 3 horizontal match', () => {
        const currentBoard = [["X","X","X"],["","",""],["","",""]];
        checkHorizontal(currentBoard).should.equal("Player X won!");
    });

    it('should return with the winner O on 3 horizontal match', () => {
        const currentBoard = [["","",""],["O","O","O"],["","",""]];
        checkHorizontal(currentBoard).should.equal("Player O won!");
    });

    it('should return empyt when no vertical matches', () => {
        const currentBoard = [["X","",""],["X","",""],["O","",""]];
        checkHorizontal(currentBoard).should.equal("");
    });
});