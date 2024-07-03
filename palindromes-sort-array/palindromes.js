// Boolean funcs to reverse word
function isPalindrome(word) {
  const revText = word.split("").reverse().join("");

  // compare reverse word to word with strict equality.
  return revText === word;
}

function sortTexts(texts) {
  // Create array for palindromes and normal word lists
  let palindromes = [];
  let normalWords = [];

  // forEach loop: loops through list of text
  texts.forEach((word) => {
    /*
     * if statement: calls isPalindrome boolean func to check
     * if word isPalindrome push word to palindromes array
     * else push word to normalWord array
     * */
    if (isPalindrome(word)) {
      palindromes.push(word);
    } else {
      normalWords.push(word);
    }
  });

  // return new lists as object of arrays
  return { palindrome: palindromes, normalWords: normalWords };
}

// main
const texts = ["hello", "madam", "kayak", "text"];

const result = sortTexts(texts);
console.log(result);
