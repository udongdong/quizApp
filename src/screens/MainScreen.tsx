import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {MainStackParamList} from './screenTypes';
import {MainTab, ReviewDetail, QuizScreen} from './';
import {QuizResultScreen} from './quiz';

export function MainScreen(): React.JSX.Element {
  const MainStack = createNativeStackNavigator<MainStackParamList>();

  return (
    <NavigationContainer>
      <MainStack.Navigator
        initialRouteName="mainTab"
        screenOptions={{headerShown: false}}>
        <MainStack.Screen name="mainTab" component={MainTab} />
        <MainStack.Screen name="quizScreen" component={QuizScreen} />
        <MainStack.Screen
          name="quizResultScreen"
          component={QuizResultScreen}
        />
        <MainStack.Screen name="reviewDetail" component={ReviewDetail} />
      </MainStack.Navigator>
    </NavigationContainer>
  );
}
