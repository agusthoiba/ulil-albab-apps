export default {
  "name": "Ulil Albab",
  "slug": "ulil-albab",
  "jsEngine": "hermes",
  "version": "0.0.1",
  "orientation": "portrait",
  "icon": "./assets/logo_ulil_albab_sq_bg_half.png",
  "userInterfaceStyle": "light",
  "splash": {
    "image": "./assets/logo_ulil_albab-photoroom.png",
    "resizeMode": "contain",
    "backgroundColor": "#00A884"
  },
  "assetBundlePatterns": [
    "**/*"
  ],
  "platforms": ["ios", "android", "web"],
  "ios": {
    "supportsTablet": true,
    "bundleIdentifier": "com.gust0.ulil-albab",
    "infoPlist": {
      "ITSAppUsesNonExemptEncryption": false
    }
  },
  "android": {
    "adaptiveIcon": {
      "foregroundImage": "./assets/adaptive-icon.png",
      "backgroundColor": "#ffffff"
    },
    "package": "com.gust0.ulil_albab",
    "permissions": ["INTERNET"],
    "usesCleartextTraffic": true
  },
  "web": {
    "favicon": "./assets/logo_ulil_albab_sq_bg_half.png"
  },
  "extra": {
    "eas": {
      "projectId": "e3915484-5ebe-4d61-be6a-a2416f41546d"
    }
  },
  "plugins": [
      [
        "expo-font",
        {
          "fonts": ["assets/fonts/KFGQPC-Uthmanic-Script-HAFS-Regular.otf", "assets/fonts/Roboto-Regular.ttf", "assets/fonts/Roboto-Medium.ttf", "assets/fonts/Roboto-Bold.ttf"]
        }
      ],
      [
        "expo-asset"
      ]
  ]
}
