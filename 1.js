//27. Remove Element

// var removeElement = function(nums, val) {
//     for(let i = 0; i < nums.length; i++){
//         if(nums[i] === val){
//             nums.splice(i, 1);
//             i--;
//         }
//     }

//     return nums;
// };


// let nums = [3,2,2,3], val = 3;
// console.log(removeElement(nums, val));

//374. Guess Number Higher or Lower
//66. Plus One


//507. Perfect Number

// var checkPerfectNumber = function(num) {
//     let arr = [], sum = 0;
//     for(let i = 0; i < num; i++){
//         if(num % i === 0){
//             arr.push(i);
//         }
//     }
    
//     for(let i = 0; i < arr.length; i++){
//         sum += arr[i];
//     }
    
//     if(sum === num){
//         return true;
//     }
//     else{
//         return false;
//     }
// };

// let num = 6;
// console.log(checkPerfectNumber(num));


//204. Count Primes
// var countPrimes = function(n) {
//     let number = [];
//     good: 
//     for(let i = 2; i <= n; i++){
//         for(let j = 2; j < i; j++){
//             if(i % j == 0){
//                 continue good;
//             }
//         }
//         number.push(i);
//     }
//     if(number.length === 0)
//         return 0;
//     else
//         return number;

// };

// let n = 1;
// console.log(countPrimes(n));


//1480. Running Sum of 1d Array
// var runningSum = function(nums) {
//     let arr = [], sum = 0;
//     for(let i = 0; i < nums.length; i++){
//         for(let j = 0; j <= i; j++){
//             sum += nums[j];
//         }

//         arr.push(sum);
//         sum = 0;
//     }

//     return arr;
// };

// let nums = [3,1,2,10,1];
// console.log(runningSum(nums));





//287. Find the Duplicate Number
// var findDuplicate = function(nums) {
//     for(let i = 0; i < nums.length; i++){
//         arr:
//         for(let j = 0; j < nums.length; j++){
//             if(i === j) continue arr;
//             if(nums[i] === nums[j]) return nums[i];
//         }
//     }
// };


// let nums = [1,1,2];
// console.log(findDuplicate(nums));


// var defangIPaddr = function(address) {
    //let newStr = address.replaceAll('.', '[.]');
    // let newStr = address.replace(/\./gi, '[.]'); //Регулярное выражение

//     return newStr;
// };
// address = "1.1.1.1";
// console.log(defangIPaddr(address));

//1512. Number of Good Pairs
// var numIdenticalPairs = function(nums) {
//     let count = 0;
//     for(let i = 0; i < nums.length; i++){
//         qwe:
//         for(let j = 0; j < nums.length; j++){
//             if(i === j) continue qwe;
//             if(nums[i] === nums[j] && i < j) count++; 
//         }
//     }

//     return count;
// };

// let nums = [1,2,3];
// console.log(numIdenticalPairs(nums));



//1662. Check If Two String Arrays are Equivalent
// var arrayStringsAreEqual = function(word1, word2) {
//     let str1 = '', str2 = '';

//     for(let i = 0; i < word1.length; i++){
//         str1 += word1[i];
//     }

//     for(let i = 0; i < word2.length; i++){
//         str2 += word2[i];
//     }

//     if(str1 === str2) return true;
//     else return false;
// };

// let word1  = ["abc", "d", "defg"], word2 = ["abcddefg"];
// console.log(arrayStringsAreEqual(word1,word2));

//771. Jewels and Stones
// var numJewelsInStones = function(J, S) {
//     let count = 0;

//     for(let i = 0; i < J.length; i++){
//         for(let j = 0; j < S.length; j++){
//             if(J[i] === S[j]) count++;
//         }
//     }
//     return count;
// };

// let J = "z", S = "ZZ";
// console.log(numJewelsInStones(J,S));

//709. To Lower Case
// var toLowerCase = function(str) {
//     return str.toLowerCase();
// };

// let str = "LOVELY";
// console.log(toLowerCase(str));


//1572. Matrix Diagonal Sum
// var diagonalSum = function(mat) {
//     let sum = 0;
//     let n = mat.length, k = Math.floor(n / 2);
//     for(let i = 0, j = 0; i < mat.length && j < mat.length; i++, j++){
//         sum += mat[i][j];
//     }

//     for(let i = 0, j = mat.length - 1; i < mat.length; i++, j--){
//         sum += mat[i][j];
//     }
    
//     if(n % 2 !== 0) sum -= mat[k][k];

//     return sum;
// };

// let mat = [[7,3,1,9],[3,4,6,9],[6,9,6,6],[9,5,8,5]];

// console.log(diagonalSum(mat));

//961. N-Repeated Element in Size 2N Array
// var repeatedNTimes = function(A) {
//     let count = 0;
//     for(let i = 0; i < A.length; i++){
//         arr:
//         for(let j = 0; j < A.length; j++){
//             if(i === j) continue arr;

//             if(A[i] === A[j]){
//                 count++;
//             }
//         }

//         if (count >= A.length / 2) return A[i];
//     }
// };

// let A = [5,1,5,2,5,3,5,4];
// console.log(repeatedNTimes(A));

// var reverseString = function(s) {
//     return s.reverse();
// };

// let s = ["H","a","n","n","a","h"];
// console.log(reverseString(s));



