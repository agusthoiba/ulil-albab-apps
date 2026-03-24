import React from 'react';
import { Text, View, Platform, SafeAreaView } from 'react-native';
import { useSelector } from 'react-redux';
import { FlashList } from "@shopify/flash-list";

import { SurahResp, Juz } from '../models/Quran';
import Styles from '../Style';

const Bismi = () => {
  return (
    <View style={Styles.bismillah}>
      <Text style={Styles.arabicText}>بِسْمِ اللّٰهِ الرَّحْمٰنِ الرَّحِيْمِ</Text>
    </View>
  )
}

type SurahInfoProps = {
  surah: SurahResp
}

type DetailJuzProps = {
  juz: Juz
}

const SurahInfoDetailnBismi = ({ surah }: SurahInfoProps) => {
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

const QuranDetailJuz = ({ juz }: DetailJuzProps) => {
  const ayahs = useSelector((state) => state.ayahAll.data);
  const error = useSelector((state) => state.ayahAll.error);
 
  const surahs = useSelector((state) => state.surah.data);
  const errorSurah = useSelector((state) => state.surah.error);

  const items = ayahs.filter((a) => {
    return a.juzId.Int64 == juz.id
  });

  if (error || errorSurah) {
    return <View><Text>An error occured load surah and ayah</Text></View>
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
    <SafeAreaView style={Styles.content}>
      <FlashList
        data={items}
        renderItem={renderItem}
        keyExtractor={keyExtractor}
        removeClippedSubviews={Platform.OS !== 'web'}
        estimatedItemSize={100}
        showsVerticalScrollIndicator={false}
        //initialNumToRender={8}
        //maxToRenderPerBatch={5}
        //windowSize={3}
      />

    </SafeAreaView>
  )
}

export default QuranDetailJuz;