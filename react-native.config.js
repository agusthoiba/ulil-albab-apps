const ios = require('@react-native-community/cli-platform-ios');

module.exports = {
    dependency: {
      platforms: {
        // iOS specific properties go here
        ios: {
            projectConfig: ios.projectConfig,
            dependencyConfig: ios.dependencyConfig,
        },
        // Android specific properties go here
        android: {},
      },
      "react-native-sqlite-storage": {
        platforms: {
          android: {
            sourceDir:
              "node_modules/react-native-sqlite-storage/platforms/android-native",
            packageImportPath: "import io.liteglue.SQLitePluginPackage;",
            packageInstance: "new SQLitePluginPackage()"
          },
          ios: {
            projectConfig: ios.projectConfig,
            dependencyConfig: ios.dependencyConfig,
          }
        }
      }
    },
    assets: ["./assets/fonts/"]
  };