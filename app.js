function rle(input, compresie = true) {

    if (typeof input !== 'string' || typeof compresie !== 'boolean') {
        throw new Error('InvalidType');
      }

    if (compresie) {
      let result = '';
      let count = 1;
  
      for (let i = 0; i < input.length; i++) {
        if (input[i] === input[i + 1]) {
          count++;
        } else {
          result += input[i] + count;
          count = 1;
        }
      }
  
      return result;
    } else {
      let result = '';
  
      for (let i = 0; i < input.length; i += 2) {
        const char = input[i];
        const count = parseInt(input[i + 1], 10);
  
        result += char.repeat(count);
      }
  
      return result;
    }
  }
  
  module.exports = rle;
  