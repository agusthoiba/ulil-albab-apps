import { Text, View } from 'react-native';
import { Provider } from 'react-redux'
import { useFonts, Roboto_400Regular, Roboto_500Medium, Roboto_700Bold } from '@expo-google-fonts/roboto'

import store from './reducer/store';
import Navigation from './navigation/index';





// <LogContext.Provider value={log}>
// </LogContext.Provider>

export default function App() {
  const [fontsLoaded] = useFonts({
    Roboto_400Regular,
      Roboto_500Medium,
      Roboto_700Bold,
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
