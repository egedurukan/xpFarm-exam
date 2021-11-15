const fs = require('fs');

const chai = require('chai');
const assert = chai.assert;
chai.should();

eval(fs.readFileSync('./tictactoe.js')+'');