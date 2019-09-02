
export default {
  execute(str) {
    if (str === '') {
      return true;
    }

    const replacedResult = str.replace(/\(\)/gi, '');
    if (replacedResult === '') {
      return true;
    }

    return false;
  }
};
