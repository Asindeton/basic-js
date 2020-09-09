const MODERN_ACTIVITY = 15;
const HALF_LIFE_PERIOD = 5730;
const k = 0.693 / HALF_LIFE_PERIOD;

module.exports = function dateSample(sampleActivity) {
  if (typeof sampleActivity !== "string") return false;
  let num = parseFloat(sampleActivity);
  if (!num || num > MODERN_ACTIVITY || num < 0) return false;
  return Math.ceil(Math.log(MODERN_ACTIVITY / num) / k);
};
