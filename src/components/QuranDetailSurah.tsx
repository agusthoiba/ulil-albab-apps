import React, { useCallback, useEffect, useRef, useState } from 'react';
import { Text, View, SafeAreaView, StyleSheet } from 'react-native';
import BottomSheet, { BottomSheetView } from '@gorhom/bottom-sheet';
import { FlatList, TouchableOpacity } from 'react-native-gesture-handler';
import AsyncStorage from '@react-native-async-storage/async-storage';
import Snackbar from 'react-native-snackbar';

import Styles from '../Style';
import { Ayah, SurahResp } from '../models/Quran';
import { LAST_READ_KEYS } from '../config';

const Bismi = ({ surahId }: { surahId: number }) => {
  if (surahId == 1 || surahId == 9) {
    return null;
  }
  return (
    <View style={Styles.bismillah}>
      <Text style={Styles.arabicText}>بِسْمِ اللّٰهِ الرَّحْمٰنِ الرَّحِيْمِ</Text>
    </View>
  );
};

const QuranDetailSurah = ({ surah, ayahs, scrollToVerseId }: { surah: SurahResp; ayahs: Ayah[]; scrollToVerseId?: number }) => {
  const bottomSheetRef = useRef<BottomSheet>(null);
  const flatListRef = useRef<FlatList<Ayah>>(null);
  const [selectedAyah, setSelectedAyah] = useState<Ayah | null>(null);

  // Scroll to the last-read verse once ayahs are loaded
  useEffect(() => {
    if (!scrollToVerseId || ayahs.length === 0) return;
    const index = scrollToVerseId - 1;
    if (index < 0 || index >= ayahs.length) return;
    const timer = setTimeout(() => {
      flatListRef.current?.scrollToIndex({
        index,
        animated: true,
        viewPosition: 0,
      });
    }, 600);
    return () => clearTimeout(timer);
  }, [scrollToVerseId, ayahs.length]);

  const handleAyahPress = useCallback((ayah: Ayah) => {
    setSelectedAyah(ayah);
    bottomSheetRef.current?.expand();
  }, []);

  const handleMarkLastRead = useCallback(async () => {
    if (!selectedAyah) return;
    
    try {
      const lastReadKeys = {
        ayahId: selectedAyah.id,
        surahNumber: surah.number,
        juzId: selectedAyah.juzId.id,
        verseId: selectedAyah.verseID,
        timestamp: Date.now(),
      }
      await AsyncStorage.setItem(LAST_READ_KEYS, JSON.stringify(lastReadKeys));
    } catch (e) {
      console.error('handleMarkLastRead error:', e);
    }
    bottomSheetRef.current?.close();

    Snackbar.show({
      text: 'Terakhir baca ditandai pada ayat ini',
      duration: Snackbar.LENGTH_LONG,
      action: {
        text: 'OK',
        textColor: '#4CAF50'
        //onPress: () => { /* undo logic */ },
      },
    });

    const index = ayahs.findIndex((a) => a.id === selectedAyah.id);
    if (index >= 0) {
      flatListRef.current?.scrollToIndex({ index, animated: true, viewPosition: 0 });
    }
  }, [selectedAyah, surah.number, ayahs]);

  const renderItem = useCallback(({ item, index }: { item: Ayah; index: number }) => (
    <TouchableOpacity
      style={Styles.verse}
      onPress={() => handleAyahPress(item)}
      activeOpacity={0.7}
    >
      <Text style={Styles.arabicText}>{item.ayahText}
        <Text style={Styles.arabicNumberIndex}>{(index + 1).toLocaleString('ar-EG')}</Text>
      </Text>
      <Text style={Styles.transliteration}>{item.ReadText}</Text>
      <Text style={Styles.translation}>{item.indoText}</Text>
    </TouchableOpacity>
  ), [handleAyahPress]);

  const keyExtractor = useCallback((item: Ayah) => String(item.id), []);

  return (
    <SafeAreaView style={Styles.content}>
      <FlatList
        ref={flatListRef}
        data={ayahs}
        renderItem={renderItem}
        ListHeaderComponent={<Bismi surahId={surah.number} />}
        keyExtractor={keyExtractor}
        showsVerticalScrollIndicator={false}
        initialNumToRender={8}
        maxToRenderPerBatch={10}
        windowSize={5}
        onScrollToIndexFailed={(info) => {
          flatListRef.current?.scrollToOffset({
            offset: info.averageItemLength * info.index,
            animated: false,
          });
          setTimeout(() => {
            flatListRef.current?.scrollToIndex({
              index: info.index,
              animated: true,
              viewPosition: 0,
            });
          }, 200);
        }}
      />

      <BottomSheet
        ref={bottomSheetRef}
        index={-1}
        snapPoints={['30%']}
        enablePanDownToClose
        enableDynamicSizing={false}
      >
        <BottomSheetView style={sheetStyles.container}>
          {selectedAyah && (
            <Text style={sheetStyles.verseLabel}>
              {surah.name}: Ayat {selectedAyah.verseID}
            </Text>
          )}
          <TouchableOpacity onPress={handleMarkLastRead} style={sheetStyles.action}>
            <Text style={sheetStyles.actionText}>Tandai Terakhir Baca</Text>
          </TouchableOpacity>
        </BottomSheetView>
      </BottomSheet>
    </SafeAreaView>
  );
};

const sheetStyles = StyleSheet.create({
  container: {
    paddingHorizontal: 24,
    paddingTop: 8,
    paddingBottom: 32,
  },
  verseLabel: {
    fontSize: 13,
    color: '#999',
    marginBottom: 16,
  },
  action: {
    paddingVertical: 14,
  },
  actionText: {
    fontSize: 16,
    color: '#00A884',
    fontWeight: '500',
  },
});

export default QuranDetailSurah;
