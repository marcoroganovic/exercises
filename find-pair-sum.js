function findPairSum(arr, sum) {
  var output = [];
  var lessThanSum = arr.filter(function(item) { return item < sum });

  for(var i = 0; i < lessThanSum.length; i++) {
    for(var j = i + 1; j < lessThanSum.length - i; j++) {
      if(lessThanSum[i] + lessThanSum[j] === sum) {
        output.push(lessThanSum[i], lessThanSum[j]);
        break;
      }
    }
  }

  return output;
}

var test = [3, 34, 4, 12, 5, 2];
var output = findPairSum(test, 9);
console.log(output);

var test2 = [50, 50, 23, 213];
var output2 = findPairSum(test2, 100);
console.log(output2);
