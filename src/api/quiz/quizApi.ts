import {AxiosResponse} from 'axios';
import {Difficulty} from '../../types';
import {apiBase} from '../apiBase';

export type QuizRes = {
  response_code: number;
  results: {
    type: string;
    difficulty: Difficulty;
    category: string;
    question: string;
    correct_answer: string;
    incorrect_answers: string[];
  }[];
};

export const fetchNewQuiz = async (
  difficulty?: Difficulty,
): Promise<QuizRes> => {
  const res = await apiBase.get('https://opentdb.com/api.php', {
    params: {
      amount: 10,
      type: 'multiple',
      difficulty,
    },
  });

  return res.data;
};
