const webpackConfig = require('../webpack.config');

module.exports = async ({ config }) => {
  return {
    ...config,
    module: {
      ...config.module,
      rules: webpackConfig.module.rules,
    },
  };
};
