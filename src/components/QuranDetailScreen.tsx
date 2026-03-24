import React, { useEffect } from 'react';
import { View, Text } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

import { SurahResp, Ayah } from '../models/Quran';
import  QuranDetailSurah from './QuranDetailSurah';
import Styles from '../Style';
//import { API_URL, LAST_READ_KEY } from '../config';

interface SurahScreenProps {
  surah: SurahResp;
  ayahs: Ayah[];
  scrollToVerseId?: number;
}

export const SurahScreen: React.FC<SurahScreenProps> = ({ surah, ayahs, scrollToVerseId }) => {
  const ayahsFiltering: Ayah[] = ayahs.filter((a) => {
    return a.suraId == surah.number
  });

  return (
    <View style={Styles.container}>
      <View style={Styles.surahInfoDetail}>
        <Text style={Styles.surahType}>{surah.revelation}</Text>
        <Text style={Styles.surahTitle}>{surah.nameArab.String}</Text>
        <Text style={Styles.ayahCount}>{surah.numberOfAyahs} Ayat</Text>
      </View>


      <QuranDetailSurah surah={surah} ayahs={ayahsFiltering} scrollToVerseId={scrollToVerseId}/>
    </View>
  );
};
