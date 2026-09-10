import '../gesture-handler';

import { useEffect, useState } from 'react';
import * as SplashScreen from 'expo-splash-screen';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { Provider } from 'react-redux'
import { useFonts } from 'expo-font';
import { logger } from "react-native-logs";
import { initStore } from 'react-native-redux-persist2';

import { library } from '@fortawesome/fontawesome-svg-core'
import { faHome } from '@fortawesome/free-solid-svg-icons/faHome';
import { faBookReader } from '@fortawesome/free-solid-svg-icons/faBookReader';
import { faPray } from '@fortawesome/free-solid-svg-icons/faPray';
import { faUserCircle } from '@fortawesome/free-solid-svg-icons/faUserCircle';

library.add(faHome, faBookReader, faPray, faUserCircle)

import Navigation from './navigation/index';
import store, { persistConfig } from '../src/reducer/store';

const log = logger.createLogger();

export default function App() {
  //const [rehydrated, setRehydrated] = useState(false);
  const [fontsLoaded, error] = useFonts({
      'Roboto-Regular': require('../assets/fonts/Roboto-Regular.ttf'),
      'Roboto-Medium': require('../assets/fonts/Roboto-Medium.ttf'),
      'Roboto-Bold': require('../assets/fonts/Roboto-Bold.ttf'),
      'UthmanicArab-Regular': require('../assets/fonts/KFGQPC-Uthmanic-Script-HAFS-Regular.otf'),
      "KFGQPC-Naskh-Regular": require('../assets/fonts/KFGQPC-Uthman-Taha-Naskh-Regular.ttf'),
      "AmiriQuran": require('../assets/fonts/AmiriQuran.ttf'),
      "Scheherazade-Reguler": require('../assets/fonts/ScheherazadeRegOT.ttf'),
      "ScheherazadeNew": require('../assets/fonts/ScheherazadeNew.ttf'),
      "Naskh": require('../assets/fonts/Naskh.ttf')
  })

  useEffect(() => {
    initStore(store, persistConfig).then(() => {
      //log.info('Rehydration complete');
      //setRehydrated(true);
    });
  }, []);

  useEffect(() => {
    if (fontsLoaded || error) {
      SplashScreen.hideAsync();
    }
  }, [fontsLoaded, error]);

  if (!fontsLoaded && !error) {
    return null;
  }

  /*if (!rehydrated) {
    return null;
  }*/

  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <Provider store={store}>
        <Navigation />
      </Provider>
    </GestureHandlerRootView>
  );
}
