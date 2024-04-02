import React, {Component} from 'react';
import {Alert, Text, View, Image, TouchableOpacity, Button} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import Styles from '../Style';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {StackNavigationProp} from '@react-navigation/stack';
// import global from ''

import { RootStackParamList } from '../navigation/type';

type homeProps = StackNavigationProp<RootStackParamList, 'Home', 'Navigation'>;
  
const Dashboard = () => {
  const navigation = useNavigation<homeProps>();
  // const isHermes = () => !!global.HermesInternal;
  // console.log('isHermes', isHermes());


  const _onPressButton = () => {
    Alert.alert('Im home');
  }
  
  /*const _onPressQuranButton = () => {
    navigation.navigate('QuranList');
  }*/

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
            <TouchableOpacity onPress={() => navigation.navigate('QuranList', {
              screen: 'QuranListSurah'
            })}>
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
