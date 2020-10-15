
// You should implement your task here.

module.exports = function towelSort (matrix) {
  var x = []
  if (matrix === undefined) {
    return x;
  }
  for (var i = 0; i < matrix.length; i++) {
    if (i % 2 !== 0) {
      var s = matrix[i].sort ((a, b) => b - a);
      x = x.concat(matrix[i]);
    } else {
      x = x.concat(matrix[i]);
    }
  }
  return x;
}
