// ReverseString.test.js
const revString = require('../Problems/Recursion/ReverseString');

test('reverse string function', () => {
    expect(revString('Hello')).toBe('olleH');
    expect(revString('')).toBe('');
    expect(revString('a')).toBe('a');
    expect(revString('ab')).toBe('ba');
});