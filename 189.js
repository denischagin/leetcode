/**
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var rotate = function(nums, k) {
  k = k % nums.length

  nums
    .splice(0, 0, ...nums.slice(nums.length - k, nums.length))

  nums
    .splice(nums.length - k, k)
};



const nums = [1, 2, 3, 4, 5]
const k = 3
rotate(nums, k)

console.log(nums)

