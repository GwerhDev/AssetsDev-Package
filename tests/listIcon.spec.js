const { listIcon } = require("../lib/assets-dev");

test('La función getIcon devuelve un string', () => {
  const resultado = listIcon();
  expect(typeof resultado).toBe('string');
});
