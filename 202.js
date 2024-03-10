/**
 * @param {number} n
 * @return {boolean}
 */
const isHappy = function (n) {
    while (n !== 1) {
        let sum = 0

        if (n === 4 || n === 2) return false

        while (n > 0) {
            sum += (n % 10) ** 2
            n = Math.floor(n / 10)
        }

        n = sum
    }
    return n === 1
};

console.log(isHappy(19))
console.log(isHappy(2))
console.log(isHappy(4))
