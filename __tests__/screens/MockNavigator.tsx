import 'react-native';
import React, {ReactNode} from 'react';

import {QueryClient, QueryClientProvider} from '@tanstack/react-query';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {MainStackParamList, MainTabParamList} from 'screens/screenTypes';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {color} from '../../src/styles';

export function MockStackNavigator(props: {children: ReactNode}) {
  const MainStack = createNativeStackNavigator<MainStackParamList>();

  return (
    <QueryClientProvider client={new QueryClient()}>
      <NavigationContainer>
        <MainStack.Navigator screenOptions={{headerShown: false}}>
          {props.children}
        </MainStack.Navigator>
      </NavigationContainer>
    </QueryClientProvider>
  );
}

export function MockTabNavigator(props: {children: ReactNode}) {
  const Tab = createBottomTabNavigator<MainTabParamList>();

  return (
    <MockStackNavigator>
      <Tab.Navigator
        screenOptions={{
          tabBarLabelPosition: 'beside-icon',
          tabBarLabelStyle: {
            fontWeight: '700',
            fontSize: 15,
          },
          tabBarIconStyle: {display: 'none'},
          tabBarStyle: {height: 60},
          tabBarActiveTintColor: color.primary,
          headerTitleStyle: {
            color: color.primary,
          },
        }}>
        {props.children}
      </Tab.Navigator>
    </MockStackNavigator>
  );
}
