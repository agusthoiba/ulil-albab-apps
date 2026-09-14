import React from 'react';
import {
  Text, View,
  SafeAreaView, TouchableOpacity,
  FlatList
} from 'react-native';
import { useSelector } from 'react-redux';

import Styles from '../Style';
import { QuranListSurahTabProps } from '../navigation/type';
import { RootState } from '../reducer/store';
import { SurahResp } from '../models/Quran';

const QuranListSurah = ({navigation}: QuranListSurahTabProps) => {
  const items = useSelector((state: RootState) => state.surah.data);

  const keyExtractor = (item: SurahResp) => String(item.number);
  const renderItem = ({ item }: { item: SurahResp }) =>
    <TouchableOpacity onPress={() =>
      navigation.navigate('QuranDetail', {
        surahId: String(item.number),
        surahName: item.name,
        juzId: undefined,
      })
    }
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
