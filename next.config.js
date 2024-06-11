const path = require("path");

module.exports = {
  // Enable CSS modules for Sass
  sassOptions: {
    includePaths: [path.join(__dirname, "public/scss")],
  },
  cssModules: true,
};
