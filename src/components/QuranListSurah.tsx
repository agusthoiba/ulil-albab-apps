import React, {Component, useCallback, useEffect, useState } from 'react';
import {Text, View, TextInput, Image, SafeAreaView, FlatList, TouchableOpacity, TouchableHighlight} from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { logger } from "react-native-logs";

const log = logger.createLogger();

import Styles from '../Style';
import { QuranListSurahTabProps } from '../navigation/type';
import { Surah } from '../models/Quran';

import { getSurahAsync } from '../reducer/surahSlice';
import { ScrollView } from 'react-native-gesture-handler';

type ItemProps = {
  item: Surah;
  onPress: () => void;
  backgroundColor: string;
  textColor: string;
};


const Item = ({item, onPress, backgroundColor, textColor}: ItemProps) => (
  <TouchableOpacity onPress={onPress}>
    <Text>{item.Ayat}</Text>
  </TouchableOpacity>
);

const QuranListSurah = ({route, navigation}: QuranListSurahTabProps) => {
 // const [items, setItems] = useState<Surah[]>([]);
  const [selectedId, setSelectedId] = useState<string>();

  const dispatch = useDispatch();
  const items = useSelector((state) => state.surah.data);
  // const loading = useSelector((state) => state.surah.loading);
  const error = useSelector((state) => state.surah.error);

  // log.info('items: ', items);
  useEffect(() => {
    dispatch(getSurahAsync());
  }, [dispatch]);
  
  if (error) {
    return <View><Text>An error occured</Text></View>
  }

  return (
      <SafeAreaView style={Styles.container}>

        {/* Search Input */}
        <View style={Styles.searchContainer}>
          <TextInput 
            style={Styles.searchInput}
            placeholder="Cari Nama Surah"
            placeholderTextColor="#999"
          />
        </View>  

        {/* List Surah */}
          <ScrollView style={Styles.surahList}>
            {items.map(item =>
              <TouchableOpacity onPress={() => 
                  navigation.navigate('QuranDetail', {
                    surahId: item.number,
                    surahName: item.name
                  })
                }
                key={item.Surah}
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
            
            )}
          </ScrollView>
      </SafeAreaView> 
    )
}

export default QuranListSurah;
