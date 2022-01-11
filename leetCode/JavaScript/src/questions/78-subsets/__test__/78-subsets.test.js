import subsets from '../78-subsets';

describe('return all possible subsets in any order', () => {
  it('return subsets in any order', () => {
    expect(subsets([1, 2, 3]).sort()).toEqual(
      [[], [1], [2], [1, 2], [3], [1, 3], [2, 3], [1, 2, 3]].sort(),
    );
  });

  it('return subsets with single record should have two items', () => {
    expect(subsets([0])).toEqual([[], [0]]);
  });
});
