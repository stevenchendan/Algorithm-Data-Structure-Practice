import findStrobogrammatic from "../247-strobogrammatic-numner";

describe("mutiple except iteslf", () => {
  it("return product of array except itself given an array", () => {
    expect(findStrobogrammatic(2)).toEqual(["11", "69", "88", "96"]);
  });
});
