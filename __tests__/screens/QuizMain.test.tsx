import 'react-native';
import React from 'react';
import {QuizMain} from '../../src/screens';

import {render, RenderAPI} from '@testing-library/react-native';
import {MockStackNavigator} from './MockNavigator';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {MainStackParamList} from 'screens/screenTypes';

function getComponent() {
  const MainStack = createNativeStackNavigator<MainStackParamList>();

  return (
    <MockStackNavigator>
      <MainStack.Screen name="reviewDetail" component={QuizMain} />
    </MockStackNavigator>
  );
}

describe('QuizMain test', () => {
  let rendered: RenderAPI;

  beforeEach(() => {
    rendered = render(getComponent());
  });

  test('render QuizMain', () => {
    expect(rendered).toMatchSnapshot();
    expect(rendered).toBeTruthy();

    expect(rendered.getByText('문제 시작')).toBeDefined();

    expect(rendered.getByText('난이도 선택')).toBeDefined();
    expect(rendered.getByText('easy')).toBeDefined();
    expect(rendered.getByText('medium')).toBeDefined();
    expect(rendered.getByText('hard')).toBeDefined();
    expect(rendered.getByText('random')).toBeDefined();
  });
});
