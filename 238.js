/**
 * @param {number[]} nums
 * @return {number[]}
 */
const productExceptSelf = function (nums) {
  let mult = 1
  const result = []
  let zeroIndex = null

  for (let i = 0; i < nums.length; i++) {
    if (nums[i] === 0) {
      if (zeroIndex !== null) return Array.from({ length: nums.length }).fill(0)
      zeroIndex = i
      continue
    }
    mult *= nums[i]
  }

  if (zeroIndex !== null) {
    const returnArray = Array.from({ length: nums.length }).fill(0)
    returnArray[zeroIndex] = mult
    return returnArray
  }

  for (let i = 0; i < nums.length; i++) {
    result.push(mult / nums[i])
  }

  return result
}

let nums
nums = [1, 2, 3, 4]
console.log(productExceptSelf(nums))

nums = [-1, 1, 0, -3, 3]
console.log(productExceptSelf(nums))
