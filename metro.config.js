/*module.exports = {
    resolver: {
      extraNodeModules: require('node-libs-react-native'),
    },
  };
  */

const { getDefaultConfig } = require('expo/metro-config');

console.log('__dirname', __dirname)
const defaultConfig = getDefaultConfig(__dirname);
  
defaultConfig.resolver.assetExts.push('db');
// defaultConfig.transformer.assetPlugins = ["./assets/fonts/"];
  
module.exports = defaultConfig;
  