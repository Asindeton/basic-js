module.exports = function countCats(matrix) {
  let answer = 0;
  matrix.toString().split(',').map(e => e === '^^' ? answer++:false);
  return answer;
};
