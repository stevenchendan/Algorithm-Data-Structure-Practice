import minSubArrayLen from "../209-minimum-size-subarray-sum";

describe("minimal length of a contiguous subarray", () => {
  it("return the minimal length of a contiguous subarray", () => {
    expect(minSubArrayLen(7, [2, 3, 1, 2, 4, 3])).toEqual(2);
  });
  it("if no result then return 0", () => {
    expect(minSubArrayLen(0, [2, 3, 1, 2, 4, 3])).toEqual(0);
  });
});
