function isEven(arg) {
  return arg % 2 === 0;
}

function outlier(str) {
  var odd = [];
  var even = [];
  var split = str.split(" ");

  for(var i = 0; i < split.length; i++) {
    if(isEven(+split[i])) { 
      even.push(i + 1);
      continue;
    }
    odd.push(i + 1);
  }

  return odd.length > even.length ? even[0] : odd[0];
}

var test = "2 4 7 8 10";
var output = outlier(test); // -> shoud be 3
console.log(output);

var test2 = "1 10 1 1";
var output2 = outlier(test2); // -> should be 2
console.log(output2);
