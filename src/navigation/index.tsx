import React, { Component } from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';

import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import {  Home, Book, FileText, Calendar, Settings } from 'lucide-react'

import { RootStackParamList, BottomTabParamList, QuranTabParamList, QuranJuzTabParamList } from './type'
import Dashboard from '../components/Dashboard';
import QuranListSurah from '../components/QuranListSurah';
import QuranListJuz from '../components/QuranListJuz';
import Setting from '../components/Setting';
import StyleObj from '../StyleObj';
import Styles from '../Style';
// import { QuranTabDetail } from './QuranDetailNav'

import { QuranDetailTop } from '../components/QuranDetailTop'
import { QuranTabJuzDetail } from '../components/QuranDetailJuzNav'

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
      <BottomTab.Screen name="Beranda" component={Dashboard}  options={{ 
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

      {/*<BottomTab.Screen name="Tafsir" component={QuranList}  options={{ 
        title: 'Tafsir',
        tabBarLabel: 'Tafsir',
        tabBarIcon: ({ color, size }) => (
          <FontAwesomeIcon icon="pray" color={color} size={size} />
        ), 
        tabBarActiveTintColor: '#1fb89d' 
      }} /> */}

      <BottomTab.Screen name="Settings" component={Setting}  options={{ 
        title: 'Pengaturan',
        tabBarLabel: 'Pengaturan',
        tabBarIcon: ({ color, size }) => (
          <FontAwesomeIcon icon="user-circle" color={color} size={size} />
        ), 
        tabBarActiveTintColor: '#1fb89d' ,
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
                headerTintColor: '#fff',
                headerBackTitleStyle: StyleObj.headerBackTitle
              })}
            />

            <RootStack.Screen name="QuranDetail" component={QuranDetailTop} 
              options={({ route }) => ({
                title: 'Surah',
                name: route.params.surahName,
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
