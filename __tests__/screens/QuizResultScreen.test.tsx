import 'react-native';
import React from 'react';
import {QuizResultScreen} from '../../src/screens';

import {render} from '@testing-library/react-native';
import {MockStackNavigator} from './MockNavigator';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {MainStackParamList} from 'screens/screenTypes';

jest.mock('@react-navigation/native', () => ({
  ...jest.requireActual('@react-navigation/native'),
  useRoute: () => ({
    params: {
      correct: 1,
      total: 10,
      time: 145,
    },
  }),
}));

function getComponent() {
  const MainStack = createNativeStackNavigator<MainStackParamList>();

  return (
    <MockStackNavigator>
      <MainStack.Screen name="quizResultScreen" component={QuizResultScreen} />
    </MockStackNavigator>
  );
}

describe('QuizResultScreen test', () => {
  const component = getComponent();

  test('render QuizResultScreen', () => {
    const rendered = render(component);
    expect(rendered).toMatchSnapshot();
    expect(rendered).toBeTruthy();
  });
});
