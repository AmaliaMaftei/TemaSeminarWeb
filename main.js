const rle = require('./app');

 const compressedRle1 = rle("aaaabbbbcccc", true);
const compressedRle2 = rle("x3z3", false);


console.log(compressedRle1);
console.log(compressedRle2);
