module.exports = function transform(arr) {
  if (!Array.isArray(arr)) throw new Error();
  let copy = Array.apply(null, arr);
  let commands = [
    "--discard-prev",
    "--double-prev",
    "--double-next",
    "--discard-next",
  ];
  copy.map((el, i, array) => {
    if (el == "--discard-prev") {
      i > 0 ? (array[i - 1] = undefined) : false;
    } else if (el == "--double-prev") {
      i > 0 ? (array[i] = array[i - 1]) : false;
    } else if (el == "--double-next") {
      i < array.length - 1 ? (array[i] = array[i + 1]) : false;
    } else if (el == "--discard-next") {
      i < array.length - 1 ? (array[i + 1] = undefined) : false;
    }
  });

  return copy.filter((el) => el != undefined && commands.indexOf(el) == -1);
};
