/* eslint-disable react/jsx-no-undef */
import React, {useEffect, useState} from 'react';
// import {NavigationContainer} from '@react-navigation/native';
// import {createStackNavigator} from '@react-navigation/stack';
// import Tabs from './navigation/tabs';

import {
  DeviceEventEmitter,
  LogBox,
  SafeAreaView,
  StatusBar,
  useColorScheme,
  View,
  Text,
} from 'react-native';
import {InAppChallengeStatusNotification} from './components/InAppChallengeStatusNotification';

// import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import {COLORS, values} from './constants';

import SplashScreen from 'react-native-splash-screen';
import AfterLoadSplashScreen from './screens/AfterLoadSplashScreen/AfterLoadSplashScreen';
import {DataProvider, useData} from './screens/hooks';
import Dashboard from './screens/Dashboard/navigation';
// const Stack = createStackNavigator();

const AppStarting = () => {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  useEffect(() => {
    SplashScreen.hide();   
  });
  const [getStarted, setGetStarted] = useState(false);

  return !getStarted ? (
    <AfterLoadSplashScreen onGetStarted={() => setGetStarted(true)} />
  ) : (
    <SafeAreaView
      style={{
        flex: 1,
        justifyContent: 'center',
        backgroundColor: COLORS.white,
        paddingBottom: 0,
      }}>
      <View style={{flex: 1}}>
        <Dashboard />
      </View>
    </SafeAreaView>
  );
};
// export default App;
export default function App() {
  return (
    <DataProvider>
      <AppStarting />
    </DataProvider>
  );
}
