import {NavigationContainer, NavigatorScreenParams, RouteProp} from '@react-navigation/native';
import {NativeStackScreenProps, createNativeStackNavigator} from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { Text, View } from 'react-native';

import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import { faHome } from '@fortawesome/free-solid-svg-icons/faHome';
import { faBookReader } from '@fortawesome/free-solid-svg-icons/faBookReader';
import { faPray } from '@fortawesome/free-solid-svg-icons/faPray';
import { faUserCircle } from '@fortawesome/free-solid-svg-icons/faUserCircle';

import { RootStackParamList, BottomTabParamList, QuranTabParamList, QuranDetailParamList } from './type'
import Dashboard from '../components/Dashboard'
import QuranListSurah from '../components/QuranListSurah';
import QuranListJuz from '../components/QuranListJuz';
import QuranDetailSurah from '../components/QuranDetailSurah';

const Stack = createNativeStackNavigator<RootStackParamList>();
const QuranTab = createMaterialTopTabNavigator<QuranTabParamList>();
const QuranDetailTab = createMaterialTopTabNavigator<QuranDetailParamList>();
const BottomTab = createBottomTabNavigator<BottomTabParamList>();


const QuranList = () => {
  return (
    <QuranTab.Navigator 
      initialRouteName="QuranListSurah"
      screenOptions={{ 
        tabBarActiveTintColor: '#1fb89d',
        tabBarInactiveTintColor: '#8D8D8D',
        tabBarLabelStyle: { fontSize: 12 },
        tabBarIndicatorStyle: {
          backgroundColor: '#1fb89d',
      },
      }}>
      <QuranTab.Screen name="QuranListSurah" component={QuranListSurah}  options={{ tabBarLabel: 'Surah' }} />
      <QuranTab.Screen name="QuranListJuz" component={QuranListJuz} options={{ tabBarLabel: 'Juz' }} />
    </QuranTab.Navigator>
  )
}

const Home = () => {
  return (
    <BottomTab.Navigator>
      <BottomTab.Screen name="Dashboard" component={Dashboard}  options={{ 
        tabBarLabel: 'Home',
        tabBarIcon: ({ color, size }) => (
          <FontAwesomeIcon icon={faHome} color={color} size={size} />
        ),
        tabBarActiveTintColor: '#1fb89d' 
      }} />
      <BottomTab.Screen name="Quran" component={QuranList}  options={{ 
        tabBarLabel: 'Quran',
        tabBarIcon: ({ color, size }) => (
          <FontAwesomeIcon icon={faBookReader} color={color} size={size} />
        ), 
        tabBarActiveTintColor: '#1fb89d'
      }} />

      <BottomTab.Screen name="Sholat" component={QuranList}  options={{ 
        tabBarLabel: 'Sholat',
        tabBarIcon: ({ color, size }) => (
          <FontAwesomeIcon icon={faPray} color={color} size={size} />
        ), 
        tabBarActiveTintColor: '#1fb89d' 
      }} />

      <BottomTab.Screen name="Profile" component={QuranList}  options={{ 
        tabBarLabel: 'Profile',
        tabBarIcon: ({ color, size }) => (
          <FontAwesomeIcon icon={faUserCircle} color={color} size={size} />
        ), 
        tabBarActiveTintColor: '#1fb89d' 
      }} />
    </BottomTab.Navigator>
  )
}

      
      // <QuranDetailTab.Screen name="QuranListJuz" component={QuranListJuz} options={{ tabBarLabel: 'Juz' }} />
const QuranDetail = () => {
  return (
    <QuranDetailTab.Navigator initialRouteName="QuranDetailSurah">
      <QuranDetailTab.Screen name="QuranDetailSurah" component={QuranDetailSurah}  options={{ tabBarLabel: 'Surah' }} />
    </QuranDetailTab.Navigator>
  )
}

const Navigation = () => {
    return (
        <NavigationContainer>
          <Stack.Navigator>
            <Stack.Screen name="Home" component={Home} options={{headerShown: false}}/>
            <Stack.Screen name="QuranList" component={QuranList} options={{title: 'Quran', headerShown: false}}/>
            <Stack.Screen name="QuranDetail" component={QuranDetail} options={{title: 'Quran Detail', headerShown: false}}/>
          </Stack.Navigator>
        </NavigationContainer>
    );
}

export default Navigation;
