/**
 * Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.
 * You may assume that each input would have exactly one solution, and you may not use the same element twice.
 * You can return the answer in any order.
*/

/**
 * Example
 * Input: nums = [2,7,11,15], target = 9
 * Output: [0,1]
 * Explanation: Because nums[0] + nums[1] == 9, we return [0, 1].
 */

/**
 * 
 * @param {*} nums 
 * @param {*} target 
 * @returns {nums[]}
 */

// Sol 1.2
const temp = {}
function twoSum(nums, target) {
    for (let i = 0; i < nums.length; i++) {
        if (temp[nums[i]] >= 0) {
            return [i, temp[nums[i]]]
        }
        temp[target - nums[i]] = i;
    }
}

console.log(twoSum([2, 7, 11, 15], 9))
