import 'react-native';
import React from 'react';
import {QuizMain} from '../../src/screens';

import {render, screen} from '@testing-library/react-native';
import {MockTabNavigator} from './MockNavigator';
import {MainTabParamList} from 'screens/screenTypes';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

function getComponent() {
  const Tab = createBottomTabNavigator<MainTabParamList>();

  return (
    <MockTabNavigator>
      <Tab.Screen name="quiz" component={QuizMain} />
    </MockTabNavigator>
  );
}

describe('QuizMain test', () => {
  const component = getComponent();

  beforeEach(async () => {
    jest.useFakeTimers();
  });

  test('render QuizMain', () => {
    render(component);

    expect(screen).toMatchSnapshot();
    expect(screen).toBeTruthy();

    expect(screen.getByText('문제 시작')).toBeDefined();

    expect(screen.getByText('난이도 선택')).toBeDefined();
    expect(screen.getByText('easy')).toBeDefined();
    expect(screen.getByText('medium')).toBeDefined();
    expect(screen.getByText('hard')).toBeDefined();
    expect(screen.getByText('random')).toBeDefined();
  });
});
