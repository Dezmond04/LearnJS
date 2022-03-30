'use scrict';

let arr = ['257846', '784276', '35671', '689567', '2456723', '157686', '4256827'];

arr.forEach(function (item) {
  if (item.startsWith('2') || item.startsWith('4')) {
    console.log(item);
  }
});



// const primeNumber = function () {

//   for (let i = 2; i < 101; i++) {
//     for (let e = 2; e <= i; e++) {
//       const x = 2;
//       if (i % e == 0 && i % x !== 0) {
//         console.log(i + " Делители этого числа: 1 и " + i);
//         break;
//       }
//     }
//   }
// };

// primeNumber();


let n = 100;
for (let i = 2; i <= n; i++) {
  let e = 1;
  for (let j = 2; j <= i/2 && e == 1; j = j + 1) {
     if (i % j == 0) {
       e = 0;
     }
    }
  
  if (e == 1) {
    console.log(i  + " Делители этого числа: 1 и " + i);
  }
}