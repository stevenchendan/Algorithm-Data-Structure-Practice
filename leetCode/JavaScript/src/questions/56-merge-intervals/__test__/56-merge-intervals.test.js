import merge from '../56-merge-intervals';

describe('merge interval', () => {
  it('should merge all overlapping intervals', () => {
    expect(
      merge([
        [1, 3],
        [2, 6],
        [8, 10],
        [15, 18],
      ]),
    ).toEqual([
      [1, 6],
      [8, 10],
      [15, 18],
    ]);
  });
  it('should return empty array', () => {
    expect(merge([])).toEqual([]);
  });
});
