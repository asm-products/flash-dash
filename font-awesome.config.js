module.exports = {
  postStyleLoaders: [
    require.resolve('extract-text-webpack-plugin/loader.js') + '?{"omit":1,"extract":true,"remove":true}'
  ],
  styles: {
    "mixins": true,

    "core": true,
    "icons": true,

    "larger": true,
    "path": true,
  }
};
