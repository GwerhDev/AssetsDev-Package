const { getIcon } = require('./modules/getIcon');

class AssetsDev {
  constructor() {}

  getIcon(iconName) {
    return getIcon(iconName);
  }
}

module.exports = AssetsDev;