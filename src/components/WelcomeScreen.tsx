import React, { useState } from 'react';
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  StyleSheet,
  ActivityIndicator,
  Alert,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useNavigation } from '@react-navigation/native';
import type { StackNavigationProp } from '@react-navigation/stack';
import auth from '@react-native-firebase/auth';

import { RootStackParamList } from '../navigation/type';
import { AGREED_TERMS_KEY } from '../config';

type WelcomeNavProp = StackNavigationProp<RootStackParamList, 'Welcome'>;

export default function WelcomeScreen() {
  const navigation = useNavigation<WelcomeNavProp>();
  const [loading, setLoading] = useState(false);

  const handleAgree = async () => {
    setLoading(true);
    try {
      await AsyncStorage.setItem(AGREED_TERMS_KEY, 'true');
      try {
        // one time first app launch, sign in anonymously to firebase to get uid
        const credential = await auth().signInAnonymously();

      } catch (e: any) {
        console.warn('Firebase anon sign-in skipped:', e?.code);
      }
      navigation.replace('Home');
    } catch (error) {
      console.error('Error on agree:', error);
      Alert.alert('Terjadi kesalahan', 'Silakan coba lagi.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.content}>
        <Text style={styles.greeting}>Selamat Datang</Text>

        <Image
          source={require('../../assets/images/logo_ulil_albab_sq_bg.png')}
          style={styles.icon}
          resizeMode="contain"
        />

        <Text style={styles.appName}>Ulil Albab: Quran</Text>
      </View>

      <View style={styles.footer}>
        <Text style={styles.privacyText}>
          Dengan melanjutkan, Anda menyetujui{' '}
          <Text
            style={styles.privacyLink}
            onPress={() => navigation.navigate('KebijakanPrivasi')}
          >
            Kebijakan Privasi
          </Text>{' '}
          kami.
        </Text>

        <TouchableOpacity
          style={[styles.button, loading && styles.buttonDisabled]}
          onPress={handleAgree}
          disabled={loading}
        >
          {loading ? (
            <ActivityIndicator color="#fff" />
          ) : (
            <Text style={styles.buttonText}>Setuju &amp; Lanjut</Text>
          )}
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    justifyContent: 'space-between',
  },
  content: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 32,
  },
  greeting: {
    fontSize: 28,
    fontFamily: 'Roboto-Bold',
    color: '#00A884',
    marginBottom: 32,
  },
  icon: {
    width: 140,
    height: 140,
    borderRadius: 24,
  },
  appName: {
    fontSize: 20,
    fontFamily: 'Roboto-Medium',
    color: '#333',
    marginTop: 16,
  },
  footer: {
    paddingHorizontal: 32,
    paddingBottom: 40,
    alignItems: 'center',
  },
  privacyText: {
    fontSize: 13,
    color: '#666',
    textAlign: 'center',
    marginBottom: 20,
    lineHeight: 20,
    fontFamily: 'Roboto-Regular',
  },
  privacyLink: {
    color: '#00A884',
    textDecorationLine: 'underline',
  },
  button: {
    backgroundColor: '#00A884',
    paddingVertical: 14,
    paddingHorizontal: 48,
    borderRadius: 8,
    width: '100%',
    alignItems: 'center',
  },
  buttonDisabled: {
    opacity: 0.6,
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontFamily: 'Roboto-Medium',
  },
});
