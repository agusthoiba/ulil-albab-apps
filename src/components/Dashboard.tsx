import React from 'react';
import {ScrollView, Text, View, Image, TouchableOpacity} from 'react-native';
import Styles from '../Style';

import { HomeScreenProps } from '../navigation/type';

const features = [
  { id: 1, title: 'Al-Quran', icon: '📖', route: 'QuranList' },
  { id: 2, title: 'Tafsir', icon: '🤲', route: 'QuranList' },
  { id: 3, title: 'Azbabun Nuzul', icon: '🕐', route: 'QuranList' },
  { id: 4, title: 'Sains Quran', icon: '🕌', route: 'QuranList' }
]

const Dashboard = ({route, navigation}: HomeScreenProps) => {

  return (
    <View style={Styles.container}>
      <ScrollView>
        <View style={Styles.header}>
            <Image 
              source={require('../../assets/logo_ulil_albab-photoroom.png')}
              style={Styles.logo} 
              resizeMode="contain"
            />
        </View>

        <View>
          <Text style={Styles.headerTitle}>Ulil Albab</Text>
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
