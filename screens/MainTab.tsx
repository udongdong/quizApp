import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import React from 'react';
import {MainTabParamList} from './screenTypes';
import QuizMain from './quiz/QuizMain';

export default function MainTab(): React.JSX.Element {
  const Tab = createBottomTabNavigator<MainTabParamList>();

  return (
    <Tab.Navigator>
      <Tab.Screen name="quiz" component={QuizMain} />
    </Tab.Navigator>
  );
}
