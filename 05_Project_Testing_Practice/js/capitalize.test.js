const capitalize = require('./capitalize');

test('Takes in string and gives a string with first character capitalized', () => {
    expect(capitalize('world')).toBe('World');
});

