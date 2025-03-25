import React, { useState, useEffect } from 'react';
import {
  Text, View, ActivityIndicator,
  SafeAreaView, TouchableOpacity,
  FlatList, ScrollView
} from 'react-native';
import { logger } from "react-native-logs";
import { useDispatch, useSelector } from 'react-redux';

import Styles from '../Style';
import { QuranListSurahTabProps } from '../navigation/type';
import { getSurahAsync } from '../reducer/surahSlice';
// import { Surah, SurahResp } from '../models/Quran';
// import { useGetSurahQuery } from '../services/quranApi';
// import storage from "@react-native-async-storage/async-storage";
// import store from '../reducer/store';

const log = logger.createLogger();

const QuranListSurah = ({route, navigation}: QuranListSurahTabProps) => {
  const [selectedId, setSelectedId] = useState<string>();
  
  const dispatch = useDispatch();
  const items = useSelector((state) => state.surah.data);
  const loading = useSelector((state) => state.surah.loading);
  const error = useSelector((state) => state.surah.error);

  console.log("le: ", loading, error)
  // if have been not persist use dispatch
  if (items.length === 0) {
    log.info("items is null")
    useEffect(() => {
      dispatch(getSurahAsync());
    }, [dispatch]);
  }

  if (loading) {
    return <ActivityIndicator size="large" style={Styles.loader} />;
  }

  if (error) {
    log.error("error", error)
    return <View><Text>An error occured while load surah</Text></View>
  }

  // console.log('data err isFetch', data, error, isFetching)
  
  const keyExtractor = item => item.number; 
  const renderItem = ({ item }) =>
    <TouchableOpacity onPress={() =>
      navigation.navigate('QuranDetail', {
        surahId: item.number,
        surahName: item.name
      })
    }
      key={item.number}
      style={Styles.surahItem}>

      <View style={Styles.numberCircle}>
        <Text>{item.number}</Text>
      </View>

      <View style={Styles.surahInfo}>
        <View style={Styles.surahNameContainer}>
          <Text style={Styles.surahName}> {item.name} </Text>
          <Text style={Styles.arabicName}> {item.nameArab.String} </Text>
        </View>

        <Text style={Styles.description}>
          {item.translation} ({String(item.numberOfAyahs)} ayat)
        </Text>
      </View>

    </TouchableOpacity>
 
  return (
      <SafeAreaView style={Styles.container}>

        {/* Search Input */}
        {/*<View style={Styles.searchContainer}>
          <TextInput style={Styles.searchInput}placeholder="Cari Nama Surah" placeholderTextColor="#999"/>
        </View> */}

        {/* List Surah */}
          <FlatList 
            style={Styles.surahList}
            data={items}
            renderItem={renderItem}
            keyExtractor={keyExtractor}
            removeClippedSubviews={true}
           />
      </SafeAreaView> 
    )
}

export default QuranListSurah;
