
export default {
  execute(str) {
    if (str === '') {
      return true;
    }

    const pipe = [];
    for (let chart of str) {
      if (chart === '(') {
        pipe.push(chart);
      }

      if (chart === ')') {
        pipe.pop();
      }
    }

    if (!pipe.length) return true;
    return false;
  }
};
