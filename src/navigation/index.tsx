import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';

import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import { faHome } from '@fortawesome/free-solid-svg-icons/faHome';
import { faBookReader } from '@fortawesome/free-solid-svg-icons/faBookReader';
import { faPray } from '@fortawesome/free-solid-svg-icons/faPray';
import { faUserCircle } from '@fortawesome/free-solid-svg-icons/faUserCircle';

import { RootStackParamList, BottomTabParamList, QuranTabParamList } from './type'
// import Dashboard from '../components/Dashboard'
import Counter from '../components/Counter';
import QuranListSurah from '../components/QuranListSurah';
import QuranListJuz from '../components/QuranListJuz';
import QuranDetailSurah from '../components/QuranDetailSurah';

import { createStackNavigator } from '@react-navigation/stack';
import Dashboard from '../components/Dashboard';

const RootStack = createStackNavigator<RootStackParamList>();

const QuranTab = createMaterialTopTabNavigator<QuranTabParamList>();
const BottomTab = createBottomTabNavigator<BottomTabParamList>();


const Home = () => {
  return (
    <BottomTab.Navigator>
      <BottomTab.Screen name="Home" component={Dashboard}  options={{ 
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
      <QuranTab.Screen name="QuranListSurah" component={QuranListSurah}  options={{ tabBarLabel: 'Surah', title: 'Quran Surah' }} />
      <QuranTab.Screen name="QuranListJuz" component={QuranListJuz} options={{ tabBarLabel: 'Juz' }} />
    </QuranTab.Navigator>
  )
}

const Navigation = () => {
    return (
        <NavigationContainer>
          <RootStack.Navigator>
            <RootStack.Screen name="Home" component={Home} options={{headerShown: false}}/>
            <RootStack.Screen name="QuranList" component={QuranList} options={{title: 'Quran', headerTitle: 'Quran'}}/>
            <RootStack.Screen name="QuranDetail" component={QuranDetailSurah} options={{title: 'Nama Surat'}} />
          </RootStack.Navigator>
        </NavigationContainer>
    );
}

export default Navigation;
