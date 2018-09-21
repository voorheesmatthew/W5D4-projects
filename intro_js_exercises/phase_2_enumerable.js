Array.prototype.myEach = function (callback) {
  for (let i = 0; i < this.length; i++) {
    callback(this[i]);
  }
};

function exclaim(name){
  console.log(name + "!");
  return `${name}!`;
}

Array.prototype.myMap = function (callback) {
  let result = [];
  // for (let i = 0; i < this.length; i++) {
  //   result.push(callback(this[i]));
  // }
  this.myEach(function (element) {
    result.push(callback(element));
  });
  return result;
};

function decrement(n) {
  return n - 1;
}

simple = [1,2,3,4];

strings = ["a","b","c"];

Array.prototype.myReduce = function (callback, initialValue) {
  let result = initialValue || this.shift();
  for (let i = 0; i < this.length; i++) {
    result = callback(result,this[i]);
  }
  return result;
};

function sum(a, b) {
  let s = a + b;
  console.log(s);
  return s;
}

function product(a, b) {
  let p = a * b;
  console.log(p);
  return p;
}