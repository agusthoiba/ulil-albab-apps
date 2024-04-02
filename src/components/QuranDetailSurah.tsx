import React, {Component, useCallback, useEffect, useState} from 'react';
import {Alert, Text, View, Image, FlatList, Button} from 'react-native';

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

import { getQuranAyat } from '../db-service';
import { Ayat } from '../models/Quran';

const QuranDetailSurah = () => {
  // const navigation = useNavigation<quranProps>();
  
  const [items, setItems] = useState<Ayat[]>([]);
  
  const loadDataCallback = useCallback(async () => {
    // try {
      log.debug('items initiate --', items)
     
      log.info('after connect db in component')
      const storedTodoItems = await getQuranAyat('1');

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
                <View style={Styles.itemQuranListDetail}>
                    <View style={Styles.itemQuranListDetailNumber}>
                      <Text>{item.Ayat}</Text>
                      
                    </View>
                    <View>
                        <Text>{item.Arab}</Text>
                    </View>
                    <View>
                        <Text>{item.Terjemahan}</Text>
                    </View>
                      
                </View>
               }
          />
        </View>
      </View> 
    )
}

export default QuranDetailSurah;
