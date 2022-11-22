import React, {useEffect, useState} from 'react';
import {
  DeviceEventEmitter,
  LogBox,
  SafeAreaView,
  StatusBar,
  useColorScheme,
  View,
} from 'react-native';
import {COLORS} from './constants';

import SplashScreen from 'react-native-splash-screen';
import AfterLoadSplashScreen from './screens/AfterLoadSplashScreen/AfterLoadSplashScreen';
import {DataProvider} from './screens/hooks';
// import Notification from './screens/Dashbord/notification';
import Home from './screens/Dashbord/home';
import Townhall from './screens/Dashbord/Townhall';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();
const AppStarting = () => {
  useEffect(() => {
    SplashScreen.hide();
  });
  const [getStarted, setGetStarted] = useState(true);

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
        {/* <Notification /> */}
        <NavigationContainer>
          {/* <StatusBar barStyle="dark-content" backgroundColor={COLORS.white} /> */}
          <Stack.Navigator
            // screenOptions={{
            //   headerShown: false,
            // }}
            initialRouteName="Clash Tools">
            <Stack.Screen name="Clash Tools" component={Home} />
            <Stack.Screen name="Town hall Base" component={Townhall} />
          </Stack.Navigator>
        </NavigationContainer> 
      </View>
    </SafeAreaView>
  );
};
export default function App() {
  return (
    <DataProvider>
      <AppStarting />
    </DataProvider>
  );
}
