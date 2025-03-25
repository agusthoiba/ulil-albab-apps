import React from 'react';
import { View, Text, ScrollView } from 'react-native';

import { SurahResp, Juz, Ayah } from '../models/Quran';
import  QuranDetailSurah from './QuranDetailSurah';
import Styles from '../Style';

interface SurahScreenProps {
  surah: SurahResp;
  ayahs: Ayah[]
}



export const SurahScreen: React.FC<SurahScreenProps> = ({ surah, ayahs }) => {
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


      <QuranDetailSurah surah={surah} ayahs={ayahsFiltering}/>
    </View>
  );
};
