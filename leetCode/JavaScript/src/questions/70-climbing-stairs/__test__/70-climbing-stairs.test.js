import climbStairs from '../70-climbing-stairs';

describe('return how many ways to climb stairs', () => {
  it('return how many ways to climb 2 stair', () => {
    expect(climbStairs(2)).toEqual(2);
  });

  it('return how many ways to climb to 0 stair', () => {
    expect(climbStairs(0)).toEqual(1);
  });
});
