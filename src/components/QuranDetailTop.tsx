import React, { useCallback, useEffect, useState, useRef } from 'react';
import { View, Dimensions, FlatList, TouchableOpacity, Text } from 'react-native';
import { useSelector } from 'react-redux';

import { SurahResp } from '../models/Quran';
import { QuranDetailSurahScreenProps } from '../navigation/type';
import Styles from '../Style';
import { SurahScreen } from '../components/QuranDetailScreen';

type ItemProps = {
  item: SurahResp,
  index: number
}

const { width } = Dimensions.get('window');
const ITEM_WIDTH = width / 3;


const getNavItemLayout = (data, index) => {
  const result = { 
    length: ITEM_WIDTH,
    offset: ITEM_WIDTH * index,
    index 
  }

  return result
};

export const QuranDetailTop = (props: QuranDetailSurahScreenProps) => {
  const flatListRef = useRef(null);
  const { navigation } = props;
  let surahId = Number(props.route.params.surahId);
  const [currentIndex, setCurrentIndex] = useState(surahId - 1);

  const surahs = useSelector((state) => state.surah.data);
  const loading = useSelector((state) => state.surah.loading);
  const error = useSelector((state) => state.surah.error);

  // ayah all
  const ayahs = useSelector((state) => state.ayahAll.data);
  const loadingAyah = useSelector((state) => state.ayahAll.loading);
  const errorAyah = useSelector((state) => state.ayahAll.error);

  const surah: SurahResp = surahs.find((s) => s.number === surahId);

  const scrollToIndex = (index: number) => {
    if (flatListRef.current) {
      flatListRef.current.scrollToIndex({
        index,
        animated: true,
        viewPosition: 0.5, // 0 is at the top, 0.5 is centered, 1 is at the bottom
      })
      setCurrentIndex(index);
    }
  }

  const renderItem = ({item, index}: ItemProps) => {
    return (
      <TouchableOpacity 
          style={[
            Styles.tabItem, 
            { width: ITEM_WIDTH },
            currentIndex == item.number - 1 ? Styles.tabActiveIndicator : null,
          ]}
          onPress={() => {
            scrollToIndex(index);
            navigation.navigate('QuranDetail', {
              surahId: String(item.number),
              surahName: item.name
            });
          }}
          
          >
          <View style={Styles.tabItemInside}>
            <Text style={[
                Styles.tabLabel, 
                currentIndex == item.number - 1 ? Styles.tabLabelActiveIndicator : null
              ]}>
              {item.name}
            </Text>
          </View>
      </TouchableOpacity>
    )
  }

  const keyExtractor = useCallback((item: SurahResp) => String(item.number), []);

    // Attempt to scroll when component is ready
  useEffect(() => {
    const timer = setTimeout(() => {
      // scrollToIndex(currentIndex);
      flatListRef.current?.scrollToIndex({ 
        index: currentIndex, 
        animated: false,
        viewPosition: 0.5,
        viewOffset: 0
      });
    }, 100); // delay to ensure layout is done
    return () => clearTimeout(timer); // Cleanup timer
  }, [currentIndex]);

  return (
    <View style={Styles.container}>
      <View style={Styles.tabBar}>
        <FlatList
          ref={flatListRef}
          data={surahs}
          renderItem={renderItem}
          keyExtractor={keyExtractor}
          getItemLayout={getNavItemLayout}
          showsHorizontalScrollIndicator={false}
          //initialScrollIndex={currentIndex}
          inverted={true}
          horizontal={true}
          snapToAlignment="center"
          decelerationRate="fast"
        />
      </View>
      <SurahScreen surah={surah} ayahs={ayahs} />
    </View>
  )
}
