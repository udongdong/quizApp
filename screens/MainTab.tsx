import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import React from 'react';
import {MainTabParamList} from './screenTypes';
import QuizMain from './quiz/QuizMain';
import ReviewMain from './review/ReviewMain';
import {color} from '../styles';

export default function MainTab(): React.JSX.Element {
  const Tab = createBottomTabNavigator<MainTabParamList>();

  return (
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
      <Tab.Screen
        name="quiz"
        component={QuizMain}
        options={{tabBarLabel: '퀴즈', title: '퀴즈 풀기'}}
      />
      <Tab.Screen
        name="review"
        component={ReviewMain}
        options={{tabBarLabel: '리뷰', title: '퀴즈 리뷰'}}
      />
    </Tab.Navigator>
  );
}
