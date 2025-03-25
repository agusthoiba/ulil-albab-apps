import React from 'react';
import {ScrollView, Text, View, Image, TouchableOpacity, ActivityIndicator} from 'react-native';

import Styles from '../Style';
import { HomeScreenProps } from '../navigation/type';

import { logger } from "react-native-logs";
const log = logger.createLogger();

const features = [
  { id: 1, title: 'Al-Quran', icon: '📖', route: 'QuranList' },
  { id: 2, title: 'Tafsir', icon: '🤲', route: 'QuranList' },
  { id: 3, title: 'Azbabun Nuzul', icon: '🕐', route: 'QuranList' },
  { id: 4, title: 'Sains Quran', icon: '🕌', route: 'QuranList' }
]

/*const SyncSurahData = () => {
  let { error, isFetching  } = useGetSurahQuery();

  if (isFetching) {
    return <ActivityIndicator size="large" style={Styles.loader} />;
  }

  if (error) {
    log.error("error", error)
    return <View><Text>An error occured while load surah</Text></View>
  }
}

const SyncAyahData = () => {
  let { error, isFetching  } = useGetAyahQuery();

  if (isFetching) {
    return <ActivityIndicator size="large" style={Styles.loader} />;
  }

  if (error) {
    log.error("error", error)
    return <View><Text>An error occured while load ayat</Text></View>
  }
}*/

const Dashboard = ({route, navigation}: HomeScreenProps) => {
  log.info('baseUrl: ', process.env.EXPO_PUBLIC_API_URL)
  return (
    <View style={Styles.container}>
      {/*<SyncSurahData />*/}
      {/*<SyncAyahData />*/}

      <ScrollView>
        <View style={Styles.header}>
            <Image 
              source={require('../../assets/logo_ulil_albab-photoroom-80.png')}
              style={Styles.logo} 
            />
            <Text style={Styles.headerTitle}>Ulil Albab</Text>
        </View>

        <View style={Styles.locationContainer}>
          <Text style={Styles.arabicTextCaption}>
            اِنَّ فِيْ خَلْقِ السَّمٰوٰتِ وَالْاَرْضِ وَاخْتِلَافِ الَّيْلِ وَالنَّهَارِ لَاٰيٰتٍ لِّاُولِى الْاَلْبَابِۙ 
          </Text>
          <Text style={Styles.date}>
            Sesungguhnya dalam penciptaan langit dan bumi, dan pergantian malam dan siang terdapat tanda-tanda (kebesaran Allah) bagi orang yang berakal (QS. Ali Imran: 190)
          </Text>
        </View>



        <View style={Styles.featuresGrid}>
          {/* Features Grid */}
          {features.map((feature) => (
            <TouchableOpacity  onPress={() => navigation.navigate('QuranList')} key={feature.id} style={Styles.featureItem}>
              <Text style={Styles.featureIcon}>{feature.icon}</Text>
              <Text style={Styles.featureTitle}>{feature.title}</Text>
            </TouchableOpacity>
          ))}
        </View>

          <View style={Styles.bannerContainer}>
            <Image 
              source={require('../../assets/banner.png')} 
            />
          </View>
      </ScrollView>
    </View>
  );
}

export default Dashboard;
