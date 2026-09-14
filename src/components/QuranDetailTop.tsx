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
  const surahId = Number(props.route.params?.surahId);
  // Guard against "Terakhir Baca" navigation that sends `surahId: undefined`.
  // Number(undefined) is NaN, so `Number.isFinite` keeps currentIndex valid.
  const hasSurahParam = Number.isFinite(surahId) && surahId > 0;
  const isLastRead = !hasSurahParam;

  const [currentIndex, setCurrentIndex] = useState(hasSurahParam ? surahId - 1 : 0);

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
          const savedIndex = Number(surahNumber) - 1;
          const savedVerseId = Number(verseId);
          setCurrentIndex(Number.isFinite(savedIndex) && savedIndex >= 0 ? savedIndex : 0);
          setScrollToVerseId(
            Number.isFinite(savedVerseId) && savedVerseId > 0 ? savedVerseId : 1,
          );
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
  }, [isLastRead]);

  const surah: SurahResp | undefined = surahs.find((s) => s.number === currentIndex + 1);

  const scrollToIndex = (index: number) => {
    if (
      !Number.isFinite(index) ||
      index < 0 ||
      index >= surahs.length ||
      !flatListRef.current
    ) {
      return;
    }
    flatListRef.current.scrollToIndex({
      index,
      animated: true,
      viewPosition: 0.5,
    });
    setCurrentIndex(index);
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
    // Guard against NaN / out-of-range indexes (e.g. "Terakhir Baca" with no
    // valid saved position). FlatList.scrollToIndex throws on invalid indexes.
    if (
      !Number.isFinite(currentIndex) ||
      currentIndex < 0 ||
      currentIndex >= surahs.length
    ) {
      return;
    }
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
