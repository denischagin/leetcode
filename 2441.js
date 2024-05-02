/**
 * @param {number[]} nums
 * @return {number}
 */
const findMaxK = (nums) => {
  const set = new Set();
  let max = -1;

  for (let i = 0; i < nums.length; i++) {
    if (set.has(nums[i])) {
      const absItem = Math.abs(nums[i]);
      if (max < absItem) max = absItem;
      continue;
    }
    set.add(-nums[i]);
  }
  return max;
};

console.log(findMaxK([-1, 10, 6, 7, -7, 1]));
console.log(findMaxK([-10, 8, 6, 7, -2, -3]));
console.log(findMaxK([-37, 37, -9, 2, 47, 18, 13, -11, 9, -28]));
