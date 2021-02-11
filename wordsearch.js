// Partner Programming Activity
// @sandratoh
// @Isams01

const transpose = function(matrix) {
  return matrix[0].map((_, colIndex) => matrix.map(row => row[colIndex]));
};

const wordSearch = (letters, word) => {
  const transposed = transpose(letters);
  const horizontalJoin = letters.map(ls => ls.join(''));

  for (l of horizontalJoin) {
    if (l.includes(word)) return true;
  }

  const verticalJoin = transposed.map(ls => ls.join(''));
  for (t of verticalJoin) {
    if (t.includes(word)) return true;
  }

  return false;
};


module.exports = wordSearch;