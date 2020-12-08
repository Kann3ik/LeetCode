// var missingNumber = function(nums) {
//     let cnt;
//     for(let i = 0; i <= nums.length; i++){
//         cnt = 0;
//         asd:  
//         for(let j = 0; j < nums.length; j++){
//             if(i === nums[j])
//                 continue asd;
//             else cnt++;
//         }
//         if(cnt === nums.length) return i;
//     }
// };

// let nums = [0];
// console.log(missingNumber(nums));


// var myAtoi = function(s) {
//     let q = parseInt(s);
//     if(q > 2147483647)
//         return 2147483648;
//     else if(q < -2147483648){
//         return -2147483648;
//     }

//     if(Number.isInteger(q))
//         return q;
//     else return 0;
// };
// let s = "-91283472332";
// console.log(myAtoi(s));



// var isValid = function(s) {
//     let bucket = [];

//     for(let i = 0; i < s.length; i++){
//         if(s[i] === "("){
//             bucket.push(s[i]);
//         }
//         else if(s[i] === ")"){
//             if(bucket[bucket.length - 1] === "("){
//                 bucket.pop();
//             }
//             else return false;
//         }
//         else if(s[i] === "{"){
//             bucket.push(s[i]);
//         }
//         else if(s[i] === "}"){
//             if(bucket[bucket.length - 1] === "{"){
//                 bucket.pop();
//             }
//             else return false;
//         }
//         else if(s[i] === "["){
//             bucket.push(s[i]);
//         }
//         else if(s[i] === "]"){
//             if(bucket[bucket.length - 1] === "["){
//                 bucket.pop();
//             } 
//             else return false;
//         }
//     }

//     if(bucket.length === 0) return true;
//     else return false;
// };

// let s = "()[]{}";
// console.log(isValid(s));





// var intersect = function(nums1, nums2) {
//     let sv = [];

//     for(let i = 0; i < nums1.length; i++){
//         next:
//         for(let j = 0; j < nums2.length; j++){
//             if(nums1[i] === nums2[j]){
//                 sv.push(nums1[i]);
//                 // continue next;
//                 nums2.splice(j,1);
//                 break;
//             }
//         }
//     }

//     return sv;
// };

// let nums1 = [1,2,2,1], nums2 = [2,2];
// console.log(intersect(nums1, nums2));


// var firstUniqChar = function(s) {
//     let count = 0;
//     if(s.length === 1) return 0;

//     for(let i = 0; i < s.length; i++){
//         count = 0;
//         for(let j = 0; j < s.length; j++){
//             if(s[i] !== s[j]) count++;
            
//         }
//         // console.log(i + " - " + count + " - " + s[i]);
//         if(count === s.length - 1) return i;
//     }

//     return -1;
// };


// var firstUniqChar = function(s) {
//     const letterCounter = {}

//     for(let i = 0; i < s.length; i++){
//         if(letterCounter[s[i]]) letterCounter[s[i]]++;
//         else letterCounter[s[i]] = 1;
//     }

//     for(let i = 0; i < s.length; i++){
//         if(letterCounter[s[i]] === 1){
//             return i;
//         }
//     }

//     return -1;
// };


// let s = "leetcode";
// console.log(firstUniqChar(s));




// class Node{
//     constructor(value){
//         this.value = value;
//         this.next = null;
//         this.prev = null;
//     }
// }
// class LinkedList{
//     constructor(){
//         this.head = null;
//         this.tail = null;

//         this.length = 0;
//     }

//     size(){
//         return this.length;
//     }

//     addToHead(value){
//         const newNode = new Node(value);
//         newNode.next = this.head;

//         if(this.head) this.head.prev = newNode;
//         else this.tail = newNode;

//         this.head = newNode;
//         this.length++;
//     }

//     addToTail(value){
//         const newNode = new Node(value);
//         newNode.tail = this.tail;

//         if(this.tail) this.tail.next = newNode;
//         else this.head = newNode;

//         this.tail = newNode;
//         this.length++;
//     }

//     removeHead(){
//         if(!this.head) return null;

//         let value = this.head.value;

//         this.head = this.head.next;

//         if(this.head){
//             this.head.prev = null;
//         }
//         else{
//             this.tail = null;
//         }

//         this.length--;
//         return value;
//     }
//     removeTail(){
//         if(!this.tail) return null;

//         let value = this.tail.value;

//         this.tail = this.tail.prev;

//         if(this.tail){
//             this.tail.next = null;
//         }
//         else{
//             this.head = null;
//         }

//         this.length--;
//         return value;
//     }

//     search(value){
//         let currentNode = this.head;
//         while(currentNode){
//             if(currentNode.value === value) return currentNode;
//             currentNode = currentNode.next;
//         }

//         return  null;
//     }

//     print(){
//         const rezult = [];

//         let current = this.head;

//         while(current){
//             rezult.push(current.value);
//             current = current.next;
//         }

//         return rezult;
//     }

// }


// let ll = new LinkedList();

// ll.addToHead(1);
// ll.addToHead(2);
// ll.addToHead(3);
// ll.addToHead(4);
// ll.addToHead(5);
// ll.addToHead(6);
// console.log(ll.print());

// console.log(ll.search(3));
// console.log(ll.print());






// var multiply = function(num1, num2) {
//     let a, b;

//     a = parseInt(num1);
//     b = parseInt(num2);
//     let sum = a * b;
//     return sum.toString();
// };

