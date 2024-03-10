import 'react-native';
import React from 'react';
import {ReviewMain} from '../../src/screens';

import {render, screen} from '@testing-library/react-native';
import {MockStackNavigator} from './MockNavigator';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {MainStackParamList} from 'screens/screenTypes';

function getComponent() {
  const MainStack = createNativeStackNavigator<MainStackParamList>();

  return (
    <MockStackNavigator>
      <MainStack.Screen name="reviewDetail" component={ReviewMain} />
    </MockStackNavigator>
  );
}

describe('ReviewMain test', () => {
  const component = getComponent();

  beforeEach(() => {
    // jest.useFakeTimers();
  });

  test('render ReviewMain', async () => {
    render(component);

    expect(screen).toMatchSnapshot();
    expect(screen).toBeTruthy();
  });
});
