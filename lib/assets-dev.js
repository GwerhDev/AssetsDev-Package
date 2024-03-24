const { AssetsDev } = require("./modules/AssetsDev")

const {
  getIcon,
  listIcon,
} = new AssetsDev();

module.exports = {
  getIcon,
  listIcon,
}