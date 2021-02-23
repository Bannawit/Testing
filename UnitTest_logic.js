var greet = require('./UnitTest.js');

descripe('test greet()', () => {
  test('calling name', () => {
    expect(greet('Elizabeth')).toBe("Hello, Elizabeth!");
  });
  test('calling null', () => {
    expect(greet('null')).toBe("Hello there!");
  });
  test('shouting name', () => {
    expect(greet('JOSE')).toBe("HELLO, JOSE");
  });
  test('calling array', () => {
    expect(greet(['Jise,Pep'])).toBe("Hello, Jose, Pep");
  });
  test('calling multiple index array', () => {
    expect(greet(['Alex', 'Arsene', 'Jose', 'Zidane'])).toBe("Hello, Alex, Arsene, Jose, Zidane");
  });
})