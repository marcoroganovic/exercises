function format(a, b) {
  a = a || " ";
  b = b || " ";
  return a + " " + b;
}

function transpose(arr) {
  var output = "";
  var first = arr[0], second = arr[1];
  var greater = first.length > second.length ? first.length : second.length;

  for(var i = 0; i < greater; i++) {
    output += format(first[i], second[i]);
    if(i !== greater - 1) output += "\n";
  }

  return output;
}

var test = ["Hello", "World"];
var output = transpose(test);
console.log(output);

console.log("\n");

var test2 = ["Hack", "Reactor"];
var output2 = transpose(test2);
console.log(output2);
