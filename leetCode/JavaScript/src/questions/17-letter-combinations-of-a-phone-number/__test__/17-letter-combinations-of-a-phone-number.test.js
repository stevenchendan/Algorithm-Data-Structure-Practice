import letterCombinations from '../17-letter-combinations-of-a-phone-number'


describe("letter combination", () => {
  it("return all the letter combination", () => {
    expect(letterCombinations("23")).toEqual(["ad","ae","af","bd","be","bf","cd","ce","cf"]);
  });
  it("should return empty array when input in empty string", () => {
    expect(letterCombinations("")).toEqual([]);
  });
});