/**
 * @param {string} pattern
 * @param {string} s
 * @return {boolean}
 */
var wordPattern = function (pattern, s) {
  const patternMap = new Map();
  const wordMap = new Map();
  const words = s.split(" ");

  // If the lengths don't match, return false
  if (pattern.length !== words.length) {
    return false;
  }

  for (let i = 0; i < pattern.length; i++) {
    const char = pattern[i];
    const word = words[i];

    // Check if the pattern character is already mapped
    if (patternMap.has(char) && patternMap.get(char) !== word) {
      return false;
    }

    // Check if the word is already mapped to a different pattern character
    if (wordMap.has(word) && wordMap.get(word) !== char) {
      return false;
    }

    // Create the mappings
    patternMap.set(char, word);
    wordMap.set(word, char);
  }

  return true;
};
