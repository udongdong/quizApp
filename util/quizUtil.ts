import {QuizAnswer} from '../types/quiz';

export const makeAnswerList = (prop: {
  correct: string;
  incorrect: string[];
}): QuizAnswer[] => {
  const {correct, incorrect} = prop;
  const correctAnswer: QuizAnswer = {answer: correct, correct: true};
  const incorrectAnswer: QuizAnswer[] = incorrect.map((i: string) => {
    return {answer: i, correct: false};
  });

  return [...[correctAnswer], ...incorrectAnswer].sort(
    () => Math.random() - 0.5,
  );
};

export const suffle = <T>(arr: T[]) => {
  return arr.sort(() => Math.random() - 0.5);
};
