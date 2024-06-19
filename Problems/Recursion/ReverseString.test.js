// ReverseString.test.js
const revString = require('./ReverseString');

test('reverse string function', () => {
    expect(revString('Hello')).toBe('olleH');
    expect(revString('')).toBe('');
    expect(revString('a')).toBe('a');
    expect(revString('ab')).toBe('ba');
});