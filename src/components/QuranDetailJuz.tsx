import React, { Component, useCallback, useEffect, useState, createContext, useContext } from 'react';
import { Alert, Text, View, Image, FlatList, Button } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';

import { logger } from "react-native-logs";
const log = logger.createLogger();

import Styles from '../Style';
import { getAllAyahAsync } from '../reducer/ayahAllSlice';
import { getSurahAsync } from '../reducer/surahSlice';


const Bismi = () => {
  return (
    <View style={Styles.bismillah}>
      <Text style={Styles.arabicText}>بِسْمِ اللَّهِ الرَّحْمَٰنِ الرَّحِيمِ</Text>
    </View>
  )
}

const SurahInfoDetailnBismi = ({ surah }) => {
  return (
    <View>
      <View style={Styles.surahInfoDetail}>
        <Text style={Styles.surahType}>{surah.revelation}</Text>
        <Text style={Styles.surahTitle}>{surah.nameArab.String}</Text>
        <Text style={Styles.ayahCount}>{surah.numberOfAyahs} Ayat</Text>
      </View>
      {(![1,9].includes(surah.number)) ? <Bismi /> : null}
    </View>
  )
}

const QuranDetailJuz = ({ juz }) => {
  const ayahs = useSelector((state) => state.ayahAll.data);
  const error = useSelector((state) => state.ayahAll.error);

  if (ayahs.length === 0) {
    const dispatch = useDispatch();
    useEffect(() => {
      dispatch(getAllAyahAsync());
    }, [dispatch]);
  }
 
  const surahs = useSelector((state) => state.surah.data);
  const errorSurah = useSelector((state) => state.surah.error);

  if (surahs.length === 0) {
    const dispatch = useDispatch();
    useEffect(() => {
      dispatch(getSurahAsync());
    }, [dispatch]);
  }

  const items = ayahs.filter((a) => {
    return a.juzId.Int64 == juz.id
  })



  if (error || errorSurah) {
    return <View><Text>An error occured</Text></View>
  }

  const keyExtractor = item => String(item.id)
  const renderItem =  ({ item, index }) =>
    <View>
      <View>
        {  item.verseID == 1 ? <SurahInfoDetailnBismi surah={handleFindSurah(item)} /> : null  }
      </View>
      <View style={Styles.verse}>
        <Text style={Styles.arabicText}>{item.ayahText} 
          <Text style={Styles.arabicNumberIndex} >{(item.verseID).toLocaleString("ar-EG")}</Text> 
        </Text>
            
        <Text style={Styles.transliteration}>{item.ReadText}</Text>
        <Text style={Styles.translation}>{item.indoText}</Text>
      </View>

    </View>


  const handleFindSurah = (item) => {
    return surahs.find((sur) => sur.number == item.suraId);
  }

  return (
    <View style={Styles.content}>

      <FlatList
        data={items}
        renderItem={renderItem}
        keyExtractor={keyExtractor}
        
      />

    </View>
  )
}

export default QuranDetailJuz;