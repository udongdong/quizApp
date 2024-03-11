import 'react-native';
import React from 'react';
import {ReviewMain} from '../../src/screens';

import {render, screen} from '@testing-library/react-native';
import {MockTabNavigator} from './MockNavigator';
import {MainTabParamList} from '../../src/screens/screenTypes';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

function getComponent() {
  const Tab = createBottomTabNavigator<MainTabParamList>();

  return (
    <MockTabNavigator>
      <Tab.Screen name="review" component={ReviewMain} />
    </MockTabNavigator>
  );
}

describe('ReviewMain test', () => {
  const component = getComponent();

  beforeEach(async () => {
    jest.useFakeTimers();
  });

  test('render ReviewMain', async () => {
    render(component);

    expect(screen).toMatchSnapshot();
    expect(screen).toBeTruthy();
  });
});
