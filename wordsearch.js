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

module.exports = wordSearch;