
export default {
  execute(str) {
    if (str === '') {
      return true;
    }

    const pipe = [];
    for (let char of str) {
      if (char === '(') {
        pipe.push(char);
      }

      if (char === ')' && pipe.pop() !== '(') {
        return false;
      }
    }

    if (!pipe.length) return true;
    return false;
  }
};
