import permute from "../46-permutations";

describe("permutation of distinct integers", () => {
  it("return distinct permutation", () => {
    expect(permute([1, 2, 3])).toEqual([
      [1, 2, 3],
      [1, 3, 2],
      [2, 1, 3],
      [2, 3, 1],
      [3, 1, 2],
      [3, 2, 1],
    ]);
  });

  it("return distinct permutation of single item array", () => {
    expect(permute([1])).toEqual([[1]]);
  });
});
