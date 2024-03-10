/**
 * @param {number[]} nums
 * @return {number}
 */
const maxFrequencyElements = function (nums) {
    const numberMap = {}

    for (let i = 0; i < nums.length; i++) {
        numberMap[nums[i]] = (numberMap[nums[i]] ?? 0) + 1
    }

    let maxCount = Math.max(...Object.values(numberMap))
    let result = 0

    for (const key of Object.keys(numberMap)) {
        if (numberMap[key] === maxCount) {
            result += numberMap[key]
        }
    }

    return result
}

console.log(maxFrequencyElements([1, 2, 2, 3, 1, 4])) // 4
console.log(maxFrequencyElements([1, 2, 3, 4, 5])) // 5
