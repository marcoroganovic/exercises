function isRotated(a, b) {
  var repeated = a + a;
  return repeated.indexOf(b) === -1 ? false : true;
}

console.log(isRotated("hello world", "orldhello w"));
