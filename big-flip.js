function reverse(str) {
  return str.split("").reverse().join("");
}

function splitAtN(str, n) {
  var arr = [];
  for(var i = 0; i < str.length; i += n) {
    arr.push(str.substr(i, n));
  }
  return arr;
}


function bigFlip(str, n) {
  var output = "";
  var arr = splitAtN(str, n);
  for(var i = 0; i < arr.length; i++) {
    output += reverse(arr[i]);
  }
  return output;
}

var test = "a short example";
var output = bigFlip(test, 5);
console.log(output);
