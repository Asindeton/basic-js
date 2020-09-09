const chainMaker = {

  arr: [],

  getLength() {
    return this.arr.length;
  },

  addLink(value) {
    if (value === null) {
      this.arr.push('null');
    }
    else {
      this.arr.push(value);
    }
    return this;
  },

  removeLink(position) {
    if (position <= 0 ||
      position > this.arr.length - 1 ||
      typeof position !== 'number') {
      this.arr = [];
      throw new Error('');
    }

    this.arr.splice(position - 1, 1);
    return this;
  },

  reverseChain() {
    this.arr.reverse();
    return this;
  },

  finishChain() {
    const result = `( ${this.arr.join(' )~~( ')} )`;
    this.arr = [];
    return result;
  }
};


module.exports = chainMaker;
