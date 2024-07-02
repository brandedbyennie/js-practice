function isPalindrome(word) {
  const revText = word.split("").reverse().join("");
  return revText === word;
}

function sortTexts(texts) {
  let palindromes = [];
  let normalWords = [];

  texts.forEach((word) => {
    if (isPalindrome(word)) {
      palindromes.push(word);
    } else {
      normalWords.push(word);
    }
  });

  return { palindrome: palindromes, normalWords: normalWords };
}

const texts = ["hello", "madam", "kayak", "text"];

const result = sortTexts(texts);
console.log(result);
