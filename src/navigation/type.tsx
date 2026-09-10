import {NavigationContainer, NavigatorScreenParams, RouteProp} from '@react-navigation/native';
import type { NativeStackScreenProps } from "@react-navigation/native-stack";
import type { BottomTabScreenProps } from "@react-navigation/bottom-tabs";
import type { MaterialTopTabScreenProps } from '@react-navigation/material-top-tabs';
import type { CompositeScreenProps } from '@react-navigation/native';
import type { StackScreenProps } from '@react-navigation/stack';

export type RootStackParamList = {
  Welcome: undefined;
  KebijakanPrivasi: undefined;
  Home: undefined;
  QuranList: undefined;
  QuranDetail: {
    surahId: string | undefined;
    surahName: string | undefined;
    juzId: number | undefined;
    verseId?: number;
  };
  QuranDetailJuz: { juzId: number };
  Setting: undefined;
};

export type DashboardScreenProps = CompositeScreenProps<
  BottomTabScreenProps<BottomTabParamList, "Dashboard">,
  StackScreenProps<RootStackParamList, "Home">
>;

export type QuranTabParamList = {
  QuranListSurah: undefined;
  QuranListJuz: undefined;
  QuranDetail: { surahId: string }
};

export type QuranJuzTabParamList = {
  QuranListSurah: undefined;
  QuranListJuz: undefined;
  QuranDetailJuz: { juzId: number }
};

export type QuranDetailTabParamList = {
  QuranListJuz: undefined;
  QuranDetail: { 
    // surahId: string
    surahName: string
  }
};

export type BottomTabParamList = {
  Dashboard: undefined;
  Quran: undefined;
  Tafsir: undefined;
  Settings: undefined;
};

/*export type QuranBottomTabProps = BottomTabScreenProps<BottomTabParamList, 'Quran'> */

export type QuranListSurahTabProps = CompositeScreenProps<
  MaterialTopTabScreenProps<QuranTabParamList, "QuranListSurah">,
  StackScreenProps<RootStackParamList, "QuranDetail">
>;

export type QuranListJuzTabProps =  CompositeScreenProps<
  MaterialTopTabScreenProps<QuranJuzTabParamList, "QuranListJuz">,
  StackScreenProps<RootStackParamList, "QuranDetail">
>;


export type QuranDetailSurahScreenProps = NativeStackScreenProps<RootStackParamList, "QuranDetail">;

export type QuranDetailJuzScreenProps = NativeStackScreenProps<RootStackParamList, "QuranDetail">;
