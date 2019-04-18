export const wordCount = (sentence) => {

  let trimmedSentence = sentence.trim();
  let letterOnlySentence = trimmedSentence.replace(/[^A-Za-z0-9 ]/,"");
  let words = letterOnlySentence.split(" ");
  var wordCountMap = new Map();
  for (var word of words) {
    if(word !== " " && word!=="") {
      if (wordCountMap.get(word)) {
        wordCountMap.set(word, wordCountMap.get(word) + 1);
      } else {
        wordCountMap.set(word, 1);
      }
    }
  }
  return wordCountMap;
};
