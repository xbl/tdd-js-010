
export default {
  execute(str) {
    if (str === '') {
      return true;
    }

    if (str === '()') {
      return true;
    }

    return false;
  }
};
