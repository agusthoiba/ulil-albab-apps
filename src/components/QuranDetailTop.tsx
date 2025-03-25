import React, { useCallback, useEffect } from 'react';
import { View, Text, ActivityIndicator } from 'react-native';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { useDispatch, useSelector } from 'react-redux';

import { logger } from "react-native-logs";
const log = logger.createLogger();

import { QuranDetailSurahScreenProps } from '../navigation/type';
import Styles from '../Style';
import { SurahScreen } from '../components/QuranDetailScreen';
import { getSurahAsync } from '../reducer/surahSlice';
import { getAllAyahAsync } from '../reducer/ayahAllSlice';

const QuranDetailTab = createMaterialTopTabNavigator();

export const QuranDetailTop = (props: QuranDetailSurahScreenProps) => {
  const dispatch = useDispatch();
  const surahs = useSelector((state) => state.surah.data);
  const loading = useSelector((state) => state.surah.loading);
  const error = useSelector((state) => state.surah.error);

  if (surahs.length === 0) {
    useEffect(() => {
      dispatch(getSurahAsync());
    }, [dispatch]);
  }

    // ayah all
  const ayahs = useSelector((state) => state.ayahAll.data);
  const loadingAyah = useSelector((state) => state.ayahAll.loading);
  const errorAyah = useSelector((state) => state.ayahAll.error);

  if (ayahs?.length === 0) {
    useEffect(() => {
      dispatch(getAllAyahAsync());
    }, [dispatch]);
  }

  const renderTabs = useCallback(() => {
    /*if (loading || loadingAyah) {
      return (
        <View style={Styles.loadingContainer}>
          <ActivityIndicator size="large" color="#009688" />
        </View>
      );
    }*/
  
    if (error || errorAyah) {
      log.error(error || errorAyah);
      return (
        <View style={Styles.errorContainer}>
          <Text style={Styles.errorText}></Text>
        </View>
      );
    }

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
        })}
        >

        {surahReverse.map((surah) => (
          <QuranDetailTab.Screen
            key={surah.number}
            name={`Surah${surah.number}`}
            children={() => <SurahScreen surah={surah}  ayahs={ayahs} />}
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
