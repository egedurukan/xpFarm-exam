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