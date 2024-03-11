import 'react-native';
import React from 'react';
import {QuizScreen} from '../../src/screens';

import {
  fireEvent,
  render,
  screen,
  waitFor,
} from '@testing-library/react-native';
import {MockStackNavigator} from './MockNavigator';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {MainStackParamList} from '../../src/screens/screenTypes';
import {fetchNewQuizResult} from '../../__mocks__/api.mock';

jest.mock('@react-navigation/native', () => ({
  ...jest.requireActual('@react-navigation/native'),
  useRoute: () => ({
    params: {
      quizList: fetchNewQuizResult,
    },
  }),
}));

function getComponent() {
  const MainStack = createNativeStackNavigator<MainStackParamList>();

  return (
    <MockStackNavigator>
      <MainStack.Screen name="quizScreen" component={QuizScreen} />
    </MockStackNavigator>
  );
}

describe('QuizScreen render test', () => {
  const component = getComponent();

  beforeEach(() => {
    jest.useFakeTimers();
  });

  test('render QuizScreen', () => {
    render(component);

    expect(screen).toMatchSnapshot();
    expect(screen).toBeTruthy();

    expect(
      screen.getByText('문제를 불러오고 있습니다. \n잠시만 기다려주세요'),
    ).toBeDefined();
  });

  test('render after call Quiz', async () => {
    render(component);

    await waitFor(() => {
      expect(
        screen.queryByText('문제를 불러오고 있습니다. \n잠시만 기다려주세요'),
      ).toBeNull();
    });

    expect(
      screen.getByText(
        `Q) Who is the last boss in Night In The Woods' Demontower minigame?`,
      ),
    ).toBeDefined();

    expect(screen.getByText(`The Blood Thief`)).toBeDefined();
    expect(screen.getByText(`Mega Hairball`)).toBeDefined();
    expect(screen.getByText(`King Skellie`)).toBeDefined();
    expect(screen.getByText(`Krampus`)).toBeDefined();
  });
});

describe('user action test', () => {
  const component = getComponent();

  beforeEach(async () => {
    jest.useFakeTimers();

    render(component);

    await waitFor(() => {
      expect(
        screen.queryByText('문제를 불러오고 있습니다. \n잠시만 기다려주세요'),
      ).toBeNull();
    });
  });

  test('click button before select answer', () => {
    fireEvent(screen.getByText('문제 제출'), 'onPress');

    expect(screen.getByText('문제 제출')).toBeDefined();
    expect(screen.queryByText('다음 문제 풀기')).toBeNull();
  });

  test('click button after select answer (정답 선택)', () => {
    fireEvent(screen.getByText('The Blood Thief'), 'onPress');
    fireEvent(screen.getByText('문제 제출'), 'onPress');

    expect(screen.queryByText('문제 제출')).toBeNull();
    expect(screen.getByText('다음 문제 풀기')).toBeDefined();
    expect(screen.getByText('The Blood Thief (정답)')).toBeDefined();
  });

  test('click button after select answer (오답 선택)', () => {
    fireEvent(screen.getByText('Krampus'), 'onPress');
    fireEvent(screen.getByText('문제 제출'), 'onPress');

    expect(screen.queryByText('문제 제출')).toBeNull();
    expect(screen.getByText('다음 문제 풀기')).toBeDefined();
    expect(screen.getByText('The Blood Thief (정답)')).toBeDefined();
  });

  test('click button Next Quiz', () => {
    fireEvent(screen.getByText('The Blood Thief'), 'onPress');
    fireEvent(screen.getByText('문제 제출'), 'onPress');
    fireEvent(screen.getByText('다음 문제 풀기'), 'onPress');

    expect(screen.queryByText('문제 제출')).toBeDefined();
    expect(screen.queryByText('다음 문제 풀기')).toBeNull();
  });
});

describe('render after solve all quiz', () => {
  const component = getComponent();

  beforeEach(async () => {
    jest.useFakeTimers();

    render(component);

    await waitFor(() => {
      expect(
        screen.queryByText('문제를 불러오고 있습니다. \n잠시만 기다려주세요'),
      ).toBeNull();
    });

    for (let i = 0; i < 9; i++) {
      fireEvent(screen.getByTestId('1'), 'onPress');
      fireEvent(screen.getByText('문제 제출'), 'onPress');
      fireEvent(screen.getByText('다음 문제 풀기'), 'onPress');
    }
  });

  test('show quiz finish message', () => {
    expect(
      screen.queryByText('퀴즈가 끝났습니다. 결과 화면으로 이동해 주세요'),
    ).toBeDefined();

    expect(
      screen.queryByText(
        '⚠️ 다시 풀기의 경우 문제 푼 내역이 저장되지 않습니다.',
      ),
    ).toBeDefined();

    expect(
      screen.queryByText(
        '⚠️ 다시 풀기의 경우 문제 푼 내역이 저장되지 않습니다.',
      ),
    ).toBeDefined();
  });

  test('show go to result screen button', () => {
    expect(screen.queryByText('결과 화면으로 이동')).toBeDefined();
  });
});
