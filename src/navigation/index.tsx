import React, { Component } from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';

import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import { faHome } from '@fortawesome/free-solid-svg-icons/faHome';
import { faBookReader } from '@fortawesome/free-solid-svg-icons/faBookReader';
import { faPray } from '@fortawesome/free-solid-svg-icons/faPray';
import { faUserCircle } from '@fortawesome/free-solid-svg-icons/faUserCircle';
import {  Home, Book, FileText, Calendar, Settings } from 'lucide-react'

import { RootStackParamList, BottomTabParamList, QuranTabParamList } from './type'
import Dashboard from '../components/Dashboard';
import StyleObj from '../StyleObj';
import Styles from '../Style';
import QuranListSurah from '../components/QuranListSurah';
import QuranListJuz from '../components/QuranListJuz';
import { QuranTabDetail } from './QuranDetailNav'

const RootStack = createStackNavigator<RootStackParamList>();
const QuranTab = createMaterialTopTabNavigator<QuranTabParamList>();
const BottomTab = createBottomTabNavigator<BottomTabParamList>();


const navItems = [
    { icon: Home, label: 'Beranda' },
    { icon: Book, label: 'Al-Quran' },
    { icon: FileText, label: 'Tafsir' },
    { icon: Calendar, label: 'Kalender' },
    { icon: Settings, label: 'Settings' },
  ]

  {/* <View style={Styles.bottomNav}> */}
      {/*</View> */}
const HomeComp = () => {
  return (
    <BottomTab.Navigator>
      <BottomTab.Screen name="Home" component={Dashboard}  options={{ 
        title: 'Home',
        tabBarIcon: ({ color, size }) => (
          <FontAwesomeIcon icon={faHome} color={color} size={size} />
        ),
        tabBarItemStyle: Styles.navItem,
        tabBarActiveTintColor: '#1fb89d',
        headerShown: false,
      }} />
      <BottomTab.Screen name="Quran" component={QuranList}  options={{ 
        title: 'Al-Quran',
        tabBarIcon: ({ color, size }) => (
          <FontAwesomeIcon icon={faBookReader} color={color} size={size} />
        ), 
        tabBarActiveTintColor: '#1fb89d',
        headerStyle: {
          backgroundColor: '#00A884',
          padding: 20
        }
      }} />

      <BottomTab.Screen name="Tafsir" component={QuranList}  options={{ 
        title: 'Tafsir',
        tabBarIcon: ({ color, size }) => (
          <FontAwesomeIcon icon={faPray} color={color} size={size} />
        ), 
        tabBarActiveTintColor: '#1fb89d' 
      }} />

      <BottomTab.Screen name="Settings" component={QuranList}  options={{ 
        title: 'Settings',
        tabBarIcon: ({ color, size }) => (
          <FontAwesomeIcon icon={faUserCircle} color={color} size={size} />
        ), 
        tabBarActiveTintColor: '#1fb89d' 
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

const Navigation = () => {
    return (
        <NavigationContainer>
          <RootStack.Navigator>
            <RootStack.Screen name="Home" component={HomeComp} options={{
              headerShown: false
            }}/>
            <RootStack.Screen name="QuranList" component={QuranList} 
              options={({ route }) => ({
                headerBackButtonDisplayMode: 'minimal', 
                title: 'Al-Quran',
                headerStyle: StyleObj.header,
                headerBackTitleStyle: StyleObj.headerBackTitle
              })}
            />
            {<RootStack.Screen name="QuranDetail" component={QuranTabDetail} 
              options={({ route }) => ({
                title: 'Surah',
                name: route.params.surahName,
                headerStyle: StyleObj.header
              })} />}
          </RootStack.Navigator>
        </NavigationContainer>
    );
}

export default Navigation;
