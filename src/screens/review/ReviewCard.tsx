import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {Review} from '../../types';
import {Space, Button} from '../../components';
import {formatNumberToTime} from '../../utils';
import {MainStackNavigationProp} from '../screenTypes';
import {color} from '../../styles';

export function ReviewCard(props: Review): React.JSX.Element {
  const {date, quizList, time} = props;

  const navigation = useNavigation<MainStackNavigationProp>();

  const correctCount = quizList.filter(q => q.selected === q.correct).length;
  const quizCount = quizList.length;
  const formatedTime = formatNumberToTime(time);

  const goDetail = () => {
    navigation.navigate('reviewDetail', {quizList});
  };

  const goQuiz = () => {
    const newQuizList = quizList.map(q => {
      return {...q, ...{selected: ''}};
    });
    navigation.navigate('quizScreen', {quizList: newQuizList});
  };

  return (
    <View style={styles.container}>
      <Text>{`${date.toDateString()}`}</Text>
      <Space h={10} />

      <Text>{`정답수 : ${correctCount} / 문항수 : ${quizCount} (정답률 : ${
        (correctCount / quizCount) * 100
      }%)`}</Text>
      <Space h={10} />

      <Text>{`소요시간 : ${formatedTime}`}</Text>

      <Space h={10} />

      <View style={styles.buttionContainer}>
        <Button style={styles.button} onPress={goDetail} title={'리뷰'} />

        <Button
          style={styles.button}
          onPress={goQuiz}
          title={'다시 풀기'}
          type={'secondary'}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: color.gray,
    margin: 7,
    padding: 10,
    borderRadius: 7,
  },
  buttionContainer: {
    flexDirection: 'row',
  },
  button: {
    flex: 1,
    borderRadius: 10,
    margin: 4,
  },
});