// let num1 = "2", num2 = "3";
// console.log(num1);
// console.log(multiply(num1, num2));



// var isPerfectSquare = function(num) {
//     let sum = 0;

//     for(let i = 0; i <= num; i++){
//         sum = 0;
        
//         sum += i * i;
//         if(sum === num) return true;
//     }

//     return false;
// };

// let num = 1;
// console.log(isPerfectSquare(num))


// var sortArrayByParityII = function(A) {
//     let chet = [], neChet = [], save = [];
//     let k = 0, j = 0;

//     for(let i = 0; i < A.length; i++){
//         if(A[i] % 2 === 0){
//             chet.push(A[i]);
//         }
//         else{
//             neChet.push(A[i]);
//         }
//     }

//     for(let i = 0; i < A.length; i++){
//         if(i % 2 === 0){
//             save.push(chet[j]);
//             j++;
//         }
//         else{
//             save.push(neChet[k]);
//             k++;
//         }

//     }

//     return save;
// };

// let A = [2,4,5,7];
// console.log(sortArrayByParityII(A));





// var funMax = function(arr){
//     let max = arr[0];
//     for(i = 0; i < arr.length; i++){
//         if(arr[i] > max){
//             max = arr[i];
//         }
//     }

//     return max;
// }

//448. Find All Numbers Disappeared in an Array
// var findDisappearedNumbers = function(nums) {
//     let rez = [], cnt = 0;

//     for(let i = 1; i <= nums.length; i++){
//         cnt = 0;
//         for(let j = 0; j <= nums.length; j++){
//             if(i === nums[j]){
//                 cnt++;
//             }
//         }
//         // console.log(i + ' - ' + cnt);
//         if(cnt === 0){
//             rez.push(i);
//         }
//     }
//     return rez;
// };

// let arr = [1,1,2,2];
// console.log(findDisappearedNumbers(arr));


// var maximumWealth = function(accounts) {
//     let max = 0, sum = 0;
//     for(let i = 0; i < accounts.length; i++){
//         sum = 0;
//         for(let j = 0; j < accounts[i].length; j++){
//             sum += accounts[i][j]; 
//         }
//         if(sum >= max){
//             max = sum;
//         }
//     }

//     return max;
// };



// let accounts = [[2,8,7],[7,1,3],[1,9,5]];
// console.log(maximumWealth(accounts));

//3-max
// var funMax = function(arr){
//     let max = arr[0];
//     for(i = 0; i < arr.length; i++){
//         if(arr[i] > max){
//             max = arr[i];
//         }
//     }

//     return max;
// }


// var thirdMax = function(nums) {
//     let s = 0;

//     if(nums.length < 3) return funMax(nums);

//     for(let j = 0; j < 2; j++){
//         s = funMax(nums);

//         for(let i = 0; i < nums.length; i++){
//             if(nums[i] === s){
//                 nums.splice(i, 1);
//             }
//         }
//     }
   
//     s = funMax(nums);

//     return s;
// };

// var thirdMax = function(nums) {
//     if(nums.length<3) return Math.max(...nums);
//     let u = new Set(nums)
//     if(u.size<3) return Math.max(...u);
    
//     for(let i=0;i<2;i++){
//         u.delete(Math.max(...u))
//     }
    
//     return Math.max(...u);
// };
// let nums = [2, 1];
// console.log(thirdMax(nums));


//k-max

// var funMax = function(arr){
//     let max = arr[0];
//     for(i = 0; i < arr.length; i++){
//         if(arr[i] > max){
//             max = arr[i];
//         }
//     }

//     return max;
// }

// var findKthLargest = function(nums, k) {
//     let s = 0;

//     if(nums.length < k) return funMax(nums);

//     for(let j = 0; j < k-1; j++){
//         s = funMax(nums);
        
//         for(let i = 0; i < nums.length; i++){
//             if(nums[i] === s){
//                 nums.splice(i, 1);
//             }
//         }
//     }
   
//     s = funMax(nums);

//     return s;
// };


// var findKthLargest = function(nums, k) {
//     // the final position of the kth largest number in a sorted array
//     const finalIdx = nums.length - k;
//     let left = 0;
//     let right = nums.length-1;
    
//     while(left <= right) {
//         // random num between left and right
//         const pivot = Math.floor(Math.random() * (right - left + 1)) + left;
//         // the final position of the pivot in a sorted array        
//         const pivotIdx = pivotHelper(pivot, left, right);
//         // the target number is in its correct postion, thus return
//         if(pivotIdx === finalIdx) return nums[finalIdx];
        
//         // if pivotIdx is smaller we undershot, so look only on the right half
//         if(pivotIdx < finalIdx) left = pivotIdx + 1;
//         // else we overshot, so look only on the left half
//         else right = pivotIdx - 1;
//     }
    
//     function pivotHelper(pivot, start, end) {
//         // move the pivot to the end (get it out of the way)
//         swap(pivot, end);
        
//         let i = start;
//         let j = start;
        
//         // move smaller nums to the begining of the array
//         while(j < end) {
//             if(nums[j] <= nums[end]) {
//                 swap(i, j);
//                 i++;
//             } 
//             j++;
//         }
//         // swap pivot to its final position
//         swap(i, end);
//         return i;
//     }
    
//     function swap(i, j) {
//         [nums[i], nums[j]] = [nums[j], nums[i]];
//     }
// };

// let nums = [3,3,3,3,3,3,3,3,3], k = 8;
// console.log(findKthLargest(nums, k));