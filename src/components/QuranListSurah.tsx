import React, { useState, useEffect } from 'react';
import {
  Text, View, 
  SafeAreaView, TouchableOpacity,
  FlatList
} from 'react-native';
import { logger } from "react-native-logs";
import { useSelector } from 'react-redux';

import Styles from '../Style';
import { QuranListSurahTabProps } from '../navigation/type';

const log = logger.createLogger();

const QuranListSurah = ({route, navigation}: QuranListSurahTabProps) => {
  const [selectedId, setSelectedId] = useState<string>();
  
  const items = useSelector((state) => state.surah.data);
  const loading = useSelector((state) => state.surah.loading);
  const error = useSelector((state) => state.surah.error);

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
