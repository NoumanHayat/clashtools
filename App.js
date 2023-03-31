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
import Townhall from './screens/Dashbord/Townhall/Townhall';
import BuilderHall from './screens/Dashbord/BuilderHall/BuilderHall';
import attackStrategies from './screens/Dashbord/attackStrategies/attackStrategies';
import DisplayScreen from './screens/Dashbord/DisplayScreen';
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
          <StatusBar barStyle="dark-content" backgroundColor={COLORS.gray} />
          <Stack.Navigator
            screenOptions={{
              headerShown: false,
            }}
            initialRouteName="Clash Tools">
            <Stack.Screen name="Clash Tools" component={Home} />
            <Stack.Screen name="Town hall Base" component={Townhall} />
            <Stack.Screen name="Builder Hall Base" component={BuilderHall} />
            <Stack.Screen
              name="attack Strategies"
              component={attackStrategies}
            />
            <Stack.Screen name="DisplayScreen" children={DisplayScreen} />
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
