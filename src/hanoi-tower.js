module.exports = function calculateHanoi(disksNumber, turnsSpeed) {
  let turns = 2 ** disksNumber - 1;
  let answer = {
    turns: turns,
    seconds: Math.floor(turns / (turnsSpeed / 3600)),
  };
  return answer;
};
