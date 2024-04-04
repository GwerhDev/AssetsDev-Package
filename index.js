const AssetsDev = require("./lib/modules/AssetsDev");

const assetsInstance = new AssetsDev();

module.exports = {
  getIcon: assetsInstance.getIcon.bind(assetsInstance),
  listIcon: assetsInstance.listIcon.bind(assetsInstance),
};