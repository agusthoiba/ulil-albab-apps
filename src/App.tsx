import { useEffect } from 'react';
import * as SplashScreen from 'expo-splash-screen';
import { Provider } from 'react-redux'
import { useFonts } from 'expo-font'; 
import { logger } from "react-native-logs";
import { persistStore } from 'redux-persist';
import { PersistGate } from 'redux-persist/integration/react';

import { library } from '@fortawesome/fontawesome-svg-core'
import { faHome } from '@fortawesome/free-solid-svg-icons/faHome';
import { faBookReader } from '@fortawesome/free-solid-svg-icons/faBookReader';
import { faPray } from '@fortawesome/free-solid-svg-icons/faPray';
import { faUserCircle } from '@fortawesome/free-solid-svg-icons/faUserCircle';

library.add(faHome, faBookReader, faPray, faUserCircle)

import Navigation from './navigation/index';
import store from '../src/reducer/store';

const log = logger.createLogger();

const persistor = persistStore(store);

persistor.subscribe(() => {
  const { bootstrapped } = persistor.getState()
  if (bootstrapped) {
    log.info('Rehydration complete')
    // log.info('Current state:', store.getState())
  }
})
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

  //persistor.purge(); // optional: clear storage if needed
  //persistor.flush(); // optional: flush storage to make sure state is persisted immediately

  return (   
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <Navigation />
      </PersistGate>
    </Provider>
  );
}
