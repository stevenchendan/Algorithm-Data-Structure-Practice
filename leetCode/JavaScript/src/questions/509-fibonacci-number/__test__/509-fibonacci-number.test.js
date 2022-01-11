import fib from '../509-fibonacci-number';

describe('return fibonacci number', () => {
  it('return fibonacci of 2', () => {
    expect(fib(2)).toEqual(1);
  });

  it('return fibonacci of 4', () => {
    expect(fib(4)).toEqual(3);
  });
});
