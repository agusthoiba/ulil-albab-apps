import React, { useState, useRef, useEffect} from 'react';
import { View,  Text, Dimensions, TouchableOpacity, FlatList } from 'react-native';

import { QuranDetailJuzScreenProps } from '../navigation/type';
import Styles from '../Style';
import { JuzScreen } from './QuranDetailJuzScreen';
import { Juz }  from '../models/Quran';
import { DATA_JUZ } from '../data/Quran';

const { width } = Dimensions.get('window');
const ITEM_WIDTH = width / 3;

type ItemProps = {
  item: Juz,
  index: number
}

const getNavItemLayout = (data, index) => {
  const result = { 
    length: ITEM_WIDTH,
    offset: ITEM_WIDTH * index,
    index 
  }

  return result
};

export const QuranTabJuzDetail = (props: QuranDetailJuzScreenProps) => {
  const flatListRef = useRef(null);
  let juzIdSelected = Number(props.route.params.juzId);

  const { navigation } = props;
  const [currentIndex, setCurrentIndex] = useState(juzIdSelected - 1);
  const [currentPosition, setCurrentPosition] = useState(0);
  const juzDetail: Juz = DATA_JUZ.find((juz) => juz.id === juzIdSelected);
  
  const scrollToIndex = (index: number) => {
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
          onPress={() => {
            scrollToIndex(index);
            navigation.navigate('QuranDetailJuz', {
              juzId: item.id
            });
          }}
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
        viewPosition: currentPosition, // This uses the old value of currentPosition.
      });

    }, 0); // delay to ensure layout is done

  }, []);

  return (
    <View style={Styles.container}>
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
        <JuzScreen juz={juzDetail}></JuzScreen>
    </View> 
  )
}
