import firestore from '@react-native-firebase/firestore';
import {Review} from '../../types';

export const firestoreBase = firestore();

export const fetchReviews = async (userId: string): Promise<Review[]> => {
  const res = await firestoreBase
    .collection('review')
    .where('id', '==', userId)
    .get();

  const data = res.docs.map(r => r.data());

  const result = data.map(t => {
    const date = t.date.toDate();
    return {...t, ...{date}};
  }) as Review[];

  return result;
};

export const postMyQuiz = async (quizData: Review) => {
  const res = await firestoreBase.collection('review').add(quizData);

  return res;
};
