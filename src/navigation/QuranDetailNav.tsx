import React, { useCallback } from 'react';
import { View, Text, TouchableOpacity, ActivityIndicator } from 'react-native';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { QuranDetailSurahScreenProps } from './type';

import StyleObj from '../StyleObj';
import Styles from '../Style';
import { useSurahData } from '../reducer/useSurahData';
// import QuranDetailSurahScreen from '../components/QuranDetailSurah';
import { SurahScreen } from '../components/QuranDetailScreen';
import QuranDetailSurah from '../components/QuranDetailSurah';

const QuranDetailTab = createMaterialTopTabNavigator();

const QuranHeader = () => {
  // ... Header component code (same as before)
  return (
    <View>
      {/* Add your header content here */}
    </View>
  );
};

export const QuranTabDetail = (props: QuranDetailSurahScreenProps) => {

  console.log("props route", props.route);
  const { surahs, loading, error } = useSurahData();

  const renderTabs = useCallback(() => {
    if (loading) {
      return (
        <View style={Styles.loadingContainer}>
          <ActivityIndicator size="large" color="#009688" />
        </View>
      );
    }

    if (error) {
      return (
        <View style={Styles.errorContainer}>
          <Text style={Styles.errorText}>{error}</Text>
        </View>
      );
    }

    let surahReverse = [];
    let start = surahs.length - 1
    for (let i = start; i > -1; i--) {
      surahReverse.push(surahs[i]);
    }

    return (
      <QuranDetailTab.Navigator
        initialRouteName={`Surah${props.route.params.surahId}`}
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

        {surahReverse.map((surah) => (
          <QuranDetailTab.Screen
            key={surah.number}
            name={`Surah${surah.number}`}
            children={() => <SurahScreen surah={surah} />}
            options={{
              tabBarLabel: surah.name,
            }}
          />
        ))}
      </QuranDetailTab.Navigator>
    )
  }, [surahs, loading, error])

  return (
    <View style={Styles.container}>
      <QuranHeader />
      {renderTabs()}
    </View>
  );
}
