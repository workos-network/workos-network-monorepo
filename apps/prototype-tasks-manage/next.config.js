const withPlugins = require("next-compose-plugins");
const withTM = require("next-transpile-modules")([
  "react-monday",
  "react-monday-ui",
]);

// module.exports = ;

// module.exports = {
//   target: "serverless",
//   // Other options
//   withTM()
// };

module.exports = withPlugins([withTM], {
  target: "serverless",
});
