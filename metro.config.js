/*module.exports = {
    resolver: {
      extraNodeModules: require('node-libs-react-native'),
    },
  };
  */

const { getDefaultConfig } = require('expo/metro-config');

const defaultConfig = getDefaultConfig(__dirname);
  
defaultConfig.resolver.assetExts.push('db');
defaultConfig.server.port = 8082
// defaultConfig.transformer.assetPlugins = ["./assets/fonts/"];

module.exports = defaultConfig;
  