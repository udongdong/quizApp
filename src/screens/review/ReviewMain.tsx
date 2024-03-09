import React from 'react';
import {ScrollView} from 'react-native';
import {useIsFocused} from '@react-navigation/native';
import {useQuery} from '@tanstack/react-query';
import {getMyQuiz} from '../../modules';
import {ReviewCard} from './ReviewCard';

export function ReviewMain(): React.JSX.Element {
  const isFocused = useIsFocused();

  const {data: reviewList} = useQuery({
    queryKey: ['FETCH_REVIEW'],
    queryFn: () => getMyQuiz(),
    staleTime: Infinity,
    enabled: isFocused,
  });

  return (
    <ScrollView>
      {reviewList?.map((q, i) => {
        return <ReviewCard key={i} {...q} />;
      })}
    </ScrollView>
  );
}
