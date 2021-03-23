module.exports = class DepthCalculator {
  calculateDepth(arr, depth = 1) {
    if(Array.isArray(arr) && arr.length === 0) {
    return depth = 1;
       }
    else {
    arr.forEach(element => {
      if(Array.isArray(element)) {
        let counter = 1;
        counter = counter + this.calculateDepth(element, counter);
        depth = Math.max(depth, counter);
      }
    });
    }
    return depth;
};
};
