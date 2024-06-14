import React, {Component} from 'react';
import {Alert, Text, View, Image, TouchableOpacity, Button} from 'react-native';
import Styles from '../Style';

import { HomeScreenProps } from '../navigation/type';
  
const Dashboard = ({route, navigation}: HomeScreenProps) => {

  const _onPressButton = () => {
    Alert.alert('Im home');
  }
  
  return (
    <View style={Styles.container}>
      <View style={Styles.dashboardContainer}>
        <View style={Styles.dashboardLogo}>
         <Image 
          source={require('../../assets/logo.jpg')} 
         />
        </View> 
        
        <View style={Styles.dashboardTop}>
          <TouchableOpacity onPress={_onPressButton}>
            <View>
              <Image source={require('../../assets/quran-top-icon.jpg')} />
            </View>

            <View style={Styles.dashboardTopText}>
              <Text style={Styles.textTitle}>
                Waktu Sholat
              </Text>
              <Text style={Styles.textSubTitle}>
                subuh
              </Text>
              <Text style={Styles.textBold}>
                04.47
              </Text>
            </View>
          </TouchableOpacity>
        </View>

        <View style={Styles.wrapperNoBack}>
          <View style={Styles.item}>
            <Image 
              source={require('../../assets/kabah-icon.png')} 
            />
            <Text style={Styles.textSubTitle}>
              Panduan Haji & Umrah
            </Text>
          </View>

          <View style={Styles.item}>
            <TouchableOpacity onPress={() => navigation.navigate('QuranList')}>
              <Image source={require('../../assets/quran-book-icon.png')} />
                
              <Text style={Styles.textSubTitle}>
                Al Qur'an & Terjemahan
              </Text>
            </TouchableOpacity>
          </View>

        </View>

        <View style={Styles.wrapperBanner}>
          <Image 
            source={require('../../assets/banner.png')} 
          />
        </View>
      </View>
    </View>
  );
}

export default Dashboard;
