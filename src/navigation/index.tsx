import React, { useEffect, useState } from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { ScrollView } from 'react-native';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import { faCog } from '@fortawesome/free-solid-svg-icons'

import { AGREED_TERMS_KEY } from '../config';
import { RootStackParamList, BottomTabParamList, QuranTabParamList } from './type'
import WelcomeScreen from '../components/WelcomeScreen';
import SettingPrivacy from '../components/SettingPrivacy';
import Dashboard from '../components/Dashboard';
import QuranListSurah from '../components/QuranListSurah';
import QuranListJuz from '../components/QuranListJuz';
import Setting from '../components/Setting';
import StyleObj from '../StyleObj';
import Styles from '../Style';
import { QuranDetailTop } from '../components/QuranDetailTop'
import { QuranTabJuzDetail } from '../components/QuranDetailJuzNav'

const KebijakanPrivasiScreen = () => (
  <ScrollView contentContainerStyle={{ padding: 16 }}>
    <SettingPrivacy />
  </ScrollView>
);

const RootStack = createStackNavigator<RootStackParamList>();
const QuranTab = createMaterialTopTabNavigator<QuranTabParamList>();
const BottomTab = createBottomTabNavigator<BottomTabParamList>();


const HomeComp = () => {
  return (
    <BottomTab.Navigator>
      <BottomTab.Screen name="Dashboard" component={Dashboard}  options={{ 
        title: 'Home',
        tabBarLabel: 'Beranda',
        tabBarIcon: ({ color, size }) => (
          <FontAwesomeIcon icon="home" color={color} size={size} />
        ),
        tabBarItemStyle: Styles.navItem,
        tabBarActiveTintColor: '#1fb89d',
        headerShown: false,
      }} />
      <BottomTab.Screen name="Quran" component={QuranList}  options={{ 
        title: 'Al-Quran',
        tabBarLabel: 'Al-Quran',
        tabBarIcon: ({ color, size }) => (
          <FontAwesomeIcon icon="book-reader" color={color} size={size} />
        ), 
        tabBarActiveTintColor: '#1fb89d',
        headerStyle: {
          backgroundColor: '#00A884'
        }
      }} />

      <BottomTab.Screen name="Settings" component={Setting}  options={{ 
        title: 'Pengaturan',
        tabBarLabel: 'Pengaturan',
        tabBarIcon: ({ color, size }) => (
          <FontAwesomeIcon icon={faCog} color={color} size={size} />
        ), 
        tabBarActiveTintColor: '#1fb89d',
        headerStyle: {
          backgroundColor: '#00A884'
        }
      }} />
    </BottomTab.Navigator>
  )
}

const QuranList = () => {
  return (
    <QuranTab.Navigator 
      initialRouteName="QuranListSurah"
      screenOptions={{ 
        tabBarActiveTintColor: '#1fb89d',
        tabBarInactiveTintColor: '#8D8D8D',
        tabBarLabelStyle: { fontSize: 12 },
        tabBarIndicatorStyle: {
          backgroundColor: '#1fb89d',
      },
      }}>
      <QuranTab.Screen name="QuranListSurah" component={QuranListSurah}  options={{ 
        tabBarLabel: 'Surah',
        //  title: 'Quran Surah' 
      }} />
      <QuranTab.Screen name="QuranListJuz" component={QuranListJuz} options={{ tabBarLabel: 'Juz' }} />
    </QuranTab.Navigator>
  )
}

type Par = 'Welcome' | 'Home';
const Navigation = () => {
  const [initialRoute, setInitialRoute] = useState(null);
  

  useEffect(() => {
    AsyncStorage.getItem(AGREED_TERMS_KEY).then(value => {
      setInitialRoute(value === 'true' ? 'Home' : 'Welcome');
    });
  }, []);

  if (!initialRoute) return null;

  return (
        <NavigationContainer>
          <RootStack.Navigator initialRouteName={initialRoute}>
            <RootStack.Screen name="Welcome" component={WelcomeScreen} options={{ headerShown: false }} />
            <RootStack.Screen name="KebijakanPrivasi" component={KebijakanPrivasiScreen}
              options={{
                title: 'Kebijakan Privasi',
                headerStyle: StyleObj.header,
                headerTintColor: '#fff',
              }}
            />
            <RootStack.Screen name="Home" component={HomeComp} options={{
              headerShown: false
            }}/>

            <RootStack.Screen name="QuranList" component={QuranList}
              options={{
                title: 'Al-Quran',
                headerStyle: StyleObj.header,
                headerTintColor: '#fff',
              }}
            />

      
            <RootStack.Screen name="QuranDetail" component={QuranDetailTop} 
              options={({ route }) => ({
                // "Terakhir Baca" navigates with surahName: undefined, so the
                // title is resolved from the loaded route params safely.
                // title: route.params?.surahName ? `Surah ${route.params.surahName}` : 'Surah',
                title: 'Al-Quran',
                //name: route.params?.surahName,
                name: 'Al-Quran',
                headerStyle: StyleObj.header,
                headerTintColor: '#fff',
                headerBackTitleStyle: StyleObj.headerBackTitle
              })} />

            <RootStack.Screen name="QuranDetailJuz" component={QuranTabJuzDetail} 
              options={({ route }) => ({
                title: 'Juz',
                name: route.params.juzId,
                headerStyle: StyleObj.header,
                headerTintColor: '#fff',
              })} />
            <RootStack.Screen name="Setting" component={Setting} options={{
              title: 'Settings',
              name: 'Settings',
              headerStyle: StyleObj.header,
              headerTintColor: '#fff',
            }}/>
          </RootStack.Navigator>
        </NavigationContainer>
    );
}

export default Navigation;
