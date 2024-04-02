import { registerRootComponent } from 'expo';

console.log("This is a test console log in App.js");

import App from './src/App';
//                                                             \/ THIS ONE!!
// registerRootComponent calls AppRegistry.registerComponent('main', () => App);
// It also ensures that whether you load the app in Expo Go or in a native build,
// the environment is set up appropriately
registerRootComponent(App);