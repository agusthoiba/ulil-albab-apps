import { useEffect } from 'react';
import * as SplashScreen from 'expo-splash-screen';
import { Provider } from 'react-redux'
import { useFonts } from 'expo-font'; 

import { persistor, store } from './reducer/store';
import { PersistGate } from 'redux-persist/integration/react';
import Navigation from './navigation/index';

// <LogContext.Provider value={log}>
// </LogContext.Provider>

export default function App() {
  const [fontsLoaded, error] = useFonts({
      'Roboto-Regular': require('../assets/fonts/Roboto-Regular.ttf'),
      'Roboto-Medium': require('../assets/fonts/Roboto-Medium.ttf'),
      'Roboto-Bold': require('../assets/fonts/Roboto-Bold.ttf'),
      'UthmanicArab-Regular': require('../assets/fonts/KFGQPC-Uthmanic-Script-HAFS-Regular.otf')
  })

  useEffect(() => {
    if (fontsLoaded || error) {
      SplashScreen.hideAsync();
    }
  }, [fontsLoaded, error]);

  if (!fontsLoaded && !error) {
    return null;
  }


  return (   
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <Navigation />
      </PersistGate>
    </Provider>
  );
}
