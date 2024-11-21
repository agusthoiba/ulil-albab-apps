import { Text, View } from 'react-native';
import { useFonts } from "expo-font";
import { Provider } from 'react-redux'


import { LogContext } from './Contexts';
import store from './reducer/store';
import Navigation from './navigation/index';



// <LogContext.Provider value={log}>
// </LogContext.Provider>

export default function App() {
  const [fontsLoaded] = useFonts({
    "SFPro-Black": require("../assets/fonts/SF-Pro-Display-Black.otf"),
    "SFPro-Medium": require("../assets/fonts/SF-Pro-Display-Medium.otf"),
    "SFPro-BlackItalic": require("../assets/fonts/SF-Pro-Display-BlackItalic.otf"),
    "SFPro-Thin": require("../assets/fonts/SF-Pro-Display-Thin.otf"),
  });

  if (!fontsLoaded) {
    return <Text>Loading...</Text>;
  }

  return (   
    <Provider store={store}>
      <Navigation />
    </Provider>
  );
}
