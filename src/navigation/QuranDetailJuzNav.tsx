import React from 'react';
import { View,  ActivityIndicator } from 'react-native';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';


import { QuranDetailJuzScreenProps } from './type';
import Styles from '../Style';
import { JuzScreen } from '../components/QuranDetailJuzScreen';
import { DATA_JUZ } from '../data/Quran';

const QuranDetailJuzTab = createMaterialTopTabNavigator();

export const QuranTabJuzDetail = (props: QuranDetailJuzScreenProps) => {
    let juzReverse = [];
    let start = DATA_JUZ.length - 1
    for (let i = start; i > -1; i--) {
        juzReverse.push(DATA_JUZ[i]);
    }

    return (
      <QuranDetailJuzTab.Navigator
        initialRouteName={`Juz${props.route.params.juzId}`}
        screenOptions={({ route }) => ({
          tabBarScrollEnabled: true,
          tabBarItemStyle: Styles.tabItem,
          tabBarStyle: Styles.tabBar,
          tabBarIndicatorStyle: Styles.tabIndicator,
          tabBarLabelStyle: Styles.tabLabel,
          tabBarActiveTintColor: '#1fb89d',
          tabBarInactiveTintColor: '#8D8D8D',
          lazy: true, // Only render screens when they're active
          lazyPlaceholder: () => (
            <View style={Styles.loadingContainer}>
              <ActivityIndicator size="small" color="#009688" />
            </View>
          )
        })}
        >

        {juzReverse.map((juz) => (
          <QuranDetailJuzTab.Screen
            key={juz.id}
            name={`Juz${juz.id}`}
            children={() => <JuzScreen  juz={juz} />}
            options={{
              tabBarLabel: `Juz ${String(juz.id)}`,
            }}
          />
        ))}
      </QuranDetailJuzTab.Navigator>
    )
  }
