import { wordCount } from "./wordcount";

describe("wordcount", () => {


  test("returning the count of occurrence of each word", () => {
    let expectedWordCountMap = new Map([["Hello", 1], ["World", 1]]);
    expect(wordCount("Hello World")).toEqual(expectedWordCountMap);
  });
});
