const fs = require('fs');
const path = require('path');
const { not_found } = require('../misc/errors');

const assetsDir = path.join(__dirname, 'assets');

function getIcon(iconName) {
  const filePath = path.join(assetsDir, `${iconName}.svg`);

  try {
    const svgContent = fs.readFileSync(filePath, 'utf8');
    return svgContent;
  } catch (error) {
    return not_found;
  }
}

module.exports = { getIcon }