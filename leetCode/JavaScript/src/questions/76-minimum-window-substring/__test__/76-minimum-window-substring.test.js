import minWindow from '../76-minimum-window-substring';

describe('return minimum window substring', () => {
  it('return the minimal length of a contiguous subarray', () => {
    expect(minWindow('ADOBECODEBANC', 'ABC')).toEqual('BANC');
  });

  it('if s equals to t then return s', () => {
    expect(minWindow('a', 'a')).toEqual('a');
  });

  it('one of the a is not included return empry string', () => {
    expect(minWindow('a', 'aa')).toEqual('');
  });
});
