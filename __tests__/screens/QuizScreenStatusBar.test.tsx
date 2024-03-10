import 'react-native';
import React from 'react';
import {
  QuizScreenStatusBar,
  QuizScreenStatusBarProps,
} from '../../src/screens/quiz/quizScreen/QuizScreenStatusBar';

import {render} from '@testing-library/react-native';

function getComponent(props: QuizScreenStatusBarProps): React.JSX.Element {
  return <QuizScreenStatusBar {...props} />;
}

describe('QuizScreenStatusBar test', () => {
  test('render QuizScreenStatusBar', () => {
    const props: QuizScreenStatusBarProps = {
      total: 0,
      current: 0,
      time: 100,
    };

    const rendered = render(getComponent(props));

    expect(rendered).toMatchSnapshot();
    expect(rendered).toBeTruthy();

    expect(rendered.getByText('01:40')).toBeDefined();
  });
});
