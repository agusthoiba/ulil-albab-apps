import React, {Component, useCallback, useEffect, useState} from 'react';
import {Alert, Text, View, Image, FlatList, Button} from 'react-native';

import { logger } from "react-native-logs";

const log = logger.createLogger();

import Styles from '../Style';
import { QuranDetailSurahScreenProps } from '../navigation/type';
import { getQuranAyat } from '../db-service';
import { Ayat } from '../models/Quran';

const QuranDetailSurah = ({route, navigation }: QuranDetailSurahScreenProps) => {
  log.info('aku d component detail surah')

  log.info('aku routes params', route.params)
  const { surahId } = route.params;
  
  const [items, setItems] = useState<Ayat[]>([]);
  
  const loadDataCallback = useCallback(async () => {
      log.debug('items initiate --', items)
     
      log.info('after connect db in component')
      log.info('surah no:', surahId)
      const storedTodoItems = await getQuranAyat(surahId);
        setItems(storedTodoItems);
        log.debug('items after set --', items)
  }, []);

  useEffect(() => {
    loadDataCallback();
  }, [loadDataCallback]);

  return (
    
      <View style={Styles.dashboardContainer}>
        
        <View style={Styles.wrapper}>
          <FlatList
            data={items}
            renderItem={
              ({item}) => 
                
                  <View style={Styles.itemQuranDetailList}>
                    <View style={Styles.itemQuranListDetailNumber}>
                      <Text>{item.Ayat}</Text>
                    </View>
                    <View style={Styles.itemQuranDetailListText}>
                      <Text style={Styles.itemQuranDetailListAyatArab} >
                          {item.Arab}
                      </Text>
                      <Text style={Styles.itemQuranDetailListAyatTerjemahan}>
                        {item.Terjemahan}
                      </Text>
                    </View>
                    </View>
                
               }
          />
        </View>
      </View> 
    )
}

export default QuranDetailSurah;
