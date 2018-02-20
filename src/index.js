class Sorter {
  constructor() {
    this.myArray = []; 
    this.comparator = (a, b) => a - b;    
  }

  add(element) {
    this.myArray.push(element);
  }

  at(index) {
    return this.myArray[index];
  }

  get length() {
    return this.myArray.length;
  }

  toArray() {
    return this.myArray;
  }

  sort(indices) {
    let bufferArray = [];
    bufferArray.sort(this.comparator);
  }

  setComparator(compareFunction) {
    // your implementation
    this.myArray = compareFunction;
  }
}

module.exports = Sorter;