//1342. Number of Steps to Reduce a Number to Zero
// var numberOfSteps  = function(num) {
//     let count = 0;
//     if(num === 0) return 0;
//     do{
//         if(num % 2 === 0){
//             num /= 2;
//             count++;
//         }
//         else{
//             num -=1;
//             count++;
//         }
//     }while(num !== 0);

//     return count;
// };

// let num = 123;
// console.log(numberOfSteps(num));


// 1404. Number of Steps to Reduce a Number in Binary Representation to One
// var numSteps = function(s) {
//     let num = BigInt("0b"+s); 
//     let count = 0;
//     console.log(num);
//     if(num === 1) return 0;
//     while(num !== 1){
//         if(num % 2 === 0){
//             num /= 2;
//             count++;
//         }
//         else{
//             num +=1;
//             count++;
//         }
//     }

//     return count;
// };
// let s = "1111011110000011100000110001011011110010111001010111110001";
// console.log(numSteps(s));

//657. Robot Return to Origin
// var judgeCircle = function(moves) {
//     let arr = [0,0], check = [0,0];
//     let count = 0;
//     for(let i = 0; i < moves.length; i++){
//         switch(moves[i]){
//             case "U": arr[0] += 1; break;
//             case "D": arr[0] -= 1; break;
//             case "L": arr[1] -= 1; break;
//             case "R": arr[1] += 1; break;
//         }
//     }

//     for(let i = 0; i < arr.length; i++){
//         if(arr[i]===check[i]) count++;
//     }
    
//     if(count === arr.length) return true;
//     else return false;
// };

// let moves = "LDRRLRUULR";
// console.log(judgeCircle(moves));



// function compareNumbers(a, b) {
//     return a - b;
//   }
  
// var sortArray = function(nums) {
//     return nums.sort(compareNumbers);
// };
// let nums = [5,2,3,1];
// console.log(sortArray(nums));

//412. Fizz Buzz
// var fizzBuzz = function(n) {
//     let fb = [];
//     for(let i = 1; i <= n; i++){
//         if((i % 3 === 0) && (i % 5 === 0)){
//             fb.push('FizzBuzz');
//         }
//         else if(i % 5 === 0){
//             fb.push('Buzz');
//         }
//         else if(i % 3 === 0){
//             fb.push('Fizz');
//         }
//         else fb.push(i.toString());
    
//     }
//     return fb;
// };

// let n = 15;
// console.log(fizzBuzz(n));




//1394. Find Lucky Integer in an Array

// var findLucky = function(arr) {
//     let count = 0, Lucky = 0;

//     for(let i = 0; i < arr.length; i++){
//         count = 0;
//         for(let j = 0; j < arr.length; j++){
//             if(arr[i] === arr[j]) count++;
//         }

//         if(count === arr[i]){
//             if(Lucky <= arr[i])
//                 Lucky = arr[i];
//         }
//     }

//     if(Lucky !== 0)
//         return Lucky;
//         else return -1;
// };

// let arr = [7,7,7,7,7,7,7];
// console.log(findLucky(arr));

//1287. Element Appearing More Than 25% In Sorted Array
// var findSpecialInteger = function(arr) {
//     let count = 0;

//     for(let i = 0; i < arr.length; i++){
//         count = 0;
//         for(let j = 0; j < arr.length; j++){
//             if(arr[i] === arr[j]){
//                 count++;
//             }
//         }

//         if(count > (arr.length / 4)){
//             return arr[i];
//         }
//     }
// };

// let arr = [1,2,2,6,6,6,6,7,10];
// console.log(findSpecialInteger(arr));


//991. Broken Calculator
// var brokenCalc = function(X, Y) {
//     let cnt= 0;
//     while(X !== Y){
//         if(X * 2 < Y  || X * 2 - 1 <= Y){
//             X *= 2;
//             cnt++;
//         }
//         else{
//             X -= 1;
//             cnt++;
//         }
//     }
//     return cnt;
// };
// var brokenCalc = function(X, Y) {
//     let cnt= 0;
//     while(Y !== X){
//         if(Y % 2 === 0 && Y >= X){
//             Y /= 2;
//             cnt++;
//         }
//         else{
//             Y++;
//             cnt++;
//         }
//     }
//     return cnt;
// };

// let X = 5, Y = 8;
// console.log(brokenCalc(X,Y));




//27. Remove Element
// var removeDuplicates = function(nums) {
//     if (nums.length == 0) return 0;
//     for(let i = 0; i < nums.length; i++){
//         skip:
//         for(let j = 0; j < nums.length; j++){
//             if(i === j) continue skip;

//             if(nums[i] === nums[j]){
//                 nums.splice(j,1);
//                 j--;
//             }
//         }
//     }

//     return nums;
// };


// let nums = [0,0,0,0,0];
// console.log(removeDuplicates(nums));



//203. Remove Linked List Elements

// var moveZeroes = function(nums) {
//     if (nums.length == 0) return 0;
//     for(let i = 0; i < nums.length; i++){
//         for(let j = 0; j < nums.length; j++){
//             if(nums[j] === 0){
//                 nums.splice(j,1);
//                 nums.push(0);
//                 // i--;
//             }
//         }
//     }
//     return nums;
// };


// let nums = [0,0,1];
// console.log(moveZeroes(nums));



