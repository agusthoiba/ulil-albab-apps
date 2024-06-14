import React, {Component} from 'react';
import { Text, View, Image, FlatList, Button} from 'react-native';
import Styles from '../Style';

import { DATA_JUZ } from '../data/Quran';

const QuranListJuz = () => {
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
