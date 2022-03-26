'use strict';

let num = 266219;

let count = num.toString().split("");
let total = 1;

// for (let i = 0; i < count.length; ++i) {
//   total *= +count[i];
// }

count.forEach(function (e) {
  total *= e;
});

console.log(total);

total **= 3;

console.log(total.toString().slice(0, 2));