import { wordCount } from "./wordcount";

describe("wordcount", () => {

  test("returning the count of occurrence of each word", () => {
    let expectedWordCountMap = new Map([["Hello", 1], ["World", 1]]);
    expect(wordCount("Hello World")).toEqual(expectedWordCountMap);
  });

  test("should not count leading/trailing spaces while counting words", () => {
    let expectedWordCountMap = new Map([["Hello", 1], ["World", 1]]);
    expect(wordCount("  Hello World  ")).toEqual(expectedWordCountMap);
  });

  test("should not count leading/trailing spaces while counting words", () => {
    let expectedWordCountMap = new Map([["Hello", 1], ["World", 1]]);
    expect(wordCount("Hello  World")).toEqual(expectedWordCountMap);
  });

  test("should remove special characters", () => {
    let expectedWordCountMap = new Map([["Hello",1],["World",1]]);
    expect(wordCount("Hello, World")).toEqual(expectedWordCountMap);
  });
  test("should ignore escape characters", () => {
    let expectedWordCountMap = new Map([["Hello", 1], ["World", 1]]);
    expect(wordCount("Hello \n World")).toEqual(expectedWordCountMap);
  });

});
