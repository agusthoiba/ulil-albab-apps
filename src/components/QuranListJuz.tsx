import React, {Component} from 'react';
import {Alert, Text, View, Image, FlatList, Button} from 'react-native';
import {StackNavigationProp} from '@react-navigation/stack';
import {useNavigation} from '@react-navigation/native';
import Styles from '../Style';
import { RootStackParamList } from '../navigation/type';

// type quranProps = StackNavigationProp<RootStackParamList, 'QuranList', 'Navigation'>;

import { DATA_JUZ } from '../data/Quran';

const QuranListJuz = () => {
  // const navigation = useNavigation<quranProps>();

  return (
    
      <View style={Styles.dashboardContainer}>
        
        <View>
        <FlatList
          data={DATA_JUZ}
          renderItem={
            ({item}) => 
              <View style={Styles.itemQuranListDetail}>

                <View style={Styles.itemQuranListDetailNumber}>
                  <Text>{item.id}</Text>
                </View>

                <View style={Styles.itemQuranListDetailCaption}>
                  <Text style={Styles.itemQuranListDetailCaptionName}>
                    Juz {item.id}
                  </Text>
                  <Text style={Styles.itemQuranListDetailCaptionAttr}>
                    {item.start}
                  </Text>
                </View>

              </View>
          }
          keyExtractor={item => String(item.id)}
      />
        </View>
      </View> 
    )
}

export default QuranListJuz;
