function flipPairs(str) {
  var output = "";
  var lastChar = str.length % 2 !== 0 ? str[str.length - 1] : "";
  
  for(var i = 1; i < str.length; i += 2) {
    output += str[i] + str[i - 1];
  }
  
  return lastChar ? output + lastChar : output;
}

var test = "check out how interesting this problem is, it's insanely interesting!";
var output = flipPairs(test);
console.log(output);

var test2 = "abc";
var output2 = flipPairs(test2);
console.log(output2);

var test3 = "hello";
var output3 = flipPairs(test3);
console.log(output3);
