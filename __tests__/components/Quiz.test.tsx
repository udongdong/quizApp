import 'react-native';
import React from 'react';
import {Quiz, QuizProps} from '../../src/components';

import {render, RenderAPI} from '@testing-library/react-native';

function getComponent(props: QuizProps) {
  return <Quiz {...props} />;
}

describe('Quiz Component test (퀴즈 모드)', () => {
  let rendered: RenderAPI;

  beforeEach(() => {
    const props: QuizProps = {
      question: 'In Yu-Gi-Oh, how does a player perform an Xyz Summon?',
      answers: [
        `Banish A Number of Monsters From Your Hand And Deck`,
        `Add the Monsters' Levels Together to Match the Xyz Monster`,
        `Overlay at least 2 Monsters of the Same Level`,
        `Activate a Spell and Send Monsters to the Graveyard`,
      ],
      difficulty: 'medium',
      correct: 'Overlay at least 2 Monsters of the Same Level',
      isDone: false,
    };

    rendered = render(getComponent(props));
  });

  test('render Quiz Component (퀴즈 모드)', () => {
    expect(rendered).toMatchSnapshot();
    expect(rendered).toBeTruthy();
  });

  test('question 이 잘 세팅된다.', () => {
    expect(
      rendered.getByText(
        'Q) In Yu-Gi-Oh, how does a player perform an Xyz Summon?',
      ),
    ).toBeDefined();
  });

  test('난이도에 맞는 뱃지가 잘 세팅된다.', () => {
    expect(rendered.getByText('medium')).toBeDefined();
  });
});

describe('Quiz Component test (리뷰 모드)', () => {
  let rendered: RenderAPI;

  beforeEach(() => {
    const props: QuizProps = {
      question: 'In Yu-Gi-Oh, how does a player perform an Xyz Summon?',
      answers: [
        'Banish A Number of Monsters From Your Hand And Deck',
        `Add the Monsters' Levels Together to Match the Xyz Monster`,
        'Overlay at least 2 Monsters of the Same Level',
        'Activate a Spell and Send Monsters to the Graveyard',
      ],
      difficulty: 'medium',
      correct: 'Overlay at least 2 Monsters of the Same Level',
      selected: 'Banish A Number of Monsters From Your Hand And Deck',
      isDone: true,
    };

    rendered = render(getComponent(props));
  });

  test('render Quiz Component (리뷰 모드)', () => {
    expect(rendered).toMatchSnapshot();
    expect(rendered).toBeTruthy();
  });

  test('정답 표시가 잘 세팅된다.', () => {
    expect(
      rendered.getByText(
        'Overlay at least 2 Monsters of the Same Level (정답)',
      ),
    ).toBeDefined();
  });

  test('난이도에 맞는 뱃지가 잘 세팅된다.', () => {
    expect(rendered.getByText('medium')).toBeDefined();
  });
});
