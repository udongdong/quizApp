import {fetchNewQuiz} from '../../api';
import {fetchReviews, postMyQuiz} from '../../firebase';
import {Difficulty, Quiz} from 'types';
import {decodedHtmlEntity, suffle} from '../../utils';
import {getUserId} from '../../modules';

type GetNewQuizParams = {
  difficulty?: Difficulty;
};

export const getNewQuiz = async (params: GetNewQuizParams): Promise<Quiz[]> => {
  const result = await fetchNewQuiz(params.difficulty);

  return result.data.results.map(q => {
    const {
      question = '',
      correct_answer = '',
      incorrect_answers = [],
      difficulty = 'easy',
    } = q;
    const correct = decodedHtmlEntity(correct_answer);
    const incorrect = incorrect_answers.map(i => decodedHtmlEntity(i));
    const answers = suffle([...[correct], ...incorrect]);
    return {
      question: decodedHtmlEntity(question),
      correct: correct,
      difficulty,
      answers,
    };
  });
};

export const getMyQuiz = async () => {
  const userId = await getUserId();

  return await fetchReviews(userId);
};

type UpdateMyQuizParams = {
  quizList: Quiz[];
  time: number;
};

export const updateMyQuiz = async (params: UpdateMyQuizParams) => {
  const {quizList, time} = params;
  const userId = await getUserId();

  const req = {
    id: userId,
    date: new Date(),
    quizList,
    time,
  };

  const result = await postMyQuiz(req);

  return result;
};
