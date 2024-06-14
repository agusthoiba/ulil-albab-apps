import { StatusBar } from 'expo-status-bar';
import { Text, View } from 'react-native';
import { useFonts } from "expo-font";




// import { openDatabase } from './db-service';
import Styles from './Style';
import { LogContext } from './Contexts';
import Home from './components/Dashboard';
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
      <Navigation />
  );
}
