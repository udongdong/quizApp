import firestore from '@react-native-firebase/firestore';
import {Review} from '../../types/quiz';

export const firestoreBase = firestore();

type QuizDto = {
  id: string;
} & Review;

export const fetchReviews = async (userId: string): Promise<QuizDto[]> => {
  try {
    const res = await firestoreBase
      .collection('quiz')
      .where('id', '==', userId)
      .get();

    const data = res.docs.map(r => r.data());
    const quizDto = data.map(t => {
      const date = t.date;
      return {...t, ...{date: date.toDate()}};
    }) as QuizDto[];

    return quizDto;
  } catch (e) {
    console.log(e);
  }

  return [];
};

export const postMyQuiz = async (quizData: QuizDto) => {
  try {
    const res = await firestoreBase.collection('quiz').add(quizData);

    return res;
  } catch (e) {
    console.log(e);
  }
};

export const fetchTest = async () => {
  try {
    const res = await firestoreBase
      .collection('test')
      .where('id', '==', '1')
      .get();

    return res;
  } catch (e) {
    console.log(e);
  }
};
