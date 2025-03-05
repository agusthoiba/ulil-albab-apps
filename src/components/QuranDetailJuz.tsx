import React, { Component, useCallback, useEffect, useState, createContext, useContext } from 'react';
import { Alert, Text, View, Image, FlatList, Button } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';

import { logger } from "react-native-logs";
const log = logger.createLogger();

import Styles from '../Style';
import { getAllAyahAsync } from '../reducer/ayahAllSlice';
// import { Ayat } from '../../models/Quran';


const Bismi = () => {
  return (
    <View style={Styles.bismillah}>
      <Text style={Styles.arabicText}>بِسْمِ اللَّهِ الرَّحْمَٰنِ الرَّحِيمِ</Text>
    </View>
  )
}

const QuranDetailJuz = ({ juz }) => {
  log.info('aku d component detail juz')
  log.info('juz: ',juz)

  const dispatch = useDispatch();
  const ayahs = useSelector((state) => state.ayahAll.data);
  const loading = useSelector((state) => state.ayahAll.loading);
  const error = useSelector((state) => state.ayahAll.error);

  // const [items, setItems] = useState<Ayat[]>([]);

  const items = ayahs.filter((a) => {
    return a.juzId.Int64 == juz.id
  })

  log.info('items[0]: ',items[0])

  useEffect(() => {
    dispatch(getAllAyahAsync());
  }, [dispatch]);

  if (error) {
    return <View><Text>An error occured</Text></View>
  }

  return (
    <View style={Styles.content}>

      {/* [1,9].includes(surah.number) ? null : <Bismi /> */}

      <FlatList
        data={items}
        renderItem={
          ({ item, index }) =>
            <View style={Styles.verse}>
              <Text style={Styles.arabicText}>{item.ayahText} 
                <Text style={Styles.arabicNumberIndex} >{(index + 1).toLocaleString("ar-EG")}</Text> 
              </Text>
                  
              <Text style={Styles.transliteration}>{item.ReadText}</Text>
              <Text style={Styles.translation}>{item.indoText}</Text>
            </View>
        }
        keyExtractor={item => String(item.id)}
      />

    </View>
  )
}

export default QuranDetailJuz;
