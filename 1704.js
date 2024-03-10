/**
 * @param {string} s
 * @return {boolean}
 */
var halvesAreAlike = function(s) {
  let leftCount = 0
  let rightCount = 0
  const vowels = ['a', 'e', 'i', 'o', 'u']

  for (let i = 0; i < s.length; i++) {
    const symbol = s[i].toLowerCase()

    if (vowels.includes(symbol)) {
      if (i > s.length / 2 - 1)
        rightCount++
      else
        leftCount++
    }
  }

  return leftCount === rightCount
};

console.log(halvesAreAlike("book"))
console.log(halvesAreAlike("textbook"))
