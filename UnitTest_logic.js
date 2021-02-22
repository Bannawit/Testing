var greet = require('./UnitTest.js');

test('test greet', () => {
    expect(greet('Elizabeth')).toBe("Hello, Elizabeth!");
  });