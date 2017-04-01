var arr_1 = process.argv;
var total = 0;
for (var i = 2; i < arr_1.length; i++) {
  total += parseInt(arr_1[i]);
}
console.log(total);
