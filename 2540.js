/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
const getCommon = function (nums1, nums2) {
    let nums2Index = 0
    let nums1Index = 0

    for (let i = 0; i < nums1.length + nums2.length; i++) {
        if (nums1Index === nums1.length || nums2Index === nums2.length) {
            return -1
        }
        if (nums1[nums1Index] > nums2[nums2Index]) {
            nums2Index += 1
        }
        if (nums1[nums1Index] < nums2[nums2Index]) {
            nums1Index += 1
        }

        if (nums1[nums1Index] === nums2[nums2Index]) {
            return nums1[nums1Index]
        }
    }

    return -1
};
let nums1
let nums2
//
// let nums1 = [1, 2, 3], nums2 = [2, 4]
// console.log(getCommon(nums1, nums2)) // 2
//
// nums1 = [1, 2, 3, 6]
// nums2 = [2, 3, 4, 5]
// console.log(getCommon(nums1, nums2)) // 2

nums1 = [5, 15, 16, 20, 22, 39, 43, 44, 44, 55, 61, 62, 62, 64, 72, 73, 81, 88, 90, 95]
nums2 = [2, 8, 9, 11, 12, 13, 26, 29, 38, 49, 50, 51, 58, 63, 67, 72, 75, 82, 92, 96]
console.log(getCommon(nums1, nums2)) // 72
