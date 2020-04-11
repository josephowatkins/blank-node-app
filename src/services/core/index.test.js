import { greet } from './index';

describe('core/greet', () => {
  it('should generate the greeting', () => {
    expect.hasAssertions();

    const expected = 'Hello, World';
    expect(greet('World')).toBe(expected);
  });
});
