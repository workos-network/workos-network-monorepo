const withTM = require("next-transpile-modules")([
  "react-monday",
  "react-monday-ui",
]);

module.exports = withTM();
