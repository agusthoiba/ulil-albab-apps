import React, {Component, useCallback, useEffect, useState, createContext, useContext} from 'react';
import {Alert, Text, View, Image, FlatList, Button} from 'react-native';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';

import { logger } from "react-native-logs";
const log = logger.createLogger();

import Styles from '../Style';
import { QuranDetailSurahScreenProps } from '../navigation/type';
import { getQuranAyat } from '../db-service';
import { Ayat } from '../models/Quran';
/*import { SurahResp } from '../models/Quran';
interface SurahP {
  surah: SurahResp
}*/

const QuranDetailSurah = ({surah}) => {
  log.info('aku d component detail surah')
  // log.info('aku routes params', route.params)

  // const { surahId } = route.params;
  const [items, setItems] = useState<Ayat[]>([]);
  
  const loadDataCallback = useCallback(async () => {
      log.debug('items initiate --', items)
     
      log.info('after connect db in component')
      log.info('surah ', surah)
      const storedTodoItems = await getQuranAyat(surah.number);
        setItems(storedTodoItems);
        log.debug('items after set --', items)
  }, []);

  useEffect(() => {
    loadDataCallback();
  }, [loadDataCallback]);

  return (
      <View>
        
        <View>
          <View style={Styles.bismillah}>
            <Text style={Styles.arabicText}>بِسْمِ اللَّهِ الرَّحْمَٰنِ الرَّحِيمِ</Text>
          </View>
          <FlatList

            data={items}
            renderItem={
              ({item}) =>
                <View style={Styles.verse}>
                  <View style={Styles.numberCircle}>
                    <Text>{item.Ayat}</Text>
                  </View>
                    <Text style={Styles.arabicText}>{item.Arab}</Text>
                    <Text style={Styles.translation}>{item.Terjemahan}</Text>
                </View>
            }
          />
        </View>

      </View> 
    )
}

export default QuranDetailSurah;
