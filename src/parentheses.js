
const PARENTHESES = {
  OPEN: '(',
  CLOSE: ')'
};

const BRACKETS = {
  OPEN: '[',
  CLOSE: ']'
};

const holderMap = {
  '(': PARENTHESES,
  ')': PARENTHESES,
  '[': BRACKETS,
  ']': BRACKETS,
};

const compare = (char, pipe) => {
  const holder = holderMap[char];
  if (char === holder.OPEN) {
    pipe.push(char);
  }

  if (char === holder.CLOSE
      && pipe.pop() !== holder.OPEN) {
    return false;
  }

  return true;
};

export default {
  execute(str) {
    if (str === '') {
      return true;
    }

    const pipe = [];
    for (let char of str) {
      if (!compare(char, pipe)) {
        return false;
      }
    }

    if (!pipe.length) return true;
    return false;
  }
};
