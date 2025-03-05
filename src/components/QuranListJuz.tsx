import React, {Component} from 'react';
import { Text, View, Image, FlatList, TouchableOpacity} from 'react-native';
import { QuranListJuzTabProps } from '../navigation/type';
import Styles from '../Style';
import { DATA_JUZ } from '../data/Quran';

const QuranListJuz = ({route, navigation}:QuranListJuzTabProps) => {
  return (
    
      <View style={Styles.container}>

        <View>
        <FlatList
          data={DATA_JUZ}
          renderItem={
            ({item}) =>
              <TouchableOpacity onPress={() => 
                navigation.navigate('QuranDetailJuz', {
                  juzId: item.id
                })
              }
              style={Styles.surahItem}> 

                <View style={Styles.numberCircle}>
                  <Text>{item.id}</Text>
                </View>

                <View style={Styles.surahInfo}>
                  <Text style={Styles.surahName}>
                    Juz {item.id}
                  </Text>
                  <Text style={Styles.description}>
                    {item.start}
                  </Text>
                </View>

              </TouchableOpacity>
          }
          keyExtractor={item => String(item.id)}
      />
        </View>
      </View> 
    )
}

export default QuranListJuz;
