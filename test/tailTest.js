const tail = require('../tail');
const assertEqual = require('../assertEqual');


const result = tail(["Dylan", "Pirrotta"]);

assertEqual((result === undefined || result.length < 2 ? `${result}` : `${result.join("")}`), "Pirrotta");