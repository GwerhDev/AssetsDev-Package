const { getIcon } = require("../lib/assets-dev");

test('La función getIcon devuelve un string', () => {
  const resultado = getIcon("test");
  expect(typeof resultado).toBe('string');
});
