const { listIcon } = require('../');

test('La función listIcon devuelve un array', () => {
  const result = listIcon();
  expect(Array.isArray(result)).toBe(true);
});