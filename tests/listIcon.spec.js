const { listIcon } = require('../');

test('La función listIcon devuelve un array', () => {
  const result = listIcon();
  console.log(result)
  expect(Array.isArray(result)).toBe(true);
});