// var findNumbers = function(nums) {
//     let count = 0, q;
//     for(let i = 0; i < nums.length; i++){
//         if(nums[i].toString().length % 2 === 0){
//             count++;
//         }
//     }

//     return count;
// };

// let nums = [555,901,482,1771];
// console.log(findNumbers(nums));


// function compareNumbers(a, b) {
//     return a - b;
//   }
// var sortedSquares = function(A) {
//     for(let i = 0; i < A.length; i++){
//         A[i] *= A[i];
//     }

//     A.sort(compareNumbers);

//     return A;
// };

// let A = [-4,-1,0,3,10];
// console.log(sortedSquares(A));




// var duplicateZeros = function(arr) {
//     q = arr.length;
//     for(let i = 0; i < arr.length; i++){
//         if(arr[i] === 0){
//             arr.splice(i+1, 0, 0);
//             i++;
//         }
//     }
//     for(let i = q; i < arr.length; i++){
//         arr.splice(q);
//     }

// };

// let arr = [1,0,2,3,0,4,5,0];
// console.log(duplicateZeros(arr));


// var arr = [];
// arr[0] = "Jani";
// arr[1] = "Hege";
// arr[2] = "Stale";
// arr[3] = "Kai Jim";
// arr[4] = "Borge";

// console.log(arr.join());
// arr.splice(2, 0, "Lene");
// console.log(arr.join());



// var checkIfExist = function(arr) {
//     for(let i = 0; i < arr.length; i++){
//         skip:
//         for(let j = 0; j < arr.length; j++){
//             if(i === j) continue skip;

//             if(arr[i] === 2 * arr[j])
//                 return true;

//         }

//     }

//     return false;
// };


// let arr = [3,1,7,11];
// console.log(checkIfExist(arr));

// var funMax = function(arr, k){
//     let max = arr[k];
//     for(i = k + 1; i < arr.length; i++){
//         if(arr[i] > max){
//             max = arr[i];
//         }
//     }

//     return max;
// }
// var replaceElements = function(arr) {
//     for(let i = 0; i < arr.length; i++){
//         if(i === arr.length - 1){
//             arr[i] = -1;
//             return arr;
//         }

//         arr[i] = funMax(arr, i + 1);
//     }
// };

// let arr = [17,18,5,4,6,1];
// console.log(replaceElements(arr));

// var sortArrayByParity = function(A) {
//     let foo = [];
//     for(let i = 0; i < A.length; i++){
//         if(A[i] % 2 === 0){
//             foo.push(A[i]);
//         }
//     }
//     for(let i = 0; i < A.length; i++){
//         if(A[i] % 2 !== 0){
//             foo.push(A[i]);
//         }
//     }
//     return foo;
// };

// let A = [3,1,2,4];
// console.log(sortArrayByParity(A));


// function compareNumbers(a, b) {
//     return a - b;
// }
// var mergeTwoLists = function(l1, l2) {
//     var nums = [];
//     for(var i = 0; i < l1.length; i++){
//         nums.push(l1[i]);
//     }
//     for(var i = 0; i < l2.length; i++){
//         nums.push(l2[i]);
//     }

//     nums.sort(compareNumbers);
//     return nums;
// };

// let l1 = [1,2,4], l2 = [1,3,4];
// console.log(mergeTwoLists(l1, l2));


// var rotate = function(nums, k) {
//     let save;
//     for(let i = 0; i < k; i++){
//         save = nums.pop();
//         nums.unshift(save);
//     }

//     return nums;
// };

// let nums = [1,2,3,4,5,6,7], k = 3;
// console.log(rotate(nums,k));




// const number = {
//     units: 0,
//     dozens: 0,
//     hundreds: 0,
//     tenHundreds: 0,
//     HedHundreds: 0,
// };

// function transform(a){
//     let sum = 0, proizv = 0;

//     if(a <= 9){
//         number.units = a;
//     }
//     else if(a > 9 && a <= 99){
//         number.units = Math.floor(a % 10);
//         number.dozens = Math.floor(a / 10 % 10);

//         sum = number.units + number.dozens;
//         proizv = number.units * number.dozens;

//     }
//     else if(a <= 999){
//         number.units = Math.floor(a % 10);
//         number.dozens = Math.floor(a / 10 % 10);
//         number.hundreds = Math.floor(a / 100 % 10);

//         sum = number.units + number.dozens + number.hundreds;
//         proizv = number.units * number.dozens * number.hundreds;

//     }
//     else if(a > 999 && a <= 9999){
//         number.units = Math.floor(a % 10);
//         number.dozens = Math.floor(a / 10 % 10);
//         number.hundreds = Math.floor(a / 100 % 10);
//         number.tenHundreds = Math.floor(a / 1000 % 10);

//         sum = number.units + number.dozens + number.hundreds + number.tenHundreds;
//         proizv = number.units * number.dozens * number.hundreds * number.tenHundreds;

//     }
//     else if(a > 9999 && a <= 99999){
//         number.units = Math.floor(a % 10);
//         number.dozens = Math.floor(a / 10 % 10);
//         number.hundreds = Math.floor(a / 100 % 10);
//         number.tenHundreds = Math.floor(a / 1000 % 10);
//         number.HedHundreds = Math.floor(a / 10000 % 10);

//         sum = number.units + number.dozens + number.hundreds + number.tenHundreds + number.HedHundreds;
//         proizv = number.units * number.dozens * number.hundreds * number.tenHundreds * number.HedHundreds;

//     }
//     else{
//         console.log('Введенное число не соответствует требованию');
//     }

//     return proizv - sum;
// }

// transform(35252);



// var validMountainArray = function(arr) {
//     let pnt = 0, sv;

//     if(arr.length < 2) return false;
//     if(arr[0] > arr[1]) return false;

//     for(let i = 0; i < arr.length; i++){
//         if(arr[i] === arr[i + 1]) return false;
//     }

//     for(let i = 0; i < arr.length; i++){
//         if(arr[i] > arr[i + 1]){
//             sv = i;
//             break;
//         }
//         if(arr[i] < arr[i + 1]){
//             pnt++;
//             if(pnt === arr.length - 1) return false;
//         }
//     }

//     for(let i = sv; i < arr.length; i++){
//         if(arr[i] < arr[i+1]) return false;
//     }
    
//     return true;

// };

// let arr = [0,1,2,3,4,5,6,7,8,9];
// console.log(validMountainArray(arr));



// var plusOne = function(digits) {
//     var i = digits.length - 1;
//    digits[i]++;
//    while (digits[i] > 9) {
//      digits[i] = 0;
//      if (i > 0) {
//        digits[i - 1]++;
//        i--;
//      } else {
//        digits.unshift(1);
//        break;
//      }
//    }
//    return digits
// };

// let digits = [9];
// console.log(plusOne(digits));


// var countPrimes = function(n) {
//     if (n < 2) return 0;
//     let number = [], count = 0;
//     good: 
//     for(let i = 2; i < n; i++){
//         for(let j = 2; j < i; j++){
//             if(i % j == 0){
//                 continue good;
//             }
//         }
//         count++;
//     }
//     if(count === 0)
//         return 0;
//     else
//         return count;

// };
// var countPrimes = function(n) {
//     if (n < 2) return 0;
    
//     const pNs = new Array(n).fill(1);
    
//     for (let i = 2; i < n; i++) {
//       if (pNs[i] === 1) {
//         for (let j = i + i; j < n; j = j + i) {
//           pNs[j] = 0;
//         }  
//       }
//     }
    
//     return pNs.filter(n => n).length - 2;
//   };

// let n = 499979;
// console.log(countPrimes(n));























