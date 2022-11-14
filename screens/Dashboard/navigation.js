/* eslint-disable prettier/prettier */
import * as React from 'react';
import { View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import { Image } from 'react-native';
import { COLORS, icons } from '../../constants';
import Notification from './notification';
import Home from './home';
import Organize from './organize';
import Profile from './profile';
import Setting from './setting';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
const Tab = createMaterialBottomTabNavigator();

const MyTabs = () => {
    return (
        <Tab.Navigator
            initialRouteName="Feed"

            screenOptions={{
                tabBarActiveTintColor: '#e91e63',
                headerShown: false,
                tabBarStyle: {
                    // position: "absolute",
                    justifyContent: 'center',
                    alignItems: 'center',
                    elevation: 10,
                    backgroundColor: 'yellow',
                    height: 60,
                },

            }}
        >
            <Tab.Screen
                name="Home"
                component={Home}
                options={{
                    tabBarLabel: 'Home',
                    tabBarIcon: ({ color, size }) => (
                        <MaterialCommunityIcons name="home" color={color} size={23} />
                    ),
                }}
            />
            <Tab.Screen
                name="Organize"
                component={Organize}
                options={{
                    tabBarLabel: 'Updates',
                    tabBarIcon: ({ color, size }) => (
                        <MaterialCommunityIcons name="bell" color={color} size={23} />
                    ),
                }}
            />
            <Tab.Screen
                name="Profile"
                component={Profile}
                options={{
                    tabBarLabel: 'Profile',
                    tabBarIcon: ({ color, size }) => (
                        <MaterialCommunityIcons name="account" color={color} size={23} />
                    ),
                }}
            />
        </Tab.Navigator>
    );
};

export default function App() {
    return (
        <NavigationContainer>
            <MyTabs />
        </NavigationContainer>
    );
}
