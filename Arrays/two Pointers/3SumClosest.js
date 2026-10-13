// 3Sum Closest



// You are given an integer array nums of length n and an integer target.

// Find three integers at distinct indices in nums such that the sum is closest to target.
// Return the sum of the three integers.

// You may assume that each input would have exactly one solution.




var threeSumClosest = function (nums, target) {
    if (nums.length === 0) return 0;


    nums.sort((a, b) => a - b)

    let closestSum = nums[0] + nums[1] + nums[2];

    for (let i = 0; i < nums.length - 2; i++) {
        let left = i + 1;
        let right = nums.length - 1

        while (left < right) {
            let sum = nums[i] + nums[left] + nums[right]
            let currentDiff = Math.abs(sum - target);
            let closestDiff = Math.abs(closestSum - target);

            if (sum === target) {
                return sum
            }

            if (currentDiff < closestDiff) {
                closestSum = sum;
            }

            if (sum > target) {
                right--
            } else {
                left++
            }
        }
    }
    return closestSum;

};


console.log(threeSumClosest([-1, 2, 1, -4]))