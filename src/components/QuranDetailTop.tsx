import React, { useCallback, useEffect, useState, useRef } from 'react';
import { View, Dimensions, FlatList, TouchableOpacity, Text, ActivityIndicator } from 'react-native';
import { useSelector } from 'react-redux';
import AsyncStorage from '@react-native-async-storage/async-storage';

import { SurahResp } from '../models/Quran';
import { QuranDetailSurahScreenProps } from '../navigation/type';
import { RootState } from '../reducer/store';
import Styles from '../Style';
import { SurahScreen } from '../components/QuranDetailScreen';
import { LAST_READ_KEYS } from '../config';


type ItemProps = {
  item: SurahResp,
  index: number
}

const { width } = Dimensions.get('window');
const ITEM_WIDTH = width / 3;

const getNavItemLayout = (_data: ArrayLike<SurahResp> | null | undefined, index: number) => ({
  length: ITEM_WIDTH,
  offset: ITEM_WIDTH * index,
  index,
});

export const QuranDetailTop = (props: QuranDetailSurahScreenProps) => {
  const flatListRef = useRef<FlatList<SurahResp>>(null);
  const surahId = Number(props.route.params.surahId);
  const isLastRead = !surahId;

  const [currentIndex, setCurrentIndex] = useState(surahId - 1);

  const [scrollToVerseId, setScrollToVerseId] = useState<number>(1);

  const [loadingLastRead, setLoadingLastRead] = useState(isLastRead);

  const surahs = useSelector((state: RootState) => state.surah.data);
  const ayahs = useSelector((state: RootState) => state.ayahAll.data);

  // Fetch lastRead when navigated from "Terakhir Baca"
  useEffect(() => {
    if (!isLastRead) return;
    const fetchLastRead = async () => {
      try {
        const lastReadKeys = await AsyncStorage.getItem(LAST_READ_KEYS);
        if (lastReadKeys) {
          const { verseId, surahNumber } = JSON.parse(lastReadKeys);
          setCurrentIndex(Number(surahNumber) - 1);
          setScrollToVerseId(Number(verseId));
        } else {
          setCurrentIndex(0);
        }
      } catch {
        setCurrentIndex(0);
      } finally {
        setLoadingLastRead(false);
      }
    };
    fetchLastRead();
  }, []);

  const surah: SurahResp | undefined = surahs.find((s) => s.number === currentIndex + 1);

  const scrollToIndex = (index: number) => {
    if (flatListRef.current) {
      flatListRef.current.scrollToIndex({
        index,
        animated: true,
        viewPosition: 0.5,
      });
      setCurrentIndex(index);
    }
  };

  const renderItem = ({ item, index }: ItemProps) => (
    <TouchableOpacity
      style={[
        Styles.tabItem,
        { width: ITEM_WIDTH },
        currentIndex === item.number - 1 ? Styles.tabActiveIndicator : null,
      ]}
      onPress={() => {
        scrollToIndex(index);
        //setScrollToVerseId(undefined);
      }}
    >
      <View style={Styles.tabItemInside}>
        <Text style={[
          Styles.tabLabel,
          currentIndex === item.number - 1 ? Styles.tabLabelActiveIndicator : null,
        ]}>
          {item.name}
        </Text>
      </View>
    </TouchableOpacity>
  );

  const keyExtractor = useCallback((item: SurahResp) => String(item.number), []);

  // Scroll tab bar to active surah
  useEffect(() => {
    if (currentIndex < 0 || surahs.length === 0) return;

    const timer = setTimeout(() => {
      flatListRef.current?.scrollToIndex({
        index: currentIndex,
        animated: false,
        viewPosition: 0.5,
        viewOffset: 0,
      });
    }, 100);
    return () => clearTimeout(timer);
  }, [currentIndex, surahs.length]);

  if (loadingLastRead) {
    return (
      <View style={[Styles.container, { justifyContent: 'center', alignItems: 'center' }]}>
        <ActivityIndicator size="large" color="#1fb89d" />
      </View>
    );
  }

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
          inverted={true}
          horizontal={true}
          snapToAlignment="center"
          decelerationRate="fast"
        />
      </View>
      {surah && <SurahScreen surah={surah} ayahs={ayahs} scrollToVerseId={scrollToVerseId} />}
    </View>
  );
};
