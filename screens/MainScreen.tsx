import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React from 'react';
import {MainStackParamList} from './screenTypes';
import {NavigationContainer} from '@react-navigation/native';
import MainTab from './MainTab';
import QuizScreen from './quiz/QuizScreen';
import {QuizResultScreen} from './quiz/QuizResultScreen';
import ReviewDetail from './review/ReviewDetail';

export default function MainScreen(): React.JSX.Element {
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
