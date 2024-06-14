import {NavigationContainer, NavigatorScreenParams, RouteProp} from '@react-navigation/native';
import type { NativeStackScreenProps } from "@react-navigation/native-stack";
import type { BottomTabScreenProps } from "@react-navigation/bottom-tabs";
import type { MaterialTopTabScreenProps } from '@react-navigation/material-top-tabs';
import type { CompositeScreenProps } from '@react-navigation/native';
import type { StackScreenProps } from '@react-navigation/stack';

export type RootStackParamList = {
  Home: undefined;
  QuranList:  undefined;
  QuranDetail:  {surahId: string}
};

export type HomeScreenProps = NativeStackScreenProps<RootStackParamList,"Home">;

export type BottomTabParamList = {
  Home: undefined;
  Quran: undefined;
  Sholat: undefined;
  Profile: undefined;
};

export type QuranTabParamList = {
  QuranListSurah: undefined;
  QuranListJuz: undefined;
  QuranDetail: { surahId: string }
};

export type QuranListSurahTabProps = CompositeScreenProps<
  MaterialTopTabScreenProps<QuranTabParamList, "QuranListSurah">,
  StackScreenProps<RootStackParamList, "QuranDetail">
>;

export type QuranListJuzTabProps = MaterialTopTabScreenProps<QuranTabParamList, "QuranListJuz">;

export type QuranDetailSurahScreenProps = NativeStackScreenProps<RootStackParamList, "QuranDetail">;
