import React from 'react';
import {ScrollView, Text, StyleSheet, View} from 'react-native';
import {useIsFocused} from '@react-navigation/native';
import {useQuery} from '@tanstack/react-query';
import {getMyQuiz} from '../../modules';
import {ReviewCard} from './ReviewCard';
import {color} from '../../styles';

export function ReviewMain(): React.JSX.Element {
  const isFocused = useIsFocused();

  const {data: reviewList, isFetching} = useQuery({
    queryKey: ['FETCH_REVIEW'],
    queryFn: () => getMyQuiz(),
    staleTime: Infinity,
    enabled: isFocused,
  });

  return isFetching ? (
    <View style={styles.container}>
      <Text style={styles.Text}>{'리뷰 정보를 불러오고 있습니다.'}</Text>
    </View>
  ) : reviewList?.length === 0 ? (
    <View style={styles.container}>
      <Text style={styles.Text}>{'리뷰 정보가 없습니다.'}</Text>
    </View>
  ) : (
    <ScrollView>
      {reviewList?.map((q, i) => {
        return <ReviewCard key={i} {...q} />;
      })}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  Text: {
    textAlign: 'center',
    margin: 10,
    fontSize: 22,
    color: color.primary,
  },
});
