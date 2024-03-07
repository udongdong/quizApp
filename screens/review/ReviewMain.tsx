import React, {useState} from 'react';
import {ScrollView} from 'react-native';
import {Review} from '../../types/quiz';
import {getMyQuiz} from '../../modules/quiz/quizModules';
import HistoryCard from './ReviewCard';
import {useFocusEffect} from '@react-navigation/native';

export default function ReviewMain(): React.JSX.Element {
  const [quizHistoryList, setQuizHistoryList] = useState<Review[]>();

  useFocusEffect(
    React.useCallback(() => {
      const fetchingData = async () => {
        const result = await getMyQuiz();

        if (result !== undefined) {
          setQuizHistoryList(result);
        }
      };

      fetchingData();
    }, []),
  );

  return (
    <ScrollView>
      {quizHistoryList?.map(q => {
        return <HistoryCard {...q} />;
      })}
    </ScrollView>
  );
}
