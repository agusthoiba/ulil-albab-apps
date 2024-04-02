import {NavigationContainer, NavigatorScreenParams, RouteProp} from '@react-navigation/native';

export type BottomTabParamList = {
    Dashboard: undefined;
    Quran: undefined;
    Sholat: undefined;
    Profile: undefined;
  };

export type QuranTabParamList = {
  QuranListSurah: undefined;
  QuranListJuz: undefined;
};


export type QuranDetailParamList = {
  QuranDetailSurah: undefined;
};

export type RootStackParamList = {
  Home: NavigatorScreenParams<BottomTabParamList>;
  QuranList: NavigatorScreenParams<QuranTabParamList>;
  QuranDetail: NavigatorScreenParams<QuranDetailParamList>;
};
