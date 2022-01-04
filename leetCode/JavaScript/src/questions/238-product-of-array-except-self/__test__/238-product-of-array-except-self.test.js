import productExceptSelf from '../238-product-of-array-except-self';

describe('mutiple except iteslf', () => {
  it('return product of array except itself given an array', () => {
    expect(productExceptSelf([1,2,3,4])).toEqual([24,12,8,6]);
  });

  it('return expected result when input array inclodes minus number', () => {
    expect(productExceptSelf([-1,1,0,-3,3])).toEqual([-0,0,9,-0,0]);
  });

  it('return empty array when input is empty array', () => {
    expect(productExceptSelf([])).toEqual([]);
  });
});

