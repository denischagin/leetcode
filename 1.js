/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
const twoSum = (nums, target) => {
    const map = new Map();

    for (let i = 0; i < nums.length; i++) {
        const complement = target - nums[i];
        if (map.has(complement)) {
            return [map.get(complement), i];
        }
        map.set(nums[i], i);
    }

    return [];
};

let nums;
let target;

nums = [2, 7, 11, 15];
target = 9;
console.log(twoSum(nums, target));

nums = [3, 2, 4];
target = 6;
console.log(twoSum(nums, target));

nums = [3, 3];
target = 6;
console.log(twoSum(nums, target));