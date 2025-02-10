import React from 'react';
import {Alert, Text, View, Image, TouchableOpacity} from 'react-native';
import Styles from '../Style';

import { HomeScreenProps } from '../navigation/type';
  
const Dashboard = ({route, navigation}: HomeScreenProps) => {

  const _onPressButton = () => {
    Alert.alert('Im home');
  }
  
  return (
    <View style={Styles.container}>
      <View style={Styles.header}>
        <View style={Styles.logo}>
         <Image 
          source={require('../../assets/logo.jpg')} 
         />
        </View> 
      </View>

      <View style={Styles.featuresGrid}>
          <View style={Styles.featureItem}>
            <Image 
              source={require('../../assets/kabah-icon.png')} 
            />
            <Text style={Styles.featureTitle}>
              Panduan Haji & Umrah
            </Text>
          </View>

          <View style={Styles.featureItem}>
            <TouchableOpacity onPress={() => navigation.navigate('QuranList')}>
              <Image source={require('../../assets/quran-book-icon.png')}/>
                
              <Text style={Styles.featureTitle}>
                Al Qur'an & Terjemahan
              </Text>
            </TouchableOpacity>
          </View>

        </View>

        <View style={Styles.bannerContainer}>
          <Image 
            source={require('../../assets/banner.png')} 
          />
        </View>
    </View>
  );
}

export default Dashboard;
