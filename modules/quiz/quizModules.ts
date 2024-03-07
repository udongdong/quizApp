import {fetchNewQuiz, fetchNewQuizWithDifficulty} from '../../api/quiz/quizApi';
import {fetchReviews, postMyQuiz} from '../../firebase/quiz/quizStore';
import {Difficulty, Quiz} from '../../types/quiz';
import {decodedHtmlEntity, suffle} from '../../util';
import {getUserId} from '../user/userModules';

type GetNewQuizParams = {
  difficulty: Difficulty;
};

export const getNewQuiz = async (
  params?: GetNewQuizParams,
): Promise<Quiz[]> => {
  try {
    const func =
      params !== undefined
        ? async () => await fetchNewQuizWithDifficulty(params?.difficulty)
        : async () => await fetchNewQuiz();

    const {results} = await func();

    return results.map(q => {
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
  } catch (e) {
    console.log(e.message);
  }

  return [];
};

export const getMyQuiz = async () => {
  try {
    const userId = await getUserId();

    const result = await fetchReviews(userId);

    return result.map(r => {
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
      const {id, ...rest} = r;
      return rest;
    });
  } catch (e) {
    console.log(e);
  }
};

type UpdateMyQuizParams = {
  quizList: Quiz[];
  time: number;
};

export const updateMyQuiz = async (params: UpdateMyQuizParams) => {
  try {
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
  } catch (e) {
    console.log(e);
  }
};
