import React, {Component, useCallback, useEffect, useState } from 'react';
import {Alert, Text, View, Image, FlatList, Button, TouchableOpacity, TouchableHighlight} from 'react-native';
import {StackNavigationProp} from '@react-navigation/stack';

import {useNavigation} from '@react-navigation/native';

import { logger } from "react-native-logs";

const log = logger.createLogger();

import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import { faEllipsisVertical } from '@fortawesome/free-solid-svg-icons/faEllipsisVertical';
// import { icon } from '@fortawesome/fontawesome-svg-core/import.macro'

import Styles from '../Style';
import { RootStackParamList } from '../navigation/type';

// type quranProps = StackNavigationProp<RootStackParamList, 'QuranList', 'Navigation'>;

import { getQuranSurah } from '../db-service';
import { Surah } from '../models/Quran';
import { Screen } from 'react-native-screens';

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


type quranListProps = StackNavigationProp<RootStackParamList, 'QuranDetail', 'Navigation'>;
  




const QuranListSurah = () => {
  const navigation = useNavigation<quranListProps>();
  
  const [items, setItems] = useState<Surah[]>([]);

  const [selectedId, setSelectedId] = useState<string>();
  
  const loadDataCallback = useCallback(async () => {
    // try {
      log.debug('items initiate --', items)
     
      log.info('after connect db in component')
      const storedTodoItems = await getQuranSurah();

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
              ({item, index, separators}) => 
               
              
              <TouchableOpacity onPress={() => 
                 //Alert.alert(item.Surah)
                navigation.navigate('QuranDetail', {
                  screen: 'QuranDetailSurah'
                })
              }
              >
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
