import React, { useCallback} from 'react';
import { Text, View, SafeAreaView, useWindowDimensions } from 'react-native';

import Styles from '../Style';
import { Ayah, SurahResp } from '../models/Quran';
import { FlatList } from 'react-native-gesture-handler';

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

const QuranDetailSurah = ({ surah, ayahs }: {surah: SurahResp, ayahs: Ayah[]}) => {

  const renderItem = ({item, index}: ItemProps) => (
    <View style={Styles.verse}>
    <Text style={Styles.arabicText}>{item.ayahText} 
      <Text style={Styles.arabicNumberIndex} >{(index + 1).toLocaleString("ar-EG")}</Text> 
    </Text>
            
    <Text style={Styles.transliteration}>{item.ReadText}</Text>
    <Text style={Styles.translation}>{item.indoText}</Text>
  </View>
  );

  const keyExtractor = useCallback((item: Ayah) => String(item.id), []);

  return (
    <SafeAreaView style={Styles.content}>

      { [1,9].includes(surah.number) ? null : <Bismi /> }

      <FlatList
        data={ayahs}
        renderItem={renderItem}
        keyExtractor={keyExtractor}
        showsVerticalScrollIndicator={false}
        initialNumToRender={8}
        maxToRenderPerBatch={10}
        windowSize={5}
      />

    </SafeAreaView>
  )
}

export default QuranDetailSurah;
