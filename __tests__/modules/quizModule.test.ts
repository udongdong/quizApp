import 'react-native';
import {getNewQuiz} from '../../src/modules';
import {fetchNewQuizResult} from '../../__mocks__/api.mock';

describe('quizModule test', () => {
  test('getNewQuiz test', async () => {
    const news = await getNewQuiz({});
    expect(news).toEqual(fetchNewQuizResult);
  });
});
