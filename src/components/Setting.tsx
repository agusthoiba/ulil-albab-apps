import { useAssets } from 'expo-asset';
import React, { useState,  useCallback, useMemo, useRef } from 'react';
import {
  StyleSheet,
  SafeAreaView,
  ScrollView,
  View,
  Text,
  TouchableOpacity
} from 'react-native';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import FeatherIcon from '@expo/vector-icons/Feather';
import BottomSheet, { BottomSheetScrollView, BottomSheetView } from '@gorhom/bottom-sheet';
import { openInbox, openComposer } from 'react-native-email-link';

import styles from '../Style';
import SettingInfo from './SettingInfo';

export default function Setting() {
  const bottomSheetRef = useRef<BottomSheet>(null);

  const [form, setForm] = useState({
    emailNotifications: true,
    pushNotifications: false,
  });

   // callbacks
  const handleSheetChanges = useCallback((index: number) => {
    console.log('handleSheetChanges', index);
  }, []);

    // Snap points for the bottom sheet (percentage of screen height)
  const snapPoints = ['100%'];

  // Callbacks for handling the bottom sheet
  const handleOpenPress = useCallback(() => {
    console.log('handleOpenPress --');
    bottomSheetRef.current?.expand()
  }, [])

  const handleClosePress = useCallback(() => {
    bottomSheetRef.current?.close()
  }, [])

  const handleEmailInbox = useCallback(() => {
    // Open email inbox
    openInbox();

    // Open email composer
    openComposer({
      to: 'admin@ulil-albab.com',
      subject: 'Aplikasi Feedback',
      body: 'Hello, Saya ingin memberikan feedback tentang aplikasi ini.',
    });
  }, []);

  return (
    <GestureHandlerRootView style={styles.bottomSheetContainer}>

        <View style={styles.settingSection}>
          <Text style={styles.settingSectionTitle}>Preferensi</Text>

          <View style={styles.sectionBody}>
            <View style={[styles.rowWrapper, styles.rowFirst]}>
              <TouchableOpacity
                onPress={() => {
                  // handle onPress
                }}
                style={styles.row}>
                <Text style={styles.rowLabel}>Bahasa</Text>
                <View style={styles.rowSpacer} />
                <Text style={styles.rowValue}>Indonesia</Text>
                {/*<FeatherIcon
                  color="#bcbcbc"
                  name="chevron-right"
                  size={19} />*/}
              </TouchableOpacity>
            </View>

            <View style={styles.rowWrapper}>
              <TouchableOpacity
                onPress={() => {
                  // handle onPress
                }}
                style={styles.row}>
                <Text style={styles.rowLabel}>Penerjemah</Text>
                <View style={styles.rowSpacer} />
                <Text style={styles.rowValue}>Indonesia - Kemenag-RI</Text>
                {/*<FeatherIcon
                  color="#bcbcbc"
                  name="chevron-right"
                  size={19} />*/}
              </TouchableOpacity>
            </View>

            <View style={[styles.rowWrapper, styles.rowLast]}>
              <TouchableOpacity
                onPress={() => {
                  // handle onPress
                }}
                style={styles.row}>
                <Text style={styles.rowLabel}>Tema</Text>

                <View style={styles.rowSpacer} />

                <Text style={styles.rowValue}>Terang (Light)</Text>

                <FeatherIcon
                  color="#bcbcbc"
                  name="chevron-right"
                  size={19} />
              </TouchableOpacity>
            </View>
          </View>
        </View>

        <View style={styles.settingSection}>
          <Text style={styles.settingSectionTitle}>Tentang Aplikasi</Text>

          <View style={styles.sectionBody}>
            <View style={[styles.rowWrapper, styles.rowFirst]}>
              <TouchableOpacity
                onPress={handleOpenPress}
                style={styles.row}>
                <View style={styles.rowIcon}> 
                  <FeatherIcon
                    color="#bcbcbc"
                    name="info"
                    size={19} />
                </View>
                <Text style={styles.rowLabel}>Tentang</Text>
                <View style={styles.rowSpacer} />
                <FeatherIcon
                  color="#bcbcbc"
                  name="chevron-right"
                  size={19} />
              </TouchableOpacity>
            </View>

            <View style={styles.rowWrapper}>
              <TouchableOpacity
                onPress={() => {}}
                style={styles.row}>
                <View style={styles.rowIcon}> 
                  <FeatherIcon
                    color="#bcbcbc"
                    name="lock"
                    size={19} />
                </View>
                <Text style={styles.rowLabel}>Kebijakan Privasi</Text>
                <View style={styles.rowSpacer} />
                <FeatherIcon
                  color="#bcbcbc"
                  name="chevron-right"
                  size={19} />
              </TouchableOpacity>
            </View>

            <View style={[styles.rowWrapper, styles.rowLast]}>
              <TouchableOpacity
                onPress={handleEmailInbox}
                style={styles.row}>
                <View style={styles.rowIcon}> 
                  <FeatherIcon
                    color="#bcbcbc"
                    name="mail"
                    size={19} />
                </View>
                <Text style={styles.rowLabel}>Kontak</Text>
                <View style={styles.rowSpacer} />
                <Text style={styles.rowValue}>admin@ulil-albab.com</Text>
              </TouchableOpacity>
            </View>

            {/*<View style={[styles.rowWrapper, styles.rowLast]}>
              <TouchableOpacity
                onPress={() => {}}
                style={styles.row}>
                <Text style={styles.rowLabel}>Syarat dan Ketentuan</Text>

                <View style={styles.rowSpacer} />
                <FeatherIcon
                  color="#bcbcbc"
                  name="chevron-right"
                  size={19} />
              </TouchableOpacity>
            </View>*/}
          </View>
        </View>

        <Text style={styles.settingContentFooter}>App Version 0.1 #0001</Text>
      
        <BottomSheet
              ref={bottomSheetRef}
              onChange={handleSheetChanges}
              // enableDynamicSizing={false}
              enablePanDownToClose={true}
              index={-1} // -1 means closed
              snapPoints={snapPoints}
            >

          <View style={styles.headlineSection}>
            <Text style={styles.headlineTitle}>Informasi Aplikasi</Text>
            <TouchableOpacity style={styles.headlineButtonClose} onPress={handleClosePress}>
               <Text style={styles.headlineButtonCloseText}>✕</Text>
            </TouchableOpacity>
          </View>

            <BottomSheetScrollView contentContainerStyle={styles.bottomSheetcontentContainer}>
              <View style={styles.bottomSheetBody}>
                <SettingInfo />
              </View>
            </BottomSheetScrollView>
              
        </BottomSheet> 
    </GestureHandlerRootView>         
  );  
}
