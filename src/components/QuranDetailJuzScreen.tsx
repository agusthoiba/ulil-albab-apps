import React from 'react';
import { View, Text, ScrollView } from 'react-native';

import { Juz } from '../models/Quran';
import  QuranDetailJuz from './QuranDetailJuz';
import Styles from '../Style';

interface JuzScreenProps {
  juz: Juz;
}

export const JuzScreen: React.FC<JuzScreenProps> = ({ juz }) => {
 
  return (
    <ScrollView style={Styles.container}>
      <QuranDetailJuz juz={juz}/>
    </ScrollView>
  );
};
