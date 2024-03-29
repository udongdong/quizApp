import 'react-native';
import React from 'react';
import {ReviewDetail} from '../../src/screens';

import {render} from '@testing-library/react-native';
import {MockStackNavigator} from './MockNavigator';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {MainStackParamList} from 'screens/screenTypes';

jest.mock('@react-navigation/native', () => ({
  ...jest.requireActual('@react-navigation/native'),
  useRoute: () => ({
    params: {
      quizList: undefined,
    },
  }),
}));

function getComponent() {
  const MainStack = createNativeStackNavigator<MainStackParamList>();

  return (
    <MockStackNavigator>
      <MainStack.Screen name="reviewDetail" component={ReviewDetail} />
    </MockStackNavigator>
  );
}

describe('ReviewDetail test', () => {
  const component = getComponent();

  test('render ReviewDetail', () => {
    const rendered = render(component);
    expect(rendered).toMatchSnapshot();
    expect(rendered).toBeTruthy();
  });
});
