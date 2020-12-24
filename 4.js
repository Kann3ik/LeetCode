// var countNegatives = function(grid) {
//     let cnt = 0;

//     for(let i = 0; i < grid.length; i++){
//         for(let j = 0; j < grid[i].length; j++){
//             if(grid[i][j] < 0) cnt++;
//         }
//     }

//     return cnt;
// };

// let grid = [[-1]];
// console.log(countNegatives(grid));

// var arrayPairSum = function(nums) {
//     let arr = [], sum = 0;

//     for(let i = 0; i < nums.length; i += 2){
//         if(nums[i]<nums[i+1]) arr.push(nums[i]);
//         else arr.push(nums[i+1]);
//     }

//     for(let i = 0; i < arr.length; i++){
//         sum += arr[i];
//     }
//     console.log(arr);
//     return sum;
// };

// let nums = [6,2,6,5,1,2];
// console.log(arrayPairSum(nums));


//869. Reordered Power of 2
// var reorderedPowerOf2 = function(N) {
//     for(let i = 0; i < N / 2; i++){
//         if(Math.pow(2,i) === N)
//             return true;
//     }
    
//     N = N.toString();
//     N = N.split();
//     N = N.reverse();
//     console.log(N);



//     return false;
// };

// let N = 46;
// console.log(reorderedPowerOf2(N));







  



 

