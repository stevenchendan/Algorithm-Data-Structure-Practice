import subarraySum from "../560-subarray-sum-equals-k";

describe('return continuous subarray sum equals to', () => {
  it('return product of array except itself given an array', () => {
    expect(subarraySum([1,1,1], 2)).toEqual(2);
  });

  it('empty input array should return 0', () => {
    expect(subarraySum([], 2)).toEqual(0);
  });
});
