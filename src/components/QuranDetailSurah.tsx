import React, {Component, useCallback, useEffect, useState, createContext, useContext} from 'react';
import {Alert, Text, View, Image, FlatList, Button} from 'react-native';
import { useDispatch, useSelector } from 'react-redux';



import { logger } from "react-native-logs";
const log = logger.createLogger();

import Styles from '../Style';
import { getAyahAsync, addUser, removeUser } from '../reducer/ayahSlice';

// import { Ayat } from '../../models/Quran';


const QuranDetailSurah = ({surah}) => {
  log.info('aku d component detail surah')
  log.info('surah: ', surah)

  const dispatch = useDispatch();
  const ayahs = useSelector((state) => state.ayah.data);
  const loading = useSelector((state) => state.ayah.loading);
  const error = useSelector((state) => state.ayah.error);

  console.log("ayahs: ", ayahs)

  // const [items, setItems] = useState<Ayat[]>([]);
  
  const items = ayahs.filter((a) => {
    return a.suraId == surah.number
  })
  console.log("items: ", items)
  /*const loadDataCallback = useCallback(async () => {
      log.debug('items initiate --', items)
     
      log.info('after connect db in component')
      log.info('surah ', surah)
      const storedTodoItems = await getQuranAyat(surah.number);
        setItems(storedTodoItems);
        log.debug('items after set --', items)
  }, []);*/

  useEffect(() => {
    dispatch(getAyahAsync(surah.number));
  }, [dispatch]);

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
                    <Text>{item.id}</Text>
                  </View>
                    <Text style={Styles.arabicText}>{item.ayahText}</Text>
                    <Text style={Styles.translation}>{item.indoText}</Text>
                </View>
            }
          />
        </View>

      </View> 
    )
}

export default QuranDetailSurah;
