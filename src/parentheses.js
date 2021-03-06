export default {
  execute(str) {
    if (str === '') {
      return true;
    }

    let replacedResult = str.replace(/\(\)/gi, '');
    replacedResult = replacedResult.replace(/\[\]/gi, '');
    replacedResult = replacedResult.replace(/\{\}/gi, '');

    if (replacedResult === '') {
      return true;
    }

    if (replacedResult === str) {
      return false;
    }

    return this.execute(replacedResult);
  }
};
