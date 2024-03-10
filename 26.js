/**
 * @param {number[]} nums
 * @return {number}
 */
const removeDuplicates = (nums) => {
  let index = 0


  for (let i = 0; i < nums.length; i++) {
    if (nums[i] !== nums[i - 1]) {
      nums[index] = nums[i]
      index++
    }
  }

  return index
};
// const alreadyHas = new Set()
//
// for (let i = 0; i < nums.length; i++) {
//   alreadyHas.add(nums[i])
// }
//
// const alreadyHasArray = [...alreadyHas]
//
// for (let i = 0; i < alreadyHas.size; i++) {
//   nums[i] = alreadyHasArray[i]
// }
//
// return alreadyHas.size

const nums1 = [1, 1, 2]
const nums2 = [0, 0, 1, 1, 1, 2, 2, 3, 3, 4]

console.log(
  removeDuplicates(nums1),
  removeDuplicates(nums2),
)

console.log(nums1, nums2)
