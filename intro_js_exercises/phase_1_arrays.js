array = [-3,1,1,-5,2,3,5];

Array.prototype.uniq = function() {
  let result = [];
  for (let i = 0; i < this.length; i++) {
      if (!result.includes(this[i])) {
      result.push(this[i]);
    }
  }
  return result;
};

Array.prototype.twosum = function() {
  let result = [];
  for (let j = 1; j < this.length; j++) {
    for (let i = 0; i < this.length - 1; i++) {
      if (this[i] + this[j] === 0) {
        result.push([i,j]);
      }
    }
  }
  return result;
};

nested = [[1,2],[3,4],[5,6]];
Array.prototype.transpose = function () {
  let result = [];
  for (let i = 0; i < this.length; i++) {
    result.push([]);
  }
  for (let i = 0; i < this.length; i++) {
    for (let j = 0; j < this.length; j++) {
      result[j].push(this[i][j]);
    }
  }
  return result;
};

// console.log(array.twosum());