import React from 'react';
import { View, Text, ScrollView } from 'react-native';

import { SurahResp } from '../models/Quran';
import  QuranDetailSurah from './QuranDetailSurah';
import { QuranDetailSurahScreenProps } from '../navigation/type';
import Styles from '../Style';

interface SurahScreenProps {
  surah: SurahResp;
}

interface QuranDetaiProps {
  qDetailProps: QuranDetailSurahScreenProps;
}

// const newProps = QuranDetailSurahScreenProps<QuranDetaiProps>

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
