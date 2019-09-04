
const PARENTHESES = {
  OPEN: '(',
  CLOSE: ')'
};

const BRACKETS = {
  OPEN: '[',
  CLOSE: ']'
};

export default {
  execute(str) {
    if (str === '') {
      return true;
    }

    const pipe = [];
    for (let char of str) {
      if (char === PARENTHESES.OPEN) {
        pipe.push(char);
      }

      if (char === PARENTHESES.CLOSE
          && pipe.pop() !== PARENTHESES.OPEN) {
        return false;
      }

      if (char === BRACKETS.OPEN) {
        pipe.push(char);
      }

      if (char === BRACKETS.CLOSE
          && pipe.pop() !== BRACKETS.OPEN) {
        return false;
      }
    }

    if (!pipe.length) return true;
    return false;
  }
};
