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