import 'react-native';
import {getNewQuiz} from '../../src/modules';
import {fetchNewQuizResult} from '../../__mocks__/api.mock';

describe('quizModule test', () => {
  test('getNewQuiz test', async () => {
    const newQuiz = await getNewQuiz({});
    expect(newQuiz).toEqual(fetchNewQuizResult);
  });
});
