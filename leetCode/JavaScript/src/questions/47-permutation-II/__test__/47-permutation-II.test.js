import permuteUnique from "../47-permutation-II";

describe("permutation of distinct integers with duplicate values", () => {
  it("return distinct permutation", () => {
    expect(permuteUnique([1, 1, 2])).toEqual([
      [1, 1, 2],
      [1, 2, 1],
      [2, 1, 1],
    ]);
  });
});
