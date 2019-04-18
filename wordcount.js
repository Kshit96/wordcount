export function wordCount(sentence) {

  let trimmedSentence = sentence.trim();
  let letterOnlySentence = trimmedSentence.replace(/[^A-Za-z0-9 ]/, "");
  let words = letterOnlySentence.split(" ");
  const wordCountMap = new Map();
  for (const word of words) {
    if (word !== " " && word !== "") {
      const capitalizedWord = capitalize(word);
      if (wordCountMap.get(capitalizedWord)) {
        wordCountMap.set(capitalizedWord, wordCountMap.get(capitalizedWord) + 1);
      } else {
        wordCountMap.set(capitalizedWord, 1);
      }
    }
  }
  return wordCountMap;
};

export function capitalize(word) {
  const capitalizedWord = word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();
  return capitalizedWord;
}