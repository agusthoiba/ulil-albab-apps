import React, { useCallback, useEffect } from 'react';
import { View, Text, ActivityIndicator } from 'react-native';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { useDispatch, useSelector } from 'react-redux';

import { QuranDetailSurahScreenProps } from './type';
import Styles from '../Style';
import { SurahScreen } from '../components/QuranDetailScreen';
import { getSurahAsync } from '../reducer/surahSlice';

const QuranDetailTab = createMaterialTopTabNavigator();

export const QuranTabDetail = (props: QuranDetailSurahScreenProps) => {
    const dispatch = useDispatch();
    const surahs = useSelector((state) => state.surah.data);
    const loading = useSelector((state) => state.surah.loading);
    const error = useSelector((state) => state.surah.error);
  
    useEffect(() => {
      dispatch(getSurahAsync());
    }, [dispatch]);

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


    console.log("props.route.params:", props.route.params)
    let surahReverse = []
    let start = surahs.length - 1;
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
            children={() => <SurahScreen surah={surah}  />}
            options={{
              tabBarLabel: surah.name
            }}
          />
        ))}

      </QuranDetailTab.Navigator>
    )
  }, [surahs, loading, error])

  return (
    <View style={Styles.container}>
      {renderTabs()}
    </View>
  );
}
