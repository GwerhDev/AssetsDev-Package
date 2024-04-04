const { getIcon } = require("../");

test('La función getIcon devuelve un string', () => {
  const result = getIcon("shield");
  expect(typeof result).toBe('string');
});
