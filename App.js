import React, {useEffect, useState} from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {SafeAreaView, View} from 'react-native';
import {COLORS} from './constants';

import SplashScreen from 'react-native-splash-screen';
import AfterLoadSplashScreen from './screens/AfterLoadSplashScreen/AfterLoadSplashScreen';
import {DataProvider} from './screens/hooks';
import Dashboard from './screens/Dashboard/navigation';
const Stack = createStackNavigator();
const AppStarting = () => {
  useEffect(() => {
    SplashScreen.hide();
  });
  const [getStarted, setGetStarted] = useState(false);

  return <Dashboard />;
  // return !getStarted ? (
  //   <AfterLoadSplashScreen onGetStarted={() => setGetStarted(true)} />
  // ) : (
  //   <SafeAreaView
  //     style={{
  //       flex: 1,
  //       justifyContent: 'center',
  //       backgroundColor: COLORS.white,
  //       paddingBottom: 0,
  //     }}>
  //     <View style={{flex: 1}}>
  //       <Dashboard />
  //     </View>
  //   </SafeAreaView>
  // );
};
export default function App() {
  return (
    <DataProvider>
      <AppStarting />
    </DataProvider>
  );
}
