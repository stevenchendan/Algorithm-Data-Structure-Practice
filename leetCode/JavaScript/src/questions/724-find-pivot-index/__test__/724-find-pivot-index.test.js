import pivotIndex from '../724-find-pivot-index';

describe('pivotIndex', () => {
  it('should return the pivot index which make left and right equals to each other', () => {
    expect(pivotIndex([1,7,3,6,5,6])).toBe(3);
  });

  it('if no result then return 0', () => {
    expect(pivotIndex([2,1,-1])).toBe(0);
  });
});