import React, { useState, useRef, useEffect} from 'react';
import { View,  Text, ScrollView,  Dimensions, Pressable, TouchableOpacity, FlatList, Alert } from 'react-native';
// import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
// import { FlatList } from 'react-native-gesture-handler';

import { QuranDetailJuzScreenProps } from '../navigation/type';
import Styles from '../Style';
import { JuzScreen } from './QuranDetailJuzScreen';
import { Juz }  from '../models/Quran';
import { DATA_JUZ } from '../data/Quran';

//const QuranDetailJuzTab = createMaterialTopTabNavigator();

const { width } = Dimensions.get('window');
const ITEM_WIDTH = width / 3;
//const ITEM_WIDTH = 110;
const ITEM_HEIGHT = 40;
const ITEM_SPACING = 10;

type ItemProps = {
  item: Juz,
  index: number
}

const getNavItemLayout = (data, index) => {
  //const widthItem = 110
  const result = { 
    length: ITEM_WIDTH,
    offset: ITEM_WIDTH * index,
    index 
  }
  //console.log("getNavItemLayout", result)

  return result
};

export const QuranTabJuzDetail = (props: QuranDetailJuzScreenProps) => {
  const flatListRef = useRef(null);
  let juzIdSelected = Number(props.route.params.juzId);
  const [currentIndex, setCurrentIndex] = useState(juzIdSelected - 1);
  const [currentPosition, setCurrentPosition] = useState(0);
  
  const scrollToIndex = (index: number) => {
    console.log("scroll index", String(index))
    if (flatListRef.current) {
      flatListRef.current.scrollToIndex({
        index,
        animated: true,
        viewPosition: 0.5, // 0 is at the top, 0.5 is centered, 1 is at the bottom
      })
      setCurrentIndex(index);
    }
  }

  const refComponent = ({item, index}: ItemProps) => {
    return (
      <TouchableOpacity 
        style={[
          Styles.tabItem, 
          { width: ITEM_WIDTH },
          currentIndex == item.id - 1 ? Styles.tabActiveIndicator : null,
        ]}
        onPress={() => scrollToIndex(index)}
      >
        <View style={Styles.tabItemInside}>
          <Text style={[
              Styles.tabLabel, 
              currentIndex == item.id - 1 ? Styles.tabLabelActiveIndicator : null
            ]}>
            JUZ {item?.id}
          </Text>
        </View>
      </TouchableOpacity> 
    );
  };

  // Attempt to scroll when component is ready
  useEffect(() => {
    setTimeout(() => {
      if (currentIndex > 0 && currentIndex < 29) {
        setCurrentPosition(0.5);
      } else if (currentIndex == 0) {
        setCurrentPosition(0);
      }

      flatListRef.current?.scrollToIndex({ 
        index: currentIndex, 
        animated: false,
        viewPosition: currentPosition, // 0 is at the top, 0.5 is centered, 1 is at the bottom 
      });
      //setCurrentIndex(currentIndex);
    }, 0); // delay to ensure layout is done

  }, []);

  return (
      <View style={Styles.tabBar} >
        <FlatList
          ref={flatListRef}
          data={DATA_JUZ}
          getItemLayout={getNavItemLayout}
          renderItem={refComponent}
          keyExtractor={item => String(item.id)}
          horizontal={true}
          showsHorizontalScrollIndicator={false}
          inverted={true}
          //snapToInterval={ITEM_WIDTH + ITEM_SPACING}
          snapToAlignment="center"
          decelerationRate="fast"
            />
      </View>
  )
}
