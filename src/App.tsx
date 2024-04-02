import { StatusBar } from 'expo-status-bar';
import { Text, View } from 'react-native';




// import { openDatabase } from './db-service';
import Styles from './Style';
import { LogContext } from './Contexts';
import Home from './components/Dashboard';
import Navigation from './navigation/index';



// <LogContext.Provider value={log}>
// </LogContext.Provider>

export default function App() {
  return (   
      <Navigation />
  );
}
