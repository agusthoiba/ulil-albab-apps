import React, { Component, useCallback, useEffect, useState, createContext, useContext } from 'react';
import { Alert, Text, View, Image, FlatList, Button } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';

import { logger } from "react-native-logs";
const log = logger.createLogger();

import Styles from '../Style';
import { getAyahAsync } from '../reducer/ayahSlice';


const Bismi = () => {
  return (
    <View style={Styles.bismillah}>
      <Text style={Styles.arabicText}>بِسْمِ اللَّهِ الرَّحْمَٰنِ الرَّحِيمِ</Text>
    </View>
  )
}

const QuranDetailSurah = ({ surah }) => {
  const dispatch = useDispatch();
  const ayahs = useSelector((state) => state.ayah.data);
  const error = useSelector((state) => state.ayah.error);

  const items = ayahs.filter((a) => {
    return a.suraId == surah.number
  })

  useEffect(() => {
    dispatch(getAyahAsync(surah.number));
  }, [dispatch]);

  if (error) {
    return <View><Text>An error occured</Text></View>
  }

  return (
    <View style={Styles.content}>

      { [1,9].includes(surah.number) ? null : <Bismi /> }

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

export default QuranDetailSurah;
