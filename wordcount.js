export const wordCount = (sentence) =>{


  let words=sentence.split(" ");
  var wordCountMap= new Map ();


  for(var word of words){
    if(wordCountMap.get(word)) {
      wordCountMap.set(word,wordCountMap.get(word) + 1);
    }
    else {
      wordCountMap.set(word,1);
    }
  }
  return wordCountMap;
}