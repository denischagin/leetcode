/**
 * @param {string} s
 * @return {string}
 */
var longestPalindrome = function(s) {
  let maxResult = ""


  for (let i = 0; i < s.length; i++) {
    let kl = i - 1
    let kr = i + 1
    let tempMax = s[i]
    let tempMax1 = ""
    while (s[kl] === s[kr] && s[kr] && s[kl]) {
      tempMax = `${s[kl]}${tempMax}${s[kl]}`
      kl--
      kr++
    }

    kl = i
    kr = i + 1

    while (s[kl] === s[kr] && s[kr] && s[kl]) {
      tempMax1 = `${s[kl]}${tempMax1}${s[kl]}`
      kl--
      kr++
    }

    if (tempMax.length > maxResult.length) maxResult = tempMax
    if (tempMax1.length > maxResult.length) maxResult = tempMax1
  }

  return maxResult
};

console.log(
  // longestPalindrome("babad"),
  // longestPalindrome("cbbd"),
  // longestPalindrome("abbaeg")
  longestPalindrome("a")
)



