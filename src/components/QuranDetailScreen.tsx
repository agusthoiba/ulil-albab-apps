import React from 'react';
import { View, Text, ScrollView } from 'react-native';

import { SurahResp, Juz } from '../models/Quran';
import  QuranDetailSurah from './QuranDetailSurah';
import Styles from '../Style';

interface SurahScreenProps {
  surah: SurahResp;
}

export const SurahScreen: React.FC<SurahScreenProps> = ({ surah }) => {
 
  return (
    <ScrollView style={Styles.container}>
      <View style={Styles.surahInfoDetail}>
        <Text style={Styles.surahType}>{surah.revelation}</Text>
        <Text style={Styles.surahTitle}>{surah.nameArab.String}</Text>
        <Text style={Styles.ayahCount}>{surah.numberOfAyahs} Ayat</Text>
      </View>
      {/* Add your Quran content here */}

      <QuranDetailSurah surah={surah}/>
    </ScrollView>
  );
};
