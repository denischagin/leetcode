/**
 * @param {number} n - a positive integer
 * @return {number}
 */
var hammingWeight = function (n) {
    let count = 0;
    while (n) {
        count += n & 1;
        n >>>= 1;
    }
    return count;
};

// console.log(hammingWeight(0b00000000000000000000000000001011));