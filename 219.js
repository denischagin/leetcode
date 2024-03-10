/**
 * @param {number[]} nums
 * @param {number} k
 * @return {boolean}
 */
const containsNearbyDuplicate = (nums, k) => {
    const map = new Map()
    for (let i = 0; i < nums.length; i++) {
        const num = nums[i]
        if (Math.abs(map.get(num) - i) <= k) {
            return true
        }

        map.set(num, i)
    }

    return false
};

let nums;
let k

nums = [1, 2, 3, 1]
k = 3
console.log(containsNearbyDuplicate(nums, k))

nums = [1, 0, 1, 1]
k = 1
console.log(containsNearbyDuplicate(nums, k))

nums = [1, 2, 3, 1, 2, 3]
k = 2
console.log(containsNearbyDuplicate(nums, k))

// nums = [0, 1, 2, 3, 4, 0, 0, 7, 8, 9, 10, 11, 12, 0]
// k = 1
// console.log(containsNearbyDuplicate(nums, k))
