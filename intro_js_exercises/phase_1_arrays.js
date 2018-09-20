Array.prototype.uniq = function() {
  let result = [];
  let i = 0;
  for (let i = 0; i < this.length; i++) {
    if (!result.includes(this[i])) {
    result.push(this[i]);}
  }
  return result;
};
// 
// let array = new Array;
array = [1,1,2,3,5];
// 
// console.log(array.uniq);

