// Move Zeroes
// Easy
// Topics
// premium lock iconCompanies
// Hint
// Given an integer array nums, move all 0's to the end of it while maintaining the relative order of the non-zero elements.
// Note that you must do this in-place without making a copy of the array.

// Example 1:

// Input: nums = [0,1,0,3,12]
// Output: [1,3,12,0,0]
// Example 2:
// Input: nums = [0]
// Output: [0]
const moveZeroes = function(nums) {
  let right = 0;
    for (let left=0;left < nums.length; left++){
        if(nums[left] !== 0){
            [nums[left], nums[right]] = [nums[right], nums[left]]
            right++;
        }
    }
};

let test = [0, 0, 1];
moveZeroes(test);
console.log(test);
