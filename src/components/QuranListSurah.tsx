import React, {Component, useCallback, useEffect, useState } from 'react';
import {Text, View, TextInput, Image, SafeAreaView, FlatList, TouchableOpacity, TouchableHighlight} from 'react-native';

import { logger } from "react-native-logs";

const log = logger.createLogger();

import Styles from '../Style';
import { QuranListSurahTabProps } from '../navigation/type';
import { getQuranSurah } from '../db-service';
import { Surah } from '../models/Quran';

import SurahRest from '../rest/Surah.rest';
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

  const [items, setItems] = useState<Surah[]>([]);
  const [selectedId, setSelectedId] = useState<string>();
  
  /*const loadDataCallback = useCallback(async () => {
      log.debug('items initiate --', items)
     
      log.info('after connect db in component')
      const storedTodoItems = await getQuranSurah();

        setItems(storedTodoItems);

        log.debug('items after set --', items)
  }, []);
  useEffect(() => {
    loadDataCallback();
  }, [loadDataCallback]);*/

  const getSurah = async () => {
    const baseUrl = process.env.EXPO_PUBLIC_API_URL;
    log.info('baseUrl', baseUrl);
    const surahRest = new SurahRest(baseUrl);

    const dataSurah = await surahRest.get();
    log.debug('dataSurah: ', dataSurah)
    let surahs: Surah[] = [];

    for (let sur of dataSurah) {
      let suro: Surah =  {
        Surah: (sur.number).toString(),
        Ayat: sur.name,
        Terjemahan: sur.translation,
        Jumlah_Ayat: sur.numberOfAyahs,
        Ayat_Arab: sur.nameArab.String
      }
      surahs.push(suro)
    }
    setItems(surahs);
  };


  useEffect(() => {
    getSurah();
  }, []);

  return (
      <SafeAreaView style={Styles.container}>
        {/* Header */}
        <View style={Styles.header}>
          <Text style={Styles.headerTitle}>Al-Quran</Text>
            <View style={Styles.headerIcons}>
              <Text style={Styles.headerIcon}>🔖</Text>
              <Text style={Styles.headerIcon}>⚙️</Text>
              <TouchableOpacity style={Styles.searchButton}>
                <Text style={Styles.searchButtonText}>🔍 Cari</Text>
              </TouchableOpacity>
            </View>
        </View>

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
                    surahId: item.Surah
                  })
                }
                key={item.Surah}
                style={Styles.surahItem}>
                  
                    <View style={Styles.numberCircle}>
                      <Text>{item.Surah}</Text>
                    </View>

                    <View style={Styles.surahInfo}>
                      <View style={Styles.surahNameContainer}>
                        <Text style={Styles.surahName}> {item.Ayat} </Text>
                        <Text style={Styles.arabicName}> {item.Ayat_Arab} </Text> 
                      </View>

                      <Text style={Styles.description}>
                          {item.Terjemahan} ({String(item.Jumlah_Ayat)} ayat)
                        </Text>
                    </View>
                    
              </TouchableOpacity>
            
            )}
          </ScrollView>
      </SafeAreaView> 
    )
}

export default QuranListSurah;
