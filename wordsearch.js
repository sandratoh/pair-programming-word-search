// Partner Programming Activity
// @sandratoh
// @Isams01

const transpose = function(matrix) {
  return matrix[0].map((_, colIndex) => matrix.map(row => row[colIndex]));
};


  
const wordSearch = (letters, word) => {
  if (letters.length === 0) {
    return undefined;
  } else {
    const transposed = transpose(letters);
    const horizontalJoin = letters.map(ls => ls.join(''));
    const verticalJoin = transposed.map(ls => ls.join(''));
    console.log(verticalJoin);
    
    if (verticalJoin.includes(word)) {
      wordSearch(transposed, word);
    } // true false
        
    for (t of verticalJoin) {
      if (t.includes(word)) return true;
    }
    
    for (l of horizontalJoin) {
      if (l.includes(word)) return true;
    }
    
    return false;
  }
};

const result = wordSearch([
  ['A', 'W', 'C', 'F', 'Q', 'U', 'A', 'L'],
  ['S', 'E', 'I', 'N', 'F', 'E', 'L', 'D'],
  ['Y', 'F', 'C', 'F', 'Q', 'U', 'A', 'L'],
  ['H', 'M', 'J', 'T', 'E', 'V', 'R', 'G'],
  ['W', 'H', 'C', 'S', 'Y', 'E', 'R', 'L'],
  ['B', 'F', 'R', 'E', 'N', 'E', 'Y', 'B'],
  ['U', 'B', 'T', 'W', 'A', 'P', 'A', 'I'],
  ['O', 'D', 'C', 'A', 'K', 'U', 'A', 'S'],
  ['E', 'Z', 'K', 'F', 'Q', 'U', 'A', 'L'],
], 'LDL');

console.log(result);


module.exports = wordSearch;