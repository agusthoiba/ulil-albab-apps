import React, { useEffect, useCallback, useMemo } from 'react';
import { Text, View, SafeAreaView, Platform, useWindowDimensions, FlatList, ActivityIndicator } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { FlashList } from "@shopify/flash-list";


import { logger } from "react-native-logs";
const log = logger.createLogger();

import Styles from '../Style';
import {  getAllAyahAsync } from '../reducer/ayahAllSlice';
import {  getAyahAsync } from '../reducer/ayahSlice';
import { Ayah, SurahResp } from '../models/Quran';

const Bismi = () => {
  return (
    <View style={Styles.bismillah}>
      <Text style={Styles.arabicText}>بِسْمِ اللَّهِ الرَّحْمَٰنِ الرَّحِيمِ</Text>
    </View>
  )
}

type ItemProps = {
  item: Ayah,
  index: number
}


const getItemLayout = (data, index) => {
  const height = 400;
  return { 
    length: height * 0.1, 
    offset: height * 0.1 * index, 
    index 
  }
};

// Memoized Item component
const ListItem = React.memo(({ item, index, width}: { 
  item: Ayah; 
  index: number;
  width: number; 
}) => (
  <View style={Styles.verse}>
    <Text style={Styles.arabicText}>{item.ayahText} 
      <Text style={Styles.arabicNumberIndex} >{(index + 1).toLocaleString("ar-EG")}</Text> 
    </Text>
            
    <Text style={Styles.transliteration}>{item.ReadText}</Text>
    <Text style={Styles.translation}>{item.indoText}</Text>
  </View>
));


const QuranDetailSurah = ({ surah, ayahs }: {surah: SurahResp, ayahs: Ayah[]}) => {
  const { width } = useWindowDimensions();
  /*const dispatch = useDispatch();
  // ayah all
  const ayahs = useSelector((state) => state.ayahAll.data);
  const loading = useSelector((state) => state.ayahAll.loading);
  const error = useSelector((state) => state.ayahAll.error);
    
  if (ayahs.length === 0) {
    useEffect(() => {
      dispatch(getAllAyahAsync());
    }, [dispatch]);
  } */


    // Generate items only once and memoize the result
  const items = useMemo(() => ayahs, []);

  const renderItem = useCallback(({item, index}: ItemProps) => (
    <ListItem item={item} index={index} width={width} />
  ), []);

  const keyExtractor = useCallback((item: Ayah) => String(item.id), []);

  // Memoize the getItemType function for better recycling
  const getItemType = useCallback(() => 'row', []);
  
  return (
    <SafeAreaView style={Styles.content}>

      { [1,9].includes(surah.number) ? null : <Bismi /> }

      <FlashList
        data={items}
        renderItem={renderItem}
        keyExtractor={keyExtractor}
        removeClippedSubviews={Platform.OS !== 'web'} 
        estimatedItemSize={100}
        showsVerticalScrollIndicator={false}
        initialNumToRender={8}
        maxToRenderPerBatch={5}
        windowSize={3}
        getItemType={getItemType}
      />

    </SafeAreaView>
  )
}

export default QuranDetailSurah;
