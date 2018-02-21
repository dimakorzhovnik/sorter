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
      let tmpList = [];
      indices.sort();
      for (let i = 0; i < indices.length; i++) {
          tmpList.push(this.myArray[indices[i]]);
      }
      tmpList.sort(this.comparator);
      for (let i = 0; i < tmpList.length; i++) {
          this.myArray[indices[i]] = tmpList[i];
      }
  }
  

  setComparator(compareFunction) {
    // your implementation
    this.comparator = compareFunction;
  }
}

module.exports = Sorter;