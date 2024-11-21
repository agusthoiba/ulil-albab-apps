import React, {Component, useCallback, useEffect, useState } from 'react';
import {Alert, Text, View, Image, FlatList, Button, TouchableOpacity, TouchableHighlight} from 'react-native';

import { logger } from "react-native-logs";

const log = logger.createLogger();

import Styles from '../Style';
import { QuranListSurahTabProps } from '../navigation/type';
import { getQuranSurah } from '../db-service';
import { Surah } from '../models/Quran';

import SurahRest from '../rest/Surah.rest';

type ItemProps = {
  item: Surah;
  onPress: () => void;
  backgroundColor: string;
  textColor: string;
};


const Item = ({item, onPress, backgroundColor, textColor}: ItemProps) => (
  <TouchableOpacity onPress={onPress}>
    <Text>{item.Ayat}</Text>
  </TouchableOpacity>
);

const QuranListSurah = ({route, navigation}: QuranListSurahTabProps) => {

  const [items, setItems] = useState<Surah[]>([]);
  const [selectedId, setSelectedId] = useState<string>();
  
  /*const loadDataCallback = useCallback(async () => {
      log.debug('items initiate --', items)
     
      log.info('after connect db in component')
      const storedTodoItems = await getQuranSurah();

        setItems(storedTodoItems);

        log.debug('items after set --', items)
  }, []);
  useEffect(() => {
    loadDataCallback();
  }, [loadDataCallback]);*/

  const getSurah = async () => {
    const surahRest = new SurahRest();

    const dataSurah = await surahRest.get();
    console.log('dataSurahMock', dataSurah)
    let surahs: Surah[] = [];

    for (let sur of dataSurah) {
      let suro: Surah =  {
        Surah: (sur.id).toString(),
        Ayat: sur.title,
        Terjemahan: sur.body,
        Jumlah_Ayat: '100',
        Ayat_Arab: sur.title
      }
      surahs.push(suro)
    }
    setItems(surahs);
  };


  useEffect(() => {
    getSurah();
  }, []);

  return (
      <View style={Styles.dashboardContainer}>
        
        <View style={Styles.wrapper}>
          <FlatList
            data={items}
            renderItem={
              ({item, index, separators}) => 
               
              <TouchableOpacity onPress={() => 
                 //Alert.alert(item.Surah)
                navigation.navigate('QuranDetail', {
                  surahId: item.Surah
                })
              }>
                  <View style={Styles.itemQuranListDetail}>
                    <View style={Styles.itemQuranListDetailNumber}>
                      <Text>{item.Surah}</Text>
                    </View>

                    <View style={Styles.itemQuranListDetailCaption}>
                      <Text style={Styles.itemQuranListDetailCaptionName}>
                        {item.Ayat} {item.Ayat_Arab}
                      </Text>
                      <Text style={Styles.itemQuranListDetailCaptionAttr}>
                        Mekah - {item.Terjemahan} - {String(item.Jumlah_Ayat)} ayat
                      </Text>
                    </View>
                    
                  </View>
              </TouchableOpacity>
            }
            keyExtractor={item => item.Surah}
            extraData={selectedId}
          />
        </View>
      </View> 
    )
}

export default QuranListSurah;
