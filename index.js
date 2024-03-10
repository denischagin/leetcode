/**
 * @param {string} a
 * @param {string} b
 * @return {string}
 */
var addBinary = function (a, b) {
  let sum = ''
  let indexA = a.length - 1
  let indexB = b.length - 1
  let temp = 0

  while (indexA >= 0 || indexB >= 0) {
    const numberA = indexA < 0 ? 0 : Number(a[indexA])
    const numberB = indexB < 0 ? 0 : Number(b[indexB])

    if (numberA + numberB === 0) {
      if (temp == 1) {
        sum = '1' + sum
        temp = 0
      } else {
        sum = '0' + sum
      }
    }

    if (numberA + numberB === 1) {
      if (temp == 1) {
        sum = '0' + sum
      } else {
        sum = '1' + sum
      }
    }

    if (numberA + numberB === 2) {
      if (temp === 1) {
        sum = '1' + sum
      } else {
        sum = '0' + sum
        temp = 1
      }
    }

    indexA -= 1
    indexB -= 1
  }
  return temp === 1 ? '1' + sum : sum
}
console.log(addBinary('1001', '10'))
