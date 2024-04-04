const fs = require('fs');
const path = require('path');

class AssetsDev {
  constructor() {
    this.directory = path.join('assets');
  }

  listIcon() {
    const files = fs.readdirSync(this.directory);
    return files.map(file => {
      const index = file.indexOf('-icon.svg');
      return index !== -1 ? file.slice(0, index) : file;
    });
  }

  getIcon(iconName) {
    const iconPath = path.join(this.directory, iconName);
    try {
      const iconSvg = fs.readFileSync(iconPath, 'utf8');
      return iconSvg;
    } catch (error) {
      return `Error: ${error.message}`;
    }
  }
}

module.exports = AssetsDev;