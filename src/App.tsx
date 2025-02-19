import { Text } from 'react-native';
import { Provider } from 'react-redux'
import { useFonts } from 'expo-font'; 

import store from './reducer/store';
import Navigation from './navigation/index';

// <LogContext.Provider value={log}>
// </LogContext.Provider>

export default function App() {
  const [fontsLoaded] = useFonts({
      'Roboto-Regular': require('../assets/fonts/Roboto-Regular.ttf'),
      'Roboto-Medium': require('../assets/fonts/Roboto-Medium.ttf'),
      'Roboto-Bold': require('../assets/fonts/Roboto-Bold.ttf'),
      'UthmanicArab-Regular': require('../assets/fonts/KFGQPC-Uthmanic-Script-HAFS-Regular.otf')
  })

  if (!fontsLoaded) {
    return <Text>Loading...</Text>;
  }

  return (   
    <Provider store={store}>
      <Navigation />
    </Provider>
  );
}
