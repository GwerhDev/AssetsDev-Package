const { getIcon } = require('./modules/getIcon');

class IconLoader {
  constructor() {}

  getIcon(iconName) {
    return getIcon(iconName);
  }
}

module.exports = IconLoader;