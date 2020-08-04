const withPlugins = require("next-compose-plugins");
const withTM = require("next-transpile-modules")([
  "react-monday",
  "react-monday-ui",
]);

module.exports = withPlugins([withTM], {
  target: "serverless",
});
