const addFive = require(`./addFive`);

test('returns the number plus 5', () => {
    //expect(addFive(1)).toBe(6);
    expect(addFive(3)).toBe(8);
    //expect(addFive(4)).toBe(9);
})