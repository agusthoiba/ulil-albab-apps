import React, {Component} from 'react';
import { Text, View, Image, FlatList, TouchableOpacity} from 'react-native';
import { QuranListSurahTabProps } from '../navigation/type';
import Styles from '../Style';
import { DATA_JUZ } from '../data/Quran';

const QuranListJuz = ({route, navigation}: QuranListSurahTabProps) => {
  return (
    
      <View style={Styles.container}>
        {/* Header */}
        <View style={Styles.header}>
          <Text style={Styles.headerTitle}>Al-Quran</Text>
            <View style={Styles.headerIcons}>
              <Text style={Styles.headerIcon}>🔖</Text>
              <Text style={Styles.headerIcon}>⚙️</Text>
              <TouchableOpacity style={Styles.searchButton}>
                <Text style={Styles.searchButtonText}>🔍 Cari</Text>
              </TouchableOpacity>
            </View>
        </View>

        <View>
        <FlatList
          data={DATA_JUZ}
          renderItem={
            ({item}) =>
              <TouchableOpacity onPress={() => 
                navigation.navigate('QuranDetail', {
                  surahId: '1'
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
